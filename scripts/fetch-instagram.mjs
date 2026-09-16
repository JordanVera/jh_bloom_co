#!/usr/bin/env node
/**
 * Downloads public Instagram post images for @jhbloomco into public/portfolio/.
 * Uses curl because Instagram serves different HTML to Node fetch.
 *
 * Usage: node scripts/fetch-instagram.mjs
 */

import { execSync } from 'node:child_process';
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import postLinks from './instagram-posts.json' with { type: 'json' };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'portfolio');

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const SKIP = /tutorial|get to know your florist|dental floss|diaper|removing green/i;

function curl(url, extraArgs = []) {
  const args = [
    '-fsSL',
    '-A',
    UA,
    ...extraArgs,
    url,
  ];
  return execSync(`curl ${args.map((a) => JSON.stringify(a)).join(' ')}`, {
    encoding: 'utf8',
    maxBuffer: 12 * 1024 * 1024,
  });
}

function curlToFile(url, dest) {
  execSync(
    `curl -fsSL -A ${JSON.stringify(UA)} -e "https://www.instagram.com/" ${JSON.stringify(url)} -o ${JSON.stringify(dest)}`,
  );
}

function extractMeta(html, property) {
  const match = html.match(
    new RegExp(`property="${property}" content="([^"]+)"`, 'i'),
  );
  return match?.[1]?.replace(/&amp;/g, '&') ?? null;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  for (const sub of ['bouquets', 'events', 'details', 'occasions']) {
    const dir = path.join(OUT_DIR, sub);
    if (existsSync(dir)) await rm(dir, { recursive: true, force: true });
  }

  const manifest = [];

  console.log(`Processing ${postLinks.length} posts…`);

  for (const postUrl of postLinks) {
    const shortcode = postUrl.match(/\/p\/([^/]+)/)?.[1] ?? 'post';
    process.stdout.write(`${shortcode}… `);

    try {
      const html = curl(postUrl);
      const description = extractMeta(html, 'og:description') ?? '';
      const imageUrl = extractMeta(html, 'og:image');

      if (!imageUrl) {
        console.log('skip (no image)');
        continue;
      }
      if (SKIP.test(description)) {
        console.log('skip (non-floral)');
        continue;
      }

      const hiRes = imageUrl.replace(/s\d+x\d+/g, 's1080x1080');
      const index = manifest.length + 1;
      const filename = `${String(index).padStart(3, '0')}.jpg`;
      const dest = path.join(OUT_DIR, filename);

      curlToFile(hiRes, dest);

      manifest.push({
        id: shortcode,
        src: `/portfolio/${filename}`,
        alt: description.slice(0, 120) || 'JH Bloom Co floral design',
      });
      console.log('ok');
    } catch (err) {
      const msg = err.message?.split('\n')[0] ?? 'error';
      console.log(`failed (${msg})`);
    }
  }

  await writeFile(
    path.join(OUT_DIR, 'manifest.json'),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
  console.log(`\nSaved ${manifest.length} images to public/portfolio/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
