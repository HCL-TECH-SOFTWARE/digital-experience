# Creating a context processor class

When configured, a context processor plug-in is started by the web content viewer portlet before rendering and allows the current context, such as the item to display, to be modified.

To create a context processor plug-in, you must create a context processor class and then register the context processor class by deploying it on the server and selecting it from within a web content viewer portlet.

1.  Create a Java class that implements the interface com.ibm.workplace.wcm.api.ContextProcessor. This class must implement the following method:

    ```
    /**
        * Processes the supplied <i>ContextProcessorParams</i> and updates parameters within
        * as necessary
        * 
        * @param p_currentSession The current Http Session
        * @param p_contextProcessorParams The editable <i>ContextProcessorParams</i> object 
        */
       public void process(HttpSession p_currentSession, ContextProcessorParams p_contextProcessorParams);
    ```

    See the Javadoc documentation for further information. The Javadoc files for Web Content Manager are in the `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/doc/Javadoc/spi_docs/com/ibm/workplace/wcm` directory.

2.  Implement the process method. This method contains the code that is run when the plug-in is started and modifies the current context by using the `ContextProcessorParams` object before the current context is rendered.

3.  A plugin.xml file is needed whether the deployment is done by using a WAR or EAR, or by using a loose JAR file. If deployed by using an application in a WAR or EAR, include the plugin.xml file in the application "WEB-INF" folder. When a JAR file is used, include the plugin.xml in the root of the JAR file.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <plugin id="SampleContextProcessorPluginId" 
    name="SampleContextProcessor" provider-name="IBM" version="1.0.0">
        <extension point="com.ibm.workplace.wcm.api.ContextProcessor" 
        id="SampleContextProcessorPlugin" >
            <processor class="com.acme.SampleContextProcessor"/>
        </extension>
    </plugin>
    ```

4.  Edit the settings of the web content viewer portlet you want to associate with your context processor:

    1.  Go to the "configuration" or "edit shared settings" view of a web content viewer portlet.

    2.  Go to **Advanced Options** \> **Plugins**

    3.  Select a context processor plug-in.


-   Each plug-in is represented by a single `<extension></extension>` tag.
-   The value of the point attribute must be "`com.ibm.workplace.wcm.api.ContextProcessor`".
-   Provide an ID value of your choice.
-   Specify the provider class for your plug-in.

**Naming conventions:**

If you create a plug-in application with the same names and IDs as an existing plug-in, the new plug-in might override the first. When you create plug-in applications, ensure that the following are unique across your system:

-   The plug-in ID, plug in name, and extension ID of the plugin.xml file.
-   The fully qualified class name plus path of all classes within the application.
-   The file path of any files within the application.


