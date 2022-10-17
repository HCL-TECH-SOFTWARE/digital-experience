# AIX: Uninstalling HCL Digital Experience

If you have a complete and functional uninstallation program, you can uninstall HCL Digital Experience only or both HCL Digital Experience and IBM® WebSphere® Application Server.

1.  If you uninstall as a non-root user, verify that all product directories and files have the correct permissions. If not, set their permissions to the non-root user.

2.  Stop all the servers. For specific instructions, go to [Starting and stopping servers, deployment managers, and node agents](../../../../manage/stopstart.md).

3.  Verify that you are not running any other installation or uninstallation programs.

4.  Choose one of the following uninstallation commands to uninstall HCL Digital Experience and WebSphere Application Server:

    -   Graphical user interface: Start the Installation Manager and then select **Uninstall**.
    -   Response file: From your installation source directory, run the ./imcl input pathtoresponse.xml -log pathtologfiles task.

        !!!important
            Do not place the response file in a path that contains a space and do not put a space in the file name.

    -   Console mode: Run the `./imcl -c` task from the install_root/Installation Manager/eclipse/tools directory. Then, type 5.

        !!!restriction
            You can select only one package group to uninstall at a time. First, uninstall the HCL Digital Experience package. Then, uninstall the WebSphere Application Server package.

    During the uninstallation, remove all profiles that you do not want to keep for future installations.

5.  Remove any remaining HCL Digital Experience directories from your directory structure.

6.  If you uninstall HCL Digital Experience only, go to the AppServer_root directory and remove the following files:

    -   lib/ext/commons-codec-1.3.jar
    -   lib/ext/commons-httpclient-3.0.1.jar
    -   lib/ext/openid4java-full-0.9.5.jar
    -   lib/ext/wp.auth.base.sua_RedirectServletFilter.jar
    -   lib/ext/wp.auth.base.sua_loginmodule.jar
    -   lib/ext/wp.auth.tai.jar
    -   lib/wp.user.connections.jar
    -   lib/wp.wire.jar
    -   plugins/com.ibm.patch.was.plugin.jar
    -   plugins/com.ibm.wp.was.plugin.jar
    -   plugins/wp.ext.jar
    -   properties/jndi.properties
7.  Examine all running processes and stop ones that contain the PortalServer\_root directory. Restart the server, especially if you intend to reinstall HCL Digital Experience on the same server.

8.  Go to [Deleting specific cluster members](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.0.0/com.ibm.websphere.nd.doc/info/ae/ae/trun_wlm_clustermember_delete.html) for information about how to delete a cluster member from the deployment manager.

9.  Complete the following steps to delete the HCL Portal server from the deployment manager:

    1.  Log on to the WebSphere Integrated Solutions Console.

    2.  Click **Servers > Application Servers**.

    3.  Select the check box for the HCL Portal server you want to delete.

    4.  Click **Delete**.

10. After uninstalling HCL Digital Experience and WebSphere Application Server, you can also delete the Installation Manager. Run the `./uninstall` command from the ibm/InstallationManager/uninstall directory.



