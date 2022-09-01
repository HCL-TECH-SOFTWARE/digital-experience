---
id: wcm_dev_auth-temp_reapply
title: Reapplying an updated authoring template
---




You can reapply changes that are made to an authoring template to the items that are created from the template.

Reapplying an authoring template is required when the following kinds of changes are made to an authoring template:

-   Elements are removed.
-   New elements are added and are designated as mandatory.
-   Existing elements are designated as hidden fields on the content form.

**Note:** You cannot reapply an authoring template if you are currently editing the template. Before you reapply the template, you must save your changes or switch from edit mode.

1.  Display a list of authoring templates by clicking **Authoring Template**.

2.  Click the authoring template to open the template in read-only mode.

3.  Click **Apply Authoring Template**.

4.  Select any of the following options:

    -   **Add new elements**: If the new authoring template contains elements that do not exist in the item, these elements are added to the converted item.
    -   **Remove existing elements**: If the item contains elements that do not exist in the authoring template that is being applied, those elements are removed during the conversion.
    -   **Replace elements that have changed type \(with auto data conversion\)**: Replace elements in the item with elements of the same name from the authoring template that is being applied. If the two elements are of different types, the data is automatically converted to the new type. If the conversion fails, any data that is stored in an element in the item is lost if replaced by an element of a different type.
    -   **Replace elements that have changed type \(without auto data conversion\)**: Replace elements in the item with elements of the same name from the authoring template that is being applied. Any data that is stored in an element in the item is lost if replaced by an element of a different type.
    -   **Copy hidden element values from authoring template**: Select this option to include hidden element values from the authoring template when you change or reapply an authoring template.
    -   **Enter values for mandatory fields**: This option copies default values from the authoring template to mandatory fields and elements in the item that do not already have values.
    -   **Save invalid item**: This option forces invalid content to be saved when you apply or change a template. For example, if a text field that contains 10 characters is replaced with a text field with a maximum of 8 characters, the old text is saved in the updated field. You must fix the invalid content the next time you edit the item.
    -   **Save as draft**: A draft item is created when the authoring template is applied.
5.  Click **OK**.


