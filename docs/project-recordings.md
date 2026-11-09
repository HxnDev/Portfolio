# Project recordings

The six featured recordings are stored in `public/assets/gifs/`: `viora.gif`, `nexus.gif`, `odyssey.gif`, `afterlight.gif`, `jobfit.gif` and `mancave.gif`.

The homepage and project collection share the same media data in `src/data/projects.json`. Homepage cards alternate left/right media on desktop and stack media first on smaller screens. The homepage uses equal 5:4 stages; collection cards use equal 16:10 stages. Portrait footage is centered in a phone bezel and landscape footage in a browser panel. Contain sizing preserves the complete interface.

## Replace a recording

Replace its GIF and update its still preview in `public/images/projects/`. Keep these media fields in the matching project:

```json
"media": {
  "src": "/assets/gifs/viora.gif",
  "kind": "gif",
  "orientation": "portrait",
  "poster": "/images/projects/viora-poster.jpg"
}
```

Use landscape for JobFit and ManCave, and portrait for Viora, Nexus, Odyssey and Afterlight. Use demonstration data when recording.

GIFs load when their frame is within 80px of the viewport. Offscreen frames and hidden tabs switch to their still preview. Reduced-motion preferences keep still previews visible. There are no playback controls. The supplied GIFs total approximately 91 MB, so the viewport behavior limits initial loading and simultaneous animation; it does not reduce the size of a GIF once requested.
