#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
从中文页面生成 /en/ 静态英文页面。
翻译来源：language.js 的 en 词典（与站内 JS 语言切换完全一致）+ 本文件补充的招聘类条目。
用法：python3 build-en-pages.py   （在仓库根目录运行，输出到 en/）
"""
import json, re, os, subprocess
from urllib.parse import quote

ROOT = os.path.dirname(os.path.abspath(__file__))
SITE = "https://e-sunray.com"

# ── 提取 language.js 的翻译词典 ──────────────────────────────
node_snippet = r"""
const fs = require('fs');
const src = fs.readFileSync(process.argv[1], 'utf8');
const start = src.indexOf('this.translations = {');
let i = src.indexOf('{', start), depth = 0, end = -1;
for (let j = i; j < src.length; j++) {
  if (src[j] === '{') depth++;
  else if (src[j] === '}') { depth--; if (depth === 0) { end = j; break; } }
}
process.stdout.write(JSON.stringify(eval('(' + src.slice(i, end + 1) + ')')));
"""
tr = json.loads(subprocess.check_output(
    ["node", "-e", node_snippet, os.path.join(ROOT, "language.js")], text=True))
EN = dict(tr["en"])

# language.js 词典缺失或为空的条目（现有 JS 英文模式下这些显示为中文或空白）
EN.update({
    "heroSubtitle": "We are committed to building safer, smarter power systems.",
    "projectManager": "Project Manager",
    "salesEngineer": "Electrical & Instrumentation Sales Engineer",
    "applicationEngineer": "Electrical & Instrumentation Application Engineer",
    "internApplicationEngineer": "Intern — Electrical & Instrumentation Application Engineer",
    "freshGraduateStudent": "Fresh Graduates & Students",
    "projectManagerDesc": "Overall planning, design, implementation and acceptance of automation, power-distribution and substation-automation projects, including coordination, quality, schedule and cost control throughout project execution.",
    "salesEngineerDesc": "Sell SEL substation automation systems and protection relay products; develop and maintain the regional market; handle project bidding and customer communication.",
    "applicationEngineerDesc": "Carry out commissioning, after-sales service and customer technical training for protection relays and monitoring systems; collect and relay customer feedback, maintain strong customer relationships, and complete documentation on schedule.",
})

# ── 页面映射与英文 head 文案 ────────────────────────────────
PAGES = {
    "index.html": dict(
        en="index.html",
        title="Chengdu Sunray Technology | Authorized SEL & Hitachi Energy Distributor in China",
        desc="Chengdu Sunray Technology Co., Ltd. — authorized distributor of SEL (Schweitzer Engineering Laboratories) and Hitachi Energy in China. SEL protection relays, power automation, cable accessories and switchgear components."),
    "产品与解决方案-SEL.html": dict(
        en="sel-products.html",
        title="SEL Products | Protection Relays SEL-787, SEL-451, SEL-751 — Chengdu Sunray Technology",
        desc="Authorized SEL (Schweitzer Engineering Laboratories) distributor in China. SEL-787, SEL-451, SEL-751 protection relays, SEL-3505 RTAC, SEL-2240 AXION and the full SEL product lineup, with local technical support."),
    "产品与解决方案-日立.html": dict(
        en="hitachi-energy-products.html",
        title="Hitachi Energy Products | Cable Accessories, Capacitors, Transformers — Chengdu Sunray Technology",
        desc="Authorized Hitachi Energy distributor in China. Cable accessories (1–245 kV), capacitors, harmonic filters and transformers — products formerly sold as ABB Power Grids."),
    "产品与解决方案-开关柜.html": dict(
        en="switchgear-components.html",
        title="Switchgear Components & Instrument Transformers — Chengdu Sunray Technology",
        desc="ANSI/IEC switchgear components: Arteche saTECH test blocks, States Products FMS test switches, GE MMLB/MMLG, FT-1, auxiliary relays, selector switches, Rogowski coils and PLUGSENS voltage sensors."),
    "产品与解决方案-解决方案.html": dict(
        en="solutions.html",
        title="Power System Solutions — Chengdu Sunray Technology",
        desc="Panel assembly, commissioning, system integration, testing, fault analysis and simulation services for power automation systems."),
    "关于我们.html": dict(
        en="about.html",
        title="About Chengdu Sunray Technology Co., Ltd.",
        desc="Founded in 2007 in Chengdu High-Tech Zone, Chengdu Sunray Technology is an authorized distributor of SEL, Hitachi Energy and Arteche in China, specializing in power grid automation and substation systems."),
    "联系我们.html": dict(
        en="contact.html",
        title="Contact Chengdu Sunray Technology",
        desc="Contact Chengdu Sunray Technology. Tel: +86-28-8529-3296, Email: info@e-sunray.com. Authorized SEL and Hitachi Energy distributor in Chengdu, Sichuan, China."),
    "加入我们.html": dict(
        en="careers.html",
        title="Careers — Chengdu Sunray Technology",
        desc="Join Chengdu Sunray Technology — careers in power automation, SEL protection systems and system integration in Chengdu, China."),
}
# 职位详情页暂无英文版，英文站链回中文页
JOB_PAGES = [
    "职位详情页面-项目经理.html",
    "职位详情页面-电气、电仪销售工程师.html",
    "职位详情页面-电气、电仪应用工程师.html",
    "职位详情页面-实习-电气、电仪应用工程师.html",
]

ASSET_EXT = re.compile(r'\.(jpe?g|png|webp|gif|svg|ico|css|js)(\?[^"\']*)?$', re.I)
I18N_EL = re.compile(r'(<(\w+)\b[^>]*data-i18n="([^"]+)"[^>]*>)(.*?)(</\2>)', re.S)


def zh_url(zh_name):
    return f"{SITE}/{quote(zh_name)}" if zh_name != "index.html" else f"{SITE}/"


def en_url(en_name):
    return f"{SITE}/en/{en_name}"


def build(zh_name, cfg):
    html = open(os.path.join(ROOT, zh_name), encoding="utf-8").read()
    n_i18n = len(re.findall(r'data-i18n="', html))

    # 1. 应用英文词典
    misses = []
    def tr_el(m):
        key = m.group(3)
        if key in EN:
            return m.group(1) + EN[key] + m.group(5)
        misses.append(key)
        return m.group(0)
    html, n_done = I18N_EL.subn(tr_el, html)

    # 1b. 个别导航链接源码里漏标 data-i18n（如开关柜页移动端子菜单），按锚文本兜底翻译
    for zh_text, en_text in [
        (">SEL产品<", ">SEL Products<"),
        (">日立能源产品<", ">Hitachi Energy Products<"),
        (">开关柜组件<", ">Switchgear Components<"),
        (">解决方案<", ">Solutions<"),
    ]:
        html = html.replace(zh_text, en_text)

    # 2. 页面间链接 → 英文文件名（先做完整 URL，再做相对 href）
    for z, c in PAGES.items():
        for old in (f"{SITE}/{quote(z)}", f"{SITE}/{z}"):
            html = html.replace(old, en_url(c["en"]))
        html = html.replace(f'href="{quote(z)}', f'href="{c["en"]}')
        html = html.replace(f'href="{z}', f'href="{c["en"]}')
    for z in JOB_PAGES:  # 链回中文职位详情页
        html = html.replace(f'href="{z}', f'href="../{z}')
        html = html.replace(f'href="{quote(z)}', f'href="../{z}')

    # 3. head 重写
    html = html.replace('<html lang="zh-CN">', '<html lang="en">')
    html = re.sub(r"<title>.*?</title>", f"<title>{cfg['title']}</title>", html, count=1, flags=re.S)
    html = re.sub(r'(<meta name="description" content=")[^"]*(")', rf"\g<1>{cfg['desc']}\g<2>", html, count=1)
    for prop in ("og:title", "twitter:title"):
        html = re.sub(rf'(<meta (?:property|name)="{prop}" content=")[^"]*(")', rf"\g<1>{cfg['title']}\g<2>", html)
    for prop in ("og:description", "twitter:description"):
        html = re.sub(rf'(<meta (?:property|name)="{prop}" content=")[^"]*(")', rf"\g<1>{cfg['desc']}\g<2>", html)
    html = html.replace('<meta property="og:locale" content="zh_CN">', '<meta property="og:locale" content="en_US">')
    html = re.sub(r'(<meta property="og:url" content=")[^"]*(")', rf"\g<1>{en_url(cfg['en'])}\g<2>", html)
    html = re.sub(r'(<link rel="canonical" href=")[^"]*(")', rf"\g<1>{en_url(cfg['en'])}\g<2>", html)
    html = html.replace('"inLanguage": "zh-CN"', '"inLanguage": "en"')
    # hreflang：三向互指（旧的删掉重建；无 hreflang 的页面插在 canonical 后）
    hreflang = (f'<link rel="alternate" hreflang="zh-CN" href="{zh_url(zh_name)}">\n'
                f'<link rel="alternate" hreflang="en" href="{en_url(cfg["en"])}">\n'
                f'<link rel="alternate" hreflang="x-default" href="{en_url(cfg["en"])}">')
    html = re.sub(r'<link rel="alternate" hreflang="[^"]*" href="[^"]*">\n?', "", html)
    html = re.sub(r'(<link rel="canonical" href="[^"]*">)', rf"\g<1>\n{hreflang}", html, count=1)

    # 4. 相对资源路径加 ../（图片、css、js；跳过 http/锚点/已生成的英文页名）
    en_names = {c["en"] for c in PAGES.values()}
    def fix_asset(m):
        attr, val = m.group(1), m.group(2)
        if (val.startswith(("http", "//", "#", "../", "mailto:", "tel:", "data:"))
                or val in en_names or not ASSET_EXT.search(val)):
            return m.group(0)
        return f'{attr}="../{val}"'
    html = re.sub(r'(src|href)="([^"]+)"', fix_asset, html)
    html = re.sub(r"url\('(?!(?:http|\.\./|data:))([^']+)'\)", r"url('../\1')", html)

    # 5. 语言脚本：去掉 language.js（会按 localStorage 覆盖回中文），换成纯链接切换
    html = re.sub(r'<script src="\.\./language\.js[^"]*"></script>\n?', "", html)
    html = html.replace('<script src="../mobile-nav.js"></script>',
                        f'<script>window.__zhPage="../{zh_name if zh_name != "index.html" else "index.html"}";</script>\n'
                        '<script src="lang-switch.js"></script>\n'
                        '<script src="../mobile-nav.js"></script>')

    out = os.path.join(ROOT, "en", cfg["en"])
    os.makedirs(os.path.dirname(out), exist_ok=True)
    open(out, "w", encoding="utf-8").write(html)
    status = f"{zh_name} -> en/{cfg['en']}  i18n {n_done}/{n_i18n}"
    if misses:
        status += f"  未翻译键: {sorted(set(misses))}"
    print(status)


for zh_name, cfg in PAGES.items():
    build(zh_name, cfg)
