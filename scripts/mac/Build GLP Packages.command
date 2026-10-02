#!/bin/bash
# Double-click this on a Mac. It takes the per-language SCORM package zips and the folder of
# exported videos (for example the Google Drive download), puts each video inside the right
# language package under assets/video/<language>/, and writes upload-ready zips (no .DS_Store).
#
# You pick two folders:
#   1. the folder that holds the package zips (the-great-leader-profile-...-scorm12-<lang>.zip)
#   2. the folder that holds the videos (subfolders are searched too)
# Finished zips land in a "with-videos" folder next to the packages.
#
# Videos are matched by their exported names. A language prefix ("ZH-CN - ", "FR - ", "IW - ", ...)
# or the name of the folder the file sits in picks the language; no prefix means English.
# "(1)", "(2)" copy suffixes are ignored and the largest copy of each video is used.
#
# Terminal use (no dialogs):  "Build GLP Packages.command" <packages-folder> <videos-folder> [<output-folder>]
# If macOS blocks the double-click the first time, right-click the file and choose Open.

PKG="${1:-}"; VID="${2:-}"; OUT="${3:-}"
if [ -z "$PKG" ]; then
  PKG=$(osascript -e 'POSIX path of (choose folder with prompt "1 of 2: choose the folder that holds the SCORM package zips")' 2>/dev/null)
fi
if [ -z "$PKG" ]; then echo "No package folder chosen."; exit 0; fi
if [ -z "$VID" ]; then
  VID=$(osascript -e 'POSIX path of (choose folder with prompt "2 of 2: choose the folder that holds the exported videos")' 2>/dev/null)
fi
if [ -z "$VID" ]; then echo "No video folder chosen."; exit 0; fi
PKG="${PKG%/}"; VID="${VID%/}"; OUT="${OUT:-$PKG/with-videos}"; OUT="${OUT%/}"

finish() { echo; [ -t 0 ] && [ -z "$1" ] && read -r -p "Press Enter to close." _; exit "${2:-0}"; }

ZIPS=$(find "$PKG" -maxdepth 1 -type f -iname '*.zip' ! -path "$OUT/*" | sort)
if [ -z "$ZIPS" ]; then echo "No .zip files found in $PKG"; finish "" 1; fi

# ---------- classify every video: language, slot, size ----------
lang_of() {  # prefix or folder name -> language code
  case "$(printf '%s' "$1" | tr '[:lower:]' '[:upper:]' | tr -d ' ')" in
    ''|EN|ENGLISH) echo en;;  ZH-CN|ZH-HANS|ZHCN|ZHHANS|CN|SIMPLIFIED) echo zh-Hans;;  ZH-TW|ZH-HANT|ZHTW|ZHHANT|TW|TRADITIONAL) echo zh-Hant;;
    FR|FRENCH) echo fr;;  DE|GERMAN) echo de;;  IW|HE|HEBREW) echo he;;  MS|MALAY) echo ms;;  JA|JP|JAPANESE) echo ja;;  KO|KR|KOREAN) echo ko;;
    *) echo "";;
  esac
}
slot_of() {  # title -> video id
  k=$(printf '%s' "$1" | tr '[:upper:]' '[:lower:]' | tr -c 'a-z0-9 \n-' ' ')
  case "$k" in
    *"great leader profile"*|*"unlocking leadership"*) echo l1-glp;;
    *"characteristics"*) echo l1-characteristics;;
    *"collaboration under pressure"*|*"under pressure"*) echo l2-moment;;
    *"letting go"*|*"right level"*) echo l3-moment;;
    *"reinforce"*|*"reclaim"*) echo l4-moment;;
    *"go-do"*|*"go do"*) echo l5-godo;;
    *"course intro"*|*"introduction"*) echo course-intro;;
    *) echo "";;
  esac
}
TMP=$(mktemp -d "${TMPDIR:-/tmp}/glp-build.XXXXXX")
trap 'rm -rf "$TMP"' EXIT
LIST="$TMP/videos.tsv"; : > "$LIST"
find "$VID" -type f \( -iname '*.mp4' -o -iname '*.webm' -o -iname '*.m4v' -o -iname '*.mov' \) ! -name '._*' ! -name '.*' ! -path '*/__MACOSX/*' -print | sort | while IFS= read -r f; do
  name=$(basename "$f"); base="${name%.*}"; ext=$(printf '%s' "${name##*.}" | tr '[:upper:]' '[:lower:]')
  base=$(printf '%s' "$base" | sed -E 's/ *\([0-9]+\) *$//')
  prefix=$(printf '%s' "$base" | sed -nE 's/^([A-Za-z]{2}(-[A-Za-z]{2,4})?) +- +.*$/\1/p')
  title="$base"; lang=""
  if [ -n "$prefix" ] && [ -n "$(lang_of "$prefix")" ]; then
    lang=$(lang_of "$prefix"); title=$(printf '%s' "$base" | sed -E 's/^[A-Za-z]{2}(-[A-Za-z]{2,4})? +- +//')
  fi
  if [ -z "$lang" ]; then lang=$(lang_of "$(basename "$(dirname "$f")")"); fi
  [ -z "$lang" ] && lang=en
  slot=$(slot_of "$title")
  size=$(wc -c < "$f" | tr -d ' ')
  printf '%s\t%s\t%s\t%s\t%s\n' "$lang" "${slot:-?}" "$size" "$ext" "$f" >> "$LIST"
