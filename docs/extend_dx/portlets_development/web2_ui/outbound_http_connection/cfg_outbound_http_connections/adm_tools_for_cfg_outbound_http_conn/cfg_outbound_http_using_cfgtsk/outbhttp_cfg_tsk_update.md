# How to update an outbound HTTP connection configuration profile

This configuration task updates the configuration profile settings of the outbound HTTP connection with the settings that are specified in an XML document. Use this task to manage existing outbound HTTP settings of your configuration. You can update a global configuration or an application-scoped configuration.

The configuration task updates the specified configuration settings. It creates the specified configuration settings if they do not exist.

The syntax of the configuration task differs, depending on whether you want to update the settings for a global configuration or for an application-scoped configuration.

To update an outbound HTTP connection configuration, you use the configuration tasks `read-outbound-http-connection-config` and `update-outbound-http-connection-config`.


**Related information**  


[Configuring the HTTP Outbound connection in HCL Portal](../panel_help/utl_cfg_http_out.md)

# Updating the global outbound HTTP connection profile

1.  Open a command prompt.

2.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

3.  Run the following task to export the outbound HTTP connection configuration to an XML document:

    -   AIX®: `./ConfigEngine.sh read-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    -   HP-UX: `./ConfigEngine.sh read-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    -   IBM® i: `ConfigEngine.sh read-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux™: `./ConfigEngine.sh read-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    -   Solaris: `./ConfigEngine.sh read-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows™: `ConfigEngine.bat read-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DWasPassword=password -DPortalAdminPwd=password`
4.  Update the exported XML document.

5.  Run the following task to update the outbound HTTP connection settings for the global configuration:

    -   AIX: `./ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    -   HP-UX: `./ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    -   IBM i: `ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux: `./ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    -   Solaris: `./ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows: `ConfigEngine.bat update-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    your\_path/config\_file.xml is the absolute path name of the XML document that contains the configuration settings for the outbound HTTP connection infrastructure that you want to update.


# Updating an application-scoped outbound HTTP connection profile

1.  Open a command prompt.

2.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

3.  Update the exported XML document.

4.  Run the following task to update the outbound HTTP connection settings for an application-scoped configuration:

    -   AIX: `./ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    -   HP-UX: `./ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    -   IBM i: `ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux: `./ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    -   Solaris: `./ConfigEngine.sh update-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows: `ConfigEngine.bat update-outbound-http-connection-config -DConfigFileName=your\_path/config\_file.xml -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    your\_path/config\_file.xml is the absolute path name of the XML document that contains the configuration settings for the outbound HTTP connection infrastructure that you want to update.

    `scoperef` is the context root of the application to which the configuration settings are scoped. To obtain the scope reference, proceed as follows:

    1.  Access the WebSphere® Integrated Solutions Console.
    2.  Select the enterprise application for which the outbound HTTP connection is scoped.
    3.  Click **View Deployment Descriptor**.
    4.  Locate the value of the `context root` tag.
    An example context root is `/PA_Banner_Ad`.


