/**
 * postbuild: 将 dist/ 产物复制到 public/SnishaperWeb 目录
 * 复制规则：
 *   dist/index.html  → ../../public/SnishaperWeb/index.html
 *   dist/logo.png    → ../../public/SnishaperWeb/logo.png
 *   dist/assets/*    → ../../public/SnishaperWeb/assets/*（先清空再写入）
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir   = path.resolve(__dirname, '../dist');
// 从 scripts -> build -> SniShaperWeb -> vue-app -> public/SnishaperWeb
const publicDir = path.resolve(__dirname, '../../../public/SnishaperWeb');

// ── helpers ──────────────────────────────────────────────────────────────────

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  const rel = path.relative(path.resolve(__dirname, '../../../public'), dest).replace(/\\/g, '/');
  console.log(`  ✔  ${rel}`);
}

function cleanDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath  = path.join(src,  entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFile(srcPath, destPath);
    }
  }
}

// ── main ─────────────────────────────────────────────────────────────────────

console.log('\n📦 postbuild: copying dist → public/SnishaperWeb…\n');

if (!fs.existsSync(distDir)) {
  console.error('❌  dist/ not found. Did vite build succeed?');
  process.exit(1);
}

// 确保目标目录存在
fs.mkdirSync(publicDir, { recursive: true });

// 1. index.html
copyFile(
  path.join(distDir, 'index.html'),
  path.join(publicDir, 'index.html'),
);

// 2. logo.png (如果存在)
const logoSrc = path.join(distDir, 'logo.png');
if (fs.existsSync(logoSrc)) {
  copyFile(logoSrc, path.join(publicDir, 'logo.png'));
}

// 3. assets/ — clean first to remove stale hashed files
const destAssets = path.join(publicDir, 'assets');
console.log(`  🗑  clearing SnishaperWeb/assets/`);
cleanDir(destAssets);
copyDir(path.join(distDir, 'assets'), destAssets);

console.log('\n✅  done.\n');
