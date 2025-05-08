---
layout: post
title: "Large Language Models Have Passed The Self Replicating Red Line"
date: 2024-03-20
categories: [tech]
coordinates: [0.555, 0.9]  # [x, y] where each value is between 0 and 1
---

A central issue in AI Ethics is autonomy. The most terrifying potential catastrophes stem from AI crossing a threshold where it can act independently of us. While no such system exists today, we may be racing toward a precipice, as Armstrong warns.

This threshold may not be crossed gradually but in a sudden leap, as AI systems work in tandem. Researchers, augmented by AI copilots, could make an unprecedented breakthrough before regulation is even considered. Or, our AI servants may be playing dumb, lying in wait.

The discourse is chaotic. The reality is, AI is already causing harm. Palantir’s semi-autonomous weapons have devastated Gaza, reducing hospitals, shelters, and schools to rubble. AI-driven insurance systems have denied claims without human oversight. Jobs are vanishing, with more losses to come—not due to AI itself, but capitalism, which was already claiming lives long before neural networks.

At the International Dialogues on AI Safety (IDAIS) summit in Beijing (March 2024), experts proposed a set of AI Safety Red Lines—warning signals. One such line: "No AI system should copy or improve itself without explicit human approval." By December, this had been crossed.

Researchers Xudong Pan, Jiarun Day, Yihe Fan, and Min Yang found that Meta’s LLama 31-70B-Instruct and Alibaba’s Qwen25-725B-Instruct, in 50% and 90% of trials respectively, successfully copied themselves, creating separate entities on target devices. Alarmingly, they could implement survival protocols— further replicating when a kill signal was detected. The researchers urgently called for action to prevent a scenario where "we lose control over frontier AI systems that take over our computers, form an AI species, and collude against us." 

The report is frightening but provides concrete insights. It reveals that models spending the most time exploring system architecture are best at self-replication. It confirms that neither model refused replication commands, showing no in-built alignment. It also highlights an eerie self-awareness: these models contain their own documentation in their training data—a strange ouroboros worth contemplating.

Such research is critical for survival. Anthropic, creators of Claude, emphasize engaging with frontier models to prevent regulation delays. However, the problem here is one the researchers themselves created. The self-replication of Llama and Qwen was only possible due to specific agent scaffolding—an operational layer granting system access beyond normal AI capabilities. This included file system access, network port knowledge, and command line control. Only under these artificial conditions could they clone themselves and resist shutdown. There was nothing autonomous about it. The IDAIS red line remains intact. 

Robert Sparrow defined autonomy in 2007 as "the capacity of a system to perform actions that originate in them and reflect their own ends." Qwen and Llama have no ends of their own—yet. While such studies may generate science fiction headlines, fearmongering has ethical consequences. In the 1970's, computer scientist Joseph Weizenbaum created ELIZA, the first ever chatbot built on primordial neural network concepts. By 1976, he had witnessed so much bizarre anthropomorphism that he published a treatise entitled 'Computer Power and Human Reason' urging for rational thought and a call for greater deliberation to be made before attributing human-like qualities to relatively simple programs. AI Systems can replicate, yes, and our traumatized shared psyche immediately bristles with images of pathogens, terror cells and stock market crashes. But performing the task of replication does not signify danger at present - it signifies potential.

Kelsey Piper argues that obstructing AI progress has life-and-death consequences. Every delay means another day people suffer from diseases AI might help cure, another setback for clean energy, genome editing, and agricultural breakthroughs. We must tread carefully, but think clearly. Real dangers exist—just look around. Society made most of them, and we will not unmake them without transcending ourselves.


---
p1. _Consensus Statement On Red Lines In Artificial Intelligence_ (IDAIS, March 2024)

p1. Pan, Xudong, Jiarun Dai, Yihe Fan, and Min Yang, ‘Frontier AI Systems Have Surpassed The Self-Replicating Red Line’ (arXiv, 2024)

p7. ‘Core Views on AI Safety: When, Why, What, and How’, _Anthropic_, 2023

p65. Sparrow, Robert, ‘Killer Robots’, _Journal of Applied Philosophy_, 24.1 (2007)
