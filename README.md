# The Great Leader Profile: Daily Leadership at Entegris

Web-based course built as plain HTML, CSS, and JavaScript. No build step. Open `index.html` in a browser or serve the folder with any static host.

## Structure

```
launch.html                      SCORM 1.2 launch page (LMS entry point, frames index.html)
index.html                       Course home and outline
modules/reinforce-or-reclaim.html  Moment 1 (from the Articulate source course)
imsmanifest.xml                  SCORM 1.2 manifest
css/entegris.css                 Entegris design tokens and components
js/course.js                     Option selection, reflection notes, progress, completion
js/scorm-api.js                  SCORM 1.2 API wrapper (used by launch.html)
scripts/build-scorm.sh           Packages the course plus videos into a SCORM zip
assets/entegris-logo.png         Logo
assets/video/                    Course videos, posters, and captions (see its README)
```

## Replacing a video placeholder

Every placeholder is a `div.video` with a `data-video` id:

| id | Page | Placement |
| --- | --- | --- |
| `course-intro` | index.html | Course introduction |
| `m1-welcome` | Moment 1 | Welcome and Playbook reminder |
| `m1-scenario` | Moment 1 | The situation |
| `m1-debrief` | Moment 1 | Debrief of options A, B, C |
| `m1-playbook` | Moment 1 | Empowerment in the Playbook |
| `m1-reflect` | Moment 1 | Reflection prompts |
| `m1-wrapup` | Moment 1 | Wrap up |

Store the files in `assets/video/`, named after the placeholder id (see `assets/video/README.md` for the full list and size limits). To swap one in, replace the inner content of that `div` (the corner labels and the play block) with a video element and drop the `role`/`aria-label` attributes:

```html
<div class="video" data-video="m1-scenario">
  <video controls preload="metadata" poster="../assets/video/m1-scenario.jpg">
    <source src="../assets/video/m1-scenario.mp4" type="video/mp4">
    <track kind="captions" src="../assets/video/m1-scenario.vtt" srclang="en" label="English">
  </video>
</div>
```

The container keeps the 16:9 frame. Include captions for accessibility.

## Adding a leadership moment

1. Copy `modules/reinforce-or-reclaim.html` to a new file in `modules/`.
2. Change `data-module-id` on `<body>` to a new unique id.
3. Update the copy, options, feedback, and reflection questions.
4. Replace one of the "Coming soon" cards in `index.html` with a link to the new page, setting `data-module-link` to the same id.

## Brand

Tokens follow the Entegris brand standards: neutral base with a warm bias toward the wordmark grey, one red accent used sparingly, square corners, Archivo display with Inter body and IBM Plex Mono for step counters and meta, visible focus rings, reduced-motion support. Red (`#BD2227`) and wordmark grey (`#6F635A`) are sampled from the logo file.

## SCORM 1.2 packaging

Videos stay out of git. At packaging time, point the build script at the folder holding the final MP4, JPG poster, and VTT caption files (named per `assets/video/README.md`):

```
scripts/build-scorm.sh /path/to/final-videos
```

This writes `dist/the-great-leader-profile-daily-leadership-at-entegris-scorm12.zip`, with every media file added to the manifest. Upload that zip to the LMS. Requires `python3` for zipping.

How the LMS integration works:

- `launch.html` is the SCO entry point. It finds the LMS `API` object, calls `LMSInitialize`, and frames `index.html`.
- Course pages talk to `window.parent.EntegrisScorm`. Choice, reflection notes, and completion are stored in `cmi.suspend_data` (SCORM 1.2 caps it at 4096 characters, so long reflections are trimmed).
- Marking Moment 1 complete sets `cmi.core.lesson_status` to `completed` and a score of 100. When more moments are added, move that call so it fires only after every module is complete.
- `LMSFinish` runs when the launch page unloads, with `cmi.core.session_time` set.

Outside an LMS (the review link, or opening the files directly), everything falls back to `localStorage` and works the same.
