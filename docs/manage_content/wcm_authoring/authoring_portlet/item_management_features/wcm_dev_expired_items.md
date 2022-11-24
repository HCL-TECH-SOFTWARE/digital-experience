---
id: wcm_dev_expired_items
title: How to manage expired items
---

# How to manage expired items


Expired items are items that were published but then removed from the live website. Only items that use a workflow can be expired.

You use the following functions to work with expired items within a workflow.

|Actions|Function|Item Access|Role access to library resources|
|-------|--------|-----------|--------------------------------|
|**Approve**|When joint approval is set, this function is used to approve an item in the **All Items** and **My Items** views.|Reviewer or administrator.|Contributor access or higher to the item type.|
|**Create draft**|Creates a draft copy of an expired item.|Manager access or higher, or Draft Creator access.|Editor access or higher to the item type.|
|**Next Stage**|Used to approve an item and send it to the next stage in a workflow. For expired items, extra workflow stages can include further actions that will be run after an item is expired.|Reviewer access.|Contributor access or higher to the item type.|
|**Previous Stage**|The previous stage function returns an item to the stage previous to the current stage. -   If the current stage contains an expire action, the item status reverts to the published state when returned to the previous stage and is visible on the live site. <br>-   When an item is moved to the previous stage, the entry workflow actions on the previous stage are run, but the exit workflow actions on the current stage are not.|Manager access or higher, or on workflow stages that are configured to enable Reviewers access to the previous stage function.|Contributor access or higher to the item type.|
|**Process now**|Manually expires an item if its status is pending expired. All actions in the stage are processed.|Administrator access|Not required.|
|**Restart workflow**|Sends an item back to the first stage of a Workflow without activating the reject stage. The item no longer appears as published and is removed from the rendered site. **Note:** When you restart a workflow, any actions set to run on entering the first stage are not run. <br> **Note:** When you restart a workflow with multiple stages, a draft item is created in the first stage. In addition, the item also appears in the deleted items view so that the last published version of the item can be restored. When the draft is republished, the version in the deleted items view is removed. <br> **Note:** Items with references cannot be restarted in the workflow. References include link components, link elements, and embedded links in rich text or HTML fields. You need to remove these references before you can restart the workflow of the item. Use the view references dialog to see whether references exist. This restriction is to prevent broken links in your site.|Manager access or higher, or Reviewer access.|Editor access or higher to the item type.|

