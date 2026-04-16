import os

from dotenv import load_dotenv
from langchain_groq import ChatGroq


class GroqLLM:
    def __init__(self) -> None:
        load_dotenv()

    def get_llm(self) -> ChatGroq:
        groq_api_key = os.getenv("GROQ_API_KEY")
        if not groq_api_key:
            raise ValueError("GROQ_API_KEY was not found in backend/.env")

        return ChatGroq(
            api_key=groq_api_key,
            model="llama-3.3-70b-versatile",
        )
