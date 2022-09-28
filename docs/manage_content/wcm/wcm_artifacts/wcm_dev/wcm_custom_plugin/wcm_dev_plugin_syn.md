# Creating a syndicator class

A syndicator plug-in is used to run extra functions on the syndicator when a syndication event is started.

To create a syndicator plug-in, you must create a syndicator class and then register the syndicator class by deploying it on the server.

1.  Create a java class that implements the interface `com.ibm.workplace.wcm.api.extensions.syndication.SyndicatorStarted`. This class must implement the following methods:

    -   **`public ResultDirective onSyndicatorStarted(SyndicatorEvent eventInfo)`**

        -   This method contains the code that is run when the syndication run starts.
        -   This method is run after the plug-ins for the `SubscriberReady` extension point are run.
        -   The extensions are run only when there are changes on the syndicator.
        -   The extension is not run every time automatic syndication queues the syndicator.

    See the Javadoc documentation for further information. The Javadoc files for Web Content Manager are in the `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/doc/Javadoc/spi_docs/com/ibm/workplace/wcm` directory.

2.  Implement the `onSyndicatorStarted` method.

    -   This method contains the code that is run on the syndicator when there are changes available for syndication to the subscriber.
    -   This method must return a `com.ibm.workplace.wcm.api.extensions.syndication.ResultDirective` object to indicate whether the syndication engine can continue or stop the syndication process.
    
3.  A plugin.xml file is needed whether the deployment is done by using a WAR or EAR, or by using a loose jar. If deployed by using an application in a WAR or EAR, include the plugin.xml file in the application's WEB-INF folder. When you use a jar, include the plugin.xml in the root of the jar.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <plugin id="com.ibm.workplace.wcm.sample.syndicatorstarted"
            name="Sample Syndicator Started Extension"
            version="1.0.0"
            provider-name="IBM">        
      <extension
         point="com.ibm.workplace.wcm.api.SyndicatorStarted"
         id="SyndicatorStartedExtension" >
         <provider class="com.ibm.workplace.wcm.sample.syndicatorstarted.SyndicatorStartedExtension"/>
      </extension> 
    </plugin>
    ```


-   The ID of each plug-in must be unique.
-   You must replace the plug-in ID specified in this example, `com.ibm.workplace.wcm.sample.syndicatorstarted`, with a different ID for each `SyndicatorStarted` extension you create.
-   Each `SyndicatorStarted` extension is represented by a single `<extension></extension>` tag.
-   The value of the point attribute must be `com.ibm.workplace.wcm.api.SyndicatorStarted`.
-   Provide an ID value of your choice.
-   Specify the provider class for your `SyndicatorStarted` extension.

**Naming conventions:**

If you create a new plug-in application with the same names and IDs as an existing plug-in, the new plug-in might override the first. When you create plug-in applications, ensure that the following are unique across your system:

-   The plug-in ID, plug-in name, and extension ID of the plugin.xml file.
-   The fully qualified class name plus path of all classes within the application.
-   The file path of any files within the application.


