# Installing IQ backend services

This topic explains how to deploy and manage the HCL DX IQ backend server (`hcl-dx-iq` Helm chart) alongside your HCL Digital Experience (DX) deployment.

## Introduction

HCL DX IQ is a core communication and data management layer (referred to as the "Integrator") that orchestrates the flow of information between the UI, Large Language Models (LLMs), and user sessions. The IQ backend server provides the following capabilities:

- Establishing and managing real-time communication channels via WebSocket connections
- Preserving and managing conversation state ("memory") for each user session
- Overseeing and standardizing interactions with Large Language Models
- Integrating with Model Context Protocol (MCP) servers for enhanced AI capabilities
- Ensuring robust, scalable, and seamless user experiences

> **NOTE:** This document covers the backend server deployment. For information about the IQ UI components and features, refer to the [IQ UI Documentation](../../index.md)

## Prerequisites

Before deploying the IQ backend server, ensure the following prerequisites are met:

1. **DX Core Component Baseline**

    Starting with [CF236](../../../../../../whatsnew/cf20/newcf236.md), IQ can be enabled in container-based DX Core and DX Compose deployments.

2. **Kubernetes Deployment**

    Your HCL DX deployment must be running in Kubernetes using Helm charts.

3. **Required Components**

    - DX Core deployment must be operational
    - Access to your image or package repository containing the `hcl-dx-iq` Helm chart, the IQ Integrator and DX MCP Server images, and optionally, the Persistence Node and/or Runtime Controller images.
    - Valid Kubernetes namespace with appropriate permissions

4. **Database Configuration**

    Choose one database option for IQ persistence:
    - **Option A**: Internal database via DX Persistence Node (automatically provisioned by Helm)
    - **Option B**: External database (cloud-managed, on-premises, or separate Kubernetes cluster)
    - **Option C**: Runtime Controller (RTC)-managed database (advanced orchestration within DX deployment)
    
    Database credentials are required for the selected option.

5. **LiteLLM API Key and Model Configuration**

    You need to set up a LiteLLM proxy server to manage LLM model access. Refer to [LiteLLM Proxy Deployment](https://docs.litellm.ai/docs/proxy/deploy) for setup instructions.
    
    The IQ backend requires two configured proxy models:
    
    - **`iq-general-purpose`**: A premium, capable model (recommended: Claude 3.5 Sonnet or Opus) for handling general DX inquiries and executing tools with high accuracy
    - **`iq-summary`**: A cost-efficient model (recommended: Claude 3.5 Haiku) for conversation summarization and context window reduction
    
    You can map these proxy models to any LLM provider of your choice (OpenAI, Anthropic, local models, etc.). Refer to [LiteLLM Model Management](https://docs.litellm.ai/docs/proxy/model_management) for configuration options and supported providers.
    
    **Data Security**: IQ handles data responsibly:
    - User authentication credentials (cookies) are **never** transmitted to any external LLM service. Credentials remain between the DX authentication layer and the MCP Server within your Kubernetes cluster.
    - Conversation history is transmitted to your configured LLM to enable proper context and functionality. You control the LiteLLM proxy server and determine where conversation data is routed (local models, managed APIs, etc.).

6. **Related Documentation**

    You can make any inquiry about DX products and features limited to the LLM training. See [IQ Integrator limitations](limitations.md).

    For more information about the types of DX-related requests and tasks that can be accomplished i.e. managing sites and content, refer to the [MCP Server Documentation](../../mcp/index.md).

    For more information on accessing the IQ user interface, refer to the [IQ UI Documentation](../../index.md)

## Overview

Follow the deployment workflow below to successfully set up and operate your HCL DX IQ backend environment. Each section guides you through the essential phases of deployment and operational management, from initial service deployment through optional database configuration and license setup. The validation section verifies your deployment at any stage, the backup section provides recovery procedures for disaster scenarios, and the limitations section helps you understand architectural constraints and service boundaries.

- **[Deploying services](deploy-services.md)**  
This section provides step-by-step instructions for configuring the custom values file, deploying the IQ Helm chart initially without persistence, and basic pod health checks.
- **[Preparing the database](prepare-database.md)**  
Optional: Configures persistent PostgreSQL storage for conversation and session persistence. This section provides instructions for provisioning databases, creating Kubernetes secrets, and configuring internal, external, or Runtime Controller (RTC)-managed database options.

## Additional Resources

> [Validating the IQ backend deployment](validation.md)  
> Verify your deployment is healthy and operational at any stage of the installation process.

> [Backing up and restoring data](backup-restore.md)  
> Database backup and restore procedures for disaster recovery (applies only if you configured a database).

> [Limitations](limitations.md)  
> Architectural constraints, service boundaries, and known limitations.

