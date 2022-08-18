# Client side aggregation \(CSA\) rendering in the Syndicated Feed Portlet

The Syndicated Feed Portlet can be configured to operate in the client side aggregation \(CSA\) rendering mode. Client side rendering ensures an improved user experience through faster response time. When you enable client side rendering in the portlet, the portal does not re-render the whole page but only the aspects of the portlet that change.

The following feed management and feed presentation capabilities are available when client side rendering has been enabled for HCL Syndicated Feed Portlet:

## Feed management capabilities

-   Subscribing to feeds by specifying the feed URL, feed title, and optionally feed credentials
-   Editing a feed to change feed title
-   Enabling or displaying the feeds in the view mode of the portlet
-   Deleting a feed subscription

## Feed presentation capabilities

-   Customizing the number of articles to be displayed per feed
-   Viewing the feed article content either expanded or collapsed
-   Displaying or hiding the author of feed items
-   Displaying or hiding the Published date of feed items

-   **[Enabling client side rendering in the Syndicated Feed Portlet](../admin-system/ic_syndfeed_csr_enable.md)**  
To enable client side rendering in the Syndicated Feed Portlet, create a useClientSideRendering configuration parameter and set its value to `true`.
-   **[Configuring the profiling parameter on the page with the Syndicated Feed Portlet](../admin-system/ic_syndfeed_set_profparm.md)**  
You must configure the full profiling parameter on the page on which you deployed the Syndicated Feed Portlet.
-   **[Configuring the security role mapping for the Syndicated Feed Portlet](../admin-system/ic_syndfeed_secy_role_map.md)**  
You must configure the security role mapping for the Syndicated Feed Portlet.

**Parent topic:**[Syndicated Feed Portlet for HCL Digital Experience](../admin-system/ic_syndfeed_features.md)

