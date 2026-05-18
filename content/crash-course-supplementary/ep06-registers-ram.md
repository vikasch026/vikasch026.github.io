# Ep 6: Registers & RAM — Supplementary Resources

> Companion to [crash-course.md → Ep 6](../crash-course.md#ep-6-registers--ram)
>
> **Episode covers**: latches (SR, gated D), registers, RAM addressing, the memory hierarchy preview.

---

## Underrated context (Crash Course skips this)

- **SRAM vs DRAM is huge.** SRAM = made of latches (6 transistors per bit), fast, used for caches. DRAM = capacitor + 1 transistor per bit, dense and cheap, used for main memory. DRAM **leaks charge** and must be _refreshed_ thousands of times per second — that's the "D" for Dynamic.
- **"Random access" is historical.** It distinguished RAM from sequential-access tape. Today every storage is random-ish; the name stuck.
- **Memory is hierarchical for cost reasons.** Fast memory (registers, SRAM) is expensive per byte. Slow memory (DRAM, disk) is cheap. Hierarchy = small fast layers in front of large slow ones. Ep 9 dives into cache.
- **The address space is virtual.** When your C program reads address `0x7fff1234`, that's not the physical RAM address — it's a virtual address. The MMU (memory management unit) translates it. CSAPP Ch 9 covers this.
- **Latches store state via positive feedback.** Two NAND gates wired so each one's output is the other's input → bistable. This is the entire trick. All sequential digital logic descends from this.

---

## Videos

- **[Crash Course CS Ep 6](https://www.youtube.com/watch?v=fpnE6UAfbtU)**
- **[Ben Eater — SR latch from NAND gates](https://www.youtube.com/watch?v=KM0DdEaY5sY)** — wires it on a breadboard.
- **[Ben Eater — D latch / D flip-flop](https://www.youtube.com/watch?v=peCh_859q7Q)**
- **[Ben Eater — Building RAM](https://www.youtube.com/watch?v=KQYZ1MZQ4iI)** — wires a 16-byte RAM module.
- **[Computerphile — How does Computer Memory Work?](https://www.youtube.com/watch?v=7J7X7aZvMXQ)**
- **[Asianometry — How does DRAM work?](https://www.youtube.com/watch?v=7J7X7aZvMXQ)** — modern DRAM cell physics.

---

## Articles

- **[Wikipedia — Flip-flop](<https://en.wikipedia.org/wiki/Flip-flop_(electronics)>)** — SR, D, JK, T variants.
- **[Wikipedia — SRAM vs DRAM](https://en.wikipedia.org/wiki/Random-access_memory)**.
- **[Ulrich Drepper — What Every Programmer Should Know About Memory](https://akkadia.org/drepper/cpumemory.pdf)** — _the_ paper on memory hierarchy. Long, brilliant. Start with Section 2.
- **[How DRAM works (Crucial blog)](https://www.crucial.com/articles/about-memory/server-memory)** — accessible.

---

## Books

- **Petzold — _Code_ Ch 17** — builds latches from gates.
- **CSAPP Ch 6** — memory hierarchy in depth. Best treatment for programmers.
- **Harris & Harris — Ch 5** — university rigor on storage elements.

---

## Interactive / hands-on

- **[Logic.ly](https://logic.ly/demo)** — try the built-in SR latch and D flip-flop examples.
- **[Nandgame](https://nandgame.com/)** — "Memory" levels build a flip-flop → register → RAM.
- **[Ben Eater 8-bit kit](https://eater.net/8bit)** — actually wire a RAM module on a breadboard. Life-changing.

---

## Exercises

1. Draw an SR latch with NAND gates. Trace what happens when S=1, R=0, then S=0, R=0.
2. Build a 1-bit register: D flip-flop. What's the difference from a latch? (Hint: edge-triggered.)
3. How many bits of address do you need to address 1024 bytes of RAM? (Answer: 10. Why?)
4. How many transistors in 1 GB of DRAM? (Answer: ~8 billion + same number of capacitors.)
5. Read Drepper's paper Sec 2.1–2.2; explain why row buffers exist in DRAM.

---

## Time budgets

| You have… | Do this                           |
| --------- | --------------------------------- |
| 30 min    | Ben Eater SR latch video          |
| 2 hrs     | All three Ben Eater memory videos |
| 1 weekend | Drepper's memory paper Sec 1–4    |
| Long-term | CSAPP Ch 6 + run Cache Lab        |

---

## Open questions

- [ ]
