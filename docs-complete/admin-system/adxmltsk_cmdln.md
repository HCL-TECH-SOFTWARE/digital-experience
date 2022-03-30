# Using the XML configuration command line client

You access the XML configuration interface using a command line tool. This command line client is a separate program that connects to the server. Connecting to a remote server makes it possible to configure the portal remotely. You use the command line syntax of the XML configuration interface.

The remote connection can be either an HTTP connection, which is not secure, or a secure HTTPS connection. Apply care and use the appropriate type of connection that is required for your environment. Use an HTTP connection to connect to the XML configuration interface only from inside a protected intranet where you can be sure that the HTTP connection is not compromised. In all other networks use a secure HTTP**S** connection to connect to the XML configuration interface. For details about how to use an HTTPS connection refer to XML Syntax for using a secure connection with SSL.

You invoke the command line client by using the following shell scripts in the directory `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin`:

-   UNIX™Linux™: ./xmlaccess.sh
-   IBM® i: xmlaccess.sh
-   Windows™: xmlaccess.bat
-   z/OS®: ./xmlaccess.sh

You can also use the XML configuration interface remotely from a machine that does not have portal installed. In this case copy the required files to the remote machine and configure the portal from there. All you need is a Java run time. However, you have to adapt the path settings in the shell scripts accordingly. These are the required files:

-   `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/base/wp.xml.client/bin/wp.xml.client.jar`
-   `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/base/wp.base/shared/app/wp.base.jar`
-   `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/base/wp.base/shared/app/wp.engine.impl.jar`
-   `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/base/wp.base/shared/app/wp.utilities.streams.jar`
-   `[AppServer\_root](../reference/wpsdirstr.md#was_root)/lib/j2ee.jar`
-   `[AppServer\_root](../reference/wpsdirstr.md#was_root)/lib/bootstrap.jar`
-   `[AppServer\_root](../reference/wpsdirstr.md#was_root)/lib/com.ibm.ws.runtime.jar`
-   `[AppServer\_root](../reference/wpsdirstr.md#was_root)/plugins/j2ee.jar`
-   `[AppServer\_root](../reference/wpsdirstr.md#was_root)/plugins/com.ibm.wps.emf.jar`
-   `[AppServer\_root](../reference/wpsdirstr.md#was_root)/plugins/org.eclipse.emf.ecore.jar`
-   `[AppServer\_root](../reference/wpsdirstr.md#was_root)/plugins/org.eclipse.emf.common.jar`
-   `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/bin/xmlaccess.sh` or `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)\bin\xmlaccess.bat`, depending on your operating system.
-   `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin/xmlaccess.sh`

**Note:** When you update your portal by installing fix packs, these files might be updated. In such cases make sure that you always use the most recent versions of these files.

-   **[Command line syntax of the XML configuration interface](../admin-system/adxmltsk_cmdln_syntax.md)**  
The command line syntax for working with the XML configuration interface can vary, depending on your portal installation environment and configuration.
-   **[Transferring portal configuration data by using the XML configuration interface](../admin-system/adxmltsk_use.md)**  
When you use the XML configuration interface to transfer HCL Portal configuration data, you export or import an XML script file. In most cases, you can use the result file from an XML export for an XML import. Sometimes you can use the export result file directly, sometimes you must modify it.
-   **[Creating and modifying resources ](../admin-system/adxmltsk_creat_mod_resrcs.md)**  
In addition to copying and restoring configurations of existing portal resources, you can use the XML configuration interface to install new resources in the portal. You can also use the XML configuration interface as an alternative to the portal administrative user interface for running some administration tasks.
-   **[Activating and deactivating portlets, portlet applications, and web applications](../admin-system/adxmltsk_activt_portlts.md)**  
You can change the states of portlets, portlet applications, and web applications between active and inactive by using the portal XML configuration interface.
-   **[Scheduling the delayed cleanup of portal pages](../admin-system/adxmltsk_sked_delclnup.md)**  
You can use the example XML script Task.xml to schedule the cleanup of pages that have been marked for deletion.
-   **[Registering predeployed portlets ](../admin-system/adxmltsk_reg_predepld_portlts.md)**  
You can manually predeploy portlet application WAR files using the WebSphere Integrated Solutions Console. You can later register and configure the predeployed portlet applications into HCL Digital Experience, together with other J2EE resources and artifacts, by using the XML configuration interface.
-   **[Removing users and groups ](../admin-system/adxmltsk_del_usrs_grps.md)**  
Depending on circumstances, you might want to remove users or groups from your HCL Digital Experience that are no longer used or required. You can use the XML configuration interface \(XML Access\) to list such users and groups. You can also remove only some selected users and groups, and keep others for further use.
-   **[Preparing the deletion of orphaned resources](../admin-system/adxmltsk_del_orphan_res.md)**  
You can use the XML configuration interface to delete orphaned data from your HCL Digital Experience.

**Parent topic:**[Working with the XML configuration interface](../admin-system/adxmltsk.md)

**Related information**  


[XML Syntax for using a secure connection with SSL](../admin-system/adxmltsk_cmdln_sntx_ssl.md)

[Transferring portal configuration data by using the XML configuration interface](../admin-system/adxmltsk_use.md)

