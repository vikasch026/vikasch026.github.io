# Computer Networks Learning Plan

## Reference Video

[Computer Networking Full Course - OSI Model Deep Dive with Real Life Examples](https://www.youtube.com/watch?v=IPvYjXCsTg8) by Kunal Kushwaha (4hrs, 3M+ views)

### Community Notes for the Video

- [Notes by Divyansh Sharma (Google Drive PDF)](https://drive.google.com/file/d/1_0ice1lkjcdeJ9fJhVfEAumsTi1uO2ez/view?usp=sharing)

---

## Phase 1: Big Picture (Week 1-2)

**Goal**: Understand how the internet works end-to-end.

| Resource                                                                                      | Type               | Why                                                     |
| --------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------- |
| **Kunal Kushwaha's video** (linked above)                                                     | Free YouTube, 4hrs | Great visual overview of OSI, protocols, devices        |
| [How DNS Works](https://howdns.works/)                                                        | Free comic         | Makes DNS click instantly                               |
| [Practical Networking](https://www.practicalnetworking.net/) — Networking Fundamentals series | Free YouTube       | Ed Harmoush explains each concept with clear animations |

---

## Phase 2: Structured Depth (Week 3-6)

**Goal**: Actually understand protocols, not just memorize layers.

| Resource                                                                                            | Type          | Why                                                                                                                            |
| --------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Computer Networking: A Top-Down Approach** — Kurose & Ross (9th ed)                               | Book ~$60     | **THE textbook.** Starts from HTTP/DNS (what you know) and works down to physical. Readable, not dry. Wireshark labs included. |
| [Wireshark Labs](https://www-net.cs.umass.edu/kurose_ross/about.php) (from the Kurose book website) | Free          | See real packets. Nothing beats watching a TCP handshake happen live.                                                          |
| **Google's "Bits and Bytes of Computer Networking"** on Coursera                                    | Free to audit | Solid structured course if you prefer video. 1M+ enrolled, 4.7 stars                                                           |

---

## Phase 3: Go Deep Where It Matters (Week 7-10)

**Goal**: Master TCP/IP and HTTP — the protocols you'll actually use daily as a developer.

| Resource                                                            | Type                            | Why                                                                                                                                     |
| ------------------------------------------------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **TCP/IP Illustrated, Vol 1** — W. Richard Stevens                  | Book ~$50                       | The bible. Read chapters on TCP, UDP, DNS, HTTP. Skip the rest on first pass.                                                           |
| **High Performance Browser Networking** — Ilya Grigorik             | [Free online](https://hpbn.co/) | Written by a Google engineer. Covers TCP optimization, TLS, HTTP/2, WebSockets — **the most practical networking book for developers**. |
| [Beej's Guide to Network Programming](https://beej.us/guide/bgnet/) | Free online                     | If you want to understand sockets. Classic, fun writing style.                                                                          |

### About TCP/IP Illustrated (3 Volumes)

| Volume    | Title                                                     | Covers                                                                                                                   |
| --------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Vol 1** | _The Protocols_                                           | Core protocols — IP, TCP, UDP, ICMP, ARP, DNS, HTTP. How they work at the packet level with real traces. **Start here.** |
| **Vol 2** | _The Implementation_                                      | Actual BSD kernel source code implementing TCP/IP. For OS/systems engineers.                                             |
| **Vol 3** | _TCP for Transactions, HTTP, NNTP, UNIX Domain Protocols_ | Specialized extensions. Most niche, largely dated.                                                                       |

> Most people only need **Volume 1**. Volume 2 is for kernel hackers. Volume 3 is largely obsolete.

---

## Phase 4: Hands-On Practice (Ongoing)

**Goal**: Touch real packets, not just read about them.

| Tool                                        | What to do                                                                                    |
| ------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **Wireshark**                               | Capture your own traffic. Watch a TLS handshake. Follow a TCP stream. Filter HTTP requests.   |
| **`curl -v`**                               | See HTTP headers, TLS negotiation, connection reuse in your terminal                          |
| **`ping`, `traceroute`, `dig`, `nslookup`** | Debug DNS, trace routes, understand latency                                                   |
| **Cisco Packet Tracer** (free)              | Build virtual networks, configure routers/switches — only if you want to go deeper into infra |
| **Build something**                         | Write a TCP chat server in Python/Go. Nothing teaches sockets like building with them.        |

---

## Rankings

### Books (priority order for a developer)

1. **Kurose & Ross — Top-Down Approach** — Best first book, period
2. **High Performance Browser Networking** — Most practical for web devs (free!)
3. **TCP/IP Illustrated Vol 1** — Deep reference, read after the above two
4. **Beej's Guide** — Socket programming specifically
5. **Computer Networks — Tanenbaum** — Academic alternative to Kurose (more OS-level)

### Video Courses (priority order)

1. **Kunal Kushwaha** (the reference video)
2. **Practical Networking — Ed Harmoush** (YouTube, free)
3. **Google — Bits & Bytes of Networking** (Coursera, free to audit)
4. **Professor Messer's Network+** (YouTube, free — more cert-focused)

### Tools (must use)

1. **Wireshark** — non-negotiable
2. **curl / dig / traceroute** — daily CLI tools
3. **Packet Tracer** — optional, good for visual learners

---

## TL;DR — If You Only Pick 3 Things

1. **Finish Kunal's video** for the overview
2. **Read Kurose & Ross** (Top-Down Approach) for structured understanding
3. **Read High Performance Browser Networking** (free at hpbn.co) for practical developer knowledge + **use Wireshark** alongside both
