# Giving users the resume option

As a portal administrator, you can define if users can resume their last session during login.

To set the resume option, you set the property `persistent.session.option` in the Portal Configuration Service, as described in the topic about *Setting service configuration properties*. You can configure the property to one of two settings: 0 or 1.

The two persistent session option values have the following effects:

-   **persistent.session.option = 0**

    This value means that the user does not have the choice to resume the last session or not.

-   **persistent.session.option = 1**

    This value means that at login the user is presented with the option to resume the session in the navigational state of the last session.


The default setting is 0, that is, users cannot resume their last session.

**Notes:**

-   The defined session preservation settings as described in the topic about *Setting the session resume level for users* are in effect, independent of whether the administrator gave the users the resume option.
-   If you give users the resume option, set the session resume level to 1 or higher. Otherwise, the `persistent.session.option` property setting has no effect.

**Parent topic:**[How administrators define persistent session options](../admin-system/adcfgpss_adm_define.md)

