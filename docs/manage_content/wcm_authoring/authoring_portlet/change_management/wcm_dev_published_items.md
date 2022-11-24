---
id: wcm_dev_published_items
title: Manage Published Items
---

# How to manage published items


Items are not visible on a website until they are published. When published, an item can be expired, or returned to a draft state.

## Published items that don't use a workflow

To create a new draft item:

-   open a non-workflowed published item in edit mode and click **Save as Draft**. This option creates a draft copy of the published item without removing the published item from the live site.
-   open a non-workflowed published item and click **Change to Draft**. This option changes the state of the item from "published" to "draft" and the item is no longer visible on the live site.

## Published items that use a workflow

You use the following functions to work with items during a workflow.

|Actions|Function|Item Access|Role access to library resources|
|-------|--------|-----------|--------------------------------|
|**Approve**|When joint approval is set, use this button is used to approve an item in the **All Items** and **My Items** views.|Reviewer or administrator.|Contributor access or higher to the item type.|
|**Create draft**|Creates a draft copy of a published item. The published item is locked on the rendered site, while a copy of the item is sent through a workflow. When the draft item is approved for publishing, it replaces the published item.|Manager access or higher, or Draft Creator access.|Editor access or higher to the item type.|
|**Next Stage**|Used to approve an item and send it to the next stage in a workflow.|Reviewer access.|Contributor access or higher to the item type.|
|**Previous Stage**|The previous stage button returns an item to the stage previous to the current stage. -   If the current stage contains a publish action, the item status reverts to draft when returned to the previous stage. The published version is removed and is no longer visible on the live site. <br>-   When an item is moved to the previous stage, the entry workflow actions on the previous stage are run, but the exit workflow actions on the current stage are not. <br> **Note:** The previous stage button is not enabled: <br> -   on published items that have children. <br>
-   on published items where a draft exists. |Manager access or higher, or on workflow stages that are configured to enable Reviewers access to the previous stage button.|Contributor access or higher to the item type.|
|**Process now**|Manually processes an item if its status is pending. All actions in the stage are processed.|Administrator access|Not required.|
|**Restart workflow**|Sends an item back to the first stage of a Workflow without activating the reject stage. The item no longer appears as published and is removed from the rendered site. <br> **Note:** When you restart a workflow, any actions set to run on entering the first stage are not run. <br> **Note:** When you restart a workflow with multiple stages, a draft item is created in the first stage. Additionally, the item also appears in the deleted items view so that the last published version of the item can be restored. When the draft is republished, the version in the deleted items view is removed. <br> **Note:** Items with references cannot be restarted in the workflow. References include link components, link elements, and embedded links in rich text or HTML fields. You need to remove these references before you can restart the workflow of the item. Use the view references dialog to see whether references exist. This restriction is to prevent broken links in your site.|Manager access or higher, and Draft Creator access.|Manager access or higher to the library resource type.|

