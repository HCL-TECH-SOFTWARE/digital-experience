# Custom listener classes

A custom listener class is a class that implements the LogListener interface. View the steps to implement a custom listener class.

The custom listener class can implement the **LogListener** interface explicitly and provide implementations for all of the **LogListener** methods. Alternatively, the custom listener class can extend the `LogAdaptor` class. Since the `LogAdaptor` class contains default implementations of all of the `LogListener` methods, `LogAdaptor` subclasses only need to implement the `LogListener` methods of interest. To implement a custom listener class:

1.  Implement a class that extends `com.ibm.wcp.analysis.event.LogAdaptor`. Override the `handleEvent` methods that accept the event type of interest. You can also provide an implementation for `startHandlingEvents` and `stopHandlingEvents` if your listener needs to perform initialization or cleanup, respectively.
2.  Install the class file for your custom listener in the classpath of the server where the Personalization run-time is installed.
3.  Add the class name to the logListeners property in the FeedbackService.properties file, located in the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/config/services directory.
4.  Restart the Personalization run-time server.

Note that custom listener classes \(other than customized feedback listeners\) are always enabled when the Personalization run-time enterprise application is running.

The following example illustrates the implementation of a custom listener class. The listener in this example will generate an alert whenever the "MegaPurchase" action is logged.

```
import com.ibm.wcp.analysis.event.*;

public class SimpleCustomListener extends LogAdapter
{
   /**
    * Method to handle action events.
    */
   public void handleEvent( ActionEvent event )
   {
      if (event.getActionName().equals( "MegaPurchase" ))
         generateAlert();
   }

   /**
    * Method to generate an alert.
    */
   private void generateAlert( )
   {
      // Your custom code for generating an alert can go here.
      System.out.println( "We have a big purchase!" );
   }
}

```

**Parent topic:**[Custom log listeners](../pzn/pzn_custom_log_listeners.md)

