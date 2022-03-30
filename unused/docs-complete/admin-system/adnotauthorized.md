# Configuring how to handle portlets that a user is not authorized to view 

Specify how you want the portal to display portlets that a user is not authorized to view with the Global Settings portlet.

**Note:** The Global Settings portlet does not work in portal cluster configurations.

1.  Click the **Administration menu** icon. Then, click **Portal Settings** \> **Global Settings**.

2.  Make a selection from the field **If a user is not authorized to view a portlet**:

    -   **Portlet is not displayed**

        Choose this option if you want nothing to display.

    -   **Portlet is not displayed, replaced by an informative message**

        Choose this option if you want a message to be displayed instead of the portlet.

3.  Click **Save**.


If you have a portal cluster configuration, use the WebSphere® Integrated Solutions Console to set the property `portlets.unauthorized.visible` in the portal Configuration Service.

**Parent topic:**[Configuring portal behavior ](../admin-system/adptlcfg.md)

