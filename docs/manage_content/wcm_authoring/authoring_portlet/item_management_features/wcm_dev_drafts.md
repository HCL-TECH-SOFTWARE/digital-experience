---
id: wcm_dev_drafts
title: How to work with draft items
---

# How to work with draft items


Creating a draft of an item allows users to work on changes to that item without changing the published version of the item. Draft items can either be stand-alone items, or form part of a workflow. When the changes are completed, you can choose to either publish the item, or discard the changes by canceling the draft. You can create multiple drafts of a single item.

!!! note
    Draft items are only displayed in the Authoring Portlet and are not rendered within the published website.

## How to work with draft items without a workflow

You can directly create a draft of any non-workflowed items.

-   **Creating a draft item**

    To create a new draft item:

    -   open a non-workflowed published item in edit mode and click **Save as Draft**. This tool creates a draft copy of the published item without removing the published item from the live site.
    -   open a non-workflowed published item in read mode and click **Create Draft**. This tool creates a draft copy of the published item without removing the published item from the live site.
    -   open a non-workflowed published item and click **Change to Draft**. This tool changes the state of the item from "published" to "draft" and the item is no longer be visible on the live site. You cannot change an item to draft if it is being referenced by any other items.

-   **Saving a draft item**

    When the draft has is created:

    -   to save the draft item, click **Save**, **Save and Close**, or **Save and Read**.
    -   to publish the draft item, click **Save and publish**.
    When saved, your draft item is displayed along side other items in your item views but is displayed with a status of draft. If you create a draft of a previously published item, both the draft and published versions of your item appear in your item views. You can edit and save drafts multiple times before your changes are published.


-   **Publishing a draft item**

    Any changes that are made to a draft item do not appear in the live site until you publish the draft item. When your draft is ready to publish, you can either:

    -   select an item in a view and click **Publish item**.
    -   open an item in read-mode and click **Publish item**.
    -   open an item in edit-mode and click **Save and publish**.

-   **Canceling a draft**

    Canceling a draft is essentially the same as deleting a draft as all the changes made to the item are discarded. To cancel a draft, open a draft item and click **Cancel draft**. You need editor access or higher to cancel a draft of items without a workflow.


## How to work draft items in a workflow

Within a workflow, items have a status of draft until they enter a workflow stage where a publish action is run. Draft items in a workflow are displayed along side other items in your item views but are displayed with a status of draft. If you create a draft of a previously published item, both the draft and published versions of your item appear in your item views. You can edit and save drafts multiple times before you submit your draft to the next stage in the workflow.

You use the following features to work with items during a workflow.

|Actions|Function|Item Access|Role access to library resources|
|-------|--------|-----------|--------------------------------|
|**Approve**|When joint approval is set, this tool is used to approve an item in the **All Items** and **My Items** views.|Reviewer or administrator.|Contributor access or higher to the item type.|
|**Cancel draft**|This tool removes a draft item from a workflow altogether. This tool is displayed only after an item is published and a new draft is created.|Manager access or higher.|Contributor access or higher to the item type.|
|**Reject**|Used when an item is rejected during a workflow. Runs any actions that are defined in the reject stage, and then sends the item back to the first stage of a workflow.|Reviewer access.|Contributor access or higher to the item type.|
|**Next Stage > Expire > Publish > Submit for review**|Used to approve an item and send it to the next stage in a workflow.|Reviewer access.|Contributor access or higher to the item type.|
|**Previous Stage > Withdraw from review**
|These actions return an item to the stage previous to the current stage, or remove the item. When an item is moved to the previous stage, the entry workflow actions on the previous stage are run, but the exit workflow actions on the current stage are not.|Manager access or higher.Reviewers access on workflow stages where Reviewers are granted access to the previous stage tool.
|Contributor access or higher to the item type.|
|**Process now**|Manually processes an item if its status is pending. All actions in the stage are processed.|Administrator access|Not required.|

**Disabling multiple drafts:**

When you create a workflow, you can choose to disable the creation of multiple drafts for any item with that workflow. This option allows users to assign a workflow to items where you want to manage one change at a time only.

## How to work with draft items in a project

You use draft items within a project in the same way you use drafts outside of a project, regardless of whether the draft item is participating in a workflow, or not participating in a workflow. The only difference is that when the draft is ready to be published, it remains in a pending state until all items in the project are ready to be published. Draft items in a project are displayed alongside other items in your item views, but are displayed with a status of draft. If you create a draft of a previously published item, both the draft and published versions of your item appear in your item views.

## Managing drafts

-   If you view a published item with only one draft item, you can view the draft item by clicking **Go to draft**.
-   When you view a draft item, you can open the published version of an item by clicking **Go to published**.
-   If a published item has more than one draft, the **Manage Drafts** tool is displayed on both the published and draft versions of an item. You click **Manage Drafts** to view a list of drafts for the current item. All drafts are displayed, but you can read, edit and cancel drafts only that you have sufficient access to.

