# Crash Course Computer Science — Notes

**Playlist**: [Crash Course CS (40 episodes)](https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdM)
**Host**: Carrie Anne Philbin
**Format**: ~10-12 min episodes. High-level conceptual overview of all of CS.

> Use this as a map. Drop specific episode questions below and we'll expand notes inline.

---

## How to use these notes

- Each episode has: **core idea → key terms → why it matters**.
- Architecture-heavy episodes (Ep 2–10) go deeper.
- Software / networking / AI (Ep 11–40) stay at summary level.
- Ask questions per episode → notes get expanded under that section.

---

## Part 1 — History (Ep 1–2)

### Ep 1: Early Computing

- **Computing ≠ computers.** Computing is organized calculation; predates electronics by millennia.
- **Abacus (~2500 BC)**: first "computer" — a device that stores state (bead positions) representing numbers.
- **Step Reckoner (Leibniz, 1694)**: mechanical gears doing +, −, ×, ÷.
- **Difference Engine / Analytical Engine (Babbage, 1800s)**: first design of a general-purpose computer (never built in his lifetime). Ada Lovelace → first programmer (wrote an algorithm for it).
- **Hollerith Tabulating Machine (1890 US Census)**: punched cards + electromechanical counters → birth of IBM.
- **Takeaway**: computers evolved from _calculation aids_ → _programmable machines_.

📚 **Deep-dive resources** → [`crash-course-supplementary/ep01-early-computing.md`](./crash-course-supplementary/ep01-early-computing.md)

### Ep 2: Electronic Computing

- **Why electronics?** Mechanical parts are slow and wear out. Electronic switches flip millions of times per second.
- **Relay → Vacuum tube → Transistor** — each generation: faster, smaller, more reliable.
  - **Relay** (1930s): electromechanical switch. Slow (~50 Hz), fails often. Harvard Mark I.
  - **Vacuum tube** (1940s): no moving parts, ~thousands Hz. ENIAC (1946, 17k tubes).
  - **Transistor** (1947, Bell Labs): solid-state. Tiny, cheap, reliable. Enabled everything since.
- **Moore's Law** (1965): transistor count doubles ~every 2 years. Held for ~50 years.

📚 **Deep-dive resources** → [`crash-course-supplementary/ep02-electronic-computing.md`](./crash-course-supplementary/ep02-electronic-computing.md)

---

## Part 2 — Hardware Foundations (Ep 3–10) ⭐ _architecture core_

### Ep 3: Boolean Logic & Logic Gates

- **Binary**: everything in a computer is 0/1 (off/on, low/high voltage).
- **Boolean algebra** (George Boole, 1800s): math of true/false. Three base operations:
  - **NOT**: inverts. `NOT 0 = 1`
  - **AND**: both must be 1. `1 AND 1 = 1`
  - **OR**: either is 1. `1 OR 0 = 1`
  - **XOR**: exclusive or — exactly one is 1. `1 XOR 1 = 0`
- **Logic gate** = a transistor circuit implementing one of these operations.
- **Why it matters**: every CPU instruction, every pixel decision, every memory cell — all built by combining these four gates.

📚 **Deep-dive resources** → [`crash-course-supplementary/ep03-boolean-logic.md`](./crash-course-supplementary/ep03-boolean-logic.md)

### Ep 4: Representing Numbers & Other Data

- **Bit** = 1 binary digit. **Byte** = 8 bits (256 values).
- **Unsigned integers**: straight binary (8 bits → 0–255).
- **Signed integers**: two's complement (leftmost bit = sign).
- **Floating point (IEEE 754)**: `sign | exponent | mantissa` — scientific notation in binary.
- **Characters**: ASCII (7-bit, English) → Unicode/UTF-8 (all world scripts).
- **Images**: grid of pixels, each pixel = RGB triple.
- **Sound**: samples of air-pressure values over time.
- **Key insight**: _all_ data is just numbers. Interpretation is up to software.

📚 **Deep-dive resources** → [`crash-course-supplementary/ep04-representing-data.md`](./crash-course-supplementary/ep04-representing-data.md)

### Ep 5: How Computers Calculate — the ALU

- **ALU (Arithmetic Logic Unit)**: the calculator inside the CPU.
- Built from two sub-units:
  - **Arithmetic unit**: adders, subtractors. Half-adder (2 inputs) → full-adder (carries) → 8-bit ripple adder.
  - **Logic unit**: AND, OR, NOT, comparisons (=, <, >).
- **Flags** output by ALU: zero, negative, overflow. CPU uses these for conditional jumps.
- **Overflow**: result exceeds the bit width → classic source of bugs (Ariane 5 rocket, Y2K-ish).

📚 **Deep-dive resources** → [`crash-course-supplementary/ep05-alu.md`](./crash-course-supplementary/ep05-alu.md)

### Ep 6: Registers & RAM

