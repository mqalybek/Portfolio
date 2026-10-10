---
title: Prompt critic loop
model: Claude
kind: Text
order: 5
prompt: |
  Here is an image prompt and a description of what the result got wrong.
  Prompt: {prompt}
  Problem: {what_went_wrong}
  1. Diagnose which words caused the problem.
  2. Rewrite the prompt with the smallest change that fixes it.
  3. Explain the change in one sentence.
note: Using an LLM as a prompt reviewer makes iterations deliberate instead of random.
---
