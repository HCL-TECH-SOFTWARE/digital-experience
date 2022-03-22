# DB2: Database transfer

Your portal is installed with an Apache Derby database. The database that is immediately available for use is good for demonstration and portlet and theme development environments. Otherwise, you must configure portal to use a production-level database. Use the Configuration Wizard to transfer the data and configure a new database server.

## Configuration Wizard

The primary Configuration Wizard options are based on your target configuration topology, such as a stand-alone server or a cluster. The database transfer option is included with both **Set Up a Stand-alone Server** and **Set Up a Cluster**. For the stand-alone server topology, run the database transfer option before you run the federated security option. For the cluster option, run the database transfer before you create your deployment manager profile.

For the **Do you want to transfer to one database or multiple databases or schemas** option, select **Single database** to configure one database with a single database user and a single data source. Select **Multiple databases or schemas** to configure multiple databases with different data sources and different users per schema. You can also use the multiple database option to configure a single database with different data sources and different users.

## Validation

Prevent a possible database transfer failure by validating your entries in the wizard. When you chose to validate settings for the Database Transfer option, field syntax and database connection validations are performed to prevent a possible failure before you run the configuration. Examples of fields that are validated include host name and port number. Examples of fields that are validated include database URL and database library fields.

Two types of validation are performed when you select to validate settings including field syntax and database connection validations.

Syntax validation checks that you:

-   Enter a valid port number in the range of 1 - 65535.
-   Use the correct format for your host name.
-   Enter a valid context root value
-   Use the correct JDBC format in the database URL fields.
-   Enter the correct path for your database library jar files.

The database connection validation checks that a connection can be made to your database server. The wizard can connect to your database server to validate the host name and port number values that you enter.

On the Database Settings panel, you can choose to turn validation on or off by selecting **Yes** or **No** to the **Connect to database server to validate settings** option. Select **No**, if you know that your parameters are correct and your database server is unavailable at the time of creating your instructions.

## Transferring data to a different database server

Depending on your environment, the wizard generates a configuration process. The following steps reflect all possible steps in the configuration process. The steps do not represent a literal configuration. The steps are provided as a reference.

If you click **View Step Command**, you can see the task and properties associated with each step in the wizard.

1.  Back up the properties files that the wizard uses during the configuration.
    -   **Condition**

        None

    -   **ConfigEngine task**

        backup-property-files-for-dbxfer

2.  Manual Step: Create the database users and groups.
    -   **Condition**

        None

    -   **ConfigEngine task**

        None

3.  Manual Step: Create the database user profile on IBM® DB2® for i.
    -   **Condition**

        None

    -   **ConfigEngine task**

        None

4.  Manual Step: Create the database runtime users and groups.
    -   **Condition**

        None

    -   **ConfigEngine task**

        None

5.  Manual Step: Create the database configuration users on DB2 for z/OS®.
    -   **Condition**

        None

    -   **ConfigEngine task**

        None

6.  Manual Step: Download the script and view instructions to delete existing databases.
    -   **Condition**

        None

    -   **ConfigEngine task**

        None

7.  Create your databases.
    -   **Condition**

        None

    -   **ConfigEngine task**

        create-database

8.  Manual Step: Download the script and run it on the database server to create your database.
    -   **Condition**

        Select to manually create your database.

    -   **ConfigEngine task**

        None

9.  Manual Step: Download the script and run it on the database server to create your database.
    -   **Condition**

        Select to manually create your database.

    -   **ConfigEngine task**

        None

10. Manual Step: Create your Oracle database.
    -   **Condition**

        None

    -   **ConfigEngine task**

        None

11. Manual Step: Download the script and view instructions to create your databases.
    -   **Condition**

        None

    -   **ConfigEngine task**

        None

12. Manual Step: Create the data directory, `data`, and the index directory, `index`, on your database server.
    -   **Condition**

        Select to manually create users and assign them permissions.

    -   **ConfigEngine task**

        None

