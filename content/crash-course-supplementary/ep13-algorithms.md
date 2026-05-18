# Ep 13: Intro to Algorithms — Supplementary Resources

> Companion to [crash-course.md → Ep 13](../crash-course.md#part-3--software--programming-ep-1117)
>
> **Episode covers**: selection sort, bubble sort, merge sort. Big-O notation. Linear vs binary search.

---

## Underrated context (Crash Course skips this)

- **Big-O hides constants.** O(n) doesn't mean "fast" — it means "scales linearly." A 10000n algorithm is slower than 100n² for small n. In practice, constants matter.
- **Cache-friendliness beats Big-O for small data.** A "slow" O(n²) algorithm operating on a cache-resident array can beat an O(n log n) algorithm scattered across RAM. This is why insertion sort beats quicksort for n < 20.
- **Stability matters in sorting.** A stable sort preserves the order of equal elements. Critical when sorting by multiple keys.
- **The "best" algorithm depends on inputs.** Quicksort is O(n²) worst case but O(n log n) average — and it's the practical winner. Mergesort is O(n log n) always but uses more memory.
- **Lower bounds exist.** Comparison-based sorting cannot beat O(n log n). _Proven._ You can only do better with non-comparison sorts (counting, radix) on bounded-range data.

---

## Videos

- **[Crash Course CS Ep 13](https://www.youtube.com/watch?v=rL8X2mlNHPM)**
- **[MIT 6.006 — Introduction to Algorithms (Erik Demaine)](https://www.youtube.com/playlist?list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY)** — full free course. _The_ go-to.
- **[Computerphile — Algorithms playlist](https://www.youtube.com/playlist?list=PLzH6n4zXuckpfMu_4Ff8E7Z1behQks5ba)**.
- **[3Blue1Brown — Algorithm visualization](https://www.youtube.com/c/3blue1brown)** — Grant covers various algorithms beautifully.
- **[Sorting algorithm visualizer](https://www.youtube.com/watch?v=kPRA0W1kECg)** — 15 sorts visualized.

---

## Articles

- **[Big-O Cheat Sheet](https://www.bigocheatsheet.com/)** — every common algo's complexity.
- **[Sorting Algorithms Visualization](https://www.toptal.com/developers/sorting-algorithms)** — interactive.
- **[Visualgo (algorithms + data structures)](https://visualgo.net/)** — best single site for visualizations.
- **[Why insertion sort is so fast (small n)](https://www.geeksforgeeks.org/when-to-use-each-sorting-algorithm/)**.

---

## Books

- **CLRS — _Introduction to Algorithms_ (Cormen et al.)** — the bible. Reference, not page-turner.
- **Robert Sedgewick — _Algorithms_ (4th ed)** — more readable, Java-based.
- **Steven Skiena — _The Algorithm Design Manual_** — practical, war stories.
- **Jon Bentley — _Programming Pearls_** — classic, beautiful. Read it.

---

## Interactive / hands-on

- **[LeetCode](https://leetcode.com/)** — interview prep, algorithm practice.
- **[NeetCode 150](https://neetcode.io/)** — curated LeetCode roadmap with video explanations.
- **[Visualgo](https://visualgo.net/)** — step through algorithms visually.

---

## Exercises

1. Implement bubble, insertion, selection sort in C.
2. Time them on arrays of size 100, 1000, 10000. Plot.
3. Implement mergesort recursively.
4. Implement binary search; convince yourself it's O(log n) (each step halves the search space).
5. NeetCode arrays + sorting section.

---

## Time budgets

| You have… | Do this                                                    |
| --------- | ---------------------------------------------------------- |
| 30 min    | Watch sorting visualization video + read Big-O cheat sheet |
| 1 weekend | NeetCode 150 Arrays section                                |
| Long-term | MIT 6.006 + Sedgewick's _Algorithms_                       |

---

## Open questions

- [ ]
