# Database transfer: Set up JCR collation

Manual steps from the Configuration Wizard are included in HCL Digital Experience Product Documentation for reference and for advanced users. The procedure includes variables and steps for different databases. When you use the wizard to configure your deployment, it replaces the variable with information that you provided in the wizard. It also shows only the steps that are specific to your environment. The instructions that the wizard generates are specific to your environment.

**Note:** All steps for all database environments are included without consideration for your environment. Use the Configuration Wizard to generate custom instructions for your environment.

JCR collation is recommended when the language locales of your users do not natively collate correctly in the DB2 database and when language locale correct ordering is important.

1.  Stop the HCL server.

2.  Copy files from the HCL server to a temporary directory on the DB2 server.

    -   ```
${WpsInstallLocation}/jcr/wp.content.repository.install/lib/wp.content.repository.install.jar
```

    -   ```
${WasUserHome}/PortalServer/jcr/config/registerCollationUDFTemplate.sql
```

3.  Set up collation on the database where the JCR domain is located. Change to this directory:

    ```
    db2\_instance\_owner\_home/sqllib/function
    ```

4.  Enter this command:

    ```
    db2home/sqllib/java/jdk/bin/jar -xvf ${wf.ejp.collationTempDir}/wp.content.repository.install.jar icm/CollationUDF.class 
    ```

5.  Change to the temporary directory where you copied the files in a previous step. For example, you can use this temporary directory on the DB2 server:

    ```
    ${wf.ejp.collationTempDir}
    ```

6.  Open the file `registerCollationUDFTemplate.sql`, and change the multiple

7.  Connect to the JCR database.

    ```
    db2 connect to ${jcr.DbName} user ${jcr.DBA.DbUser} using ${jcr.DBA.DbPassword}
    ```

8.  Enter this command to run the script:

    ```
    db2 -tvf ${wf.ejp.collationTempDir}/registerCollationUDFTemplate.sql
    ```

9.  Disconnect from the JCR database.

10. Restart the DB2 instance.

11. Verify that the UDF is registered properly. Log in as `${jcr.DbUser}`.

12. Open a DB2 terminal window.

13. Connect to the database that contains JCR domain:

    ```
    db2 connect to ${jcr.DbName} user ${jcr.DbUser} 
           using ${jcr.DbPassword}
    ```

14. When you have connected to the JCR database, verify that the UDF is registered properly. To verify the UDF registration, run this command:

    ```
    db2 values ${jcr.DbSchema}.sortkeyj('abc','en')
    ```

15. Disconnect from the DB2 terminal window:

    ```
    db2 disconnect all db2 terminate
    ```

16. Start the HCL server.

17. Update the collation configuration options. Log in to the WebSphere Integrated Solutions Console.

18. Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **JCR ConfigService PortalContent** \> **Custom properties**.

19. Add or update the following properties as necessary:

    -   **Enable/Disable collation support for all DB2 platforms\(LUW, Z, I\), this is disabled \(false\) by default**
        -   Name: `jcr.query.collation.db2.enabled`
        -   Value: `true`
        -   Type: `java.lang.String`
    -   **Name: jcr.query.collation.en**
        -   Value: `en`
        -   Type: `java.lang.String`
    -   **Name: jcr.quiery.collation.sv**
        -   Value: `sv`
        -   Type: `java.lang.String`
    -   **Name: jcr.quiery.collation.zh**
        -   Value: `zh`
        -   Type: `java.lang.String`
    -   **Name: jcr.quiery.collation.de**
        -   Value: `de`
        -   Type: `java.lang.String`
    -   **Name: jcr.quiery.collation.da**
        -   Value: `da`
        -   Type: `java.lang.String`
    -   **Name: jcr.quiery.collation.hu**
        -   Value: `hu`
        -   Type: `java.lang.String`
    -   **Name: jcr.quiery.collation.jp**
        -   Value: `jp`
        -   Type: `java.lang.String`
20. To apply your settings, stop and restart HCL Portal.


**Parent topic:**[Manual Steps: Database Transfer option in the Configuration Wizard](../eua-workflows/kc-db-parent.md)

**Related information**  


[JCR search service configuration parameters](../admin-system/jcr_srrcfgsrvc.md)

