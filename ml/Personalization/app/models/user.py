from pydantic import BaseModel

class UserInteraction(BaseModel):
    user_id: str
    article_id: str
    interaction_type: str  # e.g., 'click', 'like', etc.