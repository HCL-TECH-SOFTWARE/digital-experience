#  Portal Search Center

The portal search engine helps your site visitors to find information easily. Visitors can search HCL Portal and HCL Web Content Manager sources, along with additional internal and external web search sources that you make available to them. To help your visitors manage searching different information sources, define search collections and scopes.

## Portal search administration

Administer search from the Administration portlets. To see what is configured after the installation, go to **Administration** \> **Search Administration** \> **Manage Search**.

Manage Search is divided into Search Services, Search Collections, and Search Scopes. A search service is the instance of the search engine provided with the portal. You create additional search services, or search engine instances, if you want to distribute the search load over several nodes.

If HCL Portal is deployed in a cluster, you must install and configure a remote search service. In a cluster environment, the remote search service replaces the Default Search Service.

A search collection stores keywords and metadata, and maps them to their original source. A search collection can have multiple content sources, such as web content, portlets, and more. You can set up multiple search collections for content sources if needed. 

Search scopes helps site visitors limit searches. You can use search scopes to define subsets of information that is stored search collections.

## Search configuration after installation

After the installation finishes, the following search capability is available:

-   **Search Service**

    There is one search service configured, Default Search Service.

-   **Search Collections**

    There are two search collections associated with the default search service:

    -   Default Search Collection: Includes two content sources, WCM Content Source and Portal Content Source. They include content that is delivered on the website, also referred to as runtime content.
    -   JCRCollection1: Includes one content source, JCRSource. This content source includes the HCL Digital Experience Web Content Manager authoring artifacts, such as the authoring template.

-   **Search Scopes**

    There are two search scopes:

    -   All Sources: Includes everything
    -   Managed Web Content: Includes only HCL Digital Experience Web Content Manager content


1.  [Configure search collections and scopes](oob_search_scope.md)  
HCL provides two search collections and a search scope. A search collection contains a number of content sources that the portal search service indexes. A search scope allows you to partition or organize your search collections. As a result your site visitors can limit their search to specific areas. Defined scopes are visible to visitors from the search dialog.
2.  [Adding External Search Results to the Search Center](oob_search_ext.md)  
Another type of scope is the remote search service scope that uses external search engines.
3.  [Configure keywords for suggested links](oob_search_links.md)  
 You can add search keywords to specific pages to promote those pages in search results. When a site visitor searches for the keyword, search results display in the Search Center. The Suggested Links portlet might also display additional links. The suggested links have the same keyword defined as the visitor’s search term. Suggested links help you direct your site visitors to priority content.

