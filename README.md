# Kalybek Mergenov — AI Creator & Prompt Engineer portfolio

Сайт-портфолио: тёмный кинематографичный дизайн, шоурил на первом экране, сетка работ с живыми превью при
наведении, страница кейса в формате **Prompt → Pipeline → Iterations → Result**, библиотека промптов.

Стек: [Astro](https://astro.build) (статический сайт) · видео через Bunny Stream / mp4 / YouTube / Vimeo ·
деплой на Vercel.

## Запуск локально

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # готовый сайт в dist/
```

## Что поменять в первую очередь

1. **`src/site.config.ts`**: email, соцсети, CV, список инструментов, шоурил.
2. **Демо-работы.** Файлы в `src/content/work/` с `demo: true` — заглушки с абстрактными видео.
   Удали их и добавь свои работы (у них появится бейдж *Demo*, пока не удалишь).
3. **Фото** для страницы About: положи `public/me.jpg` и укажи путь в `src/pages/about.astro` (`const photo`).
4. **CV**: положи `public/cv.pdf` и в конфиге поставь `cv: '/cv.pdf'`.

## Как добавить новую работу

### 1. Подготовить видео

```bash
./scripts/prepare-video.sh ~/Videos/my_film.mp4 my-film 12 15
#                          исходник              slug   начало превью (с)  кадр для обложки (с)
```

Скрипт (нужен `ffmpeg`) создаст:

| Файл | Где | Что это |
|---|---|---|
| `poster.jpg` | `public/media/my-film/` | обложка, грузится мгновенно |
| `preview.mp4` | `public/media/my-film/` | 6-секундный беззвучный луп для наведения (~1–2 МБ) |
| `full.mp4` | `media-out/my-film/` | полное видео, сжатое для веба (300 МБ → обычно 30–80 МБ). **Не попадает в git** |

### 2. Залить полное видео (200–300+ МБ)

Большие видео **не храним в git** (лимит GitHub 100 МБ на файл). Варианты:

- **Bunny Stream (рекомендую, ~$1–5/мес).** Создай Stream Library на [bunny.net](https://bunny.net),
  заполни `.env` по образцу `.env.example` и запусти:
  ```bash
  set -a; source .env; set +a
  ./scripts/upload-bunny.sh media-out/my-film/full.mp4 "My Film"
  ```
  Bunny сам нарежет видео на качества 240p–4K и будет отдавать с адаптацией под скорость интернета.
  Можно заливать и оригинал без сжатия. Скрипт выведет ссылку `…/playlist.m3u8`.
- **YouTube (unlisted) или Vimeo:** просто вставь ссылку на видео в `video.src`.
- **Cloudflare R2 или любой CDN:** залей `full.mp4` и вставь прямую ссылку.

### 3. Создать файл работы

`src/content/work/my-film.md` (имя файла = адрес страницы `/work/my-film`):

```md
---
title: My Film
summary: Одна фраза о работе — видна в сетке и в превью ссылки.
year: 2026
category: Video          # Video | Image | Brand & Ads | Characters | Prompt Engineering | Automation
tools: [Midjourney, Kling, DaVinci Resolve]
featured: true           # показать на главной
order: 1                 # порядок (меньше = выше)
size: large              # normal | wide | tall | large — размер карточки в сетке
cover: /media/my-film/poster.jpg
preview: /media/my-film/preview.mp4
video:
  src: https://vz-xxxx.b-cdn.net/<guid>/playlist.m3u8   # или YouTube/Vimeo/mp4
prompt: |
  Ключевой промпт…
params: --ar 16:9 --style raw
pipeline:
  - { tool: Midjourney, step: Keyframes }
  - { tool: Kling, step: Image-to-video }
iterations:
  - { label: v1, note: Что было не так, image: /media/my-film/v1.jpg }
  - { label: v2, note: Что поменял в промпте }
results:
  - { value: "3 days", label: from brief to final }
---

Свободный текст кейса в Markdown: задача, подход, что узнал.
```

Затем `git push`, и Vercel пересоберёт сайт примерно за минуту.

Промпты для страницы `/prompts` лежат в `src/content/prompts/`.

## Деплой на Vercel

1. [vercel.com/new](https://vercel.com/new) → Import Git Repository → `mqalybek/portfolio`.
2. Framework определится сам (Astro). Жми **Deploy**.
3. По желанию: Settings → Domains → свой домен.

Каждый `git push` в основную ветку обновляет сайт; для других веток Vercel делает превью-ссылки.

## Структура

```
src/
  site.config.ts        ← личные данные, соцсети, инструменты
  content/work/*.md     ← работы
  content/prompts/*.md  ← библиотека промптов
  pages/                ← страницы: /, /work, /work/[slug], /prompts, /about
  components/           ← карточка, видеоплеер, блок промпта, контакты
  styles/global.css     ← весь дизайн (цвета — в :root вверху файла)
public/media/           ← обложки и короткие превью
scripts/                ← prepare-video.sh, upload-bunny.sh
```
