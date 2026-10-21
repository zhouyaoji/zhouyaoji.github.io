---
layout: blog-post
title: "Designing a Fair AIPP Evaluation"
date: 2026-10-06
categories:
  - Documentation experiments
tags:
  - Technical Documentation
  - AIPP
excerpt: "We design a fair way to evaluate whether AIPP can improve AI-generated answers."
---
Now that I have a schema for creating content that AI can supposedly ingest more easily, it's time to test whether 
the AI Publication Protocol actually improves AI-generated answers.

I created a versioned evaluation protocol and benchmark suite for comparing answers based on conventional documentation with answers based on AIPP. The initial cases cover information shared by both sources, details available only through AIPP, conflicting sources, and questions neither source can answer.

I also had to decide how to handle “I don’t know.” If the conventional documentation doesn’t contain the answer, the assistant should get credit for saying so instead of being penalized for not making something up.

The responses and evaluations use the same JSON formats whether they come from Codex, Gemini, a local model, automated checks, or human reviewers. Their results can be compared, but they remain separate so they don’t get merged together into one misleading score.

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
