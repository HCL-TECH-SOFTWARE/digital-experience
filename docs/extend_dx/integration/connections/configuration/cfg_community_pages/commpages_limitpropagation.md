# Configure limits for propagation of community associations

You can control how many nested child pages that are affected by community associations and changed community associations.

During this procedure modify the following properties in the WP\_ConnectionsIntegrationService resource environment provider:

-   **child.page.propagation.levels**

    The maximum number of page nesting levels that are affected when propagating a community association to child pages. The default value is 1, which indicates that the association is propagated only to direct child pages of the current page.

    To include all nested page levels, regardless of the number of levels, set the property value to -1.

    To disable the propagation of a community association to child pages, set the property to 0.

-   **child.page.propagation.threshold**

    This threshold is based on how many child pages are affected by the propagation of a changed community association. If too many pages are updated, the operation might take too long and fail to complete. By setting this threshold, you can specify whether the control to copy the updated association is displayed in the user interface. If the number of pages to be updated is less than this threshold, the control is displayed. If the number of affected pages exceeds the threshold, the control is not displayed. The default value for this property is 50.

    The number of pages evaluated for this threshold also depends on the value of the child.page.propagation.levels property.


1.  On the portal server, log in to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Click **WP ConnectionsIntegrationService**.

4.  Under **Additional Properties**, click **Custom Properties**.

5.  Update the values for the child.page.propagation.levels property and the child.page.propagation.threshold property.

6.  Save the property changes.


