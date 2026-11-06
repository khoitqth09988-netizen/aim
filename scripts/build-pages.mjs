// Produces a self-contained GitHub Pages build at the repository root.
import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';

await mkdir('assets', { recursive: true });
await build({
  entryPoints: ['scripts/static-entry.tsx'],
  outfile: 'assets/game.js',
  bundle: true,
  minify: true,
  target: ['es2020'],
  format: 'iife',
  jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"production"', 'process.env.NEXT_PUBLIC_STATIC_PAGES': '"true"' },
});
const css = (await readFile('src/app/globals.css', 'utf8')).replaceAll("url('/fonts/", "url('../public/fonts/");
await writeFile('assets/game.css', css);
const js = await readFile('assets/game.js');
const version = createHash('sha256').update(js).update(css).digest('hex').slice(0, 12);
const sw = (await readFile('public/sw.js', 'utf8')).replace("const CACHE_VERSION = 'v2';", `const CACHE_VERSION = '${version}';`);
await writeFile('sw.js', sw);
await writeFile('.nojekyll', '');
await writeFile('index.html', `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#080e12">
  <meta name="description" content="Đấu súng góc nhìn thứ nhất với bot, không cần đăng nhập.">
  <title>AIMFORGE — Khu huấn luyện chiến thuật</title>
  <link rel="stylesheet" href="./assets/game.css?v=${version}">
</head>
<body>
  <div id="root"></div>
  <script src="./assets/game.js?v=${version}" defer></script>
</body>
</html>
`);
console.log(`GitHub Pages build ready (version ${version}).`);
