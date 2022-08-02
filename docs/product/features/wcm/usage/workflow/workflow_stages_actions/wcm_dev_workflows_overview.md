# Workflow stages and actions

You use workflows to control the access to, verification and eventual approval of items. Only if an item is approved at all stages up to a published stage can it be viewed on your website.

A workflow must have at least one stage, but typically has more, and it always flows in a linear pattern. You can use a workflow to:

-   Review the accuracy of content.
-   Review content for any legal implications.
-   Review content to ensure that it meets accessibility guidelines.
-   Ensure that no malicious code such as cross scripting attacks are added to content.

A reject stage can be specified, which is a stage that is run when a document is declined, before the document is moved it to the first stage of the workflow. If the item is rejected at any stage, someone with editor access needs to correct or amend the item and resubmit it into the selected workflow \(for approval\). All items that are rejected \(regardless of the stage they are at in the approval process\) are sent back to the first \(creation\) stage of the workflow.

You can also specify that a comment must be entered on every move a document makes in the workflow or only on specific stages. This comment is added to the document's history section.

-   **[Workflow stages](../wcm/wcm_dev_workflows_stages.md)**  
Workflow stages are the building blocks of a workflow. You need to create at least one stage before you can create a workflow.
-   **[Workflow actions](../wcm/wcm_dev_workflows_actions.md)**  
Each workflow stage contains sets of actions; actions that are run when an item enters the stage, and actions run when an item exits the stage. The exit actions are restricted to non-scheduled actions, since they must be run immediately.
-   **[Access to items during a workflow](../wcm/wcm_managing_workflow_using.md)**  
If an item is participating in a workflow, the creator is given manager access to the item only in the first workflow stage. As the item progresses through a workflow, the item access is determined by the combined workflow and system defined access levels.
-   **[Joint approval](../wcm/wcm_managing_workflow_joint-approval.md)**  
Joint approval is used in cases where approval from multiple users is required before an item is moved to the next stage.
-   **[Workflow example](../wcm/wcm_dev_workflows_example.md)**  
This example describes the steps that are required to create a four stage Workflow.

**Parent topic:**[Workflow and change management](../wcm/wcm_cms_change.md)

