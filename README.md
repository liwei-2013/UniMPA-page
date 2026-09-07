# UniMPA Project Page

Static project page for **UniMPA: A Unified Memory-Prediction-Action Model via Action-Grounded Transition Modeling**.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Adding videos later

All video slots are placeholders. Drop the `.mp4` files into `static/videos/` using these names,
then replace the `<div class="video-placeholder">…</div>` block inside the corresponding
`<div class="video-frame">` in `index.html` with a `<video>` tag. Each slot has an HTML comment
above it showing the exact replacement snippet.

Expected filenames:

- `teaser.mp4` — top-of-page teaser
- `suite-a-rearrangement.mp4` — semantic rearrangement & sorting
- `suite-b-articulated.mp4` — articulated & container interaction
- `suite-c-assembly.mp4` — precision assembly & geometric manipulation
- `suite-d-deformable.mp4` — deformable & tool-mediated manipulation
- `suite-e-bimanual.mp4` — bimanual coordination
- `suite-f-dynamic.mp4` — dynamic & reactive manipulation
- `suite-g-longhorizon.mp4` — long-horizon composition & recovery

Example replacement:

```html
<div class="video-frame">
  <video src="static/videos/suite-e-bimanual.mp4"
         poster="static/images/5-vis-real.png"
         controls muted loop playsinline preload="metadata"></video>
</div>
```

`static/js/main.js` pauses `<video>` elements once they scroll out of view, so a grid of
looping clips stays cheap.

## Still to fill in

- `data-todo="arxiv-link"` — paper / arXiv URL in the hero button
- `data-todo="code-link"` — code repository URL in the hero button
- Author homepage links in the `.authors` block (currently `href="#"`)
- BibTeX entry in `#bibtex` once the arXiv ID is assigned

## Files

- `index.html` — the whole page
- `static/css/style.css` — styles
- `static/js/main.js` — result tabs, BibTeX copy, scroll-spy nav, video pausing
- `static/images/` — figures copied from the manuscript
- `static/videos/` — video slots (empty for now)
- `.nojekyll` — tells GitHub Pages to serve files as-is
