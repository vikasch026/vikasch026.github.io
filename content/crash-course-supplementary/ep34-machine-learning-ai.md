# Ep 34: Machine Learning & AI — Supplementary Resources

> Companion to [crash-course.md → Ep 34](../crash-course.md#part-7--security--ai-ep-3140)
>
> **Episode covers**: Classification, decision trees, neural networks, deep learning, supervised vs unsupervised.

---

## Underrated context (Crash Course skips this)

- **The episode is from 2017 — pre-Transformer era.** Everything changed in 2017 with the "Attention Is All You Need" paper. Modern AI (GPT, Claude, Gemini, Llama) is built on Transformers. Crash Course doesn't cover them.
- **ML is just statistics + lots of compute.** No magic. Gradient descent + linear algebra + big data + GPUs.
- **"Training" vs "inference"**: training is expensive (weeks, millions of dollars for big models). Inference is cheap (the running of the trained model).
- **Supervised vs unsupervised vs RL**: supervised = labeled examples (most common). Unsupervised = find structure (clustering). Reinforcement = learn from rewards (games, robotics).
- **Bias in = bias out.** Models are mirrors of their training data. ProPublica's COMPAS investigation (2016) is the canonical example.
- **The bitter lesson** (Rich Sutton): general methods that scale with compute beat hand-engineered cleverness. Took 50 years to learn this in AI.
- **Foundation models** changed the game (2020+): one giant model, many downstream tasks via fine-tuning or prompting. GPT-3, CLIP, SAM, etc.

---

## Videos

- **[Crash Course CS Ep 34](https://www.youtube.com/watch?v=z-EtmaFJieY)**.
- **[3Blue1Brown — Neural Networks playlist](https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)** — the gold standard visual explanation.
- **[Andrej Karpathy — Neural Networks: Zero to Hero](https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ)** — build GPT from scratch in PyTorch. Mind-blowing pedagogy.
- **[3Blue1Brown — But what is a GPT?](https://www.youtube.com/watch?v=wjZofJX0v4M)** — Transformers, visually.

---

## Articles

- **[The Bitter Lesson — Rich Sutton](http://www.incompleteideas.net/IncIdeas/BitterLesson.html)** — short, profound.
- **[The Illustrated Transformer — Jay Alammar](https://jalammar.github.io/illustrated-transformer/)** — best Transformer intro.
- **["Attention Is All You Need"](https://arxiv.org/abs/1706.03762)** — the 2017 paper. Read after Karpathy's videos.
- **[Distill.pub](https://distill.pub/)** — interactive ML papers. Archived but brilliant.

---

## Books

- **Aurélien Géron — _Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow_** — the practical bible.
- **Christopher Bishop — _Pattern Recognition and Machine Learning_** — the theoretical bible (free PDF online).
- **Sebastian Raschka — _Build a Large Language Model (From Scratch)_** (2024) — modern, hands-on LLM.
- **Stuart Russell & Peter Norvig — _Artificial Intelligence: A Modern Approach_** — encyclopedic textbook.

---

## Interactive / hands-on

- **[Karpathy's micrograd](https://github.com/karpathy/micrograd)** — backprop in 100 lines of Python. Do it.
- **[TensorFlow Playground](https://playground.tensorflow.org/)** — train a neural net in your browser.
- **[fast.ai Practical Deep Learning](https://course.fast.ai/)** — free course, top-down approach.
- **[Hugging Face Course](https://huggingface.co/learn)** — modern NLP / Transformer hands-on.

---

## Time budgets

| You have… | Do this                                             |
| --------- | --------------------------------------------------- |
| 30 min    | 3Blue1Brown Ep 1 (neural nets)                      |
| 2 hrs     | Full 3Blue1Brown NN playlist                        |
| 1 weekend | Karpathy's "micrograd" lecture + build it           |
| Long-term | Karpathy's full Zero-to-Hero + fast.ai (3–6 months) |

---

## Open questions

- [ ]
