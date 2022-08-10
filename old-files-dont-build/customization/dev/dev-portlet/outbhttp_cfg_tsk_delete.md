# How to delete outbound HTTP connection configuration settings

This configuration task deletes configuration settings for an outbound HTTP connection. It deletes the settings that are specified in an XML document. You can delete settings of the global configuration or of an application-scoped configuration.

The task deletes the outbound HTTP connection configuration settings as specified in an XML document. You specify the settings that you want to delete in the XML document. The task tries to remove all items that are defined in the XML document. If an item contains dependent data that is not explicitly listed in this document, then the configuration setting is not deleted. The syntax of the configuration task differs, depending on whether you want to delete the settings for the global configuration or for an application-scoped configuration.

**Parent topic:**[Configuring outbound HTTP connections by using configuration tasks](../dev-portlet/outbhttp_cfg_tasks.md)

# Deleting global outbound HTTP connection settings

1.  Open a command prompt.

2.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

3.  Run the following task to delete all settings of the global configuration for an outbound HTTP connection:

    -   AIX®: `./ConfigEngine.sh delete-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    -   HP-UX: `./ConfigEngine.sh delete-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    -   IBM® i: `ConfigEngine.sh delete-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux™: `./ConfigEngine.sh delete-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    -   Solaris: `./ConfigEngine.sh delete-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows™: `ConfigEngine.bat delete-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    your\_path/config\_file.xml is the absolute path name of the XML document that contains the configuration settings for the outbound HTTP connection infrastructure that you want to delete.


# Deleting application-scoped outbound HTTP connection settings

1.  Open a command prompt.

2.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

3.  Run the following task to delete an application-scoped outbound HTTP connection setting:

    -   AIX: `./ConfigEngine.sh delete-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    -   HP-UX: `./ConfigEngine.sh delete-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    -   IBM i: `ConfigEngine.sh delete-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux: `./ConfigEngine.sh delete-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    -   Solaris: `./ConfigEngine.sh delete-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows: `ConfigEngine.bat delete-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    your\_path/config\_file.xml is the absolute path name of the XML document that contains the configuration settings for the outbound HTTP connection infrastructure that you want to delete.

    `scoperef` is the context root of the application to which the configuration settings are scoped. To obtain the scope reference, proceed as follows:

    1.  Access the WebSphere® Integrated Solutions Console.
    2.  Select the enterprise application for which the outbound HTTP connection is scoped.
    3.  Click **View Deployment Descriptor**.
    4.  Locate the value of the `context root` tag.
    An example context root is `/PA_Banner_Ad`.


