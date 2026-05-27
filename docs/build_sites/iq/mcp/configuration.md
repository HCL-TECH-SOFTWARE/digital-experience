# MCP Configuration

This page describes the customer-operable MCP server configuration model used with DX IQ deployments.

## Deployment model

For Kubernetes and Helm-based IQ deployments, the `hcl-dx-iq` chart deploys both:

- IQ integrator service (`dx-iq-integrator`)
- MCP server service (`dx-mcp-server`)

These services are intended to be deployed together as part of a single IQ backend stack.

## Tool-domain enablement flags

The MCP server supports feature flags to enable or disable tool domains.

- `ENABLE_DAM`: enables DAM tools.
- `ENABLE_WCM`: enables WCM and core-content related tools.
- `STANDALONE_MODE`: controls authentication tool enablement.

Use these flags to expose only the capabilities required by your deployment.

## Prerequisites

Before validating MCP configuration, ensure that:

1. DX CF236 or later is installed.
2. IQ is enabled in your DX environment.
3. The IQ chart release is deployed successfully.
4. Networking rules permit communication between DX, IQ integrator, and MCP server services.

## Service-level configuration expectations

Use these baseline checks in your environment:

1. Confirm the `dx-mcp-server` pod is running and healthy.
2. Confirm the service name and namespace resolution are correct.
3. Confirm IQ integrator and MCP server are from compatible release levels.

!!! note
    If IQ was upgraded, verify that the associated MCP server deployment was upgraded as part of the same release plan.

## Request-size control

The MCP server supports request body size limits for JSON-RPC payload handling.

- Parameter: `BODY_PARSER_JSON_LIMIT`
- Typical default: `1mb`
- Purpose: protect service stability by rejecting oversized payloads
- Runtime behavior: mapped to the body-parser `jsonLimit` setting for incoming JSON-RPC requests

If your deployment requires larger payloads, update this value through your Helm chart configuration.

## Request context propagation

For downstream DX API calls, request-scoped context is extracted from JSON-RPC parameters and propagated automatically.

- Cookie context from `params.cookies` can be forwarded to downstream DX requests.
- Virtual portal context from `params.vpContext` can be applied for request routing.

This design reduces repeated manual context handling in individual tools and keeps behavior consistent.

## Post-deployment validation checklist

After deployment or upgrade, validate the following:

1. IQ interface loads in DX.
2. IQ requests complete successfully for simple prompts.
3. MCP endpoints are reachable from expected network paths.
4. No persistent MCP connectivity or timeout errors appear in logs.

If issues persist, continue with [MCP Troubleshooting](./troubleshooting.md).
