# 🚀 NextSampler Starter

A minimal and production-ready starter template for Next.js, perfect for learning or kickstarting your project.

> ✅ This is the **free starter version** of the NextSampler template.  
> For advanced features like authentication, Supabase integration, and user profile management, check out the full version below.

---

<p align="center">
  <img src="https://res.cloudinary.com/dpqgemmvt/image/upload/v1746878460/nextsampler_intro_banner_arwm2h.png" alt="NextSampler Banner" width="600" />
</p>

---

## 📦 Features

- ✅ Next.js 15 (App Router)
- ✅ Tailwind CSS
- ✅ Pre-configured project structure
- ✅ Ready for Vercel deployment

---

## 🌟 Full Version Available

The full version includes everything in the starter, plus:

- 🔐 Google & GitHub login (NextAuth)
- 📦 Supabase integration (auth + storage)
- 🧑‍💻 User profile page
- 📁 Protected routes
- 🛠️ `.env` setup guide
- 📤 Email delivery setup
- 📄 Korean + English documentation

👉 **Explore the full version here**:  
https://nextsampler.com/en

---

## 📥 Pre-requirements

✅ Before you begin, make sure the following environment is set up:

- **Node.js v22.x or higher**
  - Recommended version: Node.js 22 LTS
  - You can install it from the [official Node.js website](https://nodejs.org) or use [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm)

---

## 📥 Installation

1. Download source code

2. Unzip the downloaded file and open the project folder in your terminal or code editor.

3. Install dependencies:

```bash
npm install
```

---

## ⚙️ Environment Variables and 🚀 Running the App

1. Copy the example environment file and configure the variables:

```bash
cp .env.example .env.local
```

Then update the values in `.env.local`. These keys are required for Supabase integration:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-service-annon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-secret-key
```

2. To start the development server:

```bash
npm run dev
```

3. Then open your browser and navigate to:

```
http://localhost:3000
```

---

## 📄 License

This repository is licensed under the [MIT License](./LICENSE).

The full version of NextSampler is a commercial product and is not covered by this license.

---

## 🌐 Live Demo

👉 [**https://nextsampler.com/en**](https://nextsampler.com/en)

---

## 📧 Contact

If you need help or have any questions, feel free to reach out:

📬 `support@nextsampler.com`

---

> Build and launch your SaaS product faster with **NextSampler** 🚀
