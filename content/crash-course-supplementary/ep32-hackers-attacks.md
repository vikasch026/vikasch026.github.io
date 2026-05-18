# Ep 32: Hackers & Cyber Attacks — Supplementary Resources

> Companion to [crash-course.md → Ep 32](../crash-course.md#part-7--security--ai-ep-3140)
>
> **Episode covers**: Phishing, social engineering, buffer overflows, code injection, worms, DDoS.

---

## Underrated context (Crash Course skips this)

- **"Hacker" originally meant clever tinkerer.** MIT model railroad club, 1950s. Media flipped it to "criminal." Both meanings coexist.
- **Buffer overflow is a C/C++ problem.** Languages with bounds checking (Java, Python, Rust, Go) are immune by default. ~70% of CVEs in C/C++ codebases are memory safety bugs (Microsoft + Google data).
- **SQL injection still exists in 2024.** Despite being trivially preventable with parameterized queries, it's #3 on OWASP. People keep concatenating strings.
- **Worms vs viruses vs trojans**: worm = self-propagating, virus = needs a host file, trojan = disguised. Marketing blurs these; technically distinct.
- **DDoS economics.** Booter services rent compromised IoT devices (Mirai botnet, 2016) for cents. Defense (Cloudflare, AWS Shield) is far more expensive than attack.
- **Famous worms shaped the industry**: Morris (1988) → first CERT. ILOVEYOU (2000) → email AV boom. Stuxnet (2010) → state-level malware era. WannaCry (2017) → ransomware mainstream.

---

## Videos

- **[Crash Course CS Ep 32](https://www.youtube.com/watch?v=AuYNXgO_f3Y)**.
- **[LiveOverflow — Binary Exploitation series](https://www.youtube.com/playlist?list=PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN)** — buffer overflow from scratch.
- **[Computerphile — Buffer Overflow Attack](https://www.youtube.com/watch?v=1S0aBV-Waeo)** — Mike Pound walks through a real one.
- **[Defcon talks (YouTube)](https://www.youtube.com/user/DEFCONConference)** — talks from the world's biggest hacker con.

---

## Articles

- **["Smashing The Stack For Fun And Profit"](http://phrack.org/issues/49/14.html)** — Aleph One, Phrack 49 (1996). The classic buffer overflow primer. Required reading.
- **[The Morris Worm — Postmortem](https://spaf.cerias.purdue.edu/tech-reps/823.pdf)** — Spafford's analysis.
- **[Mirai botnet writeup (Cloudflare)](https://blog.cloudflare.com/inside-mirai-the-infamous-iot-botnet-a-retrospective-analysis/)**.
- **[OWASP — SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection)**.

---

## Books

- **Cliff Stoll — _The Cuckoo's Egg_** — 1986 hacker hunt told as a memoir. Foundational and gripping.
- **Andrew Huang — _Hacking the Xbox_** — hardware hacking ethos. Free [PDF](https://nostarch.com/xboxfree).
- **Jon Erickson — _Hacking: The Art of Exploitation_** — bottom-up with a Linux VM.

---

## Interactive / hands-on

- **[pwn.college](https://pwn.college/)** — free, exhaustive binary exploitation course (ASU).
- **[Microcorruption](https://microcorruption.com/)** — embedded security CTF from Matasano. Brilliant.
- **[Hack The Box — Starting Point](https://www.hackthebox.com/training/starting-point)**.

---

## Time budgets

| You have… | Do this                                               |
| --------- | ----------------------------------------------------- |
| 30 min    | Computerphile buffer overflow video                   |
| 2 hrs     | Read _Smashing The Stack_ + Mirai writeup             |
| 1 weekend | Microcorruption first 5–7 levels                      |
| Long-term | _The Cuckoo's Egg_ + pwn.college (months of material) |

---

## Open questions

- [ ]
