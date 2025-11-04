"""Pydantic schemas used by the API."""

from __future__ import annotations

from datetime import date, datetime
from typing import Optional

from pydantic import BaseModel, EmailStr, Field


class LeadBase(BaseModel):
    name: str = Field(..., example="Andrea Gómez")
    email: EmailStr = Field(..., example="andrea@example.com")
    phone: Optional[str] = Field(None, example="+1 305 555 0100")
    message: Optional[str] = Field(None, example="Quiero sorprender a mi mamá en Pereira")
    marketing_consent: bool = Field(False, description="Whether the user agreed to marketing communications.")


class LeadCreate(LeadBase):
    pass


class LeadRead(LeadBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True


class OrderBase(BaseModel):
    customer_name: str = Field(..., example="Michael Torres")
    customer_email: EmailStr = Field(...)
    customer_phone: Optional[str] = Field(None, example="+1 212 555 0199")
    recipient_name: str = Field(..., example="María Fernanda")
    recipient_phone: Optional[str] = Field(None, example="313 555 0101")
    occasion: Optional[str] = Field(None, example="Día de la Madre")
    product_slug: str = Field(..., example="ramo-imperial-orquideas")
    message: Optional[str] = Field(None, example="Con todo mi amor desde Miami")
    delivery_date: Optional[date] = Field(None, example="2025-05-12")
    lead_id: Optional[int] = Field(
        None, description="Optional reference to an existing lead id for CRM consolidation."
    )


class OrderCreate(OrderBase):
    pass


class OrderRead(OrderBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True
