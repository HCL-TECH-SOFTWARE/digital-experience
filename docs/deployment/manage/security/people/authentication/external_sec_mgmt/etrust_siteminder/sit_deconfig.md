# Removing eTrust SiteMinder

After you have installed and used Computer Associates eTrust SiteMinder, you may find that you no longer require its use. You can then remove it from the HCL Digital Experience environment and restore authentication capabilities to IBM WebSphere Application Server and authorization capabilities to HCL Digital Experience.

Perform the following steps to remove eTrust SiteMinder from the HCL Digital Experience environment:

1.  Perform the following steps if you used eTrust SiteMinder for authorization:

    1.  Use either the Resource Permissions portlet or, if you are set up to execute it, the XML Configuration Interface \(XMLAccess\) to internalize any resources managed by eTrust SiteMinder.

    2.  Open a UNIX System Services (z/OS UNIX System Services) command prompt.

        !!!note
            If you are instructed to open a properties file, the files are ASCII files and should be opened with the appropriate tool.

<<<<<<< HEAD
    3.  Edit the [wp\_profile\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)/PortalServer/config/config/services.properties file and change the value of com.ibm.wps.services.ac.ExternalAccessControlService to com.ibm.wps.ac.impl.ExternalAccessControlDefaultImpl.
=======
    3.  Edit the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/PortalServer/config/config/services.properties file and change the value of com.ibm.wps.services.ac.ExternalAccessControlService to com.ibm.wps.ac.impl.ExternalAccessControlDefaultImpl.
>>>>>>> feature/DXQ-26605b

        !!!note
            In a cluster environment, you must edit the services.properties file on all nodes.

    4.  Change the enableExternalization property to false in the External Access Control Service. This will prevent the Externalize/Internalize icon from appearing in the Administration Access portlet after removing eTrust SiteMinder.

2.  If you previously disabled the ability to create users through HCL Digital Experience, restore it. Re-enable HCL Digital Experience auto-registration. Restore the backup copy of the theme as appropriate to remove any features specific to eTrust SiteMinder.

3.  Complete the following steps to remove the eTrust SiteMinder TAI module from the WebSphere® Application Server console:

    1.  In the WebSphere Application Server Administration Console, click **Securiry** \> **Global security** \> **Web and SIP security** \> **Trust association** \> **Interceptors.**.

    2.  Select the eTrust SiteMinder TAI module and then click **Delete**.

    3.  Click **OK** and then click **Save**.

<<<<<<< HEAD
4.  Stop and restart the appropriate servers to propagate the changes. For specific instructions, see [Starting and stopping servers, deployment managers, and node agents](/digital-experience/deployment/manage/stopstart).
=======
4.  Stop and restart the appropriate servers to propagate the changes. For specific instructions, see [Starting and stopping servers, deployment managers, and node agents](../../../../../stopstart.md).
>>>>>>> feature/DXQ-26605b

5.  If necessary, uninstall any Computer Associates components.



