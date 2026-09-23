#!/usr/bin/env python3
"""Add video files to an existing SCORM zip and update its manifest.

Usage:
  scripts/add-videos.py <package.zip> <videos-folder> [--langs en,ja,ko] [--out final.zip]

The videos folder holds one subfolder per language code (en, zh-Hans, zh-Hant, fr, de, he, ms, ja, ko)
with <id>.mp4 and optional <id>.jpg (poster) and <id>.vtt (captions). Files placed directly in the
folder root are used as the fallback for every language. Video ids: course-intro, l1-glp,
l1-characteristics, l2-moment, l3-moment, l4-moment, l5-godo.

--langs limits which language folders go in (useful when the LMS has an upload size limit and you
want one package per language). Root-level files are always included.

Doing it by hand also works: unzip the package, copy the same folder structure into assets/video/,
and zip it back up. The LMS serves any file in the zip; this script just also lists them in
imsmanifest.xml, which some strict validators want.
"""
import os, re, sys, zipfile, shutil, tempfile

def main():
    args = sys.argv[1:]
    if len(args) < 2:
        print(__doc__); sys.exit(1)
    pkg, folder = args[0], args[1]
    langs = None; out = None
    i = 2
    while i < len(args):
        if args[i] == '--langs': langs = set(args[i + 1].split(',')); i += 2
        elif args[i] == '--out': out = args[i + 1]; i += 2
        else: i += 1
    out = out or re.sub(r'\.zip$', '', pkg) + '-with-videos.zip'

    media = []  # (arcname, path)
    for root, dirs, files in os.walk(folder):
        rel = os.path.relpath(root, folder)
        top = rel.split(os.sep)[0] if rel != '.' else ''
        if top and langs is not None and top not in langs:
            continue
        for f in files:
            if f.lower().endswith(('.mp4', '.webm', '.jpg', '.jpeg', '.vtt')):
                arc = 'assets/video/' + (rel + '/' if rel != '.' else '') + f
                media.append((arc.replace(os.sep, '/'), os.path.join(root, f)))
    if not media:
        print('No video, poster, or caption files found in', folder); sys.exit(1)

    with zipfile.ZipFile(pkg) as zin, zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as zout:
        names = set(zin.namelist())
        manifest = zin.read('imsmanifest.xml').decode('utf-8')
        marker = '    </resource>'
        entries = ''.join('      <file href="%s"/>\n' % arc for arc, _ in media if ('<file href="%s"/>' % arc) not in manifest)
        manifest = manifest.replace(marker, entries + marker, 1)
        for item in zin.infolist():
            if item.filename == 'imsmanifest.xml': zout.writestr(item, manifest)
            elif item.filename not in {a for a, _ in media}: zout.writestr(item, zin.read(item.filename))
        for arc, path in media:
            zout.write(path, arc, compress_type=zipfile.ZIP_STORED)  # video is already compressed
    size = os.path.getsize(out) / (1024 * 1024)
    print('Wrote %s (%.0f MB, %d media files)' % (out, size, len(media)))

if __name__ == '__main__':
    main()
