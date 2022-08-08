# Setting the session resume level for users

The session resume level specifies which navigational state information is resumed \(if any\) when the respective user logs in again. As a portal administrator you can configure the session resume level.

You configure the session resume level by setting the property `persistent.session.level` in the Portal Configuration Service as described in the topic about *Setting service configuration properties*. You can configure the property to one of four predefined values: 0, 1, 2, and 3.

**Note:** If you want the user to benefit from the setting, give users the resume option as described in the topic about *Giving users the resume option*. However, the defined setting is in effect, independent of whether you give users the resume option or not.

The four persistent session level values have the following effects:

-   **persistent.session.level = 0**

    This setting means that no persistent session state at all applies to the user session. During logout or session timeout no navigational state information is stored into the database. After a login no navigational state is restored. This value is the default setting.

-   **persistent.session.level = 1**

    The portlet states and the portlet modes are stored in the database and are restored to the user session when the respective user logs in again. For example, all maximized portlets are still maximized. However, no information is stored about the last active page or its render parameters. With this setting, the user starts with the default page after a login.

-   **persistent.session.level = 2**

    This setting is the maximum level of persistent session state. Using this level, the complete navigational state information is stored. This information includes page selection information and portlet-specific navigational state, such as portlet states, portlet modes, and render parameters. In contrast to persistent session level 1, the session now starts with the last page that was active before the user logged out.

-   **persistent.session.level = 3**

    If you choose the setting 3, users will stay on the login page after they log in, rather than being redirected to another page. If you set this parameter to 3, this setting does not affect implicit logins, such as single sign-on with LTPA token or through an external security manager.


The default setting is 0, that is, no persistent session state is stored or restored.

The following table gives an overview of the settings and their effect on the user session when the user logs back in to the portal:

| |Portal navigational state|Sessionpersistencelevel 0|Sessionpersistencelevel 1|Sessionpersistencelevel 2|Sessionpersistencelevel 3|
|--|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|
|Portlet states|Normal, minimized, maximized|Not restored|Restored|Restored|Not restored|
|Portlet modes|`configure, edit_defaults, edit, view, help`|Not restored|Restored|Restored|Not restored|
|Render parameters|Not applicable|Not restored|Not restored|Restored|Not restored|
|Pages|The last active page before the user logged out|Not restored|Not restored|Restored|Not restored|

**Parent topic:**[How administrators define persistent session options](../admin-system/adcfgpss_adm_define.md)

