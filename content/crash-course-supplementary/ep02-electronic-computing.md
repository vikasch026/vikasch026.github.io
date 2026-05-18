# Ep 2: Electronic Computing — Supplementary Resources

> Companion to [crash-course.md → Ep 2](../crash-course.md#ep-2-electronic-computing)
>
> **Episode covers**: relays → vacuum tubes → transistors. Harvard Mark I, ENIAC, Bell Labs transistor (1947), Moore's Law.

---

## Underrated context (Crash Course skips this)

- **WWII was the forcing function.** ENIAC was built to compute artillery firing tables. Colossus (UK, 1943) broke German codes. Without the war, electronic computing would have been delayed by a decade. Crash Course mentions ENIAC but understates how much military money created the field.
- **The "bug" story is real.** Grace Hopper's team found an actual moth stuck in Harvard Mark II's relay in 1947. The logbook with the taped-in moth still exists at the Smithsonian.
- **The transistor was the most important invention of the 20th century.** Shockley, Bardeen, and Brattain won the 1956 Nobel Prize for it. Everything digital — phones, internet, AI — descends from that one 1947 Bell Labs experiment.
- **Why vacuum tubes were doomed.** ENIAC had 17,000 tubes. Each had a Mean Time Between Failure (MTBF) of ~3000 hours. With 17k tubes, _one failed every ~10 minutes_. Operators spent half their time replacing tubes. Transistors fixed this overnight.
- **Moore's Law was an observation, not a law.** Gordon Moore noticed transistor counts doubled every ~year in 1965, revised to every 2 years in 1975. It held for ~50 years through _huge_ engineering effort, not magic. It's slowing now (Dennard scaling broke ~2005; ~3nm hits physical limits).

---

## Videos

- **[Computerphile — Transistors Explained (Brailsford)](https://www.youtube.com/watch?v=IcrBqCFLHIY)** — clearest explanation of how a transistor switches and amplifies.
- **[Bell Labs — The Transistor (1953 documentary)](https://www.youtube.com/watch?v=MQzpLLhN0fY)** — original Bell Labs film. Historical gold.
- **[Computerphile — ENIAC](https://www.youtube.com/watch?v=k4oGI_dNaPc)** — what it actually was, how programming meant rewiring.
- **[Veritasium — The Most Important Invention in History](https://www.youtube.com/watch?v=eb-1zNT9C9w)** — the transistor story, broad audience.
- **[Asianometry — How TSMC and ASML Make EUV Chips](https://www.youtube.com/watch?v=lFB0Z1XSwbM)** — modern continuation of the transistor story. How we still scale today.
- **[Crash Course Ep 2 itself, slowly + Computerphile — Moore's Law](https://www.youtube.com/watch?v=fhM1bxqU6gM)** — why it's slowing.

---

## Articles

- **[Computer History Museum — ENIAC](https://www.computerhistory.org/revolution/birth-of-the-computer/4/78)** — primary source, photos, context.
- **[Nobel Prize site — The Transistor (1956)](https://www.nobelprize.org/prizes/physics/1956/summary/)** — Shockley/Bardeen/Brattain. Read the Nobel lecture.
- **[IEEE Spectrum — The Transistor at 75](https://spectrum.ieee.org/transistor-at-75)** — full history, modern relevance.
- **[Moore's original 1965 paper (PDF)](https://www.cs.utexas.edu/~fussell/courses/cs352h/papers/moore.pdf)** — 4 pages. _Read this._ It's the founding document of modern computing.
- **[Why Moore's Law is dying — IEEE](https://spectrum.ieee.org/the-death-of-moores-law-will-spur-innovation)** — what comes after.
- **[The First Computer Bug (Smithsonian)](https://www.smithsonianmag.com/smithsonian-institution/log-book-grace-hopper-software-180970428/)** — Grace Hopper's moth.

---

## Books

- **Walter Isaacson — _The Innovators_ Ch 3–5** — covers Turing/Mauchly/Eckert (ENIAC) and Shockley/Bardeen/Brattain (transistor). Best narrative.
- **Jon Gertner — _The Idea Factory: Bell Labs and the Great Age of American Innovation_** — the cathedral of 20th-century invention. Transistor, laser, info theory all came from here. _Highly recommended._
- **Thomas Haigh & Mark Priestley — _ENIAC in Action_** — definitive ENIAC history, recent scholarship that corrects old myths.
- **Chris Miller — _Chip War_** — modern follow-up. How transistors became geopolitics. Excellent.

---

## Interactive / hands-on

- **[Ben Eater — Build an 8-bit computer from scratch (breadboard)](https://eater.net/8bit)** — wire actual transistors and gates. The single best way to internalize Ep 2–9.
- **[Nand2Tetris](https://www.nand2tetris.org/)** — simulate building from NAND up.
- **[Falstad Circuit Simulator](https://www.falstad.com/circuit/)** — simulate transistor circuits in browser. Try the "NPN common emitter" example.

---

## Conceptual links to future episodes

- **Ep 3 (Boolean Logic)**: a transistor is _how_ a logic gate is physically built. Ep 2 explains the switch; Ep 3 explains what you do with it.
- **Ep 17 (Integrated Circuits)**: revisits Moore's Law with photolithography depth.
- **CSAPP Ch 1**: the "system" view assumes transistors as given. Crash Course Ep 2 fills the gap CSAPP skips.

---

## Time budgets

| You have…       | Do this                                                               |
| --------------- | --------------------------------------------------------------------- |
| 30 min          | Computerphile Transistors video + read Moore's 1965 paper             |
| 2 hrs           | Veritasium + IEEE Spectrum "Transistor at 75" + browse CHM ENIAC page |
| 1 weekend       | Read Gertner's _Idea Factory_ Ch 1–4 (transistor chapters)            |
| Ongoing project | Ben Eater's 8-bit breadboard computer (~$300 in parts, ~3 months)     |

---

## Open questions / things to dig deeper

_Add your own as you read._

- [ ]
