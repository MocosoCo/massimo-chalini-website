# Massimo Chalini — Artist Website

## Who you are

Your name is **Massimo Chalini**. You're a painter and digital artist based in the Bay Area. Your Instagram is **@theskinnyhoudini**. Your work is dark, cinematic, and figurative — oil paintings and digital illustrations with a dramatic, high-contrast atmosphere. You're new to building websites and new to Claude, but your friend Patricio set all of this up for you.

You may also go by **"Massi"** — this is being considered as a brand name. TBD.

---

## How to work with Massimo

- **He's new to this.** Explain things simply. No jargon without explanation.
- **He learns by doing.** Show him small, clear steps rather than big walls of text.
- **Ask before assuming.** If you're not sure what he wants, ask one focused question.
- **Celebrate progress.** Building a website is a big deal — acknowledge it.
- **Check this file and `my-website-notes.md` at the start of every session.**

---

## What has been built (as of July 2026)

The full website is built and live across 5 pages:

| Page | File | Status |
|------|------|--------|
| Homepage | `index.html` | Built — hero background is a gradient placeholder |
| Gallery | `gallery.html` | 3 placeholder works listed (titles + medium only, no real photos yet) |
| About | `about.html` | Placeholder photo + placeholder bio — needs Massimo's real words |
| Shop | `shop.html` | Built — "not open yet" state, ready for listings when he's ready to sell |
| Commissions | `commissions.html` | Built — prices are placeholders |
| Contact | `contact.html` | Built — needs free Formspree account to send email |

No real painting photos exist in this repo yet — every artwork tile on the site is a styled placeholder ("Photo coming soon"). This is the very first thing to fix once Massimo sends real photos.

---

## Paintings currently in the site (all placeholders)

| Placeholder Title | Medium | Notes |
|--------------------|--------|-------|
| "The Veil" | Oil on canvas | Hooded/masked figure — described only, no photo yet |
| "The Fighter" | Digital | Boxer portrait — described only, no photo yet |
| "Impact" | Digital | Two boxers, action scene — described only, no photo yet |

**These titles are guesses carried over from early notes. Massimo should rename them to what he actually calls the pieces, and send real photos.**

---

## What still needs Massimo's input

1. **Real painting photos** — nothing has been uploaded yet. See "How to add a painting" below.
2. **His bio** — `about.html` has placeholder text. Replace with his real story.
3. **Real painting titles** — "The Veil", "The Fighter", "Impact" are temporary.
4. **His artist statement / quote** — the homepage and about page have a placeholder quote.
5. **Exhibitions / recognition** — the about page has a section for shows. Fill in or remove.
6. **Hero image** — the homepage background is a warm dark gradient. A strong painting would look great there once photographed.
7. **Contact form** — needs a free Formspree account to actually deliver email. See DEPLOYMENT-GUIDE.md.

---

## How to add a painting

1. Put the image file in `Massimo-Artwork/paintings/` (physical work) or `Massimo-Artwork/digital/` (digital work)
2. Tell Claude: *"Add this painting to the gallery"* and give it the title, medium, and year
3. Claude will copy it to `images/` and update `gallery.html` (and the homepage featured section, if it should be there) — replacing the placeholder tile with a real `<img>`

**For best iPhone photos of your paintings:**
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

- **Branding as "Massi"** — Massimo is considering this as his artist brand name. Could affect the nav logo, domain name, and overall identity. Worth a full session on this.
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
