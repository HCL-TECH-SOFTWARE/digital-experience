# Removing the Enable product offering

After you upgrade your product offering, you can remove the upgraded product offering and return to your original product offering.

!!!note "Cluster note"
    In a clustered environment, run these steps on all the nodes.

!!!note "Response file note"
    You can record and run a response file to upgrade your existing product offering. You may refer to the following topics in using a response file to install DX. Use the following steps when you record your response file. Ensure that you exit from the IBM® Installation Manager program to finish your recording. <br> - [Installing HCL Digital Experience in AIX system using a response file](../../install/traditional/installing_dx/aix/running_install/install_with_responsefile/index.md) <br> - [Installing HCL Digital Experience in Linux using a response file](../../install/traditional/installing_dx/linux/running_install/install_with_responsefile/index.md)<br> - [Installing HCL Digital Experience in Windows using a response file](../../install/traditional/installing_dx/windows/running_install/install_with_responsefile/index.md)

1.  Stop all the application servers.

2.  Open the IBM Installation Manager.

3.  On the main IBM Installation Manager pane, select **Uninstall** to begin the removal process.

4.  On the Install Package: Select packages to install pane, check the box for the HCL Portal Enable package that you want to remove. Then, click **Next**.

5.  Review the summary information and then click **Uninstall**.

6.  When the removal is complete, click **Finish**.

Now that you removed the HCL Portal Enable package, you cannot access the HCL Web Content Manager Authoring feature.


