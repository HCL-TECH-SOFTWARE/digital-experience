# Feedback and analytics

Personalization provides a complete logging framework for collecting data on how visitors are using your Web site. If Feedback is enabled, data is automatically collected about each Personalization rule that is fired. In addition, development tools enable Web sites to collect a variety of data related to visitors' actions and behavior. By default this data is logged to a standard database schema for later analysis and reporting. The framework is also extensible, allowing Web sites to customize and supplement the way data is collected and stored to more fully meet their needs.

Personalization provides a complete logging framework for collecting data on how visitors are using your website. If Feedback is enabled, data is automatically collected about each Personalization rule that is fired. In addition, development tools enable Web sites to collect a variety of data related to visitors' actions and behavior. By default this data is logged to a standard database schema for later analysis and reporting. The framework is also extensible, allowing Web sites to customize and supplement the way data is collected and stored to more fully meet their needs. Using the Personalization Feedback framework you can collect data to help answer questions such as:

-   How effective are the new campaign initiatives?
-   Which items have the highest clickthrough ratio?
-   What is the clickthrough ratio for health care products?
-   Which items have the highest view to purchase ratio?
-   What is the ratio for health care products?
-   Which rules are resulting in the most number of downloads?
-   During the month of December, which categories of pages were browsed most often \(my special Christmas pages, or the regular part of my site\)?

-   **[Feedback subsystem overview](../pzn/pzn_feedback_subsystem_overview.md)**  
The Feedback listener captures data and writes it to the Feedback database schema for subsequent reporting, a capability which can be used to persist data in ways that specifically meet your requirements.
-   **[Enable logging](../pzn/pzn_enable_logging_runtime_server.md)**  
Create and set up the Feedback database. Then, enable logging on the runtime server that hosts Feedback data.
-   **[Feedback properties file](../pzn/pzn_feedback_properties_file.md)**  
The FeedbackService.properties file contains several customizable properties that are used by the Feedback component. These properties are used to enable custom log listeners, to tune the performance of the Feedback data collection system.
-   **[Rule logging](../pzn/pzn_rule_logging.md)**  
If logging is enabled, rule information is automatically logged whenever a rule is executed.
-   **[Logging beans](../pzn/pzn_logging_beans.md)**  
Use logging beans to log data about a Web site visitor's actions, category interests, and ratings.
-   **[LogManager](../pzn/pzn_logmanager.md)**  
When data is logged by either logging beans or rules, log events are generated and are routed to a controller for processing. LogManager is the class that implements this controller. There is a single instance of the LogManager within the Personalization run-time. It is responsible for receiving all logged events and distributing these events to listener objects that implement the LogListener interface and are registered with the LogManager.
-   **[Listeners and persistence](../pzn/pzn_log_listeners.md)**  
Log listeners process the log events originating from either logging beans or rules.
-   **[Classes and APIs for writing custom listeners](../pzn/pzn_classes_apis_custom_listeners.md)**  
In order to write custom listeners, it is necessary to familiarize yourself with the classes representing logging events and info that is contained in those events. A reference of these classes is provided here.
-   **[Reports](../pzn/pzn_reports.md)**  
Once data has been logged to the Feedback database schema, it is possible to use any reporting tool that can connect to a standard SQL database to generate reports based on this data. Reference the Feedback database schema section of the Information Center when writing such reports.
-   **[Feedback database schema](../pzn/pzn_feedback_db_schema.md)**  
The Feedback schema, within the Feedback database, stores data about your Web site visitors' actions. This schema is closely aligned with the Tivoli Site Analyzer schema.
-   **[Feedback subsystem overview](../pzn/pzn_feedback_subsystem_overview.md)**  
The Feedback listener captures data and writes it to the Feedback database schema for subsequent reporting, a capability which can be used to persist data in ways that specifically meet your requirements.
-   **[Enable logging](../pzn/pzn_enable_logging_runtime_server.md)**  
Create and set up the Feedback database. Then, enable logging on the runtime server that hosts Feedback data.
-   **[Feedback properties file](../pzn/pzn_feedback_properties_file.md)**  
The FeedbackService.properties file contains several customizable properties that are used by the Feedback component. These properties are used to enable custom log listeners, to tune the performance of the Feedback data collection system.
-   **[Rule logging](../pzn/pzn_rule_logging.md)**  
If logging is enabled, rule information is automatically logged whenever a rule is executed.
-   **[Logging beans](../pzn/pzn_logging_beans.md)**  
Use logging beans to log data about a Web site visitor's actions, category interests, and ratings.
-   **[LogManager](../pzn/pzn_logmanager.md)**  
When data is logged by either logging beans or rules, log events are generated and are routed to a controller for processing. LogManager is the class that implements this controller. There is a single instance of the LogManager within the Personalization run-time. It is responsible for receiving all logged events and distributing these events to listener objects that implement the LogListener interface and are registered with the LogManager.
-   **[Listeners and persistence](../pzn/pzn_log_listeners.md)**  
Log listeners process the log events originating from either logging beans or rules.
-   **[Classes and APIs for writing custom listeners](../pzn/pzn_classes_apis_custom_listeners.md)**  
In order to write custom listeners, it is necessary to familiarize yourself with the classes representing logging events and info that is contained in those events. A reference of these classes is provided here.
-   **[Reports](../pzn/pzn_reports.md)**  
Once data has been logged to the Feedback database schema, it is possible to use any reporting tool that can connect to a standard SQL database to generate reports based on this data. Reference the Feedback database schema section of the Information Center when writing such reports.
-   **[Feedback database schema](../pzn/pzn_feedback_db_schema.md)**  
The Feedback schema, within the Feedback database, stores data about your Web site visitors' actions. This schema is closely aligned with the Tivoli Site Analyzer schema.

**Parent topic:**[Digital Experience Personalization](../pzn/pzn_overview.md)

**Previous topic:**[LikeMinds Recommendations](../pzn/pzn_intro_likeminds.md)

**Next topic:**[Developing a personalized portlet](../pzn/pzn_demooverview.md)

**Parent topic:**[Digital Experience Personalization](../pzn/pzn_overview.md)

**Previous topic:**[LikeMinds Recommendations](../pzn/pzn_intro_likeminds.md)

**Next topic:**[Developing a personalized portlet](../pzn/pzn_demooverview.md)

