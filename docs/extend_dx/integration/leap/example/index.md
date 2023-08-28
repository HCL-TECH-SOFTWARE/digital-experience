# Example integrations of HCL Leap with HCL Digital Experience

This section provides an overview of the possibilities offered by the integration of HCL Leap and HCL Digital Experience.

## Show HCL Leap data on HCL Digital Experience pages 

In this example, you can integrate data from HCL Leap on your HCL Digital Experience pages using the Digital Data Connector. Follow the [Installation](../installation/index.md) and [Configuration](../configuration/index.md) steps before following the example guide.

## Process to integrate HCL Leap with HCL Digital Experience

Web Application Bridge uses reverse proxy technology to integrate web-based content providers (i.e. HCL Leap) with HCL Digital Experience. Administrators must first create the content providers profiles, policies, and web dock applications. Further details are available in [Web Application Bridge](../../wab/index.md)

!!!warning
    As described in [Troubleshooting the Web Application Bridge](../../wab/trouble_wab.md) the Web Application Bridge exposes the proxied application on the same context root as the original **Resource path**. This can cause overlaps in the routing if the application (in this case Leap) is deployed and exposed on the same host as HCL Digital Experience.

    To prevent this, please use and configure an [Ingress Controller](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md) to expose the applications on different host names or subdomains.


1. Create Content Provider Profiles:
    Details to create content provider profiles, policies, connections etc can be found in:
    - [Content provider profile](../../wab/wab/h_wab_provider)
    - [Content provider profile policy](../../wab/wab/h_wab_policy)
    - [Content provider policy requests and responses](../../wab/wab/h_wab_response)
    - [Content provider policy single sign-on](../../wab/wab/h_wab_auth)
    
    Within **Profile Host** you can set **Unique profile title** as a significant title of your choosing, for example `Leap Content Provider Profile` and enter **Hostname or IP address** as `http://hostname:port/` which the host (and port if required) of the Leap environment. If the Leap deployment is deployed in the same Kubernetes cluster as HCL Digital Experience, the [Kubernetes Service DNS name](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#a-aaaa-records) can be used here to only access the application through the Web Application Bridge proxy. **Save** the content provider profile.

2. Create Web Dock Applications: 
    Details to create web dock applications can be found in [Web Dock application](../../wab/wab/h_wab_dock.md)
    
    Add **Unique web dock application title** for example `Leap` (make sure title is meaningful which describes the Web Dock portlet to add to the page), within the **Content provider profile** dropdown select the newly created profile `Leap Content Provider Profile` and add a path to the Leap page to display as the **Resource path** for example: `/apps/landing/org/app/8a667f9a-aa60-4691-829a-9a8bf4220c04`. **Save** the web dock application.

3. Adding the Web Doc Application created to the DX Page:
    1. Enable **Edit mode** on the DX page you want to include Leap on or create a new page. 
    2. Click on the plus icon in the left navigation panel to **Add page components and applications** to the page. Within that click on **Applications** tab   and search for the newly created web dock application i.e. `Leap`.
    3. Click on **Add To Page** button.
    4. The HCL Leap Page will be visible within the HCL Digital Experience page.
