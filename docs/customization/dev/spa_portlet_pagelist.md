# The SPA Resource Addressability portlet

The SPA Resource Addressability portlet allows you to add a dynamically computed list of links to portal resources to a static page. This list is produced dynamically via a POCURI \(Piece Of Content URI\).

## Unique name

You can address the SPA Resource Addressability portlet by its unique name: `wps.p.SpaResourceList` .

## Usage

You can embed the SPA Resource Addressability portlet into a static page by using the semantic tag `portlet-window` described in the topic about class attributes for portlets on static pages. When rendering the page, the server replaces the tag with the portlet microformat, and the portlet renders the list of page links by using the navigation microformat. The portlet accepts the following configuration parameters that you can embed by coding a definition list \( `<dl>` \) in the static page:

-   **uri**

    This is the POCURI to an ATOM feed. The list of resource links is the list of alternate links in this ATOM feed.

-   **<any parameters\>**

    All other parameters are taken as parameters for the POC \(Piece Of Content\) DataSource that produces the ATOM feed.


**Parent topic:**[Portlets for adding dynamic elements to static pages](../dev/spa_portlets.md)

**Related information**  


[Class attributes for portlets on static pages](../dev/spa_plt_mcrfrmt.md)

