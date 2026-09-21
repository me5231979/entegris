# Course videos

Drop each video here, named after its placeholder id. Add a poster image and a captions file with the same base name.

| File | Placeholder | Page |
| --- | --- | --- |
| `course-intro.mp4` | Course introduction | index.html |
| `m1-welcome.mp4` | Welcome and Playbook reminder | modules/reinforce-or-reclaim.html |
| `m1-scenario.mp4` | The situation | modules/reinforce-or-reclaim.html |
| `m1-debrief.mp4` | Debrief of options A, B, C | modules/reinforce-or-reclaim.html |
| `m1-playbook.mp4` | Empowerment in the Playbook | modules/reinforce-or-reclaim.html |
| `m1-reflect.mp4` | Reflection prompts | modules/reinforce-or-reclaim.html |
| `m1-wrapup.mp4` | Wrap up | modules/reinforce-or-reclaim.html |

For each id, three files:

- `<id>.mp4` (H.264, AAC, 1920x1080 or 1280x720)
- `<id>.jpg` poster frame, shown before play
- `<id>.vtt` captions (WebVTT)

Limits: GitHub rejects single files over 100 MB and warns over 50 MB. Keep each MP4 under 50 MB, or track this folder with Git LFS (`git lfs track "assets/video/*.mp4"`). If the finals are large, host them on your LMS or video platform instead and point the `<source src>` at that URL.
