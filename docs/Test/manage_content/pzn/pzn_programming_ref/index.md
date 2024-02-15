# Personalization programming reference

HCL Digital Experience provides the programming model, processes, and APIs for the Personalization rules and resource engines.

The default method of error or exception handling within the Personalization run-time environment is for the engine to print out a trace error to the application server's stdout log. Using an exception handling utility, it is possible to specify the type of output (error message or stacktrace), the output log file to use (stdout or stderr), and whether the exception should be rethrown to the JSP. The additional exception handling capabilities can be set on a per-request basis or globally.




