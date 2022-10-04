# How to create a rendering plug-in class

A rendering plug-in is a reusable class that you create to run a task at render time. It can be referenced within web content by using a plug-in tag. For example, you might write a plug-in that uses attributes from the current user's profile to determine whether the body of the plug-in tag is rendered or not. A rendering plug-in class requires you to reference a set of web content API methods.

## Creating a plug-in class

1.  Create a Java class that implements the interface `com.ibm.workplace.wcm.api.plugin.rendering.RenderingPlugin` or `RenderingPluginDefinition`. This class must implement the following methods:
    -   `public String getName()`.

        !!! note
         This name is used as the "name" parameter of the plug-in tag. See [Creating a plug-in tag](../../tags/creating_web_content_tags/creating_plugin_tag/index.md) for further information.

    -   `public Boolean render(RenderingPluginModel p_model)` throws `RenderingPluginException`.
2.  Implement `render()method`. This method contains the code that is run when the plug-in is started during rendering of a layout that contains a "plug-in" tag that references the custom plug-in. Returning true renders the body markup that is defined in the plug-in tag. If false is returned, the body of the plug-in tag is skipped. If the plug-in tag has no body markup, then the return value is ignored.
3.  Methods that are inherited from com.ibm.portal.Localized must also be implemented.

    -   **`public String getTitle(Locale displayLocale) {}`**

        This method returns the title for the rendering plug-in that is used to allow selection of the rendering plug-in.

    -   **`public ListModel<Locale> getLocales()`**

        This method returns a list of locales that are supported by this rendering plug-in.

    -   **`public String getDescription(Locale p_arg0)`**

        This method returns a description of the rendering plug-in.

    See the Javadoc documentation for further information. The Javadoc files for Web Content Manager are in the `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/doc/Javadoc/spi_docs/com/ibm/workplace/wcm` directory.

4.  The rendering plug-in can optionally implement `RenderingPluginDefinition` instead of `RenderingPlugin` to define its type and parameters. This is recommended, because it allows the rendering plug-ins to be used more easily.

    To do this, implement the methods:

    -   `public RenderingPluginType getType()`.
    -   `public List<RenderingPluginParameter>getParameters()`.

    !!! note
      When creating a custom rendering plug-in:

    -   Do not use "name" as a parameter in the rendering plug-in, because the name of the plug-in is stored as the "name" parameter.
    -   If you use "id" as a rendering parameter, it will not be displayed in read mode.

For example:

```
package test;

import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;

import com.ibm.portal.ListModel;
import com.ibm.portal.ModelException;
import com.ibm.workplace.wcm.api.plugin.rendering.RenderingPluginDefinition;
import com.ibm.workplace.wcm.api.plugin.rendering.RenderingPluginException;
import com.ibm.workplace.wcm.api.plugin.rendering.RenderingPluginModel;
import com.ibm.workplace.wcm.api.plugin.rendering.RenderingPluginParameter;
import com.ibm.workplace.wcm.api.plugin.rendering.RenderingPluginParameterAdapter;
import com.ibm.workplace.wcm.api.plugin.rendering.RenderingPluginParameterImpl;
import com.ibm.workplace.wcm.api.plugin.rendering.RenderingPluginType;
import com.ibm.workplace.wcm.api.plugin.rendering.RenderingPluginTypes;
import com.ibm.workplace.wcm.api.plugin.rendering.RenderingPluginParameter.Required;
import com.ibm.workplace.wcm.api.plugin.rendering.ValueOptionImpl;

/**
 * A simple rendering plugin to demonstrate the use of the <code>RenderingPlugin</code> API.
 */
public class SimpleRenderingPlugin implements RenderingPluginDefinition
{
   /** The 'render body' parameter */
   private static final String RENDER_BODY_PARAM = "renderbody";
   
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
   public String getDescription(final Locale p_locale)
   {
      return "This is a simple rendering plugin.";
   }

   @Override
   public ListModel<Locale> getLocales()
   {
      return ENGLISH_ONLY;
   }

   @Override
   public String getName()
   {
      return "SimpleRenderingPlugin";
   }

   @Override
   public String getTitle(final Locale p_locale)
   {
      return "SimpleRenderingPlugin";
   }

   @Override
   public boolean isShownInAuthoringUI()
   {
      return false;
   }

   @Override
   public boolean render(final RenderingPluginModel p_model) throws RenderingPluginException
   {
      final Map<String, List<String>> params = p_model.getPluginParameters();

      // determine whether the inner contents of the plugin should actually be rendered
      final boolean renderBody;
      final List<String> renderBodyList = params.get(RENDER_BODY_PARAM);
      if (renderBodyList != null && renderBodyList.get(0).equals("false"))
      {
         renderBody = false;
      }
      else
      {
         renderBody = true;
      }

      // render the output of the plugin to the writer provided by the RenderingPluginModel
      final Writer writer = p_model.getWriter();
      try
      {
         writer.write("<b>Simple RenderingPlugin</b>");

         final Set<String> keys = params.keySet();

         final Iterator<String> iter = keys.iterator();
         while (iter.hasNext())
         {
            String key = iter.next();
            writer.write("<br>" + key + " = " + params.get(key));
         }

         writer.write("<br><br>");
      }
      catch (IOException e)
      {
         e.printStackTrace();
      }

      return renderBody;
   }

   @Override
   public RenderingPluginType getType()
   {
      return RenderingPluginTypes.CONTENT;
   }

   @Override
   public List<RenderingPluginParameter> getParameters()
   {
      List<RenderingPluginParameter> parameters = new ArrayList<RenderingPluginParameter>();
      RenderingPluginParameterAdapter renderBodyParam = new RenderingPluginParameterImpl(RENDER_BODY_PARAM).required(Required.NOT_REQUIRED_SHOW_BY_DEFAULT).allowedValues(new ValueOptionImpl("true"), new ValueOptionImpl("false"));
      parameters.add(renderBodyParam);
      return parameters;
   }
}
```

## Create a plugin.xml file

A plugin.xml file is needed whether the deployment is done by using a WAR or EAR, or by using a loose jar. If deploying an application in a WAR or EAR, include the plugin.xml file in the application's WEB-INFfolder. When using a jar, include the plugin.xml in the root of the jar.

```
<?xml version="1.0" encoding="UTF-8"?>
<?eclipse version="3.0"?>
<plugin
   id="Test"
   name="Simple Rendering Plug-in Test"
   version="1.0.0"
   provider-name="IBM">
   
   <extension
     point="com.ibm.workplace.wcm.api.RenderingPlugin"
     id="SimpleRenderingPlugin">
     <provider class="test.SimpleRenderingPlugin"/>
   </extension>                       
</plugin>
```

-   Each plug-in is represented by a single `<extension></extension>` tag.
-   The value of the point attribute must be `com.ibm.workplace.wcm.api.RenderingPlugin`.
-   Provide an ID value of your choice.
-   Specify the provider class for your plug-in.

**Naming conventions:**

If you create a plug-in application with the same names and IDs as an existing plug-in, the new plug-in will not be registered. When creating plug-in applications ensure that the following are unique across your system:

-   The plug-in ID, plug-in name, and extension ID of the plugin.xml file.
-   The fully qualified class name plus path of all classes within the application.
-   The file path of any files within the application.


