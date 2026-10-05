---
layout: blog-post
title: "Introducing AIPP: Giving AI More Than Human-Facing Documentation"
date: 2026-10-04
categories:
  - Documentation experiments
tags:
  - Technical Documentation
  - AIPP
excerpt: "The AI Publication Protocol explores how reviewed, source-aware context beyond published documentation could help AI assistants produce better answers."
---

I don't believe AI should be limited by content intended for human consumption. It's like asking an elephant to drink from a teacup.

That’s why I designed the AI Publication Protocol (AIPP), a schema for creating content that AI can ingest more easily, provides more comprehensive context, and can be rendered through automation into markup and XML formats.

AIPP gives an AI assistant access to reviewed information beyond the published documentation, while recording its sources and identifying contradictions that require human review.

To demonstrate the concept, I created a GitHub project and GitHub Pages site that:

- Renders fictitious documentation using seven popular static-site generators
- Generates a scorecard from a rubric defined in YAML
- Uses GitHub Actions for automation, with examples showing how the process could be adapted to CI/CD systems such as Jenkins
- Includes a prototype assistant that answers questions using generated `llms.txt` files without calling a paid AI API

It’s still a work in progress, so all feedback is welcome. My next step is to use the evaluation rubric to determine whether AI assistants produce better answers with AIPP than with conventional documentation sources.

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
