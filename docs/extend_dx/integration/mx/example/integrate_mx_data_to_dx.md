# Integrating Volt MX data and applications into HCL DX

This guide explains how to display Volt MX Foundry data on HCL DX pages using Digital Data Connector (DDC) and embed a Volt MX web application directly into an HCL DX page using the Web Application Bridge (WAB).

## Prerequisites

Before you begin, ensure you have:

- A working HCL Digital Experience environment
- An HCL Volt MX Foundry project and application
- Completed the [installation](../installation.md) and [configuration](../configuration/index.md) of HCL Volt MX Foundry
- (Optional) Ingress configured for separate hostname or subdomain routing

### Displaying Volt MX Foundry Data in HCL DX using DDC

1. Follow the guide in [Connecting to HCL Volt MX Foundry through DDC](./../../../../extend_dx/ddc/integrating_voltmx_foundry/index.md).

2. Use DDC to bind Foundry data services to DX content presentation.

### Embedding Volt MX web applications in HCL DX using WAB

!!!important
    If DX and Volt MX are on the same host, routing conflicts may occur. To avoid conflicts, use a Kubernetes Ingress controller and assign separate subdomains or hostnames. For more information, refer to [Configure Access Layer for DX deployment](./../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-access-layer.md).

1. Create a content provider profile. For more information about content provider profile, refer to [Content provider profile](./../../wab/wab/h_wab_provider.md), [Profile policy](./../../wab/wab/h_wab_policy.md), [Request/response setup](./../../wab/wab/h_wab_response.md), and [SSO for providers](./../../wab/wab/h_wab_auth.md). 

    1.  **Log in to HCL Digital Experience** as an administrator.
    2.  Navigate to the **Administration**
    3.  In the Administration sidebar, expand **Applications**.
    4.  Click on **Virtual Application Manager**.
    5.  On the "Virtual Web Application Manager" page, click the **"Create New Content Provider Profile"** button.
        1. Set a unique title (for example, `MX Foundry Content Provider Profile`).
        2. Set your hostname or IP (for example, `http://<mx-host>:<port>/`). Use the Kubernetes Service DNS name if the profile is in the same cluster.
        3. Click the **"Save"** button at the bottom of the form to create and save the content provider profile. You should see it listed in the "Content Provider Profiles" table.
    6. Optional: Configure Profile Policy and SSO
   
2. Create a Web Dock Application. For more information on how to create a Web Dock Application, refer to [Web Dock Application](./../../wab/wab/h_wab_dock.md).

    1. On the "Virtual Web Application Manager" page, click the **"Web Dock Applications"** button.
    1. In your Web Dock Application, configure the following settings:
        1. Title: `MX Foundry Application`
        2. Provider profile: `MX Foundry Content Provider Profile`
        3. Resource Path (path to the MX Foundry application to display): `/apps/myExampleApp`
    2. Save the application.

3. Add the Web Dock Application to a DX page.

    1. Log into HCL DX and toggle **Edit Mode**.
    2. Navigate to the desired page or create a new one. To create a new page, click the menu icon on the right of the Web Dock Application to open the Context menu. You can create either a child or a sibling page.
    3. Click the plus icon on the left navigation panel to **Add page components and applications** to the page
    4. Under **Applications**, search for your Web Dock App **MX Foundry Application**
    5. Click **Add To Page**.

!!!note
    For more information about WAB, refer to [Using the Web Application Bridge](./../../wab/wab/index.md)

Your Volt MX app will now render within the DX page.

## Support

Support for this feature is not available in the HCL Support Center. For questions and issues, reach out either in the [DXers - The HCL DX User Group](https://ptb.discord.com/channels/787019554173485067/992504153328861184){target="_blank"} on Discord or in the [HCL DX forum](https://support.hcltechsw.com/community?id=community_forum&sys_id=02c5dcf01b32f70cc1f9759d1e4bcb43){target="_blank"}.

## HCLSoftware U learning materials

For an introduction and a demo on how to integrate DX with HCL Volt MX as a business user, go to [DX Integration with HCL Volt MX for Business Users](https://hclsoftwareu.hcl-software.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcl-software.com%2Fcourses%2Flesson%2F%3Fid%3D747){target="_blank"}. To try it out yourself, refer to [DX Integration with HCL Volt MX for Business Users Lab](https://hclsoftwareu.hcl-software.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Integration/HDX-INT-BU_DX_Integration_with_HCL_Volt_MX_for_Business_Users.pdf){target="_blank"}.

For an introduction and a demo on how to integrate DX with HCL Volt MX as a developer, go to [DX Integration with HCL Volt MX for Developers](https://hclsoftwareu.hcl-software.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcl-software.com%2Fcourses%2Flesson%2F%3Fid%3D1458){target="_blank"}. To try it out yourself, refer to [DX Integration with HCL Volt MX for Developers Lab](https://hclsoftwareu.hcl-software.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Integration/HDX-INT-DEV_DX_Integration_with_HCL_Volt_MX_for_Developers.pdf){target="_blank"}.

You can also use the dedicated course [HCL Volt MX Integration with HCL DX](https://hclsoftwareu.hcl-software.com/courses/course/hvmx-int-hdx-integrate-hcl-volt-mx-with-hcl-digital-experience){target="_blank"}. This course explains the benefits of integrating HCL Volt MX with HCL DX and provides integration guidance for business users, developers, and administrators.