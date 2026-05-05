# Gautam Dodiya Portfolio

Static portfolio site (HTML/CSS/JS) for SEO case studies, systems, and results.

## Local preview

Open `index.html` directly or run a static server:

```bash
python3 -m http.server 8080
```

Then open: `http://localhost:8080`

## Deployment options

### Option A — `gautamdodiya1718-byte.github.io/my-portfolio/` (project pages)
1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Set source to **Deploy from a branch**.
4. Branch: `main`, folder: `/ (root)`.
5. Save and wait ~1–5 minutes.

### Option B — `gautamdodiya.github.io` (root GitHub Pages URL)
To get `https://gautamdodiya.github.io`, GitHub requires:
1. GitHub username must be `gautamdodiya`, and
2. Repository name must be exactly `gautamdodiya.github.io`.

If your username is different, you cannot claim that exact root URL.

### Option C — Custom domain `gautamdodiya.com`
This repo includes a `CNAME` file for `gautamdodiya.com`.

Steps:
1. In **Settings → Pages**, set source to `main` branch.
2. In your DNS provider, add:
   - `A` records for apex domain to GitHub Pages IPs
   - `CNAME` for `www` to `<your-username>.github.io`
3. Wait for DNS propagation.
4. Enable **Enforce HTTPS** in GitHub Pages.

## Notes
- If you previously enabled Pages on a different branch (like `gh-pages`), update it to `main`.
- If your site is still old, clear browser cache and hard-refresh.
