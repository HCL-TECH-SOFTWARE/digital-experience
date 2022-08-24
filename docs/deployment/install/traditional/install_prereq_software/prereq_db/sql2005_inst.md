# Installing and preparing SQL Server

Use this information to install and configure SQL Server for use with your HCL Digital Experience system.

-   Review the database considerations.
-   Ensure the database that you plan to use is supported by this version of HCL Portal. Refer to the list of supported databases in the HCL Portal detailed system requirements.
-   Download a JDBC 6.2 compliant driver from Microsoft.

1.  Install SQL Server and all required patches.

2.  In the SQL Server Setup, choose the following:

    1.  In the Setup Role panel, choose **SQL Server Feature Installation**.

    2.  In the Features Selection panel, choose at least **Database Engine Services**.

    3.  In the Database Engine Configuration, select **Mixed Mode \(SQL Server Authentication and Windows authentication\)**.

        **Important:**

        Mixed Mode authentication allows either a Windows user or an SQL Server user to log in to the SQL Server. However, HCL Portal requires the user to be an SQL Server user.

3.  Complete the installation. Use the SQL Server documentation as a guide.

4.  Install the JDBC driver. Use Microsoft SQL Server JDBC drivers and enable XA connections:

    1.  Download and install the Microsoft SQL Server JDBC driver; see [Microsoft Download Center](http://www.microsoft.com/downloads) for information.
    2.  Copy the sqljdbc\_xa.dll file from the xa sub-directory to the following directory of the SQL Server installation:
        -   Microsoft SQL Server 2012: C:\\Program Files\\Microsoft SQL Server\\MSSQL11.MSSQLSERVER\\MSSQL\\Binn
        -   Microsoft SQL Server 2014: C:\\Program Files\\Microsoft SQL Server\\MSSQL12.MSSQLSERVER\\MSSQL\\Binn
        -   Microsoft SQL Server 2016: C:\\Program Files\\Microsoft SQL Server\\MSSQL13.MSSQLSERVER\\MSSQL\\Binn
    3.  Start the database server.
    4.  Ensure that the Distributed Transaction Coordinator is started. Verify this status in the list of services in the Computer Management console.
    5.  Start the Microsoft SQL Server Management Studio and connect to the local database engine as the system administrator, sa.
    6.  Select **File** \> **Open** \> **File** and select xa\_install.sql from the sub-directory of the downloaded and extracted JDBC driver.
    7.  Run the script by Select **Query** \> **Execute** to run the script.

        **Note:** Ignore any warnings that say that stored procedures cannot be found.

    8.  To grant permission to a specific user to participate in distributed transactions with the JDBC driver, add the user to the SqlJDBCXAUser role.
5.  Complete the following steps to enable XA Transactions in Windows™ Component Services:

    1.  Choose **Component Services** of the **Administrative Tools**.

    2.  Expand the tree view to locate the computer where you want to turn on support for XA transactions.

        For example, My Computer.

    3.  Display the menu for the computer name and click **Properties**.

    4.  Click **Options** and tune the Transaction Timeout. The minimum requirement is 180 seconds.

    5.  Click **OK** to save your changes.

    6.  Expand **Component Services,** \> **Computers,** \> **My Computer,** \> **Distributed Transaction Coordinator.**

    7.  Right-click **Local DTC** and then select **Properties**.

    8.  Click the **Security tab** on the Local DTC Properties dialog box.

    9.  Select the **Enable XA Transactions** check box, and then click **OK**. This action causes a MS DTC service restart.

6.  Start SQL Server.

7.  Connect at least one user to the SQL Server instance.

    A user can be granted permission to use several schema names, so a single user for each instance is sufficient.


Use the Configuration Wizard to set up and configure the database to work with HCL Portal. You can use the wizard to create custom scripts that you or your database administrator can use to configure the database. You can also use the wizard to automatically set up and configure the database. The wizard creates instructions and scripts that are based on your selections and provided data.

When you use the wizard, you provide information about the database for your environment.

**Note:** Before you enter your database name \(dbdomain.DbName\) in the Configuration Wizard, check your database documentation for restrictions on character length.

You cannot use the Database Transfer option in the configuration wizard to assign custom table spaces on your database server. You can perform manual steps to assign custom table spaces.


