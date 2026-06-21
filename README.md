# CV — Yecid Junior Perez Paucara

Portfolio/CV personal construido con React, TypeScript, Tailwind CSS y Framer Motion.

---

## Stack

- **React 18** + **TypeScript**
- **Tailwind CSS** — estilos utility-first
- **Framer Motion** — animaciones de entrada por scroll
- **Lucide React** — iconografía

---

## Estructura del proyecto

```
src/
└── CVYecidPerez.tsx   # Componente principal (todo en un solo archivo)
```

---

## Instalación

```bash
# Clonar el repo
git clone https://github.com/ajaxgitt/yecid-jr.-perez.git
cd cv

```

---

## Desarrollo

```bash
pnpm dev
```

---

## Características

- **Navbar fijo** con scroll spy — resalta la sección activa automáticamente
- **Animaciones por scroll** — cada sección aparece con `fadeUp` al entrar al viewport usando `useInView` de Framer Motion
- **Navbar adaptativo** — transparente al inicio, opaco con blur al hacer scroll
- **Diseño dark** — paleta `slate` + acentos en `blue-400`
- **Responsive** — el navbar colapsa a íconos en mobile
- **100% tipado** — interfaces definidas para todas las estructuras de datos

---

## Uso

Importá el componente en tu `App.tsx`:

```tsx
import CVYecid from "./CVYecidPerez";

export default function App() {
  return <CVYecid />;
}
```

Asegurate de tener Tailwind configurado en tu proyecto. Si usás Vite:

```bash
npm create vite@latest mi-cv -- --template react-ts
cd mi-cv
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## Personalización

Todos los datos están definidos como arrays de objetos tipados dentro del componente, fáciles de editar:

| Variable | Contenido |
|---|---|
| `NAV_SECTIONS` | Secciones del navbar |
| `experiences` | Experiencia laboral |
| `sherlockFeatures` | Features de Sherlock |
| `uniProjects` | Proyectos universitarios |
| `skillGroups` | Habilidades técnicas por categoría |

---

## Licencia

MIT — libre para usar y modificar.