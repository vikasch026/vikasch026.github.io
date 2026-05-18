# Ep 37: Robots — Supplementary Resources

> Companion to [crash-course.md → Ep 37](../crash-course.md#part-7--security--ai-ep-3140)
>
> **Episode covers**: Control loops, sensors, actuators, robot history, Asimov's laws.

---

## Underrated context (Crash Course skips this)

- **Moravec's Paradox**: the things humans find hard (chess, math) are easy for computers. The things humans find trivial (walking, picking up a cup) are extraordinarily hard for robots. Why robotics lagged behind software AI by decades.
- **The PID controller** runs the physical world. Industrial robots, drones, thermostats, cruise control — all PID at heart. Three coefficients (Proportional, Integral, Derivative) tuned by hand.
- **Forward vs inverse kinematics**: forward = "given joint angles, where's the hand?" (easy). Inverse = "given a target hand position, what joint angles?" (hard, often no unique solution).
- **ROS (Robot Operating System)** is not an OS — it's a middleware for inter-process messaging on robots. Standard in research and increasingly in industry.
- **The "sim-to-real" gap** is a huge unsolved problem. Train a robot in simulation, deploy to reality → it fails. Domain randomization helps but isn't a cure.
- **Reinforcement learning unlocked legged locomotion** (Boston Dynamics, ANYmal, Unitree, 2018+). Classical control couldn't make robots walk reliably on rough terrain; RL can.
- **Tesla's Optimus + Figure 01 + Boston Dynamics Atlas** signal that general-purpose humanoid robotics is finally getting real (~2024).

---

## Videos

- **[Crash Course CS Ep 37](https://www.youtube.com/watch?v=eE-J2eHk-DI)**.
- **[Boston Dynamics YouTube](https://www.youtube.com/user/BostonDynamics)** — current state of the art, watch in awe.
- **[Brian Douglas — Control Systems Lectures](https://www.youtube.com/c/ControlLectures)** — PID, state-space, etc. The best control theory channel.
- **[MIT 6.832 Underactuated Robotics — Russ Tedrake](https://underactuated.mit.edu/)** — free course + book.

---

## Articles

- **[A Mathematical Introduction to Robotic Manipulation](https://www.cds.caltech.edu/~murray/mlswiki/index.php?title=Main_Page)** — free book (Murray, Li, Sastry).
- **[ROS Tutorials](http://wiki.ros.org/ROS/Tutorials)** — start ROS here.
- **[OpenAI — Solving Rubik's Cube with a Robot Hand](https://openai.com/research/solving-rubiks-cube)** — sim-to-real RL milestone.
- **[Boston Dynamics — How Atlas Works](https://bostondynamics.com/blog/the-new-atlas/)**.

---

## Books

- **Russ Tedrake — _Underactuated Robotics_** ([free online](https://underactuated.mit.edu/)) — the modern textbook.
- **Kevin Lynch & Frank Park — _Modern Robotics_** ([free PDF + Coursera](http://hades.mech.northwestern.edu/index.php/Modern_Robotics)) — superb intro with videos.
- **Sebastian Thrun, Wolfram Burgard, Dieter Fox — _Probabilistic Robotics_** — SLAM, particle filters, the classic.

---

## Interactive / hands-on

- **[Coursera — Modern Robotics specialization (Northwestern)](https://www.coursera.org/specializations/modernrobotics)** — free to audit.
- **[Gazebo](https://gazebosim.org/)** — physics simulator, integrates with ROS.
- **[ROS2 Humble Tutorials](https://docs.ros.org/en/humble/Tutorials.html)**.
- **[Drake (Russ Tedrake's toolbox)](https://drake.mit.edu/)** — modern robotics simulation/optimization.

---

## Time budgets

| You have… | Do this                                                           |
| --------- | ----------------------------------------------------------------- |
| 30 min    | Boston Dynamics highlight reel + Brian Douglas "What is PID?"     |
| 2 hrs     | First module of Modern Robotics on Coursera                       |
| 1 weekend | ROS2 turtlesim + first 3 ROS2 tutorials                           |
| Long-term | Modern Robotics specialization → Underactuated Robotics (6–12 mo) |

---

## Open questions

- [ ]
