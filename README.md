# UniMPA Project Page

Static project page for **UniMPA: A Unified Memory-Prediction-Action Model via Action-Grounded Transition Modeling**.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Videos

The seven real-world clips live in `static/videos/` and are wired into the
`Real-World Robot Experiments` section:

- `suite-a-rearrangement.mp4` — semantic rearrangement & sorting
- `suite-b-articulated.mp4` — articulated & container interaction
- `suite-c-assembly.mp4` — precision assembly & geometric manipulation
- `suite-d-deformable.mp4` — deformable & tool-mediated manipulation
- `suite-e-bimanual.mp4` — bimanual coordination
- `suite-f-dynamic.mp4` — dynamic & reactive manipulation
- `suite-g-longhorizon.mp4` — long-horizon composition & recovery

They are silent H.264 clips played with `controls muted loop playsinline preload="metadata"`.
The `#t=0.1` fragment in each `src` makes the browser render the first frame instead of a black
box, and `static/js/main.js` autoplays a clip when it enters the viewport and pauses it when it
leaves, so a grid of seven clips stays cheap.

To swap a clip, overwrite the file in `static/videos/` keeping the same name — no HTML change needed.

The source files were not remuxed with `-movflags +faststart` (no ffmpeg available locally), so the
`moov` atom sits at the end of each file. Playback works because GitHub Pages serves range requests,
but startup is slightly slower. If you have ffmpeg, this makes it snappier:

```bash
for f in static/videos/*.mp4; do
  ffmpeg -i "$f" -c copy -movflags +faststart "${f%.mp4}.fs.mp4" && mv "${f%.mp4}.fs.mp4" "$f"
done
```

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
- `static/videos/` — the seven real-world clips
- `.nojekyll` — tells GitHub Pages to serve files as-is
