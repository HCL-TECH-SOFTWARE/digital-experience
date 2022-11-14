# Pages and page types: derived and hidden pages

Understanding the behavior of derived pages, and hidden pages, and the differences between them can help you manage pages and create the correct type of page for your needs.

A page is an organization element that defines how content is displayed. A page can contain portlets and other pages. Derived pages are children of the original pages and have specific behavior that you must be aware of.

Derived pages inherit the properties of the original page. Creating a derived page is equivalent to creating a new, specialized layer on the original page. The original page and the new layer are aggregated together at rendering time. The new layer is contained within and controlled by the original page. You can give administrative access to other users by referencing an existing page while you maintain the content and layout from the original page. The following implications apply to derived pages:

-   If content is locked on the page that is referenced, content is locked on all derived pages that reference that page.
-   If a portlet is deleted from the page that is referenced, the portlet is deleted from all pages that reference that page. All individual user settings for that portlet are also lost.
-   The user must have User role access to the original page to access the derived page. Therefore, private pages cannot be shared in this manner.

Changes made to the original parent page might be reflected to the derived pages that reference it. Layers can be created on other layers to create a chain of cascading pages, referred to as delegated page specialization. This process means that a root page can be created, and the top-level administrator can decide the initial layout and content of the page. The next level administrator can then control and modify a specialized layer of the root page, adding more content and layout. This process can continue down a chain of page managers and submanagers. Managers or submanagers in the chain see only their individual layer of the chain. However, they must have the User role for every layer higher than theirs to see the content of the previous layers. A user is only able to see a layer of the page if appropriate access is given. Here are some examples to illustrate this concept.

John, the superadministrator, creates a page Home and titles it Home. Brandy, a subadministrator, manages the next level of the home page, named Home\_operations. Brandy determines what more content needs be added to the Homepage for employees in the operations group. Nick, the next level administrator, manages the next level of the Home page, Home\_operations\_transportation. Nick determines the content that needs to be available on the Home page for employees in the transportation department. Nick, as the transportation page administrator, must have the Manager role for Home\_operations\_transportation to change the page. The changes that Nick makes affects all users, and the User role for Home\_operations and the User role for Home. Nick must have the User role on every layer that combines to create the Home\_operations\_transportation level. Desi, a user of the Home\_operations\_transportation page, must have the User role for Home\_operations\_transportation, and she must also have the User role for Home\_operations and the User role for Home. When Desi, the user logs on to the portal, she sees one Homepage. This Homepage is an aggregation of all the layers that are associated with the root Home page.

**Notes:**

-   If you delete a page that is referenced by another page, all pages that reference the deleted page are also deleted.
-   The markup that is specified for the root page cannot be modified on derived pages. The whole derivation tree structure with all layers supports the markup that is specified on the root page.
-   You can disable the ability to change the title and description of derived pages by setting the allow.derived.titles parameter in the portal WP Configuration Service in the WebSphere® Integrated Solutions Console. For details, see the description for the allow.derived.titles parameter in the topic about the portal Configuration Service.

-   **[Behavior of derived pages in combination with locks and changing access permissions](../admin-system/mp_derived_page_behavior.md)**  
Using and altering locks in conjunction with access permissions on the parent pages may result in changes on derived pages depending on the complexity of the derivation structure. The following scenario describes the behavior of derived pages.


**Related information**  


[Hiding and displaying pages in the navigation](../site/show_hidden_page.md)

## Hidden pages

Hidden pages do not show in the portal, but contain portlets that can be opened from other pages. The hidden pages do not appear in the site navigation, but are started from generated links in portlets or theme code. The feature to set a page that you create as a hidden page is not available in the UI. Follow the steps in the topic *Hiding and displaying pages in the navigation* to set a page as hidden. For ease of administration and conserving system resources, you can place and manage hidden pages in one place. An example is the Edit Page Properties portlet: users can start it from a link in the theme, but the portlet instance itself is on a hidden page in the content model.

Some scenarios and use cases require such hidden pages. The easiest way to create a hidden page for such purposes is to create the page as a child of the **Hidden Pages** label, which is a child of the content root. This label is hidden from the navigation. It is a container for hidden pages in the portal, and it minimizes the cycles that are required to render the top-level navigation links while still providing support for hidden pages.

Set your custom theme when you create a hidden page, do not inherit the theme. If you use legacy themes, be aware that they render the top-level navigation that is based on the level that is specified in theme policy or page metadata to render the navigation at the appropriate level. If you use such a theme and you create a new hidden page under the Hidden Pages label, set the metadata value `com.ibm.portal.themepolicy.topNavigationStartLevel` for the page to `3`.

