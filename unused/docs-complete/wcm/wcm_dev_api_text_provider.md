# Creating a Text Provider class

A text provider is used to provide localized text that can be used within web content item forms. For example, a text provider can be used to localize the field labels or help text within an authoring template so that each user sees the labels or help text in their own language.

To use a text provider, you must create a text provider class and then register the text provider by deploying it on the server.

1.  Create a java class that implements the interface com.ibm.workplace.wcm.api.plugin.textprovider.TextProvider. This class must implement the following methods:

    -   **`public String getProviderName()`**

        This method returns the unique name of the text provider.

    -   **`public String getString(String key, Locale displayLocale)`**

        This method returns some translated text, given a key identifying the message, and a locale.

    -   **`public Collection<String> getProviderKeys()`**

        This method returns a list of keys that are used when accessing the text provider. These keys are displayed in the authoring UI when a user is configuring the text provider.

    -   **`public boolean isShownInAuthoringUI()`**

        This method is used to prevent your text provider from appearing in the authoring UI.

    See the Javadoc documentation for further information. The Javadoc files for Web Content Manager are in the `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/doc/Javadoc/spi_docs/com/ibm/workplace/wcm` directory.

2.  Methods that are inherited from com.ibm.portal.Localized must also be implemented.

    -   **`public String getTitle(Locale displayLocale)`**

        This method returns the title for the text provider that is used to allow selection of the text provider.

    -   **`public ListModel<Locale> getLocales()`**

        This method returns a list of locales that are supported by this text provider.

    -   **`public String getDescription(Locale p_arg0)`**

        This method returns a description of the text provider.

    For example:

    ```
    package test;
    
    import java.io.IOException;
    import java.util.ArrayList;
    import java.util.Collection;
    import java.util.Iterator;
    import java.util.LinkedHashSet;
    import java.util.List;
    import java.util.Locale;
    import java.util.MissingResourceException;
    import java.util.Properties;
    import java.util.ResourceBundle;
    import java.util.Set;
    
    import com.ibm.portal.ListModel;
    import com.ibm.portal.ModelException;
    import com.ibm.workplace.wcm.api.plugin.textprovider.TextProvider;
    
    /**
     * A simple text provider implementation
     */
    public class SimpleTextProvider implements TextProvider
    {
       /** Path to Bundle properties file (English used for loading keyset) */
       private static final String BUNDLE_PROPERTIES = "/test/SimpleBundle_en.properties";
    
       /** The text provider title */
       public static final String PROVIDER_TITLE = "Simple Text Provider";
       
       /** The unique text provider name */
       public static final String PROVIDER_NAME = "test.SimpleTextProvider";
       
       /** A brief description of this text provider */
       private static final String PROVIDER_DESCRIPTION = "Simple Text provider";
       
       /** The resource bundle used to lookup strings */
       private static final String RESOURCE_BUNDLE_NAME = "test.SimpleBundle";
       
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
           * @param p_locales
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
    
          @Override
          public Iterator<Locale> iterator() throws ModelException
          {
             return m_localeList.iterator();
          }
       }
    
       /** a list model that only contains the English language locale */
       private static final ListModel<Locale> ENGLISH_ONLY = new SimpleLocaleListModel<Locale>(new Locale[]{Locale.ENGLISH});
       
       @Override
       public String getProviderName()
       {
          return PROVIDER_NAME;
       }
    
       @Override
       public String getTitle(Locale p_displayLocale)
       {
          // Perform any localization for the plug-in title here
          return PROVIDER_TITLE;
       }
       
       @Override
       public String getDescription(Locale p_displayLocale)
       {
          return PROVIDER_DESCRIPTION;
       }
    
       @Override
       public String getString(String p_key, Locale p_displayLocale)
       {
          String value;
       
          try
          {
             ResourceBundle bundle = ResourceBundle.getBundle(RESOURCE_BUNDLE_NAME, p_displayLocale);
             value = bundle.getString(p_key);
          }
          catch (MissingResourceException e)
          {
             // The bundle or key was not found. Return null.
             value = null;
          }
          return value;
       }
    
       @Override
       public Collection<String> getProviderKeys()
       {
          Collection<String> keys = null;
          try
          {
             LinkedProperties props = new LinkedProperties();
             props.load(getClass().getClassLoader().getResourceAsStream(BUNDLE_PROPERTIES));
             
             keys = props.getKeySet();
          }
          catch (IOException e)
          {
             // The bundle was not found. Return null.
             e.printStackTrace();
          }
          
          return keys;
       }
    
    
       @Override
       public ListModel<Locale> getLocales()
       {
          return ENGLISH_ONLY;
       }
    
       @Override
       public boolean isShownInAuthoringUI()
       {
          return true;
       }
       
       /** Used to provide the properties in order */
       private class LinkedProperties extends Properties {
    
          /** Keys */
          private final LinkedHashSet<String> keys = new LinkedHashSet<String>();
        
          /**
           * @return An ordered set of keys
           */
          public Set<String> getKeySet()
          {
             return keys;
          }
    
          @Override
          public Object put(Object key, Object value) {
              keys.add((String) key);
              return super.put(key, value);
          }
      }
    }
    
    ```

    See the Javadoc documentation for further information.

