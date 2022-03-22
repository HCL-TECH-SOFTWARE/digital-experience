# JSP tags for standard portlets

The standard portlet API defines several tags that can be used in portlet JSPs to access the portlet request and response and to generate URLs.

To make these tags available in a JSP, the following directive is required at the beginning of the JSP:

```

   <%@ taglib uri="http://java.sun.com/portlet" prefix="portlet"%>

```

For more information, see [Java Portlet Specification](http://jcp.org/en/jsr/detail?id=168).

HCL Portal provides an extra tag for use in standard portlets. To make these tags available in a JSP, the following directive is required:

```

 <%@ taglib uri="/WEB-INF/tld/ibm-portlet-ext-v60.tld" prefix="portlet-ext" %>   <%@ taglib uri="/WEB-INF/tld/ibm-portlet-ext-v61.tld" prefix="portlet-ext" %> 
```

```
<%@ taglib 
    uri="http://www.ibm.com/xmlns/prod/websphere/portal/v7/portlet/ibm-portlet-ext" 
    prefix="portlet-ext" %>
```

```
<%@ taglib 
    uri="http://www.ibm.com/xmlns/prod/websphere/portal/v8/portlet/ibm-portlet-ext" 
    prefix="portlet-ext" %>
```

The following is a brief description of the extension to the JSR 168 portlet JSP tag library.

-   **<portlet-ext:portalRenderURL attribute="value"\>**

    Creates a URL to pages or portlets on pages. Attributes are as follows:

    -   **contentNode="id\|name"**

        Indicates the ID or unique name of the page. The name or ID of the content node is also used to specify the page where the portlet can be found.

    -   **portletWindow="id\|name"**

        Indicates the ID or unique name of the control that holds the portlet. Must be used in combination with the attribute contentNode to identify the page where the portlet is located.

    -   **portletMode="view\|help\|edit\|configure"**

        For URLs to a portlet indicated by portletWindow, this attribute sets the portlet mode. This parameter is ignored if the attribute portletWindow is not set.

    -   **windowState="maximized\|minimized\|normal"**

        In a portlet, this attribute indicates the state of the portlet window when it is displayed. If the portlet state is not specified, the page is shown with the previous state of the portlet. This parameter is ignored if the attribute portletWindow is not set.

    -   **portalState="solo\|normal"**

        Indicates whether the specified portlet window is rendered normally or solo, that is without a theme. This parameter is ignored if the attribute portletWindow is not set.

    -   **newWindow="true\|false"**

        This attribute creates a session partition. For portlet URLs, use this attribute if you want to display the portlet either in a new window or in an iFrame. The default value is false. The portlet window state for the addressed portlet in the new window is set to maximized. The portlet mode is set to the value of the current parent window.

    -   **locale="locale"**

        Specifies the locale with which subsequent portal page requests are rendered. This attribute is optional.

    -   **var ="name"**

        Specifies the name of a scripting variable that is exposed in the body of the tag. This attribute is optional. The variable exposes an object that implements the interface `com.ibm.portal.DisposableURL` that can be used to stream the URL to the output.

-   **<portlet-ext:urlParam name="parameter\_name" value="parameter\_value"\>**

    Use this tag to add custom parameters of your choice to the parent portalRenderURL. Parameters are added to the portalRenderURL as render parameters of the specified portlet window. Parameters are ignored if the enclosing portalRenderURL does not specify the attribute portletWindow. Specify attributes as follows:

    -   **name**

        Required. Indicates the name of the parameter.

    -   **value**

        Required. Indicates the value of the parameter.

-   **<portlet-ext:bidi dir="rtl\|ltr" /\>**

    This tag is used to support bidirectional languages. Bidirectional languages contain text that reads in both directions. For example, URLs, code samples, or directory and file names can be read in the opposite direction of the rest of the text.

    -   **dir**

        Indicates the normal direction of text in the language.

        -   For dir="rtl", the tag content is written only if the client's locale belongs to a bidirectional language. This is the default setting if dir is not specified.
        -   For dir="ltr", the tag content is written only if the client's locale does not belong to a bidirectional language.
    -   **locale**

        The tag content is written only if the language is not bidirectional.

-   **<portlet-ext:setBundle basename="value" var="value" scope="value" bundle="value" provider="value"/\>**

    Use this tag to compute the locale that is used for the JSTL format tags that are based on the portal specific locale computation algorithms. To make sure that the locale used by JSTL matches the locale that is used by other dynamic elements on the portal page, prefer this tag over the JSTL tag `<fmt:setBundle>`. This creates a globalization context and stores it in the scoped variable or the `javax.servlet.jsp.jstl.fmt.localizationContext` configuration variable.

    -   **basename**

        The resource bundle base name. This is the fully qualified resource name of the bundle. It has the same form as a fully qualified class name, that is, it uses a period full stop \(.\) as the package component separator. It does not have a file type suffix, such as `.class` or `.properties`.

    -   **var**

        The name of the exported scoped variable that stores the globalization context of type `javax.servlet.jsp.jstl.fmt.LocalizationContext`.

    -   **scope**

        The scope of `var` or the globalization context configuration variable.

    -   **bundle**

        The instance of the `java.util.ResourceBundle` to use.

    -   **provider**

        The instance of the `com.ibm.portal.model.ResourceBundleProvider` to use.

    The use of `basename`, `bundle`, and `provider` are mutually exclusive.


You can also use JSTL tags as described in *Generating output*.

