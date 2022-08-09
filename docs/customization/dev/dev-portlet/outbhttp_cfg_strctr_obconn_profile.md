# Outbound connection profile

The outbound connection profile contains the elements of the configuration model. The following profiles can exist.

-   **System profile**

    This profile is reserved for configuration settings that are used by the system internally. A portal configuration contains exactly one system profile.

-   **Global profile**

    This profile contains all global configuration settings. These settings are maintained by the portal administrator. In contrast to settings in application-scoped profiles, the policy mappings, proxy rules, and cookie rules that are defined in the global profile are available to all applications that use the outbound connection service. A portal configuration contains zero or one global profile.

-   **Application-scoped profiles**

    Application scoped profile settings are valid within the scope of a specific web module. The application for which this profile is scoped is determined by the context root of the web module deployment descriptor. For example, if the deployment descriptor of the web module bannerad.war contains the context root setting `/wps/PA_Banner_Ad`, the application-scope profile must contain only `/wps/PA_Banner_Ad` as a scope reference.


An outbound connection profile item contains the application scope reference setting:

-   **application scope reference**

    This setting is `null` for the system profile and for the global profile. For application-scoped profiles, the scope reference identifies the application to which this profile belongs. The scope reference contains the context root setting of the application. You can locate this information by either of the following ways:

    -   If the referenced application is a portlet application, proceed as follows:
        1.  Log in to the portal by using the portal administrator user ID.
        2.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Web Modules**.
        3.  In the **Manage Web Modules** portlet, click **Select Web Module Properties** for the requested web module. The web module properties view lists the context root. For example, this context root can be `/wps/PA_Banner_Ad`.
    -   By alternative, you can determine the context root of an application by using the WebSphere® Integrated Solutions Console. Proceed as follows:
        1.  Select the enterprise application that you want to refer to.
        2.  Click **View Deployment Descriptor**.
        3.  Locate the context-root tag.
        4.  Take the value of this tag as scope reference value.

**Parent topic:**[Configuration structure](../dev-portlet/outbhttp_cfg_structure.md)

