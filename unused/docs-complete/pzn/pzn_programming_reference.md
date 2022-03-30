# Personalization programming reference 

HCL Digital Experience provides the programming model, processes, and APIs for the Personalization rules and resource engines.

-   **[Preparing your personalized application ](../pzn/pzn_prep_app.md)**  
Before deploying applications that take advantage of the features of Portal Personalization, certain features must be configured in order to work properly. The Feedback and LikeMinds components of Personalization both communicate with their databases using Java data sources. Before using either of these components, you must create resource references to the data sources in your project.
-   **[Programming model ](../pzn/pzn_programming_model.md)**  
Personalization builds on the same programming model used by WebSphere Application Server.
-   **[User and content models ](../pzn/pzn_user_content_models.md)**  
The first step in developing a Personalization solution is to analyze your business conditions and events to determine the users and content to be targeted. The business users and administrators are primarily responsible for this task.
-   **[How the rules engine works ](../pzn/pzn_runtime_rule_processing.md)**  
The rules engine processes and delivers the results of a rule execution to a content spot contained in a web page. The content spot is marked by a content spot bean, which is placed in either a JSP file or a servlet. The JSP file or servlet is then linked to the web page.
-   **[Workload management ](../pzn/pzn_workload_mgmt.md)**  
Only one Portal Personalization engine can be installed on an application server.
-   **[Using the Personalization APIs ](../pzn/pzn_using_apis.md)**  
Personalization provides open APIs that enable the Personalization run-time environment and Rational Application Developer to access user and content data in customer data stores.
-   **[Generic query framework ](../pzn/pzn_generic_query_framework.md)**  
The generic query framework enables resource collection developers to convert a property-based query object into a language specific executable query string. It contains query component classes, and builder and callback interfaces.
-   **[Request Context ](../pzn/pzn_request_context.md)**  
The Request Context is the interface used to access various attributes for rules.
-   **[Sample Personalization resources XML file ](../pzn/pzn_sample_resources_xml.md)**  
Use the sample file ExportFromServlet.xml as a reference for coding other Personalization actions.
-   **[Content spot exits ](../pzn/pzn_content_spot_exits.md)**  
Content spot exits provide the ability to alter the default flow of processing of content spots, making it possible in the runtime environment to override the rule to process, the current user, and the results of rule processing.
-   **[Resource cache ](../pzn/pzn_resource_cache.md)**  
Personalization uses the WebSphere Application Server Dynamic Cache service to cache the results of select rules and to cache the rules themselves in a DistributedMap. When publishing, importing or saving rules, the cache is flushed automatically to ensure that the site is current.
-   **[Programmatically starting rules ](../pzn/pzn_programmatically_implementing_rules.md)**  
All types of rules can be accessed programmatically within a Java application. For example, a profiler can be used to determine the behavior that an application must exhibit depending on the current user, or an action can return content to your application for further processing before the content is displayed. Rules are mapped to content spots, and because a content spot is an implementation of JavaBeans, it can be programmatically declared and implemented.
-   **[Rule Exception Handling in the run-time environment](../pzn/pzn_rule_exception_handling_runtime_environment.md)**  
The default method of error or exception handling within the Personalization run-time environment is for the engine to print out a trace error to the application server's stdout log. Using an exception handling utility, it is possible to specify the type of output \(error message or stacktrace\), the output log file to use \(stdout or stderr\), and whether the exception should be rethrown to the JSP. The additional exception handling capabilities can be set on a per-request basis or globally.
-   **[Preparing your personalized application ](../pzn/pzn_prep_app.md)**  
Before deploying applications that take advantage of the features of Portal Personalization, certain features must be configured in order to work properly. The Feedback and LikeMinds components of Personalization both communicate with their databases using Java data sources. Before using either of these components, you must create resource references to the data sources in your project.
-   **[Programming model ](../pzn/pzn_programming_model.md)**  
Personalization builds on the same programming model used by WebSphere Application Server.
-   **[User and content models ](../pzn/pzn_user_content_models.md)**  
The first step in developing a Personalization solution is to analyze your business conditions and events to determine the users and content to be targeted. The business users and administrators are primarily responsible for this task.
-   **[How the rules engine works ](../pzn/pzn_runtime_rule_processing.md)**  
The rules engine processes and delivers the results of a rule execution to a content spot contained in a web page. The content spot is marked by a content spot bean, which is placed in either a JSP file or a servlet. The JSP file or servlet is then linked to the web page.
-   **[Workload management ](../pzn/pzn_workload_mgmt.md)**  
Only one Portal Personalization engine can be installed on an application server.
-   **[Using the Personalization APIs ](../pzn/pzn_using_apis.md)**  
Personalization provides open APIs that enable the Personalization run-time environment and Rational Application Developer to access user and content data in customer data stores.
-   **[Request Context ](../pzn/pzn_request_context.md)**  
The Request Context is the interface used to access various attributes for rules.
-   **[Sample Personalization resources XML file ](../pzn/pzn_sample_resources_xml.md)**  
Use the sample file ExportFromServlet.xml as a reference for coding other Personalization actions.
-   **[Content spot exits ](../pzn/pzn_content_spot_exits.md)**  
Content spot exits provide the ability to alter the default flow of processing of content spots, making it possible in the runtime environment to override the rule to process, the current user, and the results of rule processing.
-   **[Resource cache ](../pzn/pzn_resource_cache.md)**  
Personalization uses the WebSphere Application Server Dynamic Cache service to cache the results of select rules and to cache the rules themselves in a DistributedMap. When publishing, importing or saving rules, the cache is flushed automatically to ensure that the site is current.
-   **[Programmatically starting rules ](../pzn/pzn_programmatically_implementing_rules.md)**  
All types of rules can be accessed programmatically within a Java application. For example, a profiler can be used to determine the behavior that an application must exhibit depending on the current user, or an action can return content to your application for further processing before the content is displayed. Rules are mapped to content spots, and because a content spot is an implementation of JavaBeans, it can be programmatically declared and implemented.
-   **[Rule Exception Handling in the run-time environment](../pzn/pzn_rule_exception_handling_runtime_environment.md)**  
The default method of error or exception handling within the Personalization run-time environment is for the engine to print out a trace error to the application server's stdout log. Using an exception handling utility, it is possible to specify the type of output \(error message or stacktrace\), the output log file to use \(stdout or stderr\), and whether the exception should be rethrown to the JSP. The additional exception handling capabilities can be set on a per-request basis or globally.

**Parent topic:**[Digital Experience Personalization ](../pzn/pzn_overview.md)

**Previous topic:**[Developing a personalized portlet ](../pzn/pzn_demooverview.md)

**Next topic:**[Personalization REST API explorer](../pzn/dev_pzn_rest_api_explorer.md)

**Parent topic:**[Digital Experience Personalization ](../pzn/pzn_overview.md)

**Previous topic:**[Developing a personalized portlet ](../pzn/pzn_demooverview.md)

**Next topic:**[Personalization REST API explorer](../pzn/dev_pzn_rest_api_explorer.md)

