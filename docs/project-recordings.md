# Project recordings

All six featured cards use a fixed 16:10 outer presentation stage. Portrait footage is centered in a phone bezel; landscape footage uses a browser panel. Recordings use contain sizing, preserving the complete interface rather than cropping controls. Letterboxing accommodates different device ratios. No footage is currently supplied; labelled placeholders are intentional.

## Preferred input

- Original MP4 or WebM recording, ideally 15–30 seconds per project.
- Desktop: 1440×900 or 1920×1080 is suitable. Avoid capturing browser toolbars and personal information.
- Mobile: record in the app's normal portrait orientation. Different phone ratios are supported; do not stretch or pre-crop to the desktop ratio.
- GIF is supported, but video is generally smaller and has native controls. Avoid converting a video to a large GIF before sharing it.
- Show one clear journey per recording. Use demonstration data and avoid private accounts, notifications and personal information.

## Integration

Put approved files in public/recordings/ and update the corresponding project in src/data/projects.json:

```json
"media": {
  "src": "/recordings/viora.mp4",
  "kind": "video",
  "orientation": "portrait",
  "poster": "/recordings/viora-poster.jpg"
}
```

Use landscape for JobFit and the desktop ManCave recording. Use portrait for Viora, Nexus, Odyssey and Afterlight. ManCave can also use a portrait mobile recording by changing its orientation. Poster is optional.

Video does not autoplay and uses preload=none. Native controls handle playback; leaving the viewport or hiding the tab pauses video. GIF playback starts only on explicit request and can be paused, so large animated media is not decoded for all six cards on page load. Real playback/encoding quality remains to be verified when recordings arrive.
