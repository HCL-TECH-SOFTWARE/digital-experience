# Adding sites and sections



Rapidly deploy websites or add new sections to existing sites from predefined site or section templates.

## The site or section wizard

These wizards steps you through creating either a website or adding a section to an existing site. The wizards are based on templates. Some templates are provided with Site Builder. Your organization can also create new templates. The person that creates the template provides default selections. You can change the default selections.

-   **Site Name**

    Applies only to the site wizard. Provide a meaningful name, title, and description to help users find and identify your site. You can also enter a friendly URL for the site. Naming your site identifies it to visitors and search engines. Users see the description in search results. It gives visitors an idea of what to expect from the site.

-   **Content Library**

    Applies only to site templates. Define where content for the website is stored. You would normally leave the selected option unchanged. Website creators can change the content library when they run the wizard. Section templates use the same library as the parent page they are placed under when the section is created.

    A good practice is to store content in a separate library and from other site assets such as workflows, presentation and authoring templates. A typical site has multiple libraries, one for content, one for pages, and one for supporting assets.

    -   **Create a content library**

        Use this option to create a library every time a new site is created with a site template. This option allows access controls and syndication to be managed uniquely for each new library. This option is not available if content that is associated with the page template is stored in the Portal Site library. For example, the Basic and Articles page templates store default content in the Portal Site library and cannot be used with a new library.

    -   **Portal Site library**

        The Portal Site library is used system wide to store pages. If your page templates are associated with content stored in the Portal Site library, you must use this library. If you plan to export these templates for use on a different server, selecting the Portal Site Library can result in conflicts.

    -   **Select an existing content library**

        If you have existing content for the template, then specify that library.

-   **Site Structure or Section Structure**

    The structure page is different between the site and section wizards. For both the site and section wizard, a set of page templates is preselected and organized into a suggested structure. You can rename the pages, change page properties, and select more content.

    For the section wizard, you must additionally select where the new section is created. You select a parent page from the website that you are adding the section to. The section stores content in the same content library as the selected parent page.

    -   **Site Experience**

        This is accessed by clicking **Advanced Settings** in the Site Structure or Section Structure tab. The Site Experience page is different between the site and section wizards.

        For the site wizard, you can select the style. You cannot change the theme or profile for the site but you can change the default after the site is created.

        For the section wizard, you can select to inherit the site experience from the selected parent, or you can select a different style.

    -   **Access Control**

        This is accessed by clicking **Advanced Settings** in the Site Structure or Section Structure tab. The Access Control page is the same between the site and section wizards, but the implications for the section wizard are different.

        For the site wizard, you select users and groups that have access to the site.

        For the section wizard, the users and groups that you select are in addition to users and groups that might be inherited from the parent page. If the parent page does not allow inheritance, the access control settings are used. If inheritance is allowed, the access control settings are in addition to the inherited settings.


## Creation status

When you create a new site or section, a new creation task is run and can be monitored from the Site Builder home page. There you can view a list of completed tasks, tasks in progress, and failed tasks. You can view the reason for a failed task using the **More** button next to the failed task.
