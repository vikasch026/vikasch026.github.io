# Ep 21: Compression — Supplementary Resources

> Companion to [crash-course.md → Ep 21](../crash-course.md#part-4--operating-systems--storage-ep-1821)
>
> **Episode covers**: lossless (run-length, Huffman, LZ) vs lossy (JPEG, MP3, MPEG).

---

## Underrated context (Crash Course skips this)

- **Compression is just finding patterns.** Repeated data → represent once. Predictable data → omit. Random data is incompressible (proven: entropy is a lower bound).
- **Information theory (Shannon, 1948) defines the limit.** Shannon entropy tells you the minimum bits needed to encode a message. No algorithm can do better. Huffman approaches this bound.
- **DEFLATE rules the world.** ZIP, gzip, PNG, HTTP gzip — all use DEFLATE (LZ77 + Huffman). One of the most important algorithms ever shipped.
- **Lossy works because we're not perfect.** JPEG discards detail your eye can't see. MP3 discards sound your ear can't hear. The trick is psychophysics, not math.
- **Modern alternatives.** Zstandard (Zstd, 2015) beats gzip on both speed and ratio — Facebook's default now. Brotli (2015) is Google's web compression. AV1/H.265 are modern video codecs.

---

## Videos

- **[Crash Course CS Ep 21](https://www.youtube.com/watch?v=OtDxDvCpPL4)**
- **[Computerphile — Huffman Coding](https://www.youtube.com/watch?v=JsTptu56GM8)** — best explainer.
- **[Computerphile — Lempel-Ziv](https://www.youtube.com/watch?v=goOa3DGezUA)**.
- **[Computerphile — JPEG](https://www.youtube.com/watch?v=Q2aEzeMDHMA)** — DCT + quantization explained.
- **[Tom Scott — Why Snow and Confetti Ruin YouTube Video Quality](https://www.youtube.com/watch?v=r6Rp-uo6HmI)** — codec intuition.

---

## Articles

- **[Shannon's 1948 paper — "A Mathematical Theory of Communication"](https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf)** — founding doc.
- **[Wikipedia — DEFLATE](https://en.wikipedia.org/wiki/Deflate)**.
- **[Real-world Compression Benchmarks (lzbench)](https://github.com/inikep/lzbench)** — see what's actually fastest.
- **[Zstd announcement (Facebook)](https://engineering.fb.com/2016/08/31/core-data/smaller-and-faster-data-compression-with-zstandard/)**.

---

## Books

- **David Salomon — _Data Compression: The Complete Reference_** — exhaustive.
- **Khalid Sayood — _Introduction to Data Compression_** — textbook.
- **James Gleick — _The Information_** — Shannon's biography + info theory history.

---

## Time budgets

| You have… | Do this                                |
| --------- | -------------------------------------- |
| 30 min    | Computerphile Huffman + JPEG videos    |
| 2 hrs     | Implement Huffman coding in C          |
| 1 weekend | Read Shannon's 1948 paper (first half) |

---

## Open questions

- [ ]
