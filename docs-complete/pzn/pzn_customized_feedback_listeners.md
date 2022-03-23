# Customized feedback listeners 

A customized feedback listener is a subclassed FeedbackListener object that is registered with the feedback LogManager. View the steps to implement a custom feedback listener.

Perform the following steps to implement a custom feedback listener:

1.  Implement a class that extends com.ibm.wcp.analysis.event.FeedbackListener. Override the handleEvent methods that accept the event type of interest.
2.  Install the class file for your custom feedback listener in the classpath of the server where the Personalization run-time is installed.
3.  Add the class name to the logListeners property in the FeedbackService.properties file, located in the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/config/services directory.
4.  Ensure that the LoggingEnabled is set to true.
5.  Restart the Personalization run-time server.

Note that whenever logging is enabled, your customized FeedbackListener is enabled. Conversely, your customized FeedbackListener is disabled whenever logging is disabled. Only the default FeedbackListener or one custom feedback listener can be active at a time. The specification of a custom feedback listener will override the registration of the default FeedbackListener with the LogManager.

The following example illustrates the implementation of a customized feedback listener. The listener in this example will collect cookie data, request query data, and referral query data. Note that this data is not collected by the default FeedbackListener, but can be set in the event data with a customized feedback listener.

```
import com.ibm.wcp.analysis.event.*;

public class ParmCookieListener extends FeedbackListener
{
   /**
    * Method to handle action events.
    */ 
   public void handleEvent( ActionEvent event )
   {
      enableParmCollection( event );
      super.handleEvent( event );
   }

   /**
    * Method to handle category events.
    */ 
   public void handleEvent( CategoryEvent event )
   {
      enableParmCollection( event );
      super.handleEvent( event );
   }

   /**
    * Method to handle rule events.
    */  
   public void handleEvent( RuleEvent event )
   {
      enableParmCollection( event );
      super.handleEvent( event );
   }

   /**
    * Method to set switches to collect cookie and
    * query string data.
    */
   private void enableParmCollection( LogEvent event )
   {
      event.enableLogCookies();
      event.enableLogQueryParms();
      event.enableLogReferralParms();
   }
}

```

**Parent topic:**[Custom log listeners ](../pzn/pzn_custom_log_listeners.md)

**Parent topic:**[Custom log listeners ](../pzn/pzn_custom_log_listeners.md)

