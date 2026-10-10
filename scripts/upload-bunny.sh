#!/usr/bin/env bash
# Upload a video to Bunny Stream and print the URL to paste into a work's `video.src`.
#
#   ./scripts/upload-bunny.sh <video-file> "<title>"
#
# Needs three values from the Bunny dashboard (Stream → your library → API):
#   export BUNNY_LIBRARY_ID=123456
#   export BUNNY_API_KEY=xxxxxxxx-xxxx-...        # library API key, keep it secret
#   export BUNNY_CDN_HOST=vz-abc123-456.b-cdn.net # "CDN Hostname"
# Tip: put them in a local .env file (git-ignored) and run `set -a; source .env; set +a`.
#
# Bunny accepts the original file (even multi-GB) and transcodes it to 240p–4K
# adaptive streaming itself, so you can also upload the raw 300 MB file directly.
set -euo pipefail

if [[ $# -lt 2 ]]; then
  sed -n '2,13p' "$0" | sed 's/^# \{0,1\}//'
  exit 1
fi
: "${BUNNY_LIBRARY_ID:?set BUNNY_LIBRARY_ID}"
: "${BUNNY_API_KEY:?set BUNNY_API_KEY}"
: "${BUNNY_CDN_HOST:?set BUNNY_CDN_HOST}"

FILE="$1"
TITLE="$2"
API="https://video.bunnycdn.com/library/$BUNNY_LIBRARY_ID/videos"

echo "▸ Creating video entry…"
GUID=$(curl -fsS -X POST "$API" \
  -H "AccessKey: $BUNNY_API_KEY" -H "Content-Type: application/json" \
  --data "$(printf '{"title":%s}' "$(printf '%s' "$TITLE" | python3 -c 'import json,sys;print(json.dumps(sys.stdin.read()))')")" \
  | python3 -c 'import json,sys;print(json.load(sys.stdin)["guid"])')

echo "▸ Uploading $(du -h "$FILE" | cut -f1)…"
curl -fS --progress-bar -X PUT "$API/$GUID" \
  -H "AccessKey: $BUNNY_API_KEY" -H "Content-Type: application/octet-stream" \
  --data-binary @"$FILE" -o /dev/null

echo
echo "✔ Uploaded. Bunny is transcoding it now (a few minutes)."
echo "Paste into the work's frontmatter:"
echo "  video:"
echo "    src: https://$BUNNY_CDN_HOST/$GUID/playlist.m3u8"
