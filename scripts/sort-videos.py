#!/usr/bin/env python3
"""Sort exported course videos into assets/video/<language>/<id>.mp4.

Usage:
  scripts/sort-videos.py <folder-with-exported-videos> [<destination>] [--move]

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

def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    move = '--move' in sys.argv
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
