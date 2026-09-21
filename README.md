# The Great Leader Profile: Daily Leadership at Entegris

Web-based course built as plain HTML, CSS, and JavaScript. No build step. Open `index.html` in a browser or serve the folder with any static host.

## Structure

```
index.html                       Course home and outline
modules/reinforce-or-reclaim.html  Moment 1 (from the Articulate source course)
css/entegris.css                 Entegris design tokens and components
js/course.js                     Option selection, reflection notes, progress, completion
assets/entegris-logo.png         Logo
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

To swap one in, replace the inner content of that `div` (the corner labels and the play block) with a video element and drop the `role`/`aria-label` attributes:

```html
<div class="video" data-video="m1-scenario">
  <video controls preload="metadata" poster="../assets/m1-scenario.jpg">
    <source src="../assets/m1-scenario.mp4" type="video/mp4">
    <track kind="captions" src="../assets/m1-scenario.vtt" srclang="en" label="English">
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

## Progress and completion

Choice, reflection notes, and completion are stored per browser in `localStorage`. To report to an LMS, replace the `markComplete` function in `js/course.js` with a SCORM or xAPI call.
