# Removing the Enable product offering 

After you upgrade your product offering, you can remove the upgraded product offering and return to your original product offering.

**Cluster note:** In a clustered environment, run these steps on all the nodes.

**Response file note:** You can record and run a response file to remove the HCL Portal Enable product offering. Read [Uninstalling a package silently by using a response file](http://www-01.ibm.com/support/knowledgecenter/SSDV2W_1.7.0/com.ibm.silentinstall12.doc/topics/t_silent_response_file_uninstall.html) for information. Use the following steps when you record your response file. Ensure that you exit from the IBM® Installation Manager program to finish your recording.

**IBM i response file note:** Run the sample response file to remove the HCL Portal Enable product offering. For IBM i, edit the appropriate sample response file that is in the setup\_root/responsefiles/iseries directory. You cannot record the response file from your IBM i operating system. You can record a response file on another operating system. Use the following steps when you record your response file. Ensure that you exit from the IBM Installation Manager program to finish your recording. You must edit the response file that you recorded to add your IBM i specific parameters.

1.  Stop all the application servers.

2.  Open the IBM Installation Manager.

3.  On the main IBM Installation Manager pane, select **Uninstall** to begin the removal process.

4.  On the Install Package: Select packages to install pane, check the box for the HCL Portal Enable package that you want to remove. Then, click **Next**.

5.  Review the summary information and then click **Uninstall**.

6.  When the removal is complete, click **Finish**.


Now that you removed the HCL Portal Enable package, you cannot access the HCL Web Content Manager Authoring feature.

**Parent topic:**[Upgrading your existing product offering ](../install/inst_upsell.md)

