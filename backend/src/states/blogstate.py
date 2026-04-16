from typing import NotRequired, TypedDict

from pydantic import BaseModel, Field


class Blog(BaseModel):
    title: str = Field(description="The title of the blog post")
    content: str = Field(description="The blog post content in markdown")


class BlogState(TypedDict):
    topic: str
    blog: NotRequired[Blog]
    current_language: NotRequired[str]
