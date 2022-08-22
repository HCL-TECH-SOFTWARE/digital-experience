# Custom log listeners

When the log method of a logging bean is called, the feedback facility generates a log event. A log event is also generated when a rule is executed. Log listeners process these log events and either store the event data or perform custom processing with these events.

The Feedback component provides two default log listeners, the LMListener that collects data for use by the LikeMinds recommendation engine and the FeedbackListener that collects data for use in the feedback reports. Custom log listeners can be used to modify the default behavior of the FeedbackListener or to implement a listener that provides user-specific behavior.

![custom log listeners](../images/custom_log_listen.jpg)

There are a number of reasons that you might want to provide a customized feedback listener. Some of these are:

-   To collect request parameters, referral parameters, or cookies. By default, the feedback listener does not collect this data. You must implement a customized feedback listener that enables the collection of this data.
-   To prevent private information from being stored. For instance, you could mask the userid or IP address to ensure the privacy of your users.
-   To augment the event data. Suppose your event data contains a product id number and you would like to report on products by product name and id. You could perform a custom lookup during event processing and add the product name to the event.

There are a number of reasons that you might want to provide a new custom listener class. Some of these are:

-   To store event data in a separate database. Suppose that you want to capture rating data in a preference database. You can do this through your own web application or you could do this as by adding a custom listener and capturing rating events. The custom listener could facilitate real time rating results.
-   To generate email when an event occurs. Perhaps you want to send email to customers after they purchase a large order. By processing an action event with the purchase amount included as action data, you could do this with a custom log listener.
-   To generate notifications when an event occurs. You can detect the frequency of shopping cart abandons and generate a notification to the site administrator to check site availability and performance.

-   **[Custom listener classes](../pzn/pzn_custom_listener_classes.md)**  
A custom listener class is a class that implements the LogListener interface. View the steps to implement a custom listener class.
-   **[Customized feedback listeners](../pzn/pzn_customized_feedback_listeners.md)**  
A customized feedback listener is a subclassed FeedbackListener object that is registered with the feedback LogManager. View the steps to implement a custom feedback listener.
-   **[Custom listener classes](../pzn/pzn_custom_listener_classes.md)**  
A custom listener class is a class that implements the LogListener interface. View the steps to implement a custom listener class.
-   **[Customized feedback listeners](../pzn/pzn_customized_feedback_listeners.md)**  
A customized feedback listener is a subclassed FeedbackListener object that is registered with the feedback LogManager. View the steps to implement a custom feedback listener.

**Parent topic:**[Listeners and persistence](../pzn/pzn_log_listeners.md)

