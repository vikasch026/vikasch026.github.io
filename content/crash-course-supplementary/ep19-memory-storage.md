# Ep 19: Memory & Storage — Supplementary Resources

> Companion to [crash-course.md → Ep 19](../crash-course.md#part-4--operating-systems--storage-ep-1821)
>
> **Episode covers**: tape, drums, floppies, HDD, SSD. Access time vs capacity tradeoffs.

---

## Underrated context (Crash Course skips this)

- **The storage hierarchy is exponential.** Register access ~0.5ns. L1 cache ~1ns. RAM ~100ns. SSD ~100μs. HDD ~10ms. Each level is ~100× slower. _Latency, not bandwidth, is the killer._
- **SSDs aren't drop-in HDDs.** SSDs can't overwrite — they must erase a whole block before writing. This is why SSDs have wear leveling, TRIM, and write amplification. They wear out (limited write cycles).
- **NVMe killed SATA.** Modern NVMe SSDs talk directly to PCIe, bypassing SATA's 600 MB/s ceiling. Speeds 7000+ MB/s.
- **HDDs aren't dead.** Cheap per TB → data centers still use them for cold storage. New tech: HAMR, MAMR push density higher.
- **Tape is alive too.** Modern LTO-9 tapes hold 45 TB compressed, are cheaper and more durable than disk for archives. AWS Glacier uses tape.
- **"Persistent memory" is a new tier.** Intel Optane (RIP 2022) tried to fit between DRAM and SSD. Software is still figuring out what to do with bytes-addressable persistent storage.

---

## Videos

- **[Crash Course CS Ep 19](https://www.youtube.com/watch?v=TQCr9RV7twk)**
- **[Branch Education — How does a Hard Drive work?](https://www.youtube.com/watch?v=wtdnatmVdIg)** — beautiful animations.
- **[Branch Education — How does an SSD work?](https://www.youtube.com/watch?v=5Mh3o886qpg)**.
- **[Asianometry — The NAND Flash Story](https://www.youtube.com/results?search_query=asianometry+nand+flash)**.
- **[Linus Tech Tips — Tape backup](https://www.youtube.com/c/LinusTechTips)** — yes, tape.

---

## Articles

- **[Backblaze Hard Drive Reliability Reports](https://www.backblaze.com/blog/category/cloud-storage/)** — annual real-world failure rates of HDDs.
- **[Latency Numbers Every Programmer Should Know](https://gist.github.com/jboner/2841832)** — bookmark this.
- **[SSD vs HDD — How They Differ (Crucial)](https://www.crucial.com/articles/about-ssd/ssd-vs-hdd)**.
- **[How SSDs Work (Computerworld)](https://www.computerworld.com/article/2474584/how-ssds-work.html)**.

---

## Books

- **Bruce Jacob — _Memory Systems: Cache, DRAM, Disk_** — graduate-level reference.
- **CSAPP Ch 6** — memory hierarchy from programmer's view.
- **OSTEP Ch 36–46** — file systems & persistence.

---

## Time budgets

| You have… | Do this                                  |
| --------- | ---------------------------------------- |
| 30 min    | Branch Education HDD + SSD videos        |
| 2 hrs     | OSTEP Ch 36–37 (I/O devices, hard disks) |
| Long-term | Bruce Jacob's _Memory Systems_           |

---

## Open questions

- [ ]
