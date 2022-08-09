# Integrating with IBM MobileFirst

You can integrate HCL Portal with MobileFirst to provide multi-channel support to your web communities. You can create a hybrid application that adds native device functions and a unified web experience on mobile device browsers and in mobile device native applications. You can use MobileFirst to create a hybrid application that adds native device functions to your portal.

There are three types of applications you can create for your cross-platform environments with HCL Portal and MobileFirst®.

-   **Native applications**

    Native applications for enterprise mobile apps have the highest UI fidelity and range of function of the types of web applications included here, but have the highest cost to develop and maintain. Cross-platform issues can increase costs, and mobile operating system updates can require frequent updates to be submitted in application stores. MobileFirst® provides tools to reduce costs.

-   **Pure web applications**

    Pure web applications that are based on HTML5, CSS3, and JavaScript, or that use client-side frameworks like Dojo and jQuery, provide a simple way to make mobile-friendly websites. Development and maintenance costs are less expensive. You can work more easily across multiple devices and are not typically impacted by mobile operating system updates. HCL Portal provides a platform for pure web applications and websites. With a pure web application, you only have access to the native device features that the browser provides to you, and you are more limited in the user interface fidelity.

-   **Hybrid applications**

    Hybrid applications combine the characteristics of pure and native applications. You can build an application with the simplicity of developing with HTML/CSS/JavaScript. But you can augment that with a wide range of native services and produce an application for application stores. With technology like Apache Cordova, which MobileFirst® includes, you can call native features with JavaScript from your web markup. For example, you can call the camera with a simple JavaScript line, such as: `navigator.camera.getPicture`. MobileFirst® provides tools for creating these hybrid applications. Hybrid applications are native applications that wrap the HCL Portal web application. The two are tightly integrated to use each other's capabilities to make the development experience as quick and easy as possible.


As a HCL Portal customer, you can use the MobileFirst tools for free and create two free applications. But the applications must be hybrid applications that use HCL Portal.

-   **[Planning to install IBM MobileFirst](../integrate/wl_pln_inst.md)**  
Determine the services and function of your hybrid application before you install MobileFirst. You must install a MobileFirst server in some instances.
-   **[Default component overview](../integrate/wl_comp_ovr.md)**  
When you integrate MobileFirst and HCL Portal, you can create a MobileFirst hybrid application that includes an HCL Portal web application. This hybrid application can run in a mobile browser and as a native mobile application.
-   **[Creating a MobileFirst hybrid application for your portal](../integrate/wl_hybrid_app_portal.md)**  
You can create a hybrid application to add native device capabilities to your portal with IBM MobileFirst.
-   **[Module framework for IBM MobileFirst](../integrate/wl_module_fw.md)**  
The module framework allows extensions to contribute to different areas of a page to provide flexibility, enhance the user experience, and maximize performance.
-   **[Target MobileFirst resources](../integrate/wl_device_classes.md)**  
You can change the way that a web page looks for any device with responsive web design. Device classes are generic groupings of form factors so client devices can view web pages for every form factor without designing the page for each device.
-   **[Upgrading MobileFirst](../integrate/wl_ugrade.md)**  
You can create an EAR file, and copy MobileFirst resources into that EAR to keep up to date with the newest MobileFirst release.

**Parent topic:**[Integrating](../admin-system/integrating_parent.md)

