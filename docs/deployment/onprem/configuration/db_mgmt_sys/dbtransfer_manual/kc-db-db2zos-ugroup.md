# Database transfer: Create database configuration users and groups for DB2 for z/OS

Manual steps from the Configuration Wizard are included in HCL Digital Experience Product Documentation for reference and for advanced users. The procedure includes variables and steps for different databases. When you use the wizard to configure your deployment, it replaces the variable with information that you provided in the wizard. It also shows only the steps that are specific to your environment. The instructions that the wizard generates are specific to your environment.

**Attention:** All steps for all database environments are included without consideration for your environment. Use the Configuration Wizard to generate custom instructions for your environment.

1.  Download the script. This script is contained in a compressed file. Extract the file.

2.  Review the RACF commands that are contained in this script with your RACF administrator. Edit these commands as needed. For example, the RACF administrator might need to remove the ADDUSER commands if you already have database user IDs that are defined in your RACF.

3.  If you have a security product other than RACF, you must change the syntax in the RACF commands into the appropriate syntax for your security product.

4.  Run the RACF commands on z/OS in the order that is listed in the script.

    Example of the script that the Configuration Wizard generates.

    ```
    
    //*  RACF setup for database user IDs and schemas:
    ADDGROUP WPBASRT;
    ADDGROUP WPJCRRT;
    ADDGROUP WPPZNRT;
    ADDUSER runtime\_ID DFLTGRP(WPBASRT) NAME('WAS DB2 ACCESS USER')
    PW USER(runtime\_ID) NOINTERVAL
    ALU runtime\_ID PASSWORD(runtime\_pwd) NOEXPIRED
    CONNECT runtime\_ID GROUP(WPJCRRT)
    CONNECT runtime\_ID GROUP(WPPZNRT)
    ADDGROUP jcr SUPGROUP(group)
    CONNECT dbconfig\_ID GROUP(jcr)
    CONNECT runtime\_ID GROUP(jcr)
    ```


**Parent topic:**[Manual Steps: Database Transfer option in the Configuration Wizard](../eua-workflows/kc-db-parent.md)

