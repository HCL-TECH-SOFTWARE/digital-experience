# Site and section templates

Create site templates to rapidly deploy complete websites. Create section templates to quickly add sections that are based on common information architecture patterns to existing websites.

When you create or edit a template, you define default values for the site or section wizards. The user that is running the site or section wizard can change many of the default selections that you make. Communicate your intended use for content libraries, page templates, and so on, to the wizard users.

## Sites and sections

The main difference between a site and a section is where the top-level page is placed.

For sites, the top-level page is always placed after the content root.

Sections can only be added to sites where a page exists at the top level of the site structure. You cannot add sections to sites that have a label at the top-level of the site structure.

Sections are always placed in relation to an existing page in an existing site. A section can be placed either before, after, or as a child of an existing page. Sections cannot be added as a sibling of a page located directly after the content root.

Site templates can be converted to section templates, and section templates can be converted to site templates.

## Creating a template

Templates are created using a wizard that guides you through a set of properties:

-   **Template Properties**

    Information that you provide about the template helps site and section creators choose the correct template faster. Provide a meaningful name and clear description. Include a thumbnail of the landing page for the site or section.

-   **Site Properties**

    Applies only to site templates. Provide meaningful default values for the site to make the site creation process simple. Website creators can change the site information when they run the wizard.

-   **Content Library**

    Applies only to site templates. Define where content for the website is stored. Website creators can change the content library when they run the wizard. Section templates use the same library as the parent page they are placed under when the section is created.

    A good practice is to store content in a separate library and from other site assets such as workflows, presentation and authoring templates. A typical site has multiple libraries, one for content, one for pages, and one for supporting assets.

    -   **Create a content library**

        Use this option to create a library every time a new site is created with a site template. This option allows access controls and syndication to be managed uniquely for each new library. This option is not available if content that is associated with the page template is stored in the Portal Site library. For example, the Basic and Articles page templates store default content in the Portal Site library and cannot be used with a new library.

    -   **Portal Site library**

        The Portal Site library is used system wide to store pages. If your page templates are associated with content stored in the Portal Site library, you must use this library. If you plan to export these templates for use on a different server, selecting the Portal Site Library can result in conflicts.

    -   **Select an existing content library**

        If you have existing content for the template, then specify that library.

-   **Site Structure**

    The structure page is different between the site and section templates. For both the site and section, you create a structure that includes all the page templates that the site or section creators need. You can rearrange or remove pages and modify page names and properties. Website creators can modify the page structure when they run the wizard.

    For the section template, you can also specify a default location for the new section. You select an anchor page and then specify where the new section is placed relative to the selected anchor page. Section creators can remove pages, change page properties, select a new location, and select additional content.

    By default the content for each page in the Site Builder template will be based on the content from the relevant page template. The user has the option to use their own custom content that will work along side or completely replace the content of a page template. See [Content seeding](../site_dev_with_sitebuilder/creating_sites_using_sitebuilder/sitebuilder_using_content_seeding.md) for further information.

-   **Site Experience**

    The Site Experience page is similar between the section and site template. From either the site or section template editor, you select the theme, profile and style. Since the theme and profile govern capabilities, the selections cannot be changed in the wizard.

    For the section template, you can define whether the section inherits the same theme, profile, and style as the selected anchor page.

-   **Access**

    Access control is different between section and site templates. For site templates, define the initial access settings for site visitors and administrators.

    For section templates, the new section can inherit access settings from the selected parent page. Whether the section inherits the settings or not, depends on the parent page configuration. The parent page can be configured to not allow inheritance.

    If the parent page does not allow inheritance, the access control settings are used. If inheritance is allowed, the access control settings are in addition to the inherited settings.



