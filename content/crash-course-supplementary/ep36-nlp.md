# Ep 36: Natural Language Processing — Supplementary Resources

> Companion to [crash-course.md → Ep 36](../crash-course.md#part-7--security--ai-ep-3140)
>
> **Episode covers**: Tokenization, parsing, speech recognition, machine translation.

---

## Underrated context (Crash Course skips this)

- **This episode is _wildly_ outdated (2017).** Everything Carrie Anne describes — phrase structure grammars, n-gram models, hand-crafted rules — is no longer how NLP works. Transformers (2017) → BERT (2018) → GPT (2018+) → ChatGPT (2022) rewrote everything.
- **Tokenization is the unsung hero.** Modern LLMs use BPE (Byte-Pair Encoding) or SentencePiece. Tokens ≠ words. "Strawberry" → ["straw", "berry"]. Why GPTs miscount letters.
- **Embeddings are the foundation.** Word2Vec (2013) showed words can be vectors where `king - man + woman ≈ queen`. All modern NLP rides on dense vector representations.
- **Transformers killed RNNs.** Pre-2017, NLP used LSTMs/GRUs (sequential, slow). Attention (Transformers) is parallel and captures long-range dependencies better. RNNs are now legacy.
- **Scaling laws** (Kaplan 2020, Chinchilla 2022): loss is a smooth function of compute, data, and parameters. More compute + more data → predictably better models. This is _why_ GPT-4 exists.
- **Hallucination is not a bug, it's the design.** LLMs predict next tokens by likelihood; they have no concept of truth. Retrieval-Augmented Generation (RAG) grounds them in real documents.

---

## Videos

- **[Crash Course CS Ep 36](https://www.youtube.com/watch?v=fOvTtapxa9c)**.
- **[Andrej Karpathy — Let's build GPT from scratch](https://www.youtube.com/watch?v=kCc8FmEb1nY)** — the must-watch for understanding modern NLP.
- **[Karpathy — Let's build the GPT Tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE)** — BPE in 2 hours.
- **[3Blue1Brown — But what is a GPT?](https://www.youtube.com/watch?v=wjZofJX0v4M)** — visual Transformer intro.
- **[Stanford CS224n](https://web.stanford.edu/class/cs224n/)** — the deep learning NLP course.

---

## Articles

- **[The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)** — Jay Alammar.
- **[The Illustrated GPT-2](https://jalammar.github.io/illustrated-gpt2/)**.
- **[The Illustrated BERT](https://jalammar.github.io/illustrated-bert/)**.
- **["Attention Is All You Need" (2017)](https://arxiv.org/abs/1706.03762)** — the paper.
- **[Word2Vec paper (Mikolov 2013)](https://arxiv.org/abs/1301.3781)**.

---

## Books

- **Jurafsky & Martin — _Speech and Language Processing_** ([free 3rd ed online](https://web.stanford.edu/~jurafsky/slp3/)) — the standard textbook, modern editions cover Transformers.
- **Sebastian Raschka — _Build a Large Language Model (From Scratch)_** (2024) — recommended for current state of the art.
- **Lewis Tunstall et al. — _Natural Language Processing with Transformers_** — Hugging Face team's book.

---

## Interactive / hands-on

- **[Hugging Face NLP Course](https://huggingface.co/learn/nlp-course)** — free, modern, practical.
- **[Karpathy's nanoGPT](https://github.com/karpathy/nanoGPT)** — train a GPT-2 in 300 lines.
- **[OpenAI Playground](https://platform.openai.com/playground)** — feel how LLMs respond.
- **[Tiktokenizer](https://tiktokenizer.vercel.app/)** — see how text is split into tokens.

---

## Time budgets

| You have… | Do this                                                |
| --------- | ------------------------------------------------------ |
| 30 min    | 3Blue1Brown GPT video                                  |
| 2 hrs     | Karpathy's tokenizer lecture                           |
| 1 weekend | Karpathy's "Let's build GPT" — code along with nanoGPT |
| Long-term | CS224n + Jurafsky & Martin (3–6 months)                |

---

## Open questions

- [ ]
