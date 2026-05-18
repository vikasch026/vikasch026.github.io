# Ep 12: Programming Basics — Statements & Functions — Supplementary Resources

> Companion to [crash-course.md → Ep 12](../crash-course.md#part-3--software--programming-ep-1117)
>
> **Episode covers**: statements, variables, control flow (if/while/for), functions, scope.

---

## Underrated context (Crash Course skips this)

- **Variables are not what you think.** In low-level languages (C), a variable = a named memory address. In high-level languages (Python, JS), variables are _bindings_ to objects — quite different. This causes endless confusion when switching languages.
- **Functions are reusable abstraction.** Without functions, all programs would be straight-line code. _Every_ programming construct after Ep 12 builds on the idea "name a piece of behavior, call it later."
- **Recursion is iteration in disguise.** Anything you can do with `for` you can do with recursion, and vice versa. Some problems are clearer one way (tree traversal → recursion; counting → iteration).
- **Side effects vs pure functions.** A pure function: same inputs → same output, no side effects. Easy to test, easy to parallelize. Most bugs come from impure functions touching shared state.

---

## Videos

- **[Crash Course CS Ep 12](https://www.youtube.com/watch?v=l26oaHV7D40)**
- **[CS50 (Harvard) Week 1](https://cs50.harvard.edu/x/2024/)** — best for total beginners.
- **[Computerphile — Programming Paradigms](https://www.youtube.com/watch?v=sqV3pL5x8PI)**.

---

## Articles

- **[How to Think Like a Computer Scientist (free online book)](https://runestone.academy/ns/books/published/thinkcspy/index.html)** — Python intro, programming foundations.
- **[Eloquent JavaScript Ch 1–3 (free)](https://eloquentjavascript.net/)** — best modern intro.
- **[Paul Graham — Beating the Averages](http://www.paulgraham.com/avg.html)** — why abstraction matters.

---

## Books

- **K&R — _The C Programming Language_ Ch 1–4** — terse, classic.
- **Beej's Guide to C** — modern, conversational.
- **Robert Sedgewick — _Introduction to Programming in Python_** — gentle.
- **Bruce Tate — _Seven Languages in Seven Weeks_** — paradigm tour.

---

## Interactive / hands-on

- **[CS50 Problem Sets](https://cs50.harvard.edu/x/2024/psets/)** — free, world-class.
- **[Exercism (any language)](https://exercism.org/)** — small problems + mentor feedback.
- **[Codewars](https://www.codewars.com/)** — gamified practice.

---

## Time budgets

| You have… | Do this              |
| --------- | -------------------- |
| 30 min    | CS50 Week 1 lecture  |
| 1 weekend | CS50 PSet 0 + PSet 1 |
| 2 weeks   | Beej's Guide Ch 1–8  |

---

## Open questions

- [ ]
