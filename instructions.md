## 1. Goal and constraints for Codex

1. Build the **phase-0 Sevioraé marketing site**, no ecommerce / cart yet.
2. Use **pure HTML5 + CSS + minimal JS**, no frameworks.
3. Follow the given **folder structure**, **color system**, and **page list**.
4. Ensure the site is **responsive** (good on mobile & desktop) using CSS layout & media queries and a correct viewport meta tag.
5. All styling in `/assets/css/main.css` (plus optional `/assets/css/components.css`), all behavior in `/assets/js/main.js`.
6. Use **semantic HTML** (`<header> <nav> <main> <section> <footer>` etc.) for accessibility and SEO.

---

## 2. Project & folder structure (Codex must create this)

Create a repository with the following tree:

```text
seviorae-site/
├── index.html
├── shop/
│   └── index.html
├── concerns/
│   └── index.html
├── science/
│   └── index.html
├── learn/
│   ├── index.html
│   ├── acne-vs-oily-skin/
│   │   └── index.html
│   ├── dark-spots-melasma-pih/
│   │   └── index.html
│   ├── skin-barrier-repair/
│   │   └── index.html
│   └── facial-oils-in-routine/
│       └── index.html
├── products/
│   ├── acne-prone-skin/
│   │   └── index.html
│   ├── anti-aging/
│   │   └── index.html
│   ├── dark-spot-pigmentation/
│   │   └── index.html
│   ├── oily-skin-pore-reduction/
│   │   └── index.html
│   └── skin-barrier-repair/
│       └── index.html
├── support/
│   ├── index.html
│   └── shipping-returns/
│       └── index.html
├── contact/
│   └── index.html
├── privacy/
│   └── index.html
├── terms/
│   └── index.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   └── components.css   # optional split, can stay empty initially
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── logo-seviorae.svg
│       ├── hero/
│       │   └── hero-bottle-1.jpg        # placeholder images ok
│       ├── products/
│       │   ├── acne-prone-skin.jpg
│       │   ├── anti-aging.jpg
│       │   ├── dark-spot-pigmentation.jpg
│       │   ├── oily-skin-pore-reduction.jpg
│       │   └── skin-barrier-repair.jpg
│       └── ui/
│           ├── icon-leaf.svg
│           ├── icon-drop.svg
│           └── icon-ritual.svg
├── favicon.ico
├── robots.txt
└── sitemap.xml
```

GitHub Pages will look for `index.html` at the root as the entry point.

---

## 3. Global tech rules Codex must follow

### 3.1 HTML

For **every** page:

1. Use HTML5 doctype: `<!DOCTYPE html>`.
2. `<html lang="en">`.
3. In `<head>` include at least:

   * `<meta charset="UTF-8">`
   * `<meta name="viewport" content="width=device-width, initial-scale=1.0">` (critical for responsive).
   * A unique `<title>` per page, 50–60 characters max, SEO-friendly.
   * A unique `<meta name="description">` per page, ~50–160 chars.
4. Link CSS in `<head>` using a correct relative path, e.g. on root:

   ```html
   <link rel="stylesheet" href="/assets/css/main.css">
   ```

   For pages in subfolders, still use absolute path from root (`/assets/...`), not relative, to avoid mistakes.
5. At the end of `<body>`, before `</body>`, include:

   ```html
   <script src="/assets/js/main.js"></script>
   ```

   (Loading JS at the end avoids blocking rendering.)
6. Use semantic sections: `<header> <nav> <main> <section> <article> <footer>` as appropriate.
7. Include an in-page “skip to content” link at top for accessibility:

   ```html
   <a href="#main-content" class="skip-link">Skip to content</a>
   ```

### 3.2 CSS

All styling must be in `assets/css/main.css` (and optionally `components.css`), linked as above.

Use this **color token system** as CSS variables in `:root`:

```css
:root {
  --sev-bg: #F5EEE7;
  --sev-text: #111827;
  --sev-gold: #C5A46D;
  --sev-blush: #E8C9C0;
  --sev-gray-light: #E5E7EB;
  --sev-gray-medium: #9CA3AF;
  --sev-white: #FFFFFF;

  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
    "Segoe UI", sans-serif;
  --font-serif: "Georgia", "Times New Roman", serif;
}
```

Layout rules:

* Base `body`:

  * `background-color: var(--sev-bg);`
  * `color: var(--sev-text);`
  * `font-family: var(--font-sans);`
