# Logging and analyzing server side site data

HCL Digital Experience implements a logging function for your usage data. The portal writes usage records to a dedicated log file if site analysis logging is enabled. Multiple types of site analyzer loggers allow portal administrators to collect statistical data in various areas. The portal server manages the collection of data on its own, but from a business point of view you can also log custom details of business events. You can configure the portal for site analysis logging for the web content viewer.

The portal configuration service SiteAnalyzerLogService determines the type of site analysis data that the portal logs at run time. Depending on the service configuration, the portal logs the following events:

-   Page management, such as creating, reading, updating, deleting pages.
-   Requests of pages by users.
-   Requests of portlets by users.
-   Session activities, such as login, logout, time out, login failed.
-   User management actions, such as creating, reading, updating, and deleting users and groups.

The resulting log entries comply with the NCSA Combined industry standard. By analyzing the log entries, you can monitor applications that are running on your portal site. The site analysis infrastructure that is provided by the portal accommodates most scenarios.

!!! note
    To obtain a more sophisticated evaluation of the portal usage, or to generate reports for portlet actions, you must write a custom report to log custom business events that occur in portlets.

-   **[Enabling site analysis logging](adsaconf_tsk_nbl.md)**  
Site analysis logging is not enabled by default. To enable site analysis logging, specify the names and locations of the log files as values for the following parameters in the WP SiteAnalyzerLogService.
-   **[Analysis loggers reference](adsaconf_ref_loggers.md)**  
The following table lists and describes available loggers.
-   **[Understanding the site analysis log](adsaundr.md)**  
Learn more details about how to read the site analysis log.
-   **[Logging custom details of business events for site analysis](adsa_work_std_cust.md)**  
From a business point of view, you might want to log custom details of business events.


