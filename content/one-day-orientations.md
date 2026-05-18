---
title: 1-day orientation
draft: false
date:
  - 2026-05-18
---

# 1-Day Orientation: 6 Core CS Subjects

> **Goal**: In one day per subject, build a mental map — know what exists, how pieces connect, and where to dig later.
> **Not the goal**: Working knowledge. That takes weeks (see [cs-study-plan.md](./cs-study-plan.md) for the real path).
>
> Each day = ~8 focused hours. Take breaks. Don't binge-watch — alternate video + reading + tinkering.

---

## Day 1: Computer Architecture

**The question you're answering**: _How does code become electricity that does math?_

### Morning (3 hrs) — The mental model

**Watch** (2 hrs):

- [Crash Course CS Ep 1–9](https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdM) at 1.5× speed — you've already seen these, so this is a refresher flyover. Focus on the _chain_: transistor → gate → ALU → register → CPU → instruction cycle. (~1.5 hrs at 1.5×)
- [Ben Eater — "How do CPUs actually work?" (overview)](https://www.youtube.com/watch?v=cNN_tTXABUA) — 30 min

**Read** (1 hr):

- [Putting the "You" in CPU](https://cpu.land/) — interactive, modern, brilliant. Read chapters 1–3.

### Midday (2 hrs) — Key concepts deep-enough

Pick the **one** resource that matches your learning style:

- **Visual**: [nand2tetris Project 1 lecture slides](https://drive.google.com/open?id=1MY1buFHo_Wx5DPrKhCNSA2cm5ltwFJzM) + [Project 2 slides](https://drive.google.com/open?id=1ie9s3GjM2TrvL7PrEZJ00gEwezgNLOBm) — gates through ALU in ~45 min of slides
- **Reading**: CSAPP Chapter 1 (A Tour of Computer Systems) — 40 pages, the perfect orientation chapter
- **Tinkering**: [Nandgame.com](https://nandgame.com/) — build gates interactively, get as far as you can in 2 hours

### Afternoon (3 hrs) — The landscape

**Watch** (1 hr):

- [Computerphile — How CPU Caches Work](https://www.youtube.com/watch?v=6JpLD3PUAZk) — 15 min
- [Computerphile — Pipelining](https://www.youtube.com/watch?v=_OHiMRjSyDg) — 15 min
- [Branch Prediction — Computerphile](https://www.youtube.com/watch?v=VI__6EwMOzY) — 15 min
- [RISC vs CISC — Computerphile](https://www.youtube.com/watch?v=g16wJfOiVoI) — 15 min

**Read** (1 hr):

- Finish remaining chapters of [cpu.land](https://cpu.land/)

**Consolidate** (1 hr):

- Draw the full chain on paper: transistor → gate → half-adder → ALU → register → RAM → CPU (fetch-decode-execute) → cache → pipeline → ISA → assembly → compiler → your code
- Write down 5 things you still don't understand. These become your study targets.

### By end of day you'll know:

- [x] What a transistor does (switch)
- [x] How gates compose into an ALU
- [x] Fetch-decode-execute cycle
- [x] Why caches and pipelining exist
- [x] What an ISA is (x86, ARM, RISC-V)
- [x] Where assembly fits between your code and hardware

### You will NOT know (and that's fine):

- How to write assembly
- Cache replacement policies in detail
- Out-of-order execution internals
- How virtual memory maps to physical

📚 Deeper path: [CSAPP study plan](./cs-study-plan.md#phase-1--csapp-months-16) | [nand2tetris](https://www.nand2tetris.org/)

---

## Day 2: Operating Systems

**The question you're answering**: _How does one CPU run hundreds of programs "simultaneously" without them killing each other?_

### Morning (3 hrs) — The mental model

**Watch** (1.5 hrs):

- [Crash Course CS Ep 18: Operating Systems](https://www.youtube.com/watch?v=26QPDBe-NB8) — 12 min, overview
- [MIT Missing Semester — OS basics (first 30 min)](https://missing.csail.mit.edu/) — practical framing
- [Jacob Sorber — "What is an Operating System?"](https://www.youtube.com/watch?v=pVzRTmdd9j0) — 10 min, to the point
- [Jacob Sorber — "How do Processes work?"](https://www.youtube.com/watch?v=4rLW7zg21gI) — 15 min
- [Jacob Sorber — "Virtual Memory"](https://www.youtube.com/watch?v=A9WLYbE0p-I) — 15 min

**Read** (1.5 hrs):

- [OSTEP — Chapter 2: Introduction to Operating Systems](https://pages.cs.wisc.edu/~remzi/OSTEP/intro.pdf) — free PDF, ~15 pages
- [OSTEP — Chapter 4: Processes](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) — ~10 pages
- [OSTEP — Chapter 13: Address Spaces](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf) — ~10 pages

### Midday (2 hrs) — The three pillars

OS does three things. Spend ~40 min on each:

**1. CPU Virtualization (processes & scheduling)**

- Read: [OSTEP Ch 7: CPU Scheduling](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf)
- Tinker: Run `ps aux` and `top`/`htop` on your Mac. Find your shell process. Find its parent. Trace the tree with `pstree`.

**2. Memory Virtualization (virtual memory)**

- Read: [OSTEP Ch 15: Address Translation](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-mechanism.pdf)
- Key idea: every process thinks it owns all memory. The OS + hardware (MMU) translate virtual → physical addresses behind the scenes.

**3. Concurrency (threads & locks)**

- Read: [OSTEP Ch 26: Concurrency Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf)
- Watch: [Computerphile — Race Conditions](https://www.youtube.com/watch?v=7ENFeb-J75k) — 10 min

### Afternoon (3 hrs) — Persistence + hands-on

**Watch** (45 min):

- [Computerphile — File Systems](https://www.youtube.com/watch?v=BV0-EPUYuQc) — 15 min
- [Computerphile — How Syscalls Work](https://www.youtube.com/watch?v=lhToWeuWWfw) — 15 min
- [LiveOverflow — "What is a Kernel?"](https://www.youtube.com/watch?v=mycVSMyShk8) — 15 min

**Hands-on** (1.5 hrs):

- Open a terminal. Try these and observe:

  ```bash
  # See your processes
  ps aux | grep -i [your_name]

  # See system calls in real-time (macOS)
  sudo dtruss ls 2>&1 | head -30
  # (Linux: strace ls 2>&1 | head -30)

  # See memory layout of a process
  vmmap $$ | head -40        # macOS
  # cat /proc/self/maps      # Linux

  # See file descriptors
  lsof -p $$

  # See disk I/O
  iostat 1 5
  ```

**Consolidate** (45 min):

- Draw the OS layer cake: Hardware → Kernel (CPU scheduler, memory manager, file system, device drivers) → System calls → User space (shell, apps)
- Write: What's the difference between a process and a thread? What happens when you type `./hello` and press Enter? (fork → exec → wait)

### By end of day you'll know:

- [x] Process = running program (code + state + address space)
- [x] Virtual memory = each process gets its own address space, MMU translates
- [x] Syscalls = how user programs ask the kernel for things
- [x] Files, file descriptors, file systems — what the layers are
- [x] Threads share memory, processes don't (by default)
- [x] Why concurrency bugs (races, deadlocks) happen

### You will NOT know:

- Page table internals, TLB
- Scheduling algorithms in depth
- How to write a kernel module
- Lock-free data structures

📚 Deeper path: [OSTEP (free)](https://pages.cs.wisc.edu/~remzi/OSTEP/) | MIT 6.1810 (xv6 labs)

---

## Day 3: Networking

**The question you're answering**: _How does a request from your browser reach a server 10,000 km away and come back in 50ms?_

### Morning (3 hrs) — The mental model

**Watch** (1.5 hrs):

- [Crash Course CS Ep 28–30](https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdM) at 1.25× — networks, internet, web (~30 min)
- [Computerphile — Network Stacks and the Internet](https://www.youtube.com/watch?v=PG9oKZdFb7w) — 7 min, how data gets encapsulated through TCP/IP/Ethernet layers
- [Computerphile — DNS](https://www.youtube.com/watch?v=uOfonONtIuk) — 15 min
- [Computerphile — TLS/SSL](https://www.youtube.com/watch?v=0TLDTodL7Lc) — 15 min
- [Hussein Nasser — "TCP vs UDP"](https://www.youtube.com/watch?v=qqRYkcta6IE) — 15 min

**Read** (1.5 hrs):

- [How DNS Works (comic)](https://howdns.works/) — 15 min, delightful
- [High Performance Browser Networking — Ch 1–2 (Ilya Grigorik)](https://hpbn.co/) — free online book. Latency, bandwidth, TCP basics. ~1 hr

### Midday (2 hrs) — The layer cake

The internet is layers. Spend ~25 min per layer:

**Physical/Link (you mostly ignore this)**:

- Ethernet, Wi-Fi, MAC addresses. Just know: frames move between directly-connected devices.

**Network layer (IP)**:

- Read: [Julia Evans — "How does the Internet work?"](https://jvns.ca/blog/2021/05/11/what-s-the-difference-between-tcp-and-ip/) — 10 min
- Key idea: IP routes packets hop-by-hop. No guarantees (packets can be lost, reordered, duplicated).

**Transport layer (TCP/UDP)**:

- TCP = reliable, ordered, connection-oriented (3-way handshake, ACKs, retransmits)
- UDP = fire-and-forget (fast, used by DNS, video, games)
- Read: [Julia Evans — TCP zine](https://wizardzines.com/zines/tcpdump/) (preview pages are free) or her [blog posts on networking](https://jvns.ca/categories/networking/)

**Application layer (HTTP/DNS/TLS)**:

- Read: [MDN — HTTP Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) — 15 min
- Key: HTTP is text-based request/response over TCP. HTTPS = HTTP + TLS encryption.

### Afternoon (3 hrs) — Hands-on + real packets

**Hands-on with real tools** (2 hrs):

```bash
# Trace the route to google.com — see every hop
traceroute google.com

# See DNS resolution
dig google.com
nslookup google.com

# See a full HTTP exchange
curl -v https://httpbin.org/get

# See your network connections
netstat -an | head -30   # or: ss -tunap on Linux

# See actual packets (install if needed: brew install tcpdump)
sudo tcpdump -i any -c 20 port 443
```

If you have Wireshark installed (or want to install it):

- Capture → filter `http` → visit a non-HTTPS site → inspect the TCP handshake (SYN, SYN-ACK, ACK) → see the HTTP GET in plaintext

**Watch** (30 min):

- [Hussein Nasser — "What happens when you type a URL?"](https://www.youtube.com/watch?v=AlkDbnbv7dk) — ties everything together

**Consolidate** (30 min):

- Draw the full journey: Browser → DNS lookup → TCP handshake → TLS handshake → HTTP request → Server processes → HTTP response → Browser renders
- Write: What's the difference between TCP and UDP? Why does HTTPS need TLS? What does a router actually do?

### By end of day you'll know:

- [x] The layer model: physical → link → IP → TCP/UDP → HTTP
- [x] What happens when you type a URL (DNS → TCP → TLS → HTTP)
- [x] TCP = reliable stream, UDP = fast datagrams
- [x] DNS translates names → IP addresses
- [x] TLS encrypts the connection (HTTPS)
- [x] How to use dig, curl, traceroute, tcpdump

### You will NOT know:

- TCP congestion control algorithms
- BGP routing
- How to build a TCP stack
- NAT traversal, QUIC internals

📚 Deeper path: Stanford CS144 (build TCP from scratch) | [HPBN (free)](https://hpbn.co/)

---

## Day 4: Databases (DBMS)

**The question you're answering**: _How does a database find one row out of a billion in milliseconds, and not lose it when the power goes out?_

### Morning (3 hrs) — The mental model

**Watch** (1.5 hrs):

- [CMU 15-445 Lecture 1 — Andy Pavlo (2023)](https://www.youtube.com/watch?v=uikbtpVZS2s) — best intro lecture in existence. ~1.5 hrs but worth every minute.
  - If pressed for time, watch at 1.5× or just the first 45 min

**Read** (1.5 hrs):

- [Architecture of a Database System — Hellerstein (first 15 pages)](https://dsf.berkeley.edu/papers/fntdb07-architecture.pdf) — surprisingly readable overview of what's inside a DBMS
- OR if you prefer lighter: DDIA Chapter 3: Storage and Retrieval (you have the book in your study plan) — LSM trees vs B-trees, the two ways databases store data

### Midday (2 hrs) — The four pillars

**1. Storage engines (how data lives on disk)** — 30 min

- Two families: **B-tree** (PostgreSQL, MySQL/InnoDB — read-optimized) vs **LSM-tree** (RocksDB, Cassandra — write-optimized)
- Watch: [Hussein Nasser — "B-Tree vs LSM-Tree"](https://www.youtube.com/watch?v=TQeR__fhDAI) — 15 min
- Key insight: indexes trade write speed for read speed. Every index slows writes.

**2. Indexing (how queries are fast)** — 30 min

- Read: [Use The Index, Luke](https://use-the-index-luke.com/) — Chapter 1 only. The anatomy of an index.
- Key: a B-tree index is basically a sorted phonebook. Without one, the DB scans every row (full table scan).

**3. Transactions & ACID** — 30 min

- Watch: [Hussein Nasser — "ACID Explained"](https://www.youtube.com/watch?v=pomxJOFVcQs) — 15 min, [bytecode](https://www.youtube.com/watch?v=Q9xD4J3tezw)- 11min
- **A**tomic (all or nothing), **C**onsistent (constraints hold), **I**solated (transactions don't see each other's uncommitted work), **D**urable (committed = survives crash)
- Read: [Jepsen — Consistency Models](https://jepsen.io/consistency) — just the diagram. Bookmark it.

**4. Query planning** — 30 min

- Watch: [CMU 15-445 — Query Processing Overview (first 20 min)](https://www.youtube.com/watch?v=1D81vXw2T_w)
- Key: SQL is declarative. The **query planner** decides _how_ to execute it (which index, join order, etc.). `EXPLAIN` shows you the plan.

### Afternoon (3 hrs) — Hands-on SQL + EXPLAIN

**Setup** (15 min):

```bash
# If you don't have PostgreSQL:
brew install postgresql@16
brew services start postgresql@16
createdb playground
psql playground
```

**Tinker** (2 hrs):

```sql
-- Create a table with some data
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE,
    created_at TIMESTAMP DEFAULT now()
);

-- Insert 100k rows (generate_series is your friend)
INSERT INTO users (name, email)
SELECT
    'user_' || i,
    'user_' || i || '@example.com'
FROM generate_series(1, 100000) AS i;

-- See the full table scan
EXPLAIN ANALYZE SELECT * FROM users WHERE name = 'user_50000';

-- Add an index
CREATE INDEX idx_users_name ON users(name);

-- See the index scan — compare the times!
EXPLAIN ANALYZE SELECT * FROM users WHERE name = 'user_50000';

-- See a transaction
BEGIN;
UPDATE users SET name = 'CHANGED' WHERE id = 1;
-- (don't commit yet — open another psql and SELECT id=1... what do you see?)
ROLLBACK;
```

**Consolidate** (45 min):

- Draw the DBMS internals: SQL query → Parser → Planner/Optimizer → Executor → Storage engine → Disk
- Write: What's the difference between a B-tree and a hash index? What does ACID actually guarantee? What does `EXPLAIN ANALYZE` tell you?

### By end of day you'll know:

- [x] B-tree vs LSM-tree (two storage paradigms)
- [x] What an index is and why it makes reads fast
- [x] ACID transactions — what each letter means practically
- [x] How to read an `EXPLAIN ANALYZE` output
- [x] The lifecycle of a SQL query (parse → plan → execute)

### You will NOT know:

- Write-ahead logging (WAL) internals
- MVCC implementation details
- Join algorithms (nested loop, hash, merge)
- How to tune a production database

📚 Deeper path: [CMU 15-445 (Andy Pavlo)](https://15445.courses.cs.cmu.edu/) | [Use The Index, Luke (full)](https://use-the-index-luke.com/) | [DDIA study plan](./cs-study-plan.md#phase-2--ddia-months-710)

---

## Day 5: Distributed Systems

**The question you're answering**: _Why is it so hard to have multiple computers agree on anything?_

> ⚠️ This is the hardest of the five. It requires intuition from the other four (especially networking + databases). Save it for last.

### Morning (3 hrs) — The mental model

**Watch** (1.5 hrs):

- [Martin Kleppmann — Distributed Systems Lecture 1](https://www.youtube.com/watch?v=UEAMfLPZZhE) — ~1 hr. The best introduction.
- [Computerphile — The Two Generals' Problem](https://www.youtube.com/watch?v=s8Wbt0b8bwY) — 15 min. Why distributed agreement is fundamentally hard.
- [Computerphile — The Byzantine Generals Problem](https://www.youtube.com/watch?v=_MwqAaVweJ8) — 15 min.

**Read** (1.5 hrs):

- [Kleppmann's lecture notes — Sections 1–3](https://www.cl.cam.ac.uk/teaching/2122/ConcDisSys/dist-sys-notes.pdf) — ~20 pages. Models, time, clocks.
- [An Introduction to Distributed Systems (Aphyr)](https://github.com/aphyr/distsys-class) — the README is a perfect orientation.

### Midday (2 hrs) — The core problems

Every distributed system fights the same battles. ~30 min each:

**1. The network is unreliable**

- Messages get lost, delayed, duplicated, reordered. You can never tell if a remote node is dead or just slow.
- Read: [Jepsen — "Call Me Maybe" intro](https://aphyr.com/posts/281-jepsen-the-network-is-reliable) — 10 min, devastating examples

**2. Time doesn't work**

- No global clock. Each node has its own clock that drifts. "What happened first?" is not always answerable.
- Watch: [Kleppmann Lecture 3 — Time, Clocks](https://www.youtube.com/watch?v=rRk-7n0fPe0) (first 30 min)
- Key terms: Lamport clocks, vector clocks, happens-before relation.

**3. Replication & Consistency**

- You copy data to multiple nodes (for reliability + speed). Now: which copy is "correct"?
- Read: DDIA Chapter 5 summary or [Kleppmann — Lecture 5](https://www.youtube.com/watch?v=mBUCF1WGI_I) (first 30 min)
- Key spectrum: strong consistency (safe, slow) ↔ eventual consistency (fast, surprises)

**4. Consensus (the hard problem)**

- How do N nodes agree on a value if some might crash?
- Watch: [The Raft Paper — visual explanation](https://thesecretlivesofdata.com/raft/) — interactive, 15 min. **Do this one.**
- Key: Raft = leader election + log replication. Used in etcd, CockroachDB, TiKV.

### Afternoon (3 hrs) — CAP, real systems, consolidation

**Watch** (1 hr):

- [Martin Kleppmann — "Is Kafka a Database?"](https://www.youtube.com/watch?v=BuE6JvQE7Lw) — shows how these concepts manifest in real infra
- [Hussein Nasser — "CAP Theorem Simplified"](https://www.youtube.com/watch?v=BHqjEjzAicA) — 15 min

**Read** (1 hr):

- [Brewer — "CAP Twelve Years Later"](https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/) — short, clears up the massive misunderstandings around CAP
- [Designing for Understandability: The Raft Consensus Algorithm](https://raft.github.io/) — skim the visualization + paper abstract

**Map real systems to concepts** (30 min):

| System                   | Replication                 | Consistency                      | Consensus                 |
| ------------------------ | --------------------------- | -------------------------------- | ------------------------- |
| PostgreSQL (single node) | None (or streaming replica) | Strong (ACID)                    | N/A                       |
| Cassandra                | Leaderless, quorum          | Tunable (eventual → strong)      | No consensus protocol     |
| etcd / ZooKeeper         | Raft / ZAB                  | Linearizable                     | Yes (Raft / ZAB)          |
| Kafka                    | Leader-based ISR            | Ordered within partition         | Controller quorum (KRaft) |
| DynamoDB                 | Leaderless                  | Eventual (or strong per-request) | Paxos-family internally   |

**Consolidate** (30 min):

- Write answers to:
  1. Why can't you have both perfect consistency and perfect availability if the network partitions?
  2. What problem does Raft solve? How?
  3. What's the difference between "strong" and "eventual" consistency in plain English?
  4. Why do distributed databases replicate data? (Hint: two reasons — fault tolerance AND read throughput)

### By end of day you'll know:

- [x] Why distributed systems are fundamentally hard (unreliable network, no global clock)
- [x] The CAP theorem — what it actually says (and doesn't)
- [x] Replication: leader-based vs leaderless vs quorum
- [x] Consistency spectrum: linearizable → sequential → causal → eventual
- [x] What Raft does (consensus via leader election + log replication)
- [x] How real systems (Kafka, Cassandra, etcd) map to these concepts

### You will NOT know:

- How to implement Raft
- Distributed transactions (2PC, Saga)
- CRDTs, causal broadcast
- How to debug a split-brain in production

📚 Deeper path: [DDIA study plan](./cs-study-plan.md#phase-2--ddia-months-710) | MIT 6.5840 (build Raft + KV store) | [Kleppmann lectures (full)](https://www.youtube.com/playlist?list=PLeKd45zvjcDFUEv_ohr_HdUFe97RItdiB)

---

## Day 6: Compilers

**The question you're answering**: _How does `if (x > 5)` become instructions a CPU can execute?_

### Morning (3 hrs) — The mental model

**Watch** (1.5 hrs):

- [Computerphile — "Compilers with Professor Brailsford" playlist](https://www.youtube.com/watch?v=GaIMGhQVEEk&list=PLzH6n4zXuckqZ90zLyy36CjFWGUXnGkdJ) — watch first 3–4 videos (~40 min total). Gentle, intuitive, from the legend himself.
- [Nora Sandler — "Writing a C Compiler" (Strange Loop 2017)](https://www.youtube.com/watch?v=vcSijrRsrY0) — 40 min. Demystifies the whole pipeline by building one.
- [Computerphile — "What is a Parser?"](https://www.youtube.com/watch?v=bxpc9Pp5pZM) — 10 min. Parser = structure from flat text.

**Read** (1.5 hrs):

- [Crafting Interpreters — Chapter 1: Introduction](https://craftinginterpreters.com/introduction.html) + [Chapter 2: A Map of the Territory](https://craftinginterpreters.com/a-map-of-the-territory.html) — free online. Robert Nystrom. The best compiler intro ever written. These two chapters are the orientation. ~30 pages.
- [Crafting Interpreters — Chapter 3: The Lox Language](https://craftinginterpreters.com/the-lox-language.html) — understand what you'd be building. ~15 pages.

### Midday (2 hrs) — The pipeline

A compiler is a pipeline. Spend ~25 min on each stage:

**1. Lexing / Tokenization (source text → tokens)**

- Input: `if (x > 5) { return 1; }`
- Output: `[IF, LPAREN, IDENT("x"), GT, NUM(5), RPAREN, LBRACE, RETURN, NUM(1), SEMI, RBRACE]`
- Read: [Crafting Interpreters — Chapter 4: Scanning](https://craftinginterpreters.com/scanning.html) — first half only (~15 min). See how a lexer works character by character.
- Key insight: a lexer is just a big state machine. Regular expressions describe what each token looks like.

**2. Parsing (tokens → AST)**

- Tokens are flat. An AST (Abstract Syntax Tree) is structured — it captures nesting and precedence.
- `1 + 2 * 3` → the tree shows `*` binds tighter than `+` (2\*3 first, then +1).
- Watch: [Computerphile — "Abstract Syntax Trees"](https://www.youtube.com/watch?v=UkjGFClsELM) — 10 min
- Read: [Crafting Interpreters — Chapter 6: Parsing Expressions](https://craftinginterpreters.com/parsing-expressions.html) — skim for the recursive descent idea (~15 min). Each grammar rule = one function.
- Key: recursive descent parsing is the most common technique. It's just mutual recursion following the grammar.

**3. Semantic analysis (does it make sense?)**

- Type checking, scope resolution, "is this variable declared?"
- This is where `int x = "hello"` gets caught.
- Read: [Crafting Interpreters — Chapter 11: Resolving and Binding](https://craftinginterpreters.com/resolving-and-binding.html) — skim intro only (~10 min)

**4. Code generation (AST → target code)**

- For an interpreter: walk the AST and execute directly
- For a compiler: emit assembly, bytecode, or LLVM IR
- Watch: [Godbolt Compiler Explorer](https://godbolt.org/) — type C code on the left, see assembly on the right. Spend 15 min experimenting:
  ```c
  int add(int a, int b) { return a + b; }
  int max(int a, int b) { if (a > b) return a; return b; }
  ```
  See how `if` becomes conditional jumps. See how function calls use the stack.

**5. Optimization (make it faster)**

- Dead code elimination, constant folding (`2+3` → `5` at compile time), inlining, loop unrolling
- In Godbolt: toggle `-O0` vs `-O2` and watch the assembly shrink dramatically
- Key: modern compilers are absurdly good at optimization. Your "clever" micro-optimizations in C usually don't beat `-O2`.

### Afternoon (3 hrs) — Interpreters vs compilers + hands-on

**Watch** (45 min):

- [Tsoding — "Lexer in Python"](https://www.youtube.com/watch?v=LIlLmS0yF4o) — ~20 min, live-coding a lexer from scratch. Demystifying.
- [Jonathan Blow — "How do Parsers work?"](https://www.youtube.com/watch?v=MnctEW1oL-E) — ~25 min, game-dev perspective, very practical

**Read** (30 min):

- [A Compiler Writing Journey (DoctorWkt)](https://github.com/DoctorWkt/acwj) — the README is an excellent walkthrough of building a C compiler incrementally. Read the first 3–4 step descriptions.

**Hands-on** (1.5 hrs) — pick ONE:

**Option A: Build a tiny interpreter (~1.5 hrs)**

- Follow [Crafting Interpreters Chapter 4–7](https://craftinginterpreters.com/scanning.html) in Java/Python/your language
- Goal: lex and evaluate simple arithmetic (`1 + 2 * 3` → `7`)
- You won't finish, but you'll have a working lexer + the start of a parser

**Option B: Explore Godbolt deeply (~1.5 hrs)**

- Write progressively complex C functions and study the output:
  - Arithmetic, if/else, loops, function calls, recursion, structs, pointers
  - Compare x86-64 vs ARM64 output
  - Compare gcc vs clang
  - Toggle optimization levels and understand what changed
- This builds "compiler intuition" — knowing what your code turns into

**Consolidate** (15 min):

- Draw the pipeline: `Source code → [Lexer] → Tokens → [Parser] → AST → [Semantic Analysis] → Checked AST → [Code Gen] → Assembly/Bytecode → [Assembler/Linker] → Executable`
- Write: What's the difference between a compiler and an interpreter? What does an AST look like? Why does parsing need to handle precedence?

### By end of day you'll know:

- [x] The compiler pipeline: lex → parse → analyze → optimize → codegen
- [x] What tokens and ASTs are
- [x] Recursive descent = each grammar rule is a function
- [x] Difference between compiler (ahead-of-time) and interpreter (walk the tree)
- [x] How to read basic Godbolt output (C → assembly)
- [x] Where LLVM fits (shared backend — many languages target LLVM IR → LLVM optimizes + emits machine code)

### You will NOT know:

- How to write a full parser (that takes weeks)
- Type inference algorithms (Hindley-Milner)
- Register allocation, SSA form
- How GC (garbage collection) works under the hood
- LLVM IR in detail

📚 Deeper path: [Crafting Interpreters (full, free)](https://craftinginterpreters.com/) — 3–4 months, builds two complete interpreters | [nand2tetris Projects 6, 10–11](https://www.nand2tetris.org/course) — build assembler + compiler for the Hack/Jack platform | [Nora Sandler — _Writing a C Compiler_ (book, 2024)](https://nostarch.com/writing-c-compiler) — build a real C compiler incrementally

---

## Suggested order

```
Day 1: Architecture         ← foundation for everything
Day 2: Operating Systems    ← needs architecture context
Day 3: Networking           ← independent, but helps with distributed
Day 4: Databases            ← needs OS (disk/memory) + networking basics
Day 5: Distributed Systems  ← needs all four above
Day 6: Compilers            ← needs architecture (what you're targeting) + programming comfort
```

One day per week is fine. Six consecutive days is also fine if you have the stamina. Day 6 (Compilers) can be done anytime after Day 1.

---

## After orientation: what next?

You now have the vocabulary and mental maps. For **real** working knowledge, see:

- **Full study plan**: [`cs-study-plan.md`](./cs-study-plan.md) — CS:APP + DDIA (~10 months)
- **nand2tetris**: [nand2tetris setup guide](./crash-course-supplementary/ep03-boolean-logic.md) — build a computer from NAND gates
- **Architecture deep-dive**: [`computer-architecture/csapp-resources.md`](./computer-architecture/csapp-resources.md)
- **Crash Course supplementary**: [`crash-course-supplementary/`](./crash-course-supplementary/) — per-episode resources

The orientation days aren't learning. They're **cartography** — drawing the map so you know where you are when you start the real journey.
