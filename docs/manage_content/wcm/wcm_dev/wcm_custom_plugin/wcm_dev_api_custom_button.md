# Creating a custom button class

You can create custom button classes that dynamically add custom actions to the authoring interface. Custom buttons are used to integrate third-party tools into the authoring interface without using a custom element. For example, you can use a custom button that adds automatic profiling of a content item or that adds or changes elements on the item forms.

Each extension adds an optional single button to the Read or Edit mode of an item form. When started, the extension can run any data modification on the item. Even in read mode, the extension can change the item state and run save operations. To create a custom button plug-in, you must create a custom button class and then register the class by deploying it on the server.

1.  Create a java class that implements the interface `com.ibm.workplace.wcm.api.extensions.authoring.AuthoringAction`. This class must implement the following methods:

    -   **`public boolean isValidForForm(final FormContext formContext) {}`**

        This method flags whether the button should be included on the button bar or ignored for the open item. Any uncommitted changes that are made to the document contained within the form context is discarded when this method runs. The method is started each time that the page is rendered to limit performance impacts. Use the target authoring form for formContext.

    -   **`public int ordinal() {}`**

        This method returns a number that determines where the button is placed relative to any other buttons created by other AuthoringAction classes. The button with the lowest number is listed first.

    See the Javadoc documentation for further information. The Javadoc files for Web Content Manager are in the `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/doc/Javadoc/spi_docs/com/ibm/workplace/wcm` directory.

2.  Implement the `ActionResult execute(final FormContext formContext)` method, which is started when the user clicks the button.

    Any uncommitted changes that are made to the document contained within the form context is discarded when this method runs. Use the target authoring form for formContext.

3.  A plugin.xml file is needed whether the deployment is done by using a WAR or EAR, or by using a loose jar. If deploying by using an application in a WAR or EAR, include the plugin.xml file in the application's "WEB-INF" folder. When using a jar, include the plugin.xml in the root of the jar.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <plugin id="com.ibm.workplace.wcm.sample.authoringaction"
            name="Sample Authoring Action Extension"
            version="1.0.0"
            provider-name="IBM">        
      <extension
         point="com.ibm.workplace.wcm.api.AuthoringAction
         id="SampleAuthoringAction" >
         <provider class="com.ibm.workplace.wcm.sample.MyAuthoringAction"/>
      </extension> 
    </plugin>
    ```


-   The ID of each plug-in must be unique.
-   You must replace the plug-in ID specified in this example, `com.ibm.workplace.wcm.sample.authoringaction`, with a different ID for each extension you create.
-   Each AuthoringAction extension is represented by a single `<extension></extension>` tag.
-   The value of the point attribute must be `com.ibm.workplace.wcm.api.AuthoringAction`.
-   Provide an id value of your choice.
-   Specify the provider class for your AuthoringAction extension.

**Naming conventions:**

If you create a new plug-in application with the same names and IDs as an existing plug-in, the new plug-in can override the first. When creating plug-in applications ensure that the following are unique across your system:

-   The plug-in ID, plug-in name and extension ID of the plugin.xml file.
-   The fully qualified class name plus path of all classes within the application.
-   The file path of any files within the application.


**Related information**  


[Plug-ins for Content Template](../ctc/ctc_arch_plugins_auth_branch_copy.md)

