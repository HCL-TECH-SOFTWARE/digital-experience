# Web 2.0 user interface features

Learn about portal features that pertain to the Web 2.0 generation type of Web user interface.

Web technology has evolved towards a different direction. In the public this evolution has been named Web 2.0. This term does not describe a new type of technology, but has been used in a broad manner to describe a change to a more user centered focus. Among the benefits are improved customer and service orientation, increased user activities, easier communication and collaboration, better usability, faster performance, etc.

Within portal, the Web 2.0 features are implemented as follows:

-   Client side portlet programming model: You can use the client side programming model for your portlets. You can do everything with the client side programming model that you can do with the server side portlet programming model. Additionally, the client side programming model has the following advantages:
    -   Improved user experience by faster responses and performance, as many interactions are processed on the client side rather than on the server.
    -   User customization of user profile, preferences, and changes to the portlet state are done locally, and therefore with a faster response time. A fragment that contains the customization is later sent to the server and saved.
    -   The user experience is consistent between both client side aggregation and server side aggregation.
-   Live text: You can use live text. Live text provides elements embedded in portal pages that become active in the browser and are enhanced with additional functionality by JavaScript libraries. For example, if you include portal user IDs in your portlet output and mark them as live text, users can click these IDs in the browser and see a person info card or a menu that allows them to send a mail to the person. Live text has the following advantages:
    -   Live text allows easier click to action.
    -   You can adopt new portal content within your company more easily, as it is now easier to handle portal tags. For example, you can write tags and make them available centrally, and UI developers can reuse these tags for in their portlets for various purposes.
    -   Content editors can add meaningful live text elements to portlets without requiring portlet development knowledge.
    -   You can embed content from other sources, for example, from a HTTP or .NET server.
-   REST services:
    -   Portal offers many REST services, such as Layout model, Portlet model, Content model, Navigation model, Wire model,and User profile, and composite applications.
    -   By the use of REST services you can write your own advanced Web application and build it with REST \(Representational State Transfer\) services that provide the XML request information.
    -   REST services allow you to access portal models remotely for both read and write access. The Navigation model allows read access only; it is updated by changes made to the content model.
-   Controller SPI: The Controller SPI is a public portal interface. It is not directly related to the Web 2.0 type of user experience, but it allows you to perform certain administrative tasks more easily.

## Terminology

These are terms that are used in the documentation for the Web 2.0 features:

-   **CSA**

    Client Side Aggregation. This means aggregation based on JavaScript and XSLT transformations that are executed on the client. This is the aggregation model that provides an improved user experience by faster response and performance.

-   **SSA**

    Server Side Aggregation. This means aggregation based on JSPs that are executed on the Server. This is the "old" portal aggregation model; this still works as before.

-   **Pure Server Side Portlet**

    This is a normal server side portlet that uses Java and JSPs; it usually uses no JavaScript. Portlets that are written to the client side model use no or few JSPs.

-   **AJAX Portlet**

    This is a normal server side portlet that uses lots of JavaScript and AJAX technologies and less Java & JSPs.

-   **DPR**

    **Differential Page Rendering.** This denotes the server side rendering model that is used by the Web 2.0 theme. The concept of DPR is to render only those parts of a portal page that were affected by the a user interaction. For example, if a user interacts with a single self-contained portlet that runs in the Web 2.0 theme, the portal refreshes only this portlet rather than the entire portal page.

-   **REST**

    Representational State Transfer.


-   **[The client side portlet programming model](../web2_ui/clientside_portlet_programming/index.md)**  
You can use the client side programming model to make use of AJAX techniques in your standard API portlets.
-   **[Outbound HTTP connection](../web2_ui/outbound_http_connection/index.md)**  
Applications in your HCL Portal and the related user activities can require outbound HTTP connections to remote computer systems. The outbound HTTP connection service provides an administration infrastructure with a central point of administration for all outbound HTTP connections that are defined in the portal environment.
-   **[Live text for click-to-action](../web2_ui/live_text/index.md)**  
HCL Digital Experience supports a live text API for user controlled data transfer between components. With live text, a component on a page can declare sources and targets for data transfer. For example, this can be a portlet or a navigation element. When the user clicks on a source element, the portal displays a menu listing targets that match the selected source. When a menu item is selected, the portal invokes the corresponding target passing it the source data. This process is called Click-to-Action \(C2A\).


