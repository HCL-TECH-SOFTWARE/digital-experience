# Example integrations of HCL Leap with HCL Digital Experience

This section provides an overview of the possibilities offered by the integration of HCL Leap and HCL Digital Experience.

## Show HCL Leap data on HCL Digital Experience pages 

In this example, you can integrate data from HCL Leap on your HCL Digital Experience pages using the Digital Data Connector. Follow the [Installation](../installation/index.md) and [Configuration](../configuration/index.md) steps before following the example guide.

## Process to integrate HCL Leap with HCL Digital Experience

Web Application Bridge uses reverse proxy technology to integrate web-based content providers (i.e. HCL Leap) with HCL Digital Experience. Administrators must first create the content providers profiles, policies, and web dock applications. Further details are available in [Web Application Bridge](../../wab/wab/index.md/)

1. Create Content Provider Profiles:
   Details to create content provider profiles, policies, connections etc can be found in [Content provider profile](../../wab/wab/h_wab_provider), [Content provider profile policy](../../wab/wab/h_wab_policy), [Content provider policy requests and responses](../../wab/wab/h_wab_response), [Content provider policy single sign-on](../../wab/wab/h_wab_auth)
   
   Within **Profile Host** you can set **Unique profile title** as a significant title of your choosing, for example `Leap CPP` and enter **Hostname or IP address** as ``http://hostname:port/apps/`` which is a deploymeent containing the Leap environment and **Save** the content provider profile

2. Create Web Dock Applications: 
   Details to create web dock applications can be found in [Web Dock application](../../wab/wab/h_wab_dock.md)
   
   Add **Unique web dock application title** for example `Leap` (make sure title is meaningful which describes the Web Dock portlet to add to the page), within the **Content provider profile** dropdown select the newly created profile `Leap CPP` and add the **Resource path** as `/apps` and **Save** the web dock application.

3. Adding the Web Doc Application created to the DX Page:
   1. Enable **Edit mode** and Create a **Child Page** within Woodburn Studio via the site toolbar.
   2. click on the plus icon in the left navigation panel to **Add page components and applications** to the newly created Child page. Within that click on **Applications** tab and search for the newly created web dock application i.e. `Leap`.
   3. Click on **Add To Page** button.
   4. The HCL Leap Page will be visible within the HCL Digital Experience page.