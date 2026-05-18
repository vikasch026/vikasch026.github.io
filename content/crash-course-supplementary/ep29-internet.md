# Ep 29: The Internet — Supplementary Resources

> Companion to [crash-course.md → Ep 29](../crash-course.md#part-6--networking-ep-2830)
>
> **Episode covers**: packets, routers, IP, TCP, UDP, DNS.

---

## Underrated context (Crash Course skips this)

- **The internet is dumb pipes + smart endpoints.** End-to-end principle: intelligence at the edges (your computer), not in the network. This is why innovation happens fast on the internet — no permission needed.
- **IPv4 ran out in 2011.** Only 4.3 billion IP addresses (32 bits). IPv6 (128 bits) solves it but adoption is slow (~40% in 2024). NAT papered over the gap.
- **TCP vs UDP is reliability vs speed.** TCP: guarantees delivery, in order, no duplicates — but slow on bad networks. UDP: send-and-pray, fast. Use TCP for HTTP/email, UDP for video/gaming/DNS.
- **BGP routes the internet.** Border Gateway Protocol — how routers tell each other "I can reach network X." Misconfigured BGP → entire countries go offline (Pakistan/YouTube 2008).
- **DNS is the phonebook + cache hierarchy.** Your computer asks resolver → root → TLD → authoritative nameserver. Caching makes it fast. DNS poisoning is a real attack.
- **QUIC is the new TCP.** Google-invented, runs over UDP, used by HTTP/3. Faster handshakes, no head-of-line blocking. The future.

---

## Videos

- **[Crash Course CS Ep 29](https://www.youtube.com/watch?v=AEaKrq3SpW8)**.
- **[Computerphile — How the Internet Works](https://www.youtube.com/watch?v=AEaKrq3SpW8)**.
- **[The Internet — Behind the Scenes (Vox/CGP Grey style)](https://www.youtube.com/results?search_query=how+the+internet+works)**.
- **[Ben Eater — TCP/IP videos](https://www.youtube.com/c/BenEater)**.

---

## Articles

- **[High Performance Browser Networking](https://hpbn.co/)** — free, comprehensive.
- **[Cloudflare Learning Center](https://www.cloudflare.com/learning/)** — clear writeups of HTTPS, DNS, BGP, DDoS.
- **[Julia Evans' networking zines](https://wizardzines.com/)** — adorable + accurate.
- **[How HTTPS Works (comic)](https://howhttps.works/)**.

---

## Books

- **Kurose & Ross — _Computer Networking_**.
- **Stevens — _TCP/IP Illustrated_** — the bible. Deep.
- **Mark Allen Weiss — _The Internet_** — historical.

---

## Time budgets

| You have… | Do this                                                 |
| --------- | ------------------------------------------------------- |
| 30 min    | Cloudflare Learning Center: DNS, HTTPS, TCP/IP articles |
| 1 weekend | HPBN book Part 1                                        |
| Long-term | Stevens' _TCP/IP Illustrated_ Vol 1                     |

---

## Open questions

- [ ]
