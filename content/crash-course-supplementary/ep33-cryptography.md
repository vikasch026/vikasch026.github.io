# Ep 33: Cryptography — Supplementary Resources

> Companion to [crash-course.md → Ep 33](../crash-course.md#part-7--security--ai-ep-3140)
>
> **Episode covers**: Symmetric (AES), asymmetric (RSA), Diffie-Hellman key exchange, hashing.

---

## Underrated context (Crash Course skips this)

- **Crypto is easy to break, hard to use correctly.** Bugs are almost never in AES or RSA themselves — they're in padding, nonce reuse, side channels, key storage. "Don't roll your own crypto" is real.
- **Symmetric vs asymmetric tradeoffs**: symmetric (AES) is ~1000× faster but needs a shared key. Asymmetric (RSA, ECC) solves key exchange but is slow. **TLS uses both**: RSA/ECDHE to negotiate, then AES for the session.
- **RSA is on its way out.** ECC (Elliptic Curve Cryptography) gives equivalent security at much smaller key sizes. Modern TLS prefers ECDHE + Ed25519.
- **Hashing ≠ encryption.** Hash is one-way (SHA-256, BLAKE3). Encryption is reversible (AES). Confusing them in code is a classic interview trap.
- **Quantum threat is real but exaggerated for now.** Shor's algorithm breaks RSA/ECC if a sufficiently large quantum computer exists. NIST is standardizing post-quantum algorithms (Kyber, Dilithium) — already deployed in Chrome (2024).
- **Forward secrecy**: if your long-term key is compromised _later_, past sessions stay safe. Achieved via ephemeral key exchange (DHE/ECDHE). Modern TLS requires it.

---

## Videos

- **[Crash Course CS Ep 33](https://www.youtube.com/watch?v=jhXCTbFnK8o)**.
- **[Computerphile — Public Key Cryptography](https://www.youtube.com/watch?v=GSIDS_lvRv4)** — beautifully clear analogy with paint colors.
- **[3Blue1Brown — How (and why) RSA works](https://www.youtube.com/watch?v=4zahvcJ9glg)**.
- **[Numberphile — RSA Encryption](https://www.youtube.com/watch?v=M7kEpw1tn50)**.

---

## Articles

- **[Crypto 101](https://www.crypto101.io/)** — free intro book/PDF. Excellent.
- **[A Stick Figure Guide to AES](https://www.moserware.com/2009/09/stick-figure-guide-to-advanced.html)** — exactly what it says, and it works.
- **[Cryptopals Challenges](https://cryptopals.com/)** — the best way to learn cryptography by attacking broken implementations.
- **[Bruce Schneier — Soul of a New Cipher](https://www.schneier.com/academic/archives/1999/01/the_twofish_team_p.html)** — design rationale for Twofish.

---

## Books

- **Jean-Philippe Aumasson — _Serious Cryptography_** (2017) — modern, practical, current standards. The recommendation.
- **Bruce Schneier — _Applied Cryptography_** — classic but partially dated (still gold for fundamentals).
- **Simon Singh — _The Code Book_** — popular history, brilliant storytelling from Caesar to PGP.

---

## Interactive / hands-on

- **[Cryptopals](https://cryptopals.com/)** — 8 sets of attacks, language-agnostic. The crypto rite of passage.
- **[CryptoHack](https://cryptohack.org/)** — gamified, web-based.
- **[Keybase](https://keybase.io/)** — see public-key crypto in action with identity proofs.

---

## Time budgets

| You have… | Do this                                                            |
| --------- | ------------------------------------------------------------------ |
| 30 min    | Computerphile public-key + 3Blue1Brown RSA                         |
| 2 hrs     | Read Crypto 101 first 4 chapters                                   |
| 1 weekend | Cryptopals Set 1 (8 challenges) in your language of choice         |
| Long-term | Aumasson's _Serious Cryptography_ + finish Cryptopals (3–6 months) |

---

## Open questions

- [ ]
