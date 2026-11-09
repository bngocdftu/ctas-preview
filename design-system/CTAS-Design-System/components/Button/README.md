# Button
Square action button in four variants; renders an `<a>` when given `href`, otherwise a `<button>`.

- `variant`: `primary` (maroon-deep, the default; nav "Đăng ký ngay", "Xem tất cả"), `brand` (FTU red; the one main call to action in a view), `outline` (secondary action beside a brand button), `light` (cream, only on maroon bands).
- `children`: the label. End with for a link that stays on the site and ↗ for one that leaves it. External `href`s open in a new tab automatically.
- `block` makes it full width (mobile menu, product card footers).
- Do: one `brand` button per view. Don't: round the corners, add icons, or put two `brand` buttons side by side.
