# Changes to Struts JSPs

The JSPs for Struts applications in the portal environment have to be modified to adapt to the way the portal server expects portlet URIs to be created. There are some changes to the tag library for HTML markup and additional tag libraries have been added to support cHTML and WML markup.

-   [Creating portlet URIs](#return)
-   [Style sheets](#style)
-   [Markup support](#markup)
    -   [Using the cHTML tags](#chtml)
    -   [Using the WML tags](#wml)

## Creating portlet URIs

The Struts application paths, both to actions and to pages, must be sent and retrieved using portlet URIs. Portlet URIs have a specific format. A special API is used to generate the URI and add the required information to be passed to the portlet. If portlet URIs were not used, control would not get passed to the correct portlet. Thus, the portlet URIs must be used to get control passed to the correct portlet, with the additional path information needed by the Struts application made available. The Struts tags have been modified to automatically provide this needed functionality.

Struts Action mappings are defined in terms of paths. The name and location of page objects \(for example, JSPs\) are also defined using paths. Thus, although portlets have their own form of URI, it is still necessary to associate the Struts path with an action sent to a portlet and to retrieve that Struts path when the portlet action is handled. The Struts URI is passed as a parameter so the Struts request processor can process the action. If the link is not an action then the portlet processes the information and create the appropriate IViewCommand.

Typically a Struts application passes parameters on such a path using the query string on the HTTP URL. Often the actions containing these paths are generated from tags provided by Struts. The most obvious examples of these are the tags for the HTML elements `<link>` and `<form>`. For IBM Struts portlets, the urlType attribute must be included in the <html:form\>, <html:link\> and <html:rewrite\> tags to support the different types of URIs. This attribute can take the following values:

-   return - Creates a portlet return URL indicating the caller of the portlet. For example, this URL can be useful for creating a form action that can take a user back to view mode from edit mode.
-   standard - Creates a standard portlet URL.

**Examples:**

-   **<html:rewrite\>**

    ```
    
    <link rel="stylesheet" type="text/css"  
          href="<html:rewrite page='/assets/styles/base.css'/>">
    
    ```


-   **<html:form\> \(Standard portlets\)**

    `<html:form action="/saveConfiguration.do" portletMode="view">`


## Style sheets

Many existing Struts application use the rewrite tag to create a link element for a cascading style sheet. This is not the documented intention of the rewrite tag, which is supposed to create the same path as the link tag without the <a\> element. Since the Struts Portlet Framework had to modify how links are created, the rewrite tag required some customizations to be used to create link elements for style sheets. The rewrite tag will create the same path as the link tag, except when the page or forward reference is to a CSS file. In the case where a CSS file is referenced, the rewrite tag will use the Jakarta Struts implementation, which results in a path to the CSS file. Here are examples of how to create link elements for style sheets using the Struts Portlet Framework.

-   **Using a forward**

    ```xmp
    
    <link rel="stylesheet" type="text/css" 
                           href="<html:rewrite forward='baseStyle'/>">
    
    ```

-   **Using a page**

    ```xmp
    
    <link rel="stylesheet" type="text/css" 
                           href="<html:rewrite page='/basestyle.css'/>">
    
    ```

-   **Using the portlet tags**

    ```xmp
    
    <%@ taglib uri="/WEB-INF/tld/portlet.tld" prefix="api" %> 
    <api:init />
    <link rel="stylesheet" type="text/css" 
          href="<%= portletResponse.encodeURL( basestyle.css ) %>">
    
    ```


## Markup support

The Struts tag library has been modified to support the additional markup languages supported by HCL DX Portal. For HTML, the tags that create links have been modified to support portlet URIs. See [Creating portlet URIs](#return) for details. Also, be aware of the restrictions for HTML output described in [Markup guidelines](wpspar.md).

There might be a cases where the JSPs for a Struts application need to run in both the servlet and portlet environment. For this reason, page level tags are implemented in tag libraries. The Struts application can use them in its JSPs, but the tags will not generate markup when executed within HCL DX Portal.

You should also refrain from setting color, and fonts. The portal server supports skins and themes that give the page a consistent look and feel. The JSP should be authored so it adheres to the conventions of the theme by using the appropriate style sheet.

-   **Using the cHTML tags**

    The use of the cHTML tags is similar to the use of the HTML tags. The name of the cHTML tag library file is `struts-chtml.tld`. The following is an example of the cHTML taglib definition.

    ```xmp
    
       <%@ taglib uri="/WEB-INF/struts-chtml.tld" prefix="chtml" %>
    
    
    ```

-   **Using the WML tags**

    The WML tags are a new addition for creating a user experience in WAP devices. The use of the WML tags is similar to the use of the Struts HTML tags. Use the following directive to make these tags available to a JSP.

    ```xmp
    
       <%@ taglib uri="/WEB-INF/struts-wml.tld" prefix="wml" %>
    
    
    ```

    The use of the WML tags provided with this distribution is similar to the use of Struts HTML tags. The name of the WML tag library file is struts-wml.tld. The following is an example of the WML version of index.jsp .

    ```xmp
    
    <%@ taglib uri="/WEB-INF/struts-bean.tld" prefix="bean" %>
    <%@ taglib uri="/WEB-INF/struts-wml.tld" prefix="wml" %>
    <%@ taglib uri="/WEB-INF/struts-logic.tld" prefix="logic" %>
    <p>
    <wml:link page="/editRegistration.do?action=Create">
       <bean:message key="index.registration"/>
    </wml:link>
    <br/>
    <wml:link page="/logon.jsp">
       <bean:message key="index.logon"/>
    </wml:link>
    <br/>
    <wml:link page="/tour.do">
       <bean:message key="index.tour"/>
    </wml:link>
    </p>
    
    
    ```

    See [General tips for portlet output](wpspar.md) and the [WML markup guide](wpspar.md) for general guidelines about providing WML markup.

    WML does not have a <form\> element like HTML. Struts, however, uses the <form\> tag for the scoping of parameters and supporting form beans. For that reason, the WML implementation also includes a <form\> tag to support some of the Struts features in WML. The <form\> tag in the WML taglib takes an action as an attribute. The following is an example of a form in WML.

    ```xmp
    
    <wml:form action="/logon">
    
    <do type="options" label="send">
    
      <wml:go method="post">
        <postfield name="username" value="$username"/>
        <postfield name="password" value="$password"/>
      </wml:go>
    </do>
    
    <bean:message key="prompt.username"/><wml:text property="username"/>
    <bean:message key="prompt.password"/>
    <wml:password property="password" size="16" maxlength="16"/>
    
    </p>
    
    </wml:form>
    
    ```

    The JSPs for the HTML Struts example have been modified for the WML markup. This example also demonstrates the use of the WML taglib. These JSPs can be found in the /wml/view directory of the expanded PortalStrutsExample.war file.

    The tags in the Struts portlet WML tag library can throw a `JspException` at run time. An error page can be declared using the `<%@ page %>` directive to detect the exception and supply information about the error condition. The actual exception is passed as an attribute in the request object with the key `org.apache.struts.action.EXCEPTION`.

    The following is a brief description of each tag. See [Detailed descriptions of the Struts WML tags](wpsstrtags.md) for more information.

    |Tag|Description|
    |---|-----------|
    |[<wml:cancel/\>](wpsstrtags.md#wml_cancel)|Renders a WML `<postfield>` element with a value of `cancel`.|
    |[<wml:card/\>](wpsstrtags.md#wml_card)|Renders a WML card element.|
    |[<wml:errors/\>](wpsstrtags.md#wml_errors)|Retrieves the set of error messages from the request object with the default key of `Action.ERROR_KEY` or the value specified by attribute name.|
    |[<wml:form/\>](wpsstrtags.md#wml_form)|Does not render any markup, but it is used to scope beans and transactions.|
    |[<wml:go/\>](wpsstrtags.md#wml_go)|Renders a WML <go\> element.|
    |[<wml:head/\>](wpsstrtags.md#wml_head)|Renders a WML <head\> element with language attributes extracted from the user's current Locale object, if there is one.|
    |[<wml:link/\>](wpsstrtags.md#wml_link)|Renders a WML <a\> element as a hyperlink to the specified URL.|
    |[<wml:option/\>](wpsstrtags.md#wml_option)|Renders a WML <option\> element, representing one of the choices for an enclosing <select\> element.|
    |[<wml:options/\>](wpsstrtags.md#wml_options)|Renders a set of WML <option\> elements, representing possible choices for a <select\> element.|
    |[<wml:password/\>](wpsstrtags.md#wml_password)|Renders a WML <input\> element of type password, populated from the specified value or the specified property of the bean associated with our current form.|
    |[<wml:postfield/\>](wpsstrtags.md#wml_postfield)|Renders a WML <postfield\> element.|
    |[<wml:rewrite/\>](wpsstrtags.md#wml_rewrite)|Renders a request URI based on exactly the same rules as the link tag does, but without creating the <a\> hyperlink.|
    |[<wml:select/\>](wpsstrtags.md#wml_select)|Renders a WML <select\> element, associated with a bean property specified by our attributes.|
    |[<wml:text/\>](wpsstrtags.md#wml_text)|Renders a WML <input\> element of type text, populated from the specified value or the specified property of the bean associated with our current form.|
    |[<wml:wml/\>](wpsstrtags.md#wml_wml)|Renders a <wml\> element.|


