# Setting the portal entry page 

Use the Global Settings portlet to specify the page that a user sees when the user logs in to HCL Digital Experience.

**Note:** The Global Settings portlet does not work in portal cluster configurations.

1.  Click the **Administration menu** icon. Then, click **Portal Settings** \> **Global Settings**.

2.  Make a selection from the field **When a user logs in, the first page displayed**:

    -   **Will always be the user's default page \(portal session will not resume\)**

        Choose this option if you want users to always return to the default page after login.

    -   **Will be the page the user most recently visited \(portal session will resume\)**

        Choose this option if you want users to return to the page from their last visit. This option is helpful when users lose their portal session in the middle of a task and need to login to return.

    -   **Will be dependent upon the choice the user makes at login**

        Choose this option to let users determine the initial view by their choice after login.

3.  Click **Save**.


If you have a portal cluster configuration, use the WebSphere® Integrated Solutions Console to set the properties `persistent.session.level` and `persistent.session.option` in the portal configuration service. For more information, refer to the topics about *Configuring user session persistence*, *Portal configuration services, and* *Setting service configuration properties*.

**Parent topic:**[Configuring portal behavior ](../admin-system/adptlcfg.md)

**Parent topic:**[Portal administration ](../practitioner_studio/administration.md)

**Related information**  


[Setting service configuration properties ](../admin-system/adsetcfg.md)

[Configuring user session persistence ](../admin-system/adcfgpss.md)

