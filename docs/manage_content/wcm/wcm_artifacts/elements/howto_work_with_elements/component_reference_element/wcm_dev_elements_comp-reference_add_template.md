---
id: wcm_dev_elements_comp-reference_add_template
title: Adding a Component Reference Element to a Template
---

# Adding a Component Reference Element to a Template

You add a component reference element to an authoring template when you want the component reference to be used by a set of items that use the same authoring template.

1.  Open or create an authoring template.

2.  Click **Manage Elements**.

3.  Select **Component reference** as the element type.

4.  Enter a name. Do not use double-byte and non-ASCII characters.

5.  Enter a display title to use as the title of the element displayed indexes and forms.

6.  If you create a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays different display title for each language it is configured for. The text that is entered in the **Display Title** field is only used if an appropriate display title is not available from the selected text provider, or if the text provider is not available.

7.  Click **Add**. The component reference element is added to your form.

8.  Go to the **Default Content** tab.

9.  Go to the component reference element you added and click **Select Component** to select a component, or do nothing if you want your content creators to select a component.

10. Click the property icon to open the display properties of the element. This tab is where you define how the element is displayed on the item form.

    1.  To display the element as a required field select **Identify this as a required field**.

    2.  To hide a field on the content form from all users select **Hide field**. You must specify a default value if the field is a required field.

        **Note:** Administrators and managers can choose to display hidden fields and elements in an item by clicking **Show hidden fields**.

    3.  By default, a content creator can select any type of component. To restrict the types of components that a content creator can select, click **Select** within the **Restrict Component Types** section. Select the appropriate component types and then click **OK**. To remove a component type from the restricted list, select the checkbox next to the component type, and click **Remove**.

    4.  Type field-specific help into **Field help** text. This text is displayed with the element in the content form.

        If you create a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays different help text for each language it is configured for. The text that is entered in the **Field help** field is only used if an appropriate help text is not available from the selected text provider, or if the text provider is not available.

    5.  Select the users or groups you want to grant exclusive edit access to a field or element by clicking **Add Editors**.

    6.  Select the users or groups you want to grant exclusive view access to a field or element by clicking **Add Viewers**.

11. Save the authoring template.


