"""Application settings and configuration utilities."""

from functools import lru_cache
from pydantic import BaseSettings, Field, validator


class Settings(BaseSettings):
    """Configuration values for the FastAPI service."""

    database_url: str = Field(
        default="postgresql+psycopg2://postgres:postgres@localhost:5432/chocolateria",
        description="SQLAlchemy compatible database URL.",
    )
    allowed_origins: list[str] = Field(
        default_factory=lambda: [
            "http://localhost:5173",
            "http://127.0.0.1:5173",
        ],
        description="List of origins allowed for CORS requests.",
    )

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

    @validator("allowed_origins", pre=True)
    def _split_allowed_origins(cls, value: str | list[str]) -> list[str]:
        """Allow comma separated strings when loading from environment variables."""

        if isinstance(value, str):
            return [origin.strip() for origin in value.split(",") if origin.strip()]
        return value


@lru_cache
def get_settings() -> Settings:
    """Return cached application settings instance."""

    return Settings()
