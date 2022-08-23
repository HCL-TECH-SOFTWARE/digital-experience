# Lifecycle and synchronization Multilingual Solution

Workflow is used to keep the base site and localized sites synchronized. The creation, modification, publishing, expiry, deletion, and moving of site areas and content can be synchronized across locales by using a workflow.

## Creating, updating, and moving translated content and components

To keep content and components synchronized between locales, a special workflow stage that runs after the approval stage is created in the base library. This stage is used for the updating, moving, and creation of content. If the current content item has already been published, the action must be an update or move action. Translated content is treated as new content if no published version exists.

-   **Creating**

    When new content and components are created in the base library, one of the following actions is run against each configured localized library and a notification sent to localized content owners:

    -   The item is copied into the library for later translation.
    -   The item is linked into the library if no translation is required. This applies to content items only.
    -   Nothing happens and the library is ignored.
-   **Updating**

    When content or components are updated in the base library, draft copies of existing published localized items are created and a notification sent to localized content owners.

-   **Moving**

    When you move content in the base library, rather than move the published content, a draft copy of the published content must be created first and then the draft moved to the correct location.

    When the draft content is detected as moved within the base library, draft copies of the existing published localized content must be created and moved to the corresponding location in the localized library. A notification is then be sent to localized content owners.


## Publishing synchronization

-   To ensure that the base item and localized items are published at the same time, project integration can be enabled for the Update Notification workflow synchronization extension.
-   When project integration is enabled, then all associated draft localized documents are added to a temporary project that is automatically published when all documents are approved.
-   When the project is published, a notification is sent to all localized content owners. When the project is successfully published, the project is deleted.

## Expiry synchronization

-   To ensure that the base item and localized items are expired at the same time, another special workflow stage is required. This workflow stage is run after the publish workflow stage.
-   If every published localized copy is in the publish workflow stage, and all their expiry dates are in the past, then items are moved to the next stage that contains the expire action.
-   A notification is sent to all localized content owners when documents leave this stage.

## Deletion synchronization

-   If a base item is deleted the localized content must also be deleted. To handle this task, another special workflow stage is required. This stage is placed after the expire stage if content expiration is used, or after the publish stage if content expiration is not used.
-   To delete an item, you need to push the item to the final workflow stage. In most systems, only an administrator has access to do this. When processing documents in this stage, if the base item is detected, or no base item exists, then all draft, published and expired localized copies are removed and a notification sent to all localized content owners to inform them of the deletion.
-   If a localized item is detected and the base item is in another stage, then a deletion request notification is sent to the localized content owners to inform them that various localized copies are ready to be deleted.


