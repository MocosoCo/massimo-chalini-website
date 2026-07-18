# Massimo Chalini — Artist Website

## Who you are

Your name is **Massimo Chalini**, but the site now brands you as **"Massi"** — you confirmed this via the Drive content doc, so it's live across nav, titles, and footer on every page. Your legal name still appears once, in your About bio. You're a painter and digital artist based in the Bay Area. Your Instagram is **@theskinnyhoudini**. Your work is dark, cinematic, and figurative — oil paintings and digital illustrations with a dramatic, high-contrast atmosphere. You're new to building websites and new to Claude, but your friend Patricio set all of this up for you.

You don't use Claude Code or git directly — you upload photos and write content into a shared Google Drive folder ("Massi Website"), and Patricio (with Claude) picks it up from there. See the Drive folder for "Your Words — Website Content" and "Site Changes — Log" docs.

---

## How to work with Massimo

- **He's new to this.** Explain things simply. No jargon without explanation.
- **He learns by doing.** Show him small, clear steps rather than big walls of text.
- **Ask before assuming.** If you're not sure what he wants, ask one focused question.
- **Celebrate progress.** Building a website is a big deal — acknowledge it.
- **Check this file, then the "Your Words" and "Site Changes — Log" docs in Massi's Drive folder, at the start of every session.** `my-website-notes.md` in this repo is a secondary/legacy copy — the Drive docs are the current source of truth for his answers and requests.

---

## What has been built (as of July 2026)

The full website is built and live across 5 pages:

| Page | File | Status |
|------|------|--------|
| Homepage | `index.html` | Tagline and welcome line are real (from Massi). Hero background still a gradient placeholder. "The Fighter" and "Impact" tiles have real photos now; "The Veil" is still a placeholder tile |
| Gallery | `gallery.html` | "The Fighter" and "Impact" have real photos; "The Veil" still placeholder |
| About | `about.html` | Real bio line is live. Studio photo, artist statement, and exhibitions section are still placeholders |
| Shop | `shop.html` | Built — "not open yet" state, ready for listings when he's ready to sell |
| Commissions | `commissions.html` | Built — prices are placeholders |
| Contact | `contact.html` | Built — needs free Formspree account to send email |

As of 2026-07-18, Massi uploaded real photos to the Drive folder for the first time. Two (of five uploaded boxing pieces) are live on the site now — see "Paintings currently in the site" below for what's live vs. still waiting on a title.

---

## Paintings currently in the site

| Placeholder Title | Medium | Photo | Notes |
|--------------------|--------|-------|-------|
| "The Veil" | Oil on canvas | Still placeholder | No photo uploaded yet |
| "The Fighter" | Digital | **Live** (`images/the-fighter.jpg`) | Real photo from Drive `Digital/Boxing/IMG_0130.JPG`. Title still a placeholder — needs Massi's real title |
| "Impact" | Digital | **Live** (`images/impact.jpg`) | Real photo from Drive `Digital/Boxing/IMG_0142.JPG`. Title still a placeholder — needs Massi's real title |

**These titles are still guesses. Massi left the Paintings table in "Your Words — Website Content" blank — real titles/medium/year/size/price are needed before these can be un-flagged as placeholders.**

| "Slip" | Digital | **Live** (`images/slip.jpg`) | From Drive `Digital/Boxing/IMG_0132.JPG` — placeholder title, editable |
| "Wrapped" | Digital | **Live** (`images/wrapped.jpg`) | From Drive `Digital/Boxing/IMG_0141.JPG` — placeholder title, editable |
| "Counter" | Digital | **Live** (`images/counter.jpg`) | From Drive `Digital/Boxing/IMG_0143.JPG` — placeholder title, editable |
| "The Trophy" | Digital | **Live** (`images/the-trophy.jpg`) | From Drive `Digital/IMG_0164.JPG` — a soccer/football illustration (Messi-style figure, World Cup trophy), different subject from the boxing motif elsewhere on the site. Added anyway per the "don't gatekeep" rule above — placeholder title, editable |

**Still not added — a genuine size blocker, not a curation hold:**
- Drive `Digital/Aurochskull/`: 7 files (1 JPG, 6 TIFF), all 15–78MB — **too large to download through the Drive MCP connector in this environment (10MB hard limit, confirmed no workaround — metadata doesn't expose a thumbnail/preview link, and the text-extraction tool doesn't support TIFF).** Patricio is downloading these manually since he has unrestricted Drive access; once they land locally (or in `Massimo-Artwork/digital/aurochskull/`), resize with `sips` and add them the same way as everything else — full-res TIFF scans are far larger than any website needs anyway (a 2000px-wide JPEG at ~80% quality is plenty)

---

## What still needs Massimo's input

