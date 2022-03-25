# Deploying HCL DX CF196 to container platforms using Helm

This topic provides administrators with a high-level overview of the HCL Digital Experience 9.5 Kubernetes and OpenShift deployment capabilities using Helm.

Beginning with HCL Digital Experience 9.5 Container Update CF196, administrators can deploy HCL DX 9.5 CF196 and later images to supported container platforms using Helm Charts. Using a Helm Chart deployment provides administrators a larger degree of transparency in the deployment operations than the operator-based deployment also available using the [HCL DX dxctl process](dxtools_dxctl.md).

## Overview

Helm is a software package manager that simplifies deployment of applications and services to Red Hat OpenShift and Kubernetes container platforms.

Helm is a tool for managing Kubernetes applications and deployments. It allows for packaging all required resource definitions into a single package, called a Helm Chart. The Helm Charts provide a convenient way to define application deployments with a predefined set of configurable items. Furthermore, Helm Charts are written using declarative definitions, applying yaml structures and go templates. This approach provides administrators with transparency about the operations the Helm Chart is performing during the DX 9.5 container deployment.

In addition to foundation packaging and installation capabilities, Helm can also be used to modify and upgrade existing deployments, if the Helm Charts are built to support this. Configuration changes and application upgrades can both be managed using Helm.

For more information about Helm, please reference documentation available on Helm topics for Red Hat [Red Hat OpenShift](https://docs.openshift.com/container-platform/4.7/cli_reference/helm_cli/getting-started-with-helm-on-openshift-container-platform.html) and [Kubernetes](https://helm.sh/) container platforms.

## Using Helm Charts for DX 9.5 deployments

The HCL Digital Experience 9.5 Deployment Helm Chart \(Helm Chart name: `hcl-dx-deployment`\) follows the standard Helm structures and guidelines.

```
hcl-dx-deployment/
  crds/                 # Custom Resource definitions used for the Ambassador Ingress
  templates/            # The directory containing all Helm templates (for example, Kubernetes resources)
  value-samples/        # Contains sample value files for different types of deployments
  README.md             # README with information on Helm Chart usage and references to further documentation
  values.yaml           # Default chart configuration values
  values.schema.json    # Defines the validation schema for values.yaml 
  Chart.yaml            # The Chart yaml file containing chart specific information

```

-   **templates**: The templates directory contains all resource definitions, for example, Services and Pods.
-   **values.yaml**: The values.yaml contains all default values for a deployment. It is possible to customize the deployment overwriting the default values of the values.yaml.
-   **values.schema.json**: To validate the values entered for a deployment, the values.schema.json provides configuration whenever an install or upgrade is performed with Helm.

## From Helm Chart to deployment on container platforms

![](../images/helm_chart_deployment_flow.png "From Helm Chart to deployment on container platforms")

As outlined in the flow chart, when performing an install \(or upgrade\), the Helm Chart reads the values.yaml \(and any overridden values, either provided through Helm CLI parameters or additional values files\) and perform a schema validation check. After the schema check is successfully performed, Helm runs the templating engine to create the Kubernetes resource definitions out of the templates inside the Helm Charts.

As a last step, Helm accesses the Kubernetes or OpenShift Cluster and create the resulting Kubernetes resources in the desired namespace.

## Deployment structure

**Basic per application structure**

Each deployed application follows a similar deployment structure, using a common set of OpenShift or Kubernetes resources that follow naming conventions. Some of the DX 9.5 applications may have a different setup based on their special requirements, for example, the Digital Asset Management component, and its persistence definitions.

**Stateful applications - Definition**

![](../images/helm_chart_stateful_applications_definition.png "Stateful applications")

DX 9.5 container applications are managed by a StatefulSet, which controls the creation and life cycle of all pods it is responsible for. These Pods use Persistent Volumes for storing their application data, ConfigMaps to adjust application configuration, and Secrets to obtain access credentials.

In front of all Pods is a Service which manages routing the traffic to the Pods. This Service is also called by the Ingress to fulfill incoming requests from outside the Kubernetes or OpenShift cluster.

**Stateless applications - Services Management**

![](../images/helm_chart_stateless_applications_services_management.png "Stateless applications")

**Ingress and routing**

For accessing applications from the outside, we deploy an [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/) in form of an [Ambassador.](https://www.getambassador.io/learn/kubernetes-ingress/) This Ingress routes the incoming requests to all application Services, which then distributes the requests to the corresponding Pods hosting the applications.

![](../images/helm_chart_ingress_routing.png "Ingress and routing")

Ambassador uses Mappings that are created by the DX 9.5 Helm deployment to decide which requests needs to be mapped to which application in the DX 9.5 deployment \(back-end\). When requests are initiated from outside the Kubernetes or OpenShift cluster, the Ambassador tries to fulfill that request by using the configured Mappings. If it finds a matching endpoint, it forwards the request to the corresponding Service, which then forwards the same requests to a Pod that is ready to fulfill the request.

The Ambassador performs SSL termination and must be provided with a TLS secret inside Kubernetes that contains the SSL certificate used.

