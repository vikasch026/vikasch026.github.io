# Ep 5: How Computers Calculate (the ALU) — Supplementary Resources

> Companion to [crash-course.md → Ep 5](../crash-course.md#ep-5-how-computers-calculate--the-alu)
>
> **Episode covers**: ALU = arithmetic unit + logic unit. Half-adder → full-adder → ripple-carry adder. Overflow, flags.

---

## Underrated context (Crash Course skips this)

- **Ripple-carry adders are slow.** A 64-bit ripple-carry adder waits for 64 carries to propagate. Real CPUs use **carry-lookahead adders** which compute all carries in parallel — much faster, much more transistors. Sanchit's COA course covers this in detail.
- **Multiplication isn't built-in.** ALUs do add/subtract/shift; multiplication is shift-and-add iterations (or a dedicated multiplier unit on modern CPUs). Division is even slower — often microcoded.
- **Flags are the ALU's side outputs.** Zero flag, sign flag, carry flag, overflow flag — these enable conditional jumps. Without flags, you couldn't write `if (x > 0)`.
- **Carry ≠ overflow.** Carry = result didn't fit in unsigned. Overflow = result is wrong in signed (two's complement). Same operation, different flag meanings.
- **The ALU is one circuit, many functions.** A 4-bit ALU has a 4-bit "operation select" input. Set it to 0010 → ADD. Set it to 0110 → SUB. Same hardware, different mode.

---

## Videos

- **[Crash Course CS Ep 5](https://www.youtube.com/watch?v=1I5ZMmrOfnA)**
- **[Ben Eater — Building an 8-bit ALU](https://www.youtube.com/watch?v=mOVOS9AjgFs)** — actual breadboard. Defining video for this episode.
- **[Computerphile — Adders](https://www.youtube.com/watch?v=wvJc9CZcvBc)**
- **[Computerphile — Carry Lookahead Adders](https://www.youtube.com/watch?v=8YbQNzpV0v4)** — why ripple-carry is slow.
- **[Sebastian Lague — Adder in his computer build](https://www.youtube.com/watch?v=QZwneRb-zqA)**

---

## Articles

- **[Wikipedia — Adder (electronics)](<https://en.wikipedia.org/wiki/Adder_(electronics)>)** — half/full/ripple/CLA all in one page.
- **[Carry-Lookahead Adder Explained](https://www.geeksforgeeks.org/carry-look-ahead-adder/)** — with the math (generate/propagate logic).
- **[Booth's Multiplication Algorithm](https://en.wikipedia.org/wiki/Booth's_multiplication_algorithm)** — how CPUs multiply signed numbers efficiently.
- **[Status flags explained](https://en.wikipedia.org/wiki/Status_register)** — what each flag means.

---

## Books

- **Petzold — _Code_ Ch 12–14** — builds adders from gates beautifully.
- **Harris & Harris — _Digital Design and Computer Architecture_ Ch 5** — university rigor.
- **CSAPP Ch 2.3** — integer arithmetic at hardware level.

---

## Interactive / hands-on

- **[Logic.ly](https://logic.ly/demo)** — build a half-adder, then a full-adder.
- **[CircuitVerse — search "ALU"](https://circuitverse.org/)** — many pre-built ALU designs to inspect.
- **[Nandgame](https://nandgame.com/)** — Level "Add Two Bits" through "ALU" walks you through building one from scratch.

---

## Exercises

1. Draw the truth table for a half-adder (2 inputs A, B; 2 outputs Sum, Carry).
2. Build a full-adder from two half-adders + one OR gate. Verify.
3. Chain 4 full-adders into a 4-bit ripple-carry adder.
4. Compute `0101 + 0110` by hand using the adder logic. Watch carries propagate.
5. Show how the same circuit becomes a subtractor when one input is inverted + carry-in is 1 (two's complement subtraction).

---

## Time budgets

| You have… | Do this                                                            |
| --------- | ------------------------------------------------------------------ |
| 30 min    | Ben Eater ALU video                                                |
| 2 hrs     | Petzold Ch 12–14 + build a full-adder in Logic.ly                  |
| 1 weekend | Nandgame ALU levels                                                |
| Long-term | Read carry-lookahead adder math; understand CLA gate-delay savings |

---

## Open questions

- [ ]
