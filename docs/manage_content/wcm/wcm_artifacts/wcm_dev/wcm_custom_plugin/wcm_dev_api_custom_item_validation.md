# Creating an item validation plug-in class

An item validation plug-in is used to validate a TemplatedDocument prior to it being committed to the repository. It is invoked as part of the standard item validation step. For example, saves occurring in the authoring interface, public API or REST API.

Possibly usages of this extension point include:

-   Validating cross field relationships
-   Complex custom field validation
-   Workflow validation for an item based on type and location in the repository

## Creating the item validation plug-in class

1.  Create a Java class that implements the interface `com.ibm.workplace.wcm.api.ItemValidationPlugin` . This class must implement the following methods:

    -   `DocumentId<? extends AbstractAuthoringTemplate>[]validationScope()`
    -   `ItemValidationResult validate(ItemContext context)`
    !!! note
      The validate method returns a ItemValidationResult that reports back any errors to be shown to the current user.

2.  Within the validate method any field of the item can be modified. After all validation plug-ins are started the standard item and template validation is performed. See the Web Content Manager Javadoc for further information.

    For example:

    ```
    
    package com.sample;
    
    import java.util.ArrayList;
    import java.util.Iterator;
    import java.util.List;
    import java.util.Locale;
    
    import com.ibm.portal.ListModel;
    import com.ibm.portal.Localized;
    import com.ibm.portal.ModelException;
    import com.ibm.workplace.wcm.api.AbstractAuthoringTemplate;
    import com.ibm.workplace.wcm.api.AuthoringTemplate;
    import com.ibm.workplace.wcm.api.Content;
    import com.ibm.workplace.wcm.api.Document;
    import com.ibm.workplace.wcm.api.DocumentId;
    import com.ibm.workplace.wcm.api.DocumentLibrary;
    import com.ibm.workplace.wcm.api.DocumentTypes;
    import com.ibm.workplace.wcm.api.RichTextComponent;
    import com.ibm.workplace.wcm.api.WCM_API;
    import com.ibm.workplace.wcm.api.Workspace;
    import com.ibm.workplace.wcm.api.exceptions.ComponentNotFoundException;
    import com.ibm.workplace.wcm.api.exceptions.OperationFailedException;
    import com.ibm.workplace.wcm.api.exceptions.ServiceNotAvailableException;
    import com.ibm.workplace.wcm.api.extensions.validation.ItemContext;
    import com.ibm.workplace.wcm.api.ItemValidationPlugin;
    import com.ibm.workplace.wcm.api.extensions.validation.ItemValidationResult;
    
    /**
     * A simple item validation plug-in
     */
    public class SampleItemValidator implements ItemValidationPlugin
    {
               
       /**
        * A simple list model holding locales.
        */
       protected static class SimpleLocaleListModel<K> implements ListModel<Locale>
       {
          /** the list of locales of this list model */
          final List<Locale> m_localeList = new ArrayList<Locale>();
    
          /**
           * Constructs this simple list model holding the given locales.
           * 
           * @param locales
           *           the locales of this list model. May be <code>null</code>.
           */
          public SimpleLocaleListModel(final Locale[] p_locales)
          {
             if (p_locales != null)
             {
                for (int i = 0; i < p_locales.length; ++i)
                {
                   m_localeList.add(p_locales[i]);
                }
             }
          }
    
          /*
           * (non-Javadoc) 
           * @see com.ibm.portal.ListModel#iterator()
           */
          @Override
          public Iterator<Locale> iterator() throws ModelException
          {
             return m_localeList.iterator();
          }
       }
    
       /** a list model that only contains the English language locale */
       private static final ListModel<Locale> ENGLISH_ONLY = new SimpleLocaleListModel<Locale>(new Locale[]{Locale.ENGLISH});
    
       /*
        * (non-Javadoc)
        * 
        * @see com.ibm.portal.Localized#getDescription(java.util.Locale)
        */
       @Override
       public String getDescription(final Locale p_locale)
       {
          return "This is a simple item validation plugin.";
       }
    
       /*
        * (non-Javadoc)
        * @see com.ibm.portal.Localized#getLocales()
        */
       @Override
       public ListModel<Locale> getLocales()
       {
          return ENGLISH_ONLY;
       }
    
       /*
        * (non-Javadoc)
        * @see com.ibm.portal.Localized#getTitle(java.util.Locale)
        */
       @Override
       public String getTitle(final Locale p_locale)
       {
          return "SimpleItemValidationPlugin";
       }
       
       /**
        * @see com.ibm.workplace.wcm.api.ItemValidationPlugin#validate(com.ibm.workplace.wcm.api.extensions.validation.ItemContext)
        */
       @Override
       public ItemValidationResult validate(ItemContext p_itemContext)
       {
          boolean isValidItem = true;
          String error = null;
          try
          {
             // Perform a very simple validation. Check for the Body element, and return an error if the string "BAD BAD BAD" is
             // found in the field.
             Document document = p_itemContext.document();
             if (document instanceof Content)
             {
                Content content = (Content) document;
                
                RichTextComponent body = (RichTextComponent)content.getComponent("Body");
                
                if (body == null)
                {
                   error = "Item validation failed: Content has no body element";
                   isValidItem = false;
                }
                else
                {
                   if (body.getRichText().contains("BAD BAD BAD"))
                   {
                      error = "Item validation failed: BAD BAD BAD message found in Body field.";
                      isValidItem = false;
                   }
                }
             }
          }
          catch (IllegalStateException e)
          {
             throw e;
          }
          catch (ComponentNotFoundException e)
          {
             error = "Item validation failed: Content has no body element";
             isValidItem = false;
          }
             
          final boolean isValidResponse = isValidItem;
          final String errorMessageResponse = error;     
          
          /**
           * @see com.ibm.workplace.wcm.api.extensions.validation.ItemValidationResult
           * 
           * A very simple ItemValidationResult that only returns errors. 
           */
          return new ItemValidationResult()
          {         
             @Override
             public Localized[] errorMessages()
             {
                return new Localized[]{
                   new Localized()
                   {             
                      public String getTitle(Locale locale)
                      {
                         return errorMessageResponse;
                      }               
                      
                      public ListModel<Locale> getLocales()
                      {
                         return ENGLISH_ONLY;
                      }
                                     
                      public String getDescription(Locale locale)
                      {
                         return null;
                      }
                   }
                };
             }
             
             @Override
             public boolean isValid()
             {
                return isValidResponse;
             }
    
             @Override
             public Localized[] infoMessages()
             {
                return null;
             }
             
             @Override
             public Localized[] warningMessages()
             {
                return null;
             }
             
             @Override
             public Localized[] successMessages()
             {
                return null;
             }
          };
       }
    
       /**
        * @see com.ibm.workplace.wcm.api.ItemValidationPlugin#validationScope()
        */
       public DocumentId<? extends AbstractAuthoringTemplate>[] validationScope()
       {
          try
          {
             // Find the Article authoring template in the sample out of the box library.
             Workspace workspace = WCM_API.getRepository().getSystemWorkspace();
             DocumentLibrary docLib = workspace.getDocumentLibrary("Web Content");
             workspace.setCurrentDocumentLibrary(docLib);
             DocumentId<AuthoringTemplate> templateId = workspace.findByName(DocumentTypes.AuthoringTemplate, "Article").next();
             
             
             
             // This plug-in will be invoked whenever a content item based on this template is saved.
             return new DocumentId[]{templateId};
          }
          catch (ServiceNotAvailableException e)
          {
             e.printStackTrace();
          }
          catch (OperationFailedException e)
          {
             e.printStackTrace();
          }
          return null;
       }
    
       @Override
       public boolean isShownInAuthoringUI()
       {
          return false;
       }
    }
    
    
    ```


