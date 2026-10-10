---
title: City of Cells
summary: Music visualiser where generative patterns react to the beat — made for a 3-minute track.
year: 2025
category: Video
role: Concept · Generation · Edit
tools: [Runway, Suno, After Effects]
featured: true
order: 4
size: wide
cover: /media/city-of-cells/poster.jpg
preview: /media/city-of-cells/preview.mp4
video:
  src: /media/city-of-cells/preview.mp4
  poster: /media/city-of-cells/poster.jpg
prompt: |
  Top-down view of a living city made of glowing cells, organic growth patterns,
  acid green on deep violet, pulsing to a beat, macro microscopy aesthetic, seamless loop
pipeline:
  - { tool: Suno, step: Track }
  - { tool: Runway, step: Loops per section }
  - { tool: After Effects, step: Beat-synced edit }
demo: true
---

Each section of the song got its own visual "species" — the edit switches between them on the downbeat.
