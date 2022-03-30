# Migrating an HCL Portal stand-alone server to IBM WAS 9.0.5

You can migrate your HCL Portal profile to WebSphere Application Server 9.0.5. Two options exist for this migration process: local or remote.

Ensure that you migrate your Search Collection before you migrate your HCL Portal server.

**Note:**

-   **For a local migration only**: Install the latest WebSphere Application Server version on the same server where HCL Portal 9.0 is installed.
-   **For a remote migration only**: Install HCL Portal 9.0 with the latest WebSphere Application Server on a separate server, which will be the target server for the migration. In both scenarios, make a copy of the source database to use on the target server. The remote migration is a better option because it leaves the source migration environment intact. For a local migration, the source migration profile is no longer usable after the migration.

For the purposes of these instructions, the following terms are used:

-   **v85\_wp\_profile\_name**

    This term refers to the original HCL Portal profile on the WebSphere Application Server 8.5.5.5 or higher installation.

-   **v90\_wp\_profile\_name**

    This term refers to the new HCL Portal profile on the WebSphere Application Server 9.0 installation.

-   **v85\_wp\_profile\_path**

    This term refers to the full path to the HCL Portal 8.5 profile.

-   **v90\_wp\_profile\_path**

    This term refers to the full path to the HCL Portal 9.0 profile.

-   **v85\_was\_root\_path**

    This term refers to the full path to the WebSphere Application Server 8.5.5.5 or higher installation.

-   **v90\_was\_root\_path**

    This term refers to the full path to the WebSphere Application Server 9.0.5 or higher installation.


1.  **For a local migration only:** Install WebSphere Application Server 9.0.5. **For a remote migration only:** Install HCL Digital Experience 9.5 on the remote target server. During installation on the target system, use the same WebSphere Application Server, Portal Server, and wp\_profile directory paths as the source server.

2.  Create a base profile on the target WebSphere Application Server 9.0.5 by using the manageprofiles command line option.

    **Important:**

    -   The WebSphere Application Server 9.0.5 migration is different from the standard HCL Digital Experience migration in that references in the source environment are updated to point to the target WebSphere Application Server 9.0.5 environment.
    -   Use the exact same cell name, and node name that you used for the HCL Portal 9.5 and WebSphere Application Server 9.0.5 installation.
    -   AIX®: `./manageprofiles.sh -create -defaultPorts -enableAdminSecurity false -profileName -profilePath -templatePath /profileTemplates/default -nodeName source\_node\_name -cellName source\_cell\_name -hostName host\_name -isDefault -omitAction samplesInstallAndConfig defaultAppDeployAndConfig`
    -   Linux™: `./manageprofiles.sh -create -defaultPorts -enableAdminSecurity false -profileName -profilePath -templatePath /profileTemplates/default -nodeName source\_node\_name -cellName source\_cell\_name -hostName host\_name -isDefault -omitAction samplesInstallAndConfig defaultAppDeployAndConfig`
    -   Windows™: `manageprofiles.bat -create -defaultPorts -enableAdminSecurity false -profileName -profilePath -templatePath /profileTemplates/default -nodeName source\_node\_name -cellName source\_cell\_name -hostName host\_name -isDefault -omitAction samplesInstallAndConfig defaultAppDeployAndConfig`
    Where the following values are set:

    -   **source\_node\_name**

        The node name on the source installation.

    -   **source\_cell\_name**

        The cell name on the source installation.

    -   **host\_name**

        The host name of the environment.

3.  Open a command prompt.

    **Note:** If you are instructed to open a properties file, they are ASCII files. Open them with the appropriate tool.

