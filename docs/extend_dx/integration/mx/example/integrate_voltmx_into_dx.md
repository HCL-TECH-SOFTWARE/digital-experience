
# Integrating Volt MX data or applications into HCL DX

## Showing HCL Volt MX Foundry data on HCL DX pages 

In this example, you can integrate data from HCL Volt MX Foundry on your HCL DX pages using the Digital Data Connector. Follow the [Installation](../installation/index.md) and [Configuration](../configuration/index.md) steps before following the example guide.

The required steps for this integration are available in [Connecting to HCL Volt MX Foundry through Digital Data Connector (DDC)](../../../ddc/integrating_voltmx_foundry/index.md).

## Integrating an HCL Volt MX application into HCL Digital Experience pages 

This example provides steps to display an HCL Volt MX application on an HCL DX page.

The example uses the [Web Application Bridge](../../wab/index.md) which uses a reverse proxy technology to integrate web-based content providers (for example, HCL Volt MX Foundry) with HCL Digital Experience.

To implement the example, an existing [Volt MX Web Application](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_user_guide/Content/BuildAnSPAApplication.html) is required. 

!!!warning
    As described in [Troubleshooting the Web Application Bridge](../../wab/trouble_wab.md), the Web Application Bridge exposes the proxied application on the same context root as the original **Resource path**. This can cause overlaps in the routing if the application (in this case Volt MX Foundry) is deployed and exposed on the same host as HCL Digital Experience.

    To prevent this, use and configure an [Ingress Controller](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md) to expose the applications on different host names or subdomains.

1. Create Content Provider Profiles.

    For information on how to create content provider profiles, policies, and connections, refer to the following:

      - [Content provider profile](../../wab/wab/h_wab_provider.md)
      - [Content provider profile policy](../../wab/wab/h_wab_policy.md)
      - [Content provider policy requests and responses](../../wab/wab/h_wab_response.md)
      - [Content provider policy single sign-on](../../wab/wab/h_wab_auth.md)  

    Follow these steps to create the profile:

      1. In the **Profile Host**, you can set a **Unique profile title** (for example, `MX Foundry Content Provider Profile`).
      2. For the **Hostname or IP address**, enter `http://hostname:port/` which is the host (and port, if required) of the MX Foundry environment. If the MX Foundry deployment is deployed in the same Kubernetes cluster as HCL Digital Experience, the [Kubernetes Service DNS name](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/#a-aaaa-records) can be used here to only access the application through the Web Application Bridge proxy. 
      3. **Save** the content provider profile.

2. Create Web Dock Applications.
    For information on how to create web dock applications, refer to [Web Dock application](../../wab/wab/h_wab_dock.md).
    
    1. Add a **Unique web dock application title** (for example, `MX Foundry Application`). Make sure the title describes the Web Dock portlet you want to add to the page.
    2. In the **Content provider profile** dropdown, select the newly created profile `MX Foundry Content Provider Profile`. 
    3. Add a path to the MX Foundry application to display as the **Resource path** (for example, `/apps/myExampleApp`).
    4. **Save** the web dock application.

3. Add the created Web Dock Application to the DX Page.
    1. Enable **Edit mode** on the DX page where you want to include the MX Foundry application or create a new page.
        To create a new page, click the menu icon on the right of the Web Dock Application to open the Context menu. You can create either a child or a sibling page. 
    2. Click the plus icon on the left navigation panel to **Add page components and applications** to the page. In the navigation panel, go to the **Applications** tab and search for the newly created web dock application (in this case, `MX Foundry Application`).
    3. Click the **Add To Page** button.

The HCL Volt MX Foundry application should be visible within the HCL Digital Experience page.

Support for this feature is not available in the HCL Support Center. For questions and issues, reach out either in the [DXers - The HCL DX User Group](https://ptb.discord.com/channels/787019554173485067/992504153328861184) on Discord or in the [HCL DX forum](https://support.hcltechsw.com/community?id=community_forum&sys_id=02c5dcf01b32f70cc1f9759d1e4bcb43).


## HCLSoftware U learning materials

For an introduction and a demo on how to integrate DX with HCL Volt MX as a business user, go to [DX Integration with HCL Volt MX for Business Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D747){target="_blank"}. To try it out yourself, refer to [DX Integration with
HCL Volt MX for Business Users Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Integration/HDX-INT-BU_DX_Integration_with_HCL_Volt_MX_for_Business_Users.pdf){target="_blank"}.

For an introduction and a demo on how to integrate DX with HCL Volt MX as a developer, go to [DX Integration with HCL Volt MX for Developers](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D1458){target="_blank"}. To try it out yourself, refer to [DX Integration with
HCL Volt MX for Developers Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Integration/HDX-INT-DEV_DX_Integration_with_HCL_Volt_MX_for_Developers.pdf){target="_blank"}.

You can also use the dedicated course [HCL Volt MX Integration with HCL DX](https://hclsoftwareu.hcltechsw.com/courses/course/hvmx-int-hdx-integrate-hcl-volt-mx-with-hcl-digital-experience){target="_blank"}. This course explains the benefits of integrating HCL Volt MX with HCL DX and provides integration guidance for business users, developers, and administrators.

