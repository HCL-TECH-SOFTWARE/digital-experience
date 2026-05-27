# MCP Endpoints and Security

This page summarizes MCP endpoint behavior and customer-facing security considerations for DX IQ deployments.

## Endpoint options

The MCP server provides two endpoint patterns:

- `/mcp` for the latest unprefixed endpoint path.
- `/dx/api/iq/v1/mcp` for versioned endpoint usage.

Both endpoint patterns provide MCP server functionality.

In production, either endpoint can act as the single MCP entry point for enabled DX tool domains.

## Probe endpoints

The MCP server exposes probe endpoints for operational monitoring:

- `/probe/live`: liveness endpoint for service process health.
- `/probe/ready`: readiness endpoint that validates enabled backend dependencies.

The readiness response reflects currently enabled tool domains. For example, DAM and WCM dependency checks are only executed when their corresponding feature flags are enabled.

Readiness passes if at least one enabled domain is healthy. Readiness fails only when no enabled domain is healthy, or when no domains are enabled.

## Security considerations

Apply these security practices in customer environments:

1. Restrict endpoint exposure to trusted networks.
2. Route endpoint access through approved ingress or reverse proxy controls.
3. Keep TLS and certificate management aligned with your platform standards.
4. Monitor logs for repeated unauthorized access attempts or malformed request patterns.

## Related IQ endpoints

IQ interface and request processing also depend on IQ service endpoints, including WebSocket communication paths used by the chat experience.

When troubleshooting end-to-end behavior, validate both:

1. IQ endpoint connectivity.
2. MCP endpoint connectivity.

## Response behavior

MCP tool responses are TOON-encoded for JSON payloads when encoder support is available. If encoding is unavailable, the server falls back to JSON text responses.

TOON output is designed to be more compact than plain JSON, which can help reduce token usage in LLM-driven workflows.

Many DAM and WCM tools also support response detail modes:

- `summary` mode for concise output.
- `full` mode for complete payload details.

Mode availability depends on the specific tool schema.

## Session and request behavior

MCP request handling is designed for stateless processing patterns.

Operational implications:

- Avoid assuming sticky-session behavior for MCP requests.
- Validate load balancer and pod-routing behavior in multi-replica environments.
- Use observability data to identify latency and failure patterns per service instance.

## Validation checks

Use this quick validation list after configuration changes:

1. Verify endpoint reachability from authorized client paths.
2. Verify expected HTTP upgrade or protocol behavior where applicable.
3. Verify that requests are processed without repeated timeout or payload-limit failures.
4. Verify that no unauthorized access patterns appear in logs.
