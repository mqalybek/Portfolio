---
title: AI × Engineering — relperm
summary: I built a working desktop app for reservoir engineers by pair-programming with Claude Code — from a script to a tested, packaged .exe.
year: 2026
category: Automation
role: Product · Prompting · Testing
tools: [Claude Code, Python, GitHub Actions]
featured: true
order: 6
size: wide
cover: /media/ai-engineering/poster.jpg
preview: /media/ai-engineering/preview.mp4
pipeline:
  - { tool: Claude Code, step: Spec → code in small, reviewable steps }
  - { tool: Python, step: Models, fitting, interactive editor }
  - { tool: GitHub Actions, step: Tests & one-click Windows .exe }
results:
  - { value: "1-click", label: Windows app for colleagues }
  - { value: "CI", label: tests on every change }
links:
  - { label: View on GitHub, url: "https://github.com/mqalybek/relative-permeability" }
---

## The problem

Reservoir engineers build relative-permeability and capillary-pressure tables for simulators (Eclipse, tNavigator, Petrel) by hand, from lab (SCAL) reports. It's slow and error-prone.

## What I built — with AI

**relperm** fits Corey / LET curves and capillary pressure straight from a SCAL report, lets you tune every parameter with sliders, and exports ready-to-use simulator tables. It ships as a single `relperm.exe`, so colleagues don't need Python.

## The prompt-engineering part

I'm not a software developer — I'm a domain expert who knows how to **brief an AI**. The work was in writing precise specs, splitting the job into verifiable steps, asking for tests first, and reviewing every change against real engineering data.

That's the same skill I bring to creative work: clear intent, tight constraints, fast iteration.
