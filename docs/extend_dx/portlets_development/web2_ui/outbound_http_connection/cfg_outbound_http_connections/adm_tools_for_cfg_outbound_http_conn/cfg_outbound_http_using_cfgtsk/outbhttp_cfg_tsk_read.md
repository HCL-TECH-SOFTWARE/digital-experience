# How to read an outbound HTTP connection configuration profile

This configuration task reads an outbound HTTP connection configuration and exports it to an XML document. System administrators can use this document to update the configuration of an outbound HTTP connection. You can read a global configuration or an application-scoped configuration.

To update an outbound HTTP connection configuration, you first create the XML document by using use the configuration task `read-outbound-http-connection-config`. Then, you modify the document as required and update the outbound HTTP connection configuration by using the configuration task `update-outbound-http-connection-config`.

The syntax of the configuration task differs, depending on whether you want to read the settings for a global configuration or for an application-scoped configuration.

## Reading the global outbound HTTP connection profile

1.  Open a command prompt.

2.  Change to the wp_profile_root/ConfigEngine directory.

3.  Run the following task to read the outbound HTTP connection settings for the global configuration:

    -   AIX®: `./ConfigEngine.sh read-outbound-http-connection-config -DConfigFileName=your_path/config_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux™: `./ConfigEngine.sh read-outbound-http-connection-config -DConfigFileName=your_path/config_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows™: `ConfigEngine.bat read-outbound-http-connection-config -DConfigFileName=your_path/config_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    your_path/config_file.xml is the absolute path name of the XML document to which you want the configuration settings to be written.


## Reading an application-scoped outbound HTTP connection profile

1.  Open a command prompt.

2.  Change to the wp_profile_root/ConfigEngine directory.

3.  Run the following task to read the outbound HTTP connection settings for an application-scoped configuration:

    -   AIX: `./ConfigEngine.sh read-outbound-http-connection-config -DConfigFileName=your_path/config_file.xml -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux: `./ConfigEngine.sh read-outbound-http-connection-config -DConfigFileName=your_path/config_file.xml -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows: `ConfigEngine.bat read-outbound-http-connection-config -DConfigFileName=your_path/config_file.xml -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    your_path/config_file.xml is the absolute path name of the XML document to which you want the configuration settings to be written.

    `scoperef` is the context root of the application to which the configuration settings are scoped. To obtain the scope reference, proceed as follows:

    1.  Access the WebSphere® Integrated Solutions Console.
    2.  Select the enterprise application for which the outbound HTTP connection is scoped.
    3.  Click **View Deployment Descriptor**.
    4.  Locate the value of the `context root` tag.
    An example context root is `/PA_Banner_Ad`.

???+ info "Related information"  
    -   [Configuring the HTTP Outbound connection in HCL Portal](../../../../../../../extend_dx/integration/unified_task_list/utl_for_adm/creating_task_provider_instance/cfg_feb_task_provider_instance/utl_cfg_http_out.md)
