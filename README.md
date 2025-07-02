# 🌿 Skincare Landing Page

A beautifully animated, fully responsive landing page for a skincare brand. Built with **Next.js**, **Tailwind CSS**, and **GSAP** to ensure a premium and engaging user experience across all devices.

---

## ✨ Features

- ✅ Responsive design for **Mobile**, **Tablet**, and **Desktop**
- ✅ **GSAP animations** for smooth and elegant transitions
- ✅ **Text reveal animation** on scroll
- ✅ Interactive, tactile buttons in the **Best Selling Products** section
- ✅ Smooth expand/collapse in the **FAQ section**
- ✅ Built with **Tailwind CSS** for rapid styling
- ✅ Deployed via **Netlify**

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) — Framework for SSR/SSG and routing  
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework  
- [GSAP](https://greensock.com/gsap/) — Powerful animation platform  
- [TypeScript](https://www.typescriptlang.org/) — Optional, depending on your setup  
- [Netlify](https://www.netlify.com/) — For deployment

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/skincare-landing.git
cd skincare-landing
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site in the browser.

---

## 📦 Project Structure

```
├── client/                 # Main frontend (Next.js or React)
│   ├── components/         # Reusable components
│   └── pages/              # Page routing (if using Next.js)
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind config
├── postcss.config.js       # PostCSS config
├── vite.config.ts          # (if using Vite for client)
├── server/                 # Server logic (if any)
├── netlify/functions/      # Serverless functions
├── shared/                 # Shared constants, utils, etc.
└── README.md
```

---

## 🎯 Key Animations Implemented

| Animation Type                            | Description |
|------------------------------------------|-------------|
| 💫 **Page Load Reveal**                   | Smooth entrance animation on first load using GSAP |
| 📝 **Word-by-Word Scroll Reveal**         | First paragraph reveals words as you scroll |
| 🧴 **Best Selling Products Interaction**  | Buttons slide product cards (mobile/tablet), animated on hover/tap |
| ❓ **FAQ Expand/Collapse**                | FAQ answers expand smoothly using `ease-in-out` transitions |

---

## 🚀 Deployment

This project is configured for **Netlify**. To deploy:

1. Connect your GitHub repo to Netlify
2. Set build command to:
   ```bash
   npm run build
   ```
3. Set publish directory to:
   ```
   out/ (or .next/ depending on framework)
   ```

---


## 🤝 Contributing

Feel free to fork this project and improve it. Pull requests are welcome!

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

- Design inspiration from [Figma]
- Animations powered by [GSAP]
- Styled with love using [Tailwind CSS]

---

> Crafted with 💚 by [Neelabh Shukla]
