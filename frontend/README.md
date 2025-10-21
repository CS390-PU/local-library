# Project Template Setup

## Directory Structure

```
frontend/
├── node_modules/                # Installed dependencies (auto-generated)
├── public/                      # Static files copied as-is during build
│   └── favicon.ico              # Example (optional)
│
├── src/                         # All app source code lives here
│   ├── assets/                  # Static assets processed by Vite
│   │   ├── data/                # JSON or other local data sources
│   │   ├── icons/               # SVGs and small icon graphics
│   │   └── images/              # Project / site images
│   │
│   ├── components/              # Reusable UI components
│   │   ├── forms/               # Form components (GeneralSearchForm, etc.)
│   │   ├── layouts/             # Navigation, dividers, headers, footers
│   │   └── ui/                  # Optional: small generic UI elements (buttons, cards)
│   │
│   ├── styles/                  # Global or shared CSS
│   │   ├── App.css
│   │   ├── index.css
│   │   └── variables.css        # Optional theme or color variables
│   │
│   ├── utils/                   # Plain JS helper functions (no JSX)
│   │   ├── formatters.js
│   │   └── filters.js
│   │
│   ├── hooks/                   # Custom React hooks (optional)
│   │   └── useFetch.js
│   │
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # Entry point that mounts React
│   └── index.html               # (If desired inside src/, but usually at project root)
│
├── .gitignore
├── index.html                   # Main HTML file served by Vite
├── package.json
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
