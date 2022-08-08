# Database transfer: Create DB2 database

Manual steps from the Configuration Wizard are included in HCL Digital Experience Product Documentation for reference and for advanced users. The procedure includes variables and steps for different databases. When you use the wizard to configure your deployment, it replaces the variable with information that you provided in the wizard. It also shows only the steps that are specific to your environment. The instructions that the wizard generates are specific to your environment.

Ensure your DB2® server is already installed and running.

**Attention:** All steps for all database environments are included without consideration for your environment. Use the Configuration Wizard to generate custom instructions for your environment.

1.  Instructions for AIX, HP-UX, Linux, and Solaris
2.  Copy the JDBC Driver JAR files from your database server to your portal server.

    Example location:

    `C:\\\\Program Files\\\\IBM\\\\SQLLIB\\\\java\\\\db2jcc4.jar`

    `C:\\\\Program Files\\\\IBM\\\\SQLLIB\\\\java\\\\db2jcc\_license\_cu.jar`

    Place the files on the portal server in the directory that you specified for database library files.

    `$\{db2.DbLibrary\}``db2.DbLibrary`

3.  Log in as a DB2 system administrator with the required database privileges \(SYSADM or at a minimum SYSCTRL\).

    `su - ${release.DBA.DbUser}` `su - domain.DBA.DbUser`

4.  Copy the script that you downloaded for this step to the database server, and extract the file.

5.  Rename the file that you downloaded to include a `.sh` extension.

6.  Run the shell file on your database server.

    `/your\_database\_server\_file\_location/CreateDB2Database.sh`

    Example of the script that the Configuration Wizard generates.

    ```
    db2set DB2COMM=TCPIP
    db2set DB2_EVALUNCOMMITTED=YES
    db2set DB2_INLIST_TO_NLJN=YES
    db2 "UPDATE DBM CFG USING sheapthres 0"
    
    	
    db2 "CREATE DB WPSDB using codeset UTF-8 territory us PAGESIZE 8192"
    db2 "UPDATE DB CFG FOR WPSDB USING locktimeout 30"
    
    db2 "CONNECT TO WPSDB USER dba\_ID USING dba\_pwd"
    db2 "CREATE BUFFERPOOL ICMLSFREQBP4 SIZE 1000 AUTOMATIC PAGESIZE 4K"
    db2 "CREATE BUFFERPOOL ICMLSVOLATILEBP4 SIZE 16000 AUTOMATIC PAGESIZE 4K"
    db2 "CREATE BUFFERPOOL ICMLSMAINBP32 SIZE 16000 AUTOMATIC PAGESIZE 32K"
    db2 "CREATE BUFFERPOOL CMBMAIN4 SIZE 1000 AUTOMATIC PAGESIZE 4K"
    db2 "CREATE REGULAR TABLESPACE ICMLFQ32 PAGESIZE 32K BUFFERPOOL ICMLSMAINBP32"
    db2 "CREATE REGULAR TABLESPACE ICMLNF32 PAGESIZE 32K BUFFERPOOL ICMLSMAINBP32"
    db2 "CREATE REGULAR TABLESPACE ICMVFQ04 PAGESIZE 4K BUFFERPOOL ICMLSVOLATILEBP4"
    db2 "CREATE REGULAR TABLESPACE ICMSFQ04 PAGESIZE 4K BUFFERPOOL ICMLSFREQBP4"
    db2 "CREATE REGULAR TABLESPACE CMBINV04 PAGESIZE 4K BUFFERPOOL CMBMAIN4"
    db2 "CREATE SYSTEM TEMPORARY TABLESPACE ICMLSSYSTSPACE32 PAGESIZE 32K BUFFERPOOL ICMLSMAINBP32"
    db2 "CREATE SYSTEM TEMPORARY TABLESPACE ICMLSSYSTSPACE4 PAGESIZE 4K BUFFERPOOL ICMLSVOLATILEBP4"
    db2 "CREATE USER TEMPORARY TABLESPACE ICMLSUSRTSPACE4 PAGESIZE 4K BUFFERPOOL ICMLSVOLATILEBP4"
    db2 "DISCONNECT WPSDB"
    db2 "TERMINATE"
    db2 "UPDATE DB CFG FOR WPSDB USING logfilsiz 16000"
    db2 "UPDATE DB CFG FOR WPSDB USING logprimary 20"
    db2 "UPDATE DB CFG FOR WPSDB USING logsecond 50"
    db2 "UPDATE DB CFG FOR WPSDB USING logbufsz 500"
    db2 "UPDATE DB CFG FOR WPSDB USING DFT_QUERYOPT 5"
    ```

7.  Instructions for Windows
8.  Copy the JDBC Driver JAR files from your database server to your portal server.

    Example location:

    `C:\\\\Program Files\\\\IBM\\\\SQLLIB\\\\java\\\\db2jcc4.jar`

    `C:\\\\Program Files\\\\IBM\\\\SQLLIB\\\\java\\\\db2jcc\_license\_cu.jar`

    Place the files on the portal server in the directory that you specified for database library files.

    `$\{db2.DbLibrary\}``db2.DbLibrary`

9.  Log in as a DB2 system administrator. This DB2 system administrator must have the required database privileges \(SYSADM or at a minimum SYSCTRL\) to create your database. This user is typically a member of both the Administrators and DB2ADMNS groups.

10. Copy the script that you downloaded for this step to the database server, and extract the file.

11. Rename the file that you downloaded to include a `.bat` extension.

12. Run the batch file on your database server.

    `db2cmdadmin.exe -w C:\\your\_database\_server\_file\_location\\CreateDB2Database.bat`

    Example of the script is not available for Windows.


**Parent topic:**[Manual Steps: Database Transfer option in the Configuration Wizard](../eua-workflows/kc-db-parent.md)