* `.page` is a flex column, `min-height: 100vh;` so footer stays at bottom.
* `.container` is centered, `max-width: 1120px; padding: 0 1.5rem;`.

Header/nav:

* `.site-header` sticky, blur background, border bottom.
* Desktop: `.site-nav` visible only at `min-width: 900px`.
* Mobile: `.nav-toggle` visible below 900px, `.mobile-nav` hidden by default.

Buttons: define `.btn`, `.btn-primary`, `.btn-secondary` using the color system (we already drafted styles; Codex should implement them exactly).

Footer: 1–4 column grid using media queries.

CSS should include one main media query at around `min-width: 720px` and another at `min-width: 900px` to adjust layout for tablets and desktops (e.g., grid columns, nav visibility).

### 3.3 JS (`assets/js/main.js`)

Two responsibilities only:

1. **Mobile nav toggle**

   * On click of `.nav-toggle`, toggle `mobile-nav--open` on `#mobile-menu`, set `aria-expanded` true/false, and switch `display` between `block` and `none`.

2. **Dynamic year**

   * Set text of `#year` span in footer to the current year.

No extra behavior needed for phase 0.

---

## 4. Shared layout all pages must reuse

All pages share the same header + footer + basic structure.

### 4.1 Header

* Logo left: text “Sevioraé” (serif, uppercase tracking).
* Desktop nav right with tabs: Home, Shop, By Concern, Science, Learn, About, Support.
* On mobile: hamburger button + slide-down menu.

Each page must mark its active link with `nav-link--active` (desktop) and `mobile-nav-link--active` (mobile).

### 4.2 Footer

Four columns:

1. Brand description + “A brand by Namah Group Product & Services (OPC) Pvt Ltd.”
2. Explore: Shop, By Concern, Science, Learn
3. Support: FAQ, Shipping & Returns, Contact
4. Legal: Privacy, Terms & Disclaimer

Bottom strip: `© YEAR Sevioraé. All rights reserved.` with `YEAR` filled by JS.

### 4.3 `<main>` structure

Each page’s `<main>`:

```html
<main id="main-content" class="site-main" role="main">
  <div class="container">
    <!-- Page-specific sections -->
  </div>
</main>
```

Use `.home-section`, `.section-header`, `.section-title`, `.section-subtitle`, `.card-grid`, `.info-grid`, etc. consistently on all pages for layout.

Codex should ensure `main.css` contains layout rules for:

* `.home-section` (padding, spacing)
* `.section-header`, `.section-title`, `.section-subtitle`
* `.card-grid` variants (`--products`, `--concerns`)
* `.info-grid` (auto 1–3 columns depending on viewport)
* `.safety-strip` (distinct background, maybe blush tint)
* `.email-form`, `.email-input`, `.pill`, `.product-card`, `.concern-list`, etc.

---

## 5. Page-by-page content specification

### 5.1 `index.html` (Home)

Sections required in order:

1. **Hero**

   * Kicker: “Research-informed facial oil blends”
   * H1: message about ultra-luxury facial oils crafted for specific concerns.
   * Short subtitle describing 5 founding blends (acne-prone, dark spots, oily skin, barrier, anti-aging).
   * Two buttons: primary → `/shop/`, secondary → `/concerns/`.

2. **5 founding blends**

   * Grid of 5 product “cards”, each:

     * Name `[Acne-Prone Skin Blend, Anti-Aging Blend, Dark Spot & Pigmentation Blend, Oily Skin & Pore Balance Blend, Skin Barrier Repair Blend]`.
     * One-line tagline (cosmetic language, not medical).
     * Status text “Launching soon” with a pill style.
     * “View details” link to the corresponding `/products/.../`.

3. **Browse by concern**

   * Two groups:

     * “Available at launch”: links to 5 product pages.
     * “Planned blends”: list the remaining concerns as plain text (no links yet), with a short note explaining they are part of the roadmap.

4. **How Sevioraé blends are developed**

   * 3 columns (or stacked on mobile) explaining:

     * Concern-first thinking
     * Essential oils & plant oils
     * Iterative formulation
   * CTA button to `/science/`.

5. **Safety, patch testing & medical care** (safety strip)

   * Bullet list emphasising:

     * Patch test
     * Don’t use on broken/actively inflamed skin
     * Cosmetic, not medicine
     * Consult dermatologist for diagnosed conditions

6. **The Sevioraé ritual**

   * Three blocks: Morning routine, Evening routine, Layering with actives.
   * No prescriptive product steps (because formulations aren’t fixed yet), just conceptual guidance.

