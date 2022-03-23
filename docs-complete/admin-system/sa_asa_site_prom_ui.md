# Working with site promotions 

To work with site promotions, the portal provides a dialog. You can create new site promotion mappings and view and delete existing ones.

You can open this dialog from the resource that you want to associate with a site promotion.

1.  To **add** a page or portlet to a site promotion, proceed as follows:

    1.  Open the page **Actions** menu or the portlet menu. The menu provides a section for Analytics.

    2.  Select the menu entry **Site promotions**.

        The site promotion dialog opens; it offers the following controls:

        -   A field for entering the **Site promotion name** of the site promotion to which you want to add the resource. Your input is matched against a regular expression.

            **Notes:**

            1.  Special characters and all of the following characters are not valid: parentheses, brackets, angle brackets, hash signs, single and double quotation marks: `(`, `)`, `[`, `]`, `<`, `>`, `#`, `'`, `"`.
            2.  The maximum allowed length for a site promotion name is 100 characters.
            3.  You cannot associate the same site promotion with the same resource twice.
        -   A list of existing site promotion mappings, that is site promotions that are associated with the portal resource. They have Delete icons next to them. You can view these icons and delete mappings only if you have the appropriate access rights. For details, see the topic about security for site promotions.
        -   An **Add** button. To save the mapping between the entered site promotion and the currently viewed portal resource, click **Add**.
        -   A **Done** button. Click **Done** when you complete working with site promotions for the currently viewed resource.
    3.  To add a new site promotion to the resource, type the site promotion name in the site promotion name field. The field provides a type-ahead feature. After you type 3 characters, it suggests existing site promotions that start with these 3 characters.

    4.  To add and save the site promotion mapping, click **Add**. The portal saves your site promotion mapping. If this mapping was not used before, it is created new. The site promotion is shown in the dialog and added to the markup immediately.

2.  To **delete** an existing site promotion mapping, proceed as follows:

    1.  Open the page **Actions** menu or the portlet menu. The menu provides a section for Analytics.

    2.  Select the menu entry **Site promotions**.

    3.  Click the **Delete** icon for the site promotion mapping that you want to delete.

    4.  Click **Done**.

        The portal removes the site promotion mapping from the resource.


**Parent topic:**[Site promotions ](../admin-system/sa_asa_site_prom.md)

**Related information**  


[Working with the XML configuration interface](../admin-system/adxmltsk.md)

