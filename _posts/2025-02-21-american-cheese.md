---
layout: post
title: "A Single Slice Of American Cheese"
date: 2025-02-21
categories: [art, tech, ethics]
coordinates: [0.29, 0.3]  # [x, y] where each value is between 0 and 1
---

On the 30th January 2025, developer Kent Keirsey became the first to be granted copyright by the US Copyright Office for a single image created entirely with AI-generated material. The work, titled _A Single Piece Of American Cheese_, was created by Keirsey using the Invoke AI application, to which Keirsey is a main contributor. Before January 2025, the USCO had rejected all AI-assisted works on the basis that they lacked sufficient human authorship. In 2018, US courts set a precedent by dismissing the copyright claim of the Crested Macaque monkey named Naruto to a series of ‘Monkey Selfies’—ruling that non-human entities cannot claim ownership. In 2022, the USCO rejected Jason Allen’s claim on his artwork _Théâtre Dʼopéra Spatial_, created entirely with Midjourney, on similar grounds.

The burden then fell on artists using genAI tools to prove that their work featured significant human contribution. In February 2023, Kris Kashnatova was granted partial copyright for their graphic novel _Zarya Of The Dawn_, but solely for the compositional and written elements—not the AI-generated imagery.

Keirsey understood that for the USCO to grant copyright, the submission would need to demonstrate a multi-stage process, iterative refinement, and creative decision-making by a human. He developed the Invoke application with these factors in mind. Invoke is free and open-source—a UI wrapper for interacting with image generation models, most popularly Stable Diffusion. Stable Diffusion, released by Stability AI in August 2022, is trained on the LAION-5B dataset, featuring nearly six billion images. The model generates images by first creating Gaussian noise and then iteratively denoising it into a form that matches a user’s input prompt.

Also in 2022, Keirsey implemented the ‘Inpainting’ feature, allowing selective modification of image regions while preserving semantic consistency. Inpainting uses the same core model as initial generation and is essentially a constrained diffusion process. The USCO’s decision in Keirsey’s favor hinged on his image being the result of selecting and arranging multiple inpainted elements—a demonstration of human authorship through iterative engagement.

The diffusion process itself is relevant to copyright debates. Despite extensive training data, image generation is inherently random and user-guided only to a limited extent. This raises questions about Fair Use—particularly whether genAI outputs constitute “transformative” works. OpenAI has faced lawsuits (notably from The New York Times) alleging that copyrighted material was used in training, resulting in partial or full reproductions in outputs. Fair Use permits copying of published work without authorization if the new work is significantly transformed. OpenAI claims this is the case, but the law is unsettled—especially where outputs serve as direct commercial competitors to original works.

The flexibility of Fair Use will become increasingly important as more companies adopt platforms like Invoke. Without clear consent frameworks, creators may find their work used in training sets without permission, with genAI reproducing elements of their visual language and undercutting their job opportunities.

Beyond consent, critics like Kunzu and Crawford (via the _Knowing Machines_ podcast) foresee extreme stratification: artists reduced to "content cows" whose ideas feed the creative engines of conglomerates, disincentivizing originality. Meanwhile, Keirsey celebrates his copyright victory, branding himself an indie hero. He claims the ruling enables the safe creation of AI-assisted art without fear of appropriation—an economic concern. Yet, if Invoke catalyzes widespread adoption, the social and financial burdens on artists will only increase, consolidating power in fewer hands.

The EU has responded with legislation that foregrounds human creativity. The 2024 EU AI Act requires companies to disclose whether copyrighted works were used in training and provides an opt-out clause for copyright holders—a rational step toward restoring control to creators.

Perhaps, optimistically, this moment of crisis invites a rethinking of copyright's social function. Could a radically expanded public domain and compensation models like UBI free artists from institutional dependency? Might art reclaim its role as a means of epistemological inquiry, contributing to a shared visual language rather than decorating elite spaces?

Rachel Ossip of _The Guardian_ argues that genAI tools like Invoke must be seen as components of a larger artistic process. She advocates for strong labour protections, suggesting that trained visual communicators will remain best positioned to use these tools effectively. Keirsey has stated that _A Single Piece Of American Cheese_ took ten minutes to create. It is not, he admits, a masterpiece. The masterpieces are still waiting to be made.

---

- Keirsey, Kent, _How We Received The First Copyright For A Single Image Created Entirely With AI-Generated Material_, Invoke AI, 10 February 2025, p.3, p.8, p.14.
    
- Kazaz, Jana, _Ethical Use Of AI: Navigating Copyright Challenges_, p.3, p.5.
    
- Sundara Rajan, Mira, _Is Generative AI Fair Use Of Copyright Works?_, Wolters Kluwer, 2024, p.3, p.4.  
    https://copyrightblog.kluweriplaw.com/2024/02/29/is-generative-ai-fair-use-of-copyright-works-nyt-v-openai/
    
- Kunzru, Hari; Dorsen, Annie; Avishai, Tamar; Crawford, Kate. "Art Vs. AI: The Salon", _Knowing Machines_, Dec 2023. Accessed 23 October 2022.
    
* Ossip, Rachel, ‘Hidden Traces Of Humanity: What AI Images Reveal About Our World’, _The Guardian_, 1 October 2024
