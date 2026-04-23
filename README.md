# SniShaper — Landing Page

> 官网落地页 · Official Website

---

## 中文

### 项目简介

本仓库是 **SniShaper** 的官方落地页源码。SniShaper 是一款运行于 Windows 平台的网络代理工具，通过 SNI 分流与流量整形技术，帮助用户绕过基于 SNI 的封锁，实现更自由、更稳定的网络访问。

落地页采用 **Vanilla TypeScript + Vite + Tailwind CSS** 构建，设计风格为深灰底 × 暖橙强调色，追求极简、克制、带物理阻尼感的交互体验。

### 功能亮点

- 响应式布局，完整适配移动端
- 功能特性卡片自动来回滚动（rAF + 弹簧阻尼）
- 鼠标悬停暂停滚动
- Intersection Observer 驱动的入场动画
- 移动端抽屉菜单
- 一键直链下载

### 目录结构

```
SniShaperWeb/
├── build/               # 源码工程目录
│   ├── src/
│   │   ├── main.ts      # 页面主逻辑（HTML 模板 + JS 交互）
│   │   ├── index.css    # 全局基础样式
│   │   └── style.css    # Tailwind 扩展 & 自定义样式
│   ├── scripts/
│   │   └── copy-dist.mjs  # postbuild 自动复制脚本
│   ├── index.html       # Vite 入口模板
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── package.json
├── assets/              # 构建产物（CSS/JS，自动生成）
├── index.html           # 构建产物（自动生成，勿手动编辑）
└── logo.png
```

### 开发环境要求

| 工具 | 版本要求 |
|------|----------|
| Node.js | ≥ 18 |
| npm | ≥ 9 |

### 快速开始

```bash
# 1. 进入源码目录
cd build

# 2. 安装依赖
npm install

# 3. 启动开发服务器（热更新）
npm run dev
# 默认监听 http://localhost:5000
```

### 构建与部署

```bash
cd build

# 构建生产版本
# 构建完成后会自动执行 postbuild，将产物复制到网站根目录
npm run build
```

`postbuild` 钩子（`scripts/copy-dist.mjs`）做了以下事情：

1. 将 `dist/index.html` 复制到根目录 `../index.html`
2. 清空 `../assets/`，再将 `dist/assets/` 全量复制过去（防止旧 hash 文件堆积）

构建完成后，网站根目录下的 `index.html` 和 `assets/` 即为可直接部署的静态文件。

### 本地预览构建产物

```bash
cd build
npm run preview
# 默认监听 http://localhost:4173
```

### 注意事项

- `index.html` 和 `assets/` 是自动生成的产物，**请勿手动编辑**
- 所有页面修改均在 `build/src/main.ts` 中进行
- 样式修改在 `build/src/style.css` 或 `build/src/index.css` 中进行

---

## English

### Overview

This repository contains the source code for the **SniShaper** official landing page. SniShaper is a Windows-native network proxy tool that uses SNI-based traffic shaping to help users bypass SNI-based censorship and achieve freer, more stable internet access.

The landing page is built with **Vanilla TypeScript + Vite + Tailwind CSS**, featuring a dark-gray × warm-orange design language with minimal, physics-inspired interactions.

### Features

- Fully responsive layout with mobile support
- Feature card auto-scroll with bounce-back animation (rAF + spring damping)
- Scroll pauses on mouse hover
- Intersection Observer–driven entrance animations
- Mobile drawer navigation
- Direct download button

### Directory Structure

```
SniShaperWeb/
├── build/               # Source project
│   ├── src/
│   │   ├── main.ts      # Page logic (HTML template + JS interactions)
│   │   ├── index.css    # Global base styles
│   │   └── style.css    # Tailwind extensions & custom styles
│   ├── scripts/
│   │   └── copy-dist.mjs  # postbuild auto-copy script
│   ├── index.html       # Vite entry template
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── package.json
├── assets/              # Build output (CSS/JS, auto-generated)
├── index.html           # Build output (auto-generated, do not edit manually)
└── logo.png
```

### Requirements

| Tool | Version |
|------|---------|
| Node.js | ≥ 18 |
| npm | ≥ 9 |

### Getting Started

```bash
# 1. Enter the source directory
cd build

# 2. Install dependencies
npm install

# 3. Start dev server with HMR
npm run dev
# Listens on http://localhost:5000 by default
```

### Build & Deploy

```bash
cd build

# Build for production
# After the build, postbuild automatically copies the output to the website root
npm run build
```

The `postbuild` hook (`scripts/copy-dist.mjs`) does the following:

1. Copies `dist/index.html` to `../index.html`
2. Clears `../assets/`, then copies all of `dist/assets/` into it (prevents stale hashed files from accumulating)

After the build, `index.html` and `assets/` in the repo root are ready to deploy as static files.

### Preview Build Output Locally

```bash
cd build
npm run preview
# Listens on http://localhost:4173 by default
```

### Notes

- `index.html` and `assets/` are auto-generated — **do not edit them manually**
- All page changes should be made in `build/src/main.ts`
- Style changes go in `build/src/style.css` or `build/src/index.css`

---

## License

MIT — see [LICENSE](./LICENSE)
