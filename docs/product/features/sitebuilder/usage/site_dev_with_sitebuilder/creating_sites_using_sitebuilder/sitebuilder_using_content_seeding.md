# Content seeding

Content seeding allows the user to create a page from a page template by using their own custom content that works along side or completely replace the default content of a page template.

Content seeding works in two different modes:

-   **Replace mode**

    Replace mode is enabled by selecting **Selected site area** in the **Edit Page Attributes** dialog when adding a page to a site template or section template. The content that is located under the selected site area is copied into a new site area when a new page is created by using the site template or section template. It is important that the content used to seed the new page is compatible with the portlets used on the page template, otherwise not all the content will be displayed correctly.

-   **Merge mode**

    Merge mode is enabled by selecting **Use template and selected site area** in the **Edit Page Attributes** dialog when adding a page to a site template or section template. When a new page is created using the site template or section template, then both the default content of the page template and the content that is stored under the selected site area are copied into a new site area when a new page is created by using the site template or section template. Again, it is important that the selected content used to seed the new page is compatible with the portlets used on the page template, otherwise not all the content will be displayed correctly.

    In merge mode site or section creation fails if there are any path conflicts between the default content of the page template and the selected site area. If this happens, you must rename the conflicting site area or content that is stored in the selected site area, and try creating the new site or section again.


## Seeded content structure

The recommended structure for seeded content is one site area per page. It is not recommended to use seeded content for more than one page, as path conflicts may occur. Content seeding should not be built in a hierarchy that matches the site hierarchy. All content from a given seeded content site area is copied when the page is created, so if the content is in a hierarchy it tries copy all the seeded content for a site at once. The content will then need to be copied again for the child site pages. This will cause performance issues when creating a site.

## Content location

When you use content seeding, you must consider whether your site template is created in the portal site library or a new or existing library. If you use the portal site library, the content is copied into existing pages. This can change the expected structure of the seeded content.

If you change the content location of a site with content seeding, the page might not be created correctly and the links on the page might need to be updated to match the new structure. For this reason, it is not recommended that you update the content location if content seeding is being used.

**Parent topic:**[Site development with Site Builder](../panel_help/sitebuilder_using.md)

