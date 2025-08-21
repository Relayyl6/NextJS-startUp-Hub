# 🚀 Startup Hub

A **Next.js + Sanity** project that allows users to browse and showcase startups.
Built with TypeScript, Sanity Studio for content management, and GROQ queries for fetching structured data.

---

## 📦 Tech Stack

* **Frontend**: [Next.js 14](https://nextjs.org/) (App Router, TypeScript, Next Auth)
* **Backend / CMS**: [Sanity](https://www.sanity.io/) (Headless CMS)
* **Database Queries**: GROQ
* **Styling**: Tailwind CSS
* **Authentication**: NextAuth.js (GitHub provider)
* **Images**: Sanity Image Assets + Next.js `<Image />`

---

## ⚙️ Features

* 🔑 Authentication with GitHub
* 📂 Sanity Studio (custom schemas for `Startup` and `Author`)
* ✍️ CRUD operations for startups (title, description, category, pitch, author, and image upload)
* 📊 View counter (startup popularity)
* 🌐 SEO-friendly slug-based routing
* ✅ Type-safe queries (using `sanity schema extract` + `sanity typegen`)

---

## 📁 Project Structure

```
.
├── app/                   # Next.js App Router pages
│   ├── studio/            # Sanity Studio (mounted at /studio)
│   └── ...
├── sanity/                # Sanity setup
│   ├── schemaTypes/       # Schemas for Startup, Author
│   ├── queries.ts         # GROQ queries
│   ├── env.ts             # Env config (projectId, dataset, apiVersion)
├── components/            # React components
├── types/                 # Generated TypeScript types (from Sanity)
├── package.json
└── README.md
```

---

## 🛠️ Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/startup-showcase.git
cd startup-showcase
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-08-01

GITHUB_ID=your_github_oauth_id
GITHUB_SECRET=your_github_oauth_secret
NEXTAUTH_SECRET=your_nextauth_secret
```

---

## 📡 Sanity Setup

### Run Sanity Studio

```bash
npx sanity@latest dev
```

The studio is mounted at:
👉 [http://localhost:3000/studio](http://localhost:3000/studio)

### Generate Types from Sanity

To keep your TypeScript types synced with your schemas:

```bash
npm run typegen
```

In `package.json`:

```json
{
  "scripts": {
    "predev": "npm run typegen -- --enforce-required-fields",
    "prebuild": "npm run typegen -- --enforce-required-fields",
    "typegen": "sanity schema extract && sanity typegen generate"
  }
}
```

---

## 🖼️ Image Handling

In your GROQ query, you resolve images like this:

```groq
"imageUrl": image.asset->url
```

In TypeScript, add to your `Startup` type:

```ts
imageUrl: string
```

When rendering in Next.js:

```tsx
<Image
  src={startup.imageUrl ?? "/fallback.png"}
  alt={startup.title ?? "Startup image"}
  width={500}
  height={300}
  className="rounded-xl"
/>
```

---

## 🔥 Example GROQ Query

```groq
*[_type == "startup"]{
  _id,
  _createdAt,
  title,
  description,
  category,
  "slug": slug.current,
  "imageUrl": image.asset->url,
  views,
  author->{
    _id,
    name,
    image
  }
}
```

---

## 🧑‍💻 Development

Start the Next.js dev server:

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## ✅ TODOs / Improvements

* [ ] Add comments & likes for startups
* [ ] Better error handling & loading states
* [ ] Dark mode
* [ ] Deploy to [Vercel](https://vercel.com/)

---

## 📜 License

MIT © 2025 \[Oseghale Leonard]

---

👉 Would you like me to also add a **step-by-step section on fixing the `Next.js Image string | undefined` issue** directly in the README (so future you won’t forget), or keep it clean and minimal?
