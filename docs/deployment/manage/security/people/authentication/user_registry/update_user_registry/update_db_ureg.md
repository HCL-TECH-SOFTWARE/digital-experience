# Updating the database user registry

After you create and use the database user registry, you can update the database user ID, password, and where the data is stored. This task does not change the DN structure that is stored in the database repository.

If you plan to change the database where data is stored, populate the new database with all necessary VMM tables and create the data sources in WebSphere® Application Server. Then, run this task. Read the following information for information about setting up a VMM database. After you populate the new database, restart the WebSphere\_Portal server.

-   AIX® HP-UX Linux™ Solaris Windows™: [Setting up an entry mapping repository, a property extension repository, or a custom registry database repository using wsadmin commands](http://www-01.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.base.doc/ae/twim_fedmap_wsadmin.html)
-   IBM® i: [Setting up an entry mapping repository, a property extension repository, or a custom registry database repository using wsadmin commands](http://www-01.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.base.iseries.doc/ae/twim_fedmap_wsadmin.html)
-   z/OS®: [Setting up an entry mapping repository, a property extension repository, or a custom registry database repository using wsadmin commands](http://www-01.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.base.iseries.doc/ae/twim_fedmap_wsadmin.html)

If you change the database administrator password, complete the steps in [Changing database passwords that are used by HCL Portal](../../updating_userid_pwd/db_passwords.md) before you run this task.

!!!note
    Use the wp\_add\_DB.properties helper file in the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine/config/helpers directory to ensure that the correct properties are entered. In the following instructions, where the step refers to the wkplc.properties file, use your wp\_add\_DB.properties helper file.

1.  Prepare your servers.

    -   In a stand-alone server environment, you can complete the following task when the servers are either stopped or started.
    -   In a clustered environment, start the deployment manager and node agent. Then, verify that they are able to synchronize.
2.  Go to the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory.

3.  Open the wkplc.properties file with a text editor.

4.  Enter the following parameters in the wkplc.properties file under Federated DB repository heading:

    !!!note
        Go to the properties file for specific information about the parameters.

    -   federated.db.DataSourceName
    -   federated.db.DbType
    -   federated.db.DbUrl
    -   federated.db.id
    -   federated.db.DbUser
    -   federated.db.DbPassword

5.  Save your changes to the wkplc.properties file.

6.  Open a command prompt.

7.  Change to the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

8.  Run the following task to delete the required repository:

    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh wp-update-db -DWasPassword=password
    -   IBM i: ConfigEngine.sh wp-update-db -DWasPassword=password
    -   Windows: ConfigEngine.bat wp-update-db -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh wp-update-db -DWasPassword=password

9.  Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](../../../../../stopstart.md).



