# Installing IQ

This topic provides instructions for deploying and managing the HCL DX IQ backend server (`hcl-dx-iq` Helm chart) alongside your HCL Digital Experience (DX) deployment.

!!! note
    IQ is available starting with DX CF236 and is deployed as a container-based service.

HCL DX IQ is a core communication and data management layer, referred to as the integrator, that orchestrates the flow of information between the user interface (UI), large language models (LLMs), and user sessions. The IQ backend server:

- Establishes and manages real-time communication channels through WebSocket connections.
- Preserves and manages conversation state and memory for each user session.
- Oversees and standardizes interactions with LLMs.
- Integrates with Model Context Protocol (MCP) servers for enhanced AI capabilities.
- Ensures robust, scalable, and seamless user experiences.

The `hcl-dx-iq` Helm chart deploys both the IQ Integrator service (`dx-iq-integrator`) and the MCP server service (`dx-mcp-server`). Depending on the configuration, these services run either as a unified stack or with the MCP server operating independently in standalone mode. Within this deployment, components divide operational responsibilities across the cluster:

- The IQ user interface handles the customer-facing chat experience inside HCL DX.
- The IQ Integrator service manages request orchestration and backend integration logic.
- The MCP Server provides standardized communication and handles backend tool operations.

## Prerequisites

Before deploying the IQ backend server, verify that your environment includes the following components:

- A container-based HCL DX Core or DX Compose deployment running in Kubernetes using Helm charts
- An operational DX Core deployment
- Access to the image or package repository containing the `hcl-dx-iq` Helm chart, the IQ Integrator and DX MCP server images, and optionally, the Persistence Node and Runtime Controller images
- A valid Kubernetes namespace with appropriate permissions
- One of the following database options for IQ persistence, along with the required database credentials:
    - Internal database through DX Persistence Node (automatically provisioned by Helm)
    - External database (cloud-managed or a separate Kubernetes cluster)
    - Runtime Controller (RTC)-managed database
- A LiteLLM proxy server set up to manage LLM access with two configured proxy models:
    - `iq-general-purpose`: A premium model (such as Claude 4.6 Sonnet or 4.8 Opus) for handling general DX inquiries and executing tools
    - `iq-summary`: A cost-efficient model (such as Claude 4.5 Haiku) for conversation summarization and context window reduction
    - Note that these sample models were recommended at the time of writing, and newer models may be available when you configure your deployment.

    For instructions and a quick-start approach on self-hosted setups, refer to [LiteLLM Proxy Deployment](https://docs.litellm.ai/docs/proxy/deploy){target="_blank"} and [Deploy and Host LiteLLM on Railway](https://railway.com/deploy/litellm-proxy){target="_blank"}. For configuration options, refer to [LiteLLM Model Management](https://docs.litellm.ai/docs/proxy/model_management){target="_blank"}.

    !!!note
        IQ ensures that user authentication credentials (cookies) remain between the DX authentication layer and the MCP server within your Kubernetes cluster and are never transmitted to any external LLM service. Conversation history is transmitted to your configured LLM to enable proper context and functionality. You control the LiteLLM proxy server and determine where conversation data is routed (local models, managed APIs, or other endpoints).

## Overview

Use these topics to navigate the deployment, configuration, validation, and maintenance workflows for the IQ backend services alongside your container-based HCL DX deployment.

- **[Deploying services](deploy-services.md)**  
This section provides step-by-step instructions for deploying the IQ backend servers (IQ Integrator and MCP Server) alongside an existing container-based HCL DX deployment.
- **[Configuring the MCP Server](configuring-mcp.md)**  
This section describes the configuration model, parameter properties, endpoint behavior, and security constraints required to manage tool execution and data exchange patterns for the MCP Server.
- **[Preparing the database](prepare-database.md)**  
This section provides instructions for setting up an optional PostgreSQL database to save chat histories and user sessions. It covers creating database instances, configuring Kubernetes security secrets, and choosing between internally or externally managed database options.
- **[Preparing LiteLLM access](prepare-litellm-access.md)**  
This section describes how to configure the IQ Integrator to authenticate with your LiteLLM proxy server using a static API key.  
- **[IQ environment variables](environment-variables.md)**  
This section lists all environment variables available for the IQ Integrator and DX MCP Server, including their types, defaults, and accepted values.
- **[Validating the deployment](validation.md)**  
This section provides instructions for verifying that your deployment is healthy and operational at any stage of the installation process.
- **[Backing up and restoring data](backup-restore.md)**  
This section provides the procedures for generating database backups and restoring the database state to prevent data loss during upgrades, migrations, or node failures.

???+ info "Related information"
    - [Enabling IQ](../enable.md)
    - [IQ limitations](../limitations.md)
    - [Troubleshooting IQ](../troubleshooting.md)
