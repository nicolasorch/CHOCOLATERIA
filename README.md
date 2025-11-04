# Chocolatería & Orquídeas Premium

Sitio web y API para la marca Chocolatería & Orquídeas Premium. El proyecto incluye:

- **Frontend** en React + Vite con Tailwind CSS para presentar la propuesta comercial, colecciones y calendario de campañas.
- **Backend** en FastAPI que recibe leads y solicitudes de pedido, persistiendo la información en PostgreSQL.
- **Infraestructura** lista para desarrollo local mediante `docker-compose`.

## Estructura del repositorio

```
backend/   # Servicio FastAPI
frontend/  # Aplicación React
```

## Requisitos

- Node.js 18+
- Python 3.11+
- PostgreSQL 14+ (o usar Docker)

## Puesta en marcha rápida con Docker

```bash
docker-compose up --build
```

Esto levantará una base de datos PostgreSQL en `localhost:5432` y el backend en `http://localhost:8000`.

## Frontend

1. Instala las dependencias: `cd frontend && npm install`
2. Define la variable `VITE_API_BASE_URL` apuntando al backend (por defecto `http://localhost:8000`).
3. Ejecuta `npm run dev` y abre `http://localhost:5173`.

Más detalles en [`frontend/README.md`](frontend/README.md).

## Backend

1. Crea un entorno virtual: `cd backend && python -m venv .venv`
2. Activa el entorno y ejecuta `pip install -r requirements.txt`
3. Configura tus variables de entorno (`.env`) usando [`backend/.env.example`](backend/.env.example)
4. Ejecuta `uvicorn app.main:app --reload`

Más información en [`backend/README.md`](backend/README.md).

## Migraciones de base de datos

El backend crea las tablas automáticamente al iniciar. Para entornos productivos se recomienda integrar una herramienta como Alembic.

## Pruebas manuales

- **Health check:** `GET http://localhost:8000/health`
- **Crear lead:** `POST http://localhost:8000/leads`
- **Crear solicitud de pedido:** `POST http://localhost:8000/orders`

## Licencia

Proyecto interno de demostración. Todos los derechos reservados.
