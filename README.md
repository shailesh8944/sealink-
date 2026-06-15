# Sealink — Company Website

Static company website for **Sealink Electric and Software Pvt Ltd**.

## Live site

After GitHub Pages is enabled, the site will be available at:

**https://shailesh8944.github.io/sealink-/**

## Local preview

```bash
cd sealink-
python -m http.server 8080
```

Open http://localhost:8080

## Deploy to GitHub Pages

1. Push this repo to `main` on GitHub.
2. In the repo: **Settings → Pages → Build and deployment**
3. Set **Source** to **GitHub Actions**.
4. Push to `main` — the workflow `.github/workflows/deploy-pages.yml` publishes automatically.

## Custom domain (optional)

Add a `CNAME` file with your domain (e.g. `www.yourcompany.com`) and configure DNS at your registrar.

## Edit content

- Main page: `index.html`
- Styles: `css/styles.css`
- Scripts: `js/main.js`
