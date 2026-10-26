---
layout: blog-post
title: "Importing Responses and Running Deterministic Checks"
date: 2026-10-19
categories:
  - Documentation experiments
tags:
  - Technical Documentation
  - AIPP
excerpt: "Using rule-based checks to compare AI responses using objective criteria."
---

This update gets us closer to being able to confidently test and evaluate whether AIPP actually improves answers 
from AI models. The change also preserves traceability and separates automated checks from the judgments that 
will later be made by human reviewers.

How was this made possible after the previous changes set up the double-blind evaluation? In a nutshell, this update 
added a system of rule-based checks and a way to load and validate AI-generated response files and produce structured 
results from the double-blind test. This allows us to compare AI responses using objective criteria. 
The repeatable checks look for required facts, unsupported claims, appropriate uncertainty, and source use.

In effect, we created a bridge between collecting AI-generated answers and evaluating them consistently and objectively. 
The goal of this update was to measure facts that can be tested mechanically—not to judge every aspect of 
writing quality, usefulness, or nuance. Those judgments belong in the next update, which adds human review.

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
