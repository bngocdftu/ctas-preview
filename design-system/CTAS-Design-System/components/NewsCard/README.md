# NewsCard
A news item in the news grid: cover, category chip, date, title, excerpt and a read link.

- Consumer provides `title`, `date` (`dd.mm.yyyy`), `category`, `excerpt` (about 200 characters), `href` (the article page) and `image` (the post's own first photo).
- Without `image` the card shows `MediaPlaceholder` with the category. Never pass a stock photo.
- `cta` defaults to "Đọc bài".
- Lay cards out in a 3-column grid with 22px gaps (2 columns under 1000px, 1 under 640px); cards in a row stretch to equal height.
