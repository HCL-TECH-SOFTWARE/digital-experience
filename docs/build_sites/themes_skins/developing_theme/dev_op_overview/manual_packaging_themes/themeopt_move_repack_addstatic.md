# Adding static content to your custom theme

After you create a theme, you can begin to customize it by adding static content.

1.  Export the content from the file store. For more information, see *Exporting content from the file store*.

2.  Export the files that are required by your custom theme to the following folders:

    -   themes
    -   skins
    -   layout-templates
    -   common-resources
3.  Save the files to your disk.

4.  Add a web module to your existing custom theme.

    In the following example, an EAR file name MyEar was created for the existing custom theme. The EAR file contains a web module that is named MyDynamicContent.war that uses the context path /MyDynamicContent. If you created a WAR file instead, you must create an EAR file before you can proceed.

    1.  Open your existing project, or import your existing EAR file as a project in the tool that is used to create the custom theme.

    2.  Add a WAR file to the existing EAR file. In this example, the name is MyStaticContent.war and the context root is /MyStaticContent.

    3.  The web.xml file for the new web module can be as simple as the following example:

        ```
        <?xml version="1.0" encoding="UTF-8"?>
        <web-app xmlns="http://java.sun.com/xml/ns/javaee"
                 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xsi:schemaLocation="http://java.sun.com/xml/ns/javaee 
                 http://java.sun.com/xml/ns/javaee/web-app_2_4.xsd"
                 version="2.4">
            <display-name>StaticHTMLContent</display-name>
            </web-app>
        ```

        The structure of the resulting EAR file looks like the following example:

        ```
        MyEar
            META-INF
                application.xml
            MyStaticContent.war
            MyDynamicContent.war
        ```

        The following code is a sample of the application.xml file:

        ```
        <?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE 
            application PUBLIC "-//Sun Microsystems, Inc.//DTD J2EE Application 
            1.3//EN" "http://java.sun.com/dtd/application_1_3.dtd">
        <application id="MyEar">
            <display-name>MyEar</display-name>
            <module id="MyStaticContent">
                <web>
                    <web-uri>MyStaticContent.war</web-uri>
                    <context-root>/MyStaticContent</context-root>
                </web>
            </module>
            <module id="MyDynamicContent">
                <web>
                    <web-uri>MyDynamicContent.war</web-uri>
                    <context-root>/MyDynamicContent</context-root>
                </web>
            </module>   
        </application>
        ```

5.  Add the exported static content to the web module.

    1.  Copy the static content that you exported in step 1 into the WAR file.

        The structure of the WAR file looks like the following example:

        ```
        MyStaticContent
          themes
          skins
          layout-templates
          common-resources
          WEB-INF
          web.xml
        ```

6.  Create a whitelist and a blacklist.

    For security reasons, the WAR data source does not serve content until a special context parameter is set. This context parameter defines which files from your web module HCL Portal is able to serve. You can define a whitelist by using a regular expression that matches the files that you want to make available. Then, in a blacklist, you can remove certain entries from the set of files that are available in the whitelist. A blacklist is helpful if you want to serve a folder but not a certain file within that folder. The expressions are case-sensitive. For example, WEB-INF is different than Web-Inf.

    The parameters are set in the web.xml file of the web module that contains the static theme content. In the following example, the context parameter is set to serve all files that are not part of the WEB-INF folder:

    ```
    <web-app\> 
      ........
      <context-param\>
      <description\>A regular expression that defines which of the resources in the war file can 
                   be served by the portal war datasource.</description\>
      <param-name\>com.ibm.portal.whitelist</param-name\>
      <param-value\>.\*</param-value\>
      </context-param\>     
      <context-param\>
      <description\>A regular expression that defines which of the resources in the war file cannot
                   be served by the portal war datasource.</description\>
      <param-name\>com.ibm.portal.blacklist</param-name\>
      <param-value\>WEB-INF/.\*</param-value\>
      </context-param\>  
      ....
    </web-app\>
    ```



???+ info "Related information"
    - [EJPNO1013E error](../../../the_module_framework/themeopt_analyzer/validation_reports/themeopt_an_EJPNO1013E_v85.md)
    - [EJPNO1014I error](../../../the_module_framework/themeopt_analyzer/validation_reports/themeopt_an_EJPNO1014I_v85.md)


