# ProjectGrid
A ruled grid of projects: cells share hairline borders, with no gaps or shadows.

- Consumer provides `items`: `{ status, title, description, tags?, image?, href? }`. `status` is a short uppercase line such as "Đang vận hành, 06.2026" or "Hoàn thành".
- `columns` defaults to 3 and drops to 1 on phones. Give it a multiple of the column count, or accept one short row at the end.
- Images are optional per cell and bleed to the cell edges. External `href`s open in a new tab.
