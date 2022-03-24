# Database transfer: Create database users and groups 

Manual steps from the Configuration Wizard are included in HCL Product Documentation for reference and for advanced users. The procedure includes variables and steps for different databases. When you use the wizard to configure your deployment, it replaces the variable with information that you provided in the wizard. It also shows only the steps that are specific to your environment. The instructions that the wizard generates are specific to your environment.

**Attention:** All steps for all database environments are included without consideration for your environment. Use the Configuration Wizard to generate custom instructions for your environment.

User and group names must comply with both the database management system software requirements and HCL Portal requirements.

The procedure is repeated for each portal database domain: release, community customization, jcr, feedback, and likeminds. The variable dbdomain represents the actual portal database domain name. You must also create group for each role. Configuration

1.  Create the database configuration users for the database domains on the operating system.

2.  Create the `${dbdomain}` `dbdomain` database configuration user. Use `${${dbdomain}.DbUser}` `dbdomain.DbUser` as the user ID when you create this user.

3.  Create the database configuration groups for the database domains on the operating system where your database is installed. See your operating system instructions for details on creating groups.

4.  Create the `${dbdomain}``dbdomain` database configuration group. Use `${${dbdomain}.DbConfigRoleName}``dbdomain.DbConfigRoleName` as the group name on your operating system.

5.  Assign your database configuration users to the database configuration groups that you created. See your operating system instructions for details on adding users to groups.

6.  Assign `${${dbdomain}.DbUser}``dbdomain.DbUser` to the `${${dbdomain}.DbConfigRoleName}` `dbdomain.DbConfigRoleName` .


**Parent topic:**[Manual Steps: Database Transfer option in the Configuration Wizard](../eua-workflows/kc-db-parent.md)

