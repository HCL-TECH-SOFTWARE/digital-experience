# Syndicated Feed Portlet for HCL Digital Experience

The Syndicated Feed Portlet for HCL Digital Experience offers enhanced feed subscription and presentation capabilities.

Using the Syndicated Feed Portlet, a user can:

-   Integrate, view, and manage RSS and ATOM feeds from portal pages
-   Organize the feeds into new and existing feed categories
-   Specify authentication options and credentials \(private or shared\) for password-protected feeds
-   Extensively customize the presentation style for feeds
-   Export the feeds of the Syndicated Feed Portlet to an Outline Processor Markup Language \(OPML\) compliant XML file and import multiple feeds by specifying an appropriate OPML URL.
-   Enable and configure servlet and dynamic caching for caching the portlet user interface and feed data, respectively

Using the Syndicated Feed Portlet, an administrator can perform all the functions that a user can. Additionally, the administrator can:

-   Regulate a user's ability to customize the portlet
    -   Apply locks on a user's ability to perform feed subscription related functions, such as
        -   Adding feeds to the portlet
        -   Enabling or displaying the feeds in the view mode of the portlet
        -   Configuring cache settings
    -   Apply locks on a user's ability to customize feed presentation related options, such as
        -   Choosing a presentation style for the feeds
        -   Displaying or hiding the toolbar. A toolbar enables you to perform all the operations related to feeds and feed categories from within the view mode.
        -   Displaying or hiding the channel bar. The channel bar displays the name of the feed category and the name of the feed subscription separated by a forward slash \(/\).
        -   Customizing the portlet window title to be the same as the default portlet title, the title of the first selected feed, or a custom title
        -   Displaying or hiding the author of feed items
        -   Displaying or hiding the Published date of feed items

You can perform all the listed tasks from within the Syndicated Feed Portlet. Steps for performing the previous tasks are documented in the HCL Digital Experience help.

The following configuration tasks need to be performed by an Administrator from HCL Digital Experience, IBM® WebSphere® Application Server, or the HCL Portal file system:

-   Configure settings for a proxied environment
-   Configure a user's ability to customize the portlet window title
-   Enable display of SSL-secured feeds
-   Configure global cookies for feeds.

-   **[Additional information for using the Syndicated Feed Portlet](../admin-system/ic_syndfeed_use.md)**  
When using the Syndicated Feed Portlet for HCL Portal it is important to consider additional information about authentication methods, feed details, and settings.
-   **[Configuring proxy settings](../admin-system/ic_syndfeed_proxy.md)**  
The Syndicated Feed Portlet for HCL Digital Experience is supported in a proxied environment.
-   **[Customizing the portlet title](../admin-system/ic_syndfeed_title.md)**  
With the appropriate configuration settings, you can customize the portlet window title to be the same as the default portlet title, the title of the first selected feed, or a custom title that you specify in the portlet configuration panel.
-   **[Enabling display of SSL-secured feeds](../admin-system/ic_syndfeed_sslfeeds.md)**  
When you use the Syndicated Feed Portlet, some feeds that use HTTP over SSL \(HTTPS\) might not function properly because of missing SSL certificates. You might encounter errors, such as Missing Certificate, Unknown Certificate, or Untrusted Certificate because of missing root signer certificates or missing self-signed certificates in the certificate truststore. In both the cases, you must add the appropriate certificates to the certificate truststore.
-   **[Configuring cookies and active content filtering](../admin-system/ic_syndfeed_cookie.md)**  
You can configure the Syndicated Feed portlet to forward HTTP cookies with outbound requests to feed sources, or restrict the portlet to forward cookies only to specific domain names. You can also enable active content filtering for all feeds to remove active content such as Java script from the feed text.
-   **[Client side aggregation \(CSA\) rendering in the Syndicated Feed Portlet](../admin-system/ic_syndfeed_csr.md)**  
The Syndicated Feed Portlet can be configured to operate in the client side aggregation \(CSA\) rendering mode. Client side rendering ensures an improved user experience through faster response time. When you enable client side rendering in the portlet, the portal does not re-render the whole page but only the aspects of the portlet that change.

**Parent topic:**[Setting up a website](../site/site_setup.md)

