#!/usr/bin/env bash
# Package the course as a SCORM 1.2 zip.
# Usage: scripts/build-scorm.sh [path/to/videos]
#   If a video folder is given, its contents are copied into assets/video/ inside the package.
#   Otherwise whatever is already in assets/video/ is used.
set -euo pipefail
cd "$(dirname "$0")/.."

VIDEO_SRC="${1:-}"
DIST="dist/scorm"
OUT="dist/the-great-leader-profile-daily-leadership-at-entegris-scorm12.zip"

rm -rf "$DIST" && mkdir -p "$DIST/assets/video" "$DIST/assets/docs" dist
cp launch.html index.html imsmanifest.xml "$DIST/"
cp -r css js "$DIST/"
cp assets/entegris-logo.png "$DIST/assets/"
[ -d assets/docs ] && cp assets/docs/* "$DIST/assets/docs/" 2>/dev/null || true
# Language folders with a note inside, so the unzipped package shows where each video goes.
for L in en zh-Hans zh-Hant fr de he ms ja ko; do
  mkdir -p "$DIST/assets/video/$L"
  case "$L" in en) P="";; zh-Hans) P="ZH-CN - ";; zh-Hant) P="ZH-TW - ";; fr) P="FR - ";; de) P="DE - ";; he) P="IW - ";; ms) P="MS - ";; ja) P="JA - ";; ko) P="KO - ";; esac
  printf 'Put the %s videos here. Keep the exported file names, for example:
  %sUnlocking Leadership Potential_ The Entegris Great Leader Profile.mp4
  %sSix GLP Characteristics.mp4
  %sLeadership Moment_ Collaboration Under Pressure.mp4
  %sLeadership Moment_ Letting Go at the Right Level.mp4
  %sLeadership Moment_ Reinforce or Reclaim_.mp4
  %sThree Go-Do Actions.mp4
Copy suffixes like " (2)" are fine. The short ids (l1-glp.mp4, l2-moment.mp4, ...) also work.
If this folder is empty the course falls back to en/, then to the placeholder.
' "$L" "$P" "$P" "$P" "$P" "$P" "$P" > "$DIST/assets/video/$L/PUT-VIDEOS-HERE.txt"
done
cp assets/video/README.md "$DIST/assets/video/README.md"
# Rename tool at the package root: after dropping videos into assets/video/<lang>/, run it once.
mkdir -p "$DIST/tools" && cp scripts/sort-videos.py "$DIST/tools/sort-videos.py"
cat > "$DIST/RENAME-VIDEOS.command" <<'CMD'
#!/bin/bash
# macOS: double-click after copying videos into assets/video/<language>/. Windows: see RENAME-VIDEOS.bat.
cd "$(dirname "$0")" && python3 tools/sort-videos.py --in-place assets/video
echo; read -p "Done. Press Enter to close." _
CMD
chmod +x "$DIST/RENAME-VIDEOS.command"
printf '@echo off\r\ncd /d "%%~dp0"\r\npython tools\\sort-videos.py --in-place assets\\video\r\npause\r\n' > "$DIST/RENAME-VIDEOS.bat"
cat > "$DIST/READ-ME-FIRST.txt" <<'TXT'
The Great Leader Profile: Daily Leadership at Entegris (SCORM 1.2)

1. Copy each language's videos into assets/video/<language>/ with their exported names unchanged:
     en       Six GLP Characteristics (1).mp4, Leadership Moment_ Reinforce or Reclaim_ (2).mp4, ...
     zh-Hans  ZH-CN - ...      zh-Hant  ZH-TW - ...      fr  FR - ...      de  DE - ...
     he       IW - ...         ms       MS - ...         ja  JA - ...      ko  KO - ...
   Each language folder needs one copy of each of the six videos. Extra "(1)" "(3)" copies of the
   same video only add size; keep one.
2. Zip the CONTENTS of this folder (imsmanifest.xml must be at the top level of the zip) and upload.

Optional: RENAME-VIDEOS.command (Mac) / .bat (Windows) renames files to short ids and sets aside
duplicate copies. Not required; the course recognises the exported names as they are.
TXT
SRC_DIR="${VIDEO_SRC:-assets/video}"
if [ -d "$SRC_DIR" ]; then
  # Copies <id>.mp4/.jpg/.vtt from the folder root and from language subfolders (en/, ja/, ...), keeping the structure.
  ( cd "$SRC_DIR" && find . -type f \( -iname '*.mp4' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.vtt' -o -iname '*.webm' \) -print0 ) \
    | ( cd "$SRC_DIR" && xargs -0 -I{} sh -c 'mkdir -p "$0/$(dirname "{}")" && cp "{}" "$0/{}"' "$OLDPWD/$DIST/assets/video" )
fi

# Add every media file to the manifest's resource list.
MEDIA=$(cd "$DIST" && find assets/video assets/docs -type f | sort | sed 's|.*|      <file href="&"/>|')
if [ -n "$MEDIA" ]; then
  python3 - "$DIST/imsmanifest.xml" "$MEDIA" <<'PY'
import sys
path, media = sys.argv[1], sys.argv[2]
s = open(path, encoding='utf-8').read()
marker = '      <!-- Video, poster, and caption files are added to this list by scripts/build-scorm.sh at package time. -->'
s = s.replace(marker, media)
open(path, 'w', encoding='utf-8').write(s)
PY
fi

rm -f "$OUT"
( cd "$DIST" && python3 -m zipfile -c "../../$OUT" . )
COUNT=$(find "$DIST/assets/video" -type f | wc -l | tr -d ' ')
echo "Packaged $OUT ($COUNT media files)"
