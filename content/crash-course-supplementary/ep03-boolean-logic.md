# Ep 3: Boolean Logic & Logic Gates — Supplementary Resources

> Companion to [crash-course.md → Ep 3](../crash-course.md#ep-3-boolean-logic--logic-gates)
>
> **Episode covers**: binary, Boolean algebra (NOT, AND, OR, XOR), logic gates built from transistors.

---

## Underrated context (Crash Course skips this)

- **Boole (1854) predicted nothing computing-related.** He invented Boolean algebra as pure math 90 years before computers. Claude Shannon's MIT master's thesis (1937, age 21) connected Boolean algebra to switching circuits — _that_ was the moment electronic computing became possible. Often called "the most important master's thesis of the 20th century."
- **NAND alone is universal.** You can build any logic function using only NAND gates (or only NOR). This is why CPUs are often described as "billions of NAND gates" — that's literally true.
- **Gates are not philosophical, they're physical.** A gate = a few transistors arranged so that voltage on the inputs deterministically sets voltage on the output. Same physics as a light switch.
- **Truth tables are the source of truth.** If two circuits have the same truth table, they're equivalent — no matter how differently they're built. This is the foundation of digital logic optimization (K-maps, Quine-McCluskey).
- **XOR is the secret ingredient.** Half-adder = XOR (sum) + AND (carry). Every adder, every parity check, every CRC, every cipher uses XOR. Watch for it everywhere.

---

## Videos

- **[Crash Course CS Ep 3 itself — watch twice](https://www.youtube.com/watch?v=gI-qXk7XojA)**
- **[Ben Eater — Logic gates from scratch](https://www.youtube.com/watch?v=KM0DdEaY5sY)** — builds AND/OR/NOT from transistors on a breadboard. _The_ video for this episode.
- **[Computerphile — Boolean Logic & Logic Gates](https://www.youtube.com/watch?v=KIjPSnvkUjQ)** — Brailsford as always.
- **[3Blue1Brown — Binary, Hanoi, and Sierpinski](https://www.youtube.com/watch?v=2SUvWfNJSsM)** — bonus, beautiful binary intuition.
- **[Sebastian Lague — Exploring how computers work](https://www.youtube.com/watch?v=QZwneRb-zqA)** — builds gates → adder → memory in a custom simulator. Modern remake of nand2tetris vibe.

---

## Articles

- **[Claude Shannon's 1937 thesis (PDF)](https://dspace.mit.edu/handle/1721.1/11173)** — the founding document. First 30 pages are readable.
- **[Wikipedia — Boolean algebra (Boole's original)](https://en.wikipedia.org/wiki/Boolean_algebra)** — solid reference.
- **[All About Circuits — Logic Gates chapter](https://www.allaboutcircuits.com/textbook/digital/chpt-3/digital-signals-gates/)** — free textbook, classroom-quality.
- **[NAND universality proof](https://en.wikipedia.org/wiki/NAND_logic)** — quick reference.

---

## Books

- **Charles Petzold — _Code: The Hidden Language of Computer Hardware and Software_** — **read Ch 6–12.** Builds gates from relays from Morse code. Best book on this material for any audience.
- **Harris & Harris — _Digital Design and Computer Architecture_** — university textbook. Ch 1–2 if you want rigor.
- **Shannon's biography: Jimmy Soni — _A Mind at Play_** — Shannon was unreasonably brilliant. Worth knowing.

---

## Interactive / hands-on

- **[Logic.ly](https://logic.ly/demo)** — drag-and-drop gate simulator in browser. Build a half-adder.
- **[CircuitVerse](https://circuitverse.org/)** — more advanced, free.
- **[Nandgame](https://nandgame.com/)** — puzzle game: build a computer from NAND. _Do this._ Pure dopamine.
- **[Falstad Logic Simulator](https://www.falstad.com/circuit/)** — try the "Combinational Logic → 4-bit Adder" example.

---

## Exercises to actually try

1. Write the truth table for `(A AND B) OR (NOT A AND C)` — verify with a simulator.
2. Build a half-adder using only NAND gates. (Hint: NOT = NAND with same input; AND = NAND + NOT.)
3. Prove XOR can be built from 4 NAND gates.
4. Play Nandgame to level 10.

---

## Time budgets

| You have… | Do this                                                 |
| --------- | ------------------------------------------------------- |
| 30 min    | Ben Eater logic gates video + play 5 levels of Nandgame |
| 2 hrs     | Read Petzold _Code_ Ch 6–10                             |
| 1 weekend | Finish Nandgame entirely (~6 hrs)                       |
| Long-term | Petzold _Code_ cover-to-cover                           |

---

## Open questions

- [ ]
