from fastapi import FastAPI
from routes import webhook, tools, agents

app = FastAPI()

app.include_router(webhook.router, prefix="/webhooks")
app.include_router(agents.router, prefix="/agents")
app.include_router(tools.router, prefix="/tools")

@app.get("/")
def root():
    return {"helloooo" : "world"}