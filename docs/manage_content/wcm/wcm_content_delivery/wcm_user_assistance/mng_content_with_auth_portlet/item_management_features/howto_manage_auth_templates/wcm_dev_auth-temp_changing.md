---
id: wcm_dev_auth-temp_changing
title: Changing the authoring template for an item
---




You can change the authoring template that is associated with an item by applying another authoring template to the item. To accommodate differences between the templates, you can add or remove elements and specify how elements are processed.

1.  Open the library explorer.

2.  Select the items for which you want to change the authoring template.

3.  Click **More Actions** \> **Apply Template**.

4.  Select the authoring template that you would like to associate with the item.

5.  Select any of the following options:

    -   **Add new elements**: If the new authoring template contains elements that do not exist in the item, these elements are added to the converted item.
    -   **Remove existing elements**: If the item contains elements that do not exist in the authoring template that is being applied, those elements are removed during the conversion.
    -   **Replace elements that have changed type \(with auto data conversion\)**: Replace elements in the item with elements of the same name from the authoring template that is being applied. If the two elements are of different types, the data is automatically converted to the new type. If the conversion fails, any data that is stored in an element in the item is lost if replaced by an element of a different type.
    -   **Replace elements that have changed type \(without auto data conversion\)**: Replace elements in the item with elements of the same name from the authoring template that is being applied. Any data that is stored in an element in the item is lost if replaced by an element of a different type.
    -   **Copy hidden element values from authoring template**: Select this option to include hidden element values from the authoring template when you change or reapply an authoring template.
    -   **Enter values for mandatory fields**: This option copies default values from the authoring template to mandatory fields and elements in the item that do not already have values.
    -   **Save invalid item**: This option forces invalid content to be saved when you apply or change a template. For example, if a text field that contains 10 characters is replaced with a text field with a maximum of 8 characters, the old text is saved in the updated field. You must fix the invalid content the next time you edit the item.
    -   **Save as draft**: A draft item is created when the authoring template is applied.
6.  Click **OK**.


