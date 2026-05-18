# Ep 16: Software Engineering — Supplementary Resources

> Companion to [crash-course.md → Ep 16](../crash-course.md#part-3--software--programming-ep-1117)
>
> **Episode covers**: functions, OOP, APIs, IDEs, version control, documentation. The transition from "writing code" to "engineering software."

---

## Underrated context (Crash Course skips this)

- **Software engineering is mostly about people.** Code is read 10× more than written. Most of your work is communicating with future-you and other humans.
- **Version control is non-negotiable.** Git is hard but mandatory. Pre-Git workflows (folders named `final_FINAL_v2`) cost millions of hours of lost work.
- **OOP isn't the only paradigm.** Functional, procedural, data-oriented — all valid. OOP has been over-sold; modern advice: prefer composition over inheritance, prefer data over classes.
- **Tests are documentation that won't lie.** Comments rot. Tests fail loudly when behavior changes. Good test suites are the #1 differentiator between hobby code and engineering.
- **APIs are contracts.** Once you publish an API, you can never break it without breaking your users. This is why API design is hard and Hyrum's Law exists.

---

## Videos

- **[Crash Course CS Ep 16](https://www.youtube.com/watch?v=O753uuutqH8)**
- **[Bryan Cantrill — talks on software engineering](https://www.youtube.com/results?search_query=bryan+cantrill)** — opinionated, brilliant.
- **[Casey Muratori — Clean Code, Horrible Performance](https://www.youtube.com/watch?v=tD5NrevFtbU)** — controversial but important counterpoint to OOP dogma.
- **[Rich Hickey — Simple Made Easy](https://www.youtube.com/watch?v=SxdOUGdseq4)** — _watch this._ Best 1-hour talk on engineering.

---

## Articles

- **[The Pragmatic Programmer (excerpts)](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/)** — buy the book; it's a career investment.
- **[Joel Spolsky — Things You Should Never Do, Part I](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/)** — on rewrites.
- **[Hyrum's Law](https://www.hyrumslaw.com/)** — "with enough users, every observable behavior of your system will be depended on."
- **[John Carmack's .plan files](https://github.com/ESWAT/john-carmack-plan-archive)** — read engineering wisdom from a master.

---

## Books

- **Andy Hunt & Dave Thomas — _The Pragmatic Programmer_** — single best book on the craft.
- **Robert C. Martin — _Clean Code_** — popular, opinionated. Useful early; outgrow it.
- **Fred Brooks — _The Mythical Man-Month_** — 1975 but still relevant. "Adding manpower to a late project makes it later."
- **John Ousterhout — _A Philosophy of Software Design_** — short, modern, excellent.
- **Martin Fowler — _Refactoring_** — when you have existing code to improve.

---

## Tooling to learn

- **Git** — Pro Git book (free online). `git rebase -i` is the secret weapon.
- **An IDE / editor** — VS Code, Neovim, JetBrains. Pick one, learn it deeply.
- **Debugger** — `gdb` or `lldb` or your IDE's. Print debugging is for amateurs.
- **CI/CD** — GitHub Actions is enough for most projects.

---

## Time budgets

| You have… | Do this                                       |
| --------- | --------------------------------------------- |
| 30 min    | Rich Hickey "Simple Made Easy"                |
| 1 weekend | _The Pragmatic Programmer_                    |
| Ongoing   | Practice on real projects + read others' code |

---

## Open questions

- [ ]
