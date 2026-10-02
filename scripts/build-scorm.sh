#!/usr/bin/env bash
# Package the course as a SCORM 1.2 zip.
# Usage: scripts/build-scorm.sh [path/to/videos] [--lang <code>]
#   If a video folder is given, its contents are copied into assets/video/ inside the package.
#   Otherwise whatever is already in assets/video/ is used.
#   --lang fr  builds a single-language package: opens in French, dropdown hidden, only fr/ video folder.
set -euo pipefail
cd "$(dirname "$0")/.."

VIDEO_SRC=""; LANG_ONLY=""
while [ $# -gt 0 ]; do
  case "$1" in
    --lang) LANG_ONLY="$2"; shift 2;;
    *) VIDEO_SRC="$1"; shift;;
  esac
done
DIST="dist/scorm${LANG_ONLY:+-$LANG_ONLY}"
OUT="dist/the-great-leader-profile-daily-leadership-at-entegris-scorm12${LANG_ONLY:+-$LANG_ONLY}.zip"
lang_name() { case "$1" in en) echo "English";; zh-Hans) echo "简体中文";; zh-Hant) echo "繁體中文";; fr) echo "Français";; de) echo "Deutsch";; he) echo "עברית";; ms) echo "Bahasa Melayu";; ja) echo "日本語";; ko) echo "한국어";; esac; }

rm -rf "$DIST" && mkdir -p "$DIST/assets/video" "$DIST/assets/docs" dist
cp launch.html index.html imsmanifest.xml "$DIST/"
cp -r css js "$DIST/"
cp assets/entegris-logo.png "$DIST/assets/"
[ -d assets/docs ] && cp assets/docs/* "$DIST/assets/docs/" 2>/dev/null || true
# Language folders with a note inside, so the unzipped package shows where each video goes.
if [ -n "$LANG_ONLY" ]; then
  printf "window.ENTG_CONFIG = { defaultLang: '%s', lockLang: true };\n" "$LANG_ONLY" > "$DIST/js/config.js"
  NAME="$(lang_name "$LANG_ONLY")"
  python3 - "$DIST/imsmanifest.xml" "$LANG_ONLY" "$NAME" <<'PY'
import sys
path, code, name = sys.argv[1:4]
s = open(path, encoding='utf-8').read()
s = s.replace('identifier="com.entegris.glp.daily-leadership"', 'identifier="com.entegris.glp.daily-leadership.%s"' % code)
s = s.replace('<title>The Great Leader Profile: Daily Leadership at Entegris</title>', '<title>The Great Leader Profile: Daily Leadership at Entegris (%s)</title>' % name)
open(path, 'w', encoding='utf-8').write(s)
PY
  LANG_LIST="$LANG_ONLY"
else
  LANG_LIST="en zh-Hans zh-Hant fr de he ms ja ko"
fi
for L in $LANG_LIST; do
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
cat > "$DIST/READ-ME-FIRST.txt" <<'TXT'
The Great Leader Profile: Daily Leadership at Entegris (SCORM 1.2)

1. Copy the videos into assets/video/<language>/ with their exported names unchanged, for example
   "FR - Six GLP Characteristics.mp4" into assets/video/fr/.
2. Zip the CONTENTS of this folder so imsmanifest.xml sits at the top level of the zip.

   SumTotal rejects zips that contain hidden macOS files (.DS_Store). Finder's "Compress" adds them,
   so on a Mac zip from Terminal. Open Terminal, cd into this folder, and run these two lines:

     find . -name '.DS_Store' -delete
     zip -r -X ../GLP-course.zip . -x '*.DS_Store'

   On Windows, open the folder, select all, right-click, Send to > Compressed (zipped) folder.

3. Upload the zip to the LMS.
TXT
SRC_DIR="${VIDEO_SRC:-assets/video}"
if [ -d "$SRC_DIR" ]; then
  # Copies videos from the folder root and from language subfolders (en/, ja/, ...), keeping the structure.
  ( cd "$SRC_DIR" && find . -type f ${LANG_ONLY:+\( -path "./$LANG_ONLY/*" -o -maxdepth 1 \)} \( -iname '*.mp4' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.vtt' -o -iname '*.webm' \) -print0 ) \
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
( cd "$DIST" && python3 -m zipfile -c "$OLDPWD/$OUT" . )
COUNT=$(find "$DIST/assets/video" -type f | wc -l | tr -d ' ')
echo "Packaged $OUT ($COUNT media files)"
