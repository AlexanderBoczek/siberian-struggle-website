# Siberian Struggle Website - Setup Instructions for Claude Code

## Project Overview
This is the website for "Siberian Struggle", an indie survival game. The website includes:
- `index.html` - Main landing page
- `devlog.html` - Dev Diaries page
- `impressum.html` - Legal imprint page (German requirement)

## Task for Claude Code

### 1. Initialize Git Repository
```bash
cd /path/to/siberian-struggle-website
git init
git add .
git commit -m "Initial commit: Siberian Struggle website"
```

### 2. Create GitHub Repository
Create a new public repository on GitHub named `siberian-struggle` and push:
```bash
git remote add origin https://github.com/USERNAME/siberian-struggle.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages
After pushing, enable GitHub Pages in the repository settings:
- Go to Settings → Pages
- Source: Deploy from branch
- Branch: main, folder: / (root)
- Save

The site will be available at: `https://USERNAME.github.io/siberian-struggle/`

### 4. (Optional) Custom Domain Setup
If using a custom domain like `siberianstruggle.de`:

1. Create a CNAME file in the repo root:
```
siberianstruggle.de
```

2. Add DNS records at your domain provider:
- Type A records pointing to GitHub's IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- Or CNAME record: `www` → `USERNAME.github.io`

3. In GitHub repo Settings → Pages → Custom domain: enter `siberianstruggle.de`

## File Structure
```
siberian-struggle-website/
├── index.html      # Main page
├── devlog.html     # Dev diaries
├── impressum.html  # Legal imprint
├── CNAME           # (create if using custom domain)
└── README.md       # This file
```

## Social Links (already configured)
- Discord: https://discord.gg/heFBjNgSu8
- X/Twitter: https://x.com/sibstru
- YouTube: https://www.youtube.com/@sibstru
- Reddit: https://www.reddit.com/r/siberianstruggle/

## Notes
- Email placeholder is set to: kontakt@siberianstruggle.de (needs to be set up separately)
- Steam link is placeholder (#) until Steam page exists
