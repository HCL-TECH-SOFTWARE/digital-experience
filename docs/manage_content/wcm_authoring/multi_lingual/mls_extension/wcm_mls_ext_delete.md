# Deletion synchronization extension Multilingual Solution

This extension ensures that the base item and any draft localized items are deleted at the same time.

-   To use the extension, add the **MLConfiguration\_v7 \\ Delete** workflow stage to the end of your workflow.
-   If your workflow is not using expiry, then instead use the **MLConfiguration\_v7 \\ Delete – For non expiry workflows** workflow stage.

## How it works

When an item reaches the delete workflow stage the following things happen:

-   If there is a base locale copy of the current item and it is not in the delete workflow stage, then a deletion request email is sent to the base locale owner to inform them that one or more localized copies need to be removed.
-   If the base locale copy of the current item exists in the delete workflow stage, then all available draft and published localized copies are removed and a notification sent to relevant localized library owners, regardless of the workflow stage the localized copies are in.
-   The delete extension is only applied to individual workflows, not project workflows.


