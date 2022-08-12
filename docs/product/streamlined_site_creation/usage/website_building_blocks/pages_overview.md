---
id: pages_overview
title: Pages
---
import useBaseUrl from '@docusaurus/useBaseUrl';



A page is an organization element that contains portlets. Since version 8.0, pages are stored in the Portal Site web content library and managed by HCL Web Content Manager. Pages are stored as content in the library. By managing portal pages from within Web Content Manager, you can apply features like workflow, version control, and syndication to portal pages.

In the example wireframe, the home page portion is highlighted. The page contains five portlets. Most of the portlets render content by using the Web Content Viewer portlet. The Member Login portlet is providing access to the LDAP user registry for member authentication.

![Wireframe diagram of a website with the page portion highlighted.](../images/wireframe_page.jpg "Wireframe with a page highlighted. ")

## Pages and navigation

You can use the page hierarchy to establish the navigation structure in your website. The underlying information architecture is revealed in the navigation. There are other navigation approaches, but the page hierarchy is the simplest.

## Types of pages

Page types include static, dynamic, derived, private, and hidden.

-   **Static pages**

    Static pages use HTML templates to organize layout containers and controls, and are used as the default page type since version 7.0.

-   **Dynamic pages**

    Dynamically created based on the definition of an existing page. In most cases, a dynamic page is a transient copy of a template page, often referred to as base page. This transient copy behaves like a snapshot of the base page from the time when the copy was created. It contains all portlets of the base page and all its properties. The benefit of using dynamic pages instead of static pages is that you can create multiple copies or instances of the base page. A user can then manually switch or be redirected between these instances.

-   **Derived pages**

    Derived pages are child pages of the original page and inherit the properties of the original page. Creating a derived page is equivalent to creating a new, specialized layer on the original page. The original page and the new layer are aggregated together at rendering time. The new layer is contained within and controlled by the original page. Reference an existing page to give administrative access to the other users, but still maintain the content and layout from the original page.

-   **Private pages**

    A private page can be accessed only by its owner, who must be a Privileged User. A Privileged User can explicitly create new private pages that are accessible only by themselves. Additionally, a Privileged User on a non-private page can personalize the page and create new private pages underneath it. Customizing a non-private page usually creates a private copy of the corresponding non-private page. Any changes that a Privileged User makes to a non-private page are not accessible by other users.

-   **Hidden pages**

    Hidden pages do not show in the portal, but contain portlets that can be opened from other pages. These hidden pages do not appear in the site navigation, but are opened from generated links in portlets or theme code. For ease of administration and conserving system resources, you can place and manage such pages in one place, for example, in the Edit Page Properties portlet: users can open from a link in the theme, but the portlet instance itself is on a hidden page in the content model.

    Page templates are stored as hidden pages under the context root, **Context Root** \> **Hidden Pages** \> **Page Templates**.


## Pages and the portal theme

Using the portal theme that is available for immediate use, you can

-   Create, reorder, delete, and edit the properties of pages, labels, and URLs
-   Reorder pages, labels, and URLs
-   Assign access to pages, labels, and URLs
-   Move pages to a new location in the portal hierarchy

Both administrators and users with appropriate access can create and delete pages. Users can delete only the pages they create or the pages for which they have at least Manager access.

## Versioning and syndication of pages

You can create version and use syndication to publish the following portal artifacts:

-   Portal page definitions that are stored in the release domain, including page properties, metadata, and layout settings
-   Content targeting rules
-   Access control that you grant to portal pages
-   Public wires that connect portlets on the same page or on different pages
-   Portlet preferences that are made in the **Edit Shared Settings** mode
-   Vanity URLs

You cannot create version or use syndication to publish the following portal artifacts:

-   Explicitly derived pages
-   Private pages
-   Personalization rules that are defined in Personalization and not in Web Content Manager
-   Tags and ratings
-   Themes and skins
-   URL mappings
-   Artifacts that are stored in the WebDAV file store by portlets or iWidgets
-   WSRP Producers

## Pages and the authoring portlet

By default, the display name of the portal page site area is based on the title of the portal page. Web Content Manager assigns a unique name in the library for each portal page site area. You can have pages with the same title organized in separate portal page site areas.

The operations that you can do on the portal page site areas in the authoring portlet are restricted. You can set Web Content Manager properties in the authoring portlet, and you can also move portal pages through the authoring portlet. But you cannot change the name, title, or description of Portal pages. For changing the title or description, you must use the portal user interface.

**Note:** If you delete a portal page, the portal page site area is deleted from the web content library. If the portal page site area contains any other site areas or content items, they are also deleted.

## Pages and portal page site areas

The portal page site area is a special site area. In addition, to the usual Web Content Manager data site area pages contain an XML document that represents the portal page in the portal release domain database. This XML document is updated whenever a new version of the page is created or during a JCR import.

-   **[System content associations](../wcm/wcm_mngpages_sysmapping.md)**  
System content associations are used to associate a portal page with its corresponding artifacts in HCL Web Content Manager. A system content association is an extension of the standard content association.
-   **[Best practices for pages](../wcm/wcm_mngpages_bestpractice.md)**  
Use these tips and guidelines to develop and deploy pages more effectively.
-   **[Troubleshooting pages](../wcm/wcm_mngpages_trouble.md)**  
When you work with pages, you might encounter problems that are related to projects, access rights, or other issues.
-   **[Known issues for pages](../wcm/wcm_mngpages_limits.md)**  
You can review known issues for pages.