7. **Created by Sakshi Varshney**

   * Short story: Sakshi as keen learner, essential oils + skin science, building concern-focused brand.
   * Button to `/about/`.

8. **Email waitlist**

   * Simple email input + “Join the waitlist” button (non-functional or simple `action="#"` for now).
   * Note about consent (“You can unsubscribe at any time.”).

Codex should base the structure on the last `index.html` we drafted, but ensure **all classes** used are defined in `main.css` so styling is visible.

---

### 5.2 `shop/index.html`

Purpose: overview of the 5 founding blends (phase 0 = preview only).

Sections:

1. Page header: H1 “Shop the founding collection” + brief description that blends are in development / launching soon.
2. Card grid of the 5 blends (same style as home, but add placeholders for 15 ml / 30 ml, pricing TBA).
3. Callout linking to `/concerns/` and `/learn/` for more education.

---

### 5.3 `concerns/index.html`

Purpose: index of all 20 concerns.

Sections:

1. Page header: H1 “Browse by skin concern”.
2. Two groups:

   * Available at launch: 5 linked items (product pages).
   * Planned: list all others, optionally grouped (pigmentation, inflammatory, texture, etc.), but no links for now.

---

### 5.4 `science/index.html`

Purpose: explain research philosophy and safety.

Sections:

1. Intro: what “research-informed” means for Sevioraé.
2. Subsections summarising themes from the literature you provided (acne/ inflammatory skin/ barrier repair/ pigmentation/ photodamage) in **plain language**, no fabricated data.
3. Safety section mirroring the home safety strip, with slightly more detail.
4. Future plans (clinical tests, dermatologist input).

---

### 5.5 `learn/index.html` + 4 guide pages

`learn/index.html`:

* H1 “Learn” + short explanation.
* List of 4 guides, each with a short abstract + link.

Each guide page:

1. Intro explaining the topic in simple language.
2. Sections broken by H2/H3 headings.
3. Cross-links to relevant product pages and to `/science/`.

Topics:

* `learn/acne-vs-oily-skin/`
* `learn/dark-spots-melasma-pih/`
* `learn/skin-barrier-repair/`
* `learn/facial-oils-in-routine/`

(Exact text can be created using your research but must stay explicitly cosmetic and non-diagnostic.)

---

### 5.6 Product pages (`/products/.../index.html`)

Each of the 5 product pages has the same template:

Sections:

1. Hero block: product name, concern, tag “Launching soon”, short summary, two size options (15/30 ml, marked “coming soon”).
2. “What this blend is designed to support” – bullet points, purely cosmetic.
3. “Key components & rationale” – mention only the essential/plant oil categories you’re comfortable naming; do not expose detailed formulas.
4. “How we expect this to fit into a routine” – high-level AM/PM usage ideas, plus a note to wait for final launch instructions.
5. Safety section (patch test etc.), referencing general safety language.
6. Cross-links: to relevant Learn guide and Science page.

---

### 5.7 Support, Contact, Legal

* `support/index.html`: FAQ with general questions (what Sevioraé is, launch timing, how to join waitlist, basic usage and safety, India-only shipping at launch, payment methods to be supported).
* `support/shipping-returns/index.html`: explain how you plan to handle India-only shipping and simple, fair return policy once products launch (mark clearly as “applies from launch onward”).
* `contact/index.html`: simple contact form or mailto link; can reuse `.email-form` styling.
* `privacy/index.html`, `terms/index.html`: basic policy skeletons, matching current best practices (Codex can generate simple template text but must keep it generic, no fake company details).

---

## 6. SEO & meta requirements Codex must apply

For **every page**:

1. Exactly **one `<h1>` per page**, matching or very close to the title tag.
2. Unique `<title>` and `<meta name="description">` that:

   * Summarise the page
   * Use plain, non-hype language
   * Stay within typical length ranges (~50–60 chars for title, ~50–160 for description).
3. Use descriptive, clean URLs (we’ve already set them).
4. Internal linking:

   * Home → Shop, Concerns, Science, Learn
   * Product pages ↔ Learn guides ↔ Science
   * Footer links as described.

`robots.txt`:

* Allow all (phase 0; can be adjusted later):

  ```txt
  User-agent: *
  Disallow:
  Sitemap: https://seviorae.com/sitemap.xml
  ```

`sitemap.xml`:

* Standard XML sitemap listing all 20 HTML pages; Codex can generate a straightforward static file.