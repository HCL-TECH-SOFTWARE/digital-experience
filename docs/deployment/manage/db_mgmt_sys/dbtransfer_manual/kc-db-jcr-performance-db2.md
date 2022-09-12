# Database transfer: Improve database response time for your database domains

Manual steps from the Configuration Wizard are included in HCL Digital Experience Product Documentation for reference and for advanced users. The procedure includes variables and steps for different databases. When you use the wizard to configure your deployment, it replaces the variable with information that you provided in the wizard. It also shows only the steps that are specific to your environment. The instructions that the wizard generates are specific to your environment.

**Attention:** All steps for all database environments are included without consideration for your environment. Use the Configuration Wizard to generate custom instructions for your environment.

After transferring the database tables, run the `dbms_stats.gather_schema_stats` command to avoid slow database response.

Run the following commands for your JCR domain. You might also want to run the following commands on all of your database domains, if there are large amounts of data. To run the commands on domains other than JCR, you must replace the `jcr.DbName` and `jcr.DbUser` with the specific domain for which you plan to run the commands. For example, `release.DbName` or `feedback.DbName`.

**Note:** jcr.DbUser in the following command refers to the schema owner of the JCR database objects.

1.  Run the following commands.

    `Start SQL*Plus and log in to the jcr.DbName database as the jcr.DbUser user SQL> execute dbms_stats.gather_schema_stats(ownname=> 'jcr.DbUser', cascade=> TRUE); SQL > commit; Exit sqlplus`



