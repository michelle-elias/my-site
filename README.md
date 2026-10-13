# Personal Website

Portfolio website: computational systems medicine of the liver, PBPK/PD modelling, and image-informed simulation.

## About

This is the source code for my personal website hosted at [michelle-elias.de](https://michelle-elias.de/).

## Structure

- `en/` – English version of the website  
- `de/` – German version of the website  
- `impressum/` – Legal notice (Impressum)  
- `styles.css` – Styling  
- `theme.js` – Light/dark theme toggle  
- `assets/` – CV, thesis and icons  

`assets/CV.pdf` is the public CV (no phone number, no photo), built from the CV sources with
`lualatex cv_michelle_elias_public.tex`.

## Local Development

The pages use absolute paths (`/styles.css`), so serve the folder instead of opening the files directly:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000/en/>.

## Deployment

This is a static website served with Caddy on a Linux server.

## Contact

Michelle Elias - michelle.elias@student.hu-berlin.de
