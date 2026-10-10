---
title: Neon Genesis
summary: A 60-second sci-fi short about a city that dreams itself into existence — fully generated, cut like a trailer.
year: 2026
category: Video
role: Story · Prompt system · Generation · Edit
tools: [Midjourney, Kling, Runway, ElevenLabs, DaVinci Resolve]
featured: true
order: 1
size: large
cover: /media/neon-genesis/poster.jpg
preview: /media/neon-genesis/preview.mp4
video:
  src: /media/neon-genesis/preview.mp4
  poster: /media/neon-genesis/poster.jpg
prompt: |
  Cinematic wide shot, a fractal megacity unfolding from a single glowing seed,
  bioluminescent streets spiralling inward, volumetric haze, anamorphic lens flare,
  shot on ARRI Alexa 65, 35mm, deep teal and magenta grade, dreamlike scale,
  slow push-in, ultra-detailed, film grain
negativePrompt: text, watermark, extra limbs, flat lighting, oversaturated
params: --ar 21:9 --style raw --stylize 250
pipeline:
  - { tool: Claude, step: Script & shot list }
  - { tool: Midjourney, step: Keyframes & style frames }
  - { tool: Kling, step: Image-to-video, 5 s shots }
  - { tool: ElevenLabs, step: Voice-over & SFX }
  - { tool: DaVinci Resolve, step: Edit, grade, sound }
iterations:
  - label: v1
    note: Generic "futuristic city" — flat, no focal point, the model filled the frame with noise.
    image: /media/neon-genesis/iter-1.jpg
  - label: v2
    note: Added camera language (lens, movement) and a single subject — the seed. Composition locked in.
    image: /media/neon-genesis/iter-2.jpg
  - label: v3
    note: Moved the colour grade into the prompt and fixed the seed across shots for continuity.
    image: /media/neon-genesis/iter-3.jpg
results:
  - { value: "42", label: shots generated }
  - { value: "3", label: days from brief to cut }
  - { value: "1", label: consistent visual world }
demo: true
---

## The brief

Make a trailer-style short that feels like one coherent world, not a slideshow of pretty AI frames.

## Approach

The hard part of AI film is **continuity**. I wrote a style bible as a reusable prompt block — lens, palette, light, texture — and appended it to every shot prompt. Keyframes were locked in Midjourney first, then animated image-to-video so the motion model never had to invent the look.

## What I learned

Describing the *camera* gives you far more control than describing the *scene*.
