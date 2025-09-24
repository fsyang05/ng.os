from pydantic import BaseModel

# mostly boilerplate definition.

# may also want to include things like
# - fkey for org
# - active / nonactive
# - and more (based on what users want)

class Agent(BaseModel):
    id: int
    name: str
    prompt: str
    created_at: int