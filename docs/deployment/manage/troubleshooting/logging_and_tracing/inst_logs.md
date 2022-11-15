# Installation and migration logs

Learn about the different log files that HCL Digital Experience provides to help administrators identify and correct problems with installation and migration.

## Installation log files

The IBM® Installation Manager controls the HCL Digital Experience installation log files. The IBM Installation Manager records any errors or warnings that occur during the installation. The IBM Installation Manager stores all logs in a centralized location and the logs pertaining to HCL Digital Experience can be found there. Typically these logs are found in the following directory:

-   AIX® and Linux™: /var/ibm/InstallationManager/logs
-   Windows™: C:\\ProgramData\IBM\Installation Manager\logs

The IBM Installation Manager retains logs from all installations and uninstallations that it does for all products. You can review your entire history. The IBM Installation Manager has a built-in function that you can use to view the logs. On the IBM Installation Manager main page, click **File > View log**. You can also use your web browser to view the index.xml file in the log directory.

## Migration log files

Unless noted otherwise, migration log files are in the following directory:

-   AIX® and Linux™: wp_profile_root/logs
-   Windows: wp_profile_root\logs

The table lists each file, describes the file content, and recommends when to check the file for information that might help troubleshooting migration problems.

|Log file name|Description|Problem symptoms|
|-------------|-----------|----------------|
|`ConfigTrace.log`|Contains information that is generated each time a ConfigEngine task is run, including trace information that is generated during migration. This file is in wp_profile_root/ConfigEngine/log.|Check this log if migration stops before successful completion.|
|`upgradeConfigEngineTrace.log`|Contains trace information that is generated when the ConfigEngine tool is upgraded. This file is in wp_profile_root/ConfigEngine/log|Check this log if errors occur when you run the upgradeConfigEngine tool.|

|Log file name|Description|Problem symptoms|
|-------------|-----------|----------------|
|`Job logs of migration jobs.`|Contain trace information that is generated during the execution of the migration jobs.|Check these files if there are problems with a specific migration step.|
|`en.runningNumber.log`, `trace.runningNumber.log`|Contains trace messages of the Web Content Manager migration tasks. These files are in the directory PortalServer_root/wcm/migration/log.|Check this log for errors that are generated during migration.|
|`ConfigTrace.log`|Contains trace information that is generated during migration. This file is in wp_profile_root/ConfigEngine/log.|Check this log if migration stops before successful completion.|
|`upgradeConfigEngineTrace.log`|Contains trace information that is generated when the ConfigEngine tool is upgraded. This file is in wp_profile_root/ConfigEngine/log.|Check this log if errors occur when you run the upgradeConfigEngine tool.|

To set tracing for the migration plug-in com.ibm.wp.was.plugin.jar file, which you use to migrate the Deployment Manager and nodes, specify com.ibm.wp.migration.*=all.


