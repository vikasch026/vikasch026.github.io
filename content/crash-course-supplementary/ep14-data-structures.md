# Ep 14: Data Structures — Supplementary Resources

> Companion to [crash-course.md → Ep 14](../crash-course.md#part-3--software--programming-ep-1117)
>
> **Episode covers**: arrays, strings, structs, pointers, linked lists, queues, stacks, trees, graphs.

---

## Underrated context (Crash Course skips this)

- **Choice of data structure determines algorithm complexity.** Same problem, different DS = different Big-O. "Find element by key": array = O(n), hash table = O(1).
- **Arrays are CPU's best friend.** Contiguous memory = cache-line-friendly. Linked lists scatter all over RAM = cache misses everywhere. Modern CPUs make arrays 5–10× faster than linked lists in practice, even when Big-O is the same.
- **Trees are everywhere.** File system = tree. DOM = tree. JSON = tree. Compiler AST = tree. Database B-trees. Once you see trees, you see them in everything.
- **Hash tables are magic.** O(1) average insert/lookup. The cost: random memory access, collisions, resizing. Hash function quality is critical.
- **Graphs subsume everything.** Trees are graphs. Linked lists are graphs. Roads, social networks, web links — all graphs. Graph algorithms (BFS, DFS, Dijkstra) are core CS.

---

## Videos

- **[Crash Course CS Ep 14](https://www.youtube.com/watch?v=DuDz6B4cqVc)**
- **[MIT 6.006 — Hashing](https://www.youtube.com/watch?v=0M_kIqhwbFo)**.
- **[William Fiset — Data Structures playlist (8 hours)](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu)** — _best_ free DS course on YouTube.
- **[Computerphile — Data Structures](https://www.youtube.com/watch?v=DuDz6B4cqVc)**.
- **[mycodeschool — Linked Lists, Trees](https://www.youtube.com/c/mycodeschool)** — classic.

---

## Articles

- **[Visualgo — Data Structures](https://visualgo.net/)** — animated.
- **[Stanford Pointers PDF — Linked Lists](http://cslibrary.stanford.edu/103/LinkedListBasics.pdf)** — read this if pointers confuse you.
- **[Bret Victor — Magic Ink](http://worrydream.com/MagicInk/)** — bonus, on representation generally.

---

## Books

- **Sedgewick — _Algorithms_** — best chapter coverage.
- **Skiena — _The Algorithm Design Manual_** — Part 2 is a DS reference catalog.
- **CLRS** — reference quality.
- **Mark Allen Weiss — _Data Structures and Algorithm Analysis in C_** — old but solid for C learners.

---

## Interactive / hands-on

- **[Visualgo](https://visualgo.net/)** — interactive everything.
- **[LeetCode Explore — Data Structure](https://leetcode.com/explore/learn/)** — guided.
- **[Build Your Own Hashmap in C](https://benhoyt.com/writings/hash-table-in-c/)** — excellent project tutorial.

---

## Exercises (in C)

1. Implement a singly linked list with insert/delete/find.
2. Implement a stack and queue using arrays. Then using linked lists. Compare.
3. Implement a hash table with chaining. Test collision handling.
4. Implement a binary search tree with insert/delete.
5. Implement BFS and DFS on an adjacency-list graph.

---

## Time budgets

| You have… | Do this                                         |
| --------- | ----------------------------------------------- |
| 30 min    | Visualgo — tour every DS                        |
| 2 weeks   | William Fiset DS playlist + implement each in C |
| Long-term | Sedgewick + LeetCode 150                        |

---

## Open questions

- [ ]
