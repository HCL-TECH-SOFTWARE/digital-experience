# Deploying DX 9.5 applications to container platforms using Helm

This topic provides a list of all DX applications and resource definitions that configure the application runtime and are deployed to containers using Helm on OpenShift or Kubernetes platforms. As outlined in the overview, applications can also include ConfigMaps, Secrets, and Ingress.

For more information about Helm applications, consult the [Helm documentation](https://helm.sh/docs/). Refer to the DX 9.5 Container component image listing in the DX 9.5 Docker [Image file listing](docker.md) topic.

Do note that each application defined only lists its next direct dependencies. Sub-dependencies are not explicitly listed.

## DX 9.5 Core

**Depends on:** No dependencies

**Type:** Stateful

HCL DX 9.5 CF196 and later Core contains the primary Portal and Web Content Manager HCL Digital Experience functionality. The standard deployment deploys at least one Pod of Core. If you have an existing on-premise installation of DX 9.5 Core, you can also use that one for your deployment using the Hybrid deployment pattern as described in the DX 9.5 [Hybrid deployment](hybrid_deployment_operator.md) topic.

**Note:** Application of the hybrid deployment pattern is not yet supported with Helm in HCL DX 9.5 Container Update CF196, and will be added in a later update release.

![DX 9.5 Core Application Definition](../images/DX%209.5%20Core%20Application%20Definition.png "DX 9.5 Core Application definition")

## Ring API

**Depends on:** Core \(deployed to OpenShift, Kubernetes or Hybrid on-premise\)

**Type:** Stateless

The Ring API, a component of the [HCL DX Experience API](../open_api/openapi_overview.md), is a REST API wrapping Core functionality. It provides easy-to-use API endpoints and requires that a DX Core 9.5 instance is deployed and started. That instance can either be running inside the Kubernetes or OpenShift deployment or be an existing external on-premise DX-Core installation using the Hybrid pattern.

![Ring API Application definition](../images/Ring%20API%20Application%20definition.png "Ring API Application definition")

## Content Composer

**Depends on:** Ring API

**Type:** Stateless

[Content Composer](../content_composer/cont_comp_overview.md) requires the Ring API to be deployed to execute Content authoring capabilities.

![Content Composer Application Definition](../images/Content%20Composer%20Application%20Definition.png "Content Composer Application definition")

## Digital Asset Management

**Depends on:** Ring API, Image Processor, Persistence

**Type:** Stateful

[Digital Asset Management](../digital_asset_mgmt/digital_asset_mgmt_overview.md) requires the Ring API be deployed and operational to communicate with the DX Core, and Image Processor components to perform image manipulation, and Persistence to store its application data.

![Digital Asset Management Application Definition](../images/Digital%20Asset%20Management%20Application%20Definition.png "Digital Asset Management Application definition")

## Persistence

**Depends on:** No dependencies

**Type:** Stateful

Persistence is used by the Digital Asset Management component to store application data. It consists of a read/write primary node and at least one standby read-only node.

The switch between the read/write primary and the read-only nodes is automatically performed by the Runtime Controller.

![Persistence Application Definition](../images/Persistence%20Application%20Definition.png "Persistence Application definition")

## Image Processor

**Depends on:** No dependencies

**Type:** Stateless

The Image Processor provides image manipulation capabilities that are leveraged by Digital Asset Management.

![Image Processor Application definition](../images/Image%20Processor%20Application%20definition.png "Image Processor Application definition")

## Design Studio \(Beta\)

**Depends on:** Core, Ring API

**Type:** Stateless

Refer to the [Design Studio \(Beta\)](../design_studio/design_studio_overview.md) topic section for more information about this application.

![Design Studio (Beta) Application Definition](../images/Design%20Studio%20Beta%20Application%20Definition.png "Design Studio (Beta) Application Definition")

## Runtime Controller

**Depends on:** No dependencies

**Type:** Stateless

The Runtime Controller incorporates runtime management functionality for the entire HCL DX 9.5 Container `hcl-dx-deployment`. It enables automated rollout of configuration changes during runtime and acts as a “watchdog” to monitor for the automated read/write to read-only fallback of Persistence.

![Runtime Controller Application definition](../images/Runtime%20Controller%20Application%20definition.png "Runtime Controller Application definition")

## Interdependency Matrix

This matrix shows which HCL DX applications have dependencies on other applications. This also includes sub-dependencies. For example, if an application uses Ring API, it is also dependent on an operational DX 9.5 Core instance.

![HCL DX 9.5 Helm deployment application dependencies](../images/HCL%20DX%209.5%20Helm%20deployment%20application%20dependencies.png "HCL DX 9.5 Helm deployment application dependencies")

Application names are defined as follows:

|Shortname|Full Name|
|---------|---------|
|Core|HCL DX 9.5 Core|
|Ring API|Ring API|
|CC|Content Composer|
|DAM|Digital Asset Management|
|DS|Design Studio|
|PER|Persistence|
|IMG|Image Processor|

