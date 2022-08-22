# Delayed cleanup of deleted portal pages

Get an overview of the cleanup service for portal pages and their dependent resources.

Portal resources, such as pages, components or portlet instances are kept persistent in the portal database. When an administrator deletes a page, all its derived pages and dependent resources and content are deleted with it. The actual deletion can take considerable time, depending on the size of the portal and the number of resources affected by the deletion. Therefore, if the deletion takes place immediately after the user completes the deletion task, this might impact portal performance for users. On the other hand, if the deletion is delayed and scheduled for an off peak time, it will not affect portal response time and thereby user experience.

The delayed deletion of pages is performed by a cleanup service.

-   **[Configuring immediate or delayed deletion of portal pages](../admin-system/addelclnup_cfg.md)**  
You can configure the deletion cleanup to happen either immediately when you delete the page or later.
-   **[Configuring your own delayed deletion schedule by using the XML configuration interface](../admin-system/addelclnup_cfgxml.md)**  
You can use the HCL Digital Experience XML configuration interface to configure the delayed deletion schedule according to your requirements. You can define a daily, weekly, or monthly schedule. You can also use the XML configuration interface to run individual cleanup tasks at arbitrary intervals.


**Related information**  


[Creating and configuring search collections](../admin-system/srrcreatconfig.md)

[Managing the content sources of a search collection](../admin-system/srtmngcontsrc.md)

