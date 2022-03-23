# Configuring immediate or delayed deletion of portal pages 

You can configure the deletion cleanup to happen either immediately when you delete the page or later.

-   **Immediate deletion**. This means that the page and all resources that depend on it are deleted immediately after the user completes the action for the deletion.
-   **Delayed deletion**. This means that the page is marked for deletion, but the page and all dependent resources are actually deleted later.

    **Note:** Once the page has been marked for deletion, users cannot view or otherwise access the page any longer.


You can change between the immediate and delayed deletion of portal pages by configuring the property value scheduler.cleanup.enabled in the portal Data Store Service in the WebSphere® Integrated Solutions Console. Set the following Data Store Service configuration parameters as required:

-   **scheduler.cleanup.enabled = \(true\)**

    Determines whether deletion of portal pages is performed later by the scheduled cleanup service, or immediately after the user completes the deletion task. This affects the deletion of portal pages and all their dependent resources, such as components and portlet instances.

    -   **true**

        This setting enables delayed deletion of portal pages by the scheduled cleanup service. Pages and dependent resources are deleted by the scheduled cleanup service.

    -   **false**

        This setting disables deletion of portal pages by the scheduled cleanup service. Deletion of the pages and their dependent resources is triggered immediately when the administrative user runs the cleanup task.

    Set this property to true if you want the deletion of pages to be delayed and performed by the scheduled cleanup service. This property defaults to true, if the portal installation is based on a version of WebSphere® Application Server that includes the Scheduler service.


By its default schedule configuration, the cleanup service runs weekly, on Saturdays at 8 pm.

**Parent topic:**[Delayed cleanup of deleted portal pages ](../admin-system/addelclnup.md)

