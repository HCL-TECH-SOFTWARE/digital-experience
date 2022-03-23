# Automated or manual migration 

The HCL Digital Experience product documentation documents the automated migration process that is the commonly used and supported method for migrating to a new version of HCL Digital Experience. However, this approach might not be the ideal type of migration for all customers. Read the following considerations to determine which approach fits your needs.

The automated approach is intended to provide a one-size fits all migration that brings over the entire source site to the target environment. It considers all of the possible artifacts that a customer site might be using and packages them all to be brought over to the target environment. This reproducible approach satisfies the needs for most customers, but it can take longer because it attempts to move everything over.

However, it is also possible to migrate environments manually by using administrative tools such as wsadmin, XMLAccess, and the Config Engine. Use these tools to move essential configurations, applications, and content from your existing source environment to the target environment.

Consider the following factors to decide whether a manual approach is more effective:

-   If you plan to re-create your site completely on the target version, you might not need to go through the automated migration process. You can start with a new 8.5 server, and then use the available administrative tools to bring over the configuration and artifacts from your source environment that you plan to preserve.
-   If you are planning a two-step migration, from Version 6.1 to Version 8.0, and then Version 8 to Version 8.5, then review the deprecated and unsupported list for versions 7, 8, and 8.5 to determine whether your current site will work on Version 8.5 immediately after migration. In most cases, the theme must be re-created and many references to deprecated portlets and pages must be removed or updated. For this scenario, it might be more efficient to start with a new 8.5 installation and manually bring over the required artifacts from your source environment, and then update them as they are brought over.
-   If you already have a well-documented deployment process and you know how to quickly create an environment that meets your requirements, then it is possible to use the core of that same process to create an equivalent version on the new version of Portal. The process is different, but it might be more efficient to use that process and update it for Version 8.5 as needed to redefine and use the process after you migrate to Version 8.5.

If you plan to do a manual migration, review the following considerations first:

-   HCL Software Support is limited if you choose to manually migrate.
    -   XMLAccess imports are compatible with earlier versions of Portal. Therefore, it is reasonable to expect an XMLAccess script from a previous version of Portal to work in a newer version of Portal.
    -   If there is a defect in the XMLAccess import process, you can contact HCL Software support. However, if the XMLAccess import fails and the failure is not defect related, then HCL Software Support is not available to assist with troubleshooting or customizing the XMLAccess import file to make the import successful. Creating customized scripts is beyond the scope of the HCL Software Support.
-   You need to manually copy over any files that are required by custom applications, third-party applications, or Portal add-ons that are required for your server to work properly.
-   You can use wsadmin and jacl/jython scripts to bring over your custom applications and configuration.
    -   The HCL Portal configurations such as security, performance tuning, data store configurations, and more are not carried over. You need either a documented or scripted process to re-create these configurations in your new environment.
-   You can use XMLAccess to bring over Portal artifacts such as portlets and pages:
    -   Deprecated or unsupported portlets, pages, or features might be referenced that prevent imports from working properly. Remove the references or manually installing the feature if it is still available.
    -   Bring any administrative features such as the administrative portlets from the source system, but you can also bring custom pages and applications.
    -   For Virtual Portals, re-create them on the target system, and then manually moving the artifacts over from the source Virtual portal to the target system Virtual Portal.
    -   If you customized the Virtual Portal creation scripts, you must redo the script customization for the 8.5 scripts
-   You can use [cross-version syndication](mig_content_options_cross-version.md#) from your source environment to the target environment to bring over JCR content:
    -   You must apply the latest Combined Cumulative Fix on your source environment to use cross-version syndication to your target environment.
    -   If managed pages is not enabled on the source, you must also disable managed pages on the target OOB installation before you syndicate any changes.
    -   From Version 6.1 and earlier, no cross-version syndication is possible
    -   Cross-version syndication of the Portal Site Library is not supported. The pages in the Portal Site Library must be brought over using XMLAccess.
    -   If you perform a two-step migration from Version 6.1 to Version 8 and then Version 8 to Version 8.5, use the Version 8 content refresh task and then use cross-version syndication to your Version 8.5 environment.
-   You must manually bring over anything that is stored in WebDAV:
    -   The WebDAV information is stored in JCR database, but is not brought over with cross-version syndication. It must be copied to the target environment manually.
-   You lose customization and personalization during a manual migration:
    -   No process exists to preserve and bring this information to a new environment.

**Parent topic:**[Migration considerations ](../plan/mig_plan_high_availability.md)

