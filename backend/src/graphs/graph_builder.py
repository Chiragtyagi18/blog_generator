from langgraph.graph import END, START, StateGraph

from src.nodes.blog_node import BlogNode
from src.states.blogstate import BlogState


class GraphBuilder:
    def __init__(self, llm) -> None:
        self.llm = llm

    def build_topic_graph(self):
        graph = StateGraph(BlogState)
        node = BlogNode(self.llm)

        graph.add_node("title_creation", node.title_creation)
        graph.add_node("content_generation", node.content_generation)

        graph.add_edge(START, "title_creation")
        graph.add_edge("title_creation", "content_generation")
        graph.add_edge("content_generation", END)
        return graph

    def build_language_graph(self):
        graph = StateGraph(BlogState)
        node = BlogNode(self.llm)

        graph.add_node("title_creation", node.title_creation)
        graph.add_node("content_generation", node.content_generation)
        graph.add_node(
            "hindi_translation",
            lambda state: node.translation({**state, "current_language": "hindi"}),
        )
        graph.add_node(
            "french_translation",
            lambda state: node.translation({**state, "current_language": "french"}),
        )
        graph.add_node("route", node.route)

        graph.add_edge(START, "title_creation")
        graph.add_edge("title_creation", "content_generation")
        graph.add_edge("content_generation", "route")
        graph.add_conditional_edges(
            "route",
            node.route_decision,
            {"hindi": "hindi_translation", "french": "french_translation"},
        )
        graph.add_edge("hindi_translation", END)
        graph.add_edge("french_translation", END)
        return graph

    def setup_graph(self, usecase: str):
        if usecase == "topic":
            graph = self.build_topic_graph()
        elif usecase == "language":
            graph = self.build_language_graph()
        else:
            raise ValueError(f"Unknown usecase: {usecase}")
        return graph.compile()
