# Example integrations of HCL Leap with HCL Digital Experience

This section provides an overview of the possibilities offered by the integration of HCL Leap and HCL Digital Experience.

## Show HCL Leap data on HCL Digital Experience pages 

In this example, you can integrate data from HCL Leap on your HCL Digital Experience pages using the Digital Data Connector. Follow the [Installation](../installation/index.md) and [Configuration](../configuration/index.md) steps before following the example guide.

## Process to integrate HCL Leap with HCL Digital Experience

Web Application Bridge uses reverse proxy technology to integrate web-based content providers (i.e. HCL Leap) with HCL Digital Experience. Administrators must first create the content providers profiles, policies, and web dock applications. Further details are available in [Web Application Bridge](https://opensource.hcltechsw.com/digital-experience/CF213/extend_dx/integration/wab/wab/)

1. Create Content Provider Profiles:
   Details to create content provider profiles, policies, connections etc can be found in [Content provider profile](https://opensource.hcltechsw.com/digital-experience/CF213/extend_dx/integration/wab/wab/h_wab_provider/), [Content provider profile policy](https://opensource.hcltechsw.com/digital-experience/CF213/extend_dx/integration/wab/wab/h_wab_policy/), [Content provider policy requests and responses](https://opensource.hcltechsw.com/digital-experience/CF213/extend_dx/integration/wab/wab/h_wab_response/), [Content provider policy single sign-on](https://opensource.hcltechsw.com/digital-experience/CF213/extend_dx/integration/wab/wab/h_wab_auth/)
   
   Within **Profile Host** set **Unique profile title** as `Leap CPP` and enter **Hostname or IP address** as `https://native-kube-alina-leap.team-q-dev.com:443` which is the newly created native kube instance containing Leap and **Save** the content provider profile

2. Create Web Dock Applications: 
   Details to create web dock applications can be found in [Web Dock application](https://opensource.hcltechsw.com/digital-experience/CF213/extend_dx/integration/wab/wab/h_wab_dock/)
   
   Add **Unique web dock application title** as `Leap`, within the **Content provider profile** dropdown select the newly created profile `Leap CPP` and add the **Resource path** as `/apps` and **Save** the web dock application.

3. Adding the Web Doc Application created to the DX Page:
   1. Enable **Edit mode** and Create a **Child Page** within Woodburn Studio via the site toolbar.
   2. click on the plus icon in the left navigation panel to **Add page components and applications** to the newly created Child page. Within that click on **Applications** tab and search for the newly created web dock application i.e. `Leap`.
   3. Click on **Add To Page** button.
   4. The HCL Leap Page will be visible within the HCL Digital Experience page.