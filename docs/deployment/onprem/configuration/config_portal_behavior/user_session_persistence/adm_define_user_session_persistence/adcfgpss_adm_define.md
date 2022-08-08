# How administrators define persistent session options

As an administrator, you can configure the persistent session behavior.

You do so by setting the following properties:

-   **persistent.session.option**

    This property determines whether the login portlet displays a check box that enables the user to decide whether to resume the session or not. For details, go to [Setting service configuration properties](adsetcfg.md).

-   **persistent.session.level**

    Use this property to determine which navigational state information you want to be restored when users resume their session. You can choose from three predefined levels. For details, go to [Setting service configuration properties](adsetcfg.md).

-   **timeout.resume.session = \(false\)**

    This property determines whether resuming the session after a session timeout requires user authentication. The default value is `false`. If you set this property to `false` and the user tries to continue working after a session timeout, the portal shows an error message that states that the session timed out and the user must log in again. If you set this property to true, the portal ignores the session timeout and does not show the error message. The user can then resume the previous session without authentication and continue to work. In both cases, the previous session is resumed according to the setting of the `persisted.session.level` property that is listed earlier.

    **Note:** If the property `wps.portlets.resumeSession` listed next is set to the value `true`, the portal resumes the user session independent of the setting of `timeout.resume.session`.

-   **wps.portlets.resumeSession**

    You can write custom code to pass in a special parameter that is named `wps.portlets.resumeSession` with a value of `true` to resume a user session. If you use this option, it overrides the value set by the `timeout.resume.session` configuration property that is listed earlier.


You set these properties in the portal *Configuration Service* as described in the topic about *Setting service configuration properties*. The following sections describe the persistent session properties in more detail.

-   **[Giving users the resume option](../admin-system/adcfgpss_uresopt.md)**  
As a portal administrator, you can define if users can resume their last session during login.
-   **[Setting the session resume level for users](../admin-system/adcfgpss_setreslvl.md)**  
The session resume level specifies which navigational state information is resumed \(if any\) when the respective user logs in again. As a portal administrator you can configure the session resume level.

**Parent topic:**[Configuring user session persistence](../admin-system/adcfgpss.md)

**Related information**  


[Setting service configuration properties](../admin-system/adsetcfg.md)

[Configuration Service](../admin-system/srvcfgref_config.md)

