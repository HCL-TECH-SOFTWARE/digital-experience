# Using copy of source JCR database domain 

Use the copied JCR database for the target production environment. This process involves modifying the database properties, validating the connection, and connecting to the copied database.

1.  Log in to the RH Linux Server, where the target HCL Portal is located.

2.  Open **RH Command Line Terminal**. Right-click the desktop and select **Open Terminal**.

3.  Enter the following command: ulimit -n 24000.

4.  Go to the Config Engine properties directory cd /opt/IBM/WebSphere/wp\_profile/ConfigEngine/properties.

5.  Open the wkplc\_dbdomain.properties file with the command gedit wkplc\_dbdomain.properties.

6.  Change the following JCR database values:

    -   `jcr.DBName=WPJCRP` to `jcr.DbName=WPJCRT`
    -   `jcr.DbUrl=jdbc:db2://cntserv_exmp.com:50000/WPJCRP:returnAlias=0;` to `jcr.DbUrl=jdbc:db2//cntserv_exmp.com:50000/WPJCRT:returnAlias=0;`
    Other values such as the database user name and schema were the same on both the source and target. Therefore, no changes are needed.

7.  Save the changes.

8.  Go to the Config Engine directory cd /opt/IBM/WebSphere/wp\_profile/ConfigEngine.

9.  Validate the database connection with the database ./ConfigEngine.sh validate-database-connection.

10. Connect to the database, with the following Config Engine command ./ConfigEngine.sh connect-database -DtransferDomainList=jcr -DWasPassword=wpsadmin.

    This task takes a few minutes to complete.


**Parent topic:**[Manual staging to production process ](../deploy/mans2p_intro.md)

