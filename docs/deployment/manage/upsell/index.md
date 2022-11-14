# Upgrading your existing product offering

After your initial HCL Digital Experience installation, you can purchase a license for an upgraded product offering.

**Cluster note:** In a clustered environment, run these steps on all the nodes.

**Response file note:** You can record and run a response file to upgrade your existing product offering. Read [Use response files to install](http://www-01.ibm.com/support/knowledgecenter/SSDV2W_1.7.0/com.ibm.silentinstall12.doc/topics/t_silent_response_file_install.html) for information. Use the following steps when you record your response file. Ensure that you exit from the IBM® Installation Manager program to finish your recording.

**IBM i response file note:** Run the sample response file to upgrade your existing product offering. Read [Use response files to install](http://www-01.ibm.com/support/knowledgecenter/SSDV2W_1.7.0/com.ibm.silentinstall12.doc/topics/t_silent_response_file_install.html) for information. For IBM i, edit the appropriate sample response file that is in the setup\_root/responsefiles/iseries directory. You cannot record the response file from your IBM i operating system. You can record a response file on another operating system. Use the following steps when you record your response file. Ensure that you exit from the IBM Installation Manager program to finish your recording. You must edit the response file that you recorded to add your IBM i specific parameters.

1.  Stop all the application servers.

2.  Open the IBM Installation Manager and complete the following steps to add the content repository:

    1.  Go to **File** \> **Preferences** \> **Repositories**.

    2.  Select **Add Repositories**.

    3.  Select **Browse** and go to the offering-install-eimage/Setup directory.

    4.  Select the repository.config file.

    5.  Click **OK**.

    6.  Ensure that all necessary repositories are checked.

    7.  Ensure that the content repository is after the Server repository in the list.

    8.  Click **Test Connections** to ensure that the IBM Installation Manager can successfully access the directory where the repository is stored.

    9.  Select **Apply**.

    10. Select **OK**.

3.  On the main IBM Installation Manager panel, select **Install** to begin the installation process.

4.  On the Install Package: Select packages to install panel, check the box for the additional package that you purchased. Then, click **Next**.

5.  Accept the license agreement and then click **Next**.

6.  On the **Location** panel, select **Use the existing package group**. Select the **HCL Portal V85** package group name and then click **Next**.

7.  On the Features panel, check the box for the additional feature that you purchased. Then, click **Next**.

8.  Confirm the Summary panel information and then click **Install**.


New profiles are enabled with the upgraded offering. Existing profiles are only updated if they were created with the IBM Installation Manager. If you created profiles with the Configuration Wizard, run the following configuration task from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

-   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh enable-wcm -DWasPassword=password
-   IBM i: ConfigEngine.sh enable-wcm -DWasPassword=password
-   Windows™: ConfigEngine.bat enable-wcm -DWasPassword=password
-   z/OS®: ./ConfigEngine.sh enable-wcm -DWasPassword=password

New profiles are enabled with the upgraded offering. Existing profiles are only updated if they were created with the IBM Installation Manager.

-   **[Removing the Enable product offering](../install/inst_down.md)**  
After you upgrade your product offering, you can remove the upgraded product offering and return to your original product offering.


