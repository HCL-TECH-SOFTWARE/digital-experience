---
id: wcm_dev_workflows_creating_workflowitem_props
title: Defining the workflow
---
import useBaseUrl from '@docusaurus/useBaseUrl';



You define a workflow by selecting a set of workflow actions and defining related properties.

1.  Click **Select Workflow Stages** to select the workflow stages to comprise this workflow.

2.  Click **Select Reject Stage** to select a stage to move an item to when rejected.

3.  To require a comment to be entered when an item is approved, select **Enter Comment on Approval**.

4.  Select whether to allow multiple drafts of an item to be created. If not selected, only a single draft of an item can be created at a time. Multiple drafts are enabled by default.

    **Remember:** If the first stage of your workflow includes a publish action, no draft items can be created regardless of what is selected here.

5.  Select **Allow templated items to be saved in the first draft stage even if the item fails field validation** to allow users to save item into a first draft even if they do not pass validation. These errors need to be fixed before the item can be moved to the next workflow stage.

6.  Select **Disable workflow in projects** when you do not want the workflow to be used when an item is added to a project. If selected, any items that use this workflow have a status of draft when added to a project, but are not staged.

    1.  You must also select the workflow stage that the item is returned to when the project is published.

        **Important:** An item has a status of "published" when the project is published regardless of the workflow stage that is selected here, even if the selected workflow stage does not use a publish action or if the selected workflow stage precedes or follows a workflow stage that contains a publish action.


