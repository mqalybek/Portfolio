---
title: UGC Prompt System
summary: A reusable prompt framework that lets a marketing team produce on-brand UGC-style videos without a prompt engineer.
year: 2026
category: Prompt Engineering
role: Prompt architecture · Documentation · Training
tools: [Claude, ChatGPT, Kling, Higgsfield]
featured: true
order: 5
size: normal
cover: /media/prompt-system/poster.jpg
preview: /media/prompt-system/preview.mp4
prompt: |
  You are a UGC video director for {brand}. Brand voice: {voice}.
  Write {n} video concepts for {product}, each with:
  1. HOOK (first 2 s, pattern interrupt)
  2. SHOT LIST (max 4 shots, each as an image-to-video prompt:
     subject, action, camera, light, mood)
  3. VOICE-OVER (≤ 25 words, spoken, no clichés from {banned_phrases})
  Return JSON matching {schema}. Never invent product claims.
pipeline:
  - { tool: Claude, step: Concepts as structured JSON }
  - { tool: Higgsfield, step: Shots from generated prompts }
  - { tool: Kling, step: Lip-sync & motion }
results:
  - { value: "10×", label: faster concepting }
  - { value: "0", label: off-brand claims in review }
demo: true
---

## Why a system, not a prompt

One great prompt helps one person once. A **template with variables, rules and an output schema** helps the whole team every day — and makes results predictable enough to review.

## What's inside

- Brand-voice block and banned-phrases list
- Shot-prompt grammar: *subject → action → camera → light → mood*
- JSON output so the next tool in the chain can read it
- Eval checklist: hook strength, claim safety, shot feasibility
