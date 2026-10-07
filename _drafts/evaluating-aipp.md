---
layout: blog-post
title: "Evaluating Whether AIPP Improves AI Answers"
published: false
categories:
  - Documentation experiments
tags:
  - Technical Documentation
  - AIPP
  - AI Evaluation
excerpt: "A draft account of building a fair, reproducible evaluation for comparing ordinary documentation with AIPP."
---

> Draft outline. Update this file as each evaluation stage is completed. Do not publish until the pilot results have been reviewed.

## Why evaluate AIPP?

- Restate the hypothesis: reviewed context beyond human-facing documentation may help assistants answer edge cases, cite sources, identify conflicts, and abstain appropriately.
- Explain why the project should test that hypothesis rather than assume AIPP performs better.
- Introduce the Northstar documentation and AIPP comparison.

## What makes the comparison fair?

- Use the same questions and prompts for every model and source condition.
- Compare ordinary documentation with the compiled AIPP knowledge object.
- Blind and randomize source labels.
- Define gold-standard evidence before generating answers.
- Give ordinary documentation credit for appropriate abstention when it lacks evidence.
- Keep deterministic, model, and human evaluations visible as separate results.

## Stage 1: Evaluation contract

Status: in progress

- Versioned evaluation protocol
- Gold-standard benchmark schema
- Shared JSON response format for Codex, Gemini, APIs, and local models
- Judgment schema for deterministic, model, and human reviewers
- Initial cases covering shared content, AIPP-only details, conflicts, and insufficient evidence
- CI validation

Questions or lessons to add after review:

- Did reviewers find the condition-specific expectations understandable?
- Were any gold claims inadvertently biased toward AIPP?
- What changed during review?

## Stage 2: Blinded evaluation packets

Status: planned

- Generate randomized `source-a` and `source-b` packets.
- Keep the condition map away from answer generators and judges.
- Record source checksums and run metadata.
- Create response templates that conform to the shared JSON Schema.

## Stage 3: Response import and deterministic checks

Status: planned

- Import responses created through file-reading assistants or APIs.
- Validate every response without changing its original text.
- Check required citations, prohibited claims, and structural requirements.
- Preserve failures and missing answers as evidence.

## Stage 4: Human review and comparison report

Status: planned

- Review blinded answers on a 0–4 scale.
- Score accuracy, completeness, attribution, edge cases, conflicts, and uncertainty.
- Mark dimensions that do not apply.
- Display evaluator disagreement and individual cases instead of only an aggregate score.

## Pilot: Codex and Gemini

Status: planned

- Use at least one OpenAI/Codex model and one Gemini model.
- Record the exact model identifiers and interfaces.
- Keep prompts and source packets identical.
- Avoid paid API calls initially by using file-reading assistants when practical.
- Add automated API adapters only after the manual protocol works.

## Results

Add after the pilot:

- What improved with AIPP?
- Where did ordinary documentation perform equally well or better?
- Did models correctly identify unresolved source conflicts?
- Did they abstain when neither source condition contained enough evidence?
- Where did human and model evaluators disagree?
- What limitations prevent broad conclusions?

## What comes next?

- Expand the benchmark beyond the initial Northstar cases.
- Repeat runs to measure variability.
- Consider an additional local model.
- Improve AIPP or the evaluation rubric based on observed failures.
- Publish machine-readable results and the human-readable comparison report.

## Links to add before publication

- Northstar Docs Lab
- AIPP overview
- Evaluation protocol
- Published comparison report
- Scorecard
- GitHub repository

