# Feedback properties file

The FeedbackService.properties file contains several customizable properties that are used by the Feedback component. These properties are used to enable custom log listeners, to tune the performance of the Feedback data collection system.

The `FeedbackService.properties` file is installed to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/config/services directory.

To modify the properties:

-   Edit the `FeedbackService.properties` file.
-   Restart the IBM® WebSphere® Application Server where the Portal Personalization Runtime is installed.

## loggingEnabled

Before information about the usage of your site can be recorded, logging must first be enabled. To enable logging, set the loggingEnabled property to true.

`loggingEnabled = true`

## schemaName

It is possible to customize the name of the feedback schema used in the database. For most platforms the Personalization installer will create the feedback tables under a schema named FEEDBACK.

For IBM i installations, the schemaName property must be set to the name of the database library that contains the Feedback tables \(for example, QWPS51\).

`schemaName = FEEDBACK`

## z/OS® only: dbPlatform

**Note:** For IBM DB2 Universal Database™ for z/OS only.

If the Feedback database is installed on the DB2® for z/OS platform then the dbPlatform property must be set to 390 to identify this fact. It is unnecessary to set this property for all other database platforms.

`dbPlatform = 390`

## logListeners

Log events are generated whenever the log method of a bean is called or whenever a rule is fired. Log listeners process these log events and can store the event data or perform other actions as a result of these events. The Feedback component provides two default log listeners, the LMListener that collects data for use by the LikeMinds Recommendation Engine and the FeedbackListener that collects data for use in the Feedback reports. Custom log listeners can be used to modify the default behavior of the FeedbackListener or to provide a listener that processes the Feedback events in a user-specified manner.

After being developed, custom listener class files must be placed in the classpath of the server where Personalization run-time is installed. The class names of these listeners must be identified in the logListeners property. Multiple custom listener class names are separated by semicolons:

```
logListeners = 
LogListenerClassName1;LogListenerClassName2
```

## logBufferSize

When log events are produced by logging beans or rules, they are placed on a process queue. Each of the registered log listeners consumes events from this queue. This enables listeners to consume log events at independent rates, minimally impacting the performance of other listeners. It also enables the Feedback component to queue events originating from Web page requests with minimal impact on the Web site performance.

The log event queue \(or log buffer\) has a default maximum size of 10,000 events. The optimal size of this buffer is affected by Web site volume, Web site usage spikes, and many other Web application performance factors. You can change the maximum size of the log buffer by modifying the logBufferSize property in the `FeedbackService.properties` file:

`logBufferSize = 10000`

## logWarningLevel

As the log buffer begins to fill due to heavy Web site loads or slow log listener performance, a warning message can be logged to the WebSphere Integrated Solutions Console. The logWarningLevel specifies the log buffer load that will trigger warning messages. The logWarningLevel is specified as a percentage value between 0 and 100. Specifying a value of 0 will repeatedly output the current log buffer load whereas a percentage value of 100 will result in no warning messages as the buffer fills. Once the log buffer is full, an error message is logged to the WebSphere Integrated Solutions Console and logging is discontinued until room becomes available in the log buffer. The default value for the log warning level is 75%. You can change this warning level by modifying the logWarningLevel property in the `FeedbackServices.properties` file:

`logWarningLevel = 75`

## requestFlushInterval

Multiple rules or logging beans can be placed on a single Web page or JSP. The Feedback component collects all the data from the rules and log beans on a page and then updates the Feedback database with all of the information for the page \(HTTP request\). Updating the Feedback database only once per page improves the performance of the Feedback component. It is necessary to determine when all of the data for a page request has been collected. Two mechanisms are used in the current release to determine when the log data for a page request should be written to the Feedback database. The first method is to flush all of the log data for a page request whenever a new page request is received from the same user session. The second method uses a time interval to determine when the response to a page request has been completed and, thus, all the logging data for the request has been generated.

The requestFlushInterval applies to this second method of flushing the logging data for a page request. It is the time interval during which no new logging data has been received during a user session after which the log data for the most recent request is assumed to be complete and is flushed to the database. The default value for the request flush interval is 10 seconds. You can modify this interval by changing the requestFlushInterval property \(specified in milliseconds\) in the `FeedbackService.properties` file:

`requestFlushInterval = 10000`

## inactiveListenerInterval

It is possible for a log listener to become inactive due to a run-time error or resource deadlock. The result of such a deadlock would be an accumulation of data in the log buffer that will never be processed. Since the log buffer is finite in size, it will eventually reach capacity. Once it reaches capacity, no new data will be logged and all active listeners will be unable to collect and process additional log data. To protect against this scenario, the activity of all listeners is monitored. If log data is available for a listener to process and the listener remains inactive for a pre-determined, the log listener will be removed from the set of registered log listeners. The default period of inactivity is 2 minutes. You can modify this interval by changing the inactiveListenerInterval property \(specified in milliseconds\) in the `FeedbackService.properties` file:

`inactiveListenerInterval = 120000`

## workManager

If running in an environment that supports it, the Feedback component uses the WebSphere Application Server workmanager system for asynchronous operations. Using the workManager property, you can specify the name of the workmanager that Feedback will use.

`workManager = wm/default`


