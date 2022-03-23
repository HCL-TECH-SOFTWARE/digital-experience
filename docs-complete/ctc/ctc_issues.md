# Known limitations for Content Template 4.4 

This topic contains known issues for this release of Content Template Catalog.

## Working in the published site

If you work in a project, all draft changes made by a user can be published by using the project. If you're working directly on the publish site, new items are created as drafts, and so will not be visible in the published site. You need to publish all newly created items immediately for your changes to be visible in the published site. If you do create a draft and do not publish it, go to **Applications \> Content \> Web Content Management** to work with the draft item.

## Sites that use the Content Template Catalog page templates and the Portal Site library

When creating a new site with either the Internet or Intranet site templates, or other sites that use the Content Template Catalog page templates, do not select the Portal Site Library. You must use an existing library or create a new library to store the content that is used by these sites.

## Moving pages

If you move a page from one location to another, you must also move the related site area to the equivalent location otherwise you might see some unexpected behavior. For example, the breadcrumbs that are displayed on a Content Template Catalog page are based on the site area hierarchy, not the page hierarchy. If you do not move the site area, the breadcrumb will be wrong. This only applies if the associated content for the page is in a dedicated web content library. It does not apply if the content for the page is under the page in the Portal Site library.

## Deleting pages

When you delete a page that was created using a CTC page template, the content associated with that page is not deleted. To remove any content associated with a page, a user with Manager access or higher to the library must go to **Applications** \> **Content** \> **Web Content Management** and remove them manually. The content is located in the library that was selected when the site was created. This only applies if the associated content for the page is in a dedicated web content library. It does not apply if the content for the page is under the page in the Portal Site library.

## Deleting sections, topics, and offerings

Sections, topics, and offerings cannot be deleted from within a CTC site, since they constitute site areas rather than single pieces of content. They can be deleted by going to **Applications** \> **Content** \> **Web Content Management** and deleting the corresponding site area.

**Parent topic:**[Content Template overview ](../ctc/ctc_overview.md)

