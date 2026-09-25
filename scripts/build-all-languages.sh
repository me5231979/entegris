#!/usr/bin/env bash
# Builds one single-language SCORM package per language into dist/.
set -euo pipefail
cd "$(dirname "$0")/.."
for L in en zh-Hans zh-Hant fr de he ms ja ko; do scripts/build-scorm.sh "$@" --lang "$L"; done
ls -la dist/*.zip
