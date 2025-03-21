# Enhanced rich text editor configuration options

This topic explains the different enhanced rich text editor configuration options using the TinyMCE editor for HCL Web Content Manager (WCM).

## Prerequisite

The TinyMCE editor requires a minimum supported Java level of 1.8. If you are unable to move to Java 8, it is recommended that you use the out-of-the-box, default CKEditor provided with HCL Digital Experience (DX).

## Using the TinyMCE editor in the WCM authoring portlet
You can use the TinyMCE editor in the WCM authoring portlet and [inline editing](wcm_config_prop_authoring.md#default-in-place-editing-mode). 
You can use the TinyMCE editor in the Web Content Manager (WCM) authoring portlet and [inline editing](wcm_config_prop_authoring.md#default-in-place-editing-mode). 

Before you can use TinyMCE in WCM, you need to add the following custom property to the WCM WCMConfigService resource environment provider: `inplaceEdit.defaultRichTextEditor=TinyMCE`

Follow these steps to start using TinyMCE in the authoring porlet:

1. In the authoring portlet page, go to **Preferences > Edit Shared Settings**.

2. Open the **Editor Options** menu.

3. Click the **Select the rich text editor to use in rich text fields** dropdown menu and choose **Enhanced Editor**. 

4. Click **OK**.

After configuring your authoring portlet to use TinyMCE, you can create a new piece of content with rich text using the TinyMCE Editor.

## Creating a custom configuration file for use with the TinyMCE editor

To customize the TinyMCE editor toolbar, plugins, style, and functionality, you need to create a `tiny_config.jsp` file. For example:
```jsp
// JSP page imports
<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="java.util.*" %>
<%@ page import="java.lang.reflect.*" %>
<%@ page import="com.ibm.portal.model.LocalizedContext" %>
<%@ page import="com.ibm.portal.model.PortalLocalizedContextHome" %>
<%@ page import="com.ibm.workplace.wcm.api.*" %>
<%@ page import="com.ibm.workplace.wcm.api.exceptions.*" %>
<%@ page import="com.ibm.workplace.wcm.api.authoring.EditorBean" %>
<%@ page import="java.security.Principal" %>
<%@ page import="javax.servlet.ServletContext" %>
<%@ page import="javax.servlet.http.HttpServletRequest" %>
<%@ page import="javax.servlet.http.HttpServletResponse" %>
<%@ page import="javax.servlet.jsp.JspWriter" %>
<%@ page import="javax.naming.InitialContext" %>
<%@ page import="javax.naming.NamingException" %>
<%@ page import="java.util.ResourceBundle" %>
<%@ page import="java.util.Locale" %>
<%@ page import="java.util.MissingResourceException" %>
<%@ page import="com.ibm.websphere.management.AdminServiceFactory" %>
<%@ page import="com.ibm.websphere.management.AdminService" %>
<%@ page import="javax.management.ObjectName" %>
<%@ page import="java.net.URLEncoder" %>

// JSP functions
<%!
public Locale getWcmLocale(final HttpServletRequest request) {
    //get the locale from WCM
    try {
        final InitialContext ctx = new InitialContext();
        final PortalLocalizedContextHome lolhome = (PortalLocalizedContextHome) ctx.lookup(PortalLocalizedContextHome.JNDI_NAME);
        final LocalizedContext localeContext = lolhome.getLocalizedContext(request);
        return localeContext.getPreferredSupportedLocale();
    } catch (NamingException e) {
        System.err.println("Unable to determine locale");
        throw new RuntimeException(e);
    }
}
%>

// JSP variables

<%
// The contextRoot must be consistent with the application config
final String contextRoot = com.ibm.wps.services.config.Config.URI_CONTEXT_PATH + "/tinymce";
final EditorBean editorBean = (EditorBean) request.getAttribute("EditorBean");
final String wcmId = editorBean.getName();
final String locale = getWcmLocale(request).toString();
final String directionality = editorBean.getDirection();
final String imgPath = contextRoot + "/images/icons";
final String styleSheetUrl = editorBean.getStyleSheetURL() == null ? "" : editorBean.getStyleSheetURL(); 
final boolean isCodeViewEnabled = !editorBean.isHTMLModeHidden();
final boolean isFormattingEnabled = !editorBean.isFormattingControlsHidden();
final boolean isLimitedToLibraryImagePicker = editorBean.isLimitedToLibraryImagePicker();
%>


// TinyMCE plugins defined with the tinymce.PluginManager API. For examples, check
// the tiny_config.jsp sample file under PortalServer_root\wcm\prereq.wcm\wcm\config\templates\shared\app\config\tinymce.

// The TinyMCE configuration object
tinyconfig = { 
  spelling: { 
    url: "/ephox-spelling-mce"
  }, 
  toolbar: 'undo redo | tbio_insert | styles | bold italic underline | ' +
            'align | bullist numlist indent outdent blockquote | ' + 
            'forecolor backcolor tbio_font-menu formatpainter removeformat ltr rtl |' +
            ' searchreplace a11ycheck fullscreen code tbio_usersettings'
  relative_urls: false,
  language: '<%= locale %>',
  directionality: '<%= directionality %>',
  additionalToolbarItems: ['tableofcontents', 'example'],
  additionalPlugins: 'tableofcontents example'
};
```

A more detailed sample configuration file with multiple examples can be found at `PortalServer_root\wcm\prereq.wcm\wcm\config\templates\shared\app\config\tinymce`.

There are a variety of configuration options available for you to enhance the rich text editing experience. These can be added to the tinyconfig
JSON object in the `tiny_config.jsp` file as configuration keys and values. 

|Key|Value Type|Default|Description|
|-----|----------|-------|-----------|
|`additionalToolbarItems`|`string[]`| `[]` |An array of strings that lists additional toolbar buttons to append to the end of the toolbar string.|
|`additionalPlugins`| `string` | `''` |A string that includes a list of plugins to include in TinyMCE. This string should have plugin names separated by spaces.|
|`content_style`|`string`|`''`|This option allows custom CSS styles to be set as a string. The styles are injected into the head of the page containing the editable area. In the Web Content Authoring Portlet, it is injected into the head of TinyMCE’s iframe. When inline editing, it is injected into the head of the page TinyMCE is rendered in.|
|`css.showDocumentStyles`|`boolean`|`false`|Determines whether to append the CSS classes in `css.documentStyles` and `css.stylesheets` to the styles dropdown.|
|`css.stylesheets`|`string[]`| | A list of CSS stylesheets that are used when editing rich text in the TinyMCE editor within the Web Content Authoring Portlet. This array should be made up of paths to CSS stylesheets, which are loaded in order from first to last. Note that this configuration key does not apply to inline editing.|
|`directionality`|`string`|`'<%= directionality %>'`|Sets the editors text flow direction. By default, it is mapped to a JSP function that dynamically determines the directionality for the current logged in user.|
|`language`|`string`|`'<%= locale %>'`|Sets the editor's language. By default, it is mapped to a JSP function that dynamically determines the language of the current logged in user.|
|`relative_urls`|`boolean`|`false`|For URLs with the same domain as the page containing the TinyMCE editor. If set to: \ntrue — All URLs created in TinyMCE will be converted to a link relative to the base url. \nfalse — All URLs will be converted to absolute URLs.|
|`spelling.url`|`string`|`"/ephox-spelling-mce"`|Sets the spelling service URL for spell checking|
|`style_formats`|An array of JSON objects|`|This option allows you to define custom items for the styles dropdown toolbar button and the styles menu item.|
|`style_formats_autohide`|`boolean`|`false`|Determines whether the style formats dropdown will automatically hide CSS classes that are not relevant to the currently selected DOM element in the rich text|
|`table_background_color_map`|An array of JSON objects||This option is used to specify the default values for the table cell background color picker|
|`table_border_color_map`|An array of JSON objects||This option is used to specify the default values for the table cell border color picker|
|`toolbar`|`string`|`'undo redo \| tbio_insert \| styles \| bold italic underline \| ' + ' align \| bullist numlist indent outdent blockquote \| ' + ' forecolor backcolor tbio_font-menu formatpainter removeformat ltr rtl \| ' + ' searchreplace a11ycheck fullscreen code tbio_usersettings'`|A string representing toolbar buttons, toolbar groups, and toolbar sections|
|`toolbar_mode`|`string`|`'floating'`|The toolbar_mode option is used to extend the toolbar to accommodate the overflowing toolbar buttons. This option is useful for small screens or small editor frames.|
|`table_toolbar`|`string`|`'tableprops tabledelete \| tableinsertrowbefore tableinsertrowafter tabledeleterow \| tableinsertcolbefore tableinsertcolafter tabledeletecol'`|This option allows you to specify the toolbar buttons shown on the contextual toolbar for tables|
|`ui.fonts`|`string[]` or an array of objects| |An array of strings with valid font names or an array of JSON objects with the font title and font name specified as key-value pairs|
|`ui.colors.buttons`|An array of JSON objects| |An array of color key value pairs where the value is an HTML color value used to add additional custom colors to the color picker|
|`ui.colors.custom`|`boolean`|`false`|Whether to show a custom color picker option below the standard color buttons| 
|`ui.toolbar.items`|`string[]`|`['undo', 'insert', 'style', 'emphasis', 'align', 'listindent', 'format', 'tools']`|An array of strings representing toolbar buttons and toolbar button groups| 
|`valid_children`|`string`|`''`|This option enables you to control what child elements can exist within specified parent elements.|

## Customizing the TinyMCE toolbar

You can customize the toolbar, adding, removing, reordering, and grouping buttons and dropdowns, by using either the `toolbar` or `ui.toolbar.items` config keys. 

???+ info "Note" 
    The two separate config keys for customizing the toolbar, `toolbar` and `ui.toolbar.items` are mutually exclusive and should not be used together.

The default toolbar configuration looks like this:

```jsp
tinyconfig ={
  //...
  ui: {
    toolbar: {
      items: ['undo', 'insert', 'style', 'emphasis', 'align', 'listindent', 'format', 'tools']
    }
  },
  //...
}
```

The `toolbar` object defined in `tinyconfig` contains a list of toolbar item groups. These toolbar item groups contain the following toolbar items:

|Toolbar Group Name|Toolbar Items in Group|
|------------------|----------------------|
|`undo`|`undo`, `redo`|
|`insert`|`wcm_insert`, a `+` button dropdown that contains `wcmlink`, `wcmimage`, `wcmtag`, `wcmremotedocumentlink`, `media`, `table`, `specialchar`, and `hr`|
|`styles`|`styles`|
|`emphasis`|`bold`, `italic`, `underline`|
|`align`|`align`|
|`listindent`|`bullist`, `numlist`, `indent`, `outdent`, `blockquote`|
|`format`|`forecolor`, `backcolor`, `tbio_font-menu`, `formatpainter`, `removeformat`, `ltr`, `rtl`|
|`tools`|`searchreplace`, `a11ycheck`, `fullscreen`, `code`, `tbio_usersettings`|

Most of the above toolbar buttons are documented in significant detail at TinyMCE's documentation site. There are a number of HCL DX developed and maintained buttons. Those are:

|Toolbar Button Name|Description|
|-------------------|-----------|
|`wcm_insert`|the `+` button dropdown group that contains `wcmlink`, `wcmimage`, `wcmtag`, `wcmremotedocumentlink`|
|`wcmlink`|Used to insert a link to either an external website or to a WCM content item|
|`wcmimage`|Used to insert an image into the rich text element. This can be an image in HCL Digital Asset Management, WCM, or from the author's local system|
|`wcmtag`|Used to insert a WCM tag|
|`wcmremotedocumentlink`|Used to insert a link to a remote document|

The simplest way to customize the toolbar is to include, remove, or reorder the groups of buttons in the `items` array. 

For more granular control, you can define your own toolbar groups before the `tinyconfig` object and then include those in the `items` array. The groups are of the form of 

```js
var groupName = {
    label: 'category.group',
    items: [
        'button1', 'button2', ...
    ]
}
```

Toolbar groups can have nested groups as well. Here is a more complex example of various user-defined toolbar groups. 

```js
var insertGroup = {
    label: 'category.insert', 
    items: [
        {
            label: 'Insert...', 
            items: [
                'media',
                'table'
                'specialchar',
                'wcmtag'
            ]
        }
    ]
};
var toolGroup = {
  label: 'Tools',  
  items: [
    'find',
    'tone',
    'accessibility',
    'wordcount'
  ]
};
var wcmLinkAndImage = {
  label: 'Insert Link / Image;,
  items: ['wcmlink', 'wcmimage']
};

tinyconfig = {
  //...
  ui: {
    toolbar: {
      items: ['undo', 'style', 'emphasis', insertGroup,  wcmLinkAndImage, 'align', toolGroup ]
    }
  }
  //...
}
```

Alternatively, as of CF224, you can define the toolbar buttons directly in the `toolbar` config string, like so:

```json
tinyconfig = {
  //...
  toolbar: 'undo redo | wcmlink wcmimage wcmtag | styles | bold italic underline align | bullist numlist indent outdent blockquote|',
  //...
}
```

The above toolbar string results in a toolbar that only contains the buttons listed above. The individual toolbar buttons are in a space separated string and the separate toolbar sections are separated with `|`. Further details on the kinds of buttons and the format of the toolbar string are available at TinyMCE's documentation site.

???+ info "Note"
    The HCL Digital Experience Enhanced Editor passes the `tinyconfig` object defined in `tiny_config.jsp` to our own internal call to initialize the TinyMCE Editor in the WCM authoring portlet. Only use the TinyMCE documentation site as a reference to look up further information about toolbar buttons, plugins, and properties that are specifically listed in the configuration options table. Do not invoke `tinymce.init()` in the `tiny_config.jsp` file.

## Using a custom configuration with the TinyMCE editor in the WCM authoring portlet

These customization steps only apply to the Enhanced editor used in the HCL WCM authoring portlet. If you are working in a clustered deployment, run these steps on the primary node only. Then, re-sync the cluster after the steps are completed.

1. The TinyMCE editor uses a custom configuration file that is named tiny_config.jsp to set custom parameters for the toolbar. Copy your custom configuration file to wp_profile_root\PortalServer\wcm\shared\app\config\tinymce.

    - You can find sample configurations in PortalServer_root\wcm\prereq.wcm\wcm\config\templates\shared\app\config\tinymce.

2. Open a command prompt.
3. Run the following command from the wp_profile_root/ConfigEngine directory:

    - **Windows™**

        ```bash
        `ConfigEngine.bat configure-wcm-ephox-editor-custom-configuration -DWasPassword=password -DPortalAdminId=username -DPortalAdminPwd=password`
        ```

    - **UNIX™ and Linux™**

        ```bash
        `./ConfigEngine.sh configure-wcm-ephox-editor-custom-configuration -DWasPassword=password -DPortalAdminId=username -DPortalAdminPwd=password`
        ```

    An administrator username and password are not required if you already specified the portal administrator username and password with the **PortalAdminId** and **PortalAdminPwd** settings in the wkplc.properties file.

4. Restart the server.

    To revert to the default editor toolbar, run the `remove-wcm-ephox-editor-custom-configuration` task and restart the server.

    ```bash
     ConfigEngine(sh/bat) remove-wcm-ephox-editor-custom-configuration -DWasPassword=password -DPortalAdminId=username -DPortalAdminPwd=password
    ```

## Migrating Textbox.io customizations to TinyMCE. 

If you have customized the WCM Advanced Editor, Textbox.io, you may need to migrate your customizations to the Enhanced Editor. Most configuration values supported in textbox.io will immediately work. At a high level, you can migrate these customizations by following these steps:

1. Create a new `tiny_config.jsp` file by copying the sample configuration file found in `PortalServer_root\wcm\prereq.wcm\wcm\config\templates\shared\app\config\tinymce\tiny_config.jsp`. 
2. Copy any additional custom JSP page imports from your `tbio_config.jsp` file to your new `tiny_config.jsp` file.
3. Copy any custom JSP functions from your `tbio_config.jsp` to your new `tiny_config.jsp` file. 
4. Copy any custom JSP variables from your old `tbio_config.jsp` file to your new `tiny_config.jsp` file. Do not overwrite the new variables or their new values, especially the `contextRoot`. 
5. If you previously customized your toolbar with custom toolbar groups in `tbio_config.jsp`, those can be copied as-is along with the helper functions to `flatten` the toolbar groups into a single array.
5. Rewrite your custom plugins to use the TinyMCE `PluginManager` API.
6. Copy your configuration key-value pairs from the `config` object defined in `tbio_config.jsp` directly to the `tinyconfig` object in `tiny_config.jsp`. 

After creating the `tiny_config.jsp` customization file, follow the steps listed under [Using a custom configuration with the TinyMCE editor in the WCM authoring portlet](./wcm_config_ephox_custom.md#using-a-custom-configuration-with-the-tinymce-editor-in-the-wcm-authoring-portlet--test) to apply your customizations to the Enhanced Editor.

## Using a custom TinyMCE editor toolbar with in-place editing

These customization steps only apply to Web content in-place editing with the TinyMCE editor.

1. Log in to the WebSphere® Integrated Solutions Console as an administrator.

2. Click **Resources** > **Resource Environment** > **Resource Environment Providers** > **WCM WCMConfigService**.

3. Click **Custom properties** to update the configuration properties.

4. Edit or create the property `inplaceEdit.toolbarConfigForRichText`, and set its value to match the desired toolbar icons.

    Sample values:

    - Single toolbar in space-separated list of buttons

        ```bash
        formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat
        ```

    - Multiple toolbars in an array

        ```bash
        [ 'undo redo | bold italic underline | fontselect fontsizeselect', 'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent | a11ycheck' ]
        ```

5. Save your changes.

6. Restart the Portal server to apply your changes.

    To revert to the default editor toolbar, remove the property `inplaceEdit.toolbarConfigForRichText` and restart the server.

???+ info "Related information"
    - [WebSphere® Integrated Solutions Console](../../../deployment/manage/portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)
    - [TinyMCE Documentation](https://www.tiny.cloud/docs/tinymce/6/){target="_blank"}
    - [TinyMCE Plugin API Documentation](https://www.tiny.cloud/docs/tinymce/6/apis/tinymce.plugin/){target="_blank"}
