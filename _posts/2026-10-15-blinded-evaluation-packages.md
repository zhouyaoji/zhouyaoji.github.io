---
layout: blog-post
title: "Blinding the AIPP Comparison"
date: 2026-10-15
categories:
  - Documentation experiments
tags:
  - Technical Documentation
  - AIPP
excerpt: "We create a double-blinded test for the agent who uses the docs or AIPP for an answer, but is unaware of the its source."
---
The next step in evaluating AIPP was creating double-blinded test packets. Basically, provide two sources from unknown origins for the agent to use to generate responses.

I did this by creating a packet generator that randomizes the conventional documentation and AIPP as `source-a` and `source-b`. It stores the real mapping separately so the AI assistants answering questions do not know whether the source was from AIPP or the documentation.

Each packet contains the same question, instructions, source material, citation identifiers, and response format. It also records source checksums and run metadata, so the experiment can be reproduced.

The process runs through continuous integration without calling an AI provider or using paid API tokens. I admit that it was impossible to achieve "perfect" blinding because the data from the conventional documentation and structured AIPP look different, but I did explicitly document this limitation to be transparent.

<div class="article-links">
  <h2>Explore the project</h2>
  <ul>
    <li><a href="https://zhouyaoji.github.io/northstar-docs-frameworks/">Northstar Docs Lab</a></li>
    <li><a href="https://zhouyaoji.github.io/northstar-docs-frameworks/scorecard/">Documentation scorecard</a></li>
    <li><a href="https://zhouyaoji.github.io/northstar-docs-frameworks/aipp/">AIPP overview</a></li>
    <li><a href="https://github.com/zhouyaoji/northstar-docs-frameworks">Northstar source on GitHub</a></li>
    <li><a href="https://app.joinhandshake.com/ai-showcase/projects/3484420?utm_source=web&amp;utm_campaign=project_share&amp;utm_medium=linkedin&amp;utm_content=stu-linkedin-project_page">Handshake AI Showcase project</a></li>
  </ul>
</div>
