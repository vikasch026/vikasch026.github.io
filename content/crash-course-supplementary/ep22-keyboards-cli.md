# Ep 22: Keyboards & Command Line — Supplementary Resources

> Companion to [crash-course.md → Ep 22](../crash-course.md#part-5--user-interface--graphics-ep-2227)
>
> **Episode covers**: input devices → keyboards → command line interface. The history of text-based interaction.

---

## Underrated context (Crash Course skips this)

- **QWERTY is suboptimal but locked in.** Designed to slow typists down to prevent typewriter jams. Dvorak, Colemak are faster — but no one switches because everything assumes QWERTY.
- **The terminal is alive.** Despite GUIs, the CLI dominates: developer workflows, servers, automation. Learning shell (bash/zsh) is a 10× productivity multiplier.
- **Pipes are the Unix philosophy.** `cat file | grep foo | sort | uniq -c` — compose small tools. Doug McIlroy's 1973 invention. Most powerful programming idea ever.
- **TTY is a 1960s teletype.** Your terminal is emulating a paper-tape teletype machine. That's why we have weird codes like `^C` (ETX) and `^Z` (SUB).
- **`vim` and `emacs` predate the mouse.** They make sense once you realize the design constraint was "no mouse, no GUI, slow modem."

---

## Videos

- **[Crash Course CS Ep 22](https://www.youtube.com/watch?v=4RPtJ9UyHS0)**
- **[The UNIX System: Making Computers Easier to Use (1982)](https://www.youtube.com/watch?v=tc4ROCJYbm0)** — Brian Kernighan + Dennis Ritchie. _Watch this._ History gold.
- **[Computerphile — Why the Command Line is so Powerful](https://www.youtube.com/watch?v=BlEzg37Ar3o)**.
- **[ThePrimeagen — terminal workflow](https://www.youtube.com/c/ThePrimeagen)** — modern advocate.

---

## Articles

- **[The Art of Unix Programming — Eric Raymond](http://www.catb.org/~esr/writings/taoup/html/)** — free online. Philosophy + history.
- **[Doug McIlroy on pipes](https://www.bell-labs.com/usr/dmr/www/hist.html)**.
- **[Greg Wilson — bash for scientists](https://swcarpentry.github.io/shell-novice/)**.
- **[The Missing Semester (MIT)](https://missing.csail.mit.edu/)** — _do this course._ Covers shell, vim, git, tmux. Free.

---

## Books

- **Brian Kernighan & Rob Pike — _The Unix Programming Environment_** — 1984, still relevant.
- **Cameron Newham — _Learning the bash Shell_** — practical.
- **William Shotts — _The Linux Command Line_** — free PDF online. Excellent.

---

## Interactive / hands-on

- **[The Missing Semester](https://missing.csail.mit.edu/)** — MIT, free, 12 hours total. _Best investment for any dev._
- **[OverTheWire — Bandit](https://overthewire.org/wargames/bandit/)** — gamified Linux shell tutorial.
- **[explainshell.com](https://explainshell.com/)** — paste any shell command, get an explanation.

---

## Time budgets

| You have… | Do this                                            |
| --------- | -------------------------------------------------- |
| 30 min    | The 1982 UNIX video                                |
| 1 weekend | The Missing Semester (MIT)                         |
| 2 weeks   | OverTheWire Bandit levels 1–30                     |
| Long-term | Learn `vim`, `tmux`, `fzf`, `rg`, modern CLI tools |

---

## Open questions

- [ ]
