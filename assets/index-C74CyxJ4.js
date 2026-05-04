(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function u(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(i){if(i.ep)return;i.ep=!0;const n=u(i);fetch(i.href,n)}})();const k={nav_features:"功能特性",nav_tech:"核心技术",nav_faq:"常见问题",nav_download:"下载",hero_badge:"v1.26 Windows 原生应用",hero_desc:"专为复杂网络环境设计的本地代理工具。TLS 分片、QUIC 重建、ECH 注入 — 让你的流量在封锁网络中持续可用。",hero_btn_download:"立即下载",hero_btn_tech:"了解技术原理",hero_status:"代理状态",hero_running:"运行中",hero_upload:"上行",hero_download:"下行",hero_gui:"图形界面",adv_title:"为什么选择 SniShaper",adv_subtitle:"专为 Windows 原生打造，无需额外运行环境，开箱即用。",adv1_title:"无需外部代理节点",adv1_desc:"直接利用 Cloudflare 全球 CDN 网络作为出口，无节点订阅费用，无中转服务器运维负担。",adv2_title:"多协议协同，覆盖面广",adv2_desc:"TLS-RF、ECH、QUIC 多种模式灵活切换，绑定不同策略应对不同封锁场景，兼容性极强。",adv3_title:"原生图形界面，真正易用",adv3_desc:"基于 Wails + React 构建的原生 Windows 应用，视觉清晰，操作直观，不再需要编辑配置文件。",tech_title:"三大核心技术",tech_subtitle:"三层流量混淆技术协同工作，构筑高韧性抗封锁方案。",tech1_name:"TLS-RF",tech1_desc:"TLS 分片技术将 Client Hello 拆分为多个 TLS 记录分片传输。DPI 设备通常只检查第一个分片，真实 SNI 得以隐藏。",tech1_tag:"纯客户端实现 · 无需服务器配合",tech2_name:"QUIC 重建",tech2_desc:"基于 UDP 的 QUIC 协议天然规避 TCP 特征检测。我们在本地重建 QUIC 连接，将真实流量封装其中。",tech2_tag:"基于 quic-go 库 · UDP 传输",tech3_name:"ECH 注入",tech3_desc:"加密 Client Hello 将原本明文的部分加密，连 TLS 握手的第一步都无法被窥探。兼容 Cloudflare 等主流 ECH 基础设施。",tech3_tag:"TLS 1.3 标准 · ECH 协议",tech_mode1_title:"Server 中转模式",tech_mode1_desc:"在 Cloudflare Workers 或境外 VPS 部署自有中转服务器，极端封锁环境下的终极方案。",tech_mode2_title:"混合模式",tech_mode2_desc:"多种技术组合使用，例如 TLS-RF + Server 中转，最大化封锁环境下的可用性。",feat_title:"不只是代理工具",feat_subtitle:"为复杂网络环境中的实际使用场景打造。",feat1_title:"智能分流",feat1_desc:"内置 GFWList 规则集，数万个被封锁域名开箱即通。",feat2_title:"CF 优选 IP",feat2_desc:"自动从 Cloudflare 全球节点池中挑选延迟最低的节点。",feat3_title:"DNS 上游",feat3_desc:"支持配置 DNS 上游服务器，配合域名绕过功能，智能解析 DNS 请求。",feat4_title:"TUN 模式",feat4_desc:"虚拟网卡实现全局流量代理，所有应用无需配置即可使用。",feat5_title:"JSON 规则",feat5_desc:"支持域名、IP CIDR、策略组，编辑 JSON 即时生效，无需重启。",feat6_title:"证书管理",feat6_desc:"内置 MITM 代理 CA 证书安装向导，一键完成。",feat7_title:"延迟测试",feat7_desc:"内置节点测速，智能选择最优路径。",feat8_title:"多平台支持",feat8_desc:"支持 Discord、Twitch 和 XChat 等平台的智能分流和代理规则。",faq_title:"常见问题",faq_subtitle:"使用 SniShaper 过程中的常见疑问解答",faq1_q:"为什么要安装根证书？",faq1_a:"SniShaper 通过 MITM（中间人代理）技术实现流量拦截和分析，以便对特定域名进行智能分流。MITM 代理需要安装自定义 CA 根证书来解密 HTTPS 流量。安装后，所有由 SniShaper 签发的证书都会被系统信任。",faq2_q:"TLS-RF 和 ECH 模式有什么区别？",faq2_a1:"（TLS 分片）通过将 Client Hello 拆分为多个 TLS 记录分片传输，适用于大多数场景，无需服务器特殊配置。",faq2_a2:"（加密 Client Hello）将原本明文的 TLS 扩展部分完全加密，安全性更高，但需要目标服务器支持 ECH（如 Cloudflare CDN）。",faq3_q:"如何选择合适的代理模式？",faq3_l1:"推荐作为默认选项，兼容性好",faq3_l2:"最高防护级别，适合 Cloudflare 站点",faq3_l3:"基于 UDP，规避 TCP 特征检测",faq3_l4:"配合自建中转服务器使用",faq4_q:"TUN 模式和系统代理有什么区别？",faq4_a1:"只影响支持代理设置的应用程序（如浏览器），需要应用主动使用代理配置。",faq4_a2:"通过虚拟网卡接管全部流量，实现全局代理，无需应用程序额外配置。适合游戏、桌面应用等不支持代理协议的场景。",faq5_q:"Cloudflare 优选 IP 是什么原理？",faq5_a:"Cloudflare 拥有全球数百万个 IP 节点。通过 API 获取 IP 池后，SniShaper 会自动对每个 IP 进行延迟测试，挑选出延迟最低的节点使用。这可以显著提升访问速度和稳定性。",faq6_q:"SniShaper 是否开源免费？",faq6_a:"是的，SniShaper 采用 MIT 开源许可证，完全免费使用。源代码托管在 GitHub 上，接受社区贡献。你可以自由查看、修改和分发代码。",qs_title:"快速上手指南",qs_subtitle:"三步开始使用 SniShaper",qs_step1_title:"下载安装",qs_step1_desc:"从网站下载最新版本的 SniShaper，解压后双击运行 snishaper.exe。",qs_step1_tag:"Windows 10/11 x64",qs_step2_title:"安装证书",qs_step2_desc:"首次运行后，进入证书管理页面，点击「安装根证书」，按系统提示完成安装。",qs_step2_tip:"Windows 安全提示确认",qs_step3_title:"启动代理",qs_step3_desc:"选择合适的代理模式，点击「开启代理」。可选择开启系统代理或 TUN 模式。",qs_tips_title:"小贴士",qs_tip1:"首次使用建议选择 TLS-RF 模式，兼容性最好",qs_tip2:"开启系统代理后浏览器即可使用，无需单独配置",qs_tip3:"游戏或桌面应用建议开启 TUN 模式实现全局代理",qs_tip4:"勾选开机自启和最小化到托盘获得最佳体验",stack_title:"现代技术栈",stack_desc:"Wails v3 带来原生 Windows 桌面体验。Go 后端处理核心逻辑 — TLS 混淆、QUIC 重建、规则匹配。React/TypeScript 前端提供响应式图形界面。",stack_go:"高性能代理核心",stack_react:"TypeScript + Vite 构建 UI",stack_wails:"原生 Windows 桌面应用",stack_mit:"开源免费",arch_local:"本地应用",arch_client:"客户端",arch_server:"Cloudflare / VPS",arch_target:"目标网站",arch_success:"畅通",cl_title:"版本更新日志",cl_subtitle:"持续迭代，不断优化体验",cl_latest:"最新发行版",cl_more:"更多版本见更新日志",cl126_title:"DNS 上游 & 平台支持增强",cl126_l1:"支持 DNS 上游服务器配置，配合域名绕过功能",cl126_l2:"QUIC 和 ECH 模式组合使用支持",cl126_l3:"集成 Meta 平台专属 ECH 支持",cl126_l4:"界面全面支持英文语言",cl126_l5:"移除内置 WARP 支持",cl126_l6:"修复大量已知问题，解决配置不一致",cl126_l7:"升级部分依赖，降低轮询频率优化性能",cl126_l8:"规则编辑页面智能显示，根据当前模式只显示相关选项",cl126_l9:"实现 Discord、Twitch 和 XChat 支持",cl125_title:"增加 TUN 模式支持",cl125_l1:"增加 TUN 模式支持",cl125_l2:"增加一批网站适配",cl125_l3:"前后端进一步分离",cl124_title:"暗色模式 UI 修复 & 配置分离",cl124_l1:"修复暗黑模式 UI 显示问题",cl124_l2:"规则配置与用户配置解耦，需重新调整设置",cl124_l3:"新增开机自启选项",cl124_l4:"修复部分已知问题，提升稳定性",cl122_title:"实验性 QUIC 直连 & 完整 DoH 支持",cl122_l1:"增加实验性 QUIC 直连支持，基于 quic-go 自带分片特性",cl122_l2:"完整 DoH 解析支持，可指定 IPv4 / IPv6",cl121_title:"外挂证书验证 & 规则完善",cl121_l1:"增加外挂证书验证逻辑，提升域前置的安全性",cl121_l2:"完善部分规则",cl11x_title:"里程碑版本：最稳定最强大",cl11x_l1:"修复 MITM 模式 HTTP 网页问题，增加自动跳转 HTTPS",cl11x_l2:"引入 TLS 分片模式，可实用性用于部分网站",cl11x_l3:"修复 Google 系配置，同时支持 Google、YouTube 和 Gemini",cl11x_l4:"引入 WARP 作为可选分流，部分网站如 ChatGPT 恢复访问",cl11x_l5:"ECH 逻辑与 Cloudflare 解耦，后续可接入其他网站 ECH 支持",cl11x_l6:"优化部分页面 UI 显示",cl10_title:"首个正式版本",cl10_l1:"实现 Cloudflare ECH、并行拨号、ECDSA 证书及 UI",dl_title:"准备掌控流量了吗？",dl_desc:"下载 SniShaper Windows 版本。开源免费，无需注册。",dl_btn:"下载 Windows x64 (v1.26)",dl_win:"Windows 10/11",dl_gui:"图形界面",dl_open:"开源项目",footer_brand:"SniShaper",footer_desc:"一款专为复杂网络环境设计的本地代理工具。通过 TLS 分片、QUIC 重建、ECH 注入等技术，让你的流量在封锁网络中持续可用。",footer_res:"资源",footer_quickstart:"快速上手",footer_changelog:"更新日志",footer_wiki:"使用文档 Wiki",footer_community:"社区",footer_license:"MIT License",footer_stack:"Go + React + Wails",footer_legal:"SniShaper 专为恢复网络访问自由而设计。请遵守当地法律法规，合理使用。",footer_credit:"合作者 | 贡献者 | 网页开发者: dongle",footer_notice:"原作者因某群体的无下限污蔑、信息曝光和圈层共振，已退出开发工作。仓库已移交给一位社区开发者继续维护。",mob_features:"功能特性",mob_tech:"核心技术",mob_faq:"常见问题",mob_download:"下载",modal_title:"选择下载方式",modal_zoho:"网盘下载",modal_zoho_desc:"通过 Zoho WorkDrive 网盘下载",modal_github:"GitHub 下载",modal_github_desc:"从 GitHub Releases 页面下载",modal_direct:"直接下载",modal_direct_desc:"使用直链下载（可能不稳定）",modal_close:"关闭"},C={nav_features:"Features",nav_tech:"Core Tech",nav_faq:"FAQ",nav_download:"Download",hero_badge:"v1.26 Windows Native App",hero_desc:"A local proxy tool purpose-built for complex network environments. TLS fragmentation, QUIC reconstruction, ECH injection — keep your traffic accessible even in heavily restricted networks.",hero_btn_download:"Download Now",hero_btn_tech:"How It Works",hero_status:"Proxy Status",hero_running:"Running",hero_upload:"Upload",hero_download:"Download",hero_gui:"GUI",adv_title:"Why SniShaper",adv_subtitle:"Built native for Windows. No extra runtimes needed — works out of the box.",adv1_title:"No External Proxy Nodes Required",adv1_desc:"Leverages Cloudflare's global CDN network directly as the exit point. No subscription fees, no server maintenance burden.",adv2_title:"Multi-Protocol Coverage",adv2_desc:"TLS-RF, ECH, QUIC modes switching flexibly to match different censorship scenarios with excellent compatibility.",adv3_title:"Native GUI — Truly Easy to Use",adv3_desc:"Built with Wails + React as a native Windows application. Clean visuals, intuitive operation — no config file editing required.",tech_title:"Three Core Technologies",tech_subtitle:"Three-layer traffic obfuscation working in concert to build a highly resilient anti-censorship solution.",tech1_name:"TLS-RF",tech1_desc:"TLS Fragmentation splits the Client Hello into multiple TLS record fragments. DPI devices typically only inspect the first fragment, hiding the real SNI.",tech1_tag:"Client-only · No server required",tech2_name:"QUIC Rebuild",tech2_desc:"UDP-based QUIC naturally evades TCP fingerprint detection. We rebuild QUIC connections locally and encapsulate real traffic inside.",tech2_tag:"Based on quic-go · UDP transport",tech3_name:"ECH Injection",tech3_desc:"Encrypted Client Hello encrypts what would otherwise be plaintext TLS extensions. Even the first step of the TLS handshake becomes invisible. Compatible with Cloudflare and other major ECH providers.",tech3_tag:"TLS 1.3 standard · ECH protocol",tech_mode1_title:"Server Relay Mode",tech_mode1_desc:"Deploy your own relay server on Cloudflare Workers or an overseas VPS — the ultimate solution for extreme censorship environments.",tech_mode2_title:"Hybrid Mode",tech_mode2_desc:"Combine multiple technologies, e.g. TLS-RF + Server relay, maximizing availability in heavily restricted networks.",feat_title:"More Than a Proxy Tool",feat_subtitle:"Built for real-world usage in complex network environments.",feat1_title:"Smart Routing",feat1_desc:"Built-in GFWList rule set — tens of thousands of blocked domains work out of the box.",feat2_title:"CF IP Picker",feat2_desc:"Automatically selects the lowest-latency node from Cloudflare's global IP pool.",feat3_title:"DNS Upstreams",feat3_desc:"Configure DNS upstream servers with domain bypass support for intelligent DNS resolution.",feat4_title:"TUN Mode",feat4_desc:"Virtual network adapter proxies all traffic system-wide — no per-app configuration needed.",feat5_title:"JSON Rules",feat5_desc:"Supports domains, IP CIDR, and policy groups. Edit JSON and changes take effect instantly — no restart required.",feat6_title:"Certificate Manager",feat6_desc:"Built-in MITM proxy CA certificate installation wizard — one click to complete setup.",feat7_title:"Latency Test",feat7_desc:"Built-in node speed testing with intelligent optimal path selection.",feat8_title:"Platform Support",feat8_desc:"Smart routing and proxy rules for Discord, Twitch, and XChat platforms.",faq_title:"FAQ",faq_subtitle:"Common questions and answers about using SniShaper",faq1_q:"Why do I need to install a root certificate?",faq1_a:"SniShaper uses MITM (Man-in-the-Middle) proxy technology to intercept and analyze traffic for intelligent domain routing. MITM proxies require installing a custom CA root certificate to decrypt HTTPS traffic. After installation, all certificates issued by SniShaper will be trusted by your system.",faq2_q:"What's the difference between TLS-RF and ECH modes?",faq2_a1:"(TLS Fragmentation) splits the Client Hello into multiple TLS record fragments. Works in most scenarios without special server configuration.",faq2_a2:"(Encrypted Client Hello) fully encrypts the plaintext TLS extensions. Higher security, but requires the target server to support ECH (e.g., Cloudflare CDN).",faq3_q:"How do I choose the right proxy mode?",faq3_l1:"Recommended default — best compatibility",faq3_l2:"Highest protection level, best for Cloudflare sites",faq3_l3:"UDP-based, evades TCP fingerprint detection",faq3_l4:"Use with a self-hosted relay server",faq4_q:"What's the difference between TUN mode and system proxy?",faq4_a1:"Only affects applications that support proxy settings (e.g., browsers). Apps must actively use proxy configuration.",faq4_a2:"Takes over all system traffic via a virtual network adapter. No per-app configuration needed. Ideal for games and desktop apps that do not support proxy protocols.",faq5_q:"How does Cloudflare IP picker work?",faq5_a:"Cloudflare operates millions of IP nodes globally. After fetching the IP pool via API, SniShaper automatically latency-tests each IP and selects the lowest-latency one. This significantly improves speed and stability.",faq6_q:"Is SniShaper free and open source?",faq6_a:"Yes. SniShaper is released under the MIT open-source license, completely free to use. Source code is hosted on GitHub and community contributions are welcome. You are free to view, modify, and distribute the code.",qs_title:"Quick Start Guide",qs_subtitle:"Get started with SniShaper in three steps",qs_step1_title:"Download & Install",qs_step1_desc:"Download the latest version from this website, extract and double-click snishaper.exe to run.",qs_step1_tag:"Windows 10/11 x64",qs_step2_title:"Install Certificate",qs_step2_desc:'After first launch, go to the Certificate Manager, click "Install Root Certificate" and follow the system prompts.',qs_step2_tip:"Confirm Windows security prompt",qs_step3_title:"Start Proxy",qs_step3_desc:'Select a proxy mode and click "Enable Proxy". You can choose system proxy or TUN mode.',qs_tips_title:"Tips",qs_tip1:"TLS-RF mode is recommended for first use — best compatibility",qs_tip2:"Enable system proxy and your browser works immediately — no extra configuration",qs_tip3:"Enable TUN mode for games and desktop apps to achieve system-wide proxying",qs_tip4:"Enable auto-start and minimize to tray for the best experience",stack_title:"Modern Tech Stack",stack_desc:"Wails v3 delivers a native Windows desktop experience. Go backend handles core logic — TLS obfuscation, QUIC reconstruction, rule matching. React/TypeScript frontend provides a responsive GUI.",stack_go:"High-performance proxy core",stack_react:"TypeScript + Vite UI",stack_wails:"Native Windows desktop app",stack_mit:"Open source & free",arch_local:"Local App",arch_client:"Client",arch_server:"Cloudflare / VPS",arch_target:"Target Website",arch_success:"Accessible",cl_title:"Changelog",cl_subtitle:"Continuously iterating and improving the experience",cl_latest:"Latest Release",cl_more:"Full changelog",cl126_title:"DNS Upstreams & Platform Support",cl126_l1:"Support for DNS upstream servers with domain bypass features",cl126_l2:"Combined operation of QUIC and ECH modes",cl126_l3:"Integrated specific ECH support for Meta platforms",cl126_l4:"Full English language support across the interface",cl126_l5:"Removed built-in WARP support",cl126_l6:"Resolved numerous issues and configuration inconsistencies",cl126_l7:"Upgraded dependencies and reduced polling frequency",cl126_l8:"Rule editing page now shows only relevant options based on current mode",cl126_l9:"Implemented support for Discord, Twitch, and XChat",cl125_title:"Added TUN Mode Support",cl125_l1:"Added TUN mode support",cl125_l2:"Expanded website compatibility list",cl125_l3:"Further separation of frontend and backend",cl124_title:"Dark Mode UI Fix & Config Separation",cl124_l1:"Fixed dark mode UI display issues",cl124_l2:"Decoupled rule config from user config — settings need re-adjustment",cl124_l3:"Added auto-start option",cl124_l4:"Fixed known issues and improved stability",cl122_title:"Experimental QUIC Direct & Full DoH Support",cl122_l1:"Added experimental QUIC direct connection support, leveraging quic-go's built-in fragmentation",cl122_l2:"Full DoH resolution support with optional IPv4 / IPv6",cl121_title:"External Certificate Verification & Rule Refinements",cl121_l1:"Added external certificate verification logic, improving domain fronting security",cl121_l2:"Refined parts of the rule set",cl11x_title:"Milestone Release: Most Stable & Powerful",cl11x_l1:"Fixed MITM mode HTTP page issues, added auto-redirect to HTTPS",cl11x_l2:"Introduced TLS fragmentation mode — practically usable on some websites",cl11x_l3:"Fixed Google config, now supporting Google, YouTube, and Gemini simultaneously",cl11x_l4:"Introduced WARP as optional routing — ChatGPT and similar sites restored",cl11x_l5:"Decoupled ECH logic from Cloudflare — ready for other ECH providers",cl11x_l6:"Optimized UI display on several pages",cl10_title:"First Stable Release",cl10_l1:"Implemented Cloudflare ECH, parallel dialing, ECDSA certificates and UI",dl_title:"Ready to Take Control of Your Traffic?",dl_desc:"Download SniShaper for Windows. Open source, free, no registration required.",dl_btn:"Download Windows x64 (v1.26)",dl_win:"Windows 10/11",dl_gui:"GUI",dl_open:"Open Source",footer_brand:"SniShaper",footer_desc:"A local proxy tool designed for complex network environments. TLS fragmentation, QUIC reconstruction, and ECH injection keep your traffic accessible in restricted networks.",footer_res:"Resources",footer_quickstart:"Quick Start",footer_changelog:"Changelog",footer_wiki:"Documentation Wiki",footer_community:"Community",footer_license:"MIT License",footer_stack:"Go + React + Wails",footer_legal:"SniShaper is designed to restore internet access freedom. Please comply with local laws and regulations and use responsibly.",footer_credit:"Collaborators | Contributors | Web Developer: dongle",footer_notice:"The original author has withdrawn from development due to malicious slander, information exposure, and social circle backlash. The repository has been transferred to a community developer for continued maintenance.",mob_features:"Features",mob_tech:"Core Tech",mob_faq:"FAQ",mob_download:"Download",modal_title:"Choose Download Method",modal_zoho:"Cloud Drive",modal_zoho_desc:"Download via Zoho WorkDrive",modal_github:"GitHub",modal_github_desc:"Download from GitHub Releases",modal_direct:"Direct Link",modal_direct_desc:"Direct download link (may be unstable)",modal_close:"Close"};let p="zh",e=k;function w(a){p=a,e=a==="zh"?k:C,localStorage.setItem("snishaper-lang",a),M(),I()}function T(){const a=localStorage.getItem("snishaper-lang");return a==="zh"||a==="en"?a:"zh"}function I(){const a=document.getElementById("lang-toggle-btn");a&&(a.textContent=p==="zh"?"EN":"中",a.setAttribute("aria-label",p==="zh"?"Switch to English":"切换到中文"))}function M(){document.querySelectorAll("[data-i18n]").forEach(a=>{const o=a.getAttribute("data-i18n");e[o]!==void 0&&(a.textContent=e[o])}),document.querySelectorAll("[data-i18n-html]").forEach(a=>{const o=a.getAttribute("data-i18n-html");e[o]!==void 0&&(a.innerHTML=e[o])}),document.documentElement.lang=p}function L(){w(T());const a=document.getElementById("app");if(!a){console.error("App element not found");return}a.innerHTML=`
    <div class="noise-bg min-h-screen">
      <!-- Navigation -->
      <nav class="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img src="/logo.png" alt="SniShaper" class="w-10 h-10" />
            <span class="text-lg font-semibold tracking-tight">SniShaper</span>
          </div>
          <div class="hidden md:flex items-center gap-8 text-sm text-snip-muted">
            <a href="#features" class="hover:text-snip-orange transition-colors" data-i18n="nav_features">${e.nav_features}</a>
            <a href="#tech" class="hover:text-snip-orange transition-colors" data-i18n="nav_tech">${e.nav_tech}</a>
            <a href="#faq" class="hover:text-snip-orange transition-colors" data-i18n="nav_faq">${e.nav_faq}</a>
            <a href="#download" class="hover:text-snip-orange transition-colors" data-i18n="nav_download">${e.nav_download}</a>
          </div>
          <div class="flex items-center gap-3">
            <button id="lang-toggle-btn" class="px-2 py-1 text-xs font-mono text-snip-muted hover:text-snip-orange border border-snip-gray-light rounded transition-colors">${p==="zh"?"EN":"中"}</button>
            <button id="mobile-menu-btn" class="md:hidden p-2 text-snip-muted hover:text-snip-orange transition-colors">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <!-- Hero -->
      <section class="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 overflow-hidden">
        <div class="absolute top-32 right-12 w-64 h-64 bg-snip-orange/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-32 left-1/4 w-96 h-96 bg-snip-orange/3 rounded-full blur-3xl"></div>
        <div class="max-w-7xl mx-auto w-full">
          <div class="grid lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-7 space-y-8">
              <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-snip-gray rounded-full text-xs text-snip-muted border border-snip-gray-light">
                <span class="w-2 h-2 bg-snip-orange rounded-full animate-pulse"></span>
                <span class="font-mono" data-i18n="hero_badge">${e.hero_badge}</span>
              </div>
              <h1 class="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
                <span class="block">Sni</span><span class="block text-gradient">Shaper</span>
              </h1>
              <p class="text-lg md:text-xl text-snip-muted max-w-xl leading-relaxed" data-i18n="hero_desc">${e.hero_desc}</p>
              <div class="flex flex-wrap gap-4">
                <a href="#download" class="group relative px-6 py-3 bg-snip-orange text-white font-medium rounded-lg overflow-hidden transition-all hover:scale-105 glow-orange">
                  <span class="relative z-10" data-i18n="hero_btn_download">${e.hero_btn_download}</span>
                </a>
                <a href="#tech" class="hero-secondary-btn px-6 py-3 border border-snip-gray-light rounded-lg text-snip-text hover:border-snip-orange transition-colors" data-i18n="hero_btn_tech">${e.hero_btn_tech}</a>
              </div>
            </div>
            <div class="lg:col-span-5 relative">
              <div class="relative w-full max-w-md ml-auto">
                <div class="code-block overflow-hidden" style="transform: rotate(-1deg)">
                  <div class="flex items-center gap-2 px-4 py-3 bg-snip-gray-light border-b border-snip-gray">
                    <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
                    <span class="ml-4 text-xs text-snip-muted font-mono">SniShaper v1.25</span>
                  </div>
                  <div class="p-4 space-y-3">
                    <div class="flex items-center justify-between px-3 py-2 bg-snip-dark rounded-lg">
                      <span class="text-sm" data-i18n="hero_status">${e.hero_status}</span>
                      <span class="flex items-center gap-2 text-snip-orange">
                        <span class="w-2 h-2 bg-snip-orange rounded-full animate-pulse"></span>
                        <span data-i18n="hero_running">${e.hero_running}</span>
                      </span>
                    </div>
                    <div class="flex gap-2">
                      <div class="flex-1 px-3 py-2 bg-snip-orange/20 border border-snip-orange rounded-lg text-center text-xs">TLS-RF</div>
                      <div class="flex-1 px-3 py-2 bg-snip-dark rounded-lg text-center text-xs text-snip-muted">QUIC</div>
                      <div class="flex-1 px-3 py-2 bg-snip-dark rounded-lg text-center text-xs text-snip-muted">ECH</div>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                      <div class="px-3 py-2 bg-snip-dark rounded-lg">
                        <div class="text-xs text-snip-muted" data-i18n="hero_upload">${e.hero_upload}</div>
                        <div class="text-sm font-mono text-green-400">↑ 12.5 MB/s</div>
                      </div>
                      <div class="px-3 py-2 bg-snip-dark rounded-lg">
                        <div class="text-xs text-snip-muted" data-i18n="hero_download">${e.hero_download}</div>
                        <div class="text-sm font-mono text-snip-orange">↓ 45.2 MB/s</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute -top-4 -right-4 px-3 py-1.5 bg-snip-gray rounded-lg text-xs font-mono border border-snip-gray-light" style="transform: rotate(6deg)">Wails v3</div>
                <div class="absolute -bottom-2 -left-6 px-3 py-1.5 bg-snip-gray rounded-lg text-xs font-mono border border-snip-gray-light" style="transform: rotate(-8deg)" data-i18n="hero_gui">${e.hero_gui}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Advantages -->
      <section class="relative py-24 px-6 md:px-12 bg-snip-gray">
        <div class="absolute inset-0 opacity-5">
          <div class="absolute top-0 left-1/4 w-px h-full bg-snip-orange"></div>
          <div class="absolute top-0 right-1/3 w-px h-full bg-snip-orange"></div>
        </div>
        <div class="max-w-7xl mx-auto relative">
          <div class="grid lg:grid-cols-12 gap-12">
            <div class="lg:col-span-4">
              <h2 class="text-3xl md:text-4xl font-bold mb-4" data-i18n="adv_title">${e.adv_title}</h2>
              <p class="text-snip-muted" data-i18n="adv_subtitle">${e.adv_subtitle}</p>
            </div>
            <div class="lg:col-span-8 space-y-6">
              <div class="asym-card bg-snip-dark p-6 rounded-xl border border-snip-gray-light">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-snip-orange/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5 text-snip-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h3 class="font-semibold mb-1" data-i18n="adv1_title">${e.adv1_title}</h3>
                    <p class="text-snip-muted text-sm" data-i18n="adv1_desc">${e.adv1_desc}</p>
                  </div>
                </div>
              </div>
              <div class="asym-card-2 bg-snip-dark p-6 rounded-xl border border-snip-gray-light ml-8">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-snip-orange/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5 text-snip-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h3 class="font-semibold mb-1" data-i18n="adv2_title">${e.adv2_title}</h3>
                    <p class="text-snip-muted text-sm" data-i18n="adv2_desc">${e.adv2_desc}</p>
                  </div>
                </div>
              </div>
              <div class="asym-card bg-snip-dark p-6 rounded-xl border border-snip-gray-light">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-snip-orange/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5 text-snip-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 class="font-semibold mb-1" data-i18n="adv3_title">${e.adv3_title}</h3>
                    <p class="text-snip-muted text-sm" data-i18n="adv3_desc">${e.adv3_desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech -->
      <section id="tech" class="relative py-24 px-6 md:px-12">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4" data-i18n="tech_title">${e.tech_title}</h2>
            <p class="text-snip-muted max-w-2xl mx-auto" data-i18n="tech_subtitle">${e.tech_subtitle}</p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="group relative p-8 bg-snip-gray rounded-2xl border border-snip-gray-light hover:border-snip-orange/50 transition-all hover:-translate-y-1" style="transform: rotate(-0.5deg)">
              <div class="absolute top-4 right-4 text-xs font-mono text-snip-muted">01</div>
              <div class="w-12 h-12 bg-snip-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-snip-orange/20 transition-colors">
                <svg class="w-6 h-6 text-snip-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
              </div>
              <h3 class="text-xl font-semibold mb-3" data-i18n="tech1_name">${e.tech1_name}</h3>
              <p class="text-snip-muted text-sm mb-4" data-i18n="tech1_desc">${e.tech1_desc}</p>
              <div class="text-xs text-snip-orange font-mono" data-i18n="tech1_tag">${e.tech1_tag}</div>
            </div>
            <div class="group relative p-8 bg-snip-gray rounded-2xl border border-snip-gray-light hover:border-snip-orange/50 transition-all hover:-translate-y-1 md:translate-y-8" style="transform: rotate(1deg)">
              <div class="absolute top-4 right-4 text-xs font-mono text-snip-muted">02</div>
              <div class="w-12 h-12 bg-snip-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-snip-orange/20 transition-colors">
                <svg class="w-6 h-6 text-snip-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 class="text-xl font-semibold mb-3" data-i18n="tech2_name">${e.tech2_name}</h3>
              <p class="text-snip-muted text-sm mb-4" data-i18n="tech2_desc">${e.tech2_desc}</p>
              <div class="text-xs text-snip-orange font-mono" data-i18n="tech2_tag">${e.tech2_tag}</div>
            </div>
            <div class="group relative p-8 bg-snip-gray rounded-2xl border border-snip-gray-light hover:border-snip-orange/50 transition-all hover:-translate-y-1 md:-translate-y-4" style="transform: rotate(-0.8deg)">
              <div class="absolute top-4 right-4 text-xs font-mono text-snip-muted">03</div>
              <div class="w-12 h-12 bg-snip-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-snip-orange/20 transition-colors">
                <svg class="w-6 h-6 text-snip-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 class="text-xl font-semibold mb-3" data-i18n="tech3_name">${e.tech3_name}</h3>
              <p class="text-snip-muted text-sm mb-4" data-i18n="tech3_desc">${e.tech3_desc}</p>
              <div class="text-xs text-snip-orange font-mono" data-i18n="tech3_tag">${e.tech3_tag}</div>
            </div>
          </div>
          <div class="mt-12 grid md:grid-cols-2 gap-6">
            <div class="p-6 bg-snip-dark rounded-xl border border-snip-gray-light flex items-start gap-4">
              <div class="w-8 h-8 bg-snip-muted/10 rounded-lg flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-snip-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" /></svg>
              </div>
              <div>
                <h4 class="font-medium mb-1" data-i18n="tech_mode1_title">${e.tech_mode1_title}</h4>
                <p class="text-snip-muted text-sm" data-i18n="tech_mode1_desc">${e.tech_mode1_desc}</p>
              </div>
            </div>
            <div class="p-6 bg-snip-dark rounded-xl border border-snip-gray-light flex items-start gap-4">
              <div class="w-8 h-8 bg-snip-muted/10 rounded-lg flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-snip-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              </div>
              <div>
                <h4 class="font-medium mb-1" data-i18n="tech_mode2_title">${e.tech_mode2_title}</h4>
                <p class="text-snip-muted text-sm" data-i18n="tech_mode2_desc">${e.tech_mode2_desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section id="features" class="relative py-24 px-6 md:px-12 bg-snip-gray">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4" data-i18n="feat_title">${e.feat_title}</h2>
            <p class="text-snip-muted max-w-2xl mx-auto" data-i18n="feat_subtitle">${e.feat_subtitle}</p>
          </div>
          <div class="scroll-container pb-4 -mx-6 px-6" id="features-carousel">
            ${[1,2,3,4,5,6,7,8].map(t=>`
            <div class="scroll-item w-80 p-6 bg-snip-dark rounded-xl border border-snip-gray-light">
              <div class="w-10 h-10 bg-snip-orange/10 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-5 h-5 text-snip-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  ${[0,1,2,3,4,5,6,7].includes(t)?'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />':""}
                  ${t===1?'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />':""}
                  ${t===2?'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />':""}
                  ${t===4?'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />':""}
                  ${t===6?'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />':""}
                  ${t===0?'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />':""}
                  ${t===3?'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />':""}
                  ${t===5?'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />':""}
                  ${t===7?'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />':""}
                </svg>
              </div>
              <h3 class="font-semibold mb-2" data-i18n="feat${t}_title">${e[`feat${t}_title`]}</h3>
              <p class="text-snip-muted text-sm" data-i18n="feat${t}_desc">${e[`feat${t}_desc`]}</p>
            </div>`).join("")}
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq" class="relative py-24 px-6 md:px-12">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4" data-i18n="faq_title">${e.faq_title}</h2>
            <p class="text-snip-muted max-w-2xl mx-auto" data-i18n="faq_subtitle">${e.faq_subtitle}</p>
          </div>
          <div class="space-y-4">
            <details class="group bg-snip-dark rounded-xl border border-snip-gray-light overflow-hidden">
              <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
                <span class="font-medium" data-i18n="faq1_q">${e.faq1_q}</span>
                <svg class="w-5 h-5 text-snip-muted transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div class="px-6 pb-6 text-snip-muted text-sm leading-relaxed" data-i18n="faq1_a">${e.faq1_a}</div>
            </details>
            <details class="group bg-snip-dark rounded-xl border border-snip-gray-light overflow-hidden">
              <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
                <span class="font-medium" data-i18n="faq2_q">${e.faq2_q}</span>
                <svg class="w-5 h-5 text-snip-muted transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div class="px-6 pb-6 text-snip-muted text-sm leading-relaxed">
                <strong class="text-snip-text">TLS-RF</strong>&nbsp;<span data-i18n="faq2_a1">${e.faq2_a1}</span><br/><br/>
                <strong class="text-snip-text">ECH</strong>&nbsp;<span data-i18n="faq2_a2">${e.faq2_a2}</span>
              </div>
            </details>
            <details class="group bg-snip-dark rounded-xl border border-snip-gray-light overflow-hidden">
              <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
                <span class="font-medium" data-i18n="faq3_q">${e.faq3_q}</span>
                <svg class="w-5 h-5 text-snip-muted transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div class="px-6 pb-6 text-snip-muted text-sm leading-relaxed">
                <ul class="list-disc list-inside space-y-2">
                  <li><strong class="text-snip-text">TLS-RF</strong>:&nbsp;<span data-i18n="faq3_l1">${e.faq3_l1}</span></li>
                  <li><strong class="text-snip-text">ECH</strong>:&nbsp;<span data-i18n="faq3_l2">${e.faq3_l2}</span></li>
                  <li><strong class="text-snip-text">QUIC</strong>:&nbsp;<span data-i18n="faq3_l3">${e.faq3_l3}</span></li>
                  <li><strong class="text-snip-text">Server</strong>:&nbsp;<span data-i18n="faq3_l4">${e.faq3_l4}</span></li>
                </ul>
              </div>
            </details>
            <details class="group bg-snip-dark rounded-xl border border-snip-gray-light overflow-hidden">
              <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
                <span class="font-medium" data-i18n="faq4_q">${e.faq4_q}</span>
                <svg class="w-5 h-5 text-snip-muted transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div class="px-6 pb-6 text-snip-muted text-sm leading-relaxed">
                <strong class="text-snip-text">${p==="zh"?"系统代理":"System proxy"}</strong>:&nbsp;<span data-i18n="faq4_a1">${e.faq4_a1}</span><br/><br/>
                <strong class="text-snip-text">TUN</strong>:&nbsp;<span data-i18n="faq4_a2">${e.faq4_a2}</span>
              </div>
            </details>
            <details class="group bg-snip-dark rounded-xl border border-snip-gray-light overflow-hidden">
              <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
                <span class="font-medium" data-i18n="faq5_q">${e.faq5_q}</span>
                <svg class="w-5 h-5 text-snip-muted transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div class="px-6 pb-6 text-snip-muted text-sm leading-relaxed" data-i18n="faq5_a">${e.faq5_a}</div>
            </details>
            <details class="group bg-snip-dark rounded-xl border border-snip-gray-light overflow-hidden">
              <summary class="flex items-center justify-between p-6 cursor-pointer list-none">
                <span class="font-medium" data-i18n="faq6_q">${e.faq6_q}</span>
                <svg class="w-5 h-5 text-snip-muted transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div class="px-6 pb-6 text-snip-muted text-sm leading-relaxed" data-i18n="faq6_a">${e.faq6_a}</div>
            </details>
          </div>
        </div>
      </section>

      <!-- Quickstart -->
      <section id="quickstart" class="relative py-24 px-6 md:px-12 bg-snip-gray">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4" data-i18n="qs_title">${e.qs_title}</h2>
            <p class="text-snip-muted max-w-2xl mx-auto" data-i18n="qs_subtitle">${e.qs_subtitle}</p>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            ${[1,2,3].map(t=>`
            <div class="relative p-8 bg-snip-dark rounded-2xl border border-snip-gray-light${t===2?" md:transform md:-translate-y-4":""}">
              <div class="absolute -top-4 left-6 w-10 h-10 bg-snip-orange rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-snip-orange/20">${t}</div>
              <h3 class="text-xl font-bold mb-4 mt-2" data-i18n="qs_step${t}_title">${e[`qs_step${t}_title`]}</h3>
              <p class="text-snip-muted text-sm mb-4" data-i18n="qs_step${t}_desc">${e[`qs_step${t}_desc`]}</p>
              ${t===1?'<div class="p-3 bg-snip-gray rounded-lg font-mono text-xs text-snip-muted" data-i18n="qs_step1_tag">${T.qs_step1_tag}</div>':""}
              ${t===2?'<div class="p-3 bg-snip-gray rounded-lg text-xs space-y-1"><div class="flex items-center gap-2"><span class="w-2 h-2 bg-green-400 rounded-full"></span><span class="text-snip-muted" data-i18n="qs_step2_tip">${T.qs_step2_tip}</span></div></div>':""}
              ${t===3?'<div class="flex gap-2"><span class="px-2 py-1 bg-snip-orange/20 text-snip-orange rounded text-xs">TLS-RF</span><span class="px-2 py-1 bg-snip-gray rounded text-xs text-snip-muted">ECH</span><span class="px-2 py-1 bg-snip-gray rounded text-xs text-snip-muted">QUIC</span></div>':""}
            </div>`).join("")}
          </div>
          <div class="mt-12 p-6 bg-snip-dark rounded-2xl border border-snip-gray-light">
            <h4 class="font-semibold mb-4 flex items-center gap-2">
              <svg class="w-5 h-5 text-snip-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              <span data-i18n="qs_tips_title">${e.qs_tips_title}</span>
            </h4>
            <div class="grid md:grid-cols-2 gap-4 text-sm text-snip-muted">
              ${[1,2,3,4].map(t=>`<div class="flex items-start gap-3"><span class="text-snip-orange mt-1">-</span><span data-i18n="qs_tip${t}">${e[`qs_tip${t}`]}</span></div>`).join("")}
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack Details -->
      <section class="relative py-24 px-6 md:px-12">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 class="text-4xl font-bold mb-6" data-i18n="stack_title">${e.stack_title}</h2>
              <p class="text-snip-muted mb-8 leading-relaxed" data-i18n="stack_desc">${e.stack_desc}</p>
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center text-xs font-bold text-blue-400">Go</div>
                  <span class="text-sm" data-i18n="stack_go">${e.stack_go}</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center text-xs font-bold text-cyan-400">React</div>
                  <span class="text-sm" data-i18n="stack_react">${e.stack_react}</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-snip-orange/10 rounded-lg flex items-center justify-center text-xs font-bold text-snip-orange">Wails</div>
                  <span class="text-sm" data-i18n="stack_wails">${e.stack_wails}</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center text-xs font-bold text-green-400">MIT</div>
                  <span class="text-sm" data-i18n="stack_mit">${e.stack_mit}</span>
                </div>
              </div>
            </div>
            <div class="relative">
              <div class="code-block p-6">
                <div class="space-y-6 font-mono text-sm">
                  <div class="flex items-center gap-4">
                    <div class="w-24 text-snip-muted" data-i18n="arch_local">${e.arch_local}</div>
                    <div class="flex-1 border-t border-dashed border-snip-gray-light"></div>
                    <div class="px-3 py-1 bg-snip-orange/20 text-snip-orange rounded text-xs" data-i18n="arch_client">${e.arch_client}</div>
                  </div>
                  <div class="flex items-center gap-4"><div class="w-24"></div><div class="flex-1 border-t border-dashed border-snip-muted/30"></div></div>
                  <div class="flex items-center gap-4"><div class="w-24 text-snip-muted">SniShaper</div><div class="px-3 py-1 bg-snip-gray-light rounded text-xs">TLS-RF / ECH / QUIC</div></div>
                  <div class="flex items-center gap-4"><div class="w-24"></div><div class="flex-1 border-t border-dashed border-snip-muted/30"></div></div>
                  <div class="flex items-center gap-4"><div class="w-24"></div><div class="px-3 py-1 bg-snip-gray-light rounded text-xs" data-i18n="arch_server">${e.arch_server}</div></div>
                  <div class="flex items-center gap-4"><div class="w-24"></div><div class="flex-1 border-t border-dashed border-snip-muted/30"></div></div>
                  <div class="flex items-center gap-4">
                    <div class="w-24 text-snip-muted" data-i18n="arch_target">${e.arch_target}</div>
                    <div class="flex-1 border-t border-dashed border-snip-gray-light"></div>
                    <div class="px-3 py-1 bg-green-500/20 text-green-400 rounded text-xs" data-i18n="arch_success">${e.arch_success}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Changelog -->
      <section id="changelog" class="relative py-24 px-6 md:px-12">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4" data-i18n="cl_title">${e.cl_title}</h2>
            <p class="text-snip-muted max-w-2xl mx-auto" data-i18n="cl_subtitle">${e.cl_subtitle}</p>
          </div>
          <div class="space-y-8">
            <div class="relative pl-8 border-l-2 border-snip-orange/30">
              <div class="absolute -left-2 top-0 w-4 h-4 bg-snip-orange rounded-full"></div>
              <div class="space-y-3">
                <div class="flex items-center gap-3 flex-wrap">
                  <span class="px-3 py-1 bg-snip-orange text-white rounded-full text-sm font-bold">v1.26</span>
                  <span class="px-2 py-0.5 bg-snip-orange/20 text-snip-orange rounded text-xs font-medium" data-i18n="cl_latest">${e.cl_latest}</span>
                </div>
                <h3 class="text-lg font-bold" data-i18n="cl126_title">${e.cl126_title}</h3>
                <ul class="space-y-2 text-snip-muted text-sm">
                  ${[1,2,3,4,5,6,7,8,9].map(t=>`<li class="flex items-start gap-2"><span class="text-snip-orange shrink-0">-</span><span data-i18n="cl126_l${t}">${e[`cl126_l${t}`]}</span></li>`).join("")}
                </ul>
              </div>
            </div>
            ${[["125",""],["124","stable"],["122",""],["121",""],["11x","final"],["10",""]].map(([t,l])=>`
            <div class="relative pl-8 border-l-2 border-snip-gray-light">
              <div class="absolute -left-2 top-0 w-4 h-4 bg-snip-gray-light rounded-full"></div>
              <div class="space-y-3">
                <span class="px-3 py-1 bg-snip-gray text-snip-muted rounded-full text-sm font-bold">v${t==="10"?"1.0":t==="11x"?"1.1":`1.${t.slice(1)}`}${l?"-"+l:""}</span>
                <h3 class="text-lg font-bold" data-i18n="cl${t}_title">${e[`cl${t}_title`]}</h3>
                <ul class="space-y-2 text-snip-muted text-sm">
                  ${t==="126"?[1,2,3,4,5,6,7,8,9].map(s=>`<li class="flex items-start gap-2"><span class="text-snip-orange shrink-0">-</span><span data-i18n="cl126_l${s}">${e[`cl126_l${s}`]}</span></li>`).join(""):""}
                  ${t==="125"?[1,2,3].map(s=>`<li class="flex items-start gap-2"><span class="text-snip-orange shrink-0">-</span><span data-i18n="cl125_l${s}">${e[`cl125_l${s}`]}</span></li>`).join(""):""}
                  ${t==="124"?[1,2,3,4].map(s=>`<li class="flex items-start gap-2"><span class="text-snip-orange shrink-0">-</span><span data-i18n="cl124_l${s}">${e[`cl124_l${s}`]}</span></li>`).join(""):""}
                  ${t==="122"?[1,2].map(s=>`<li class="flex items-start gap-2"><span class="text-snip-orange shrink-0">-</span><span data-i18n="cl122_l${s}">${e[`cl122_l${s}`]}</span></li>`).join(""):""}
                  ${t==="121"?[1,2].map(s=>`<li class="flex items-start gap-2"><span class="text-snip-orange shrink-0">-</span><span data-i18n="cl121_l${s}">${e[`cl121_l${s}`]}</span></li>`).join(""):""}
                  ${t==="11x"?[1,2,3,4,5,6].map(s=>`<li class="flex items-start gap-2"><span class="text-snip-orange shrink-0">-</span><span data-i18n="cl11x_l${s}">${e[`cl11x_l${s}`]}</span></li>`).join(""):""}
                  ${t==="10"?'<li class="flex items-start gap-2"><span class="text-snip-orange shrink-0">-</span><span data-i18n="cl10_l1">${T.cl10_l1}</span></li>':""}
                </ul>
              </div>
            </div>`).join("")}
            <div class="text-center pt-4"><span class="text-snip-muted text-sm" data-i18n="cl_more">${e.cl_more}</span></div>
          </div>
        </div>
      </section>

      <!-- Download CTA -->
      <section id="download" class="relative py-24 px-6 md:px-12 bg-snip-gray">
        <div class="max-w-4xl mx-auto text-center relative">
          <div class="absolute inset-0 bg-snip-orange/5 rounded-3xl blur-3xl"></div>
          <div class="relative">
            <h2 class="text-4xl md:text-5xl font-bold mb-6" data-i18n="dl_title">${e.dl_title}</h2>
            <p class="text-snip-muted mb-10 max-w-xl mx-auto" data-i18n="dl_desc">${e.dl_desc}</p>
            <div class="flex flex-wrap justify-center gap-4 mb-8">
              <button id="download-btn" class="group relative px-8 py-4 bg-snip-orange text-white font-semibold rounded-xl overflow-hidden transition-all hover:scale-105 glow-orange cursor-pointer">
                <span class="relative z-10 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  <span data-i18n="dl_btn">${e.dl_btn}</span>
                </span>
              </button>
            </div>
            <div class="flex items-center justify-center gap-6 text-sm text-snip-muted">
              <span class="flex items-center gap-2"><span class="w-2 h-2 bg-green-400 rounded-full"></span><span data-i18n="dl_win">${e.dl_win}</span></span>
              <span>|</span>
              <span data-i18n="dl_gui">${e.dl_gui}</span>
              <span>|</span>
              <span data-i18n="dl_open">${e.dl_open}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="relative py-16 px-6 md:px-12 border-t border-snip-gray-light">
        <div class="max-w-7xl mx-auto">
          <div class="grid md:grid-cols-4 gap-12 mb-12">
            <div class="md:col-span-2">
              <div class="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="SniShaper" class="w-10 h-10" />
                <span class="font-bold text-lg" data-i18n="footer_brand">${e.footer_brand}</span>
              </div>
              <p class="text-snip-muted text-sm max-w-md leading-relaxed mb-4" data-i18n="footer_desc">${e.footer_desc}</p>
            </div>
            <div>
              <h4 class="font-semibold mb-4" data-i18n="footer_res">${e.footer_res}</h4>
              <ul class="space-y-3 text-sm text-snip-muted">
                <li><a href="#quickstart" class="hover:text-snip-orange transition-colors" data-i18n="footer_quickstart">${e.footer_quickstart}</a></li>
                <li><a href="#changelog" class="hover:text-snip-orange transition-colors" data-i18n="footer_changelog">${e.footer_changelog}</a></li>
                <li><a href="https://github.com/jhonsmithsamsmith/SniShaper/wiki" target="_blank" class="hover:text-snip-orange transition-colors" data-i18n="footer_wiki">${e.footer_wiki}</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-4" data-i18n="footer_community">${e.footer_community}</h4>
              <ul class="space-y-3 text-sm text-snip-muted">
                <li><span class="text-snip-text font-medium" data-i18n="footer_license">${e.footer_license}</span></li>
                <li><span class="text-snip-text" data-i18n="footer_stack">${e.footer_stack}</span></li>
              </ul>
            </div>
          </div>
          <div class="pt-8 border-t border-snip-gray text-center text-xs text-snip-muted">
            <p class="mb-2" data-i18n="footer_legal">${e.footer_legal}</p>
            <p data-i18n="footer_credit">${e.footer_credit}</p>
            <p class="mt-3 opacity-25 leading-relaxed" style="font-size:10px;max-width:480px;margin-left:auto;margin-right:auto;" data-i18n="footer_notice">${e.footer_notice}</p>
          </div>
        </div>
      </footer>

      <!-- Download Modal -->
      <div id="download-modal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden items-center justify-center p-4">
        <div class="bg-snip-dark rounded-2xl border border-snip-gray-light max-w-lg w-full p-8 relative">
          <button id="download-modal-close" class="absolute top-4 right-4 p-2 text-snip-muted hover:text-snip-orange transition-colors">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <h3 class="text-2xl font-bold mb-6" data-i18n="modal_title">${e.modal_title}</h3>
          <div class="space-y-4">
            <a href="https://workdrive.zohopublic.com.cn/external/84487a84ff53bc86084a07edf87e38eca39989f941a6c7c04c8391860b689a34/download" target="_blank" class="download-option flex items-start gap-4 p-4 bg-snip-gray rounded-xl border border-snip-gray-light hover:border-snip-orange/50 transition-all group">
              <div class="w-10 h-10 bg-snip-orange/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-snip-orange/20 transition-colors">
                <svg class="w-5 h-5 text-snip-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
              </div>
              <div>
                <div class="font-medium mb-1" data-i18n="modal_zoho">${e.modal_zoho}</div>
                <div class="text-sm text-snip-muted" data-i18n="modal_zoho_desc">${e.modal_zoho_desc}</div>
              </div>
            </a>
            <a href="https://github.com/SniShaper/SniShaper/releases/download/v1.26/SniShaper-Windows-1.26.7z" target="_blank" class="download-option flex items-start gap-4 p-4 bg-snip-gray rounded-xl border border-snip-gray-light hover:border-snip-orange/50 transition-all group">
              <div class="w-10 h-10 bg-snip-orange/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-snip-orange/20 transition-colors">
                <svg class="w-5 h-5 text-snip-orange" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.02.837.58-.16 1.201-.24 1.82-.242.618.002 1.239.082 1.82.242 1.012-1.159 2.02-.837 2.02-.837.652 1.652.241 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
              <div>
                <div class="font-medium mb-1" data-i18n="modal_github">${e.modal_github}</div>
                <div class="text-sm text-snip-muted" data-i18n="modal_github_desc">${e.modal_github_desc}</div>
              </div>
            </a>
            <a href="https://files.zohopublic.com.cn/public/workdrive-public/download/oqvg1b2490138595c4ac6b80bef201cc6e6d4?x-cli-msg=%7B%22linkId%22%3A%221GumWstoXFf-35NGn%22%2C%22isFileOwner%22%3Afalse%2C%22version%22%3A%221.0%22%2C%22isWDSupport%22%3Afalse%7D" target="_blank" class="download-option flex items-start gap-4 p-4 bg-snip-gray rounded-xl border border-snip-gray-light hover:border-snip-orange/50 transition-all group">
              <div class="w-10 h-10 bg-snip-orange/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-snip-orange/20 transition-colors">
                <svg class="w-5 h-5 text-snip-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <div class="font-medium mb-1" data-i18n="modal_direct">${e.modal_direct}</div>
                <div class="text-sm text-snip-muted" data-i18n="modal_direct_desc">${e.modal_direct_desc}</div>
              </div>
            </a>
          </div>
          <div class="mt-6 text-center">
            <button id="download-modal-close-btn" class="px-6 py-2 bg-snip-gray text-snip-muted rounded-lg hover:text-snip-orange transition-colors cursor-pointer" data-i18n="modal_close">${e.modal_close}</button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="fixed inset-0 bg-snip-dark/95 backdrop-blur-lg z-50 hidden flex-col items-center justify-center gap-8">
        <button id="mobile-menu-close" class="absolute top-6 right-6 p-2 text-snip-muted hover:text-snip-orange transition-colors">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <a href="#features" class="text-2xl font-medium hover:text-snip-orange transition-colors mobile-link" data-i18n="mob_features">${e.mob_features}</a>
        <a href="#tech" class="text-2xl font-medium hover:text-snip-orange transition-colors mobile-link" data-i18n="mob_tech">${e.mob_tech}</a>
        <a href="#faq" class="text-2xl font-medium hover:text-snip-orange transition-colors mobile-link" data-i18n="mob_faq">${e.mob_faq}</a>
        <a href="#download" class="text-2xl font-medium hover:text-snip-orange transition-colors mobile-link" data-i18n="mob_download">${e.mob_download}</a>
      </div>
    </div>
  `;const o=document.getElementById("lang-toggle-btn");o==null||o.addEventListener("click",()=>w(p==="zh"?"en":"zh"));const u=document.getElementById("mobile-menu-btn"),c=document.getElementById("mobile-menu"),i=document.getElementById("mobile-menu-close"),n=document.querySelectorAll(".mobile-link");function m(){c.classList.remove("hidden"),c.classList.add("flex"),document.body.style.overflow="hidden"}function _(){c.classList.add("hidden"),c.classList.remove("flex"),document.body.style.overflow=""}u==null||u.addEventListener("click",m),i==null||i.addEventListener("click",_),n.forEach(t=>t.addEventListener("click",_));const h=document.getElementById("download-btn"),d=document.getElementById("download-modal"),f=document.getElementById("download-modal-close"),v=document.getElementById("download-modal-close-btn");function q(){d.classList.remove("hidden"),d.classList.add("flex"),document.body.style.overflow="hidden"}function x(){d.classList.add("hidden"),d.classList.remove("flex"),document.body.style.overflow=""}h==null||h.addEventListener("click",q),f==null||f.addEventListener("click",x),v==null||v.addEventListener("click",x),d==null||d.addEventListener("click",t=>{t.target===d&&x()}),document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(l){l.preventDefault();const r=document.querySelector(this.getAttribute("href"));r&&r.scrollIntoView({behavior:"smooth",block:"start"})})});const $={threshold:.1,rootMargin:"0px 0px -50px 0px"},S=new IntersectionObserver(t=>{t.forEach(l=>{l.isIntersecting&&(l.target.classList.add("opacity-100","translate-y-0"),l.target.classList.remove("opacity-0","translate-y-8"))})},$);document.querySelectorAll("section").forEach(t=>{t.classList.add("transition-opacity","transition-transform","duration-700"),S.observe(t)}),(function(){const t=document.getElementById("features-carousel");if(!t)return;const l=.65;let r=0,s=1,g=!1;function b(){if(!g){r+=(l-r)*.08,t.scrollLeft+=r*s;const y=t.scrollWidth-t.clientWidth;s===1&&t.scrollLeft>=y?(s=-1,t.scrollLeft=y):s===-1&&t.scrollLeft<=0&&(s=1,t.scrollLeft=0)}requestAnimationFrame(b)}t.addEventListener("mouseenter",()=>{g=!0,r=0}),t.addEventListener("mouseleave",()=>{g=!1}),t.addEventListener("touchstart",()=>{g=!0,r=0},{passive:!0}),t.addEventListener("touchend",()=>{g=!1},{passive:!0}),t.style.scrollSnapType="none",t.style.overflowX="hidden",requestAnimationFrame(b)})()}document.addEventListener("DOMContentLoaded",()=>{L()});
