---
id: wcm_dev_elements_option-selection_add_template
title: Using an option selection element
---

# Using an option selection element


An option selection element can be added only to an authoring template. You create a predefined set of values for content creators to select from when you create a content item or site area.

1.  Open or create an authoring template.

2.  Click **Manage Elements** .

3.  Select **Option Selection** as the element type.

4.  Enter a name. Do not use double-byte and non-ASCII characters.

5.  Enter a display title to use as the title of the element displayed indexes and forms.

6.  If you create a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays a different display title for each language it is configured for. The text that is entered in the **Display Title** field is only used if an appropriate display title is not available from the selected text provider, or if the text provider is not available.

7.  Click **OK**. The option selection element is added to your form.

8.  Go to the **Default Content** tab.

9.  Go to the option selection element you created.

10. To display the element as a required field select **Identify this as a required field**.

11. To hide a field on the content form from all users select **Hide field**. You must specify a default value if the field is a required field.

    !!!note
        Administrators and managers can choose to display hidden fields and elements in an item by clicking **Show hidden fields**.

12. Select whether to allow content creators to be able to select multiple options, or just a single option. If you are using multiple select, you can also specify the minimum and maximum selections a content creator can make.

13. Select an option type:

    1.  Select **Use Taxonomy** if you want to select categories from a taxonomy.

        -   Select **All available categories** if you want your content creators to be able to select any category.
        -   Select **Selected Categories Only** if you want to specify which categories appear in the option selection element. The categories that you select and any of their children are available for selection by content creators. You then select whether to display the category title only, or the title and path under the setting **Display category selection option as**.
        -   Select **Include selected categories in the item's profile** if you want the categories that are selected by a user to be added to the item's profile.

            **Note:** Some options allow users to select a taxonomy in the option selection element. Although a user can select a taxonomy, the selected taxonomy is not added to the item profile. Only categories that are directly selected by users are added to the item profile.

    2.  Select **User Defined** to define a set of options. Type the options in the user-defined field, one on each line, in exactly the order you want them to appear on the content form.

14. The options can be displayed as either radio buttons, a drop-down list or a paged table. You can also select to "automatically select the most appropriate option". If there are five options or less, radio buttons are used. If there are more than five, but less than twenty-one, a dropdown list is used. If there are more than twenty options, a paged table is used.

15. Select the users or groups you want to grant exclusive edit access to a field or element by clicking **Add Editors**.

16. Select the users or groups you want to grant exclusive view access to a field or element by clicking **Add Viewers**.

17. Type field-specific help into **Field help**. This text displays near the element in the content form.

    If you create a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays a different help text for each language it is configured for. The text that is entered in the **Field help** field is used only if an appropriate help text is not available from the selected text provider, or if the text provider is not available.

18. Save the authoring template.


