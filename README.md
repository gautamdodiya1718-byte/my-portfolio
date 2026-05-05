# SEO Portfolio — GitHub Pages Deploy

Target live URL:

`https://gautamdodiya1718-byte.github.io/seo-portfolio/`

## Important
This repository should be named **`seo-portfolio`** on GitHub to get that exact URL path.

## Why the previous setup failed
A custom-domain `CNAME` redirects Pages traffic to a custom domain. For a project URL (`...github.io/seo-portfolio/`), remove `CNAME`.

## Publish steps
1. Create (or rename) the GitHub repo to: `seo-portfolio`
2. Push this code to `main`:
   ```bash
   git remote add origin https://github.com/gautamdodiya1718-byte/seo-portfolio.git
   git push -u origin main
   ```
3. Open **Settings → Pages** in the `seo-portfolio` repo.
4. Set **Source = GitHub Actions**.
5. Open **Actions** and confirm `Deploy static site to GitHub Pages` is green.
6. Open live URL:
   `https://gautamdodiya1718-byte.github.io/seo-portfolio/`

## If it still does not load
- Wait 1–3 minutes after first successful deploy.
- Hard refresh browser (`Ctrl/Cmd + Shift + R`).
- Check repo is **Public**.
- Confirm no custom domain is set in Pages.

## Optional custom domain later
If you later want `gautamdodiya.com`, add `CNAME` back and configure DNS.
