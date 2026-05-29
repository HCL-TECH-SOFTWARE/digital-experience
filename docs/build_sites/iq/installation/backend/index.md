# Installing IQ backend services

This topic explains how to deploy and manage the HCL DX IQ backend server (`hcl-dx-iq` Helm chart) alongside your HCL Digital Experience (DX) deployment.

## Introduction

HCL DX IQ is a core communication and data management layer (referred to as the "Integrator") that orchestrates the flow of information between the UI, Large Language Models (LLMs), and user sessions. The IQ backend server provides the following capabilities:

- Establishing and managing real-time communication channels via WebSocket connections
- Preserving and managing conversation state ("memory") for each user session
- Overseeing and standardizing interactions with Large Language Models
- Integrating with Model Context Protocol (MCP) servers for enhanced AI capabilities
- Ensuring robust, scalable, and seamless user experiences

> **NOTE:** This document covers the backend server deployment. For information about the IQ UI components and chatbot features, refer to the [HCL Doc IQ chatbot documentation](../../../../../../get_started/product_overview/doc_iq_chatbot.md).

## Prerequisites

Before deploying the IQ backend server, ensure the following prerequisites are met:

1. **DX Core Component Baseline**

    Starting with [CF236](../../../../../../whatsnew/cf20/newcf236.md), DX Core Component Baseline is required for IQ.

2. **Kubernetes Deployment**

    Your HCL DX deployment must be running in Kubernetes using Helm charts.

3. **Required Components**

    - DX Core deployment must be operational
    - Access to the HCL Artifactory repository containing the `hcl-dx-iq` Helm chart
    - Valid Kubernetes namespace with appropriate permissions

4. **Credentials and Secrets**

    - LITELLM API key for LLM integration (if using LiteLLM)
    - Database option for IQ persistence (aligned with DAM patterns):
      - internal non-RTC PostgreSQL
      - external (customer-managed) database
      - internal RTC-managed database
    - Database credentials for the selected database option

5. **Related Documentation**

    > **FIXME / PLACEHOLDER:** [MCP Server Documentation](#) - *Add link to MCP Server documentation when available.*

    > **FIXME / PLACEHOLDER:** [IQ UI Documentation](#) - *Add link to IQ UI documentation when available.*

## Overview

<!--introduction-->

- **[Preparing the database](prepare-database.md)**  
This section provides instructions for provisioning PostgreSQL databases, creating required Kubernetes secrets, and configuring persistence settings for both external and Runtime Controller (RTC)-managed environments.
- **[Deploying services](deploy-services.md)**  
This section provides step-by-step instructions for configuring the custom values file, deploying the IQ Helm chart, and executing end-to-end validation tests to verify container health.
- **[Backing up and restoring data](backup-restore.md)**  
This section provides procedures for creating database dumps, downloading backups off-cluster, restoring data to a new database instance, and executing post-recovery pod restarts.
- **[Limitations](limitations.md)**  
This section outlines the architectural boundaries, service scopes, database naming constraints, and AI model knowledge cutoff limitations for the IQ backend environment.

<!--
## IQ install

- [Deploying and Managing HCL DX IQ Backend Server](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_install_dx_iq.md)
- [Installation and deployment steps](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_install_dx_iq.md#installation-deployment)

## Configuring DB

- [Configure values.yaml for persistence](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_install_dx_iq.md#step-1-configure-valuesyaml-for-persistence)
- [External (Non-RTC) database configuration](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_install_dx_iq.md#scenario-a-using-an-external-non-rtc-database)
- [RTC-managed database configuration](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_install_dx_iq.md#scenario-b-using-a-runtime-controller-rtc-managed-database)

## DB backup and restore

- [Backup and restore](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_install_dx_iq.md#backup-and-restore)
- [Backup persistence](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_install_dx_iq.md#backup-persistence)
- [Restore persistence](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_install_dx_iq.md#restore-persistence)

## Deployment key management

- [Configure license management](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_install_dx_iq.md#step-2-configure-license-management)
- [LiteLLM configuration](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_install_dx_iq.md#step-2-prepare-configuration-values)
-->