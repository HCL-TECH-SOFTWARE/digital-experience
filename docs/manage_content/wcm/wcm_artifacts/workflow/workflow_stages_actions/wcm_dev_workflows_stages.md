# Workflow stages

Workflow stages are the building blocks of a workflow. You need to create at least one stage before you can create a workflow.

## Workflow stages

Stages determine:

-   What actions to run when an item enters or exits a workflow stage
-   The access levels of users or groups within that stage.

In most cases, actions are run when an item enters a stage. For example, you add a scheduled move action to run on entering a stage so that it is enabled as soon as an item enters that stage. However, if you set a scheduled move action to run on leaving a stage, it is never run. The most common type of actions to run on leaving a stage are email actions, when you want to notify users that an item has exited a workflow stage.

**Note:** Some actions need to be run in a specific order. For example:

-   A scheduled move action must always be the final action in a workflow stage, because any actions scheduled after a scheduled move action is not run.
-   You cannot run a version action before a publish action because you cannot save versions of draft items.
-   If you use a custom action, you can run the custom action before the email action is run, so that the draft content item is in a state ready to be reviewed by an approver.

**Note:** The access settings that are defined in the properties section of the workflow stage form are the security settings that are applied to items during a workflow, not the Security section of a workflow stage. The Security section defines who has access to the workflow stage item itself.

## Reject stages

In addition to the workflow stages that make up a workflow, workflow stages are also used as part of rejecting an item. When an item is rejected, a reject stage can be triggered that runs predefined actions. When the actions are run, the item is returned to the first stage of the workflow.


