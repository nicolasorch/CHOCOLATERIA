"""Database operations for the Chocolateria API."""

from sqlalchemy.orm import Session

from . import models, schemas


def create_lead(db: Session, lead_in: schemas.LeadCreate) -> models.Lead:
    """Persist a new marketing lead."""

    lead = models.Lead(**lead_in.dict())
    db.add(lead)
    db.commit()
    db.refresh(lead)
    return lead


def create_order(db: Session, order_in: schemas.OrderCreate) -> models.OrderRequest:
    """Persist a new order request."""

    data = order_in.dict()
    lead_id = data.pop("lead_id", None)
    order = models.OrderRequest(**data)
    if lead_id is not None:
        order.lead_id = lead_id
    db.add(order)
    db.commit()
    db.refresh(order)
    return order
