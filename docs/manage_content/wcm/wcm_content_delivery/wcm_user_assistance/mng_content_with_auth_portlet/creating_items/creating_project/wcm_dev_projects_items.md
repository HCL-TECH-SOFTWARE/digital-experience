---
id: wcm_dev_projects_items
title: Manage items in a project
---




You can both create new items or add existing items to a project and then edit them as required.

To add an item to a project, you can either:

-   Open an item in read mode and click **Add to project**.
-   Open an item in edit mode and click **Add to project** and then save the item. If the item is closed before saving, the item is not added to the project.
-   Select items in a view and click **More actions \> Add to project**.
-   Open a project and click **Add to project** and then select an item to add to the project.
-   Open a project and click **New** to create a draft item in the project.

**Note:** The maximum number of items that can be used in a single project is 500.

**Note:** To add an item to a project, you must have editor access to that item.

When you add an item to a project:

-   You can also select items that are referenced by the item you are adding to the project.
-   Non-workflowed item types are saved as a draft.
-   Workflowed items are added to a project in the first workflow stage of their workflow.

When added to a project, you work with your items in the same way as any other item by selecting an item in the project and clicking **Edit**:

-   Non-workflowed item types are saved as drafts until you are ready to publish them by clicking **Approve**.
-   Workflowed items are processed through a full workflow cycle until reaching a pending state.
-   Draft items in a project are displayed alongside other items in your item views, but are displayed with a status of draft. If you create a draft of a previously published item, both the draft and published versions of your item appear in your item views.
-   When you use selection dialogs, draft items from your current project appear alongside currently published items so you can select and link to both current items and draft project items.

**Workflow item types:**

Workflows, workflow stages and workflow actions cannot be added to projects.

## Previewing items in a project

While you are working on a project, you can preview the draft items in the project as if they were published together on the live site.

**Note:** Care must be taken when you preview content by using the servlet. Clicking a link while you preview items in a project takes you out of the project scope itself, and uses the scope of the current site instead.

## Deleting items in a project

-   **Remove From Project**

    When you select an item in a project and click **Remove From Project**, the draft item is removed from the project but is still visible in the **Library Explorer**.

-   **Delete**

    When you select an item in a project and click **Delete**, the draft is removed from the project and also deleted.

-   **Mark for deletion**

    When an item is marked for deletion, the item is deleted when the project is published.

    -   You can mark items for deletion in a project by:
        1.  Adding the item to a project
        2.  Opening a draft project item in read mode and clicking **Mark for deletion**.
    -   When an item is marked for deletion, other buttons in the edit view of the item are disabled. To cancel a deletion, click **Cancel deletion**.
    -   When an item is marked for deletion, its workflow status is displayed as **Delete Pending**.
    -   When you use **Save As** and **Copy** operations on an item that is marked for deletion, the newly saved item is in the first workflow stage.
    -   When you preview a project, items marked for deletion are not displayed in the previewed website.
    -   If you delete an item that was originally created in the project it is immediately deleted and is not displayed as **Delete Pending**.

## Disabling a workflow in a project

A workflow can be configured so that it is disabled when an item that uses that workflow is added to a project.

-   Any items that use the disabled workflow have a status of draft when added to a project, but no longer require to pass through a workflow before the item is published.
-   The workflow stage the item is returned to when the project is published is also defined in the workflow.
-   Any actions set to run on entering the stage that the item is returned to are not run.
-   An item has a status of "published" when the project is published regardless of the workflow stage it is returned to, even if the workflow stage does not use a publish action or if it precedes or follows a workflow stage that contains a publish action.

## Publishing Methods

Select the default publishing method to be used by projects that are created by using this project template:

-   **Date**

    When **Date** is selected, all items are published as soon as all the items in the project reach a state of "pending" and the publish date that is selected in the project is reached. You can also click **Publish** in the project form before the date is reached, but only if all items in the project reach a state of "pending".

-   **Manual**

    When **Manual** is selected all items remain in a state of "pending" until the project is manually published by clicking **Publish** in the project form. The **Publish** button is not activated until all items in the project reach a state of "pending". Only users with editor access or higher to a project can publish a project.

-   **Automatic**

    When **Automatic** is selected all items are published as soon as all the items in the project reach a state of "pending".


