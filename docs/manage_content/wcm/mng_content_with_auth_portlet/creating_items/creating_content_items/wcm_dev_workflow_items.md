---
id: wcm_dev_workflow_items
title: Selecting a workflow
---




The workflow section is only visible on item types that are enabled to use a workflow. Only content items, and site areas not based on the default site area template, are enabled by default.

1.  You can choose whether to enable workflows on items that are created by using this authoring template by selecting **Enable workflow for items created with this authoring template**.

2.  To select a workflow, click **Select Workflow**.

    1.  Select a workflow and then click **OK**.

3.  Enter dates and times to run any date or time-specific workflow actions.

    1.  Click date icon to select a date.

    2.  Click time icon to select a time.

    -   **Publish Date**

        Select the date and time to run a publish action in a workflow stage.

        !!! note
            This parameter cannot be set on the content template. You can select a publish date only on the content item itself.

    -   **Expiry Date**

        Select the date and time to run an expire action in a workflow.

    -   **General dates**

        These dates are run when custom actions are used to run scheduled tasks not based on published or expired dates.

    !!! note
        Selecting a publish or expire date does not cause the item to be published or expired. The selected workflow must include a publish or expire action. The publish and expire dates and times do not represent the time that the item is published or expired. They represent the time the publish or expire action can be executed which can occur before the item is moved to either the published or expired stage of the workflow cycle.

    If no date or time is selected, then it defaults to the date the item was created which allows the publish and expire actions to be executed immediately when the item is moved to the published or expired stage of the workflow cycle.

    The date and time that is selected here are based on the timezone of the server you are accessing, not the timezone of the computer you are using.

4.  To select extra users to those users already specified as having access to the rendered item, click **Select Additional Viewers**.

    1.  To add users or groups, click **Add**.

        -   Select either Users or Groups.
        -   Enter text to search for in the Search field and then click **Search**. \(Leave the Search field blank to display all users or groups.\)
        -   Select the required users or groups and then click **OK**.

    2.  To remove users or groups, select the users or groups you would like to remove and then click **Remove**.


