# Sample integrations of HCL Volt MX Foundry and Iris with HCL Digital Experience

This section provides an overview of the possibilities offered by the integration of HCL MX Foundry and HCL Digital Experience. The following examples show two options to integrate HCL Volt MX into HCL Digital Experience pages.

## Showing HCL MX Foundry data on HCL Digital Experience pages 

In this example, you can integrate data from HCL MX Foundry on your HCL Digital Experience pages using the Digital Data Connector. Follow the [Installation](../installation/index.md) and [Configuration](../configuration/index.md) steps before following the example guide.

The required steps for this integration are available in [Connecting to HCL Volt MX Foundry through Digital Data Connector (DDC)](../../../ddc/integrating_voltmx_foundry/index.md).

## Integrating an HCL Volt MX Iris application into HCL Digital Experience pages 

This example provides steps to display an HCL Volt MX Iris application on an HCL Digital Experience page.

The example uses the [Web Application Bridge](../../wab/index.md) which uses a reverse proxy technology to integrate web-based content providers (for example, HCL Volt MX Iris) with HCL Digital Experience.

To implement the example, an existing [Volt MX Iris Web Application](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_user_guide/Content/BuildAnSPAApplication.html) is required. 

!!!warning
    As described in [Troubleshooting the Web Application Bridge](../../wab/trouble_wab.md), the Web Application Bridge exposes the proxied application on the same context root as the original **Resource path**. This can cause overlaps in the routing if the application (in this case Volt MX) is deployed and exposed on the same host as HCL Digital Experience.

    To prevent this, use and configure an [Ingress Controller](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md) to expose the applications on different host names or subdomains.

1. Create Content Provider Profiles.

    For information on how to create content provider profiles, policies, and connections, refer to the following:

      - [Content provider profile](../../wab/wab/h_wab_provider)
      - [Content provider profile policy](../../wab/wab/h_wab_policy)
      - [Content provider policy requests and responses](../../wab/wab/h_wab_response)
      - [Content provider policy single sign-on](../../wab/wab/h_wab_auth)
    
   1. In the **Profile Host**, you can set a **Unique profile title** (for example, `MX Iris Content Provider Profile`).
   2. For the **Hostname or IP address**, enter `http://hostname:port/` which is the host (and port, if required) of the MX environment. 
    If the MX deployment is deployed in the same Kubernetes cluster as HCL Digital Experience, the [Kubernetes Service DNS name](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#a-aaaa-records) can be used here to only access the application through the Web Application Bridge proxy. 
   3. **Save** the content provider profile.

2. Create Web Dock Applications.
    For information on how to create web dock applications, refer to [Web Dock application](../../wab/wab/h_wab_dock.md).
    
    1. Add a **Unique web dock application title** (for example, `MX Iris`). Make sure the title describes the Web Dock portlet you want to add to the page.
    2. In the **Content provider profile** dropdown, select the newly created profile `MX Iris Content Provider Profile`. 
    3. Add a path to the Iris application to display as the **Resource path** (for example, `/apps/myExampleApp`. **Save** the web dock application).
    4. **Save** the web dock application.

3. Add the created Web Dock Application to the DX Page.
    1. Enable **Edit mode** on the DX page you want to include the Iris application on or create a new page by clicking on the 3 lines on the right of the Web Dock Application.
    2. Click the plus icon on the left navigation panel to **Add page components and applications** to the page. In the navigation panel, go to the **Applications** tab and search for the newly created web dock application (in this case, `MX Iris`).
    3. Click the **Add To Page** button.

The HCL Volt MX Iris application should be visible within the HCL Digital Experience page.
