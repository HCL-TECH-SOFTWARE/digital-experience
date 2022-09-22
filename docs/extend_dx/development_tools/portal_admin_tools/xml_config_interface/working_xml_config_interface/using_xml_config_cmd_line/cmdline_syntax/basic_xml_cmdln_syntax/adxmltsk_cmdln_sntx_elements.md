# Syntax elements for the XML configuration interface command line

This topic lists the syntax elements for using the XML configuration interface command line client over an HTTP connection.

## Syntax elements

For information about the XML syntax elements for a secure HTTPS connection see the topic about *XML Syntax elements for using a secure connection with SSL*.

|Syntax element|Description|
|--------------|-----------|
|`xmlaccess`|This is the shell script. It is located in directory wp_profile_root/PortalServer/bin`. Use one of the following scripts: <br> -   UNIX™Linux™: `./xmlaccess.sh` <br> -   Windows™: `xmlaccess.bat`|
|`-in`|Use this element to specify the name of a file containing the XML request (configuration export or update) that should be processed.|
|`-user` and `-password`|Use these elements to specify the user identification and password describing the authority under which the request should be processed. For the value for user you must specify the short user name as specified during login; full distinguished names (DN) are not supported. The XML configuration interface is only accessible to users that have the manager role on the virtual resource XML_ACCESS and the administrator role on the virtual resource PORTAL.|
|`-askForCredential`|You can use the parameter askForCredential and leave out the parameters user and password. The XML configuration interface will then prompt you for the user ID and password. The parameter askForCredential requires no value to be specified.|
|`-useEncryptedCredentials`|Use this option if you want to provide the user credentials in a properties file rather than with the XML command.|
|`-noUpdateProperties`|Use this option additionally with the option useEncryptedCredentials, if you do not want to have the encrypted credentials written back to the properties file.|
|`-url`|Use this element to specify the URL to access the configuration servlet. This URL consists of the host name, the base URI as specified during installation (for example /wps), and the servlet extension /config. For z/OS: Use this element to specify the URL to access the configuration servlet. This URL consists of the host name and port, the base URI as specified during installation (for example /wps), and the servlet extension /config.|
|`-out`|The name of the result file that contains the XML output. This file gives a result status and thereby indicates whether the XML request was performed successfully, or what errors might have occurred. In the case of an XML export, this file contains the exported configuration. You can later use this file to re-import the exported configuration.|


???+ info "Related information"  
    -   [Exporting UXFM dialog definitions](../../../../../../../../deployment/manage/migrate/preparing_source_env/prepare_ux_screenflow_mgr/mig_pre_uxfm_exportdialog.md)
    -   [Removing UXFM dialog definitions](../../../../../../../../deployment/manage/migrate/preparing_source_env/prepare_ux_screenflow_mgr/mig_pre_uxfm_remove.md)

