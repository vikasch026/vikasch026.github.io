# Ep 28: Computer Networks — Supplementary Resources

> Companion to [crash-course.md → Ep 28](../crash-course.md#part-6--networking-ep-2830)
>
> **Episode covers**: LAN, MAC addresses, Ethernet, CSMA/CD, switches vs hubs.

---

## Underrated context (Crash Course skips this)

- **The OSI model is theory; TCP/IP is reality.** Textbooks teach 7-layer OSI; the real internet uses 4-layer TCP/IP (link, IP, transport, application). Know both, but TCP/IP is what runs.
- **Ethernet won by being good enough.** Originally coax cable, collision detection (CSMA/CD). Modern Ethernet is switched (no collisions) over twisted pair or fiber. Same name, different physics.
- **MAC addresses are layer 2, IP is layer 3.** MAC = hardware ID, unique per NIC. IP = software address, can change. ARP translates IP → MAC on a local network.
- **Switches > hubs.** Hub: broadcasts every packet to every port. Switch: learns MAC addresses, sends only to the right port. Hubs are dead.
- **Wi-Fi is just radio Ethernet.** 802.11 standards are conceptually similar to wired Ethernet but with RF physics: collisions, attenuation, interference.

---

## Videos

- **[Crash Course CS Ep 28](https://www.youtube.com/watch?v=3QhU9jd03a0)**.
- **[Ben Eater — Networking series](https://www.youtube.com/playlist?list=PLowKtXNTBypH19whXTVoG3oKSuOcw_XeW)** — wires up packets on hardware.
- **[Computerphile — TCP/IP explanation](https://www.youtube.com/watch?v=PpsEaqJV_A0)**.
- **[Stanford CS144 — Introduction to Computer Networking](https://cs144.github.io/)** — free, builds a TCP stack from scratch.

---

## Articles

- **[High Performance Browser Networking — Ilya Grigorik (free online)](https://hpbn.co/)** — modern, brilliant.
- **[Beej's Guide to Network Programming](https://beej.us/guide/bgnet/)** — sockets in C.

---

## Books

- **Kurose & Ross — _Computer Networking: A Top-Down Approach_** — the standard textbook.
- **Andrew Tanenbaum — _Computer Networks_** — alternative classic.
- **Charles Severance — _Introduction to Networking_** — free, gentle.

---

## Interactive / hands-on

- **[Wireshark](https://www.wireshark.org/)** — packet capture. _Run it on your network. Look at packets._
- **[Stanford CS144 labs](https://cs144.github.io/)** — implement TCP from scratch.

---

## Time budgets

| You have… | Do this                                                            |
| --------- | ------------------------------------------------------------------ |
| 30 min    | Run Wireshark, watch your own DNS + HTTP packets                   |
| 1 weekend | Beej's Guide to Network Programming + write a TCP echo server in C |
| 3 months  | Stanford CS144 — labs build a working TCP stack                    |

---

## Open questions

- [ ]
