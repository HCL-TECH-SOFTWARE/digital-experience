---
id: wcm_dev_workflows_creating_action_move_props
title: Defining scheduled move action properties
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Define the action properties of the scheduled move action.

1.  Select the **Date Type** to use to trigger the scheduled move.

    -   **Selected date**

        This action is run when the date and time you specified in step 2 is reached.

    -   **Live date**

        This action is run when the publish date specified in an item, plus any offset, is reached.

    -   **Expiry Date**

        This action is run when the expiry date specified in an item, plus any offset, is reached.

    -   **General dates**

        This action is run when either the general date one or two specified in an item, plus any offset, is reached.

    -   **Date entered stage**

        This action is run on the date the item entered the current stage, plus any offset, is reached.

    **Note:** If you select a date type that requires a date to be set by a user, and no date is set by a user, then the action is not run regardless of whether an offset is selected or not.

2.  If **Selected date** is selected as the date type:

    1.  Click ![date](../images/date.jpg) to select a date.

    2.  Click ![time](../images/time.jpg) to enter a time. Only the integers "0123456789" can be used when you enter times.

3.  If you select one of the other options, you can choose to use a date offset that will run the scheduled move based on a time after the selected date type. For example, if you select the date type of "Live date" and define an offset of one month, the scheduled move action is run exactly one month after the item reached the live date and time.

    1.  Click **Enable Offset**.

    2.  Enter the number of months, days, hours, or minutes to offset by.

    3.  Select either "after specified date" or "before specified date".

    4.  If you select either "Months" or "Days" you can also specify the time of day to run the action by selecting **Time to run action after offset has been reached**. For example, if you select one month plus 9 am, then the action will run at 9 am, one month after the selected date type is reached.

4.  In some circumstances, the date that is specified in the scheduled action may have already been reached when an item enters a stage. In this case, by default the action is automatically run as soon the item reaches the current stage. You can choose to not run the action if the date has already been reached by selecting **Do not run the action if date has already been reached**.


**The process of publishing and expiring items:**

When a scheduled move action also triggers a published or expired action, it does not mean that the item has become published or expired. A status of published or expired instead means that the process of publishing or expiring an item has begun. The actual time a published item appears on a website, or the time an expired item is removed from a website, also depends on:

-   how long it takes to syndicate updates to the delivery server.
-   how long it takes for the current cache to expire.

