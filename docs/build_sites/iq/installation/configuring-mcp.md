# Configuring the MCP Server

This page describes the configuration model, parameter properties, and capability constraints for the Model Context Protocol (MCP) Server in HCL Digital Experience (DX) IQ deployments.

The MCP Server establishes the communication layer that enables IQ services to exchange structured requests and responses with supported AI capabilities. It centralizes tool execution and maintain consistent data exchange patterns across the backend environment.

The configuration architecture delivers these capabilities through the following features:

- A single MCP entry point for enabled DX capabilities, including authentication, DAM Digital Asset Management (DAM), Web Content Manager (WCM), and Core tools.
- Consistent request handling behavior across all registered tools.
- Token-Oriented Object Notation (TOON) response encoding for JSON tool payloads, with a standard JSON text fallback.
- Support for brief and detailed response modes (`summary` and `full`) on many DAM and WCM tools.

## Prerequisites

Before validating the configuration, ensure your environment meets the following requirements:

1. DX CF236 or later is installed.
2. IQ is enabled in your DX environment.
3. The IQ chart release is deployed successfully.
4. Networking rules permit communication between DX, IQ integrator, and MCP Server services.

## Verifying service-level expectations

Use these baseline checks in your environment:

1. Confirm the `dx-mcp-server` pod is running and healthy.
2. Confirm the service name and namespace resolution are correct.
3. Confirm IQ integrator and MCP Server are from compatible release levels.

!!! note
    If IQ was upgraded, verify that the associated MCP Server deployment was upgraded as part of the same release plan.

## Configuring server parameters

The MCP Server relies on specific Helm chart configuration values to control tool availability, payload capacity, and session data context.

Use the following feature flags to enable or disable tool domains to expose only the capabilities required by your deployment.

| Parameter {: style="width: 25%; white-space: nowrap;"}| Description {: style="width: 45%;"}| Default value {: style="width: 15%;"}|
|:----------|:------------|:--------------|
|`ENABLE_DAM`|Enables Digital Asset Management (DAM) tools.|`false`|
|`ENABLE_WCM`|Enables Web Content Manager (WCM) and DX Core content-related tools.|`false`|
|`STANDALONE_MODE`|Controls authentication tool enablement and determines whether the server integrates with HCL DX user authentication or runs in isolation.|`false`|

Use the following parameter to adjust the payload handling limit:

| Parameter {: style="width: 25%; white-space: nowrap;"}| Description {: style="width: 45%;"}| Default value {: style="width: 15%;"}|
|:----------|:------------|:--------------|
|`BODY_PARSER_JSON_LIMIT`|Limits the size of incoming JSON-RPC payloads to ensure service stability. This parameter maps to the body-parser `jsonLimit` setting at runtime. Increase this value in the Helm chart configuration if your deployment requires larger payloads.|`1mb`|

Use the following JSON-RPC parameters to propagate request-scoped context to downstream HCL DX API calls.

| Parameter {: style="width: 25%; white-space: nowrap;"}| Context type | Description {: style="width: 46%;"}|
|:----------|:-------------|:-----------|
| `params.cookies` | Cookie context | Forwards session cookies to downstream HCL DX requests. |
| `params.vpContext` | Virtual portal context | Applies virtual portal parameters to downstream request routing to maintain consistent behavior. |

## Managing endpoints and security

The MCP endpoints are internal to the IQ backend deployment and are accessed only by the IQ integrator service within the cluster. They are not exposed externally and are not routed through HAProxy.

Route tool execution requests through the following endpoints to handle traffic for enabled DX tool domains:

| Endpoint path {: style="width: 25%; white-space: nowrap;"}| Type | Network and runtime behavior {: style="width: 50%;"}|
|:--------------|:-----|:-----------------------------|
|`/mcp`|Tool API (Unprefixed)|Provides MCP Server functionality as the unprefixed entry point for enabled DX tool domains.|
|`/dx/api/iq/v1/mcp`|Tool API (Versioned)|Provides MCP Server functionality as the versioned entry point for enabled DX tool domains to prevent breaking changes.|

!!!note
    MCP tool responses use TOON encoding for JSON payloads when encoder support is available. If encoding is unavailable, the server falls back to standard JSON text responses. TOON output strips out repetitive structural syntax to make payloads more compact, which reduces token usage in LLM-driven workflows.

Monitor service health and backend dependency availability using these operational probes:

| Probe path {: style="width: 25%; white-space: nowrap;"}| Type | Description {: style="width: 50%;"}|
|:-----------|:-----|:------------|
|`/probe/live`|Liveness probe|A standard health check that confirms the server process is actively running inside the container.|
|`/probe/ready`|Readiness probe|A dependency check that validates the backend tools are responsive. This check runs only for enabled tool domains. It reports healthy if at least one domain works and fails if everything is turned off or broken.|

## Validating post-deployment status

After deployment, upgrade, or configuration updates, validate the following baseline items:

1. IQ interface loads successfully in DX.
2. IQ requests complete cleanly for simple prompts.
3. MCP endpoints are fully reachable from expected network paths and exhibit correct HTTP upgrade or protocol behavior.
4. Requests process reliably without repeated timeout or payload-limit failures.
5. No persistent MCP connectivity errors, timeout logs, or unauthorized access patterns appear in the system logs.

## Next steps

After configuring the MCP Server:

1. (Optional) Set up a [PostgreSQL database](prepare-database.md) for persistence.
2. Configure [IQ Integrator authentication for LiteLLM access](prepare-litellm-access.md).

???+ info "Related information"
    - [IQ environment variables](environment-variables.md)
    - [Preparing the database](prepare-database.md)
    - [Preparing LiteLLM access](prepare-litellm-access.md)
    - [Troubleshooting - MCP Server](../troubleshooting.md#mcp-server)
