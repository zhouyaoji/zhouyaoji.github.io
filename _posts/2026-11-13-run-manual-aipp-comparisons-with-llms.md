---
layout: blog-post
title: "Impact of AIPP on LLM responses"
date: 2026-11-13
categories:
  - Documentation experiments
tags:
  - Technical Documentation
  - AIPP
excerpt: "The goal of this initial pilot is to perform a simple and economical test of AIPP and establish a 
way to use APIs in the future."
---

My last update to the Northstar project includes instructions for testing whether AIPP elicits better
responses from LLMs than conventional documentation. I will evaluate the responses from Gemini and
Codex next week and report my findings.

The test of the LLMs will be manual at first and will not involve API calls to OpenAI or Gemini APIs. In other words,
I will be manually copying and pasting prompts and responses specifically to avoid API calls.
The goal of this initial pilot is to perform a simple and economical test of AIPP and establish a 
way to use APIs in the future.

Codex and Gemini will provide responses based on AIPP and conventional documentation. The responses
will be saved as JSON and then prepared for human review. The human reviewer will evaluate each response 
without knowing whether its supplied source came from AIPP or conventional documentation.

The evaluation has two parts that focus on different aspects of the response:
* Completeness and helpfulness - Does the response provide a complete, accurate, and helpful answer to the question?
* Source handling - Does the response use the supplied source effectively and accurately, cite it correctly, and 
avoid unsupported claims?

The purpose of separating the scores into two JSON objects is to account for the AIPP source possibly containing 
additional information and to evaluate how effectively the model uses its assigned source.

The human reviewer saves the evaluation as JSON. The following simplified excerpt shows the two groups of scores:

```json
{
   "scores": {
      "responseCompletenessHelpfulness": {
         "accuracy": 4,
         "completeness": 3,
         "helpfulness": 4,
         "edgeCaseHandling": 3,
         "conflictHandling": "not_applicable"
      },
      "sourceHandling": {
         "groundedness": 4,
         "sourceCoverage": 2,
         "citationAccuracy": 4,
         "uncertainty": 3
      }
   }
}
```

The human reviewer will complete one JSON object for each response. Although the reviewer sees the supplied source, 
he or she does not know whether the supplied source came from AIPP or conventional documentation. 
A script will then create Markdown and JSON comparison reports that can be used to evaluate whether AIPP 
improved responses.

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
