# SniShaper

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

### 免责声明
#### 关于 JetCPP Team 参与维护 SniShaper 项目的声明

**发布方：** JetCPP Team
**日期：** 2026年5月5日

近期，SniShaper 项目在社区中引发了一定的关注与争议。鉴于项目原开发者曾宣布退出，**JetCPP Team 正式宣布介入，目前将与 SniShaper Team 共同维护 SniShaper 项目**。

作为新加入的维护团队，JetCPP Team 特此作出以下严正说明：

##### 一、 立场与身份澄清
**JetCPP Team 与此前 SniShaper 项目发生的所有历史争议、社群摩擦及相关事件均无任何关系。**

我们介入的初衷纯粹是认可 SniShaper 项目的技术价值，希望能为社区用户提供一个稳定、持续更新的工具。我们未参与过往的任何争论，也不对过往的任何言论和行为负责。

##### 二、 维护目标与承诺
从即日起，JetCPP Team 将与 SniShaper Team 共同致力于项目的健康发展。我们的核心目标如下：
- **专注技术本身**：我们将把精力完全投入到代码的重构、优化与核心功能的稳定性上，摆脱历史包袱。
- **建立良性社区**：我们倡导理性、友好的技术交流环境，拒绝任何情绪化的攻击与无意义的争端。
- **坚持透明开发**：项目未来的所有更新与规划，都将基于公开、透明的原则进行。

我们呼吁广大社区用户保持理性，共同维护良好的开源交流氛围。SniShaper 的未来将属于所有热爱技术的贡献者。

**JetCPP Team**

### 补充声明：致社区与开发者的一封信

作为新加入的维护方，JetCPP Team 最后想对社区和所有关注本项目的开发者说几句心里话。

开源世界的魅力，在于技术的共享与思想的碰撞，而非无休止的争端与消耗。过去发生的一切，无论对错，都已属于过去。我们真诚地希望各位能放下对过往恩怨的纠结，停止在情绪与口舌上的无谓消耗。

技术的进步需要纯粹的热爱与专注。我们呼吁大家将宝贵的精力重新投入到代码与创新之中，用优秀的作品说话，共同营造一个更加健康、积极、专注于技术本身的开源环境。

让我们翻过这一页，好好开发，保持对技术的热爱，用实力与行动去赢得尊重。

**JetCPP Team**
---
代码重塑世界 · 创新驱动未来
---

## English

### 概况

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

### Disclaimer

#### Statement on JetCPP Team’s participation in maintaining the SniShaper project

**Published by:** JetCPP Team

**Date:** May 5, 2026

Recently, the SniShaper project has caused a certain amount of attention and controversy in the community. In view of the fact that the original developer of the project announced his withdrawal, **JetCPP Team officially announced its intervention and will currently maintain the SniShaper project together with the SniShaper Team**.

As a newly joined maintenance team, JetCPP Team hereby makes the following solemn statement:

##### 1. Clarification of position and identity

**JetCPP Team has nothing to do with any historical controversies, community frictions and related incidents that occurred with the previous SniShaper project. **

The original intention of our intervention is purely to recognize the technical value of the SniShaper project, and hope to provide a stable and continuously updated tool for community users. We have not participated in any past controversies and are not responsible for any past remarks and actions.

##### 2. Maintain goals and commitments

From now on, the JetCPP Team will work with the SniShaper Team on the healthy development of the project. Our core goals are as follows:

- **Focus on the technology itself**: We will devote all our energy to code reconstruction, optimization and the stability of core functions, and get rid of historical baggage.

- **Establish a benign community**: We advocate a rational and friendly technical communication environment and reject any emotional attacks and meaningless disputes.

- **Adhere to transparent development**: All future updates and planning of the project will be based on the principles of openness and transparency.

We call on the majority of community users to remain rational and jointly maintain a good open source communication atmosphere. The future of SniShaper will belong to all contributors who love technology.

**JetCPP Team**


### Supplemental Statement: A letter to the community and developers

As a new maintainer, the JetCPP Team would like to say a few words to the community and all the developers who are interested in this project.

The charm of the open source world lies in the sharing of technologies and the collision of ideas, rather than endless disputes and consumption. Everything that happened in the past, whether right or wrong, is already in the past. We sincerely hope that you will let go of your entanglement in past grievances and stop unnecessary consumption of emotions and words.

Technological advancements require pure love and focus. We call on everyone to reinvest their valuable energy into code and innovation, and to speak with great work to create a healthier, more active, and focused open source environment for the technology itself.

Let's turn the page, develop well, maintain our love for technology, and win respect with strength and action.

**JetCPP Team**
---
Code Reinvents the World · Innovation drives the future
---
