## Best Finds - Affiliate Outfit Links

A clean, minimal, Linktree-style web app for affiliate fashion outfits.

### Stack
- Next.js (App Router)
- Tailwind CSS
- JSON data source (no database)

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```text
app/
  page.tsx                 # Home (grid + search)
  outfit/[id]/page.tsx     # Outfit detail page
components/
  Layout.tsx
  OutfitCard.tsx
  OutfitGrid.tsx
  ProductButton.tsx
  CopyLinkButton.tsx
data/
  outfits.json             # Your content source
public/images/
  outfit-1.svg
  outfit-2.svg
```

## Add A New Outfit (No Code Changes)

1. Add your image file into `public/images/`
   - Example: `public/images/outfit-3.jpg`
2. Open `data/outfits.json`
3. Add one new object to the array:

```json
{
  "id": "summer-monochrome-look",
  "title": "Summer Monochrome Look",
  "image": "/images/outfit-3.jpg",
  "products": [
    { "name": "T-shirt", "link": "https://your-aff-link.com/tshirt", "price": "$25" },
    { "name": "Pants", "link": "https://your-aff-link.com/pants", "price": "$45", "label": "Best Pick" },
    { "name": "Shoes", "link": "https://your-aff-link.com/shoes" }
  ]
}
```

### Required fields
- `id` (unique string, URL-safe)
- `title`
- `image` (path under `public/`)
- `products` with `name` + `link`

### Optional fields
- `price`
- `label` (e.g., `"Best Pick"`)

## Deploy To Vercel

1. Push this project to GitHub
2. Go to [Vercel](https://vercel.com/new)
3. Import your repo
4. Keep default build settings (Next.js auto-detected)
5. Click **Deploy**

Every new commit to your repo auto-deploys.
