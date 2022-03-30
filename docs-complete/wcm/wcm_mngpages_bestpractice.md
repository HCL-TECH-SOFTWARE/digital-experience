# Best practices for pages 

Use these tips and guidelines to develop and deploy pages more effectively.

## Create links in web content to portal pages

When you enable pages, you can create links to portal pages from within the authoring portlet in HCL Web Content Manager. You can create links to portal pages in two ways:

-   By editing a content item in the rich text editor and inserting a link.
-   By creating a link component.

To select the portal page, click **Browse content** in the **Link** field, and browse to the page in the Portal Site library.

Referential integrity applies for links to portal pages. You cannot delete a portal page if a link pointing to that page exists. You can view or remove such link references in the following ways:

-   Edit the page properties in the portal user interface and select **View References**.
-   Select the page item in the authoring portlet in Web Content Manager and click **More** \> **View References**.

When users click a link, the link is resolved according to the system content mapping for the portal page item in the Portal Site library. Based on the system content mapping, the appropriate portal page is displayed.

**Important:** You cannot change system content mappings through typical operations with the user interface. However, it is possible to change system content mappings through programmatic interfaces, like the XML configuration interface \(xmlaccess command\), or other low-level database operations. If a system content mapping is changed or corrupted through such a method, the link can no longer be resolved.

## Use unique friendly URLs with pages

When you create pages, it is not possible to programmatically enforce uniqueness of friendly URLs in all circumstances. Because of this behavior, it is possible to create multiple pages that have the same friendly URL, which can produce unexpected results. To prevent potential confusion, ensure that all friendly URLs that you create are unique.

## Use transaction processing with the XML configuration interface

Because pages are stored in the Portal Site library in Web Content Manager, each page has corresponding objects in the JCR database. You must be aware of this relation when you create, update, or delete pages with the XML configuration interface. If xmlaccess processing is interrupted, it can result in a mismatch between the page state and database state.

**WARNING:** If you redeploy your site daily, your JCR size increases because of page versions. Periodically clean up your versions to reduce the JCR size. Go to [Clearing version history](wcm_admin_clear_versions.md) for information.

To ensure that page and database information for a page remain synchronized, use the `transaction-level` attribute of the `request` element in the XML file. For more information about using the `transaction-level` attribute, go to *XML configuration reference.*

Example:

```
<request 
    type="update" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd"
    transaction-level="resource">
```

## Associating extra metadata to a portal page

When you need to associate extra metadata to a portal page, create a separate content item that stores the metadata and that can be referenced by using the portal page metadata. Since the portal page content template is not exposed as public API it is not advised to add elements to the portal page content item itself.

**Parent topic:**[Pages ](../site/pages_overview.md)

