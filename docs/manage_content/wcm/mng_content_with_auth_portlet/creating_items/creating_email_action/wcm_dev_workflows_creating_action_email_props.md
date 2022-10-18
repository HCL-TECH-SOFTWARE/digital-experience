---
id: wcm_dev_workflows_creating_action_email_props
title: Creating an email action
---
# Creating an email action

Define the action properties of the email action.

1.  Select the types of users to send emails to. You can select:

    -   Users who are assigned approver access in the workflow stage the email action is run on
    -   The authors and owners of the workflowed item
    -   The authors and owners of items that reference the workflowed item
2.  Click **Select Other Recipients** to select extra email recipients.

    1.  To add users or groups, click **Add**.

        -   Select either Users or Groups.
        -   Enter text to search for in the Search field and then click Search. (Leave the Search field blank to display all users or groups.)
        -   Select the required users or groups and then click **OK**.
    2.  To remove users or groups, select the users or groups you would like to remove and then click **Remove**.

3.  Enter text to include in the email in addition to the automatically generated message.

    !!! note
        -   The language of the automatically generated message is determined by the language set in the WebSphere® Application Server administration console. To change the language, go to **Resources > Resource environment > Resource environment providers > WP LocalizerService > Custom properties** and change the `locale.default.language` property to the appropriate language code.
        -   To modify the URL displayed in the email message, modify the `WCM WCMConfigService` service and specify the following property:
            -   Property name: `wcm.authoringui.url`
            -   Value: `http://${WCM_HOST}:${WCM_PORT}/${WCM_WPS_CONTEXT_ROOT}/${WCM_WPS_PERSONALIZED_HOME}/wcmAuthoring`

4.  Select the **Date Type** to use to trigger the email action.

    -   **Selected date**

        This action is run when the date and time you specify in step 5 is reached.

    -   **Live date**

        This action is run when the publish date specified in an item, plus any offset, is reached.

    -   **Expiry Date**

        This action is run when the expiry date specified in an item, plus any offset, is reached.

    -   **General dates**

        This action is run when either the general date one or two specified in an item, plus any offset, is reached.

    -   **Date entered stage**

        This action is run on the date the item entered the current stage, plus any offset, is reached.

    !!!note
        If you select a date type that requires a date to be set by a user, and no date has been set by a user, then the action is not run regardless of whether an offset has been selected or not.

5.  If **Selected date** is selected as the date type:

    1.  Click date icon to select a date.

    2.  Click time icon to enter a time. Only the integers "0123456789" can be used when entering times.

6.  If you select one of the other options, you can choose to use a date offset that will run the email action based on a time after the selected date type. For example, if you select the date type of "Live date" and define an offset of one month, the email action is run exactly one month after the item reached the live date and time.

    1.  Click **Enable Offset**.

    2.  Enter the number of months, days, hours, or minutes to offset by.

    3.  Select either "after specified date" or "before specified date".

    4.  If you select either "Months" or "Days" you can also specify the time of day to run the action by selecting **Time to run action after offset has been reached**. For example, if you select one month plus 9 am, then the action will run at 9 am, one month after the selected date type is reached.

7.  In some circumstances, the date that is specified in the scheduled action may have already been reached when an item enters a stage. In this case, by default the action is automatically run as soon the item reaches the current stage. You can choose to not run the action if the date has already been reached by selecting **Do not run the action if date has already been reached**.