3.  A plugin.xml file is needed whether the deployment is done using a WAR or EAR, or using a loose jar. If deploying via an application in a WAR or EAR, include the plugin.xml file in the application's WEB-INF folder. When using a jar, include the plugin.xml in the root of the jar.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <plugin id="com.acme"
           name="Sample Text Provider"
           version="1.0.0"
           provider-name="IBM">
           
     <extension
        point="com.ibm.workplace.wcm.api.TextProvider"
        id="SampleTextProvider">
        <provider class="com.acme.SampleTextprovider"/>
     </extension>
    
    </plugin>
    ```

    **Extend the Text ProviderAdapter:** If you are creating a text provider that uses a resource bundle to provide the translated strings, your text provider class can extend `com.ibm.workplace.wcm.api.plugin.textprovider.TextProviderAdapter` instead of implementing `TextProvider`. If you choose to do this, the `getString()` and `getProviderKeys()` method are implemented for you, so you do not have to override them.

    ```
    package com.ibm.workplace.wcm.ctc;
    
    import java.util.Locale;
    
    import java.io.IOException;
    import java.util.ArrayList;
    import java.util.Collection;
    import java.util.Iterator;
    import java.util.LinkedHashSet;
    import java.util.List;
    import java.util.MissingResourceException;
    import java.util.Properties;
    import java.util.ResourceBundle;
    import java.util.Set;
    
    import com.ibm.portal.ListModel;
    import com.ibm.portal.ModelException;
    import com.ibm.workplace.wcm.api.plugin.textprovider.TextProviderAdapter;
    
    /**
     * A simple text provider implementation that extends TextProviderAdapter.
     */
    public class SimpleTextProvider extends TextProviderAdapter
    {  
       /** The resource bundle used to lookup strings */
       private static final String RESOURCE_BUNDLE_NAME = "test.SimpleBundle";
       
       /** The text provider title */
       public static final String PROVIDER_TITLE = "Simple Text Provider";
       
       /** A brief description of this text provider */
       private static final String PROVIDER_DESCRIPTION = "Simple Text provider";
       
       /** The unique text provider name */
       public static final String PROVIDER_NAME = "test.SimpleTextProvider";
       
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
           * @param p_locales
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
    
          @Override
          public Iterator<Locale> iterator() throws ModelException
          {
             return m_localeList.iterator();
          }
       }
    
       /** a list model that only contains the English language locale */
       private static final ListModel<Locale> ENGLISH_ONLY = new SimpleLocaleListModel<Locale>(new Locale[]{Locale.ENGLISH});
       
       @Override
       public String getProviderName()
       {
          return PROVIDER_NAME;
       }
    
       @Override
       public String getTitle(Locale p_displayLocale)
       {
          // Perform any localization for the plug-in title here
          return PROVIDER_TITLE;
       }
       
       @Override
       public String getDescription(Locale p_displayLocale)
       {
          return PROVIDER_DESCRIPTION;
       }
    
       @Override
       public boolean isShownInAuthoringUI()
       {
          return true;
       }
    
       @Override
       protected String getResourceBundleName()
       {
          return RESOURCE_BUNDLE_NAME;
       }
    
       @Override
       public ListModel<Locale> getLocales()
       {
          return ENGLISH_ONLY;
       }
    }
    
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

When sorting is applied to a set of items, the item title is used to sort the items, not the title specified in the text provider.

**Parent topic:**[How to create custom plug-ins ](../wcm/wcm_dev_plugins.md)

**Related information**  


[Configuring the validation of friendly URLs for web content](../wcm/configure_validate_friendly_urls.md)

