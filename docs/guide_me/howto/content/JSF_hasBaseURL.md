# How to work with JSF Portlets on HCL DX pages

## Applies to

> HCL Digital Experience 9.5 and higher  

## Introduction

When using JSF (AJAX) related Portlets with HCL Digital Experience, some AJAX requests may lead to unexpected behaviors for which a ajax-call can not be handled correctly on HCL Digital Experience server side. Most likely the problem is related to resource-caching issues inside of the JSF-framework used by HCL Digital Experience. This document describes the different solutions that can be used to fix such caching related problems.  

## Instructions

In HCL Digital Experience it is possible to develop Java Server Faces Portlets that are using Asynchronous JavaScript and XML (AJAX) to communicate with the backend HCL Digital Experience server. Whenever a JSF-Portlet is using ajax related tags like  

```xml
<f:ajax render="idform" execute="@form" />
```

it is possible that AJAX-requests will not be handled correctly by the server. For example, when a render button is pushed it is possible that the JSF-Portlet will just render the result once. Additional clicks to the button will not lead to a new rendering of the result. This kind of problem happens because of some known caching related problems in the JSF framework used by HCL Digital Experience. There are two ways to fix such caching related problems.  

1. By adding the **com.ibm.portal.theme.hasBaseURL** property tag inside of the portal theme that is used by the portal page that contains the JSF-Portlet

2. By using the following property inside of the **portlet.xml** file located inside of the JSF-Portlet  

```xml
<init-param>
    <name>org.apache.myfaces.RESOURCE_HANDLER_CACHE_ENABLED</name>
    <value>false</value>
</init-param>  
```

For details, please check document [org.apache.myfaces.RESOURCE_HANDLER_CACHE_ENABLED](https://svn.apache.org/repos/asf/myfaces/site/publish/core20/myfaces-impl/webconfig.html#org_apache_myfaces_RESOURCE_HANDLER_CACHE_ENABLED){target="_blank"}  

### Additional information about HCL Digital Experience Resource Caching

HCL Digital Experience offers the option to add a **hasBaseURL** tag to portal pages and themes to do some internal optimizations.  
The **hasBaseURL** tag, in conjunction with **portal-core:stateBase**, inserts a base tag into a portal page document. This explicitly sets the base URL for any relative URLs in the document, rather than deferring to the browser to implicitly set the base URL to the value of **location.href**. In applications based on Digital Experience, this has historically been used mostly for search engine optimization (friendly URLs excluding navigational state information). You can find more information about that in the documentation. For details, please refer to [Additional resources](#additional-resources) section in this document.  

Having a **base** tag in the document allows JSF to cache the relative resource URLs and serve them to both authenticated and anonymous users. With the **base** tag in the document, the relative resource URLs do not include `portal` or `myportal`, so problems with implicit logouts (**logout.user.onpublic**) or redirects to the login page can be avoided. For general information on the base tag, please check document:

[`<base>`: The Document Base URL element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/base){target="_blank"}  

### Steps to enable the hasBaseURL parameter in Portlets and Themes

The following example describes the detailed steps to add the hasBaseURL parameter inside of the Portal 8.5 Theme that will be shipped by default with HCL Digital Experience.

1. In a temporary directory create a new file (for example ExportPortal85Theme.xml) and add the following content into that file:  

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig_8.0.0.xsd" type="export">
    <!-- This sample exports all theme and skin definitions. -->
        <portal action="locate">
          <theme action="export" uniquename="ibm.portal.85Theme" />
        </portal>
    </request>
    ```

2. Run the following xmlaccess command from the directory `<wp_profile_root>\PortalServer\bin`:  

    **On Linux/Unix:**

    ```xml
    ./xmlaccess.sh -in <path_to_file>/ExportPortal85Theme.xml -out <path_to_file>/FiletoModify.xml -url http://<servername>:<portnumber>/wps/config -user <admin_user> -password <admin_password>
    ```  

    **On Microsoft Windows:**

    ```xml
    xmlaccess.bat -in <path_to_file>\ExportPortal85Theme.xml -out <path_to_file>\FiletoModify.xml -url http://<servername>:<portnumber>/wps/config -user <admin_user> -password <admin_password>
    ```  

    For details about xmlacess, please check document [Generating a complete XML Access export of a Portal configuration](../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/gen_xmlaccessexpt_ptlconfig.md){target="_blank"}  

3. As soon as the theme is exported, open the FileToModify.xml with a text-editor and add the following line under the other parameter-settings:

    ```xml
    <parameter name="com.ibm.portal.theme.hasBaseURL" type="string" update="set"><![CDATA[true]]></parameter>
    ```

    Example snippet of the exported Portal 8.5 Theme (FiletoModify.xml):

    ![hasBaseURL Sample](./images/JSF_hasBaseURL/hasBaseURLsample.png)  

4. As soon as the hasBaseURL parameter is added to the FiletoModify.xml file, save the file and run the command:  

    **On Linux/Unix:**

    ```xml
    ./xmlaccess.sh -in <path_to_file>/FileToModify.xml -out status.xml -url http://<servername>:<portnumber>/wps/config -user <admin_user> -password <admin_password>
    ```  

    **On Microsoft Windows:**

    ```xml
    xmlaccess.bat -in <path_to_file>\FileToModify.xml -out status.xml -url http://<servername>:<portnumber>/wps/config -user <admin_user> -password <admin_password>
    ```  

    With that action the theme will be updated in HCL Digital Experience with the new parameter in place.  

5. restart the HCL Digital Experience environment

6. Create a page with the newly modified Portal 8.5 theme and add a JSF Portlet on that page.  

### Additional Resources

[HCL DX Performance Tuning Guide (Page 30)](../../../images/HCL%20DX%20Performance%20Tuning%20V9.5%201.0_Sep152022.pdf){target="_blank"}  

[Defining friendly URLs without state information for pages in your site](../../../deployment/manage/siteurl_cfg/changing_siteurl/cw_navstate/mp_friendly_short_url.md#defining-friendly-urls-without-state-information-for-pages-in-your-site){target="_blank"}  

### Best practice

According to the HCL DX Performance Tuning Guide we highly recommend to add the hasBaseURL setting on all themes and pages that are using JSF Portlets to avoid caching and performance related problems.  
