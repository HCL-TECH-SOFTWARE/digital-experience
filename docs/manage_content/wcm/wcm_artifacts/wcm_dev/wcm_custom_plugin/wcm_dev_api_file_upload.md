# Creating a file upload validation class

A file upload validation plug-in is started anytime a file is uploaded into Web Content Manager. This includes uploading files into file resource, image and stylesheet elements, and images that are uploaded into rich text or HTML elements. The plug-in is called within the "validation" processing that is used by Web Content Manager when uploading files.

To create a file upload validation plug-in, you must create a file upload validation class and then register the file upload validation class by deploying it on the server.

1.  Create a java class that implements the interface `com.ibm.workplace.wcm.api.extensions.validation.FileUploadValidationPlugin` . This class must implement the following methods:

    -   **`public String getName()`**

        This method returns the unique name of the file upload validation plug-in.

    -   **`public boolean validate(InputStream p_inptStream, FileUploadValidationContext p_context)`**

        This method throws the FileUploadValidationException.

    See the Javadoc documentation for further information. The Javadoc files for Web Content Manager are in the [PortalServer_root](../../../../../guide_me/wpsdirstr.md)`/doc/Javadoc/spi_docs/com/ibm/workplace/wcm` directory.

2.  Implement `validate()method`. This method contains the code that will be run when the plug-in is invoked when uploading a file. If validated, the file continues to upload. If not validated then the file upload is stopped. You can display a message in the user interface by including the following code in validate method:

    ```
    throw new FileUploadValidationException( your own message );
    ```

    For example:

    ```
    package pers.smp.extension.test.validation;
    
    import java.io.InputStream;
    import java.util.logging.Logger;
    
    import com.ibm.workplace.wcm.api.extensions.validation.FileUploadValidationContext;
    import com.ibm.workplace.wcm.api.extensions.validation.FileUploadValidationException;
    import com.ibm.workplace.wcm.api.extensions.validation.FileUploadValidationPlugin;
    import com.ibm.workplace.wcm.services.validation.FileUploadValidationContextImpl;
    
    public class SMPValidation1 implements FileUploadValidationPlugin
    {
       private final long MAX_SIZE_IMAGES = 512 * 1024;
       private final long MAX_SIZE_FILES = 1024 * 1024;
    
       private static Logger s_log = Logger.getLogger(SMPValidation1.class.getName());
       
       public String getName()
       {
          return "SMPValidation1";
       }
    
       public boolean validate(InputStream p_inptStream, FileUploadValidationContext p_context) 
    throws FileUploadValidationException
       {
          s_log.info("File Name : " + p_context.getFileName() );
          s_log.info("File Type : " + p_context.getMimeType() );
          s_log.info("File Size : " + p_context.getFileSize() );
          s_log.info("Document Type : " + p_context.getDocumentType() );
    
          boolean valid = true;
          String message = null;
          
          String mimeType = p_context.getMimeType();
          
          if ( mimeType != null && mimeType.startsWith( "image/" ) )
          {
             if ( ! (mimeType.equalsIgnoreCase( "image/gif") ||  mimeType.equalsIgnoreCase( "image/jpeg") ) )
             {
                throw new FileUploadValidationException( "Invalid image type : " + mimeType + 
    " will only accept GIF and JPG images" );
             }
             if ( p_context.getFileSize() > MAX_SIZE_IMAGES )
             {
                throw new FileUploadValidationException( "Image is too big 500K is maximum size allowed for images.  Size is 
    " +  p_context.getFileSize());
             }
          }
          else
          {
             if ( p_context.getFileSize() > MAX_SIZE_FILES )
             {
                throw new FileUploadValidationException( "File is too big 1M is maximum size allowed for 
    " + mimeType + ".  Size is " +  p_context.getFileSize());
             }
             
          }
          
          return valid;
       }
    }
    ```

3.  A plugin.xml file is needed whether the deployment is done using a WAR or EAR, or using a loose jar. If deploying via an application in a WAR or EAR, include the plugin.xml file in the application's "WEB-INF" folder. When using a jar, include the plugin.xml in the root of the jar.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <plugin id="pers_smp_extension_test"
            name="SMP Test Extensions"
            version="1.0.0"
            provider-name="IBM">
            
      <extension
         point="com.ibm.workplace.wcm.api.FileUploadValidationPlugin" id="SMPValidation1">
         <provider class="pers.smp.extension.test.validation.SMPValidation1"/>
      </extension>
    
    </plugin>
    ```


-   Each plug-in is represented by a single `<extension></extension>` tag.
-   The value of the point attribute must be `com.ibm.workplace.wcm.api.FileUploadValidationPlugin`.
-   Provide an ID value of your choice.
-   Specify the provider class for your plug-in.

**Naming conventions:**

If you create a new plug-in application with the same names and IDs as an existing plug-in, the new plug-in can override the first. When creating plug-in applications ensure that the following are unique across your system:

-   The plug-in ID, plug-in name and extension ID of the `plugin.xml` file.
-   The fully qualified class name plus path of all classes within the application.
-   The file path of any files within the application.


