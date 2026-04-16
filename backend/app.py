from __future__ import annotations

import os
from typing import Literal

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, field_validator

from src.graphs.graph_builder import GraphBuilder
from src.llms.groqllm import GroqLLM

load_dotenv()


class BlogCreateRequest(BaseModel):
    topic: str = Field(..., min_length=1, description="Topic to generate the blog about")
    language: Literal["hindi", "french"] | None = Field(
        default=None, description="Optional translation language"
    )

    @field_validator("topic")
    @classmethod
    def normalize_topic(cls, value: str) -> str:
        normalized = value.strip()
        if not normalized:
            raise ValueError("Topic cannot be empty")
        return normalized


def _get_allowed_origins() -> list[str]:
    raw_origins = os.getenv("FRONTEND_ORIGINS")
    if raw_origins:
        origins = [origin.strip() for origin in raw_origins.split(",") if origin.strip()]
        if origins:
            return origins
    return ["http://localhost:3000", "http://127.0.0.1:3000"]


app = FastAPI(title="AI Blog Generator API", version="1.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=_get_allowed_origins(),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root() -> dict[str, str]:
    return {"message": "Welcome to the AI Blog Generator API"}


@app.post("/blogs")
async def create_blog(payload: BlogCreateRequest) -> dict:
    llm = GroqLLM().get_llm()
    graph_builder = GraphBuilder(llm)

    if payload.language:
        graph = graph_builder.setup_graph(usecase="language")
        state = graph.invoke(
            {"topic": payload.topic, "current_language": payload.language.lower()}
        )
    else:
        graph = graph_builder.setup_graph(usecase="topic")
        state = graph.invoke({"topic": payload.topic})

    return {"data": state}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
