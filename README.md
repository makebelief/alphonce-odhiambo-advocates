# Alphonce Odhiambo & Company Advocates

Static, mobile-responsive law-firm website built from the supplied Alphonce Odhiambo assets and styled to closely follow the Cecilia Mwaura reference site.

## Local check

```bash
npm run check
python3 -m http.server 8080
```

Open http://localhost:8080

## Push to GitHub and deploy to Vercel

Run from inside this folder:

```bash
git init
git add .
git commit -m "Build Alphonce Odhiambo & Company Advocates website"
git branch -M main
gh repo create alphonce-odhiambo-advocates --public --source=. --remote=origin --push
vercel --prod --yes
```

If the GitHub repository already exists, use:

```bash
git remote add origin https://github.com/YOUR-USERNAME/alphonce-odhiambo-advocates.git
git push -u origin main
vercel --prod --yes
```

## Primary contact details used

- +254 743 509 250
- +254 755 782 106
- alphoncelimbo@gmail.com
- Reinsurance Plaza, 2nd Floor, Oginga Odinga Street, Kisumu
- Secondary Siaya contact point: La Place Tin Tin Building, 1st Floor, opposite KCB, Siaya
