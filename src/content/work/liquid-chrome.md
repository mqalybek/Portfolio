---
title: Liquid Chrome
summary: Product-launch ad concept for a fragrance — liquid metal, soft light, 15 seconds for social.
year: 2026
category: Brand & Ads
client: Concept work
role: Art direction · Prompting · Motion
tools: [Flux, Higgsfield, Topaz, After Effects]
featured: true
order: 2
size: tall
cover: /media/liquid-chrome/poster.jpg
preview: /media/liquid-chrome/preview.mp4
video:
  src: /media/liquid-chrome/preview.mp4
  poster: /media/liquid-chrome/poster.jpg
  aspect: 16 / 9
prompt: |
  Macro product shot, a perfume bottle dissolving into liquid chrome,
  ribbons of molten metal in slow motion, soft rim light, pink and cobalt reflections,
  black seamless background, high-end commercial, 100mm macro, shallow depth of field
params: --ar 9:16
pipeline:
  - { tool: Flux, step: Product hero frames }
  - { tool: Higgsfield, step: Camera motion presets }
  - { tool: Topaz, step: Upscale to 4K }
  - { tool: After Effects, step: Logo, type, export }
results:
  - { value: "15 s", label: vertical cut }
  - { value: "4K", label: master }
demo: true
---

A spec ad exploring how far a single product shot can go when the motion is driven by camera presets instead of text alone.
