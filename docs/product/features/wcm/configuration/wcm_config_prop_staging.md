# How to configure a web content staging environment

Configure the staging environment to emulate the web content delivery environment and allow for testing before deployment.

You define and manage staging environment options in the **WCM WCMConfigService** service by using the WebSphere® Integrated Solutions Console.

-   If your staging server is to be used purely as a holding server where changes to your site are accumulated before you syndicate these changes to a delivery environment, then you might need to review only the syndication settings of the staging server. In most cases, you would ensure that automatic syndication is disabled.
-   If you are using your staging environment for user acceptance testing before you syndicate to a delivery environment, then you need to ensure that all other settings configured on your staging server match the same settings on the delivery server.

**Parent topic:**[HCL Web Content Manager](../wcm/wcm_install_cfg.md)

**Related information**  


[Staging to production list](../deploy/dep_stage_check.md)

