# Skin templates

The static skin template skin.html is located in the root directory of the skin folder of the WebDAV file store. The skin.html file provides the full markup for decoration around a portlet or iWidget. As with theme templates, you can use dynamic content spots to add dynamic elements to the skin template at run time.

The portal provides a base skin template and localized skin templates.

The skin.html file is located in the root directory of the skin on WebDAV \\fs-type1\\skins\\skin-name\\, and there are localized skin.html files located within the nls directory under the skin \\fs-type1\\skins\\skin-name\\nls\\. Modify the skin template files by using the WebDAV entry point fs-type1. When you use this entry point, your changes to the skin template are immediately reflected with a browser refresh.

## Root skin template

In a default HCL Portal installation, the portal does not render the template file skin.html located in the root directory of the theme. Instead, this file links to the localized templates, and the portal renders the appropriate localized template. The links to the localized templates are at the beginning of the root template. They have the following form:

```
<a rel="alternate" href="nls/skin_locale_code.html" hreflang="locale_code" class="wpthemeDisplayNone"></a>
```

An example of a link to the English template file is as follows:

```
<a rel="alternate" href="nls/skin_en.html" hreflang="en" class="wpthemeDisplayNone"></a>
```

You can place the wpthemeDisplayNone class on these links so that the browser does not expose the anchor element in the user interface. This class makes sure that accessible technologies, such as screen readers, do not encounter these links in the tab order.

If you do not want to use localized skin templates, you can remove these links from the beginning section of the skin.html template in the root directory. If you remove the links, the portal renders the root template.

The root skin template also includes Apache Ant scripting in the following form:

```
${bundle_name:bundle_key:character_encoding}
```

The character\_encoding replaces special characters with the escape sequence determined by the specified encoding. The available types of encoding are XML or JSON. You can chain multiple instances of encoding by or as follows:

```
${bundle:key:json:xml} or ${bundle:key:xml:json}
```

You can use the Apache Ant build framework to generate localized templates based on this root template. This framework can be useful if you want to update one template during development and then generate the templates. If you want to use only the root template, replace the Ant scripting with the preferred text that you want to be rendered. You can learn more about the Ant build tool at the Apache Ant Welcome page.

## Localized skin templates

In a default portal installation, the theme renders content by using the localized skin templates. These templates are located in the nls sub-directory under the skin directory on WebDAV. These files have the locale code appended to the end of the template name, for example skin\_en.html for English. These templates have translated static text inline within the template.

When you use the localized skin templates and want to view your changes, update the template that the portal renders in the browser. For example, if your preferred language is English, update the fileskin\_en.html file.

## Server-side dynamic content spots

-   **`<a rel="dynamic-content" href="lm:title">`**

    This inserts the portlet title into the skin.

-   **`<a rel="dynamic-content" href="lm:control">`**

    This renders the content of the portlet.


## Client-side dynamic content spots

Client-side content spots are replaced at page load time or at run time through JavaScript by RuntimeSkinModel and the live text service.

-   **class='lm-dynamic-icon'**

    By default, the skins do not contain the lm-dynamic-icon spot. If you want support for a dynamic icon, you need to add an image tag to the titlebar markup in the skin HTML template.

    For Example:

    ```
    <img class="lm-dynamic-icon" src=""/>
    ```

    This provides a client-side way for changing the icon for the portlet or iWidget in the skin dynamically. For example, you can add the following code sample to set the icon dynamically. The second parameter sent into the setDynamicContent function is a URL that is the `src` of the icon <img\> element.

    ```
    var skinNode = com.ibm.mashups.enabler.runtime.skin.Factory.getRuntimeSkinModel().find("somePortletID");
    	skinNode.setDynamicContent(com.ibm.mashups.enabler.runtime.skin.Constants.DYNAMIC_CONTENT_ICON, "http://www.cntserv_exmp.com/icon.gif");
    ```

    !!! note
        The somePortletID function fetched from the runtime skin model is a string ID of the layout node for which the title or icon is changed. The profile used on the page must include Enabler in view mode as it is required to fetch the skin node and set the dynamic content.

    !!! note
        Enabler has been deprecated.

-   **class='lm-dynamic-title'**

    This content spot changes the title of the skin dynamically at run time.

    For example, to set the title, the second parameter is a string that is inserted as the new title.

    ```
    skinNode.setDynamicContent(skinConstants.DYNAMIC_CONTENT_TITLE, "My new title")
    ```

    Where:

    -   var controlId: the string ID of the layout node for which the title or icon is changed.
    -   var runtimeSkinModel: `com.ibm.mashups.enabler.runtime.skin.Factory.getRuntimeSkinModel()`.
    -   var skinNode: `runtimeSkinModel.find(controlId)`.
    -   var skinConstants: `com.ibm.mashups.enabler.runtime.skin.Constants`.


???+ info "Related information:"
    - [Apache Ant - Welcome Page](http://ant.apache.org)

