# Prepare IBM DB2 for i

DB2 is integrated with IBM i. However, the databases and users that are required for HCL Portal must be created.

-   Ensure the database that you plan to use is supported by this version of HCL Portal. Refer to the list of supported databases in the HCL Portal detailed system requirements.

Use the Configuration Wizard to set up and configure the database to work with HCL Portal. You can use the wizard to create custom scripts that you or your database administrator can use to configure the database. You can also use the wizard to automatically set up and configure the database. The wizard creates instructions and scripts that are based on your selections and provided data.

When you use the wizard and provide information about the database for your environment, be aware of the following considerations:

-   If you choose to use one database to store all HCL Portal, Member Manager, and content publishing information, only one user profile is required. Additional user profiles are necessary only if using multiple IBM® i systems or separate databases are required.
-   Before you enter your database name (`dbdomain.DbName`) in the Configuration Wizard, check your database documentation for restrictions on character length.
-   The Configuration Wizard uses JDBC type 4 drivers by default. The examples in the Configuration Wizard apply only to JDBC type 4 drivers. You can change the default selection in the Configuration Wizard to JDBC type 2 during step 2, Customize Values. If you select JDBC type 2, apply these examples to your configuration:

    |Field label in Configuration Wizard|Example value|
    |-----------------------------------|-------------|
    |**Database name**|*LOCAL/wpsdb|
    |**Database URL**|jdbc:db2:*LOCAL/wpsdb|
    |**DB2 for IBM i library**|/QIBM/ProdData/OS400/Java400/ext/db2_classes16.jar|
    |**DB2 for IBM i driver class name**|com.ibm.db2.jdbc.app.DB2Driver|



