# Ep 35: Computer Vision — Supplementary Resources

> Companion to [crash-course.md → Ep 35](../crash-course.md#part-7--security--ai-ep-3140)
>
> **Episode covers**: Pixels, edge detection, feature extraction, face detection, CNNs.

---

## Underrated context (Crash Course skips this)

- **Pre-2012 CV was hand-engineered features** (SIFT, HOG, Haar cascades). AlexNet (2012) crushed ImageNet with a CNN and ended that era overnight. The entire field pivoted to deep learning.
- **CNNs (Convolutional Neural Networks)** exploit translation invariance: a cat is a cat whether top-left or bottom-right of the image. Convolutions share weights spatially.
- **Object detection vs segmentation vs classification**: classify (what's in the image?) → detect (where + bounding box) → segment (pixel-level mask). Each harder than the last.
- **Modern CV is multimodal.** CLIP (2021) jointly learns vision + language. SAM (2023) segments anything. Foundation models eat the field.
- **Vision Transformers (ViT, 2020)** matched and now exceed CNNs given enough data — another bitter-lesson moment.
- **The data is the moat.** ImageNet (14M labeled images, 2009) made deep CV possible. The hard part isn't the model; it's the labeled data.
- **Adversarial examples**: imperceptible pixel changes that fool CNNs into seeing a panda as a gibbon. Reveals how alien these models are.

---

## Videos

- **[Crash Course CS Ep 35](https://www.youtube.com/watch?v=-4E2-0sxVUM)**.
- **[3Blue1Brown — Convolutions](https://www.youtube.com/watch?v=KuXjwB4LzSA)** — what a convolution _actually_ is.
- **[Computerphile — How Blurs & Filters Work](https://www.youtube.com/watch?v=C_zFhWdM4ic)**.
- **[Stanford CS231n lectures (Fei-Fei Li, Karpathy, Johnson)](https://www.youtube.com/playlist?list=PLC1qU-LWwrF64f4QKQT-Vg5Wr4qEE1Zxk)** — the canonical CV deep learning course.

---

## Articles

- **[A Visual Guide to Convolutional Neural Networks](https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53)**.
- **[The Illustrated CLIP (Jay Alammar style)](https://openai.com/research/clip)** — multimodal vision+language.
- **["ImageNet Classification with Deep CNNs" — AlexNet paper (2012)](https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html)** — the paper that started the deep-learning era.
- **["Segment Anything" — Meta (2023)](https://arxiv.org/abs/2304.02643)** — foundation model for segmentation.

---

## Books

- **Richard Szeliski — _Computer Vision: Algorithms and Applications_** ([free PDF](https://szeliski.org/Book/)) — the standard textbook.
- **Adrian Rosebrock — _Deep Learning for Computer Vision with Python_** — applied.

---

## Interactive / hands-on

- **[Stanford CS231n assignments](https://cs231n.github.io/)** — implement CNNs from scratch in NumPy, then PyTorch.
- **[Kaggle — Computer Vision competitions](https://www.kaggle.com/competitions?category=computerVision)**.
- **[OpenCV tutorials](https://docs.opencv.org/master/d9/df8/tutorial_root.html)** — classical CV in Python.
- **[Hugging Face — Vision Transformers](https://huggingface.co/docs/transformers/model_doc/vit)** — run pre-trained ViTs.

---

## Time budgets

| You have… | Do this                                              |
| --------- | ---------------------------------------------------- |
| 30 min    | 3Blue1Brown convolutions                             |
| 2 hrs     | First CS231n lecture                                 |
| 1 weekend | CS231n Assignment 1 (kNN, SVM, basic NN on CIFAR-10) |
| Long-term | Full CS231n + Szeliski's book (3–6 months)           |

---

## Open questions

- [ ]
