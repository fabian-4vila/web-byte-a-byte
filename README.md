# 🧠 Web Byte a Byte

**Web Byte a Byte** es un blog dedicado al aprendizaje y exploración del desarrollo web **Full Stack**, creado desde cero con tecnologías modernas y con un enfoque educativo. Ideal para quienes están aprendiendo programación paso a paso.

## 🚀 Tecnologías Utilizadas

- [Vite](https://vitejs.dev/) + [React](https://reactjs.org/) para una interfaz rápida y moderna
- [React Router](https://reactrouter.com/) para la navegación entre páginas
- [Axios](https://axios-http.com/) para las solicitudes al backend
- **CSS Puro** para los estilos (sin frameworks como Tailwind o Bootstrap)
- Backend REST (externo) para el manejo de publicaciones y autenticación

## 📁 Estructura del Proyecto

```bash
src/
├── components/    # Componentes reutilizables
├── pages/         # Vistas principales (Home, Login, etc.)
│    └── Home.jsx 
├── assets/
│    └── react.svg
├── context/       # Contextos globales como Auth
├── routes/        # Configuración de rutas
│    └── AppRouter.jsx
├── services/      # Cliente Axios para la API
├── styles/        # Archivos CSS (App.css, index.css)
├── App.jsx        # Componente principal
└── main.jsx       # Punto de entrada
```
### ✍️ Funcionalidades
Visualización dinámica de posts consumidos desde una API

Banner visual animado con letras estilo "Matrix"

Sistema de autenticación (próximamente)

Panel de administración para publicaciones (sólo admins - en desarrollo)

Página de detalle por cada publicación

### 🔐 Buenas Prácticas
No se incluye información sensible en el código

Variables de entorno manejadas desde .env

.env está protegido por .gitignore y no se sube al repositorio

### 📦 Instalación Local
Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/web-byte-a-byte.git
cd web-byte-a-byte
```
### Instala las dependencias:

```bash
npm install
```

```bash
npm run dev
```
📄 Licencia
Este proyecto está licenciado bajo MIT.
Desarrollado por Fabián Ávila con dedicación y pasión por el aprendizaje.
