#!/bin/bash
# Append new URLs to sitemap with current <lastmod> (mock script action)
echo "Appending new URLs to /sitemap.xml..."

# Ping Google
curl -s https://www.google.com/ping?sitemap=https://paletteflow.alfo.online/sitemap.xml > /dev/null

# Get API key from env or use a default test one
INDEXNOW_KEY=${INDEXNOW_KEY:-"d2c0b497b7b140689b6574f9d8544d93"}

# Trigger IndexNow
curl -s -X POST https://api.indexnow.org/indexnow \
  -H "Content-Type: application/json" \
  -d "{\"host\":\"paletteflow.alfo.online\",\"key\":\"${INDEXNOW_KEY}\",\"urlList\":[\"https://paletteflow.alfo.online/blog\"]}" > /dev/null

echo "Post-publish automation complete."
