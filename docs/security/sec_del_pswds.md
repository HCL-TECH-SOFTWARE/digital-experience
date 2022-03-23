# Deleting passwords from properties files 

The configuration tasks might require you to write security-sensitive information, such as passwords, into multiple properties files. When you no longer need this security-sensitive information for your configuration, you should remove them and move the files to a safe place or set the file permissions so that only authorized users can read them.

**z/OS only:** Job **EJPSDPW** is generated when you generate the instructions for the **Basic Portal Configuration**. Run this job to remove the passwords from the configuration scripts.

Complete the following steps to delete passwords and other security-sensitive information from the properties files:

**Note:** After completing the tasks to clean up the work directory and delete the passwords, you might find that in order to successfully perform additional configuration tasks, you need these passwords. Some tasks require you to add the passwords back to the wkplc.properties, wkplc\_comp.properties, wkplc\_dbdomain.properties, and wkplc\_sourceDb.properties files while other tasks allow you to specify the passwords on the command line using the –D flag. Refer to the configuration task documentation to determine which method is required.

1.  Complete the following steps to access the HCL Portal configuration directory:

    |Operating system|Steps|
    |----------------|-----|
    |Windows™|Complete the following steps to access the configuration directory:    1.  Open a command prompt.
    2.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory.
|
    |AIX®SolarisLinux™|Complete the following steps to access the configuration directory:    1.  Open a terminal session.
    2.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
|
    |IBM® i|Complete the following steps to access the configuration directory:    1.  Type STRQSH on an OS/400 command line to start the Qshell Interpreter.
    2.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
|

2.  Remove the work directory that was created during the installation:

    -   Windows: ConfigEngine.bat cleanup-work-dir -DWasPassword=password
    -   AIXSolarisLinux: ./ConfigEngine.sh cleanup-work-dir -DWasPassword=password
    -   IBM i: ConfigEngine.sh cleanup-work-dir -DWasPassword=password
    **Note:** Before running additional tasks, check the output for any error messages and, if instructed, correct any items before rerunning the task.

3.  Enter the following commands from the configuration directory to remove all passwords from the wkplc.properties, wkplc\_comp.properties, wkplc\_sourceDb.properties, and wkplc\_dbdomain.properties files:

    -   Windows: ConfigEngine.bat delete-passwords -DWasPassword=password
    -   AIXSolarisLinux: ./ConfigEngine.sh delete-passwords -DWasPassword=password
    -   IBM i: ConfigEngine.sh delete-passwords -DWasPassword=password
    **Note:** Before running additional tasks, check the output for any error messages and, if instructed, correct any items before rerunning the task.


**Parent topic:**[Securing](../security/securing_wp.md)

**Related information**  


[Reference: Configuration properties ](../properties/properties.md)

