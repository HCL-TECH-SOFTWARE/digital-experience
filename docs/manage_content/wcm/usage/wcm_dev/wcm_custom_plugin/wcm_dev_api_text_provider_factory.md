# Creating a Text Provider Factory class

A text provider factory is used to provide multiple text providers that can be used within web content item forms. Text provider can be used to localize the field labels or help text within an authoring template so that each user sees the labels or help text in their own language. A text provider factory can make multiple such text providers available.

To use a text provider factory, you must create a text provider factory class and then register the text provider factory by deploying it on the server.

1.  Create a java class that implements the interface com.ibm.workplace.wcm.api.plugin.textprovider.TextProviderFactory. This class must implement the following methods:

    -   **`public String getProviderName()`**

        This method returns the unique name of the text provider factory.

    -   **`public List<TextProvider> getTextProviders()`**

        This method returns a list of text providers supplied by this factory.

    -   **`public Collection<String> getTextProvider(String p_providerName)`**

        This method returns the text providers in the factory with the given name.

    -   **public boolean isShownInAuthoringUI\(\)**

        This method is used to prevent the text providers in your text provider factory from appearing in the authoring UI.

    See the Javadoc documentation for further information. The Javadoc files for Web Content Manager are in the `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/doc/Javadoc/spi_docs/com/ibm/workplace/wcm` directory.

2.  A plugin.xml file is needed whether the deployment is done using a WAR or EAR, or using a loose jar. If deploying via an application in a WAR or EAR, include the plugin.xml file in the application's WEB-INF folder. When using a jar, include the plugin.xml in the root of the jar.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <plugin id="com.acme"
           name="Sample text provider factory"
           version="1.0.0"
           provider-name="IBM">
           
     <extension
        point="com.ibm.workplace.wcm.api.TextProviderFactory"
        id="SampleTextProviderFactory">
        <provider class="com.acme.SampleTextproviderFactory"/>
     </extension>
    
    </plugin>
    ```


-   Each plug-in is represented by a single `<extension></extension>` tag.
-   The value of the point attribute must be `com.ibm.workplace.wcm.api.TextProvider`.
-   Provide an id value of your choice.
-   Specify the provider class for your plug-in.

**Naming conventions:**

If you create a new plug-in application with the same names and IDs as an existing plugin, the new plug-in may override the first. When creating plug-in applications ensure that the following are unique across your system:

-   The plug-in ID, plug-in name and extension ID of the plugin.xml file.
-   The fully qualified class name plus path of all classes within the application.
-   The file path of any files within the application.

**Sorting conventions:**

When sorting is applied to a set of items, the item title is used to sort the items, not the title specified in the text provider factory.

**Parent topic:**[How to create custom plug-ins](../wcm/wcm_dev_plugins.md)

