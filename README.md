# SpendWise — Personal Expense & Budget Tracker

## Project Description
SpendWise is a responsive, lightweight web application designed to help individuals track their daily income and expenses in real time. Built with clean front-end web technologies and browser `localStorage`, it allows users to record financial transactions, monitor their net balance, and manage personal budgets effortlessly from any device.

## Technologies Used
- **HTML5:** Semantic structure and layout.
- **CSS3:** Responsive styling, Flexbox layout, and clean UI cards.
- **JavaScript (ES6+):** DOM manipulation, dynamic calculations, and `localStorage` data persistence.
- **Git & GitHub:** Version control and source code hosting.
- **Netlify:** Continuous deployment and live web hosting.

## GitHub Repository Information
- **Repository Name:** `SpendWise`
- **Owner:** Simon Ohure (`@pharynixoku`)
- **Repository URL:** `https://github.com/pharynixoku/SpendWise`
- **Visibility:** Public

## Live Netlify Website URL
- **Live Site:** [https://spendwise-simon.netlify.app](https://spendwise-simon.netlify.app) *(Update this link with your custom Netlify subdomain after deploying)*

## Deployment Process Summary
1. **Repository Setup:** Organized all static assets (`index.html`, `style.css`, `script.js`, and `README.md`) in the root directory and pushed the codebase to a public GitHub repository (`pharynixoku/SpendWise`).
2. **Netlify Integration:** Logged into Netlify, selected **Add new site > Import an existing project**, authorized GitHub, and linked the `SpendWise` repository.
3. **Build Configuration:** Left the build command blank (as SpendWise is a static site) and set the publish directory to `/` (root), then triggered the initial deployment.
4. **Custom Domain Configuration:** Navigated to **Site configuration > Change site name** in Netlify and updated the random default URL to a clean, project-specific subdomain.
5. **Continuous Deployment Verification:** Made a visible UI version update in `index.html`, committed and pushed the change to the `main` branch on GitHub, and confirmed that Netlify automatically rebuilt and updated the live website within seconds.

## Challenges Encountered During Deployment
- **Relative Asset Paths:** Ensuring that `style.css` and `script.js` used clean relative paths (`href="style.css"`) rather than local drive paths so that Netlify's Linux servers resolved all files without 404 errors.
- **Cache Refresh on Live Updates:** After pushing the continuous deployment test update, the browser initially served a cached version of the page; performing a hard refresh (`Ctrl + Shift + R`) verified the live update immediately.

## Lessons Learned
- **Automated CI/CD Workflows:** Connecting GitHub directly to Netlify eliminates manual file uploads and ensures the production site always reflects the latest `main` branch commit.
- **Root Directory Organization:** Keeping `index.html` in the root folder simplifies static site hosting configuration across cloud platforms.
- **Post-Deployment Testing:** Always verify functionality, responsive layout, and browser storage (`localStorage`) on the live HTTPS URL rather than relying solely on local testing.