- **Latch**: 1-bit memory cell made from gates (feedback loop stores a value).
- **Register**: a row of latches storing a word (e.g., 8/16/32/64 bits).
- **RAM (Random Access Memory)**: grid of cells. "Random access" = O(1) to any address.
- **Addressing**: `n` address lines → `2^n` memory locations.
- **Why separate from CPU?** Density — memory is optimized for capacity, registers for speed.
- **Hierarchy preview**: registers (fastest, fewest) → cache → RAM → disk.

📚 **Deep-dive resources** → [`crash-course-supplementary/ep06-registers-ram.md`](./crash-course-supplementary/ep06-registers-ram.md)

### Ep 7: The Central Processing Unit (CPU)

- **CPU = ALU + registers + control unit + clock.**
- **Fetch–Decode–Execute cycle** (the heartbeat):
  1. **Fetch**: read instruction from RAM at address in Program Counter (PC).
  2. **Decode**: control unit interprets the opcode.
  3. **Execute**: ALU does the work, or memory is read/written.
  4. Increment PC → repeat.
- **Clock** drives the cycle. Hz = cycles/sec. 3 GHz = 3B cycles/sec.
- **Instruction** = opcode + operands, encoded as bits.
- **Program** = just a sequence of these bits in RAM.

📚 **Deep-dive resources** → [`crash-course-supplementary/ep07-cpu.md`](./crash-course-supplementary/ep07-cpu.md)

### Ep 8: Instructions & Programs

- **ISA (Instruction Set Architecture)**: the vocabulary of opcodes a CPU understands (x86, ARM, RISC-V).
- **Instruction types**:
  - **Arithmetic/logic**: ADD, SUB, AND, OR
  - **Memory**: LOAD, STORE
  - **Control flow**: JUMP, JUMP-IF (conditional based on ALU flags)
  - **Halt**
- **Conditional jumps** + loops = Turing-completeness. Everything else is built on top.
- **Assembly language**: human-readable names for opcodes (`MOV`, `ADD`) — 1:1 with machine code.

📚 **Deep-dive resources** → [`crash-course-supplementary/ep08-instructions.md`](./crash-course-supplementary/ep08-instructions.md)

### Ep 9: Advanced CPU Designs

Ways to make CPUs _faster_ beyond just clock speed:

- **Cache**: tiny fast memory near the CPU. Exploits _locality_ (you reuse recent data & nearby addresses).
  - L1 (per core, ~KB) → L2 → L3 (shared, ~MB).
  - **Cache hit** vs **cache miss**. Dirty bit for writes.
- **Pipelining**: overlap fetch/decode/execute of multiple instructions (like an assembly line). 3-stage pipeline ≈ 3× throughput.
- **Hazards**: when one instruction depends on another → pipeline stalls. Solved by:
  - **Out-of-order execution**: run independent instructions ahead.
  - **Branch prediction**: guess which way a conditional jump will go; speculatively execute.
- **Superscalar**: multiple ALUs → execute several instructions per cycle.
- **Multi-core**: multiple CPUs on one chip (2, 4, 8, 16+ cores).
- **Why clock speed plateaued (~2005)**: heat. Industry pivoted to cores + parallelism.

📚 **Deep-dive resources** → [`crash-course-supplementary/ep09-advanced-cpu.md`](./crash-course-supplementary/ep09-advanced-cpu.md)

### Ep 10: Early Programming

- Bridges hardware → software. Why writing raw machine code is painful → invention of programming languages.
- **Punched cards** → **plugboards** (ENIAC) → **stored program** (von Neumann arch, instructions live in RAM).
- **Assembler** (1950s): translates mnemonics to machine code.
- **Compiler** (Grace Hopper, A-0, 1952 → FORTRAN, 1957): translates high-level language to machine code.
- Abstraction ladder: physics → transistors → gates → ALU → CPU → assembly → languages → apps.

📚 **Deep-dive resources** → [`crash-course-supplementary/ep10-early-programming.md`](./crash-course-supplementary/ep10-early-programming.md)

---

## Part 3 — Software & Programming (Ep 11–17)

Summary-level — expand on request.

- **Ep 11**: First programming languages (FORTRAN, COBOL, LISP). 📚 [resources](./crash-course-supplementary/ep11-programming-languages.md)
- **Ep 12**: Programming basics — statements, variables, control flow (if/while/for). 📚 [resources](./crash-course-supplementary/ep12-programming-basics.md)
- **Ep 13**: Intro to algorithms — sorting (selection, bubble, merge), Big-O, search (linear, binary). 📚 [resources](./crash-course-supplementary/ep13-algorithms.md)
- **Ep 14**: Data structures — arrays, strings, structs, pointers, linked lists, queues, stacks, trees, graphs. 📚 [resources](./crash-course-supplementary/ep14-data-structures.md)
- **Ep 15**: Alan Turing — Turing machines, halting problem, decidability. 📚 [resources](./crash-course-supplementary/ep15-alan-turing.md)
- **Ep 16**: Software engineering — functions, OOP, APIs, IDEs, version control, documentation. 📚 [resources](./crash-course-supplementary/ep16-software-engineering.md)
- **Ep 17**: Integrated Circuits & Moore's Law — photolithography, how chips are fabricated. 📚 [resources](./crash-course-supplementary/ep17-integrated-circuits.md)

