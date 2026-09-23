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
  printf 'Put the %s videos here, named:\n  l1-glp.mp4\n  l1-characteristics.mp4\n  l2-moment.mp4\n  l3-moment.mp4\n  l4-moment.mp4\n  l5-godo.mp4\n  course-intro.mp4 (optional)\nOptional per video: <id>.jpg poster, <id>.vtt captions.\nIf a language folder is empty the course falls back to en/, then to the placeholder.\n' "$L" > "$DIST/assets/video/$L/PUT-VIDEOS-HERE.txt"
done
cp assets/video/README.md "$DIST/assets/video/README.md"
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
