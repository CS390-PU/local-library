# Project Template Setup

## Directory Structure

```
frontend/
│
├── public/
│   ├── pacific_logo.png
│   └── pacific_logo_white.png
│
├── src/
│   │
│   ├── assets/
│   │   ├── data/
│   │   │   └── .gitkeep
│   │   ├── icons/
│   │   │   └── .gitkeep
│   │   └── images/
│   │       └── .gitkeep
│   │
│   ├── components/
│   │   ├── layouts/
│   │   │   └── Sidebar.jsx
│   │   └── ui/
│   │       ├── forms/
│   │       │   └── .gitkeep
│   │       └── .gitkeep
│   │
│   ├── hooks/
│   │   └── .gitkeep
│   │
│   ├── pages/
│   │   ├── AllAuthors.jsx
│   │   ├── AllBooks.jsx
│   │   ├── AllGenres.jsx
│   │   └── Home.jsx
│   │
│   ├── styles/
│   │   ├── AllAuthors.css
│   │   ├── AllBooks.css
│   │   ├── AllGenres.css
│   │   ├── App.css
│   │   ├── CardGrid.css
│   │   ├── Home.css
│   │   ├── index.css
│   │   └── Sidebar.css
│   │
│   ├── utils/
│   │   └── .gitkeep
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
