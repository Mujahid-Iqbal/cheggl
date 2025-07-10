# Cheggl Homepage Redesign

A modern, responsive frontend redesign of the Cheggl.com homepage using **Next.js 14**, **TypeScript**, and **Tailwind CSS**. This project focuses on scalable component architecture, accessibility, and pixel-perfect visual replication of the original site layout.

---

## 🚀 Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Swiper.js](https://swiperjs.com/) (Hero slider & testimonials)

---

## 📁 Folder Structure

```
src/
├── app/                  # Next.js app router layout
│   ├── layout.tsx        # Global layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles (Tailwind + resets)
├── components/           # Shared UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSlider.tsx
│   ├── FeatureCards.tsx
│   ├── HowItWorks.tsx
│   ├── Testimonials.tsx
│   └── ...
├── data/                 # Static JSON data for components
│   ├── slides.json
│   ├── features.json
│   ├── steps.json
│   └── testimonials.json
└── hooks/                # Custom hooks if needed
```

---

## 📦 Installation

```bash
git clone https://github.com/Mujahid-Iqbal/cheggl.git
cd cheggl
npm install
npm run dev
```

Then open: [http://localhost:3000](http://localhost:3000)

---

## 🎯 Features

- Responsive global header & footer
- Fully accessible hero slider (keyboard + ARIA)
- Feature cards, how-it-works steps, and testimonials
- Static JSON-driven rendering (no external API)
- Mobile menu with hamburger toggle
- Keyboard & screen-reader accessible
- Uses semantic HTML and Tailwind for styling

---

## 📜 License

This project is licensed for educational/demo purposes.

---

## 👨‍💻 Author

Built with ❤️ by [Mujahid Iqbal](https://github.com/Mujahid-Iqbal)
