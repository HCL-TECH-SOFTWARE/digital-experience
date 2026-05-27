# MCP Limitations

This page lists known limitations and behavior boundaries for the MCP server used by DX IQ.

## Scope and enablement

- Available tool domains depend on feature flags (`ENABLE_DAM`, `ENABLE_WCM`, `STANDALONE_MODE`). Disabled domains are not exposed through MCP.
- Authentication tool behavior in standalone mode differs from integrated deployment behavior.

## Response and output constraints

- TOON encoding is applied to JSON text tool payloads. Non-JSON text and non-text content are not transformed.
- If TOON encoder loading fails, responses fall back to JSON text format.
- `summary` and `full` response-detail modes are available for DAM and WCM tools, but not all tools expose mode selection.

## Request and session behavior

- The server uses stateless request processing. Session persistence and sticky-session assumptions should not be relied upon.
- In multi-replica environments, sequential requests can be handled by different pods.

## Payload and transport constraints

- Large JSON-RPC requests can be rejected when they exceed the configured body-parser limit.
- Payload limits are controlled by `BODY_PARSER_JSON_LIMIT` (configurable through helm chart).

## Context propagation constraints

- Cookie and virtual portal context are propagated from request parameters when provided.
- If these values are missing or invalid, downstream requests use default behavior.

## Monitoring and readiness constraints

- Readiness checks validate only currently enabled dependencies.
- Readiness returns success when at least one enabled domain is healthy.
- Readiness returns failure only when no enabled domain is healthy or when no domains are enabled.
- A passing liveness check confirms process availability, not full backend dependency health.

For operational diagnostics, refer to [MCP Troubleshooting](./troubleshooting.md).
