#!/usr/bin/env bash
# Prepare a video for the portfolio.
#
#   ./scripts/prepare-video.sh <input-video> <slug> [preview-start-sec] [poster-sec]
#
# Produces in public/media/<slug>/:
#   poster.jpg   – still frame used as the cover (loads instantly)
#   preview.mp4  – 6-second silent loop for hover / hero previews (~1–2 MB)
# and in media-out/<slug>/ (NOT committed to git – upload it to Bunny Stream or R2):
#   full.mp4     – web-optimised full video (H.264, ≤1080p, fast start)
#
# A 300 MB screen-recording or AI render usually comes out at 30–80 MB.
set -euo pipefail

if [[ $# -lt 2 ]]; then
  sed -n '2,13p' "$0" | sed 's/^# \{0,1\}//'
  exit 1
fi

IN="$1"
SLUG="$2"
PREVIEW_START="${3:-0}"
POSTER_AT="${4:-$PREVIEW_START}"

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PUB="$ROOT/public/media/$SLUG"
OUT="$ROOT/media-out/$SLUG"
mkdir -p "$PUB" "$OUT"

echo "▸ Poster…"
ffmpeg -hide_banner -loglevel error -y -ss "$POSTER_AT" -i "$IN" -frames:v 1 \
  -vf "scale='min(1600,iw)':-2" -q:v 3 "$PUB/poster.jpg"

echo "▸ Preview loop (6 s, silent)…"
ffmpeg -hide_banner -loglevel error -y -ss "$PREVIEW_START" -t 6 -i "$IN" -an \
  -vf "scale='min(960,iw)':-2,fps=30" -c:v libx264 -preset slow -crf 28 \
  -pix_fmt yuv420p -movflags +faststart "$PUB/preview.mp4"

echo "▸ Full video (H.264, ≤1080p)… this can take a while"
ffmpeg -hide_banner -loglevel error -stats -y -i "$IN" \
  -vf "scale='min(1920,iw)':-2" -c:v libx264 -preset slow -crf 22 \
  -pix_fmt yuv420p -c:a aac -b:a 160k -movflags +faststart "$OUT/full.mp4"

size() { du -h "$1" | cut -f1; }
echo
echo "✔ Done"
echo "  original     $(size "$IN")"
echo "  full.mp4     $(size "$OUT/full.mp4")   → upload: ./scripts/upload-bunny.sh $OUT/full.mp4 \"$SLUG\""
echo "  preview.mp4  $(size "$PUB/preview.mp4")"
echo "  poster.jpg   $(size "$PUB/poster.jpg")"
echo
echo "Add to src/content/work/$SLUG.md:"
echo "  cover: /media/$SLUG/poster.jpg"
echo "  preview: /media/$SLUG/preview.mp4"
