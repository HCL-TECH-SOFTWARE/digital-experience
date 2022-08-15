# Creating other pages

All of the Content Template Catalog page templates specify the page parameter ibm.portal.instantiation.content.dynamic.copy.target.selection as true. This means that the page template instantiation code copies the content that is associated with the page template into the site area that is mapped to the existing parent page.

For more information, see [Web content associations](../wcm/wcm_delivery_contentmap_about.md).

Keep these things in mind when you are creating pages:

-   The parent page must be associated with content for the template instantiation code to run. The content is not copied if the page is not associated with content. For example, if you create a page by using the Basic page template that does not have any associated content, and then create a page under the Basic page by using the Content Template Catalog page templates, the content that is associated with the page templates will not be copied, and the pages will not function correctly.

-   The new child page is mapped to the newly created area for you. All the portlet references are re-routed to the copied content.

-   The new site area name is the same as the friendly URL name that you enter for the page. This site area name is displayed in the breadcrumbs and in sitemaps. Therefore it is recommended that your page names and site area names should be kept the same so that the breadcrumb displays correctly. For example, if you rename, move or delete a page, you should rename, move, or delete the associated site area.


**Parent topic:**[A roadmap for Content Template Catalog site authors](../ctc/ctc_gs_authors.md)

