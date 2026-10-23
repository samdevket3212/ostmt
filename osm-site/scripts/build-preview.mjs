// Builds the whole site as one self-contained HTML file (dist/preview/index.html)
// from the same components and content the Next.js app uses.
import { build } from 'esbuild';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const alias = {
  name: 'preview-alias',
  setup(b) {
    b.onResolve({ filter: /^@\/lib\/platform$/ }, () => ({ path: path.join(root, 'src/spa/platform.tsx') }));
    b.onResolve({ filter: /^@\// }, async (args) => {
      const r = await b.resolve('./' + args.path.slice(2), { resolveDir: path.join(root, 'src'), kind: args.kind });
      return r;
    });
  },
};

const result = await build({
  entryPoints: [path.join(root, 'src/spa/main.tsx')],
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2020'],
  jsx: 'automatic',
  write: false,
  logLevel: 'error',
  define: { 'process.env.NODE_ENV': '"production"', 'process.env.NEXT_PUBLIC_SITE_URL': 'undefined' },
  plugins: [alias],
});
let js = result.outputFiles[0].text.replace(/<\/script/gi, '<\\/script');
const css = readFileSync(path.join(root, 'src/styles/tokens.css'), 'utf8') + '\n' + readFileSync(path.join(root, 'src/styles/globals.css'), 'utf8');
const html = `<title>One Stop Media</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="One Stop Media is a creative design and digital studio based in Sheridan, Wyoming.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=DM+Sans:opsz,wght@9..40,400..700&display=swap">
<style>
${css}
</style>
<div id="root"></div>
<script>
${js}
</script>
`;
mkdirSync(path.join(root, 'dist/preview'), { recursive: true });
writeFileSync(path.join(root, 'dist/preview/index.html'), html);
console.log('preview built', (html.length / 1024).toFixed(0) + ' KB');
