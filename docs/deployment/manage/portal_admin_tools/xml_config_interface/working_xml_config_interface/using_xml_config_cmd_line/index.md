# Using the XML configuration command line client

You access the XML configuration interface using a command line tool. This command line client is a separate program that connects to the server. Connecting to a remote server makes it possible to configure the portal remotely. You use the command line syntax of the XML configuration interface.

The remote connection can be either an HTTP connection, which is not secure, or a secure HTTPS connection. Apply care and use the appropriate type of connection that is required for your environment. Use an HTTP connection to connect to the XML configuration interface only from inside a protected intranet where you can be sure that the HTTP connection is not compromised. In all other networks use a secure HTTP**S** connection to connect to the XML configuration interface. For details about how to use an HTTPS connection refer to XML Syntax for using a secure connection with SSL.

You invoke the command line client by using the following shell scripts in the directory wp_profile_root/PortalServer/bin`:

-   UNIX™Linux™: `./xmlaccess.sh`
-   Windows™: `xmlaccess.bat`

You can also use the XML configuration interface remotely from a machine that does not have portal installed. In this case copy the required files to the remote machine and configure the portal from there. All you need is a Java run time. However, you have to adapt the path settings in the shell scripts accordingly. These are the required files:

-   PortalServer_root/base/wp.xml.client/bin/wp.xml.client.jar
-   PortalServer_root/base/wp.base/shared/app/wp.base.jar
-   PortalServer_root/base/wp.base/shared/app/wp.engine.impl.jar
-   PortalServer_root/base/wp.base/shared/app/wp.utilities.streams.jar
-   AppServer_root/lib/j2ee.jar
-   AppServer_root/lib/bootstrap.jar
-   AppServer_root/lib/com.ibm.ws.runtime.jar
-   AppServer_root/plugins/j2ee.jar
-   AppServer_root/plugins/com.ibm.wps.emf.jar
-   AppServer_root/plugins/org.eclipse.emf.ecore.jar
-   AppServer_root/plugins/org.eclipse.emf.common.jar
-   PortalServer_root/bin/xmlaccess.sh` or PortalServer_root\bin\xmlaccess.bat, depending on your operating system.
-   wp_profile_root]/PortalServer/bin/xmlaccess.sh

!!!note
    When you update your portal by installing fix packs, these files might be updated. In such cases make sure that you always use the most recent versions of these files.

???+ info "Related information"  
    -   [XML Syntax for using a secure connection with SSL](../../../../portal_admin_tools/xml_config_interface/working_xml_config_interface/using_xml_config_cmd_line/cmdline_syntax/xml_syntax_for_using_ssl/index.md)
    -   [Transferring portal configuration data by using the XML configuration interface](../../../../portal_admin_tools/xml_config_interface/working_xml_config_interface/using_xml_config_cmd_line/transfer_portal_cfg_using_xml_config_int/index.md)

