# Creating a subscriber class

A subscriber plug-in is used to run extra functions on the subscriber that can be used to determine if the subscriber is ready for syndication when a syndication event is started.

To create a subscriber plug-in, you must create a subscriber class and then register the subscriber class by deploying it on the server.

1.  Create a java class that implements the interface `com.ibm.workplace.wcm.api.extensions.syndication.SubscriberReady`. This class must implement the following methods:

    -   **`public ResultDirective onSubscriberReady(SubscriberEvent eventInfo)`**

        -   This method contains the code that is run when the syndication run starts.
        -   This method is run on the subscriber.
        -   The extensions are run only when there are changes in the syndicator.
        -   The extension is not run every time automatic syndication queues the syndicator.
    See the Javadoc documentation for further information. The Javadoc files for Web Content Manager are in the `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/doc/Javadoc/spi_docs/com/ibm/workplace/wcm` directory.

2.  Implement the `onSubscriberReady` method. This method must return a `com.ibm.workplace.wcm.api.extensions.syndication.ResultDirective` object to indicate whether the syndication engine can continue or stop the syndication process.

3.  A plugin.xml file is needed whether the deployment is done by using a WAR or EAR, or by using a loose jar. If deploying using an application in a WAR or EAR, include the plugin.xml file in the application's WEB-INF folder. When using a jar, include the plugin.xml in the root of the jar.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <plugin id="com.ibm.workplace.wcm.sample.subscriberready"
            name="Sample Subscriber Ready Extension"
            version="1.0.0"
            provider-name="IBM">        
      <extension
         point="com.ibm.workplace.wcm.api.SubscriberReady"
         id="SubscriberReadyExtension" >
         <provider class="com.ibm.workplace.wcm.sample.subscriberready.SubscriberReadyExtension"/>
      </extension> 
    </plugin>
    ```


-   The ID of each plug-in must be unique.
-   You must replace the plug-in ID specified in this example, `com.ibm.workplace.wcm.sample.subscriberready`, with a different ID for each `SubscriberReady` extension you create.
-   Each `SubscriberReady` extension is represented by a single `<extension></extension>` tag.
-   The value of the point attribute must be `com.ibm.workplace.wcm.api.SubscriberReady`.
-   Provide an ID value of your choice.
-   Specify the provider class for your `SubscriberReady` extension.

**Naming conventions:**

If you create a new plug-in application with the same names and IDs as an existing plug-in, the new plug-in might override the first. When you create plug-in applications ensure that the following are unique across your system:

-   The plug-in ID, plug-in name and extension ID of the plugin.xml file.
-   The fully qualified class name plus path of all classes within the application.
-   The file path of any files within the application.


