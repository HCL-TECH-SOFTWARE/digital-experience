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

