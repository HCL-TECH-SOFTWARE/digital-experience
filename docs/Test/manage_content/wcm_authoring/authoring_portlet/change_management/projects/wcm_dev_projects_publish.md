# Project Publishing

An outline of the process of publishing a project.

-   When a project publish action is initiated, all the project items are validated one by one until all items are processed.
-   If any project item fails the validation, no attempt is made to publish any of the items in the project. The project state updates to "Publish Failed".
-   The failed item is displayed in a table with the reason for failure. The user then modifies their content in preparation for the next validation or publish attempt.
-   When all items pass the pre-publish validation, all project items are eligible to be published. The publishing process then starts, and each project item is attempted to be published one at a time.
-   Any item that fails is displayed in a table with the reason for failure. The next item will then be published.
-   If any items fail to validate or publish, the project state is "Publish Failed".
-   If all items in the project are successfully published, the project state is "Published".


