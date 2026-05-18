# Ep 31: Cybersecurity — Supplementary Resources

> Companion to [crash-course.md → Ep 31](../crash-course.md#part-7--security--ai-ep-3140)
>
> **Episode covers**: CIA triad (Confidentiality, Integrity, Availability), authentication, authorization, threat models.

---

## Underrated context (Crash Course skips this)

- **Security is a process, not a product.** Bruce Schneier's mantra. There's no "secure" software — only software whose attacks you haven't seen yet.
- **Threat modeling > checklists.** Real security starts with "who's attacking me, with what resources, and what are they after?" — not "did I enable 2FA."
- **Most breaches are human, not technical.** Phishing, social engineering, weak passwords, misconfigured S3 buckets. Cryptography is rarely broken; people are.
- **The "AAA" model**: Authentication (who are you), Authorization (what can you do), Audit (what did you do). All three matter.
- **Defense in depth.** No single layer should be the only thing between attackers and your data. Network firewall + app validation + DB permissions + encryption at rest.
- **Zero Trust** (modern paradigm): "never trust, always verify" — kills the soft-interior/hard-shell network model that ruled until ~2015.

---

## Videos

- **[Crash Course CS Ep 31](https://www.youtube.com/watch?v=bPVaOlJ6ln0)**.
- **[Computerphile — Security playlist](https://www.youtube.com/playlist?list=PLzH6n4zXuckp_GLb0HPyZNYJTk5wU_3wO)** — Mike Pound on real-world attacks.
- **[LiveOverflow YouTube](https://www.youtube.com/c/LiveOverflow)** — practical hacking, CTF walkthroughs.

---

## Articles

- **[OWASP Top 10](https://owasp.org/Top10/)** — the canonical list of common web vulnerabilities. Read it.
- **[Krebs on Security](https://krebsonsecurity.com/)** — investigative journalism on real breaches.
- **[Schneier on Security](https://www.schneier.com/)** — long-running thoughtful blog.
- **[Google's BeyondCorp paper](https://research.google/pubs/beyondcorp-a-new-approach-to-enterprise-security/)** — origin of Zero Trust.

---

## Books

- **Bruce Schneier — _Secrets and Lies_** — the human side of security. Still the best intro.
- **Ross Anderson — _Security Engineering_** ([free PDF](https://www.cl.cam.ac.uk/~rja14/book.html)) — encyclopedic, free, brilliant.
- **Kim Zetter — _Countdown to Zero Day_** — Stuxnet investigation, reads like a thriller.

---

## Interactive / hands-on

- **[picoCTF](https://picoctf.org/)** — beginner-friendly Capture The Flag.
- **[OverTheWire Bandit](https://overthewire.org/wargames/bandit/)** — Linux + security basics via SSH puzzles.
- **[HackTheBox](https://www.hackthebox.com/)** — realistic pentest scenarios.

---

## Time budgets

| You have… | Do this                                                |
| --------- | ------------------------------------------------------ |
| 30 min    | Skim OWASP Top 10                                      |
| 2 hrs     | Schneier essay collection + Computerphile picks        |
| 1 weekend | OverTheWire Bandit levels 1–15                         |
| Long-term | Anderson's _Security Engineering_ + monthly Krebs read |

---

## Open questions

- [ ]
