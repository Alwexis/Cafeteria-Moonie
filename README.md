# ☕ Cafetería Moonie

Carta Virtual Interactiva para una cafetería ficticia. Este proyecto está desarrollado completamente en Front-End con React + Vite, e incluye funcionalidades típicas de una carta virtual, como navegación por categorías, visualización de productos y un carrito de compras persistente.

---

## ⚛️ Tecnologías

- **React** (con Vite)
- **TypeScript**
- **TailwindCSS** (con `shadcn/ui` para componentes)
- **Context API** para manejo global del carrito
- **MockAPI** para simular datos de productos y categorías

---

## 🛒 Funcionalidades

- Visualización de productos por categorías (e.g., Cafetería Caliente / Fría, Almuerzos, Salados, etc)
- Carrito de compras persistente con:
  - Agregar/eliminar productos
  - Aumentar/disminuir cantidad
  - Cálculo de total
- Soporte para animaciones con Tailwind (`tailwind animated`)
- Separación de componentes y custom hooks

---

## 📄 TODO

- Validaciones:
  - Evitar agregar productos si el stock es 0
  - Limitar cantidad máxima por producto

---

## 📂 Estructura del proyecto

```
src/
├── assets/ # Imágenes y recursos estáticos
├── components/
│ └── cart/ # Componentes relacionados al carrito
│ └── ui/ # Componentes de interfaz y layout
│ └── products/ # Componentes relacionados a productos
├── contexts/ # Context API (carrito)
├── hooks/ # Hooks personalizados
├── lib/ # Tipos y utilidades generales
└── index.css / main.tsx / App.tsx
```

---

## 🚀 Comenzar a usar

```bash
npm install
npm run dev
```