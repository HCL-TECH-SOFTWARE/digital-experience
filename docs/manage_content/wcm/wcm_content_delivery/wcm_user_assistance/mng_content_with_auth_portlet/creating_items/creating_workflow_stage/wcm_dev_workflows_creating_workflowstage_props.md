---
id: wcm_dev_workflows_creating_workflowstage_props
title: Defining workflow stage properties
---




A workflow stage is composed of a set of selected workflow actions.

1.  To select a workflow action to run on entering or exiting a workflow stage, click **Select Actions**.

    1.  To add workflow actions, click **Add**.

        -   Select the required workflow actions from the index and then click **OK**.
        -   Email actions only can be selected to run on exiting a workflow stage.

    2.  To remove workflow actions, select the workflow actions that you want to remove and then click **Remove**.

    3.  Use the arrows to change the order in which the selected workflow actions are run.

        !!! note
            In most cases, actions are run when a stage is entered. For example, you add a scheduled move action to run on entering a stage so that it is enabled as soon as an item enters that stage. However, if you set a scheduled move action to run on leaving a stage, it will never run. The most common type of actions to run on leaving a stage are email actions, when you want to notify users that an item leaves a workflow stage, or custom workflow actions that are designed to run a task when an item leaves a stage.

        !!! note
            Some actions need to be run in a specific order. For example:

        -   A scheduled move action must always be the final action in a workflow stage, because any actions scheduled after a scheduled move action will not be run.
        -   You cannot run a version action before a publish action because you cannot save versions of draft items.
        -   If using a custom action, you may want to run the custom action before running an email action so that the draft content item is in a state ready to be reviewed by an approver.

2.  Select whether **Joint approval** is enabled then select the users or groups that need to be assigned Joint Approval.

3.  Select whether to require a comment to be entered when approving a workflow stage.

4.  Select **Enable Previous Stage Button For Approvers** to allow approvers to move items back to the previous stage. Managers and administrators always have access to this button.

5.  To select which users have access to an item in the current workflow stage:

    1.  Click either:

        -   Grant User Access.
        -   Grant Contributor Access.
        -   Grant Editor Access.
        -   Grant Manager Access.
        -   Grant Approve Access.
        
    2.  To add users or groups, click **Add**.

        -   Select either Users or Groups.
        -   Enter text to search for in the Search field and then click Search. \(Leave the Search field blank to display all users or groups.\)
        -   Select the required users or groups and then click **OK**.

    3.  You can also choose to automatically inherit access based on the library access assigned to each user and group by selecting "Inheritance". This option is selected by default.

    4.  To remove users or groups, select the users or groups you would like to remove and then click **Remove**.

    5.  Then click **OK**.


