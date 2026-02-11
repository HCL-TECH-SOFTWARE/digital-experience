# How to work with JavaServer Faces (JSFs) portlets on HCL DX pages

## Applies to

> HCL Digital Experience 9.5 and higher  

## Introduction

JSF portlets in HCL Digital Experience (DX) that use AJAX tags (such as `<f:ajax>`) might experience issues where the server fails to handle requests correctly. For example, a button might render a result only once, ignoring subsequent clicks.

This problem typically stems from resource caching in the JSF framework. To resolve this, use one of the following methods:

- Add the `com.ibm.portal.theme.hasBaseURL` property to the portal theme used by the portal page containing the JSF portlet.

- Add the following property to the `portlet.xml` file within the JSF portlet:

    ```xml
    <init-param>
        <name>org.apache.myfaces.RESOURCE_HANDLER_CACHE_ENABLED</name>
        <value>false</value>
    </init-param>  
    ```

For more information, refer to [`org.apache.myfaces.RESOURCE_HANDLER_CACHE_ENABLED`](https://svn.apache.org/repos/asf/myfaces/site/publish/core20/myfaces-impl/webconfig.html#org_apache_myfaces_RESOURCE_HANDLER_CACHE_ENABLED){target="_blank"}  

### The `hasBaseURL` tag and resource caching

DX provides the `hasBaseURL` tag for portal pages and themes to optimize internal processing. When used with `portal-core:stateBase`, this tag inserts a `<base>` element into the page, explicitly setting the base URL for all relative links. This prevents the browser from implicitly setting the base URL to `location.href`.

Using the `<base>` tag allows JSF to cache relative resource URLs for both authenticated and anonymous users. Because these URLs do not include `portal` or `myportal`, you can avoid issues with implicit logouts or unintended redirects to the login page.

## Instructions

The following steps describe how to add the `hasBaseURL` parameter to the Portal 8.5 theme.

!!! note
    Add the `hasBaseURL` setting to all themes and pages that use JSF portlets to avoid caching and performance issues.

1. Create a file named `ExportPortal85Theme.xml` in a temporary directory and add the following content:

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PortalConfig_8.0.0.xsd" type="export">
    <!-- This sample exports all theme and skin definitions. -->
        <portal action="locate">
          <theme action="export" uniquename="ibm.portal.85Theme" />
        </portal>
    </request>
    ```

2. Export the current theme configuration by running the `xmlaccess` command from the `<wp_profile_root>/PortalServer/bin` directory:

    - **On Linux or Unix:**

        ```bash
        ./xmlaccess.sh -in <path_to_file>/ExportPortal85Theme.xml -out <path_to_file>/FileToModify.xml -url http://<servername>:<portnumber>/wps/config -user <admin_user> -password <admin_password>
        ```  

    - **On Windows:**

        ```cmd
        xmlaccess.bat -in <path_to_file>\ExportPortal85Theme.xml -out <path_to_file>\FileToModify.xml -url http://<servername>:<portnumber>/wps/config -user <admin_user> -password <admin_password>
        ```  

    For more information about XML Access, refer to [Generating a complete XML Access export of a Portal configuration](../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/gen_xmlaccessexpt_ptlconfig.md).

3. Open the `FileToModify.xml` file in a text editor and add the following line inside the `<theme>` element, along with the other parameter settings:

    ```xml
    <parameter name="com.ibm.portal.theme.hasBaseURL" type="string" update="set"><![CDATA[true]]></parameter>
    ```

    Sample of the exported Portal 8.5 theme (`FileToModify.xml`):

    ![hasBaseURL Sample](./images/JSF_hasBaseURL/hasBaseURLsample.png)  

4. Save the `FileToModify.xml` file and run the following command to apply the changes:

    - **On Linux or Unix:**

        ```bash
        ./xmlaccess.sh -in <path_to_file>/FileToModify.xml -out status.xml -url http://<servername>:<portnumber>/wps/config -user <admin_user> -password <admin_password>
        ```  

    - **On Windows:**

        ```cmd
        xmlaccess.bat -in <path_to_file>\FileToModify.xml -out status.xml -url http://<servername>:<portnumber>/wps/config -user <admin_user> -password <admin_password>
        ```  

5. Restart your DX environment.

6. Create a page with the newly modified Portal 8.5 theme and add a JSF portlet to verify the fix.  

???+ info "Related information"
    - [HCL DX Performance Tuning Guide (Page 30)](../../../images/HCL%20DX%20Performance%20Tuning%20V9.5%201.0_Sep152022.pdf)
    - [Defining friendly URLs without state information for pages in your site](../../../deployment/manage/siteurl_cfg/changing_siteurl/cw_navstate/mp_friendly_short_url.md#defining-friendly-urls-without-state-information-for-pages-in-your-site)
