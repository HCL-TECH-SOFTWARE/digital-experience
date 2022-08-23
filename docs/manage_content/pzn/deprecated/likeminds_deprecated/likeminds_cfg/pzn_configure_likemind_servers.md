# Configuring LikeMinds

Use a suitable database modification tool or edit the likemindsdb.properties file to configure your LikeMinds server installation.

Set the following general lps\_cfg parameter information for the LikeMinds server installation:

-   Basic server information
-   Scheduling LikeMinds events
-   Server load management
-   Cache behavior
-   Recommendation behavior

All these parameters are set in the likemindsdb.properties file. This file is in the directory `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/pzn/config/runtime/likemindsdb.properties`. The file is in ASCII. To edit it, use an ASCII editor.

LikeMinds stores its configuration information in the lps\_cfg table of its database, which is initialized with the data in the likemindsdb.properties file. To update this configuration, you can update this file and reload the configuration data, or you can use any database modification tool, to modify the LikeMinds configuration parameters. To update configuration values, complete these steps:

1.  Stop the HCL Portal server.
2.  Edit the `likemindsdb.properties` file.
3.  Choose the appropriate task to update the configuration:
    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh likeminds-load-config -DWasPassword=password
    -   IBM® i: ConfigEngine.sh likeminds-load-config -DWasPassword=password
    -   Windows™: ConfigEngine.bat likeminds-load-config -DWasPassword=password
    -   z/OS®: ./ConfigEngine.sh likeminds-load-config -DWasPassword=password
    -   Use the DB modification tool to update the configuration directly.
4.  Start the HCL Portal server.

-   **[Estimating database size \| LikeMinds configuration](../pzn/pzn_estimate_db_size.md)**  
The size of your database depends on your application, as well as the number of users and items. View some general guidelines for estimating the size of your database, but your results may vary.
-   **[Database performance \| LikeMinds configuration](../pzn/pzn_db_performance.md)**  
View some guidelines for performance optimization in your LikeMinds database.
-   **[Scheduling LikeMinds events](../pzn/pzn_schedule_likeminds_events.md)**  
 Use the lps.schedule setting to schedule events to be fired at specific dates and times.
-   **[Configuring the LikeMinds engines](../pzn/pzn_configure_likeminds_engines.md)**  

-   **[Specifying recommendation behavior](../pzn/pzn_specify_recommendation_behavior.md)**  
You can configure several parameters that affect the way the LikeMinds server generates recommendations.
-   **[Estimating database size \| LikeMinds configuration](../pzn/pzn_estimate_db_size.md)**  
The size of your database depends on your application, as well as the number of users and items. View some general guidelines for estimating the size of your database, but your results may vary.
-   **[Database performance \| LikeMinds configuration](../pzn/pzn_db_performance.md)**  
View some guidelines for performance optimization in your LikeMinds database.
-   **[Scheduling LikeMinds events](../pzn/pzn_schedule_likeminds_events.md)**  
 Use the lps.schedule setting to schedule events to be fired at specific dates and times.
-   **[Configuring the LikeMinds engines](../pzn/pzn_configure_likeminds_engines.md)**  

-   **[Specifying recommendation behavior](../pzn/pzn_specify_recommendation_behavior.md)**  
You can configure several parameters that affect the way the LikeMinds server generates recommendations.


