# DX applications

Review a list of all DX applications and resource definitions that constitute the application runtime and are deployed to containers by using Helm on OpenShift or Kubernetes platforms. As outlined in the overview, applications can also include ConfigMaps, Secrets, and Ingress.

For more information about Helm applications, consult the [Helm documentation](https://helm.sh/docs/){:target="_blank"}. Refer to the DX 9.5 Container component image listing in the DX 9.5 Docker [Image file listing](../../../deployment/install/container/image_list.md) topic.

Note that each application definition lists its next direct dependencies only. Sub-dependencies are not explicitly listed.

## DX 9.5 core

**Depends on:** No dependencies

**Type:** Stateful

HCL DX 9.5 CF196 and later core contains the primary portal and Web Content Manager HCL Digital Experience functionality. The standard deployment deploys at least one pod of the core. If you have an existing on-premises installation of DX 9.5 core, you can also use that installation for your deployment by using the hybrid deployment pattern as described in the DX 9.5 [Hybrid deployment](https://help.hcltechsw.com/digital-experience/9.5/containerization/hybrid_deployment_operator.html){:target="_blank"}<!-- (../../hybrid/hybrid_deployment_operator.md) --> topic.

!!! note
      Applying the hybrid deployment pattern is not supported with Helm in HCL DX 9.5 Container Update CF196.<!-- Never reveal or talk about future plans that HCL might have. Customers can consider such disclosures as "promises" and sue for breach of implicit contract if HCL's plans change. Don't write "not yet supported," "will be added in a later update release," or similar statements. -->

![DX 9.5 Core Application Definition](../../../images/DX%209.5%20Core%20Application%20Definition.png)

## Ring API

**Depends on:** Core (deployed to OpenShift, Kubernetes or Hybrid on-premise)

**Type:** Stateless

The Ring API, a component of the HCL DX Experience API  [HCL DX Experience API](../../../extend_dx/apis/hcl_experience_api/index.md), is a REST API wrapping Core functionality. It provides API endpoints and requires that a DX Core 9.5 instance is deployed and started. That instance can either be running in the Kubernetes or OpenShift deployment or be an existing external on-premises DX-Core installation using the hybrid pattern.

![Ring API Application definition](../../../images/Ring%20API%20Application%20definition.png)

## Content Composer

**Depends on:** Ring API

**Type:** Stateless

Content Composer [HCL Content Composer](../../../manage_content/wcm_authoring/content_composer/index.md) requires the Ring API to be deployed to provide content-authoring capabilities.

![Content Composer Application Definition](../../../images/Content%20Composer%20Application%20Definition.png "Content Composer Application definition")

## Digital Asset Management

**Depends on:** Ring API, Image Processor, Persistence

**Type:** Stateful

Digital Asset Management requires the Ring API be deployed and working to communicate with the DX Core, image processor components to perform image manipulation, and persistence to store its application data. See [Digital Asset Management](../../../manage_content/digital_assets/index.md)

![Digital Asset Management Application Definition](../../../images/Digital%20Asset%20Management%20Application%20Definition.png "Digital Asset Management Application definition")

## Persistence

**Depends on:** No dependencies

**Type:** Stateful

Persistence is used by the Digital Asset Management component to store application data. It consists of a read/write primary node and at least one standby read-only node.

The Runtime Controller automatically switches between the read/write primary and the read-only nodes.

![Persistence Application Definition](../../../images/Persistence%20Application%20Definition.png "Persistence Application definition")

## Image Processor

**Depends on:** No dependencies

**Type:** Stateless

The Image Processor provides image manipulation capabilities that Digital Asset Management uses.

![Image Processor Application definition](../../../images/Image%20Processor%20Application%20definition.png "Image Processor Application definition")

## Runtime Controller

**Depends on:** No dependencies

**Type:** Stateless

The Runtime Controller incorporates runtime management functions for the entire `hcl-dx-deployment` HCL DX 9.5 Container. It enables automated rollout of configuration changes during runtime and monitors for the automated read/write to read-only fallback of Persistence.

![Runtime Controller Application definition](../../../images/Runtime%20Controller%20Application%20definition.png "Runtime Controller Application definition")

## Interdependency Matrix

This matrix shows which HCL DX applications have dependencies on other applications. The matrix also shows sub-dependencies. For example, if an application uses Ring API, it also depends on an operational DX 9.5 Core instance.

![HCL DX 9.5 Helm deployment application dependencies](../../../images/HCL%20DX%209.5%20Helm%20deployment%20application%20dependencies.png "HCL DX 9.5 Helm deployment application dependencies")

Application names are defined as follows:

|Short name|Full Name|
|---------|---------|
|Core|HCL DX 9.5 Core|
|Ring API|Ring API|
|CC|Content Composer|
|DAM|Digital Asset Management|
|PER|Persistence|
|IMG|Image Processor|

???info "Related information"
    -   [HCL DX Experience API](../../../extend_dx/apis/hcl_experience_api/index.md)
    -   [Content Composer](../../../manage_content/wcm_authoring/content_composer/index.md)
    -   [Digital Asset Management](../../../manage_content/digital_assets/index.md)
    -   [Hybrid deployment](../hybrid_deployment/index.md)
