# Chocolatería & Orquídeas Premium – Frontend

Aplicación React + Vite que presenta la propuesta de valor de la marca Chocolatería & Orquídeas Premium.

## Scripts disponibles

```bash
npm install         # instala dependencias
npm run dev         # inicia el servidor de desarrollo en http://localhost:5173
npm run build       # genera la versión de producción
npm run preview     # sirve la build de producción localmente
```

## Variables de entorno

Crea un archivo `.env` en la raíz del frontend con las siguientes variables:

```
VITE_API_BASE_URL=http://localhost:8000
```

Esto permite que el formulario de contacto envíe los leads a la API de FastAPI.
