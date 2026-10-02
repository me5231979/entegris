#!/bin/bash
# Double-click this on a Mac. It asks you to pick the unzipped package folder (the one that
# contains imsmanifest.xml), removes the hidden .DS_Store files macOS adds, and writes a clean
# zip next to that folder, ready for SumTotal. If macOS blocks it the first time, right-click
# the file and choose Open.
FOLDER=$(osascript -e 'POSIX path of (choose folder with prompt "Choose the unzipped SCORM package folder (it contains imsmanifest.xml)")' 2>/dev/null)
if [ -z "$FOLDER" ]; then echo "No folder chosen."; exit 0; fi
FOLDER="${FOLDER%/}"
if [ ! -f "$FOLDER/imsmanifest.xml" ]; then
  echo "That folder has no imsmanifest.xml at its top level. Pick the folder that contains it."
  read -r -p "Press Enter to close." _; exit 1
fi
NAME=$(basename "$FOLDER")
OUT="$(dirname "$FOLDER")/$NAME.zip"
cd "$FOLDER" || exit 1
find . -name '.DS_Store' -delete
find . -name '._*' -delete
rm -f "$OUT"
zip -r -X -q "$OUT" . -x '*.DS_Store' '__MACOSX/*'
echo
echo "Done. Upload this file to SumTotal:"
echo "  $OUT"
echo
read -r -p "Press Enter to close." _
