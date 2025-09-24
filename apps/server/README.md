## Server: Webhook Listener

### Responsibilities
- **Receive**: Accept HTTP POST webhooks from cloud agent provider (Vapi currently)
- **Verify**: Validate signatures/secrets before processing
- **Process**: Transform, persist, and/or enqueue events for async handlers
- **Acknowledge**: Return fast 2xx responses after safe receipt

### Quickstart
Use `uv sync` to sync dependencies, `fastapi dev main.py` for development

### Endpoints
`POST /webhook/events`

Endpoint for conversation events (Vapi currently)

`GET /health`

`POST /agents`

Create an agent

`POST /agents/{agentId}`

Edit existing agent

`POST /tools/query`

Agent tool. Search for resources within given area

### Deployment
- Bind `HOST` and `PORT` via environment.
- Provide secrets via your secrets manager.
- Ensure HTTPS termination at the edge or via your gateway.

### Observability
- Emit structured logs at `info` by default.
- Consider request IDs and minimal event metadata for traceability.