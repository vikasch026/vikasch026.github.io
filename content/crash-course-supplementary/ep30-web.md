# Ep 30: World Wide Web — Supplementary Resources

> Companion to [crash-course.md → Ep 30](../crash-course.md#part-6--networking-ep-2830)
>
> **Episode covers**: HTTP, HTML, URLs, browsers, search engines.

---

## Underrated context (Crash Course skips this)

- **WWW ≠ Internet.** The Web is _one_ application running on the Internet (others: email, FTP, BitTorrent). Tim Berners-Lee invented the Web at CERN (1989) on top of the existing Internet.
- **HTTP is stateless by design.** Each request is independent. Cookies were bolted on later for sessions. Modern web works around statelessness with sessions, JWTs, OAuth.
- **The browser is the most complex piece of consumer software.** Chromium = ~30M lines of code. Renders HTML/CSS/JS, runs a JIT, has a sandbox, networking stack, GPU pipeline, accessibility tree. It's an OS.
- **HTML/CSS/JS won by luck.** Better languages existed (Smalltalk, Lisp). HTML won because it was simple, viewable in any browser, and you could "view source." Lock-in followed.
- **Search engines transformed the web.** Pre-Google, Yahoo had hand-curated directories. PageRank (1998) used link structure → web-scale search. Now it's all LLM-shaped (2024).

---

## Videos

- **[Crash Course CS Ep 30](https://www.youtube.com/watch?v=guvsH5OFizE)**.
- **[Web Browser Engineering (free book + videos)](https://browser.engineering/)** — build a browser from scratch.
- **[Tim Berners-Lee TED Talk](https://www.ted.com/talks/tim_berners_lee_the_next_web)** — the inventor's vision.
- **[How Browsers Work (Tali Garsiel) — talk](https://www.youtube.com/watch?v=n1cKlKM3jYI)**.

---

## Articles

- **[How Browsers Work — Tali Garsiel](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)** — long-form, classic.
- **[MDN Web Docs](https://developer.mozilla.org/)** — the reference for HTML/CSS/JS.
- **[The Original WWW Proposal (Berners-Lee, 1989)](https://www.w3.org/History/1989/proposal.html)** — historical.
- **[A Brief History of the URL](https://blog.cloudflare.com/url-format/)**.

---

## Books

- **Pavel Panchekha & Chris Harrelson — _Web Browser Engineering_** — free online.
- **David Flanagan — _JavaScript: The Definitive Guide_**.
- **Marijn Haverbeke — _Eloquent JavaScript_** — free online.

---

## Time budgets

| You have… | Do this                                               |
| --------- | ----------------------------------------------------- |
| 30 min    | Berners-Lee TED + Crash Course rewatch                |
| 1 weekend | MDN HTML/CSS basics                                   |
| Long-term | _Web Browser Engineering_ — build a browser in Python |

---

## Open questions

- [ ]
