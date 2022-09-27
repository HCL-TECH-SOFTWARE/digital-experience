# Upgrading your existing product offering

After your initial HCL Digital Experience installation, you can purchase a license for an upgraded product offering.

!!!note "Cluster note"
    In a clustered environment, run these steps on all the nodes.

!!!note "Response file note"
    You can record and run a response file to upgrade your existing product offering. You may refer to the following topics in using a response file to install DX. Use the following steps when you record your response file. Ensure that you exit from the IBM® Installation Manager program to finish your recording. <br> - [Installing HCL Digital Experience in AIX system using a response file](../../install/traditional/installing_dx/aix/running_install/install_with_responsefile/index.md) <br> - [Installing HCL Digital Experience in Linux using a response file](../../install/traditional/installing_dx/linux/running_install/install_with_responsefile/index.md)<br> - [Installing HCL Digital Experience in Windows using a response file](../../install/traditional/installing_dx/windows/running_install/install_with_responsefile/index.md)

1.  Stop all the application servers.

2.  Open the IBM Installation Manager and complete the following steps to add the content repository:

    1.  Go to **File > Preferences > Repositories**.

    2.  Select **Add Repositories**.

    3.  Select **Browse** and go to the offering-install-eimage/Setup directory.

    4.  Select the `repository.config` file.

    5.  Click **OK**.

    6.  Ensure that all necessary repositories are checked.

    7.  Ensure that the content repository is after the Server repository in the list.

    8.  Click **Test Connections** to ensure that the IBM Installation Manager can successfully access the directory where the repository is stored.

    9.  Select **Apply**.

    10. Select **OK**.

3.  On the main IBM Installation Manager panel, select **Install** to begin the installation process.

4.  On the Install Package: Select packages to install panel, check the box for the additional package that you purchased. Then, click **Next**.

5.  Accept the license agreement and then click **Next**.

6.  On the **Location** panel, select **Use the existing package group**. Select the package group name used during install and then click **Next**.

7.  On the Features panel, check the box for the additional feature that you purchased. Then, click **Next**.

8.  Confirm the Summary panel information and then click **Install**.

    New profiles are enabled with the upgraded offering. Existing profiles are only updated if they were created with the IBM Installation Manager. If you created profiles with the Configuration Wizard, run the following configuration task from the wp_profile_root/ConfigEngine directory.

    -   AIX® HP-UX Linux™ Solaris: `./ConfigEngine.sh enable-wcm -DWasPassword=password`
    -   IBM i: `ConfigEngine.sh enable-wcm -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat enable-wcm -DWasPassword=password`
    -   z/OS®: `./ConfigEngine.sh enable-wcm -DWasPassword=password`

    New profiles are enabled with the upgraded offering. Existing profiles are only updated if they were created with the IBM Installation Manager.


