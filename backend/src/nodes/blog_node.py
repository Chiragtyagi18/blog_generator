from langchain_core.messages import HumanMessage

from src.states.blogstate import BlogState


class BlogNode:
    def __init__(self, llm) -> None:
        self.llm = llm

    def title_creation(self, state: BlogState) -> dict:
        prompt = (
            "You are an expert blog writer. Generate one creative, SEO-friendly blog title "
            f"for this topic: {state['topic']}. Return only the title text."
        )
        response = self.llm.invoke(prompt)
        return {"blog": {"title": response.content.strip()}}

    def content_generation(self, state: BlogState) -> dict:
        prompt = (
            "You are an expert blog writer. Write a detailed, SEO-friendly blog in Markdown "
            f"for this topic: {state['topic']}. Use headings, bullets, and examples where useful."
        )
        response = self.llm.invoke(prompt)
        return {
            "blog": {
                "title": state["blog"]["title"],
                "content": response.content.strip(),
            }
        }

    def translation(self, state: BlogState) -> dict:
        language_names = {"hindi": "Hindi (हिंदी)", "french": "French (Français)"}
        target_lang = language_names.get(state["current_language"], state["current_language"])
        prompt = (
            "Translate the following blog from English to "
            f"{target_lang}. Preserve markdown formatting exactly and translate the title and all content.\n\n"
            f"Title:\n{state['blog']['title']}\n\nContent:\n{state['blog']['content']}\n\n"
            "Return the translated title on the first line and translated markdown content after that."
        )
        response = self.llm.invoke([HumanMessage(content=prompt)])
        translated_text = response.content.strip()
        lines = translated_text.splitlines()

        translated_title = state["blog"]["title"]
        translated_content = translated_text

        if lines:
            translated_title = lines[0].lstrip("# ").strip() or translated_title
            if len(lines) > 1:
                translated_content = "\n".join(lines[1:]).strip() or translated_text

        return {
            "blog": {"title": translated_title, "content": translated_content},
            "current_language": state["current_language"],
        }

    def route(self, state: BlogState) -> dict:
        return {"current_language": state["current_language"]}

    def route_decision(self, state: BlogState) -> str:
        return state["current_language"]