4.  **For a local migration only:** Change to the source v85\_wp\_profile\_path/ConfigEngine directory. Then, run the install-wp-migration-files task to install HCL Digital Experience-specific files into the WebSphere Application Server 9.0.5 installation:

    **Note:** Ensure that the file folder that contains the source binary files is read/write enabled. If the folder is read only, the install-wp-migration-files task fails.

    -   AIX: `./ConfigEngine.sh install-wp-migration-files -DNewWasLocation= -DWasPassword=password`
    -   Linux: `./ConfigEngine.sh install-wp-migration-files -DNewWasLocation= -DWasPassword=password`
    -   Windows: `ConfigEngine.bat install-wp-migration-files -DNewWasLocation= -DWasPassword=password`
    **Note:**

    -   If this step fails, ConfigEngine might not be working. To fix this error, restore the ConfigEngine.migration.bak file that was created in the ConfigEngine root directory. Change ConfigEngine.migration.bak to ConfigEngine.sh or ConfigEngine.bat, depending on your operating system.

        **Note:** If ConfigEngine.migration.bak was not created, the failure occurred before the file was changed. Therefore, ConfigEngine should work.

    -   For IBM i, the following error can be ignored: `ConfigEngine.sh: 001-0050 Syntax error on line 252: token "fi" not expected`.
5.  Ensure that the OSGi cache was cleared from the new WebSphere Application Server 9.0 installation by running the following command from the /bin directory:

    -   AIX: `./osgiCfgInit.sh -all`
    -   Linux: `./osgiCfgInit.sh -all`
    -   Windows: `osgiCfgInit.bat -all`
6.  **For a remote migration only:** On the HCL Portal 9.0 server, run the following command to create the PORTAL\_V8.5.0.0\_WAS\_V90\_OS.arch\_RemoteMigrSupport.jar file. For example, the file might be PORTAL\_V8.5.0.0\_WAS\_V90\_windows.x86\_RemoteMigrSupport.jar.

    -   AIX: `cd PortalServer_root/bin ./genRemMigPkg.sh remote\_zip\_dir`
    -   Linux: `cd PortalServer_root/bin ./genRemMigPkg.sh remote\_zip\_dir`
    -   Windows: `cd PortalServer_root\bin genRemMigPkg.bat remote\_zip\_dir`
    Where `remote\_zip\_dir` is an existing directory that is used to contain the generated file. Make sure that you specify the full path to the directory. Copy the PORTAL\_V8.5.0.0\_WAS\_V90\_OS.arch\_RemoteMigrSupport.jar file from the HCL Portal target server to the HCL Portal source server. Extract the JAR file into a working directory. For example, extract PORTAL\_V8.5.0.0\_WAS\_V90\_linux.amd64\_RemoteMigrSupport.jar.

    **Linux only:** Ensure that read and run permissions are set on the extracted files. For example: run `chmod -R 755 supp_dir`.

7.  On the source HCL Portal server, complete the following steps to prepare the HCL Digital Experience profile for the WASPreUpgrade command.

    1.  Uninstall any unnecessary applications.

    2.  Delete backup and uninstalled applications.

    3.  Delete any old large log files or temp files that are no longer needed, which might require the HCL Portal Server to be stopped. The following locations are for common temp files:

        -   /temp/
        -   /wstemp/
        -   /config/temp/
8.  The WASPreUpgrade and WASPostUpgrade commands that are used in HCL Portal migration use much memory and might result in an OutOfMemoryException. To prevent this error from happening, complete the following steps:

    1.  Ensure that you are using a large enough heap size. Generally, using 2 GB heap size is sufficient, specified by using the `-javaoption -Xmx2048m` variable when you run WASPreUpgrade or WASPostUpgrade commands. Increase the heap size by increasing the -Xmx2048m variable. A possible value might be -Xmx4096m.

    2.  Ensure that the size of the HCL Digital Experience profile was minimized by deleting unnecessary files. In most cases, the HCL Portal profile \(wp\_profile\) should not be larger than 2 GB. Search for files larger than 10 MB to find any possible files that can be contributing to a large profile size.

        For example:

        -   In Linux you can use the following command to find files larger than 10 MB: `> find . -type f -size +10000k -exec ls -lh {} \; | awk '{ print $9 ": " $5 }'`.
        -   In Windows, you can run the following search in Windows Explorer: `*.* size:> 10MB`
