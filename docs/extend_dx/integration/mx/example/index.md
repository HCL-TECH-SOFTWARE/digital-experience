# Example integrations of HCL Volt MX Foundry and Iris with HCL Digital Experience

This section provides an overview of the possibilities offered by the integration of HCL MX Foundry and HCL Digital Experience. The following examples outline two options to integrate HCL Volt MX into HCL Digital Experience pages.

## Show HCL MX Foundry data on HCL Digital Experience pages 

In this example, you can integrate data from HCL MX Foundry on your HCL Digital Experience pages using the Digital Data Connector. Follow the [Installation](../installation/index.md) and [Configuration](../configuration/index.md) steps before following the example guide.

The required steps for this integration are available in [Connecting to HCL Volt MX Foundry through Digital Data Connector (DDC)](../../../ddc/integrating_voltmx_foundry/index.md).

## Integrate an HCL Volt MX Iris application into HCL Digital Experience pages 

This example guides through the necessary steps to display an HCL Volt MX Iris application on a HCL Digital Experience page.

The example uses the [Web Application Bridge](../../wab/index.md) which uses a reverse proxy technology to integrate web-based content providers (i.e. HCL Volt MX Iris) with HCL Digital Experience.

To implement the example, an existing [Volt MX Iris Web Application](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_user_guide/Content/BuildAnSPAApplication.html) is required. 

1. Create Content Provider Profiles:
   Details to create content provider profiles, policies, connections etc can be found in [Content provider profile](../../wab/wab/h_wab_provider), [Content provider profile policy](../../wab/wab/h_wab_policy), [Content provider policy requests and responses](../../wab/wab/h_wab_response), [Content provider policy single sign-on](../../wab/wab/h_wab_auth)
   
   Within **Profile Host** you can set **Unique profile title** as a significant title of your choosing, for example `MX Iris Content Provider Profile` and enter **Hostname or IP address** as `http://hostname:port/` which the host (and port if required) of the MX environment and **Save** the content provider profile.

2. Create Web Dock Applications: 
   Details to create web dock applications can be found in [Web Dock application](../../wab/wab/h_wab_dock.md)
   
   Add **Unique web dock application title** for example `MX Iris` (make sure title is meaningful which describes the Web Dock portlet to add to the page), within the **Content provider profile** dropdown select the newly created profile `MX Iris Content Provider Profile` and add a path to the Iris application to display as the **Resource path** for example: `/apps/myExampleApp`. **Save** the web dock application.

3. Adding the Web Doc Application created to the DX Page:
   1. Enable **Edit mode** on the DX page you want to include the Iris application on or create a new page. 
   2. Click on the plus icon in the left navigation panel to **Add page components and applications** to the page. Within that click on **Applications** tab and search for the newly created web dock application i.e. `MX Iris`.
   3. Click on **Add To Page** button.
   4. The HCL Volt MX Iris application will be visible within the HCL Digital Experience page.