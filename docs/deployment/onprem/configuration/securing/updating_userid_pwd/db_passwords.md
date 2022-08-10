# Changing database passwords that are used by HCL Portal

If database passwords are modified or expired, you must specify the new passwords on the IBM WebSphere Application Server and on the IBM DB2 Universal Database Enterprise Server Edition server so that HCL Portal can access them.

-   Ensure that the administrative server for WebSphere® Application Server is running.
-   If this server is a clustered environment, you must have the Deployment Manager and the nodes up and the HCL Portal server stopped.
-   If the Virtual Member Manager \(VMM\) is using the database, see *Changing the password for a repository under a federated repositories configuration* in the related links for instructions on updating the VMM database password.

1.  Check whether the database user was disabled because of invalid login attempts. Re-enable the database user if necessary.

2.  Update the data sources for HCL Portal:

    1.  Log in to the WebSphere Integrated Solutions Console.

    2.  Click **Security** \> **Global security** \> **Java Authentication and Authorization Service** \> **J2C Authentication Data**.

    3.  Select the alias that you want to change; for example:

        -   wpsDBAuth
        -   jcrDBAuth
        -   fbkDBAuth
        -   lmDBAuth
        -   wcmDBAuth
    4.  For z/OS®: Select the alias that you want to change; for example wpdbDS\_WPSDBADM.

    5.  Update the password accordingly.

    6.  Click **Apply**, and then click **Save** to save the configuration. You are informed that security.xml was changed.

3.  If you are an administrator and must change the DB2® password, you must change the database administrator user password on the system.

    1.  Stop the DB2 server.

    2.  Use the passwd command to change the password.

    3.  Restart the DB2 server.

        You can verify the new password by running the db2 CONNECT TO WPSDB user db2admin using password task.

4.  Restart the WebSphere Integrated Solutions Console.

5.  On the DB2 server, complete the following steps:

    1.  Click **Administrative Tools** \> **Services**.

    2.  Stop all running DB2 services.

    3.  For each service that your DB2 instance uses, display the menu and select **Properties**.

    4.  Select the **Log On** tab and change the DB2 administrator's user name and password.

    If you do not change the DB2 administrator's user name and password in the properties of each DB2 service, the DB2 database application does not start.

6.  For z/OS: Start your HCL Portal server.


Repeat for each JDBC Provider, data source, and alias that is affected.

Results:

WebSphere Application Server and HCL Digital Experience were updated to use your new database passwords. Verify that the HCL Digital Experience application server is running by opening the following URL in a browser: http://hostname.example.com:10039/wps/portal, where hostname.example.com is the fully qualified host name of the server where Portal is running and 10039 is the default transport port that is created by WebSphere® Application Server. The port number might be different for your environment.http://hostname.example.com:10039/wps/portal, where hostname.example.com is the fully qualified host name of the server where Portal is running and 10039 is the default transport port that is created by HCL Digital Experience application server. The port number might be different for your environment.http://hostname.example.com:10039/wps/portal, where hostname.example.com is the fully qualified host name of the server where Portal is running and 10039 is the default transport port that is created by HCL Digital Experience application server. The port number might be different for your environment.Lotus Quickr.

**Parent topic:**[Updating user ID and passwords](../security/sec_pswds.md)

**Related information**  


[Changing the password for a repository under a federated repositories configuration](https://www.ibm.com/docs/en/was-nd/8.5.5)

[Applying fix packs to your portal](../security/apply_fixpacks.md)

