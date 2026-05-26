# OpenTelemetry Integration Guide

This guide provides comprehensive instructions for integrating OpenTelemetry (OTel) with HCL Digital Experience (DX) to enable observability across your containerized deployment. OTel is an open-source observability framework that provides a unified approach to collecting traces, metrics, and logs from your applications.

By integrating OTel with HCL DX, you can:

- Collect distributed traces across all DX components.
- Monitor application metrics and performance indicators.
- Aggregate logs with correlation context.
- Export telemetry data to your preferred observability backend, such as Prometheus, Grafana, or Elastic.

## Prerequisites

Before you begin the integration, ensure that you have the following components and access:

- A running HCL DX deployment on Kubernetes
- Helm 3.0 or later installed and configured
- `kubectl` access to your Kubernetes cluster
- Administrative access to modify deployment configurations
- An observability backend to receive telemetry data

### Architecture

HCL DX includes multiple components that support OTel tracking across different runtimes, which all stream data through the OTel Collector pipeline:

| Runtime | Supported Services |
| :--- | :--- |
| **Node.js** | Digital Asset Management (DAM), Image Processor, and Ring API |
| **Java** | DX Core, WebEngine, Runtime Controller, and License Manager |

The OTel Collector acts as the centralized data pipeline that receives, processes, and exports this telemetry data to your backend systems.

!!! warning "Performance impact"
    Enabling continuous OTel tracking can affect system performance due to data processing and transport overhead. Test the integration in your staging environments and adjust service resource allocations as needed.

- **[Deploying the OpenTelemetry Collector](deploying_otel_collector.md)**  
Learn how to deploy the collector to your Kubernetes cluster using Helm, configure the telemetry pipeline, and verify that the service is running.
- **[Enabling OTel for Java and Node.js services](configuring_services.md)**  
Learn how to configure services using the HCL DX Helm chart. You can enable Node.js instrumentation for DAM, the Image Processor, and the Ring API, and activate the pre-bundled OTel Java agent for DX Core, WebEngine, the Runtime Controller, and the License Manager.
- **[Monitoring and troubleshooting](monitoring_and_troubleshooting.md)**  
Learn how to track distributed traces in Grafana, query performance metrics in Prometheus, and resolve common deployment issues.
