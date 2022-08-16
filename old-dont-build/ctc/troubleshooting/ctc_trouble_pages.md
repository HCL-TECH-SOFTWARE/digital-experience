# Troubleshooting pages and navigation

Find solutions to problems that involve navigation and content on pages.

## Breadcrumb is out of sync with the main navigation bar

-   **Problem**

    Page structure and site area structure are out of sync.

-   **Solution**

    Moving a page or site area within the same immediate parent page or area will not cause out of sync navigation, but moving a page or site area outside of the immediate page or area requires re-syncing. If you move a page, then also move the site area, and vice versa. If the page is in the correct location, then move the associated site area to the equivalent location. If the page is not in the correct location, then move the page to the correct location.


## Templates do not appear in template list when creating a page

-   **Problem**

    Templates are installed in a different virtual portal.

-   **Solution**

    Page templates are scoped to the portal instance and only appear in the virtual portal \(or base portal\) if they have been installed or created there. If the templates are not installed in the current virtual \(or base\) portal, install them there, or import them from another virtual \(or base\) portal.


-   **Problem**

    The template list is being cached in the browser.

-   **Solution**

    The list of available templates is cached for performance reasons. If templates are not appearing that you know are installed on this virtual \(or base\) portal, clear the browser cache to force them to appear.


## Page does not appear in navigation

-   **Problem**

    Page was created from a Details page template.

-   **Solution**

    No action required. Details pages are meant to be hidden in Content Template Catalog sites. They are there to provide a layout and a set of portlets for displaying a content item, but are not intended to be visible in the navigation.


-   **Problem**

    Page template was copied from a Details page template.

-   **Solution**

    If you have created your own templates based on the Content Template templates, you may have based your template on a Details page template and thus inherited the parameter that causes a page to be hidden. If this is not wanted, you need to set this flag to false. You can confirm this is the issue by exporting the page template and looking for the parameter `com.ibm.portal.Hidden`, which if set to "true" causes the page to be hidden from the navigation. Export the page template XML and locate the parameter `com.ibm.portal.Hidden`. Set it to "false" and save and import the modified XML.


## Clicking a link does not open a content item

-   **Problem**

    Details page has not been instantiated.

-   **Solution**

    Most of the content types in Content Template are designed to work in an index/details pairing. The Index page provides a list of content and the details page provides the appropriate layout and portlets to view a content item. An index page is not configured to show content, so the corresponding details page must be instantiated beneath the index for the content to be displayed when you link to it. You can confirm this by looking in Manage Pages in the Administration, and seeing if a details page exists under the index page. Navigate to the index page that is missing the details page, click the Actions menu, select **New Child Page** and create a child page using the appropriate Details page template.


## Details page does not show all of the appropriate data for the content type

-   **Problem**

    Incorrect details page was instantiated.

-   **Solution**

    Each of the content types in Content Template has a corresponding Details page template, with portlets that have been configured to display all of the details for that content type. If the appropriate details page was not instantiated, the layout will be correct. Go to the Manage Pages section in the Portal Administration and delete the incorrect page. Navigate back to the index page in your site and create a child page using the correct Details page template.


## Branch delete fails to delete the branch

-   **Problem**

    A branch fails to delete when the parent item is deleted. Errors are displayed in the SystemOut log.

-   **Solution**

    This is caused by a transaction timeout error. To fix this:

    1.  Go to the WebSphere® Application Server administration console.
    2.  Go to **WAS Servers** \> **WebSphere Application Servers** \> **WebSphere Portal** \> **Container Services**.
    3.  Change the **Transaction Service** to 0.

## Short URLs not displaying on same pages

-   **Problem**

    Some pages are not displaying short URLs when rendered in a Content Template site.

-   **Solution**

    This issue can happen in Content Template when a placeholder tag is used to render links. A URLCmpnt tag must be used instead.


**Parent topic:**[Troubleshooting Content Template sites](../ctc/ctc_trouble_overview.md)

