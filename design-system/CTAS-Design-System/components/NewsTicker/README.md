# NewsTicker
The "TIN MỚI" strip: a red label, latest headlines scrolling left, and an "all news" link.

- Consumer provides `items`: `{ date, title, href }`, newest first, up to 20.
- `label` defaults to "TIN MỚI" ("LATEST" in English); `allHref` and `allLabel` set the right-hand link, hidden on phones.
- `seconds` sets one loop's duration (default 120). The strip pauses on hover and slows to near-still with `prefers-reduced-motion`.
- It sits over the hero with `shadow-float`, the only shadow in the system.
