# Creating an operation check class

The OperationCheckPlugin plugin is used to control whether an operation within the system should continue or whether it should be stopped. The extension is called prior to committing a Web Content Manager operation to evaluate whether the operation should be allowed to continue. The plug-in can return an error message to be shown to the user.

The operation check extension only supports the create operation of a new Item, including the creation of a new library. Library import, or item get operations created during syndication bypass this operation check.

To create a OperationCheckPlugin plug-in, you must create a operation check class and then register the file by deploying it on the server.

**Note:** This extension cannot be used with page components or templates generated using the Generate feature.

1.  Create a Java class that implements the interface interface com.ibm.workplace.wcm.api.extensions.operation.OperationCheckPlugin. This class must implement the following methods:

    -   **`Operation scope()`**

        This method returns the operation that this plug-in is executed against. Currently, only Operation.CREATE is supported

    -   **`OperationCheckResult checkOperation(OperationContext context)`**
    See the Javadoc documentation for further information. The Javadoc files for Web Content Manager are in the `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/doc/Javadoc/spi_docs/com/ibm/workplace/wcm` directory.

2.  Implement the checkOperation\(\) method. This method contains the code that will be run when the plug-in is invoked prior to committing a Web Content Manager operation. The method needs to return an instance which implements the interface com.ibm.workplace.wcm.api.extensions.operation.OperationCheckResult. The instance needs to implement twomethods:

    -   **`boolean canContinue()`**

        Return true if the operation can continue. Otherwise returning false aborts the operation.

    -   **`ErrorMessageContainer messages();`**

        Returns localized messages to the caller. If null is returned, no message will be shown.

    If canContinue\(\) returns true, the operation continues. If not, the operation is blocked and the message returned by the method messages\(\) is displayed in the user interface.

    For example:

    ```
    package com.acme;
    
    import com.ibm.workplace.wcm.api.Document;
    import com.ibm.workplace.wcm.api.DocumentLibrary;
    import com.ibm.workplace.wcm.api.ErrorMessageContainer;
    import com.ibm.workplace.wcm.api.WCMApiObject;
    import com.ibm.workplace.wcm.api.extensions.operation.CreateOperationContext;
    import com.ibm.workplace.wcm.api.extensions.operation.OperationCheckPlugin;
    import com.ibm.workplace.wcm.api.extensions.operation.OperationCheckResult;
    import com.ibm.workplace.wcm.api.extensions.operation.OperationContext;
    
    /**
     * Test OperationCheckPlugin that will track if it has been invoked and can optionally
     * halt or allow the operation to continue. The message to return must be supplied or null
     * will be returned.
     */
    public class SampleOperationChecker implements OperationCheckPlugin
    {
       /** Operation cancel token. When found in the title of the item being created the operation
        * will be stopped. */
       public static final String CREATE_OP_STOPPER_TOKEN = "--- Operation Check Plugin ----";
       
       /** Message to return */
       private ErrorMessageContainer m_msgContainer = null;
       
       /**
        * Constructor
        */
       public SampleOperationChecker()
       {
          super();
       }
       
       @Override
       public OperationCheckResult checkOperation(OperationContext p_context)
       {         
          OperationCheckResult result = null;
          final boolean canContinue;
          if (p_context instanceof CreateOperationContext)
          {
             CreateOperationContext createContext = (CreateOperationContext) p_context;
             
             WCMApiObject object = createContext.object();
             String title = null;
             if (object instanceof Document)
             {
                Document document = (Document) object;
                title = document.getTitle();
             }
             else if (object instanceof DocumentLibrary)
             {
                title = ((DocumentLibrary)object).getTitle();
             }
             else
             {
                title = object.getName();
             }
             
             if (title != null && title.indexOf(CREATE_OP_STOPPER_TOKEN) > -1)
             {
                canContinue = false;
             }
             else
             {
                canContinue = true;
             }
          }
          else
          {
             canContinue = true;
          }
           
          result = new OperationCheckResult()
          {        
             @Override
             public ErrorMessageContainer messages()
             {
                return m_msgContainer;
             }
             
             @Override
             public boolean canContinue()
             {
                return canContinue;
             }
          };  
             
          return result;
       }
    
       @Override
       public Operation scope()
       {
          return Operation.CREATE;
       }    
       
       /**
        * @param p_msgContainer message container this plugin will return
        */
       public void setMsgContainer(ErrorMessageContainer p_msgContainer)
       {
          m_msgContainer = p_msgContainer;
       }
    }
    ```

3.  A plugin.xml file is needed whether the deployment is done by using a WAR or EAR, or by using a loose JAR file. If deployed by using an application in a WAR or EAR, include the plugin.xml file in the application "WEB-INF" folder. When a JAR file is used, include the plugin.xml in the root of the JAR file.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <plugin id="com.acme" 
      name= "Sample Operation Check Plugin"
    		version= "1.0.0"
    		provider-name= "IBM" >
        <extension point="com.ibm.workplace.wcm.api.OperationCheckPlugin" 
        id="SampleOperationChecker" >
            <processor class="com.acme.SampleOperationChecker"/>
        </extension>
    </plugin>
    ```


-   Each plug-in is represented by a single `<extension></extension>` tag.
-   The value of the point attribute must be "`com.ibm.workplace.wcm.api.OperationCheckPlugin`".
-   Provide an ID value of your choice.
-   Specify the provider class for your plug-in.

**Naming conventions:**

If you create a plug-in application with the same names and IDs as an existing plug-in, the new plug-in might override the first. When you create plug-in applications, ensure that the following are unique across your system:

-   The plug-in ID, plug in name, and extension ID of the plugin.xml file.
-   The fully qualified class name plus path of all classes within the application.
-   The file path of any files within the application.

**Parent topic:**[How to create custom plug-ins ](../wcm/wcm_dev_plugins.md)

