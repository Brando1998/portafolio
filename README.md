# Portfolio — Brando Díaz

Personal portfolio of **Brando Díaz Montealegre**, full-stack developer based in Colombia.

**Live:** [portafolio.brando.network](https://portafolio.brando.network)

Built as a static site on purpose: no framework, no build step, no dependencies. It loads
as fast as it can because it is mostly HTML and CSS, and it is meant to be read by people
who are deciding whether to interview me.

---

## Pages

| File | What it is |
|---|---|
| `index.html` | Main portfolio — about, experience timeline, projects, skills, contact |
| `retro.html` | Easter egg: the same content as a Windows 2000 desktop, with a working taskbar clock and start menu |

Both pages are **bilingual (English / Spanish)**. The toggle swaps a `data-lang`
attribute on `<body>` and CSS reveals the matching `.en` / `.es` spans — no page
reload, no routing, no translation files.

## Structure

```
index.html          main page
retro.html          Windows 2000 easter egg
css/
  styles.css        main page styles
  retro.css         easter egg styles
js/
  main.js           language toggle, scroll-aware nav, reveal-on-scroll
  retro.js          taskbar clock, start menu
assets/images/
  me/               portrait images
  projects/         project screenshots
```

## Running it locally

No install step. Serve the folder with anything:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly with `file://` also works, though the Google Fonts
request may behave differently.

## Featured projects

| Project | What it does | Stack |
|---|---|---|
| **[Docubot](https://sotranscolombianos.com.co/chat)** | WhatsApp AI assistant that issues legally required shipping documents by integrating with RNDC, Colombia's national freight registry | Go/Gin, Rasa NLP, Node.js, Playwright, Vue 3, PostgreSQL, MongoDB |
| **[Nexty Studio](https://nexty.my/)** | Nesting engine for sportswear manufacturing — genetic algorithm with SAT collision detection, 85–95% material utilization | Django, Vue 3, Fabric.js, OpenCV.js, Celery |
| **[SICOP](https://presupuesto.maloka.org)** | Budget and operations platform running in production at Maloka, a science and technology corporation | Django, Celery, PostgreSQL, Docker, AWS |
| **ClickStock POS** | Offline-first point-of-sale with DIAN electronic invoicing and event-driven inventory over Kafka | Go/Gin, GORM, Vue 3, TypeScript, Kafka, PWA |

## Notes on the code

- **Images** are stored as PNG with the alpha channel stripped where it was fully
  opaque, and re-encoded losslessly. Every optimization was verified pixel-identical
  to the original before replacing the file.
- **No analytics, no trackers, no cookies.** Nothing to consent to.
- **Accessibility:** the language and grid toggles are real `<button>` elements with
  `aria-pressed`, images carry alt text, and the page works without JavaScript except
  for the toggles.

## Contact

- **Email:** brandodiazmont@gmail.com
- **LinkedIn:** [brando-diaz-montealegre](https://www.linkedin.com/in/brando-diaz-montealegre)
- **GitHub:** [Brando1998](https://github.com/Brando1998)