9.  Stop HCL Portal before you run the WASPreUpgrade command.

10. Set the file descriptor limit to at least 20480.

    ```
    ulimit -n 20480
    ```

11. Set the stack limit to at least 65536.

    ```
    ulimit -s 65536
    ```

12. AIX only: Use the following steps to increase the maximum length of the command line with environment variables:

    1.  Run the following command to query the system attributes:

        ```
        lsattr -EH -l sys0 | grep ncargs
        ```

        The command returns a value similar to the following example:

        ```
        ncargs  **256**  ARG/ENV list size in 4K byte blocks  True
        ```

    2.  If the ncargs value is less than 512, run the following command to increase the value:

        ```
        chdev -l sys0 -a ncargs=1024
        ```

13. **For a local migration only**: Run the WASPreUpgrade command from the /bin directory. **For a remote migration only**: Run the `WASPreUpgrade` command from the working\_directory/bin directory that contains the remote migration package that is copied earlier. Add the extra parameter -machineChange true.

    -   AIX: `./WASPreUpgrade.sh temp\_dir -javaoption -Xmx2048m -oldProfile -username was\_admin\_user -password was\_admin\_user\_pswrd`
    -   Linux: `./WASPreUpgrade.sh temp\_dir -javaoption -Xmx2048m -oldProfile -username was\_admin\_user -password was\_admin\_user\_pswrd`
    -   Windows: `WASPreUpgrade.bat temp\_dir -javaoption -Xmx2048m -oldProfile -username was\_admin\_user -password was\_admin\_user\_pswrd`
    Where the following values are set:

    -   **temp\_dir**

        Temporary directory where the backup is stored.

    **Note:**

    -   If you are running this command on Windows, the temp\_dir cannot have spaces in the path.
    For example, your command might look like: `./WASPreUpgrade.sh /opt/HCL/wasMigrateBackup /opt/HCL/WebSphere/AppServer -javaoption -Xmx2048m -oldProfile -username was\_admin\_user -password was\_admin\_user\_pswrd`

14. **For a remote migration only**: Compress and copy the backup that is created by the `WASPreUpgrade` command from the source server to the remote target server. Extract the backup into a temporary directory such as temp\_dir.

15. **For a local migration only**: Run the `WASPostUpgrade` command from the /bin directory on the local server. **For a remote migration only:** Run the `WASPostUpgrade` command from the /bin directory on the remote target server. The `WasPostUpgrade` command migrates the backed-up source profile into the new profile.

    **Note:** If security is enabled on your profile, add the `-username was\_userid -password was\_userid\_password` parameters to your WASPostUpgrade task.

    -   AIX: `./WASPostUpgrade.sh temp\_dir -profileName -oldProfile -javaoption -Xmx2048m`
    -   Linux: `./WASPostUpgrade.sh temp\_dir -profileName -oldProfile -javaoption -Xmx2048m`
    -   Windows: `WASPostUpgrade.bat temp\_dir -profileName -oldProfile -javaoption -Xmx2048m`
    For example, your command might look like: `./WASPostUpgrade.sh /opt/IBM/wasMigratedBackup -profileName wp_profile -oldProfile wp_profile -javaoption -Xmx2048m`.

    If the WASPreUpgrade was successful, but the WASPostUpgrade command results in an error, complete the following steps:

    1.  Check that only one profile exists in the backup profile.

    2.  If necessary, delete the search collection to decrease the data size.

    3.  Move JCR Data during migration.

        **Note:** The Java™ Content Repository might store index-related files in sub-directories in the WebSphere® profile, such as jcr, that can use much space. This data is not altered by the migration process, so it can be temporarily moved out of the old profile or the backup directory in preparation for migration. Move the directory into the new profile after migration completes.

    4.  Ensure that no paths exist with the “:” character. The character might cause problems for WASPreUpgrade and WASPostUpgrade commands.

