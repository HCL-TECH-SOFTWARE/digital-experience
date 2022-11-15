# How to clear outbound HTTP connection configuration profiles

The clean-outbound-http-connection-config configuration task clears the complete configuration profile for an outbound HTTP connection. It deletes all settings of an outbound HTTP connection profile. The delete-outbound-http-connection-config configuration task deletes only those configuration settings that are listed in the specified XML document.

The syntax of the configuration task differs, depending on whether you want to clear the settings for the global configuration or for an application-scoped configuration. If you specify no application scope reference, the task deletes the global outbound HTTP connections profile. Otherwise, the task deletes the application-scoped profile that you identify by the `scoperef` parameter. The configuration task deletes all settings from that specified profile.


# Clearing the global outbound HTTP connection profile

1.  Open a command prompt.

2.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

3.  Run the following task to clear all settings of the global configuration for an outbound HTTP connection:

    -   AIX®: `./ConfigEngine.sh clean-outbound-http-connection-config -DOutboundProfileType=global -DWasPassword=password -DPortalAdminPwd=password`
    -   HP-UX: `./ConfigEngine.sh clean-outbound-http-connection-config -DOutboundProfileType=global -DWasPassword=password -DPortalAdminPwd=password`
    -   IBM® i: `ConfigEngine.sh clean-outbound-http-connection-config -DOutboundProfileType=global -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux™: `./ConfigEngine.sh clean-outbound-http-connection-config -DOutboundProfileType=global -DWasPassword=password -DPortalAdminPwd=password`
    -   Solaris: `./ConfigEngine.sh clean-outbound-http-connection-config -DOutboundProfileType=global -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows™: `ConfigEngine.bat clean-outbound-http-connection-config -DOutboundProfileType=global -DWasPassword=password -DPortalAdminPwd=password`

# Clearing an application-scoped outbound HTTP connection profile

Use the following syntax to clear all settings from an application-scoped outbound HTTP connection profile:

1.  Open a command prompt.

2.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

3.  Run the following task to clear all settings of the global configuration for an outbound HTTP connection:

    -   AIX: `./ConfigEngine.sh clean-outbound-http-connection-config -DOutboundProfileType=scoped -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    -   HP-UX: `./ConfigEngine.sh clean-outbound-http-connection-config -DOutboundProfileType=scoped -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    -   IBM i: `ConfigEngine.sh clean-outbound-http-connection-config -DOutboundProfileType=scoped -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux: `./ConfigEngine.sh clean-outbound-http-connection-config -DOutboundProfileType=scoped -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    -   Solaris: `./ConfigEngine.sh clean-outbound-http-connection-config -DOutboundProfileType=scoped -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows: `ConfigEngine.bat clean-outbound-http-connection-config -DOutboundProfileType=scoped -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    `scoperef` is the context root of the application to which the configuration settings are scoped. To obtain the scope reference, proceed as follows:

    1.  Access the WebSphere® Integrated Solutions Console.
    2.  Select the enterprise application for which the outbound HTTP connection is scoped.
    3.  Click **View Deployment Descriptor**.
    4.  Locate the value of the `context root` tag.
    An example context root is `/PA_Banner_Ad`.


