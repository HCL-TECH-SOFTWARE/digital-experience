# MCP Endpoints and Security

This page summarizes MCP endpoint behavior for DX IQ deployments.

## Endpoint options

The MCP server provides two endpoint patterns:

- `/mcp` for the latest unprefixed endpoint path.
- `/dx/api/iq/v1/mcp` for versioned endpoint usage.

Both endpoint patterns provide MCP server functionality. In production, either endpoint can act as the single MCP entry point for enabled DX tool domains.

The MCP endpoints are internal to the IQ backend deployment and are accessed only by the IQ integrator service within the cluster. They are not exposed externally and are not routed through HAProxy.

## Probe endpoints

The MCP server exposes probe endpoints for operational monitoring:

- `/probe/live`: liveness endpoint for service process health.
- `/probe/ready`: readiness endpoint that validates enabled backend dependencies.

Readiness is domain-aware: checks run only for enabled domains, passes when at least one enabled domain is healthy, and fails only when no enabled domain is healthy or when no domains are enabled.

## Response behavior

MCP tool responses are TOON-encoded for JSON payloads when encoder support is available. If encoding is unavailable, the server falls back to JSON text responses.

TOON output is designed to be more compact than plain JSON, which can help reduce token usage in LLM-driven workflows.

## Validation checks

Use this quick validation list after configuration changes:

1. Verify endpoint reachability from authorized client paths.
2. Verify expected HTTP upgrade or protocol behavior where applicable.
3. Verify that requests are processed without repeated timeout or payload-limit failures.
4. Verify that no unauthorized access patterns appear in logs.
