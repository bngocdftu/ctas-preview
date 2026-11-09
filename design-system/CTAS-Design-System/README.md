CTAS is the website of the Trường Công nghệ và Khoa học ứng dụng (College of Technology and Applied Science), a member school of Foreign Trade University (FTU), Hanoi. The system takes FTU's red and pairs it with a square, editorial layout in the manner of a research university site: serif headlines, sans body, hairline borders, no rounded corners.

## Content fundamentals

- Write in Vietnamese first, with full diacritics. English is a second language toggle, never mixed into a Vietnamese sentence except for proper technical names (Docker Swarm, LoRA, RAG, Moodle).
- Voice: an institution speaking plainly about real work. State what happened, who did it, and the numbers. "Sinh viên K63 ngành Khoa học máy tính giành Giải Nhất toàn quốc", not "Hành trình đầy cảm hứng…".
- Name people with their academic title as written by the faculty: `TS`, `ThS`, `ThS NCS`, `PGS.TS`, `CN`. Cohorts as `K63`, `K64`, `K65`.
- Dates in news meta are `dd.mm.yyyy` (`16.06.2026`); a range is `18-22.09.2026`. Month headers in timelines read `THÁNG 10, 2026`.
- Do not use the em dash, the en dash, the middle dot or the right arrow. Use a hyphen, a comma, a colon, or a new sentence.
- No emoji in UI chrome. Emoji that appear inside quoted fanpage posts stay as published.
- Section kickers (eyebrows) are short noun phrases: `TIN TỨC & SỰ KIỆN`, `ĐỘI NGŨ`, `STUDENT-LED PROJECTS`.
- Buttons say what happens: `Đọc bài` opens an article on this site; `Tìm hiểu thêm ↗` opens an external product (ftds.online). The ↗ arrow means "leaves the site"; internal links carry no arrow.
- Every compound word is one unit: never break a line between the syllables of `máy tính`, `khoa học`, `dữ liệu`, `trí tuệ`, `nhân tạo`, `sinh viên`. Join them with a no-break space (the site's `extra.js` does this automatically).

## Visual foundations

### Color

- Pages sit on `surface` (cream paper). Cards and boxes are `surface-raised`. Group quiet content on `surface-soft`.
- Copy is `ink`; secondary copy (dates, excerpts, captions) is `ink-muted`. Never set body copy in `brand-ink`.
- `brand` is FTU red. Spend it on: primary buttons, the CTAS mark square, the 4px top rule (`rule-top`) on article covers and the article aside, the label bar of the news ticker. One brand-filled button per view.
- `brand-ink` is the red for text: eyebrows, dates in meta rows, project status labels, tag text, link hover.
- Dark bands use `maroon` with `cream` text and `blush-soft` secondary text; on a band, the highlighted card is filled `blush` with `maroon-deep` text.
- Chips and tags: `tint` fill with `brand-ink` text.
- The default theme is light. Dark is offered through the moon toggle and swaps surfaces to maroon-black; the red accents lift to `blush` for text.

### Type

- Exactly two families on any page, never a third. `display` (Source Serif 4) for H1-H3, stat numbers and the big pull quote. `sans` (Open Sans) for everything else. Both load from Google Fonts.
- H1 `display-xl`, section H2 `display-lg`, article title `display-md`, card titles `title`.
- Body copy `body`, justified on both sides. Intro paragraphs `lead`, justified. Narrow cards (`body-sm`) are left-aligned so justification does not open wide gaps.
- Kickers use `eyebrow` (uppercase, 0.12em tracking) preceded by the two-dot mark: a blush dot and a brand dot, 10px each, overlapping 4px.
- Status and field labels use `label` (uppercase, 0.14em).
- On phones H1 clamps to 30-40px; never let a heading overflow its column.

### Spacing and layout

- Content width 1240px max. Side gutter `space-4` (16px) on phones, `space-5` and up on desktop.
- Sections are `space-9` apart on desktop and `space-8` on phones.
- Card padding `space-5`; grid-cell padding `space-6`.
- Grids are ruled, not floating: adjacent cells share a `hairline` border in `line-strong` instead of gaps and shadows (project grid, focus-area grid, stat strip).
- Two-column article layout: body column plus a 300px aside, `space-8` apart; stacks below 900px.

### Shape, borders, elevation

- Square system. `radius-none` everywhere. `radius-round` only for the FTU seal and the round "Liên hệ" CTA in the footer band.
- Borders, not shadows. Cards take a `hairline` in `line`. The only shadow is `shadow-float` under the hero news ticker.
- A 4px brand rule on top (`rule-top`) marks the primary object of a page: the article cover, the article aside, the lecturer name plate.
- Pull quotes carry a 6px brand rule on the left (`rule-side`).

### Imagery

- Use real photos from the faculty's own posts (cnkhdl.ftu.edu.vn and the KHOACNKHDL fanpage). No stock photos of anonymous people.
- Images are shown in full color. No grayscale filters.
- Where a post has no photo, show the media placeholder: a `brand` block with a faint 135° stripe, `CTAS` set in `display` and the category in `label`. Never substitute an unrelated stock image.
- Cover images are 16:10 in cards and up to 560px tall on article pages.

### Motion

- Hover: cards change border to `brand` and lift by 5px; photos scale to 1.04. 0.3-0.35s ease.
- Tickers (news headlines, lecturer cards) scroll linearly and pause on hover. Respect `prefers-reduced-motion` by slowing them to near-static.
- The homepage intro is the one orchestrated moment. Nothing else animates on load beyond a short fade-up.

### Focus and states

- Every interactive element shows a 2px solid `focus` ring with 2px offset.
- Primary button hover moves from `maroon-deep` to `brand`; brand buttons press to `brand-deep`.
- Active filter chips invert: `ink` fill with `surface` text.

## Iconography

- No icon library. The site uses a few typographic glyphs only: `↗` external link, `▾` dropdown, `☰` mobile menu, `✕` close, `☾`/`☀` theme toggle.
- Do not use the right arrow, the middle dot or the en dash anywhere. Separate items with a comma; write ranges with a hyphen (`18-22.09.2026`).
- List bullets are 6px squares in `blush` (on maroon) or `brand` (on blush).

## Logos and marks

- The FTU seal (`assets/Logos/ftu-seal.png`) appears in the top FTU bar, the nav and the footer strip, always round (`radius-round`), at 26-64px. It is FTU's mark: do not recolor, crop or redraw it.
- The CTAS mark is typographic: a `brand` square with a white `C`, followed by `CTAS` in bold `sans`. Build it with the `BrandMark` component; there is no image file for it.
- On phones the nav shows only the CTAS mark; the seal and the "Đại học Ngoại thương" line are hidden to save width.

## Components

- `Button`: actions. Variants `primary` (maroon-deep), `brand` (red), `outline`, `light` (on maroon bands).
- `Eyebrow`: section kicker with the two-dot mark.
- `Tag`: tech tags and category chips.
- `NewsCard`: news grid item with cover, category, date, title and excerpt.
- `MediaPlaceholder`: stands in for a missing photo.
- `ProductCard`: a product in the dark products band (LMS, FTULLM, Cloud) with bullets and two links.
- `ProjectGrid`: ruled grid of student-led projects.
- `LecturerCard`: portrait card for the lecturer ticker.
- `NewsTicker`: the "TIN MỚI" headline strip.
- `StatStrip`: ruled row of big numbers.
- `BrandMark`: the CTAS typographic mark.
