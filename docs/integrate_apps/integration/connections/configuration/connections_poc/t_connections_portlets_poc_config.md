# Configuring navigation between portlets

Use URIs to identify, access, and display HCL Connections content and profiles in a portlet.

Use URIs to identify, access, and display HCL Connections content and profiles in a portlet. HCL Digital Experience uses Piece of Content \(POC\) URIs to identify and address specific pieces of content in HCL Connections independent of the page that is used to display the content. Using a POC URI, you can precisely identify what content you want to display without knowing where it is displayed in your HCL Portal server when you generate a link. For example, when a user clicks a link in a blogs summary portlet, the POC URI identifies the blog content. Clicking a link that uses a POC URI displays the blog entry in the Blogs detail portlet on the appropriate page. The evolution to POC URIs provides a greater precision for identifying, retrieving, and displaying content. The URI specifies the identity of the content, not the location of the view of the document. The location of the view to the document is called the portal URL, or URL, and the information that is contained in this URL includes the navigational state, or state. When you work with a POC URI, you do not must be aware of the page in Portal where a piece of content displays, you must know some identifying data about the piece of content to create the URL. The correct HCL Portal page to display the content is retrieved after the user clicks a link using a POC URI format.

The POC resolver handles navigation in following manner:

-   If the piece of content is community content:
    -   Search the community page for a detail portlet to render the content.
    -   If no static community page is found, search for a stand-alone page.
    -   If no stand-alone page is found, navigate to an error page.
-   If the piece of content is from a stand-alone page rather than from a community:
    -   Search the stand-alone page for a detail portlet to render the content.
    -   If no stand-alone page is found, navigate to an error page.

Three new optional parameters are supported in the POC URL to define where to search and navigate using the POC link. These parameters are:

-   **page**

    Holds the value of the exact target page where the POC URL searches for the appropriate portlet to show the content.

-   **rootpage**

    Holds the value of the root page where the POC starts its search before traversing the child pages to search for the appropriate portlet to show the content.

-   **errorpage**

    Holds the value of the error page where the POC content is directed to in case appropriate portlet is not found on page/rootpage.


**Note:** Either rootpage or page can be defined in the URL along with errorpage. For example: http://<portal\_server\>/wps/mypoc/!ut/p/digest!LLOg7KmZaRIqf\_q-eMb7Sw/connections/forums/atom/topic?type=topic&atomUriQuery=%3FtopicUuid%3D22b41c17-96a4-4ecf-ac35-dfef42994c18&actionType=TOPIC\_READ&service=Forums&forumUuid=cbfcd6f4-e94a-4c06-8aeb-8832edecd2aa&rootpage=rootPage&errorpage=errorPage The following values are supported for the page, rootpage, and errorpage parameters in the URL:

-   Unique name of the page.
-   Serialized object ID of the page.
-   The "current" value can be defined for rootpage and page. POC searches the appropriate portlet on current page.
-   These are non-mandatory parameters and can be left as blank and will not be considered.
-   Unique name of portal labels can be set as a value of the rootpage parameter.

The following table describes combinations for specifying the parameters and the expected behavior.

|Page parameter combinations|Corresponding behavior|
|---------------------------|----------------------|
|Nothing defined for page, rootpage or errorpage parameters|No change in behavior.|
|Only errorpage defined|Navigate to the specified error page.|
|Only page defined|Navigate to page if a portlet with matching preference is found. Otherwise, return to normal flow.|
|Only rootpage defined|Navigate to the first matching page in the hierarchy of the root page if a portlet with matching preference is found. Otherwise, return to normal flow.|
|page and errorpage defined|Navigate to page if portlet with matching preference is found. Otherwise, go to the error page.|
|rootpage and errorpage defined|Navigate to the first matching page in the hierarchy of root page if a portlet with matching preference found. Otherwise, go to the error page.|
|page, rootpage or errorpage defined|Navigate to page if a portlet with matching preference is found. Otherwise, go to the error page. Specifying a root page does not affect behavior.|
|An incorrect value is specified for any page parameter|This results in a logical error flow. For example, if a root page name does not exist and an error page is given, it will direct to the specified error page. Otherwise, return to normal flow.|

The following steps are an example of how you can wire portlets in an application. You can apply these steps to wiring any of the HCL Connections portlets in an application.

1.  To configure navigation to community pages, ensure that you have set the correct properties when you define the community page as described in *Mapping a community page to a community*.

2.  To configure navigation for content not inside a community, or for which a community page does not exist, ensure that you have created default pages for each service as described in *Configuring the portlets on a page*.


You can configure and customize certain aspects that are related to navigation by editing the resource environment provider. For information, go to *Configuring a resource environment provider for POC*.

-   Portlet IDs
-   Page names for stand-alone pages
-   Default page to display when a target page is not available


