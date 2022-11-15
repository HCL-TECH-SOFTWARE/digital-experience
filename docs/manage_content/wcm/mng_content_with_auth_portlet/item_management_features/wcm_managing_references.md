# Managing references

When you delete items that are referenced by other items, you need to resolve any references that are broken by deleting the item. A dialog opens listing the items that cannot be deleted.

-   Select an item from the list and click **Edit References**.

    -   Select an item and click **Replace Reference** to replace the item you are currently deleting with a different item. For example, if you are deleting a text component that is referenced within a presentation template, you can replace the reference to the text component you are deleting with a different component.
    -   Select an item and click **Clear Reference** to remove the reference to the item you are deleting. For example, if you are deleting a presentation template that is mapped to an authoring template, you can choose to clear the reference to the authoring template.

!!!note
    -   There are occasions where only one option is available. For example, when it is only possible to replace a reference, but not clear a reference, such as when you are deleting a workflow.
    -   Other items might not be able to be deleted at all.
    -   References to authoring templates can be changed only by using the **Apply Template** feature on the item itself.

