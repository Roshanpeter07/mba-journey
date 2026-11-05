# mba-journey

A modular, static memory book for an MBA journey. Chapter 1 now opens with two exact messages from 17 September 2024, followed by the approved title and five friends' names. It uses semantic HTML, vanilla ES modules and plain CSS, with no build step or third-party runtime dependencies.

## Preview locally

1. Open this repository folder in VS Code.
2. In Terminal, start a static server from the repository root:

   ```sh
   python3 -m http.server 8000
   ```

3. Visit [http://localhost:8000](http://localhost:8000).
4. Stop the server with `Control-C` when you are finished.

The site uses JavaScript modules, so preview it over HTTP rather than opening `index.html` directly. No package installation is needed.

## Chapter 1 content

- `src/data/chapters.js` holds the approved chapter title and date.
- `src/data/conversations.js` holds only the two approved opening messages, with their exact times.
- `src/data/friends.js` holds the five approved names: Roshan, Naveen, Shailesh, Rithvik and Rishiram.
- `src/scripts/components/chapter-one.js` renders those data modules into the page.
- `src/styles/components/chapter-one.css` contains the opening and chapter presentation.

The private WhatsApp export is not copied into this repository. Group creation details and any further application, essay or deadline messages remain out of the page until their exact wording and dates are checked against the original export. The page includes a neutral placeholder for that material. No personal photographs or descriptions are included.

## Content and privacy

- Keep private WhatsApp exports, credentials and unlicensed music outside this repository.
- Add only accurate excerpts that have been approved for the site, with any needed redactions.
- Add photographs only after getting consent from identifiable people.
- Add audio only when you have the rights to use it. The player stays disabled until an audio source is deliberately configured.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` prepares the static files and deploys on pushes to `main`, or when run manually from the Actions tab. To enable it:

1. In the repository on GitHub, open **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Review the repository visibility and who should be able to view the site before enabling Pages. GitHub Pages access for private repositories depends on the account or organization plan. See [GitHub's Pages publishing-source guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
4. Commit and review the changes before pushing to `main` to start deployment. No changes have been pushed or published as part of this work.

The workflow needs the `pages: write` and `id-token: write` permissions required by GitHub Pages deployments. Its output is the repository's Pages site URL, shown in the Actions run and the Pages settings.
