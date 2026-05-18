# Ep 18: Operating Systems — Supplementary Resources

> Companion to [crash-course.md → Ep 18](../crash-course.md#part-4--operating-systems--storage-ep-1821)
>
> **Episode covers**: batch processing → multitasking → memory protection → virtual memory. Why operating systems exist.

---

## Underrated context (Crash Course skips this)

- **OS = the program that runs other programs.** It manages CPU time, memory, I/O, and gives processes the illusion of having their own machine.
- **Multitasking is an illusion.** A single core runs ONE thing at a time. The OS context-switches between processes hundreds of times per second. The illusion of parallelism is created by speed.
- **Virtual memory is genius.** Each process thinks it has the entire memory to itself, starting at address 0. The MMU translates virtual → physical. Enables: process isolation, swap to disk, copy-on-write fork, shared libraries.
- **Syscalls are the OS boundary.** Your program runs in "user mode" — can't touch hardware directly. To open a file, send a network packet, allocate memory: trap to "kernel mode" via a syscall. ~300 syscalls in Linux.
- **Monolithic vs microkernel.** Linux/Windows = monolithic (everything in kernel). Mac = hybrid. Minix/Mach = microkernel (drivers in user space, kernel is minimal). Tanenbaum-Torvalds debate (1992) is still famous.

---

## Videos

- **[Crash Course CS Ep 18](https://www.youtube.com/watch?v=26QPDBe-NB8)**
- **[MIT 6.S081 / 6.828 — Operating Systems](https://pdos.csail.mit.edu/6.S081/)** — _the_ free OS course. Lectures + xv6 (educational Unix-like OS you'll modify).
- **[Computerphile — Operating Systems](https://www.youtube.com/playlist?list=PLzH6n4zXuckqVnLJD-tEiL9z6JTSqyJL8)**.
- **[Linus Torvalds on the Linux kernel](https://www.youtube.com/watch?v=mFLak0OQ7Vs)**.
- **[Jon Gjengset — streaming low-level systems work](https://www.youtube.com/c/JonGjengset)**.

---

## Articles

- **[Linus Torvalds — Just for Fun](https://en.wikipedia.org/wiki/Just_for_Fun)** — autobio, why Linux exists.
- **[The Tanenbaum-Torvalds Debate](https://www.oreilly.com/openbook/opensources/book/appa.html)** — historical, fun.
- **[Linux From Scratch](http://www.linuxfromscratch.org/)** — build a Linux distro from source. Brutal.
- **[Beej's Guide to Unix Interprocess Communication](https://beej.us/guide/bgipc/)** — practical syscalls.

---

## Books

- **Remzi & Andrea Arpaci-Dusseau — _Operating Systems: Three Easy Pieces_** — _free, online, the best modern OS textbook._ Read it. https://pages.cs.wisc.edu/~remzi/OSTEP/
- **Andrew Tanenbaum — _Modern Operating Systems_** — classic.
- **Robert Love — _Linux Kernel Development_** — for Linux internals.
- **CSAPP Ch 8 — Exceptional Control Flow** — processes, signals, fork/exec.

---

## Interactive / hands-on

- **[MIT 6.S081 xv6 labs](https://pdos.csail.mit.edu/6.S081/2020/schedule.html)** — modify a real Unix-like kernel.
- **[OS Dev Wiki](https://wiki.osdev.org/Main_Page)** — write your own OS.
- **[Linux strace tutorial](https://blog.packagecloud.io/eng/2017/02/04/an-introduction-to-strace/)** — watch syscalls happen.

---

## Time budgets

| You have… | Do this                                     |
| --------- | ------------------------------------------- |
| 30 min    | Browse OSTEP table of contents; read Ch 1–2 |
| 1 month   | OSTEP Ch 1–15 (processes + memory)          |
| 3 months  | MIT 6.S081 xv6 labs                         |
| Long-term | Build a hobby OS or contribute to Linux     |

---

## Open questions

- [ ]
