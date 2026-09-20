# Fusion 360 — Fine Dine Restaurant & Lounge (Clifton, Karachi)

A complete, modern, clean, customer-gaining, production-ready website for **Fusion 360**, located at GW Tower, Clifton Block 2, Karachi, Pakistan.

Built strictly upon the **Action-First Local UI/UX Design Blueprint** with pure HTML5, CSS3, and Vanilla JavaScript (zero external frameworks or runtime dependencies).

---

## 🌟 Highlights

- **Action-First Hero Action Dock**: Houses real-time live open/closed status, verified Google 4.9 rating (16 reviews), and primary/secondary CTAs.
- **100% Real Business Data**:
  - **Address**: Showroom No. 7, GW TOWER, Khayaban E Saadi Road, Block 2 Clifton, Karachi, 75600, Pakistan
  - **Phone**: +92 302 3213951
  - **Price Range**: Rs 1,000–6,000 per person
  - **Rating**: 4.9 ★ (16 Google reviews)
- **Verified Menu (40+ items across 10 categories)**:
  - Burgers (Double Beef Smash, C3 Burger, Crispy Zinger, Crunchy Jalapeno, Grilled Chicken, Grilled Chipotle)
  - Chicken Mains (Flaming Chicken, Grilled Chicken Steaks, Chicken Parmesan)
  - BBQ & Kababs (Beef Seekh Kabab, Chicken Seekh Kabab, Flaming Boti, Malai Boti)
  - Sharing Platters (Fusion Grand Platter, Chicken Platter, Kabab Platter)
  - Starters, Pastas, Sandwiches, Chinese, Beverages & Breads
  - All items include verified prices in PKR, descriptions, and authentic direct image URLs.
- **Timezone-Aware Live Status**: Calculates real-time open/closed status in `Asia/Karachi` time, handling after-midnight closing (2:00 AM / 2:30 AM / 3:00 AM) and 60-minute closing soon warnings.
- **Interactive Features**:
  - Category filter chips with sticky header
  - Debounced live search (120ms) with `aria-live` count
  - Native `<dialog>` modal for dish details with focus restoration
  - Native `<dialog>` lightbox for gallery with touch swipe (pointer events) & keyboard navigation
  - Horizontal scroll-snap reviews rail with keyboard arrow support
  - One-click "Copy address" with toast notification
  - Click-to-load Google Maps facade embed
  - Mobile sticky action bar (<768px)
- **Accessibility & SEO**:
  - Skip to main content link
  - Visible 3px `:focus-visible` focus ring
  - Full Schema.org `Restaurant` JSON-LD
  - Open Graph & Twitter Card metadata
  - Strict `@media (prefers-reduced-motion: reduce)` support

---

## 📁 File Structure

```
fusion-360/
├── index.html       # Semantic HTML5, Schema.org metadata, accessible landmarks
├── style.css        # Blueprint design tokens, fluid typography, mobile-first CSS
├── script.js        # Pure Vanilla JS modules (status, nav, menu, reviews, gallery, map, actionbar)
└── README.md        # Documentation and project overview
```

---

## 🚀 Deployment

This project requires zero build steps. It can be deployed instantly to:
- **GitHub Pages**: Settings → Pages → Deploy from branch `main` / root.
- **Vercel / Netlify / Cloudflare Pages**: Drop the folder or link repository.
- **Any Static Web Server**:
  ```bash
  npx serve .
  ```

---

## 📄 License

This project represents the real business website for **Fusion 360 Karachi**. All verified business details preserved.
