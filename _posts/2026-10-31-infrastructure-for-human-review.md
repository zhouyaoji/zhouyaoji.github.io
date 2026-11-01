---
layout: blog-post
title: "Creating the infrastructure for human review"
date: 2026-10-31
categories:
  - Documentation experiments
tags:
  - Technical Documentation
  - AIPP
excerpt: "The Northstar project now has the infrastructure for collecting human feedback on anonymized content."
---

The Northstar project now has the infrastructure for collecting human feedback on anonymized content. 
After human reviewers submit their feedback, automation will generate reports in JSON and Markdown to 
compare and evaluate responses based on the different sources: AIPP and conventional documentation.

We’re keeping human judgments separate from the deterministic checks used in the AIPP evaluation. 
Human judgments assess subjective qualities such as clarity and usefulness, whereas deterministic 
checks have predefined, repeatable criteria. Keeping the results separate lets us see what each type 
of evaluation found without combining them into a potentially misleading score.

The JSON reports can be ingested by CI/CD systems, parsed, analyzed, and transformed into other formats. 
The Markdown reports can be read by writers, engineers, and product managers.

Each report will include four sections that show how AIPP performed, where it did not help, 
and what limitations affected the evaluation
- **Individual results** show what happened for every question-and-answer pair. They help us investigate specific 
failures, edge cases, disagreements, or surprising results rather than relying only on an overall score.
- **Aggregate findings** summarize performance across all cases. They help answer the main question: Did AIPP responses 
generally perform better than responses based on conventional documentation, and in which measured areas?
- **Missing reviews** show which answers were not reviewed. This prevents incomplete data from appearing to be a 
complete evaluation and tells the team what work remains.
- **Limitations** explain what the experiment cannot prove: for example, because of a small test set, too few reviewers, 
differences among models, or test content that may not represent real documentation. This keeps the conclusions credible 
and prevents overclaims.
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
