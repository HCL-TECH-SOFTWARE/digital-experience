---
id: helm_arch_applications
title: Applications
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This document will provide you with the deployment architecture of each application inside the HCL Digital Experience Kubernetes deployment using Helm Charts.

## Applications

This is a list of all applications that can be deployed inside Kubernetes. Please note, that each application will only list its next direct dependencies here. Sub-dependencies are not explicitly listed.

### Core

**Depends on:** No dependencies  
**Type:** Stateful

Core contains the main functionality that HCL Digital Experience consists of. The standard deployment will deploy at least one Pod of Core. If you already have an existing on-premise installation of DX Core, you can also use that one for your deployment. This deployment model is called hybrid.

![Core Application Structure](../../../images/helm/architecture/app_core.png)

### Ring API

**Depends on:** Core (either Kubernetes or regular on-premise)  
**Type:** Stateless

The Ring API is a REST API wrapping Core functionality. It provides easy to use API endpoints and needs a DX Core instance running. That instance can either be running inside the Kubernetes deployment or be an existing external on-premise DX-Core installation.

![Core Application Structure](../../../images/helm/architecture/app_ring-api.png)

### Content Composer

**Depends on:** Ring API  
**Type:** Stateless

Content Composer requires the Ring API to provide its Content authoring capabilities.

![Content Composer Application Structure](../../../images/helm/architecture/app_content-composer.png)

### Digital Asset Management

**Depends on:** Ring API, Image Processor, Persistence  
**Type:** Stateful

Digital Asset Management requires Ring API to talk to DX Core, the Image Processor to perform image manipulation and Persistence to store its application data.

![Digital Asset Management Application Structure](../../../images/helm/architecture/app_digital-asset-management.png)

### Persistence

**Depends on:** No dependencies  
**Type:** Stateful

Persistence is used by the Digital Asset Management to store application data. It consists of a read/write primary node and at least one standby read-only node.

The switch between the read/write primary and the read-only nodes is automatically performed by the Runtime Controller.

![Persistence Application Structure](../../../images/helm/architecture/app_persistence.png)

### Image Processor

**Depends on:** No dependencies  
**Type:** Stateless

The Image Processor provides image manipulation capabilities that are leveraged by Digital Asset Management.

![Image Processor Application Structure](../../../images/helm/architecture/app_image-processor.png)

### Design Studio (beta)

**Depends on:** Core, Ring API
**Type:** Stateless

![Design Studio Application Structure](../../../images/helm/architecture/app_design-studio.png)

### Runtime Controller

**Depends on:** No dependencies  
**Type:** Stateless

The Runtime Controller incorporates runtime management functionality for the hcl-dx-deployment. It enabled automated rollout of configuration changes during runtime and acts as a watchdog for the automated read/write to read-only fallback of Persistence.

![Runtime Controller Application Structure](../../../images/helm/architecture/app_runtime-controller.png)

## Interdependency Matrix

This matrix shows which application has which other application as a dependency. This also includes sub-dependencies, e.g. if an application uses Ring API, it is also depending on DX Core.

![Inderdependency Matrix](../../../images/helm/architecture/app_matrix.png)

Application names translate the following way:

| Shortname | Full Name                |
| --------- | ------------------------ |
| Core      | Core                     |
| Ring API  | Ring API                 |
| CC        | Content Composer         |
| DAM       | Digital Asset Management |
| DS        | Design Studio            |
| PER       | Persistence              |
| IMG       | Image Processor          |