1. **Real painting titles, medium, year, size, price** — the Paintings table in "Your Words — Website Content" (Drive) is still blank. Needed before "The Fighter"/"Impact" placeholder titles can be replaced, and before any new pieces (the 3 extra boxing photos, the soccer piece, Aurochskull) can be added with real gallery card data.
2. **A photo of "The Veil"** — still no photo for this one.
3. **His artist statement / quote** — the homepage and about page have a placeholder quote.
4. **Exhibitions / recognition** — the about page has a section for shows. Fill in or remove.
5. **Hero image** — the homepage background is a warm dark gradient. A strong painting would look great there once photographed.
6. **Contact form** — needs a free Formspree account to actually deliver email. See DEPLOYMENT-GUIDE.md.
7. **Aurochskull photos** — 7 large scan files sitting in Drive that Claude can't download automatically (10MB limit on the connector). Needs Patricio's help getting them into the repo, or smaller exports from Massi.

---

## How a painting gets added (current workflow, as of 2026-07-18)

Massi doesn't touch this repo directly. He uploads to a shared Google Drive folder ("Massi Website"), and Patricio tells Claude to sync:

1. Massi uploads a photo to the Drive folder's Paintings, Digital, or Artist Photos subfolder, and (ideally) logs the title/medium/year/price in the "Your Words" doc's paintings table
2. Patricio tells Claude to check the Drive folder
3. Claude downloads it (files over 10MB need Patricio to grab them manually — the Drive connector has a hard size limit), resizes/compresses it for web with `sips`, copies it into `images/`, and updates `gallery.html` / the homepage featured section — replacing the placeholder tile with a real `<img>`
4. Claude commits and pushes; Netlify auto-deploys

**Standing rule as of 2026-07-18 (Patricio's call): don't gatekeep.** Add every upload to the gallery right away with a simple placeholder title Massi can edit later (mark it "(placeholder title)" same as the original three). Don't wait for him to fill in the Paintings table first, and don't hold pieces back over whether they fit the site's aesthetic — Massi decides what goes up, not Claude. This overrides the earlier, more cautious approach from before this date.

Same rule applies to **medium/category**: three gallery filter categories exist — `painting` (oil, acrylic, and other traditional physical media), `watercolor` (its own tab, distinct from Paintings), and `digital`. When adding a piece, use your best visual guess for which bucket it belongs in, mark it as guessable/editable the same way as titles, and don't block on Massi confirming first.

**For best iPhone photos of paintings** (relayed to Massi via the Drive folder's "How to Upload Your Photos" doc):
- Shoot in natural daylight (window light, no flash, no overhead bulbs)
- Straight-on — lens parallel to the canvas, not at an angle
- Save as JPEG — iPhone quality is completely fine for websites

---

## Design decisions (and why)

**Color palette** — chosen to match the dark, warm, cinematic mood described in Massimo's notes:
- Background `#0d0805` — deep warm black
- Surface `#1c140d` — dark warm brown for cards/panels
- Accent `#bf6d3a` — burnt copper
- Text `#ede2d0` — warm cream

**Fonts** — Playfair Display (headings) + Inter (body). Elegant without competing with the art.

**Layout philosophy** — the art is the hero. Everything else steps back. Resist adding decorative elements.

---

## Folder structure

```
massimo-chalini-website/
  index.html            ← homepage
  gallery.html
  about.html
  shop.html
  commissions.html
  contact.html
  css/style.css         ← all styling — edit colors/fonts/layout here
  js/main.js             ← mobile nav, gallery filter, lightbox modal
  images/                ← real images go here once Massimo sends them
  Massimo-Artwork/       ← Massimo's raw artwork — organized for easy uploading
    paintings/           ← photos of physical paintings
    digital/             ← digital artwork files
    artist-photos/       ← photos of Massimo
  CLAUDE.md              ← this file — Claude reads it every session
  my-website-notes.md    ← Massimo's preferences, content, ideas
  README.md              ← plain-English guide
  DEPLOYMENT-GUIDE.md    ← how the site is published, and how to update it
```

---

## Future ideas to explore

- **Blog / journal** — process posts, behind-the-scenes, work-in-progress.
- **Instagram feed** — he's active as @theskinnyhoudini. Could embed or link more prominently.
- **Domain name** — `massimochalini.com` or `massi.art` or similar.
- **Shop** — the page is built but empty. Gumroad or Square are the easiest options to wire in without building a custom store.

---

## How Claude Code memory works

Claude Code can remember things across sessions. Just say:
> *"Remember that [thing]"*

Examples:
- *"Remember that my commissions are currently closed"*
- *"Remember I only sell originals, no prints yet"*
- *"Remember the site should feel raw and honest, not polished and corporate"*
