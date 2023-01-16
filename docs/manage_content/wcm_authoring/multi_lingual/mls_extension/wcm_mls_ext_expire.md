# Expiry synchronization extension Multilingual Solution

This extension ensures that the base item and any published localized items are expired at the same time.

To use the extension, add the **MLConfiguration\_v7 \\ Pending Expire** workflow stage to your workflow before the expire stage.

## How it works

When an item reaches the pending expire state the following things happen:

-   If any published localized copies of the current item are not in the pending expire state, nothing happens.
-   If all published localized copies of the current item are in the pending expire state, then the current item and its copies are moved to the next workflow stage and a notification are sent to the relevant locale owners.
-   The expiry extension is only applied to individual workflows, not project workflows.


