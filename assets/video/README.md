# Course videos

One subfolder per language. Drop each language's videos into its folder, named by video id:

```
assets/video/
  en/        l1-glp.mp4  l1-characteristics.mp4  l2-moment.mp4  l3-moment.mp4  l4-moment.mp4  l5-godo.mp4  course-intro.mp4
  zh-Hans/   (same file names, Simplified Chinese versions)
  zh-Hant/   (Traditional Chinese)
  fr/  de/  he/  ms/  ja/  ko/
```

For each video you can also add `<id>.jpg` (poster frame shown before play) and `<id>.vtt` (captions) with the same base name in the same folder.

| Video id | Lesson | Placement |
| --- | --- | --- |
| `course-intro` | Home | Course introduction (optional) |
| `l1-glp` | 1 | Entegris Great Leader Profile |
| `l1-characteristics` | 1 | GLP Characteristics |
| `l2-moment` | 2 | Leadership Moment: Collaboration Under Pressure |
| `l3-moment` | 3 | Leadership Moment: Letting Go at the Right Level |
| `l4-moment` | 4 | Leadership Moment: Reinforce or Reclaim? |
| `l5-godo` | 5 | Three Go-Do Actions |

How the course picks a video: it looks in the folder for the language chosen in the dropdown, then in `en/`, then in this folder's root. If none exists it shows the placeholder panel. Changing the language reloads the lesson, so the matching video appears immediately.

Format: MP4, H.264 video, AAC audio, 1280x720 or 1920x1080. Keep each file as small as quality allows; a SCORM package with all nine languages is nine times the size of one.

## Getting videos into a SCORM package

Option A, one command (also updates the manifest):

```
scripts/add-videos.py dist/the-great-leader-profile-daily-leadership-at-entegris-scorm12.zip assets/video
scripts/add-videos.py dist/...scorm12.zip assets/video --langs en,ja --out glp-en-ja.zip   # subset
```

Option B, by hand: unzip the package, copy this folder structure into `assets/video/` inside it, and zip it back up from inside the package folder (so `imsmanifest.xml` stays at the zip root). LMSs serve any file in the zip.

## Git

`.mp4` and `.webm` files in this folder are ignored by git so a large video cannot break a push (GitHub refuses files over 100 MB). Keep videos in shared storage and package them with the script above. To publish videos on the GitHub Pages link instead, host them on Vimeo or force-add small files with `git add -f`.
