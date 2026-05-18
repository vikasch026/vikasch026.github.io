# Ep 20: Files & File Systems — Supplementary Resources

> Companion to [crash-course.md → Ep 20](../crash-course.md#part-4--operating-systems--storage-ep-1821)
>
> **Episode covers**: blocks, directories, FAT, fragmentation, file system structures.

---

## Underrated context (Crash Course skips this)

- **A file is just bytes + metadata.** The OS imposes structure: name, size, permissions, timestamps. The bytes themselves have no inherent meaning — interpreting them is up to the program.
- **Directories are files too.** A directory is a special file that lists `(name, inode)` pairs. Same storage primitive, different interpretation.
- **Inodes vs file names.** On Unix, the inode IS the file. Names are just pointers (hard links). Delete the last name → file is freed. This is why `rm file && cat /proc/<pid>/fd/3` still works if a process has it open.
- **Modern FS are databases.** ZFS, btrfs, APFS use copy-on-write, snapshots, checksums, transactions. Way more than "store bytes." NTFS has had journaling since 1993.
- **Fragmentation is mostly solved.** Modern FS (ext4, NTFS, APFS) auto-defragment or design around it. The "defrag" tool is a relic.
- **Journaling = crash safety.** Write metadata changes to a journal first, then apply. On crash, replay journal. Prevents file system corruption.

---

## Videos

- **[Crash Course CS Ep 20](https://www.youtube.com/watch?v=KN8YgJnShPM)**
- **[Computerphile — File Systems](https://www.youtube.com/watch?v=KN8YgJnShPM)**.
- **[Linux Filesystem Hierarchy explained](https://www.youtube.com/watch?v=42iQKuQodW4)**.
- **[ZFS Overview](https://www.youtube.com/watch?v=MsY-BafQgj4)** — modern FS done right.

---

## Articles

- **[The Design and Implementation of a Log-Structured File System (Rosenblum, 1991)](https://people.eecs.berkeley.edu/~brewer/cs262/LFS.pdf)** — classic paper.
- **[ext4 Disk Layout (kernel.org)](https://ext4.wiki.kernel.org/index.php/Ext4_Disk_Layout)** — see how a real FS stores stuff.
- **[Why ZFS is better](https://klarasystems.com/articles/openzfs-an-introduction/)**.

---

## Books

- **OSTEP Ch 36–45** — _the_ file systems treatment. Free.
- **Marshall Kirk McKusick et al. — _The Design and Implementation of the FreeBSD Operating System_** — Ch on FFS, UFS.
- **Robert Love — _Linux Kernel Development_** — FS chapter.

---

## Interactive / hands-on

- **[strace your file operations](https://blog.packagecloud.io/eng/2017/02/04/an-introduction-to-strace/)** — `strace -e trace=file ls`.
- **[Make a FS in FUSE](https://github.com/libfuse/libfuse)** — write a userspace file system.

---

## Time budgets

| You have… | Do this                                  |
| --------- | ---------------------------------------- |
| 30 min    | OSTEP Ch 36 + Crash Course Ep 20 rewatch |
| 1 weekend | OSTEP Ch 36–43                           |
| Long-term | Write a FUSE filesystem                  |

---

## Open questions

- [ ]
