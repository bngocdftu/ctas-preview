# LecturerCard
A portrait card for one lecturer, used in the scrolling "Giảng viên" strip.

- Consumer provides `name` with the academic title as the faculty writes it (`TS`, `ThS`, `ThS NCS`), `role` (position, else field), `photo` (from the lecturer's profile) and `href` (their profile page).
- Without `photo` the card shows the first letter of the given name (the last word) on `brand`.
- Cards are 230px wide (170px on phones). In the strip, repeat the list twice and translate by -50% so the loop is seamless; pause on hover.
