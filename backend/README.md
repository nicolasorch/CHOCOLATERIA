# Chocolateria Backend

FastAPI service that powers the Chocolateria marketing website. It exposes endpoints to store marketing leads and order requests in a PostgreSQL database.

## Requirements

- Python 3.11+
- PostgreSQL 14+

## Setup

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env  # update with your database credentials
```

## Running the server

```bash
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000` and exposes an OpenAPI schema at `/docs`.

## Database migrations

The project uses SQLAlchemy models. For local development you can create the tables automatically via `Base.metadata.create_all()` which runs on application start. For production systems it is recommended to introduce a migration tool such as Alembic.
