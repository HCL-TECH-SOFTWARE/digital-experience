# Working with analytics tags

To work with analytics tags, the portal provides a dialog. You can create new analytics tag mappings and view and delete existing ones.

You can open this dialog from the resource that you want to associate with an analytics tag.

1.  To **add** a page or portlet to an analytics tag, proceed as follows:

    1.  Open the page **Actions** menu or the portlet menu. The menu provides a section for Analytics.

    2.  Select the menu entry **Analytics Tags**.

        The analytics tag dialog opens; it offers the following controls:

        -   Two fields for entering the **Analytics tag name** of the tag to which you want to add the resource, and the **Analytics tag value** for that tag. Your input is matched against a regular expression.

            **Notes:**

            1.  Special characters and all of the following characters are not valid: parentheses, brackets, angle brackets, hash signs, single and double quotes: `(` , `)` , `[` , `]` , `<` , `>` , `#` , `'` , `"` .
            2.  The maximum allowed length for a name or a value is 100 characters.
            3.  You cannot associate the same analytics tag with the same resource twice.
        -   A list of existing analytics tag mappings, that is analytics tags that are associated with the portal resource. They have Delete icons next to them. You can view these icons and delete mappings only if you have the appropriate access rights. For details, see the topic about security for analytics tags.
        -   An **Add** button. To save the mapping between the entered analytics tag and the currently viewed portal resource, click **Add**.
        -   A **Done** button. Click **Done** when you have completed working with analytics tags for the currently viewed resource.
    3.  To add a new analytics tag to the resource, type the analytics tag in the tag name field. The field provides a typeahead feature. After you type three characters, it lists the existing tags that start with these three characters.

    4.  Type the value for the analytics tag in the second field. You must fill both fields.

    5.  To add and save the analytics tag mapping, click **Add**. The portal saves your tag mapping. If this mapping was not used before, it is created new. The tag and its value are shown in the dialog and added to the markup immediately .

2.  To **delete** an existing tag mapping, proceed as follows:

    1.  Open the page **Actions** menu or the portlet menu. The menu provides a section for Analytics.

    2.  Select the menu entry **Analytics Tags**.

    3.  Click the **Delete** icon for the tag mapping that you want to delete.

    4.  Click **Done**.

        The portal removes the tag mapping from the resource.


**Parent topic:**[Analytics tags](../admin-system/sa_asa_anal_tags.md)

**Related information**  


[Working with the XML configuration interface](../admin-system/adxmltsk.md)