13. Set up your database.

    \(Automatic Storage Management Users only\): If you have configured your database with Automatic Storage Management, you must perform additional manual instructions after you perform this step. Run the setup database script to create database schemas and users and grant privileges to database users. Then, go to [Oracle: Creating JCR table spaces \(Automatic Storage Management\)](oracle_create_tablespaces.md) to perform additional manual instructions.

    -   **Condition**

        None

    -   **ConfigEngine task**

        setup-database

14. Manual Step: Download the script and run it on the database server to set up your database.
    -   **Condition**

        Select to manually assign users permissions.

    -   **ConfigEngine task**

        None

15. Manual Step: Download the script and run it on the database server to set up your database.

    \(Automatic Storage Management Users only\): If you have configured your database with Automatic Storage Management, you must edit the script that you download for your environment before you run it on the database server.

    -   **Condition**

        Select to manually create users and assign them permissions.

    -   **ConfigEngine task**

        None

16. Manual Step: Download the script and run it on the database server to set up your database.
    -   **Condition**

        Select to manually create users and assign them permissions.

    -   **ConfigEngine task**

        None

17. Manual Step: Set up JCR collation for correct language locale order.
    -   **Condition**

        Select to have advanced database collation support.

    -   **ConfigEngine task**

        None

18. Manual Step: Restart the DB2 server.
    -   **Condition**

        None

    -   **ConfigEngine task**

        None

19. Validate the database connection and environment.
    -   **Condition**

        None

    -   **ConfigEngine task**

        validate-database validate-database-environment

20. Stop the portal server.
    -   **Condition**

        collation support

    -   **ConfigEngine task**

        stop-portal-server

21. Transfer the database.
    -   **Condition**

        None

    -   **ConfigEngine task**

        database-transfer enable-profiles-check-managed package-profiles

22. Grant privileges to the database runtime users.
    -   **Condition**

        None

    -   **ConfigEngine task**

        grant-runtime-db-user-privileges

23. Manual Step: Download the script and run it on the database server to grant privileges to the runtime user.
    -   **Condition**

        Select to manually create users and assign them permissions.

    -   **ConfigEngine task**

        None

24. Manual Step: Download the script and run it to grant the database runtime user the appropriate privileges to work with database tables.
    -   **Condition**

        Select to manually create users and assign them permissions.

    -   **ConfigEngine task**

        None

25. Manual Step: Download the script and run it on the database server to grant privileges to database runtime users.
    -   **Condition**

        Select to manually create users and assign them permissions.

    -   **ConfigEngine task**

        None

26. Connect to your databases.
    -   **Condition**

        None

    -   **ConfigEngine task**

        None

27. Manual Step: Download the script and view instructions to reset the check pending status on portal table spaces.
    -   **Condition**

        None

    -   **ConfigEngine task**

        None

28. Reset the web content manager event log.
    -   **Condition**

        None

    -   **ConfigEngine task**

        None

29. Configure the JCR domain to support large files.
    -   **Condition**

        None

    -   **ConfigEngine task**

        datasource-enable-fully-materialize-lob-data

30. Manual Step: Improve database response time for your database that contains the JCR domain.
    -   **Condition**

        None

    -   **ConfigEngine task**

        None

31. Start the portal server.
    -   **Condition**

        None

    -   **ConfigEngine task**

        start-portal-server


## What to do next

You transferred your data from Apache Derby to your preferred database.

One quick way to test your database configuration is to log in and explore the site to validate the site is working as you expected.

Go to http://host\_name:port/context\_root/default\_portal\_home. For example, go to http://host\_name:10039/wps/portal.

Next, you can use other options to configure your environment more.

If you are setting up a stand-alone server environment, you can use the Enable Federated Security option to add an LDAP user registry.

If you are setting up a cluster environment, you can use the Create a Deployment Manager option to create a deployment manager profile that is augmented with HCL Portal resources.

