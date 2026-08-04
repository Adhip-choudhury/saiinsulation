# Sai Enterprises Website - Theme Sheet

Theme sheet generated from the actual production code (style.css + HTML classes).

## Color Palette

### Brand Colors
| Name | Hex | CSS Class | Usage |
|------|-----|-----------|-------|
| Orange (Primary) | `#f97316` | `.bg-orange`, `.text-orange`, `.border-orange` | CTAs (GET A QUOTE), section headings, accent underlines, check icons, hover highlights |
| Orange Dark | `#ea580c` | `.hover:bg-orange-dark` | CTA hover state |
| Blue (Secondary) | `#3b82f6` | `.bg-blue`, `.text-blue`, `.border-blue` | Secondary accents, phone links, alternate cards, services category accents |
| Charcoal / Dark | `#1a1a2e` | `.bg-dark`, `.text-dark` | Navbar backgrounds, dark hero/CTA sections, headings, footer |
| Dark Alt | `#16213e` | `.bg-dark-alt` | Alternate dark section backgrounds |
| WhatsApp Green | `#25d366` | `.whatsapp-float` | Floating chat button, footer social icon |

### Tints & Opacity Layers
| Name | Value | Usage |
|------|-------|-------|
| Orange 10% | `rgba(249,115,22,0.1)` | Hover backgrounds, subtle badges |
| Orange 20% | `rgba(249,115,22,0.2)` | Eyebrow badge backgrounds |
| Orange 30% | `rgba(249,115,22,0.3)` | Card borders |
| Blue 10% | `rgba(59,130,246,0.1)` | Hover backgrounds |
| Blue 30% | `rgba(59,130,246,0.3)` | Card borders |
| Dark 50-95% | `rgba(26,26,46,0.5-0.95)` | Hero gradient overlays |
| White 80/95% | `rgba(255,255,255,0.8/0.95)` | Sticky navbar + mobile menu |

### Grays
| Name | Hex | Usage |
|------|-----|-------|
| Gray 50 | `#f9fafb` | Alternate section backgrounds |
| Gray 100 | `#f3f4f6` | Competency/utility boxes |
| Gray 200 | `#e5e7eb` | Card borders |
| Gray 300 | `#d1d5db` | Form borders |
| Gray 400 | `#9ca3af` | Muted text on dark |
| Gray 500 | `#9ca3af` | Stat captions |
| Gray-text | `#6b7280` | Body text |

## Typography

- **Primary Font:** Montserrat (body), fallback: system-ui, sans-serif
- **Body:** regular weight, `line-height: 1.6`, color `#1a1a2e` on light / `#fff` on dark
- **Headings:** bold/extrabold (font-bold `700`, font-black `900`), tight tracking
- **Hero H1:** `text-5xl` to `text-8xl` (responsive), uppercase, `tracking-wider`, white with drop shadow
- **Eyebrow labels:** `text-sm`, uppercase, `tracking-wider`, orange or blue
- **Stats:** `text-3xl` extrabold orange/blue with small gray captions

## UI Components

### Navigation (id="siteNav")
- Fixed top navbar, `bg-white/80` + `backdrop-blur-lg` + bottom border
- **Scroll behavior:** hides (`.nav-hide`, slides up) when scrolling down past 160px; gains shadow (`.nav-scrolled`) past 40px; reappears when scrolling up
- Desktop: inline links + orange pill CTA "GET A QUOTE ->"
- Mobile: hamburger toggles `#mobileMenu` dropdown (max-h 80vh, scrollable)

### Buttons
- Primary: `.bg-orange`, uppercase bold, hover `bg-orange-dark` + scale 1.05
- Secondary: bordered white/outline on dark hero, hover fills white with dark text

### Cards
- White cards with `border border-gray-100` + `shadow-sm`, hover `shadow-lg`
- Tinted variant: `bg-orange/5` or `bg-blue/5` with matching `border-orange/30` or `border-blue/30`
- Dark cards: `bg-white/5` + `border-white/10`, hover lifts (`-translate-y-1`)

### WhatsApp Float
- Fixed bottom-right, green `#25d366`, rounded pill with icon + "Chat on WhatsApp", hover scale 1.06

### Marquee
- `.marquee` / `.marquee-track` - horizontally scrolling client industry strip

### Footer
- `bg-dark`, 4-column grid (About + socials / Quick Links / Our Services / Get in Touch), `footer-link` styles, `social-btn` circular icons, border-top copyright row

### Blog / Article
- `.blog-card` cards with image, category chip, title, excerpt, `read-more`
- `.prose-block` for article body (h3 section headings, lists, links)

### Product Pages
- Hero band with breadcrumb + title, overview section, uses list, `.spec-table` for technical specs, benefits grid, CTA

### Misc Components
- `.client-tile` - client industry logos grid
- `.testimonial-card` - quotes with stars
- `.founder-avatar` - circular founder photo with border
- `.faq-item` (summary/details style) - expandable Q&A
- `.text-shadow` - text shadow on headings over images

## Layout & Spacing

- Max container: `max-w-7xl` (80rem), padding `px-4 lg:px-8`
- Standard section padding: `py-16 lg:py-24`
- All pages offset fixed navbar with `.pt-[73px]` wrapper
- Section rhythm alternates `bg-white` / `bg-gray-50` / `bg-dark`

## Brand Voice (in-page copy)

- First dedicated insulation company in Marathwada, since 1984
- 42+ years, 500+ projects, 200+ manpower, 100% satisfaction
- ISO 9001:2008 Certified, Bharat Gaurav Puraskar
- Services: Hot/Cold Thermal Insulation, Acoustic Solutions, Civil Works, AMC Contracts, Clean Rooms, Epoxy Flooring, Ducting, PUF Panels, INSUDESIGN