---

## Part 4 — Operating Systems & Storage (Ep 18–21)

- **Ep 18**: Operating Systems — batch processing → multitasking → memory protection → virtual memory. 📚 [resources](./crash-course-supplementary/ep18-operating-systems.md)
- **Ep 19**: Memory & Storage — tapes, drums, floppies, HDD, SSD. Access time vs capacity tradeoffs. 📚 [resources](./crash-course-supplementary/ep19-memory-storage.md)
- **Ep 20**: Files & File Systems — blocks, directories, FAT, fragmentation. 📚 [resources](./crash-course-supplementary/ep20-files-filesystems.md)
- **Ep 21**: Compression — lossless (run-length, Huffman, LZ) vs lossy (JPEG, MP3). 📚 [resources](./crash-course-supplementary/ep21-compression.md)

---

## Part 5 — User Interface & Graphics (Ep 22–27)

- **Ep 22**: Keyboards & Command Line. 📚 [resources](./crash-course-supplementary/ep22-keyboards-cli.md)
- **Ep 23**: Screens & 2D Graphics — CRT, LCD, raster, vector. 📚 [resources](./crash-course-supplementary/ep23-screens-2d.md)
- **Ep 24**: Cold War & Consumer Computing. 📚 [resources](./crash-course-supplementary/ep24-cold-war-consumer.md)
- **Ep 25**: Personal Computer Revolution — Altair, Apple, IBM PC. 📚 [resources](./crash-course-supplementary/ep25-pc-revolution.md)
- **Ep 26**: Graphical User Interfaces — Xerox PARC, WIMP. 📚 [resources](./crash-course-supplementary/ep26-guis.md)
- **Ep 27**: 3D Graphics — meshes, rasterization, shading, GPU. 📚 [resources](./crash-course-supplementary/ep27-3d-graphics.md)

---

## Part 6 — Networking (Ep 28–30)

- **Ep 28**: Computer Networks — LAN, MAC addresses, Ethernet, CSMA/CD, switches. 📚 [resources](./crash-course-supplementary/ep28-networks.md)
- **Ep 29**: The Internet — packets, routers, IP, TCP (reliability), UDP (speed), DNS. 📚 [resources](./crash-course-supplementary/ep29-internet.md)
- **Ep 30**: World Wide Web — HTTP, HTML, URLs, browsers, search engines. 📚 [resources](./crash-course-supplementary/ep30-web.md)

---

## Part 7 — Security & AI (Ep 31–40)

- **Ep 31**: Cybersecurity — CIA triad, authentication, authorization. 📚 [resources](./crash-course-supplementary/ep31-cybersecurity.md)
- **Ep 32**: Hackers & Cyber Attacks — phishing, buffer overflow, worms, DoS. 📚 [resources](./crash-course-supplementary/ep32-hackers-attacks.md)
- **Ep 33**: Cryptography — symmetric (AES), asymmetric (RSA), Diffie-Hellman. 📚 [resources](./crash-course-supplementary/ep33-cryptography.md)
- **Ep 34**: Machine Learning & AI — classification, neural nets, deep learning. 📚 [resources](./crash-course-supplementary/ep34-machine-learning-ai.md)
- **Ep 35**: Computer Vision. 📚 [resources](./crash-course-supplementary/ep35-computer-vision.md)
- **Ep 36**: Natural Language Processing. 📚 [resources](./crash-course-supplementary/ep36-nlp.md)
- **Ep 37**: Robots. 📚 [resources](./crash-course-supplementary/ep37-robots.md)
- **Ep 38**: Psychology of Computing — HCI, UX. 📚 [resources](./crash-course-supplementary/ep38-psychology-of-computing.md)
- **Ep 39**: Educational Technology. 📚 [resources](./crash-course-supplementary/ep39-educational-technology.md)
- **Ep 40**: The Singularity, Skynet, and the Future. 📚 [resources](./crash-course-supplementary/ep40-singularity-future.md)

---

## Open Questions / Doubts

_Add questions here as you watch — I'll expand the relevant section._

- [ ]

---

## Companion Resources

- **Deeper architecture**: [CMU 15-213 (CSAPP)](./computer-architecture/csapp-resources.md) ← when ready to go beyond the crash course.
- **Book**: Charles Petzold, _Code: The Hidden Language of Computer Hardware and Software_ — same ideas as Ep 2–10, book-length.
- **Interactive**: [nand2tetris](https://www.nand2tetris.org/) — build a computer from NAND gates up.
