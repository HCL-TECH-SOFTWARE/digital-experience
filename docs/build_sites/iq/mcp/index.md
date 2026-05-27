# MCP Server for IQ

The DX MCP server is part of the HCL DX IQ deployment. It provides the Model Context Protocol (MCP) layer that enables IQ services to exchange structured requests and responses with supported AI capabilities.

This section explains the MCP server role in IQ, how to configure and operate it, and how to troubleshoot common MCP-related issues in customer environments.

## Overview

In an IQ deployment, the MCP server runs as a backend service and works with the IQ integrator service. In this architecture:

- The IQ user interface is the customer-facing chat experience.
- The IQ integrator service manages request orchestration and integration logic.
- The MCP server provides standardized MCP communication for supported AI workflows and DX tool operations.

The MCP server provides a single MCP entry point for enabled DX capabilities (for example, Authentication, DAM, and WCM/Core tools), while keeping request handling patterns consistent across tools.

## Key capabilities

- Unified MCP endpoint access for enabled DX tool domains.
- Consistent request handling behavior across registered tools.
- TOON response encoding for JSON tool payloads, with JSON fallback.
- Support for brief and detailed response modes (`summary` and `full`) on many DAM and WCM tools.

## Topics

Refer to the following pages for comprehensive information about the MCP server.

- [MCP Configuration](./configuration.md)
- [MCP Endpoints and Security](./endpoints_and_security.md)
- [MCP Limitations](./limitations.md)
- [MCP Troubleshooting](./troubleshooting.md)
