# How to create a custom workflow action class

You can create custom workflow action classes to add custom workflow actions to a workflow.

## Creating the custom workflow action class

1.  Create a java class that implements the interface `com.ibm.workplace.wcm.api.custom.CustomWorkflowAction`. This class must implement the following methods:
    -   `public Date getExecuteDate(Document p_document) {}` \(This method specifies when the custom action is run.\)
    -   `public CustomWorkflowActionResult execute(Document p_document) {}` \(This method contains the code that runs when the custom action is run.\)
2.  Implement `execute()method`. This method contains the code that is run against the supplied Document. This method must return a `com.ibm.workplace.wcm.api.custom.CustomWorkflowActionResult` object to indicate the result of the custom code by using `com.ibm.workplace.wcm.api.custom.Directives`.
    -   A custom workflow action result object is created by first retrieving a reference to the `WebContentCustomWorkflowService` object, and then calling the method `webContentCustomWorkflowService.getCustomWorkflowService().createResult`. If the `CustomWorkflowActionResult` does not indicate a failure, changes to the document is saved.

        See the Javadoc documentation for further information. The Javadoc files for Web Content Manager are in the `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/doc/Javadoc/spi_docs/com/ibm/workplace/wcm` directory.

    -   Also, see the Web Content Manager Javadoc for further information on valid directives.
    
3.  Create a custom workflow action factory class that implements the interface `com.ibm.workplace.wcm.api.custom.CustomWorkflowActionFactory`.

## Create a plugin.xml file

A plugin.xml file is needed whether the deployment is done by using a WAR or EAR, or by using a loose jar. If you deploy using an application in a WAR or EAR, include the plugin.xml file in the application's WEB-INF folder. When you use a jar, include the plugin.xml in the root of the jar.

```
<?xml version="1.0" encoding="UTF-8"?>
<plugin id="com.ibm.workplace.wcm.sample.customworkflowaction"
name="Sample Custom Workflow Action Factory"
version="1.0.0"
provider-name="IBM">

<extension
point="com.ibm.workplace.wcm.api.CustomWorkflowActionFactory"
id="SimpleCustomWorkflowActionFactory">
<provider class="com.ibm.workplace.wcm.sample.customworkflowaction.SimpleCustomWorkflowActionFactory"/>
</extension>

</plugin>
```

-   The ID of each plug-in must be unique. You must replace the plug-in ID specified in this example, com.ibm.workplace.wcm.sample.customworkflowaction, with a different ID for each custom workflow you create.
-   Each custom workflow action factory is represented by a single `<extension></extension>` tag.
-   The value of the point attribute must be `com.ibm.workplace.wcm.api.CustomWorkflowActionFactory`.
-   Provide an ID value of your choice.
-   Specify the provider class for your custom workflow action factory.

**Naming conventions:**

If you create a new plug-in application with the same names and IDs as an existing plug-in, the new plug-in can override the first. When you create plug-in applications ensure that the following are unique across your system:

-   The plug-in ID, plug-in name, and extension ID of the plugin.xml file.
-   The fully qualified class name plus path of all classes within the application.
-   The file path of any files within the application.


