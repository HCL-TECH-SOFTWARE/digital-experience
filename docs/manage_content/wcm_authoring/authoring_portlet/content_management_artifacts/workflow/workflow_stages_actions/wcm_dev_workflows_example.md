# Workflow example

This example describes the steps that are required to create a four stage Workflow.

## Actions

The actions that are required for this workflow are:

|Action|Description|
|------|-----------|
|**Publish**|Makes a document visible as a published document on the website.|
|**Scheduled Move**|This scheduled move action detects when a document passes its expire date and moves the document into the Expired stage.|
|**Expire**|Stops a document from being visible on the website.|
|**Email**|Sends emails to selected users. In this example, you select "Email Stage Approvers".|

## Stages

The following stages make up the Workflow:

|Workflow Stage|Actions on Entering|Description|
|--------------|-------------------|-----------|
|Stage 1, Draft| |All content begins the Workflow in this Stage. All content authors are authorized to use the Draft stage.|
|Stage 2, Review|**Email**|Content requires a review stage before it is published. A small group of people are authorized to approve content in this stage and move it to the Publish stage. The email action sends an email to each approver.|
|Stage 3, Publish|**Publish****Scheduled Move**|This is the stage where content from the workflow is published. The **Publish** action is triggered when the **Publish Date** is reached. At this point, the content is visible on the website. The **Scheduled Move** action is triggered when the **Expire Date** is reached.|
|Stage 4, Expired|**Expire**|The **Scheduled Move** action moves the content into this stage, where the **Expire** action stops the document from being visible on the website.|

## Progressing through the workflow

|Process|Stage|Status|
|-------|:---:|:----:|
|An item is first created and saved:|Stage 1, Draft|**Draft**|
|When the Item Creator is ready, they move it to the next stage.|Stage 2, Review|**Draft**|
|An Approver would then access the document and review it. If Approved, the item would be moved to the next stage.The Status is **Draft** pending **Published**. This is because the time specified in the **Publish Date** field of the item has not yet been reached.|Stage 3, Publish|**Draft** pending **Published**|
|Once the **Publish Date** is reached, the item's Status changes to **Published**. The item is still in **Stage 3, Publish**, but the Status has changed.|Stage 3, Publish|**Published**|
|Once the **Expire Date** is reached, the document is moved to the final stage.As both the **Scheduled Move** and **Expire** actions are using the **Expired** date in this example, the item's Status immediately changes to **Expired**. <br>If the **Scheduled Moved** Action used a **General Date** prior to the **Expire Date**, then the item's Status would remain as **Published** pending **Expire** until the **Expire Date** was reached even though it had entered **Stage 4, Expire**.|Stage 4, Expire|**Expired**|

**Using workflows and access to workflow items:**

Users do not require access to a workflow's actions or stages to participate in a workflow. Actions are performed using system access and are not determined by the access of the user who approved/rejected the item.


