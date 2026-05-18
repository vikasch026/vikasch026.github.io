# Ep 23: Screens & 2D Graphics — Supplementary Resources

> Companion to [crash-course.md → Ep 23](../crash-course.md#part-5--user-interface--graphics-ep-2227)
>
> **Episode covers**: CRT, LCD, raster vs vector, pixel grids, framebuffer.

---

## Underrated context (Crash Course skips this)

- **Pixels are physical.** Each pixel on an LCD is actually 3 sub-pixels (red, green, blue). Subpixel rendering (ClearType) exploits this for sharper text.
- **Framebuffer = memory-mapped pixels.** A region of RAM where each location is a pixel color. Write to memory → screen updates. This is the lowest-level graphics primitive.
- **CRT physics was clever.** Electron beam scanning the screen 60 times per second. The persistence of phosphor + your eye's persistence-of-vision = continuous image. RIP CRTs.
- **HiDPI / Retina broke assumptions.** Old apps assumed 1 pixel = 1 logical unit. Now 1 logical unit = 2–3 pixels. Scaling, fonts, images all had to adapt.
- **GPU exists for graphics first.** Drawing pixels is embarrassingly parallel. GPUs evolved to do this efficiently, then turned out to be amazing for ML too.

---

## Videos

- **[Crash Course CS Ep 23](https://www.youtube.com/watch?v=7Jr0SFMQ4Rs)**.
- **[Technology Connections — How a CRT Works](https://www.youtube.com/watch?v=l4UgZBs7ZGo)**.
- **[Branch Education — How LCDs Work](https://www.youtube.com/watch?v=jiejNAUwcQ8)**.
- **[Computerphile — Anti-aliasing](https://www.youtube.com/watch?v=hYsPlbMhE2I)**.

---

## Articles

- **[A Pixel is Not a Little Square — Alvy Ray Smith](http://alvyray.com/Memos/CG/Microsoft/6_pixel.pdf)** — 1995, classic.
- **[How Browsers Render — Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work)**.

---

## Books

- **Foley, van Dam et al. — _Computer Graphics: Principles and Practice_** — classic textbook.
- **Eric Lengyel — _Mathematics for 3D Game Programming_** — practical foundation.

---

## Interactive / hands-on

- **[Pixel Art Editor (Aseprite, free Lospec)](https://www.lospec.com/pixel-editor)** — feel the pixel grid.
- **[Build a framebuffer in C with SDL](https://wiki.libsdl.org/SDL2/Tutorials)**.

---

## Time budgets

| You have… | Do this                                                     |
| --------- | ----------------------------------------------------------- |
| 30 min    | Technology Connections CRT video                            |
| 2 hrs     | Read "A Pixel is Not a Little Square" + Mozilla render docs |
| Long-term | Write a tiny 2D engine in C/SDL                             |

---

## Open questions

- [ ]