done
# largest copy per language+slot wins
sort -t "$(printf '\t')" -k1,1 -k2,2 -k3,3nr "$LIST" | awk -F '\t' '$2!="?" && !seen[$1 FS $2]++' > "$TMP/chosen.tsv"
awk -F '\t' '$2=="?"' "$LIST" > "$TMP/unknown.tsv"

mkdir -p "$OUT"
echo "Packages:  $PKG"; echo "Videos:    $VID"; echo "Output:    $OUT"; echo
TOTAL=0
echo "$ZIPS" | while IFS= read -r Z; do
  W="$TMP/pkg"; rm -rf "$W"; mkdir -p "$W"
  unzip -q "$Z" -d "$W" || { echo "Could not unzip $Z"; continue; }
  if [ ! -f "$W/imsmanifest.xml" ]; then echo "Skipping $(basename "$Z") (no imsmanifest.xml at top level)"; continue; fi
  L=$(sed -nE "s/.*defaultLang: *'([^']+)'.*/\1/p" "$W/js/config.js" 2>/dev/null | head -1)
  LOCK=$(grep -c 'lockLang: *true' "$W/js/config.js" 2>/dev/null)
  if [ -z "$L" ] || [ "${LOCK:-0}" = "0" ]; then LANGS="en zh-Hans zh-Hant fr de he ms ja ko"; LABEL="all languages"; else LANGS="$L"; LABEL="$L"; fi
  echo "== $(basename "$Z")  [$LABEL]"
  ADDED=""; N=0
  for lang in $LANGS; do
    DEST="$W/assets/video/$lang"; mkdir -p "$DEST"
    case "$lang" in en) P="";; zh-Hans) P="ZH-CN - ";; zh-Hant) P="ZH-TW - ";; fr) P="FR - ";; de) P="DE - ";; he) P="IW - ";; ms) P="MS - ";; ja) P="JA - ";; ko) P="KO - ";; esac
    for slot in l1-glp l1-characteristics l2-moment l3-moment l4-moment l5-godo course-intro; do
      row=$(awk -F '\t' -v l="$lang" -v s="$slot" '$1==l && $2==s' "$TMP/chosen.tsv" | head -1)
      if [ -z "$row" ]; then [ "$slot" != course-intro ] && echo "   $lang/$slot: no video found"; continue; fi
      src=$(printf '%s' "$row" | cut -f5); ext=$(printf '%s' "$row" | cut -f4); size=$(printf '%s' "$row" | cut -f3)
      name=$(basename "$src")
      # keep the exported name when it carries this language's prefix (or is English without one);
      # otherwise use the short id so the course finds it in this folder.
      case "$name" in "$P"*) [ -n "$P" ] || case "$name" in [A-Za-z][A-Za-z]" - "*|[A-Za-z][A-Za-z]-[A-Za-z]*" - "*) name="$slot.$ext";; esac;; *) name="$slot.$ext";; esac
      if [ -f "$DEST/PUT-VIDEOS-HERE.txt" ]; then rm -f "$DEST/PUT-VIDEOS-HERE.txt"; sed -i '' "\|assets/video/$lang/PUT-VIDEOS-HERE.txt|d" "$W/imsmanifest.xml" 2>/dev/null || sed -i "\|assets/video/$lang/PUT-VIDEOS-HERE.txt|d" "$W/imsmanifest.xml"; fi
      cp "$src" "$DEST/$name"
      ADDED="$ADDED      <file href=\"assets/video/$lang/$name\"/>
"
      N=$((N+1)); printf '   %-8s %-18s <- %s (%d MB)\n' "$lang" "$slot" "$(basename "$src")" "$((size/1048576))"
    done
  done
  if [ -n "$ADDED" ]; then
    printf '%s' "$ADDED" > "$TMP/added.xml"
    ADDED_FILE="$TMP/added.xml" perl -0pi -e 'BEGIN{local $/; open F,"<",$ENV{ADDED_FILE}; $a=<F>; close F; $a=~s/\n$//} s|(\n\s*</resource>)|\n$a$1|' "$W/imsmanifest.xml" 2>/dev/null
  fi
  ( cd "$W" && find . \( -name '.DS_Store' -o -name '._*' \) -delete )
  ZN=$(basename "$Z" .zip); FINAL="$OUT/$ZN-with-videos.zip"; rm -f "$FINAL"
  ( cd "$W" && zip -r -X -q "$FINAL" . -x '*.DS_Store' '__MACOSX/*' )
  echo "   -> $(basename "$FINAL")  ($N videos, $(du -h "$FINAL" | cut -f1 | tr -d ' '))"
done
if [ -s "$TMP/unknown.tsv" ]; then
  echo; echo "These videos were not recognised and were left out (rename them to one of the exported titles):"
  cut -f5 "$TMP/unknown.tsv" | sed 's/^/   /'
fi
echo; echo "Done. Upload the zips in: $OUT"
finish
