# Database transfer: Download the script and reset the check pending status on portal table spaces for DB2 for z/OS 

Manual steps from the Configuration Wizard are included in HCL Digital Experience Product Documentation for reference and for advanced users. The procedure includes variables and steps for different databases. When you use the wizard to configure your deployment, it replaces the variable with information that you provided in the wizard. It also shows only the steps that are specific to your environment. The instructions that the wizard generates are specific to your environment.

**Attention:** All steps for all database environments are included without consideration for your environment. Use the Configuration Wizard to generate custom instructions for your environment.

1.  Copy the downloaded script to the database server and extract it.

2.  Review the DB2® utilities that are contained in this script with your database administrator. Edit these utilities as needed.

3.  Run the DB2 utilities that are listed in this script.

4.  Use the SQL SELECT query that is created after you run the CHECK DATA commands to confirm that all of the CHECK PENDING states are resolved.


**Parent topic:**[Manual Steps: Database Transfer option in the Configuration Wizard](../eua-workflows/kc-db-parent.md)

