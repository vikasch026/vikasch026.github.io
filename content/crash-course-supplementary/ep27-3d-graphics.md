# Ep 27: 3D Graphics — Supplementary Resources

> Companion to [crash-course.md → Ep 27](../crash-course.md#part-5--user-interface--graphics-ep-2227)
>
> **Episode covers**: meshes, vertices, triangles, rasterization, shading, GPUs.

---

## Underrated context (Crash Course skips this)

- **Everything is triangles.** Triangles are the simplest polygon (always planar), can approximate any surface, GPUs hardware-accelerate them. Quads exist but get split into triangles internally.
- **The graphics pipeline is fixed-ish.** Vertex shader → primitive assembly → rasterization → fragment shader → output. Modern GPUs (Vulkan, DX12) expose this; older APIs hid it.
- **Rasterization vs ray tracing.** Rasterization: project triangles to screen, fast, approximate lighting. Ray tracing: cast rays from camera, slow, physically accurate. RTX = real-time ray tracing, ~2018+.
- **Shaders are mini-programs running per pixel/vertex.** Tens of thousands run in parallel on a GPU. The reason GPUs are good at ML: same SIMD pattern.
- **The depth buffer (Z-buffer) is genius.** For each pixel, store distance from camera. When drawing a new triangle, skip pixels behind existing ones. Solves visibility cheaply.

---

## Videos

- **[Crash Course CS Ep 27](https://www.youtube.com/watch?v=TEAtmCYYKZA)**.
- **[Sebastian Lague — Ray Tracing playlist](https://www.youtube.com/watch?v=Qz0KTGYJtUk)** — best modern intro.
- **[3Blue1Brown — Quaternions](https://www.youtube.com/watch?v=zjMuIxRvygQ)** — for 3D rotations.
- **[Inigo Quilez — shader tutorials](https://www.youtube.com/c/InigoQuilez)** — demoscene master.
- **[ScratchAPixel](https://www.scratchapixel.com/)** — long-form 3D graphics tutorials.

---

## Articles

- **[LearnOpenGL](https://learnopengl.com/)** — _the_ OpenGL tutorial. Free.
- **[Real-Time Rendering (book site)](https://www.realtimerendering.com/)** — academic.
- **[Shadertoy](https://www.shadertoy.com/)** — write shaders in browser, see beautiful things.

---

## Books

- **Akenine-Möller et al. — _Real-Time Rendering_** — the bible.
- **Foley/van Dam — _Computer Graphics: Principles and Practice_**.
- **Peter Shirley — _Ray Tracing in One Weekend_** — free, hands-on. _Do this._

---

## Interactive / hands-on

- **[Shadertoy](https://www.shadertoy.com/)** — modify existing shaders in browser.
- **[ThreeJS playground](https://threejs.org/examples/)** — JS 3D library.
- **[Blender](https://www.blender.org/)** — model in 3D, see meshes/triangles.
- **[Ray Tracing in One Weekend (book)](https://raytracing.github.io/)** — implement a ray tracer in C++ in a weekend.

---

## Time budgets

| You have… | Do this                                 |
| --------- | --------------------------------------- |
| 30 min    | Sebastian Lague ray tracing video       |
| 1 weekend | _Ray Tracing in One Weekend_            |
| 1 month   | LearnOpenGL beginner chapters           |
| Long-term | _Real-Time Rendering_ + Shadertoy daily |

---

## Open questions

- [ ]
