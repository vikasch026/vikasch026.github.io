# Ep 7: The Central Processing Unit (CPU) — Supplementary Resources

> Companion to [crash-course.md → Ep 7](../crash-course.md#ep-7-the-central-processing-unit-cpu)
>
> **Episode covers**: ALU + registers + control unit + clock. Fetch–Decode–Execute cycle. Program Counter, Instruction Register.

---

## Underrated context (Crash Course skips this)

- **The CPU is "just" a state machine.** Each clock tick: fetch instruction at PC → decode opcode → execute → update PC. Repeat forever. The complexity is in _how_ each step is done efficiently.
- **Microarchitecture vs architecture.** Architecture = what programmers see (the ISA: instructions, registers). Microarchitecture = how the silicon implements it (pipelines, caches, predictors). Same ISA can have wildly different micro-architectures (Intel Core vs Atom).
- **Stored-program (von Neumann) is the key insight.** Instructions and data live in the same memory. This is why programs can be loaded, generated at runtime (JIT compilers), or maliciously modified (buffer overflow exploits).
- **The clock isn't sacred.** Modern CPUs run multiple clock domains, dynamically scale frequency, and execute instructions out-of-order. The clean fetch-decode-execute is a teaching abstraction.
- **Decoding is non-trivial.** x86 instructions are variable-length (1 to 15 bytes). The decoder is one of the most complex parts of an Intel CPU. RISC ISAs (ARM, RISC-V) keep instructions fixed-width to make this simpler.

---

## Videos

- **[Crash Course CS Ep 7](https://www.youtube.com/watch?v=FZGugFqdr60)**
- **[Ben Eater — Building a CPU](https://www.youtube.com/playlist?list=PLowKtXNTBypGqImE405J2565dvjafglHU)** — entire playlist. Builds a working CPU from gates. _The_ definitive resource.
- **[Computerphile — CPU vs GPU](https://www.youtube.com/watch?v=_cyVDoyI6NE)**
- **[Sebastian Lague — How computers work](https://www.youtube.com/watch?v=QZwneRb-zqA)** — visual, modern.
- **[Casey Muratori — The Thirty Million Line Problem](https://www.youtube.com/watch?v=kZRE7HIO3vk)** — what modern CPUs actually look like, the hidden complexity.

---

## Articles

- **[A Crash Course in Modern Hardware (Cliff Click)](https://www.infoq.com/presentations/click-crash-course-modern-hardware/)** — what programmers misunderstand about modern CPUs.
- **[Wikipedia — Von Neumann architecture](https://en.wikipedia.org/wiki/Von_Neumann_architecture)**.
- **[Wikipedia — Instruction cycle](https://en.wikipedia.org/wiki/Instruction_cycle)**.
- **[Modern Microprocessors — A 90-Minute Guide](http://www.lighterra.com/papers/modernmicroprocessors/)** — _read this._ The best single article on how real CPUs work.

---

## Books

- **Petzold — _Code_ Ch 17–21** — builds a CPU from gates.
- **CSAPP Ch 4** — Y86-64 toy ISA, processor design. (Not in CS107 custom edition.)
- **Patterson & Hennessy — _Computer Organization and Design_** — the standard textbook. RISC-V or MIPS edition.
- **Hennessy & Patterson — _Computer Architecture: A Quantitative Approach_** — graduate-level, when you want to go deep.

---

## Interactive / hands-on

- **[Ben Eater 8-bit kit](https://eater.net/8bit)** — wire a CPU on breadboards.
- **[Nand2tetris](https://www.nand2tetris.org/)** — build a CPU in software.
- **[CPU.js (visual simulator)](https://github.com/lpil/cpu)** and similar — visualize the fetch-decode-execute cycle.
- **[RISC-V interpreter (Venus)](https://www.kvakil.me/venus/)** — write & step through RISC-V assembly in browser.

---

## Exercises

1. Trace the fetch-decode-execute cycle for `MOV R1, R2` step by step. Which registers change at each clock tick?
2. Why does the PC increment _during_ fetch, not after? (Hint: branch instructions.)
3. Read "Modern Microprocessors — A 90-Minute Guide" cover to cover.
4. Watch one Ben Eater CPU video per day for 2 weeks.

---

## Time budgets

| You have… | Do this                                                         |
| --------- | --------------------------------------------------------------- |
| 30 min    | Read "Modern Microprocessors — A 90-Minute Guide" (it's 90 min) |
| 5 hrs     | Ben Eater CPU playlist (skim)                                   |
| 1 weekend | Petzold _Code_ Ch 17–21                                         |
| 3 months  | Build Ben Eater's 8-bit computer on breadboards                 |
| 6 months  | Nand2tetris Parts 1+2                                           |

---

## Open questions

- [ ]
