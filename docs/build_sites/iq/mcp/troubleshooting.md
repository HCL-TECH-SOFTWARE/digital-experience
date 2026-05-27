# MCP Troubleshooting

This section provides guidance for diagnosing and resolving MCP-server-related issues in DX IQ deployments.

## Initial validation

Before investigating specific errors, perform these basic checks:

1. Confirm IQ is installed and enabled.
2. Confirm `dx-iq-integrator` and `dx-mcp-server` services are running and healthy.
3. Confirm network routing and DNS resolution between DX, IQ, and MCP services.
4. Confirm no recent release mismatch between IQ and MCP server components.
5. Confirm MCP endpoint reachability for your deployment path (`/mcp` or `/dx/api/iq/v1/mcp`).
6. Confirm probe endpoint status:
    - `/probe/live` returns healthy service status.
  - `/probe/ready` returns readiness for enabled dependencies.
  - Readiness passes if at least one enabled domain is healthy, and fails only when no enabled domain is healthy or no domains are enabled.

## Common symptoms and actions

| Symptom | Possible cause | Recommended action |
|---------|----------------|--------------------|
| IQ request does not return a response | MCP service is unreachable, unhealthy, or routed incorrectly | Validate service health, route configuration, and MCP endpoint reachability |
| Repeated timeout behavior | Network latency, backend load, or upstream dependency delay | Test from an alternate network path, review backend load, and inspect IQ and MCP logs |
| Intermittent failures in scaled environments | Pod-level instability or routing inconsistency | Check pod health, replica status and restart patterns |
| Payload-related request failures | Request body exceeds configured size limit | Validate payload size and review `BODY_PARSER_JSON_LIMIT` configuration |
| Unable to connect to AI service | MCP server cannot reach configured AI provider dependencies | Check provider credentials, secrets, and outbound connectivity from cluster services |
| Invalid format or protocol errors | Service version mismatch or contract mismatch across components | Verify compatible DX, IQ integrator, and MCP server versions, then review logs for parsing or schema failures |
| Readiness probe fails | One or more enabled dependencies are unavailable | Check `/probe/ready` response details and validate connectivity to required backend services |

### Server-side logging and tracing

For MCP issues, review logs from both IQ integrator and MCP server services. Correlate timestamps across services to identify where failures begin and how errors propagate.

Follow these steps to configure and apply log levels:

1. Configure log levels in the `hcl-dx-iq` Helm chart under the logging section of your `values.yaml` file.

    ```yaml
    logging:
      integrator:
        level:
          - ui:*=info,api:*=info  # Change to "debug" for detailed tracing
      mcpServer:
        level:
          - "api:*=info" # Change to "debug" for detailed tracing
    ```

    For deeper tracing, temporarily use debug levels in controlled environments.

2. Apply the configuration changes by running the `helm upgrade` command:

    ```bash
    helm upgrade <release-name> hcl-dx-iq -f values.yaml
    ```

3. Reproduce the issue with a minimal test prompt or MCP request and collect logs from both services.

If you encounter issues that cannot be resolved using these steps, contact [HCL Support](https://support.hcl-software.com/csm){target="_blank"}.

For known service constraints and behavior boundaries, refer to [MCP Limitations](./limitations.md).


