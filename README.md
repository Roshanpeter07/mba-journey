# mba-journey

A modular, static memory-book scaffold for an MBA journey. It uses semantic HTML, vanilla ES modules and plain CSS, with no build step or third-party runtime dependencies.

The site is intentionally a framework: names, photographs, routes, milestones and conversation excerpts have not been added. Populate it only with verified material that the people involved have agreed to share. Keep private WhatsApp exports, credentials and unlicensed music out of this repository.

## Project structure

```text
.
├── .github/workflows/deploy.yml
├── public/
│   ├── audio/
│   ├── fonts/
│   ├── icons/
│   └── images/
├── src/
│   ├── data/                 # Empty, documented content collections
│   ├── scripts/              # Page behavior and small components
│   └── styles/               # Design foundations and component styles
├── index.html
├── .editorconfig
└── .gitignore
```

## Preview locally

1. Open this folder in VS Code.
2. In Terminal, go to the repository folder and start a local static server:

   ```sh
   python3 -m http.server 8000
   ```

3. Visit [http://localhost:8000](http://localhost:8000).
4. Stop the server with `Control-C` when you are finished.

Serving over HTTP lets the browser load the JavaScript modules correctly. No package installation is required.

## Add content carefully

- `src/data/friends.js`, `chapters.js`, `milestones.js`, `conversations.js` and `routes.js` are empty on purpose; each describes the shape for future verified entries.
- Avoid adding raw chat exports. Add only a short, checked excerpt when the speaker has agreed to its use, and remove details that would expose private information.
- Add photographs only after getting consent from identifiable people. Keep originals and backups somewhere private.
- Add audio only when you have the rights to use it. The player stays disabled until an audio source is deliberately configured.
- Use `public/images/`, `public/fonts/`, `public/audio/` and `public/icons/` for reviewed assets. The folders contain notes or a small site icon, not personal material.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` prepares the static files and deploys on pushes to `main`, or when run manually from the Actions tab. To enable it:

1. In the repository on GitHub, open **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Review the repository visibility and who should be able to view the site before enabling Pages. GitHub Pages access for private repositories depends on the account or organization plan. See [GitHub's Pages publishing-source guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
4. After reviewing and committing the scaffold, push to `main` to start deployment. No changes have been pushed by this setup.

The workflow needs the `pages: write` and `id-token: write` permissions required by GitHub Pages deployments. Its output is the repository's Pages site URL, shown in the Actions run and the Pages settings.
