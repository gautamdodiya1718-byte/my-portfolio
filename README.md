# Gautam Dodiya Portfolio

Static portfolio site (HTML/CSS/JS).

## Current issue: site not loading after merge
If you see `DNS_PROBE_FINISHED_NXDOMAIN` for `gautamdodiya.com`, this is a **DNS/domain setup issue**, not a code or PR merge issue.

### Why this happens
- GitHub Pages is deployed successfully.
- But custom domain DNS is not pointing to GitHub Pages yet (or domain is not registered/active).

## Immediate fix (get site online now)
1. Open **GitHub → Settings → Pages**.
2. Remove the custom domain temporarily.
3. Save.
4. Open the default Pages URL:
   - `https://gautamdodiya1718-byte.github.io/my-portfolio/`

This confirms the site code is live.

## Then configure custom domain correctly
For `gautamdodiya.com`:

### DNS records at your domain provider
- Add A records for apex (`@`) to GitHub Pages IPs:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Add CNAME record:
  - Host: `www`
  - Value: `gautamdodiya1718-byte.github.io`

### GitHub Pages settings
1. In **Settings → Pages**, set source to **GitHub Actions**.
2. Add custom domain: `gautamdodiya.com`.
3. Wait for DNS propagation (5 min to 24 hours).
4. Enable **Enforce HTTPS**.

## About `gautamdodiya.github.io`
That exact root URL only works if:
1. GitHub username is exactly `gautamdodiya`
2. Repo name is exactly `gautamdodiya.github.io`

With username `gautamdodiya1718-byte`, the default URL is:
`https://gautamdodiya1718-byte.github.io/my-portfolio/`

## Local preview
```bash
python3 -m http.server 8080
```
