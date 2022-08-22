# LogManager

When data is logged by either logging beans or rules, log events are generated and are routed to a controller for processing. LogManager is the class that implements this controller. There is a single instance of the LogManager within the Personalization run-time. It is responsible for receiving all logged events and distributing these events to listener objects that implement the LogListener interface and are registered with the LogManager.

The LogManager queues log events as they are received. In order to protect listeners from performance degradation due to inefficiencies and/or problems in other listeners, a separate notification thread is managed for each active listener. A nanny thread monitors the notification threads and suspends any non-responsive listener. Since the "queue" is processed by multiple consumers, an event is removed from the queue after all of the notification threads have read the event. You can alter the settings that govern the non-responsive time interval and event queue size by modifying the FeedbackService.properties file, located in the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/config/services.

**Parent topic:**[Feedback and analytics](../pzn/pzn_feedbackanalytics.md)

