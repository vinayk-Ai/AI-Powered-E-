# Vyapar Saathi Stock Billing

Design a distinctive, premium web app called [PRODUCT NAME]: billing and inventory for mobile-accessories distributors in India. Do NOT use a generic SaaS admin template look. In this step build ONLY the design system, app shell, Home screen and New Bill screen, with realistic mock data. Do not build other pages yet.

DESIGN DIRECTION
Confident, warm, editorial fintech. Mercury's restraint and polish, Linear's precision and calm, with the warmth of an Indian trade ledger. It should feel like a product a serious business would pay for, and still be friendly for a shopkeeper who is not tech-savvy. Be opinionated: commit to one direction, no safe generic choices, no default Tailwind look.

TOKENS
- Background warm stone #F5F3EE, surfaces white, hairline borders #E7E3DA.
- Ink #14131A for text, muted #6B6A72.
- Primary: deep teal-ink #0F3D44 (active nav, hero surfaces, key numbers).
- Accent: marigold #F2A93B, used sparingly, only for the single primary action per screen and small highlights.
- Success #1E8A5A, warning #D98A1F, danger #D64545, each with a soft tinted background for badges.
- Type: Geist (or Inter) for UI; Instrument Serif for large headings and hero numbers; tabular numerals for all money. Scale 12/14/16/20/28/44.
- Radius: 14px cards, 10px inputs and buttons, full-round badges. Almost no shadows; rely on hairline borders and spacing. 8px spacing scale, generous padding. Let the UI breathe.
- Icons: Lucide, 1.5 stroke. No emoji. No gradients, no glassmorphism, no stock illustrations.
- Motion: 150-200ms ease-out; count-up on hero numbers; rows slide in when added to a bill. Respect reduced motion.
- Money in Indian format (₹1,24,500). Dates like "19 Oct".
- Language toggle English / Hinglish in the top bar.

APP SHELL
Desktop: slim left sidebar (64px icons, expands to 220px on hover) with Home, Bill, Maal (Products), Bills, Report, Settings. Top bar with a wide search field ("Search products, bills, clients... Cmd+K"), language toggle, owner avatar. Mobile: bottom tab bar (Home, Bill, Maal, Report, More) with Bill as a raised centre button in marigold.

HOME ("Aaj")
- Greeting row: "Namaste, Rakesh ji" with the date; on the right a marigold "Naya Bill" button.
- Hero card, full width, deep teal background, white text: label "Aaj ki bikri", a huge serif number ₹48,250, a small green delta "+12% kal se", and a thin white 7-day sparkline on the right. Below it two quiet stats: "Aaj ka profit ₹9,640" and "Baaki udhaar ₹1,86,000".
- "Aaj ke kaam" card with 3 actionable rows (icon, text, right-aligned button): "6 items kam bache hain - Reorder", "4 clients ka paisa baaki - Reminder bhejo", "2 bills adhure hain - Poora karo".
- "Haal ke bills" compact table: bill no., client, amount, status badge (Paid, Partial, Udhaar), time. Row hover state; clicking opens a right-side drawer.
- Nothing else on this screen. No extra widgets.

NEW BILL (the hero screen)
- Desktop two panes. Left (60%): client selector (searchable, "Walk-in" option, shows a Retailer/Wholesaler chip and pending balance); a product search field that stays focused (typing "type c" shows results with thumbnail, stock and rate; Enter adds the item); item rows with quantity stepper, editable rate (auto-filled by client type), line discount, line total, remove icon.
- Right (40%): live bill preview styled like a clean paper receipt: business name, bill number, date, items, subtotal, discount, and the total in large serif numerals. Below it the payment control (segmented Paid / Partial / Udhaar, then Cash / UPI / Bank) and a marigold "Bill banao" button that shows the total.
- Mobile: single column, sticky bottom bar with total and "Bill banao"; the preview opens as a bottom sheet.
- Inline amber warning if quantity exceeds stock; never block with modal dialogs.
- Success state: the receipt with Download PDF, Share on WhatsApp and "Next bill" buttons.

MOCK DATA (real-looking, no lorem ipsum)
Products: "Type-C Cable 1m (Fast Charge)", "Silicone Back Cover - Redmi Note 12 (Black)", "Tempered Glass - iPhone 13", "20W Fast Charger", "Wired Earphones 3.5mm (White)", "10000mAh Power Bank".
Clients: "Sharma Mobile Zone (Retailer)", "Gupta Telecom (Wholesaler)", "New Star Communication (Retailer)".

TECH
React + TypeScript, Tailwind, shadcn/ui restyled to these tokens (not default shadcn look), Recharts for the sparkline, React Router. No backend yet: keep mock data behind src/lib/api.ts so it can later call a REST API at VITE_API_BASE_URL.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/78a7957f-f592-4e05-b53d-c3ee2cb4f12f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
