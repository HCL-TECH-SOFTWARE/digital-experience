# Changing the site URL after an installation

After you install HCL Digital Experience, you can change the portal site URL to create a shorter or more human-readable URL. Use the new option in the Configuration Wizard to remove or change the context root and default home (/wps/portal) values in your site URL. You can also select an option to remove or add navigational state information from your site URL.

For example, you can use the Configuration Wizard to change the site URL as follows:

http://www.example.com:port/wps/portal/products/\[!ut/p/encoded\_portal\_suffix\] to

http://www.example.com:port/products/

!!!note "Limitation"
    If you removed the context root, the HCLWeb Content Manager Commerce Integration linking and editing function does not work.

!!!note "Notes"
    -   HCL Portal and Web Services for Remote Portlets are installed with a default context root that you can change in the Configuration Wizard. Some applications have a fixed context root that cannot be changed.
    -   If you use Web Application Bridge, you cannot remove the context root from your site URL. Use the Configuration Wizard to modify the context root and default home values in your site URLs or to remove the default home value from your site URL.
    -   You can use this option for stand-alone and clustered environments. For clustered environments, you can use this option only on the primary node.

1.  Access the Configuration Wizard. Go to http://your\_server:10200/hcl/wizard.

    **Restriction:** There is a known issue with Chrome version 45.x and the Configuration Wizard. If you are experiencing difficulties, use a different browser when you access the wizard.

2.  Log in to the Configuration Wizard with the administrative ID for the configuration wizard profile, cw\_profile.

    **Note:** If the language is not currently supported for the user interface, you might see the English version. For details on supported languages and the language codes for all of the HCL Portal user interfaces, see [Supported languages](../../../../extend_dx/development_tools/portal_admin_tools/language_support/index.md) in the HCL Digital Experience Version 8.5 documentation.

3.  Click **Set Up a Stand-alone Server > Modify Site URLs for Search Engine Optimization** or **Set Up a Cluster > Modify Site URLs for Search Engine Optimization** depending on your environment type.

4.  Provide information about your environment.

5.  Save your configuration settings.

6.  Choose one of the following options:

    -   Click **Download Configuration Scripts** to run the steps remotely. Instructions for running the scripts and completing manual steps are included in the compressed file that you download.
    -   Click **Start Configuration** to run the steps locally. The wizard pauses at manual steps. You can view the manual steps in context with your configuration.
    
    !!!note
        The wizard creates custom instructions based on selections that you make about your environment and configuration goals. If you want to view all possible instructions in the wizard, go to [Configuration Wizard instructions: Modify site URLs for search engine optimization](../../siteurl_cfg/changing_siteurl/cw_shorten_url/index.md). The instructions that you generate in the wizard might include or exclude specific steps that you view in the referenced topic based on your wizard selections.

**Related information**  
[About friendly URLs for web content](../../../../manage_content/wcm/wcm_content_delivery/delivering_web_content/deliver_webcontent_on_portal/customizing_content/friendlyurl_wcmviewer/wcm_config_wcmviewer_workfriendly.md)

