"""Database models for the Chocolateria API."""

from __future__ import annotations

from datetime import datetime

from sqlalchemy import Boolean, Column, Date, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship

from .database import Base


class Lead(Base):
    """Marketing lead captured from the website."""

    __tablename__ = "leads"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(120), nullable=False)
    email = Column(String(255), nullable=False, index=True)
    phone = Column(String(50), nullable=True)
    message = Column(Text, nullable=True)
    marketing_consent = Column(Boolean, nullable=False, default=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    orders = relationship("OrderRequest", back_populates="lead", cascade="all,delete")


class OrderRequest(Base):
    """Order request details submitted by a customer."""

    __tablename__ = "order_requests"

    id = Column(Integer, primary_key=True, index=True)
    lead_id = Column(Integer, ForeignKey("leads.id"), nullable=True)
    customer_name = Column(String(120), nullable=False)
    customer_email = Column(String(255), nullable=False)
    customer_phone = Column(String(50), nullable=True)
    recipient_name = Column(String(120), nullable=False)
    recipient_phone = Column(String(50), nullable=True)
    occasion = Column(String(120), nullable=True)
    product_slug = Column(String(80), nullable=False)
    message = Column(Text, nullable=True)
    delivery_date = Column(Date, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    lead = relationship("Lead", back_populates="orders")
