---
title: Golden Hour Portraits
summary: A consistent AI character shown across 12 scenes — same face, same identity, different stories.
year: 2026
category: Characters
role: Character design · Prompt system
tools: [Midjourney, Flux, ComfyUI, Photoshop AI]
featured: true
order: 3
size: normal
cover: /media/golden-hour-portraits/poster.jpg
preview: /media/golden-hour-portraits/preview.mp4
prompt: |
  Portrait of [CHARACTER], warm golden-hour backlight, wind in hair,
  85mm f/1.4, Kodak Portra 400, natural skin texture, candid expression,
  [SCENE], editorial photography
params: --cref [character_ref] --cw 80 --ar 4:5
pipeline:
  - { tool: Midjourney, step: Character reference sheet }
  - { tool: ComfyUI, step: Face consistency workflow }
  - { tool: Photoshop AI, step: Retouch & clean-up }
demo: true
---

Character consistency is the #1 question clients ask about. This series is the answer: one reference sheet, one prompt template with slots, twelve scenes.
