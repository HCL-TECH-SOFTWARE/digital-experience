# Listeners and persistence 

Log listeners process the log events originating from either logging beans or rules.

Log listeners process the log events originating from either logging beans or rules and will typically store the data in some fashion \(such as a database\). Separate LogListener implementations are provided for processing log data into the Personalization Feedback schema and for processing data into the LikeMinds schema. These listeners always run whenever logging is enabled. Additionally, it is possible to extend the provided listeners and also write custom listeners from scratch to process logging events and log data as you see fit.

A log listener is registered with and receives log events from the LogManager. All log listeners must either implement the LogManager interface or extend the LogAdapter class. The LogAdapter class provides a default \(empty\) implementation of each of the handleEvent methods in the LogListener interface.

The logging component uses cache and multi-threading to optimize performance, and to allow each listener to process events at a difference rate without affecting other listeners.

## The log listener interface

```
public interface `com.ibm.wcp.analysis.event.LogListener` extends java.util.EventListener
{
   /**
    * Method called by LogManager after adding the listener to the
    * set of active listeners.  This method can be used to perform
    * initialization during startup.
    */

   public void startHandlingEvents( );

   /**
    * Method called by LogManager when the listener is removed
    * from the set of active listeners.  This method can be
    * used to perform cleanup during termination processing.
    */

   public void stopHandlingEvents( );

   /**
    * Method to handle rule trigger events.
    */

   void handleEvent( RuleEvent event );

   /**
    * Method to handle category logging events.
    */

  void handleEvent( CategoryEvent event );

   /**
    * Method to handle action logging events.
    */

  void handleEvent( ActionEvent event );

   /**
    * Method to handle explicit rating events.
    */

   void handleEvent( RatingEvent event );

  /**
    * Method to handle custom logging events.
    */

 void handleEvent( CustomLogEvent event );

   /**
    * Method to handle basic Web traffic events.
    */
   public void handleEvent( PageViewEvent  event );

  /**
    * Method to handle Personalization audit events.
    */

  void handleEvent( AuditEvent event );
}
```

-   **[FeedbackListener ](../pzn/pzn_feedbacklistener.md)**  
The FeedbackListener class routes data to the Feedback schema.
-   **[LMListener ](../pzn/pzn_lmlistener.md)**  
The LMListener routes data of interest to the LikeMinds database layer.
-   **[Custom log listeners ](../pzn/pzn_custom_log_listeners.md)**  
When the log method of a logging bean is called, the feedback facility generates a log event. A log event is also generated when a rule is executed. Log listeners process these log events and either store the event data or perform custom processing with these events.
-   **[FeedbackListener ](../pzn/pzn_feedbacklistener.md)**  
The FeedbackListener class routes data to the Feedback schema.
-   **[LMListener ](../pzn/pzn_lmlistener.md)**  
The LMListener routes data of interest to the LikeMinds database layer.
-   **[Custom log listeners ](../pzn/pzn_custom_log_listeners.md)**  
When the log method of a logging bean is called, the feedback facility generates a log event. A log event is also generated when a rule is executed. Log listeners process these log events and either store the event data or perform custom processing with these events.

**Parent topic:**[Feedback and analytics ](../pzn/pzn_feedbackanalytics.md)

**Parent topic:**[Feedback and analytics ](../pzn/pzn_feedbackanalytics.md)

