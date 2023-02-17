# Administering social lists

You can administer several aspects of social lists. For example, you can add your own social lists to the content shelf, or you can tune the social object caches for performance.

Typically, an administrator does these administration tasks.

-   **[Adding the social rendering theme module to a theme profile](../social/soc_rendr_adm_add_sr_thm_2prof.md)**  
For the social lists provided by social rendering to work, the theme that renders these lists needs to load CSS and JavaScript files. To include the CSS and JavaScript files in your theme, you need to add the wp\_social\_lists\_v1\_1 theme module to your theme.
-   **[Performance tuning for lists of social objects](../social/soc_rendr_perf_tune_cach.md)**  
Social data that is rendered on your portal pages by using the social rendering feature is retrieved from a remote HCL Connections server. To reduce network traffic and improve performance, the data is cached on HCL Digital Experience.
-   **[How to enable social rendering in a virtual portal](../social/add_sociallists_to_virtualportal.md)**  
Before you use social rendering in a virtual portal, you must deploy the new web content library and templates. The version and fix pack of your HCL Digital Experience determines how you do so.
-   **[Using Social Rendering with Tivoli Access Manager and WebSEAL](../social/soc_rendr_adm_sr_tam_webseal.md)**  
After you enable social rendering, your HCL Digital Experience acts as a client that sends HTTP requests to the HCL Connections server. If you use IBM Security Access Manager and WebSEAL to manage the access to your portal and HCL Connections server, configure the portal so that it does not encode the WebSEAL session cookies.
-   **[Removing the previous version of social rendering](../social/rem_soc_rend.md)**  
You can remove the Social Lists 1.0 library and its configuration to remove it from the toolbar after you deploy the Social Lists 1.1 Library. Once you have removed the library, remove the drag and drop configuration with a separate command. 


???+ info "Related information"
    - [Roadmap: How to work with social rendering](../soc_rendr_roadmap.md)

