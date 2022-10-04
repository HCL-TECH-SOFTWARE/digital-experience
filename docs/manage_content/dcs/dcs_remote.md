# Configuring a Remote Document Conversion Service

To balance processing power, you can run document conversion services on a remote IBM WebSphere Application Server that supports document conversion services. Enabling the delegation of document conversion services to a remote server requires steps on both HCL Digital Experience and the remote server.

-   If the remote Document Conversion Service (DCS) was set up on a remote machine with the remote search installer, then skip steps 1 - 7.
-   Update the content-types.properties file to ensure that document conversions are configured for different file types. For instructions, read *Enabling Document Conversion Services*.
-   Copy the RemoteDCS.zip file to your file system. Locate the RemoteDCS.zip file in your HCL Portal installation directory under PortalServer_root/lwo/prereq.odc/RemoteSearchInstaller.

    !!!note
        Updated versions of RemoteDCS.zip might be available online. Check the *Recommended fixes and updates for WebSphere® Portal and Web Content Management* site.


Local document conversion is supported on z/OS®. You do not have to run Document Conversion Services remotely for z/OS. If required, install the following package on the remote server to improve graphics performance with your document conversions: X11R6.

**Linux on PowerPC:** Run document conversion services on a remote WebSphere Application Server that supports document conversion services. Local document conversion is not supported on Linux™ for PowerPC®. Additionally, the 64-bit Linux on z Systems does not support running document conversion or spell checker locally. You must run these functions on a remote server.

1.  Install WebSphere Application Server on the remote system.

    !!! restriction "**Restriction:**" 
        Stellent version 8.01 must support the remote system.

2.  Copy RemoteDCS.zip to the remote server and extract it in any directory with an appropriate archiving tool.

    A directory that is named dcs becomes available. This directory contains several files and sub-directories.

3.  Deploy dcs.war to WebSphere Application Server.

    1.  Log in to the WebSphere Integrated Solutions Console.

    2.  Select **Applications > Install New Application**.

    3.  Browse to the directory where you extracted RemoteDCS.zip then locate and select dcs.war.

    4.  Specify dcs as the context root and click **Next**.

    5.  Leave all other values as default.

        !!!restriction
            The application name must be `dcs_war`. Do not change the default name.

    6.  Map the application to the appropriate servers and specify the installation options as required.

    7.  Click **Finish** and save your changes to the master configuration.

4.  Ensure dcs.war is running.

    1.  Log in to the WebSphere Integrated Solutions Console.

    2.  Select **Applications > Enterprise Applications**.

    3.  Locate **dcs_war** in the list of installed applications.

    4.  Select **dcs_war** and click **Start** if the application is not started.

5.  Run the configuration script.

    1.  Open a command prompt.

    2.  Change to the dcs directory.

        The configuration script is in the root of the dcs directory that is in the directory where you extracted RemoteDCS.zip.

    3.  Run the following command:

        -   AIX® and Linux: `./setupremotedcs.sh`
        -   Windows™: `setupdcs.bat`

    4.  When prompted, specify the WebSphere Application Server installation directory.

        For example, AppServer_root.

    5.  When prompted for the profile, specify the directory where dcs.war is installed.

        For example, AppServer_root/profiles/profile_name/installedApps/node_name/dcs_war.ear

    The configuration script copies all the files to the oiexport directory where you installed dcs.war; for example, AppServer_root/profiles/profile_name/installedApps/node_name/dcs_war.ear/dcs.war/WEB-INF/lib/oiexport

6.  Complete the following steps to add environment variables to your remote search server:

    1.  Log on to the WebSphere Integrated Solutions Console.

    2.  Go to **Servers > Server Types > WebSphere application servers**.

    3.  Select your remote DCS server.

    4.  Go to **Java and Process Management > Process definition**.

    5.  Click **Environment Entries**.

    6.  Click **New** to create the following entries:

        !!!note
            If the entries exist, click the entry and update the value.

        -   **LD_LIBRARY_PATH**

            AppServer_root/profiles/profile_name/installedApps/node_name/dcs_war.ear/dcs.war/WEB-INF/lib/oiexport

        -   **LIBPATH**

            AppServer_root/profiles/profile_name/installedApps/node_name/dcs_war.ear/dcs.war/WEB-INF/lib/oiexport

        -   **PATH**

            AppServer_root/profiles/profile_name/installedApps/node_name/dcs_war.ear/dcs.war/WEB-INF/lib/oiexport

        -   **SHLIB_PATH**

            AppServer_root/profiles/profile_name/installedApps/node_name/dcs_war.ear/dcs.war/WEB-INF/lib/oiexport

    7.  Save your changes.

7.  Restart the server.

    Document Conversion Services is now installed on the remote server.

8.  Complete the following steps:

    1.  Open wkplc.properties with any text editor from the wp_profile_root/ConfigEngine/properties directory.

    2.  Add the following property and value to wkplc.properties: DcsRemoteHost=URL of the remote host.

        Where URL of the remote host is the URL of the remote server to which you plan to delegate document conversion services. For example, DcsRemoteHost=http://server_name:port_number/dcs/dcs. The server\_name is the fully qualified host name of the remote DCS server. The port\_number is the port number of the default host where DCS is run. For example, the URL might be DcsRemoteHost=http://example.mycompany.com:9080/dcs/dcs.

        !!!important
            This property does not exist in the wkplc.properties file by default. You must add this property and specify a value before you proceed to the next step.

    3.  Run the appropriate task to delegate some or all of the document conversion functions to the remote server.

        1.  Open a command prompt.
        2.  Change to the following directory:
            -   AIX and Linux: wp_profile_root/ConfigEngine
            -   Windows: wp_profile_root\ConfigEngine

        3.  Run the following task:

            !!!note
                Run the following command on all nodes in a cluster, if applicable.

            -   AIX and Linux: `./ConfigEngine.sh task_name`
            -   Windows: `ConfigEngine.bat task_name`

            Where task_name is one of the following configuration tasks:

            |Task|Description|
            |----|-----------|
            |delegate-all-conversions|This task delegates all file conversion services to a remote server.|
            |delegate-text-conversions|This task delegates text document conversions to a remote server.|
            |remove-conversion-delegation|This task ends the delegation of all file conversion services to a remote server.|

    4.  Restart HCL Portal.



