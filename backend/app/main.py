"""FastAPI application entry-point."""

from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from . import crud, models, schemas  # noqa: F401 (models imported for table registration)
from .config import get_settings
from .database import Base, engine, get_db

# Ensure database tables exist when the application starts.
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Chocolateria API", version="1.0.0")

settings = get_settings()

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health_check() -> dict[str, str]:
    """Return a simple service health indicator."""

    return {"status": "ok"}


@app.post("/leads", response_model=schemas.LeadRead, status_code=201)
def create_lead(lead: schemas.LeadCreate, db: Session = Depends(get_db)) -> schemas.LeadRead:
    """Store a marketing lead captured from the website."""

    stored_lead = crud.create_lead(db, lead)
    return schemas.LeadRead.from_orm(stored_lead)


@app.post("/orders", response_model=schemas.OrderRead, status_code=201)
def create_order(order: schemas.OrderCreate, db: Session = Depends(get_db)) -> schemas.OrderRead:
    """Store an order inquiry submitted from the website."""

    stored_order = crud.create_order(db, order)
    return schemas.OrderRead.from_orm(stored_order)
