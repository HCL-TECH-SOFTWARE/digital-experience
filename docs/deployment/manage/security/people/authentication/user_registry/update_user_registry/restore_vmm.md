# Restoring the VMM setup with a federated file repository

If your business changes or your user registry configuration is inoperable, run the wp-restore-default-repository-configuration task to restore the default VMM setup with a federated file repository. Then, reconfigure your user registry. The task deletes all existing repositories, creates a realm, and configures a file repository in VMM. The task also creates a user and group, which is set to the HCL Digital Experience administrator.

1.  Before you configure security, use the IBM® WebSphere® Application Server backupConfig task to create and store a backup of the HCL Portal configuration. Read [backupConfig command](http://publib.boulder.ibm.com/infocenter/wasinfo/v8r0/topic/com.ibm.websphere.nd.multiplatform.doc/info/ae/ae/rxml_backupconfig.html) for information.

2.  Go to the [wp\_profile\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)/ConfigEngine/properties directory.

3.  Open the wkplc.properties file with a text editor.

4.  Enter a value for the following parameters under the VMM Federated repository properties heading:

    **Note:** Go to the properties file for specific information about the parameters.

    -   federated.primaryAdminId
    -   federated.realm
    -   federated.serverId
    -   federated.serverPassword
5.  Open a command prompt.

6.  Change to the [wp\_profile\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)/ConfigEngine directory.

7.  Run the following task to restore the default repository:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh wp-restore-default-repository-configuration -DWasPassword=password
    -   IBM i: ConfigEngine.sh wp-restore-default-repository-configuration -DWasPassword=password
    -   Windows™: ConfigEngine.bat wp-restore-default-repository-configuration -DWasPassword=password
    -   z/OS®: ./ConfigEngine.sh wp-restore-default-repository-configuration -DWasPassword=password
8.  Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](/digital-experience/deployment/manage/stopstart).

9.  Run the following task to restore the default repository group member:

    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh wp-restore-default-repository-add-group-member -DgroupUniqueName=value -DmemberUniqueName=value -DWasPassword=password
    -   IBM i: ConfigEngine.sh wp-restore-default-repository-add-group-member -DgroupUniqueName=value -DmemberUniqueName=value -DWasPassword=password
    -   Windows: ConfigEngine.bat wp-restore-default-repository-add-group-member -DgroupUniqueName=value -DmemberUniqueName=value -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh wp-restore-default-repository-add-group-member -DgroupUniqueName=value -DmemberUniqueName=value -DWasPassword=password
10. Stop and restart the appropriate servers to propagate the changes.