## Create a plugin.xml file

A plugin.xml file is needed whether the deployment is done by using a WAR or EAR, or by using a loose jar. If you deploy using an application in a WAR or EAR, include the plugin.xml file in the application's WEB-INF folder. When you use a jar, include the plugin.xml in the root of the jar.

```
<?xml version="1.0" encoding="UTF-8"?>
<plugin id="Test" name="Simple Item Validation Plug-in" version="1.0.0" provider-name="IBM">
<extension point="com.ibm.workplace.wcm.api.ItemValidationPlugin" id="SimpleItemValidationPlugin">
<provider class="com.sample.SampleItemValidator"/>
</extension>
</plugin>
```

-   Each plug-in is represented by a single `<extension></extension>` tag.
-   The value of the point attribute must be `com.ibm.workplace.wcm.api.ItemValidationPlugin`.
-   Provide an ID value of your choice.
-   Specify the provider class for your plug-in.

**Naming conventions:**

If you create a new plug-in application with the same names and IDs as an existing plug-in, the new plug-in can override the first. When you create plug-in applications, ensure that the following are unique across your system:

-   The plug-in ID, plug-in name, and extension ID of the plugin.xml file.
-   The fully qualified class name plus path of all classes within the application.
-   The file path of any files within the application.


**Related information**  


[Plug-ins for Content Template](../ctc/ctc_arch_plugins_auth_branch_copy.md)

