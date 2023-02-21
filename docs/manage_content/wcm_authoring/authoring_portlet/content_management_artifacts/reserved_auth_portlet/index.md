# Reserved authoring portlet

When you use the web content viewer or web content pages, some scenarios involve web content authoring tasks that are accomplished with authoring tools components. Authoring tasks are run through a special instance of the authoring portlet that is reserved specifically for these tasks and is installed on page that is hidden from the page navigation available to typical users.

The following tasks use the reserved authoring portlet:

-   Selecting a web content folder when you create or edit the properties of a web content page.
-   Configuring the web content viewer, such as selecting the content item to display.
-   Using inline editing or authoring tools components that are rendered in the web content viewer.

Authoring tasks are run in a separate window that opens from the current page, but you can configure the behavior of authoring tools components to redirect users to the hidden page that contain the reserved authoring portlet.

## Ensuring the availability of the reserved authoring portlet

If either the authoring portlet instance or the hidden portal page is not available or if the user lacks the permission to access either of them, the authoring tasks that require the reserved authoring portlet fail, causing web content pages and the web content viewer to be unusable. For this reason, you must be careful when you administer the reserved authoring portlet and the hidden portal page.

The following conditions are essential for the proper function of the reserved authoring portlet:

-   Users must have the User role on the hidden portal page.
-   Users must have the User role on the reserved authoring portlet.
-   The reserved authoring portlet must be the only portlet that is on the hidden portal page.
-   The unique name of the hidden portal page must be `com.ibm.wps.hiddenpage.wcm.Authoring_Portlet`.
-   The unique name of the portlet window of the authoring portlet instance on the hidden portal page must be `com.ibm.wps.hiddenpage.wcm.control.Authoring_Portlet`.

Availability problems that are related to the reserved authoring portlet or the hidden portal page are identified by the following symptoms:

-   The SystemOut.log file for the portal server contains error messages that are referenced by the authoring portlet or hidden page. For example:
    -   `EJPDB0124E: The specified string [com.ibm.wps.hiddenpage.wcm.Authoring_Portlet] can neither be deserialized as an object ID nor resolved as a unique name.`
    -   `EJPDB0124E: The specified string [com.ibm.wps.hiddenpage.wcm.control.Authoring_Portlet] can neither be deserialized as an object ID nor resolved as a unique name.`
-   When a separate window is opened from the current page to run the authoring task, the new window displays the following message:

    `Error 400: EJPPH0006E: The resolution of a URI failed. Refer to the stack trace for more detailed information.`

-   When a separate window is opened from the current page to run the authoring task, the new window is empty.
-   When the user is redirected to another portal page to run the authoring task, the user is redirected to the default portal page instead of the page that contains the reserved portlet.
-   When the user is redirected to another portal page to run the authoring task, the user is redirected to an empty page.

If any of these problems occur, verify that the conditions for proper operation of the reserved authoring portlet and hidden portlet page are fully implemented.

!!!note
    If the reserved authoring portlet or the hidden portlet page are removed inadvertently, you can deploy them again using the `action-install-wcm-hidden-authoring` configuration task.


???+ info "Related information"  
    -   [Creating a federated documents selection rule](../feddocs/wcm_dev_feddocs_createrule.md)

