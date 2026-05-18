# Ep 8: Instructions & Programs — Supplementary Resources

> Companion to [crash-course.md → Ep 8](../crash-course.md#ep-8-instructions--programs)
>
> **Episode covers**: ISA, opcodes, instruction types (arithmetic/logic, memory, control flow). Assembly. Turing-completeness.

---

## Underrated context (Crash Course skips this)

- **RISC vs CISC is mostly over.** x86 (CISC) internally decodes complex instructions into RISC-like micro-ops. ARM (RISC) has added complex extensions. The distinction is fuzzy in 2024. RISC-V is the new clean RISC.
- **Addressing modes are a vocabulary.** Immediate (`MOV R1, #42`), register (`MOV R1, R2`), direct (`MOV R1, [0x1000]`), indirect (`MOV R1, [R2]`), indexed (`MOV R1, [R2+8]`)... Sanchit's COA covers all 8+ modes.
- **Calling conventions matter.** When function A calls B, which registers carry arguments? Who saves what? This is the **ABI** (Application Binary Interface). x86-64 Linux uses System V ABI; Windows uses a different one. Mismatch = crash.
- **Assembly is not portable.** x86 assembly doesn't run on ARM. The same C code compiled twice gives totally different assembly. This is why C exists — portable assembly.
- **Turing-complete is a low bar.** PowerPoint, Magic: The Gathering, and TypeScript types are all Turing-complete. Being Turing-complete is necessary but not sufficient for being a useful programming substrate.

---

## Videos

- **[Crash Course CS Ep 8](https://www.youtube.com/watch?v=zltgXvg6r3k)**
- **[Ben Eater — Programming his 8-bit CPU](https://www.youtube.com/watch?v=Zt0JfmV7CyI)**.
- **[Low Byte Productions — x86 assembly tutorial](https://www.youtube.com/watch?v=75gBFiFtAb8)**.
- **[Computerphile — Instruction Sets](https://www.youtube.com/watch?v=znzdRr1WhTI)**.
- **[Bisqwit — Programming the C64 in Assembly](https://www.youtube.com/watch?v=8LQwWPbPxgY)** — 6502 ISA, super tutorial.

---

## Articles

- **[x86-64 Cheat Sheet (CMU)](https://www.cs.cmu.edu/~213/resources/x86-64-reference.pdf)** — keep open during CSAPP labs.
- **[RISC-V ISA spec](https://riscv.org/technical/specifications/)** — surprisingly readable.
- **[A Gentle Introduction to Assembly Language Programming](https://gist.github.com/FrancesCoronel/8d2c4f0c5db5d4b0d5e0bdc36b8c4d23)**.
- **[Stack Overflow — What's the difference between assembler, machine code, opcode?](https://stackoverflow.com/q/1923193)** — clarifies vocab.
- **[Compiler Explorer (godbolt.org)](https://godbolt.org/)** — paste C, see assembly. _Use this constantly._

---

## Books

- **CSAPP Ch 3 — Machine-Level Representation of Programs** — _the_ chapter. Teaches x86-64 from scratch.
- **Petzold — _Code_ Ch 22–24** — gentler.
- **Randall Hyde — _The Art of Assembly Language_** — comprehensive.
- **Patterson & Hennessy — _Computer Organization and Design_** — RISC-V edition is great.

---

## Interactive / hands-on

- **[Compiler Explorer (godbolt.org)](https://godbolt.org/)** — paste C, click languages, see assembly. _Most-used tool in this episode._
- **[Venus RISC-V interpreter](https://www.kvakil.me/venus/)** — write/step through assembly in browser.
- **[easy6502](http://skilldrick.github.io/easy6502/)** — learn 6502 assembly interactively.
- **[Microcorruption](https://microcorruption.com/)** — gamified MSP430 assembly + reverse engineering. _Excellent._

---

## Exercises

1. Write a C function that adds two ints. Paste in godbolt with `-O0`. Read every line of assembly.
2. Same function with `-O2`. Compare. Compiler optimizations are wild.
3. Write a loop in C. See it become a `cmp` + `jne` pattern in assembly.
4. Write `factorial(int n)`. Watch the stack frame in assembly.
5. CSAPP Bomb Lab (when ready).

---

## Time budgets

| You have…  | Do this                                        |
| ---------- | ---------------------------------------------- |
| 30 min     | Spend it on godbolt.org with simple C programs |
| 3 hrs      | CSAPP Ch 3 Sections 3.1–3.5                    |
| 1 weekend  | CSAPP Ch 3 thoroughly                          |
| 2 weekends | Microcorruption levels 1–5                     |
| Long-term  | CSAPP Bomb Lab + Attack Lab                    |

---

## Open questions

- [ ]
