#!/usr/bin/env python3
"""Bundle the course into one self-contained HTML file (docs/index.html), the published copy served by GitHub Pages.
Inlines the stylesheet, every script, all language files, and the logo as a data URI.
Fonts still load from Google Fonts. Video placeholders stay as placeholders."""
import base64, os, re, sys
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(root)
html = open('index.html', encoding='utf-8').read()
def read(p): return open(p, encoding='utf-8').read()
logo = 'data:image/png;base64,' + base64.b64encode(open('assets/entegris-logo.png', 'rb').read()).decode()
html = html.replace('assets/entegris-logo.png', logo)
html = html.replace('<link rel="stylesheet" href="css/entegris.css">', '<style>\n' + read('css/entegris.css') + '\n</style>')
def inline_script(m):
    src = m.group(1)
    return '<script>\n' + read(src).replace('</script', '<\\/script') + '\n</script>'
html = re.sub(r'<script src="([^"]+)"></script>', inline_script, html)
os.makedirs('docs', exist_ok=True)
out = 'docs/index.html'
open(out, 'w', encoding='utf-8').write(html)
print(out, round(os.path.getsize(out) / 1024), 'KB')