16. If the source and target profile names are not the same, in the Source ConfigEngine path, run the action-copy-ce-script-native-encoding task:

    **Note:** The source ConfigEngine path should be in the same path as the PortalServer and AppServer paths. Do not run this task from the ConfigEngine path that is located within the source profile.

    -   AIX: `./ConfigEngine.sh -profileName action-copy-ce-script-native-encoding -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux: `./ConfigEngine.sh -profileName action-copy-ce-script-native-encoding -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows: `ConfigEngine.bat -profileName action-copy-ce-script-native-encoding -DWasPassword=password -DPortalAdminPwd=password`
17. Disable syndication and Portal search in your source environment.

18. Create a copy of the HCL Digital Experience source database. Refer to your database documentation for instructions on how to create the backup.

19. Modify the wkplc\_dbdomain.properties file on the HCL Portal target server to point to the database copy.

20. Modify the following properties files so that the parameters point to the new / directory locations:

    1.  From the /ConfigEngine/properties directory:

        -   Verify that the DbLibrary parameter in the wkplc\_dbtype.properties file points to the correct JDBC driver class. The value is either .zip or .jar. For example: /derby/lib/derby.jar.
        -   Verify that the WpsInstallLocation parameter in the wkplc.properties file points to the installation location of HCL Portal. For example: the value might be the /opt/HCL/PortalServer directory.
        -   Verify that the administrative passwords in the wkplc\_dbdomain.properties file were not deleted by the fix pack.
        -   Verify that the WasRemoteHostName, WasSoapPort, WpsHostName properties in the wkplc.properties are set to the correct values.
    2.  **For a local migration only**: From the /PortalServer directory, modify the following parameters in the wps.properties file:

        -   WasRootDir=/
        -   ProfileDirectory=
21. Open a command prompt and change to the /ConfigEngine directory.

22. Run the following command:

    -   AIX: `./ConfigEngine.sh validate-database -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux: `./ConfigEngine.sh validate-database -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows: `ConfigEngine.bat validate-database -DWasPassword=password -DPortalAdminPwd=password`
23. Run the following command to re-create your data sources:

    -   AIX: `./ConfigEngine.sh connect-database -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux: `./ConfigEngine.sh connect-database -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows: `ConfigEngine.bat connect-database -DWasPassword=password -DPortalAdminPwd=password`
24. Run the following post-was-migration-update command:

    -   AIX: `./ConfigEngine.sh post-was-migration-update -DWasPassword=password -DPortalAdminPwd=password -DoldProfileLocation=v85\_wp\_profile\_path`
    -   Linux: `./ConfigEngine.sh post-was-migration-update -DWasPassword=password -DPortalAdminPwd=password -DoldProfileLocation=v85\_wp\_profile\_path`
    -   Windows: `ConfigEngine.bat post-was-migration-update -DWasPassword=password -DPortalAdminPwd=password -DoldProfileLocation=v85\_wp\_profile\_path`
25. Start the HCL Portal server.

    **Note:** If the WebSphere Application Server migration fails:

    -   Refer to the job log in the WebSphere Application Server temporary directory to troubleshoot WebSphere Application Server migration errors.
    -   Rerun the install-wp-migration-files command from step 3.
26. After you migrate your profile to WebSphere Application Server 9.0.5, the Configuration Wizard in the v85\_AppServer root/profiles/cw\_profile directory is still usable. If you want to have the wizard also running on WebSphere Application Server 9.0.5, run the following command from the /ConfigEngine directory.

    -   AIX: `./ConfigEngine.sh create-config-wizard -DWizardUserid=userID -DWizardPassword=password -DWasPassword=password`
    -   Linux: `./ConfigEngine.sh create-config-wizard -DWizardUserid=userID -DWizardPassword=password -DWasPassword=password`
    -   Windows: `ConfigEngine.bat create-config-wizard -DWizardUserid=userID -DWizardPassword=password -DWasPassword=password`

**Parent topic:**[Migrating to IBM WAS 9.0.5 ](../was/ug_instwas95.md)

