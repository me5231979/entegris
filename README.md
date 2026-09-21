# The Great Leader Profile: Daily Leadership at Entegris

Web-based course built as plain HTML, CSS, and JavaScript. No build step. Open `index.html` in a browser or serve the folder with any static host. Styled after entegris.com: white pages, faded image blends, teal and red bands with the ring watermark, light-weight headings with the short red rule, condensed uppercase labels.

## Structure

```
launch.html            SCORM 1.2 launch page (LMS entry point, frames index.html)
index.html             App shell: header, language dropdown, lesson sidebar, main, footer
imsmanifest.xml        SCORM 1.2 manifest
css/entegris.css       Design tokens and components
js/app.js              Hash router, block renderer, progress, interactions
js/i18n.js             Language registry, detection, per-script font loading
js/mesh.js             Generative network-wave background (stands in for photography)
js/scorm-api.js        SCORM 1.2 API wrapper (used by launch.html)
js/content/en.js       English course content (source of truth)
js/content/<code>.js   Translations: zh-Hans, zh-Hant, fr, de, he, ms, ja, ko
scripts/build-scorm.sh Packages the course plus videos and documents into a SCORM zip
assets/entegris-logo.png
assets/video/          Course videos, posters, captions (see its README)
assets/docs/           Downloadable Playbook (see its README)
```

## Course content

Five lessons, each a list of blocks in `js/content/en.js`:

1. Introduction to the Great Leader Profile (GLP) and Its Relevance Today: objectives, accordion, PACE characteristics diagram, flashcards
2. Leadership Moment: Collaboration Under Pressure: video, scenario with three responses
3. Leadership Moment: Letting Go at the Right Level: video, scenario
4. Leadership Moment: Reinforce or Reclaim?: video, scenario, three reflection questions
5. Closing: Three Go-Do Actions: video, the learner's own three go-do actions

Block types the renderer understands: `heading`, `text`, `video`, `objectives`, `accordion`, `download`, `characteristics`, `flashcards`, `scenario`, `reflect`, `godo`, `quote`. Add or reorder blocks in the English file, then mirror the change in every language file (same block count and order per lesson).

## Languages

The header dropdown switches between English, 简体中文, 繁體中文, Français, Deutsch, עברית (right-to-left), Bahasa Melayu, 日本語, and 한국어. The choice is remembered per browser and can be forced with `?lang=fr`. CJK and Hebrew fonts (Noto Sans) load from Google Fonts on demand.

The non-English files are first-draft translations. Each shows a short review notice at the top of every lesson until `ui.translationNote` in that file is set to an empty string. Have a native speaker or the Entegris regional team review them before release.

## Video placeholders

Every `video` block renders a placeholder panel labelled with its id. Ids: `l1-glp`, `l1-characteristics`, `l2-moment`, `l3-moment`, `l4-moment`, `l5-godo`. To wire in real video, put `<id>.mp4`, `<id>.jpg` (poster), and `<id>.vtt` (captions) in `assets/video/` and replace the placeholder branch in `blockVideo` in `js/app.js` with a `<video>` element pointing at those files. See `assets/video/README.md` for size limits.

## Imagery

The hero, lesson cards, and video panels draw a generative network-wave on a canvas (`js/mesh.js`) so the faded-blend look works without assets. To use real Entegris photography, add an `<img>` inside `.hero` behind `.fade` and drop the canvas.

## SCORM 1.2 packaging

Videos and documents stay out of git. At packaging time:

```
scripts/build-scorm.sh /path/to/final-videos
```

This writes `dist/the-great-leader-profile-daily-leadership-at-entegris-scorm12.zip` with every media and document file added to the manifest. Upload that zip to the LMS. Requires `python3` for zipping.

How the LMS integration works:

- `launch.html` is the SCO entry point. It finds the LMS `API` object, calls `LMSInitialize`, and frames `index.html`.
- The app stores lesson progress, scenario choices, reflection notes, and go-do actions in `cmi.suspend_data` through `window.parent.EntegrisScorm` (SCORM 1.2 caps it at 4096 characters, so long notes are trimmed).
- Completing the last lesson sets `cmi.core.lesson_status` to `completed` with a score of 100 once every lesson is complete.
- `LMSFinish` runs when the launch page unloads, with `cmi.core.session_time` set.

Outside an LMS (the review link, or opening the files directly), everything falls back to `localStorage` and works the same.

## Brand

Tokens follow the entegris.com look: teal `#2A7A97`, red `#C4161C`, charcoal `#3A3A3A`, warm grey `#EDEBE9`. Open Sans for headings (light) and body, Roboto Condensed for labels and buttons. Square corners, visible focus rings, reduced-motion support, WCAG-minded contrast.
