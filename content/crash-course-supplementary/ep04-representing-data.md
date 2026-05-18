# Ep 4: Representing Numbers & Other Data — Supplementary Resources

> Companion to [crash-course.md → Ep 4](../crash-course.md#ep-4-representing-numbers--other-data)
>
> **Episode covers**: bits, bytes, unsigned/signed integers, IEEE 754 floats, ASCII, Unicode, image/sound representation.

---

## Underrated context (Crash Course skips this)

- **Two's complement is non-obvious genius.** Why use it instead of "sign-magnitude"? Because `a + b` works with the same circuit whether they're positive or negative. One subtraction circuit, no special cases. This is why every modern CPU uses two's complement.
- **IEEE 754 is a compromise.** Floating point trades precision for range. `0.1 + 0.2 ≠ 0.3` in every language — not a bug, a feature of the format. Understanding this prevents 90% of "why is my number wrong?" bugs.
- **Unicode ≠ UTF-8.** Unicode is the _mapping_ (character → number, e.g. ñ = U+00F1). UTF-8 is one of several _encodings_ (number → bytes). UTF-8 is variable-length: 1 byte for ASCII chars, up to 4 for emoji.
- **Endianness will bite you.** When you store a 4-byte integer, which byte goes first? Little-endian (Intel/ARM) vs big-endian (network protocols). Causes silent bugs in serialization, file formats, networking.
- **Pixel formats are a swamp.** RGB, RGBA, BGR, YUV, HSV — same image, different orderings. Image processing libraries spend half their code converting between these.

---

## Videos

- **[Crash Course CS Ep 4](https://www.youtube.com/watch?v=1GSjbWt0c9M)**
- **[Computerphile — Floating Point Numbers](https://www.youtube.com/watch?v=PZRI1IfStY0)** — IEEE 754 explained cleanly.
- **[Computerphile — Two's Complement](https://www.youtube.com/watch?v=lKTsv6iVxV4)** — why it works.
- **[Tom Scott — Unicode](https://www.youtube.com/watch?v=MijmeoH9LT4)** — the most entertaining 10 min you'll spend on character encoding.
- **[Computerphile — Characters, Symbols and the Unicode Miracle](https://www.youtube.com/watch?v=MijmeoH9LT4)** — Brailsford deep-dive.
- **[3Blue1Brown — Binary, Hanoi and Sierpinski](https://www.youtube.com/watch?v=2SUvWfNJSsM)** — binary number intuition.

---

## Articles

- **["What Every Computer Scientist Should Know About Floating-Point Arithmetic" — Goldberg](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html)** — _the_ paper. Dense but definitive. Read at least the first half.
- **[The Absolute Minimum Every Software Developer Must Know About Unicode — Joel Spolsky](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)** — classic, mandatory.
- **[Float Toy — interactive IEEE 754](https://evanw.github.io/float-toy/)** — flip bits, see the float change. Best 5 min you can spend.
- **[Two's Complement Explained — BetterExplained](https://betterexplained.com/articles/twos-complement/)** — intuitive.
- **[UTF-8 Everywhere Manifesto](https://utf8everywhere.org/)** — why UTF-8 won and how to use it correctly.

---

## Books

- **CSAPP Ch 2 — Representing and Manipulating Information** — _the_ chapter on this. Goes deep on bit-level reps, two's complement proofs, IEEE 754. Read this when you start CSAPP.
- **Petzold — _Code_ Ch 8 (binary) and Ch 25 (floating point)** — gentler intro.

---

## Interactive / hands-on

- **[Float Toy](https://evanw.github.io/float-toy/)** — visualize floats bit-by-bit.
- **[IEEE 754 Converter](https://www.h-schmidt.net/FloatConverter/IEEE754.html)** — type a decimal, see the bits.
- **[ASCII Table](https://www.asciitable.com/)** — keep it bookmarked.
- **[Unicode Table](https://unicode-table.com/)** — search any character.

---

## Exercises

1. **By hand**: convert `-37` to 8-bit two's complement. Verify by adding `37 + (-37)` in binary.
2. **In code**: print `0.1 + 0.2` in C/Python. Why isn't it `0.3`?
3. **By hand**: encode the character `é` (U+00E9) in UTF-8. (Answer: `0xC3 0xA9`.)
4. **In code**: write a function that takes a 32-bit int and prints it in binary.
5. **CSAPP Data Lab** — when you're ready, this nails it for life.

---

## Mind-warpers

- **What's `INT_MIN * -1` in two's complement?** (Answer: still `INT_MIN`. Overflow.)
- **What's `0.1 + 0.2 == 0.3` in floating point?** (Answer: `False`.)
- **How many bytes is the string `"héllo"` in UTF-8?** (Answer: 6, not 5.)

---

## Time budgets

| You have… | Do this                                                             |
| --------- | ------------------------------------------------------------------- |
| 30 min    | Float Toy + Joel Spolsky's Unicode article                          |
| 2 hrs     | Goldberg's floating-point paper (first half) + Computerphile videos |
| 1 weekend | CSAPP Ch 2 thoroughly                                               |
| Project   | CSAPP Data Lab                                                      |

---

## Open questions

- [ ]
