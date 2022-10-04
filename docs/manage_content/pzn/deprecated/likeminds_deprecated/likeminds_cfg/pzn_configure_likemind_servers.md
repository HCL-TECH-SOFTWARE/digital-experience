# Configuring LikeMinds

Use a suitable database modification tool or edit the likemindsdb.properties file to configure your LikeMinds server installation.

Set the following general lps_cfg parameter information for the LikeMinds server installation:

-   Basic server information
-   Scheduling LikeMinds events
-   Server load management
-   Cache behavior
-   Recommendation behavior

All these parameters are set in the likemindsdb.properties file. This file is in the directory wp_profile_root/pzn/config/runtime/likemindsdb.properties. The file is in ASCII. To edit it, use an ASCII editor.

LikeMinds stores its configuration information in the lps_cfg table of its database, which is initialized with the data in the likemindsdb.properties file. To update this configuration, you can update this file and reload the configuration data, or you can use any database modification tool, to modify the LikeMinds configuration parameters. To update configuration values, complete these steps:

1.  Stop the HCL Portal server.
2.  Edit the `likemindsdb.properties` file.
3.  Choose the appropriate task to update the configuration:
    -   AIX® and Linux™: `./ConfigEngine.sh likeminds-load-config -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat likeminds-load-config -DWasPassword=password`
    -   Use the DB modification tool to update the configuration directly.
4.  Start the HCL Portal server.



