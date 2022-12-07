# Setting up a web content fallback page

Set up a web content fallback page to be used when a web content viewer cannot determine which page to use to display a content item. The fallback page can also be used when users do not have sufficient privileges to view the page originally associated with the content item.

!!! note
    Although a fallback page is one way of handling failed page resolution, you can also use a content page resolution filter to perform more advanced resolution. With these filters, you can tailor how the viewer behaves if no page can be found for a content item. For more information, see *Creating a content page resolution filter class.*

1.  Create the DX page to be used as the web content fallback page.

    -   Specify a unique name for the page so that you can reference the page later.
    -   Assign any access rights required for users. For example, if the fallback page is available in the public part of the portal, ensure that anonymous users have view access to the page.
2.  Add a web content viewer to the fallback page.

    1.  Click the **Edit Page Layout** icon \(small pencil\) for the new page.

    2.  Click **Add portlets** and select **Web Content Viewer** from the list of portlets.

3.  Update the HCL Portal configuration service to enable the fallback page.

    1.  Log in to the WebSphere® Integrated Solutions Console..

    2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

    3.  Click **WP ConfigService**.

    4.  Under **Additional Properties**, click **Custom Properties**.

    5.  Click **New**, and enter the property name `wcm.fallback.page`. Set the string value to the unique name or object ID of the DX page that you created as the fallback page.

    6.  Save the changes to the master configuration.

4.  Restart the portal.


The web content fallback page is displayed when a viewer is configured with a link broadcast setting of **Dynamically select a web content page** and one of the following conditions occurs:

-   The web content viewer cannot determine which page to use to display the linked content item.
-   The web content viewer identifies the page associated with the content item, but the user does not have sufficient privileges to view that page.


???+ info "Related information"
    - [Dynamic web content page selection](../advance_adm_sample/mp_wcm_dynamicpage.md)
    - [Creating a content page resolution filter class](../../../../wcm_artifacts/wcm_dev/wcm_custom_plugin/wcm_dev_api_page_resolution.md)

<!--
 - [Creating a page from the site toolbar](../dev-theme/themeopt_addpage.md) --->

