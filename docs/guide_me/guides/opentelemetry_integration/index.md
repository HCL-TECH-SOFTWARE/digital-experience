# OpenTelemetry Integration with HCL DX

## Overview

This guide provides comprehensive instructions for integrating OpenTelemetry (OTel) with HCL Digital Experience (DX) to enable observability across your deployment. OTel is an open-source observability framework that provides a unified approach to collecting traces, metrics, and logs from your applications.

By integrating OTel with HCL DX, you can:

- Collect distributed traces across all DX components
- Monitor application metrics and performance indicators
- Aggregate logs with correlation context
- Export telemetry data to your preferred observability backend (Prometheus, Grafana, Elastic, etc.)

## Prerequisites

Before proceeding with the integration, ensure you have:

- A running HCL Digital Experience deployment on Kubernetes
- Helm 3.0 or later installed and configured
- kubectl access to your Kubernetes cluster
- Administrative access to modify deployment configurations
- An observability backend to receive telemetry data, such as Prometheus or Grafana

!!! important
    Be aware that enabling continuous tracing capabilities, such as OTel, can affect performance because it processes and transports data. Test the OTel integration in your environments and adjust resource allocations for individual services as needed.

## Architecture

HCL DX consists of multiple services that can be instrumented with OTel:

**Node.js Services:**
- Digital Asset Management (DAM)
- Image Processor
- Ring API

**Java Services:**
- DX Core
- WebEngine
- Runtime Controller
- License Manager

The OpenTelemetry Collector acts as a centralized telemetry data pipeline that receives, processes, and exports observability data from all instrumented services.

- **[Deploying the OpenTelemetry Collector](deploying_otel_collector.md)**  
Learn how to deploy the collector to your Kubernetes cluster using Helm, configure the telemetry pipeline, and verify that the service is running.
- **[Configuring Node.js services](configure_nodejs_services.md)**  
Learn how to enable built-in instrumentation for components like DAM, the Image Processor, and the Ring API using the HCL DX Helm chart.
- **[Configuring Java services](configure_java_services.md)**  
Learn how to activate the pre-bundled OpenTelemetry Java Agent for DX Core, WebEngine, the Runtime Controller, and the License Manager.
- **[Monitoring and troubleshooting](monitoring_and_troubleshooting.md)**  
Learn how to track distributed traces in Grafana, query performance metrics in Prometheus, and resolve common deployment issues.
