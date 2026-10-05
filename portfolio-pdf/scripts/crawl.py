#!/usr/bin/env python3
"""Crawl hamzajamal.design with headless Chrome (--dump-dom), convert each
page to markdown in content/, and collect every image URL into
content/images.json. Run from portfolio-pdf/."""
import json, re, subprocess, sys, html
from html.parser import HTMLParser
from urllib.parse import urljoin, urlparse

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
BASE = "https://hamzajamal.design"
PAGES = {
  "home": "/",
  "ad-studio": "/work/ad-studio",
  "imagineart-captions": "/work/imagineart-captions",
  "e-commerce-odetobeauty": "/work/e-commerce-odetobeauty",
  "walters-hospitality": "/work/walters-hospitality",
  "E-learning-management": "/work/E-learning-management",
  "xiangqi": "/work/xiangqi",
  "streak": "/work/streak",
}
SKIP = {"script", "style", "svg", "noscript", "template", "head", "video", "source"}
BLOCK = {"p", "li", "figcaption", "blockquote", "dt", "dd", "h1", "h2", "h3", "h4", "h5", "h6", "div", "section", "article", "header", "footer", "nav", "main", "ul", "ol", "dl", "figure", "tr", "td", "th", "table", "span"}

class MD(HTMLParser):
    def __init__(self, base):
        super().__init__(convert_charrefs=True)
        self.base = base; self.out = []; self.buf = []; self.stack = []; self.skip = 0
        self.images = []; self.links = []; self.cur_href = None; self.in_nav = 0
    def flush(self, prefix=""):
        t = " ".join("".join(self.buf).split())
        self.buf = []
        if t: self.out.append(prefix + t)
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in SKIP: self.skip += 1; return
        if self.skip: return
        if tag == "nav": self.in_nav += 1
        if tag == "img":
            src = a.get("src") or ""
            if src and not src.startswith("data:"):
                url = urljoin(self.base, src)
                self.images.append({"src": url, "alt": a.get("alt", ""), "srcset": a.get("srcset", "")})
                self.flush()
                self.out.append(f"![{a.get('alt','')}]({urlparse(url).path})")
            return
        if tag == "a":
            self.cur_href = a.get("href")
        if tag in ("h1","h2","h3","h4","h5","h6"):
            self.flush(); self.stack.append(("h", int(tag[1])))
        elif tag in ("p","li","figcaption","blockquote","dt","dd","td","th"):
            self.flush(); self.stack.append((tag, 0))
        elif tag in ("br",):
            self.buf.append(" ")
    def handle_endtag(self, tag):
        if tag in SKIP:
            self.skip = max(0, self.skip - 1); return
        if self.skip: return
        if tag == "nav": self.in_nav = max(0, self.in_nav - 1)
        if tag == "a":
            if self.cur_href and self.cur_href.startswith("http"):
                self.links.append(self.cur_href)
            self.cur_href = None
        if tag in ("h1","h2","h3","h4","h5","h6") and self.stack and self.stack[-1][0]=="h":
            lvl = self.stack.pop()[1]; self.flush("#"*lvl + " ")
        elif tag in ("p","li","figcaption","blockquote","dt","dd","td","th") and self.stack and self.stack[-1][0]==tag:
            self.stack.pop()
            prefix = {"li":"- ","figcaption":"_Caption:_ ","blockquote":"> ","dt":"**","dd":"","td":"| ","th":"| "}.get(tag,"")
            self.flush(prefix)
            if tag=="dt" and self.out and self.out[-1].startswith("**"): self.out[-1] += "**"
        elif tag in ("div","section","article","header","footer","main","figure","ul","ol","dl","table","tr"):
            self.flush()
    def handle_data(self, data):
        if self.skip: return
        self.buf.append(data)

all_images = {}
for slug, path in PAGES.items():
    url = BASE + path
    dom = subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--virtual-time-budget=12000", "--dump-dom", url], capture_output=True, text=True).stdout
    p = MD(url); p.feed(dom); p.flush()
    title = re.search(r"<title>(.*?)</title>", dom, re.S)
    lines = [f"# Source: {url}", f"Title tag: {html.unescape(title.group(1)) if title else ''}", ""]
    seen=set()
    for l in p.out:
        if l in seen and not l.startswith("!"): continue
        seen.add(l); lines.append(l); lines.append("")
    open(f"content/{slug}.md","w").write("\n".join(lines))
    all_images[slug] = p.images
    print(f"{slug}: {len(p.out)} blocks, {len(p.images)} images, {len(dom)//1024} KB dom")
json.dump(all_images, open("content/images.json","w"), indent=2)
