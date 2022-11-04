# Update notification extension Multilingual Solution

This extension uses the settings in the workflow synchronization section of the multilingual configuration file to automate the creation of localized items.

To use the notification extension:

1.  Add either the **MLConfiguration\_v7 \\ Localize** or **MLConfiguration\_v7 \\ Regionalize** workflow stage to your workflow after the approval stage, which is the first stage after the draft stage.
2.  If any of your localized library sets do not have a base locale:
    1.  Ensure that **storeOriginalWorkflow** is set to **true** within the **General Settings** of the associated multilingual configuration file.
    2.  For each workflow used by translated content, create another workflow that is named **WorkflowName\_Translation**, where WorkflowName is the name of the original workflow. This workflow must contain a draft stage, approval stage, and the **ML Configuration\_v7 \\ Switch Workflow** stage.
        -   If legacy synchronized publishing is to be used, then use the **ML Configuration\_v7 \\ Pending Published – No Base Locale** stage instead of **ML Configuration\_v7 \\ Switch Workflow**.
        -   If legacy synchronized publishing is not being used, then the **ML Configuration\_v7 \\ Switch Workflow** stage must also be added to the base workflow after the approval stage.
3.  If any of your localized library sets are going to use localized authoring templates, ensure that the **supportLocalizedAuthoringTemplates** property in the **Localize** or **Regionalize** workflow synchronization settings of your multilingual configuration file is set to true.
4.  This step is optional. For portal sites, you can choose to have portal page mappings added automatically as new translations are created. This option requires the document that is being copied or linked from to have an existing portal page mapping:
    1.  Open a multilingual configuration file from the **MLConfiguration\_v7** library.
    2.  Add updateContentMappings=true to the **General Settings**.

## How it works

When an item reaches the **Localize** or **Regionalize** workflow stage:

-   If the base locale item is in the current stage or a later stage, then each configured library that does not already have a draft item is processed according to the **Localize** or **Regionalize** workflow synchronization settings of your multilingual configuration file and a notification is sent to the all relevant locale owners.
    -   If the library that is being processed contains an existing published or expired item, then the workflow synchronization settings are ignored and a draft copy of the existing item is created.
    -   If the library that is being processed does not contain an existing published or expired item, then it is either ignored, or a new draft or link is created depending on the configuration that is specified in the multilingual configuration file.
-   If one or more localized copies of the current item are found that do not have a corresponding draft base locale item in any stage of the workflow, then all copies are moved to the next workflow stage and a notification is sent to the base locale owner to inform them that changes have been made to localized documents without an associated change to the base locale item.
-   If the base locale item is in an earlier stage of the workflow, then nothing happens.

!!! note
    If no base locale library is configured, then the current item is deemed to the base item for the current processing cycle only.

!!! note
    If the base item is renamed or moved, then all localized drafts and regionalized drafts are moved or renamed


<!--
???+ info "Related information:"
    - [Rolling out a second locale](../ctc/ctc_deploy_locale_second.md) -->

