# Carolina Berzina - English Teacher Website

A simple static website for Carolina Berzina, English teacher.

## Structure

- `/` - Root page (Russian, default)
- `/ru/` - Russian version
- `/it/` - Italian version

## Local Testing

When testing locally, use a web server instead of opening files directly in the browser. The directory structure requires a server to properly serve `index.html` files.

### Quick local server options:

**Python 3:**
```bash
python -m http.server 8000
```
Then open http://localhost:8000

**Node.js (with http-server):**
```bash
npx http-server -p 8000
```

**PHP:**
```bash
php -S localhost:8000
```

## GitHub Pages

On GitHub Pages, the site will work automatically. GitHub Pages automatically serves `index.html` when you navigate to a directory (e.g., `/ru/` serves `/ru/index.html`).

## Deployment

Simply push the files to a GitHub repository and enable GitHub Pages in the repository settings. The site will be available at `https://yourusername.github.io/repository-name/`
