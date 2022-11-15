# Deleting passwords from properties files

The configuration tasks might require you to write security-sensitive information, such as passwords, into multiple properties files. When you no longer need this security-sensitive information for your configuration, you should remove them and move the files to a safe place or set the file permissions so that only authorized users can read them.

Complete the following steps to delete passwords and other security-sensitive information from the properties files:

!!!note
    After completing the tasks to clean up the work directory and delete the passwords, you might find that in order to successfully perform additional configuration tasks, you need these passwords. Some tasks require you to add the passwords back to the wkplc.properties, wkplc_comp.properties, wkplc_dbdomain.properties, and wkplc_sourceDb.properties files while other tasks allow you to specify the passwords on the command line using the –D flag. Refer to the configuration task documentation to determine which method is required.

1.  Complete the following steps to access the HCL Portal configuration directory:

    |Operating system|Steps|
    |----------------|-----|
    |Windows™|Complete the following steps to access the configuration directory: <br>   1.  Open a command prompt.<br> 2.  Change to the wp_profile_root\ConfigEngine directory.|
    |AIX® and Linux™|Complete the following steps to access the configuration directory:  <br>  1.  Open a terminal session.<br> 2.  Change to the wp_profile_root/ConfigEngine directory.|

2.  Remove the work directory that was created during the installation:

    -   Windows: `ConfigEngine.bat cleanup-work-dir -DWasPassword=password`
    -   AIX and Linux: `./ConfigEngine.sh cleanup-work-dir -DWasPassword=password`

    !!!note
        Before running additional tasks, check the output for any error messages and, if instructed, correct any items before rerunning the task.

3.  Enter the following commands from the configuration directory to remove all passwords from the wkplc.properties, wkplc_comp.properties, wkplc_sourceDb.properties, and wkplc_dbdomain.properties files:

    -   Windows: `ConfigEngine.bat delete-passwords -DWasPassword=password`
    -   AIX and Linux: `./ConfigEngine.sh delete-passwords -DWasPassword=password`

    !!!note
        Before running additional tasks, check the output for any error messages and, if instructed, correct any items before rerunning the task.


???+ info "Related information"  
    -   [Configuration properties](../../../deployment/manage/cfg_property_files/index.md)

