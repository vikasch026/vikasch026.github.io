# Ep 9: Advanced CPU Designs — Supplementary Resources

> Companion to [crash-course.md → Ep 9](../crash-course.md#ep-9-advanced-cpu-designs)
>
> **Episode covers**: cache, pipelining, hazards, out-of-order, branch prediction, superscalar, multi-core. Why clock speed plateaued.

---

## Underrated context (Crash Course skips this)

- **This is THE episode for modern performance.** Everything that makes a 2024 CPU faster than a 2004 CPU at the same clock speed is here. Worth re-watching.
- **Cache lines, not bytes.** When you read 1 byte from RAM, the CPU pulls in 64 bytes (1 cache line). This is why **array iteration is fast** and **linked-list traversal is slow**. CSAPP calls this "spatial locality."
- **Branch prediction got Intel sued.** Spectre and Meltdown (2018) exploited speculative execution + cache side channels to leak memory. Every CPU since has mitigations that cost ~5–30% performance.
- **Out-of-order execution is unintuitive.** Your CPU does NOT execute your instructions in the order you wrote them. It reorders for parallelism, then commits results in original order so it looks sequential to you. Unless threads are involved, in which case... welcome to memory models.
- **Memory ordering / coherence.** When you have multiple cores, each with its own cache, "what does memory currently contain?" becomes a hard question. **MESI protocol** keeps caches coherent. Cost: communication between cores.
- **Amdahl's Law limits multi-core.** If 50% of your code is serial, you can never go faster than 2× even with infinite cores. This is why "more cores!" stopped solving everything.
- **Dennard scaling broke ~2005.** Smaller transistors used to consume proportionally less power. Then they didn't. Heat became the limit. Industry pivoted to multi-core because they couldn't keep cranking GHz.

---

## Videos

- **[Crash Course CS Ep 9](https://www.youtube.com/watch?v=rtAlC5J1U40)**
- **[Computerphile — How Caches Work](https://www.youtube.com/watch?v=YPidUklVZsM)**.
- **[Computerphile — Pipelining](https://www.youtube.com/watch?v=2k7BHfQy0Mc)**.
- **[Computerphile — Branch Prediction & Spectre](https://www.youtube.com/watch?v=I5lE8AlqA7Y)** — gold.
- **[Asianometry — Why Intel Fell Behind in Branch Prediction](https://www.youtube.com/watch?v=mZBjuayHCBE)** — deep tech.
- **[Mike Acton — Data-Oriented Design (CppCon 2014)](https://www.youtube.com/watch?v=rX0ItVEVjHc)** — _watch this._ How cache shapes how you should code.
- **[Casey Muratori — Performance Excuses Debunked](https://www.youtube.com/watch?v=tD5NrevFtbU)**.

---

## Articles

- **[Ulrich Drepper — What Every Programmer Should Know About Memory](https://akkadia.org/drepper/cpumemory.pdf)** — _the_ paper on cache + memory. Hard but life-changing. Read in chunks.
- **[Modern Microprocessors — A 90-Minute Guide](http://www.lighterra.com/papers/modernmicroprocessors/)** — re-read with Ep 9 in mind.
- **[Wikipedia — Cache (computing)](https://en.wikipedia.org/wiki/CPU_cache)** — solid overview of direct-mapped, set-associative, etc.
- **[Spectre paper (Kocher et al.)](https://spectreattack.com/spectre.pdf)** — readable, important.
- **[Why processors include 8+ cores now](https://chipsandcheese.com/)** — chipsandcheese.com generally has deep modern-CPU analysis.
- **[Memory Models: A Case for Rethinking Parallel Languages and Hardware (Adve & Boehm)](https://dl.acm.org/doi/10.1145/1785414.1785443)** — when you care about concurrent memory.

---

## Books

- **CSAPP Ch 5 — Optimizing Program Performance** (not in CS107 custom edition; find the chapter PDF). Cache-friendly code.
- **CSAPP Ch 6 — Memory Hierarchy** — _read this._ Best programmer-focused cache treatment.
- **Hennessy & Patterson — _Computer Architecture: A Quantitative Approach_** — Ch 2–3, the bible for advanced CPU.
- **Daniel J. Sorin et al. — _A Primer on Memory Consistency and Cache Coherence_** — free PDF online.

---

## Interactive / hands-on

- **[CSAPP Cache Lab](https://csapp.cs.cmu.edu/3e/labs.html)** — implement a cache simulator + optimize a function for cache.
- **[perf (Linux profiler)](https://perf.wiki.kernel.org/index.php/Tutorial)** — measure cache misses on real code.
- **[godbolt.org](https://godbolt.org/)** — see how compilers reorder instructions for pipelining.

---

## Exercises

1. Write a 2D array sum: row-major vs column-major iteration. Time both. Explain the 10× difference using cache.
2. Read Drepper Sec 3 (cache hierarchy). Compute effective access time given hit rates.
3. Write code that benchmarks "what's my L1 cache size?" by sweeping array sizes and timing access.
4. Read about MESI cache coherence. Why is "false sharing" a performance bug?
5. CSAPP Cache Lab.

---

## Common gotchas

- **False sharing** — two threads write to different variables that happen to share a cache line → ping-pong → catastrophic slowdown.
- **Cache thrashing** — accessing addresses that all map to the same cache set → constant evictions.
- **Branch misprediction** — sorted vs unsorted array iteration can differ 5× in speed for the same algorithm. Classic StackOverflow question.

---

## Time budgets

| You have… | Do this                                                                 |
| --------- | ----------------------------------------------------------------------- |
| 30 min    | Computerphile cache video + the famous SO question on branch prediction |
| 3 hrs     | Drepper Sec 1–3 + Mike Acton DOD talk                                   |
| 1 weekend | CSAPP Ch 6 + start Cache Lab                                            |
| Long-term | Drepper end-to-end + Hennessy & Patterson Ch 2–3                        |

---

## Open questions

- [ ]
