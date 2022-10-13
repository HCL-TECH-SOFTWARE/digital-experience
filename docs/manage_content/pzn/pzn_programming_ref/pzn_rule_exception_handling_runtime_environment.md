# Rule Exception Handling in the run-time environment

The default method of error or exception handling within the Personalization run-time environment is for the engine to print out a trace error to the application server's stdout log. Using an exception handling utility, it is possible to specify the type of output \(error message or stacktrace\), the output log file to use \(stdout or stderr\), and whether the exception should be rethrown to the JSP. The additional exception handling capabilities can be set on a per-request basis or globally.

## Per-request

To set the scheme on a per-request basis, include the following code within a content spot on a JSP:

`request.setAttribute(RuntimeUtils.PZN_RUNTIME_EXCEPTION_HANDLING_KEY, RuntimeUtils.HANDLING_SCHEME);`

Where HANDLING\_SCHEME is one of the options specified for the setRuntimeExceptionHandlingScheme method described in the following section.

This method will only change the exception handling scheme for rules running on that JSP.

## Global

To set the same scheme for every rule running on a server, execute the following code:

```
RuntimeUtils.setRuntimeExceptionHandlingScheme(RuntimeUtils.HANDLING_SCHEME);
```

To reset the global exception handling scheme, call:

```
RuntimeUtils.resetRuntimeExceptionHandlingScheme();
```

!!! note 
    Restarting the application server will automatically reset the exception handling scheme.

You can also change the global behavior of the server by changing the following value in PersonalizationService.properties:

```
rulesEngine.exceptionHandling=logMessage_stdout
```

!!! note 
    To make any changes effective, you must restart the server.

## RuntimeUtils methods

-   **public static void setRuntimeExceptionHandlingScheme\(String value\)**

    Sets the exceptions handling scheme to the specified value. Options for value include:

    -   RuntimeUtils.IGNORE
    -   RuntimeUtils.LOG\_MESSAGE\_STDOUT
    -   RuntimeUtils.LOG\_MESSAGE\_STDERR
    -   RuntimeUtils.LOG\_MESSAGE\_STDOUT\_AND\_RETHROW
    -   RuntimeUtils.LOG\_MESSAGE\_STDERR\_AND\_RETHROW
    -   RuntimeUtils.LOG\_STACKTRACE\_STDOUT
    -   RuntimeUtils.LOG\_STACKTRACE\_STDERR
    -   RuntimeUtils.LOG\_STACKTRACE\_STDOUT\_AND\_RETHROW
    -   RuntimeUtils.LOG\_STACKTRACE\_STDERR\_AND\_RETHROW
    -   RuntimeUtils.LOG\_MESSAGE\_AND\_STACKTRACE\_STDOUT
    -   RuntimeUtils.LOG\_MESSAGE\_AND\_STACKTRACE\_STDERR
    -   RuntimeUtils.LOG\_MESSAGE\_AND\_STACKTRACE\_STDOUT\_AND\_RETHROW
    -   RuntimeUtils.LOG\_MESSAGE\_AND\_STACKTRACE\_STDERR\_AND\_RETHROW
    -   RuntimeUtils.RETHROW\_EXCEPTION
    !!! note 
        Settings with RETHROW will pass the exception to the screen and are recommended for use within a testing environment only.

-   **public static void resetRuntimeExceptionHandlingScheme\(\)**

    Resets the current exception handling scheme to LOG\_MESSAGE\_STDOUT.

-   **public static String getRuntimeExceptionHandlingScheme\(\)**

    Returns the current exception handling scheme.


## Exception Handling Process

When an exception occurs, if the code can continue, it will do so while logging the exception. If not, the exception is wrapped in a PersonalizationException which is passed to RuleTrigger. RuleTrigger looks for a request override for the exception handling scheme, processes the scheme, and returns to the JSP. Any subclasses of Throwable might be wrapped in a PersonalizationException.

## Tracing

To trace the runtime classes, enable trace for `com.ibm.websphere.personalization.*=all`. To trace the authoring portlet classes, enable trace for `com.ibm.wps.caf.*=all`.


