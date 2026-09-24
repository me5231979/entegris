#!/usr/bin/env python3
"""Sort exported course videos into assets/video/<language>/<id>.mp4.

Usage:
  scripts/sort-videos.py <folder-with-exported-videos> [<destination>] [--move]
  scripts/sort-videos.py --in-place [<assets/video folder>]     # rename files already dropped into language folders

Understands file names like:
  Unlocking Leadership Potential_ The Great Leader Profile (2).mp4   -> en/l1-glp.mp4
  ZH-CN - Six GLP Characteristics.mp4                                -> zh-Hans/l1-characteristics.mp4
  IW - Leadership Moment_ Reinforce or Reclaim_.mp4                  -> he/l4-moment.mp4
A language prefix before " - " selects the language; no prefix means English. "(1)", "(2)" copy
suffixes are ignored; when several files map to the same slot the largest one is used and the
rest are reported. Destination defaults to assets/video in this repo. Files are copied unless
--move is given.
"""
import os, re, shutil, sys

LANG = {'': 'en', 'EN': 'en', 'ZH-CN': 'zh-Hans', 'ZH-HANS': 'zh-Hans', 'ZH-TW': 'zh-Hant', 'ZH-HANT': 'zh-Hant',
        'DE': 'de', 'FR': 'fr', 'JA': 'ja', 'JP': 'ja', 'KO': 'ko', 'KR': 'ko', 'MS': 'ms', 'IW': 'he', 'HE': 'he'}
# keyword (lowercase, punctuation stripped) -> video id, checked in order
TITLES = [
    ('great leader profile', 'l1-glp'), ('unlocking leadership', 'l1-glp'),
    ('glp characteristics', 'l1-characteristics'), ('characteristics', 'l1-characteristics'),
    ('collaboration under pressure', 'l2-moment'), ('under pressure', 'l2-moment'),
    ('letting go', 'l3-moment'), ('right level', 'l3-moment'),
    ('reinforce or reclaim', 'l4-moment'), ('reinforce', 'l4-moment'),
    ('go-do', 'l5-godo'), ('go do', 'l5-godo'),
    ('course intro', 'course-intro'), ('introduction', 'course-intro'),
]

def classify(name):
    base = re.sub(r'\.(mp4|webm|mov|m4v)$', '', name, flags=re.I)
    base = re.sub(r'\s*\(\d+\)\s*$', '', base)            # drop "(2)" copy suffix
    prefix, title = '', base
    m = re.match(r'^([A-Za-z]{2}(?:-[A-Za-z]{2,4})?)\s*-\s*(.+)$', base)
    if m and m.group(1).upper() in LANG:
        prefix, title = m.group(1).upper(), m.group(2)
    lang = LANG.get(prefix)
    key = re.sub(r'[^a-z0-9 -]', ' ', title.lower())
    key = re.sub(r'\s+', ' ', key).strip()
    vid = next((v for k, v in TITLES if k in key), None)
    return lang, vid, title

def in_place(video_root):
    """Rename files already dropped into assets/video/<lang>/ so each becomes <id>.mp4.
    The folder name is the language; the file's own prefix is ignored. Duplicates are moved to
    _unused-videos next to the package root so they do not bloat the zip."""
    unused = os.path.join(os.path.dirname(os.path.abspath(video_root)), '_unused-videos')
    placed, dupes, unknown = 0, [], []
    for lang in sorted(os.listdir(video_root)):
        d = os.path.join(video_root, lang)
        if not os.path.isdir(d) or lang not in set(LANG.values()): continue
        best = {}
        for f in sorted(os.listdir(d)):
            if not f.lower().endswith(('.mp4', '.webm', '.mov', '.m4v')): continue
            stem = os.path.splitext(f)[0]
            if re.fullmatch(r'(course-intro|l1-glp|l1-characteristics|l2-moment|l3-moment|l4-moment|l5-godo)', stem):
                best.setdefault(stem, (f, float('inf'))); continue   # already named; keep
            _, vid, _ = classify(f)
            if not vid: unknown.append(os.path.join(lang, f)); continue
            size = os.path.getsize(os.path.join(d, f))
            if vid in best and best[vid][1] >= size: dupes.append(os.path.join(lang, f)); continue
            if vid in best and best[vid][1] != float('inf'): dupes.append(os.path.join(lang, best[vid][0]))
            best[vid] = (f, size)
        for vid, (f, size) in best.items():
            if size == float('inf'): continue
            ext = os.path.splitext(f)[1].lower()
            os.rename(os.path.join(d, f), os.path.join(d, vid + ext))
            print('%-8s %-24s <- %s' % (lang, vid + ext, f)); placed += 1
    for rel in dupes:
        os.makedirs(unused, exist_ok=True)
        os.rename(os.path.join(video_root, rel), os.path.join(unused, rel.replace(os.sep, '__')))
    print('\nRenamed %d files in %s' % (placed, video_root))
    if dupes: print('Duplicate copies moved to %s (delete that folder before zipping):' % unused); [print('  ', r) for r in dupes]
    if unknown: print('Could not classify (rename by hand to one of the ids):'); [print('  ', r) for r in unknown]

def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    move = '--move' in sys.argv
    if '--in-place' in sys.argv:
        in_place(args[0] if args else os.path.join(os.path.dirname(os.path.abspath(__file__)), 'assets', 'video')); return
    if not args:
        print(__doc__); sys.exit(1)
    src = args[0]
    dest = args[1] if len(args) > 1 else os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'assets', 'video')
    chosen, skipped, unknown = {}, [], []
    for f in sorted(os.listdir(src)):
        if not f.lower().endswith(('.mp4', '.webm', '.mov', '.m4v')): continue
        lang, vid, title = classify(f)
        if not lang or not vid:
            unknown.append(f); continue
        size = os.path.getsize(os.path.join(src, f))
        key = (lang, vid)
        if key in chosen and chosen[key][1] >= size:
            skipped.append((f, key)); continue
        if key in chosen: skipped.append((chosen[key][0], key))
        chosen[key] = (f, size)
    for (lang, vid), (f, size) in sorted(chosen.items()):
        ext = os.path.splitext(f)[1].lower()
        target_dir = os.path.join(dest, lang); os.makedirs(target_dir, exist_ok=True)
        target = os.path.join(target_dir, vid + ext)
        (shutil.move if move else shutil.copy2)(os.path.join(src, f), target)
        print('%-8s %-20s <- %s (%.1f MB)' % (lang, vid + ext, f, size / 1048576))
    expected = {(l, v) for l in set(LANG.values()) for v in ['l1-glp', 'l1-characteristics', 'l2-moment', 'l3-moment', 'l4-moment', 'l5-godo']}
    missing = sorted(expected - set(chosen))
    print('\nPlaced %d files into %s' % (len(chosen), dest))
    if skipped: print('Duplicates not used (a larger or earlier copy was kept):'); [print('  ', f, '->', '/'.join(k)) for f, k in skipped]
    if unknown: print('Could not classify (rename by hand):'); [print('  ', f) for f in unknown]
    if missing: print('Slots still empty:'); [print('  ', '/'.join(k)) for k in missing]

if __name__ == '__main__':
    main()
