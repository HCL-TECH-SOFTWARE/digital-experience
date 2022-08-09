# Database transfer: Create database users and groups for DB2 for i

Manual steps from the Configuration Wizard are included in HCL Digital Experience Product Documentation for reference and for advanced users. The procedure includes variables and steps for different databases. When you use the wizard to configure your deployment, it replaces the variable with information that you provided in the wizard. It also shows only the steps that are specific to your environment. The instructions that the wizard generates are specific to your environment.

**Attention:** All steps for all database environments are included without consideration for your environment. Use the Configuration Wizard to generate custom instructions for your environment.

User and group names must comply with both the database management system software requirements and HCL Portal requirements.

The procedure is repeated for each portal database domain: release, community customization, jcr, feedback, and likeminds. The variable dbdomain represents the actual portal database domain name. You must also create group for each role. Configuration

1.  Create the database users and groups.

    Example of instructions that the Configuration Wizard generates.

    ```

    ```

    ```
    Create the database user profiles for the database domains on the operating system where IBM DB2 for i is installed. The wizard refers to the database user profile as the database configuration user. 
    
    The database user profile (database configuration user) must at least have *IOSYSCFG and *JOBCTL special authority with user class as *USER on the server where IBM DB2 for i is installed. 
    Use a different value for your database user profile than used to install HCL Portal. The administrator user profile might have more authority than is required and usually belongs to an individual. Ensure that the user and group names comply with both the database management system software requirements and HCL Portal requirements.
    
    Create the database configuration users for the database domains on the operating system.
    
        Create the release database configuration user. Use config_ID as the user ID when you create this user. 
    
        Create the community database configuration user. Use config_ID as the user ID when you create this user. 
    
        Create the customization database configuration user. Use config_ID as the user ID when you create this user. 
    
        Create the jcr database configuration user. Use config_ID as the user ID when you create this user. 
    
        Create the feedback database configuration user. Use config_ID as the user ID when you create this user. 
    
        Create the likeminds database configuration user. Use config_ID as the user ID when you create this user. 
    
    Create the database configuration groups for the database domains on the operating system where IBM DB2 for i is installed. See your operating system instructions for details on creating groups.
    
        Create the release database configuration group. Use WPBASCFG as the group name on your operating system.
    
        Create the community database configuration group. Use WPBASCFG as the group name on your operating system.
    
        Create the customization database configuration group. Use WPBASCFG as the group name on your operating system.
    
        Create the jcr database configuration group. Use WPJCRCFG as the group name on your operating system.
    
        Create the feedback database configuration group. Use WPPZNCFG as the group name on your operating system.
    
        Create the likeminds database configuration group. Use WPPZNCFG as the group name on your operating system.
    
    Assign your database user profile users (database configuration users) to the database configuration groups that you created. See your operating system instructions for details on adding users to groups.
    
    Create the database runtime users for the database domains on the operating system. Note: The database runtime user does not need any special authority with user class as *USER on the IBM i server where the DB2 is installed.
    
        Create the release database runtime user. Use runtime_ID as the user ID when you create this user. 
    
        Create the community database runtime user. Use runtime_ID as the user ID when you create this user. 
    
        Create the customization database runtime user. Use runtime_ID as the user ID when you create this user. 
    
        Create the jcr database runtime user. Use runtime_ID as the user ID when you create this user. 
    
        Create the feedback database runtime user. Use runtime_ID as the user ID when you create this user. 
    
        Create the likeminds database runtime user. Use runtime_ID as the user ID when you create this user. 
    
    Create the database runtime groups for the database domains on the operating system where DB2 is installed. See your operating system instructions for details on creating groups.
    
        Create the release database runtime group. Use WPBASRT as the group name on your operating system.
    
        Create the community database runtime group. Use WPBASRT as the group name on your operating system.
    
        Create the customization database runtime group. Use WPBASRT as the group name on your operating system.
    
        Create the jcr database runtime group. Use WPJCRRT as the group name on your operating system.
    
        Create the feedback database runtime group. Use WPPZNRT as the group name on your operating system.
    
        Create the likeminds database runtime group. Use WPPZNRT as the group name on your operating system.
    
    Assign your database runtime users to the database runtime groups that you created. See your operating system instructions for details on adding users to groups.
    ```


**Parent topic:**[Manual Steps: Database Transfer option in the Configuration Wizard](../eua-workflows/kc-db-parent.md)

