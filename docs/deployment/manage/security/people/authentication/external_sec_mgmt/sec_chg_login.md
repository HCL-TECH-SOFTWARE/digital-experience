# Changing the login and logout pages

By default, when unauthenticated users attempt to access the `myportal` page, they get redirected to the login page to provide a user name and password. When using a WebSEALor Computer Associates eTrust SiteMinder TAI for authentication, you no longer need to use the HCL Digital Experience login page. Instead, the login icon should point to the protected portal page.

Complete the following steps to change the login and logout pages:

1.  Locate the theme files that contain the login and logout links. The files that contain the login and logout links can be different, depending on the theme. In more recent themes, these links might be located in Default.jsp. In older themes, the links might be located in banner.jspf.

    **Finding theme resources:** See the *Location of theme resources* link in the Related section.

2.  Create a backup copy of the theme file before proceeding.

3.  Open the theme file and locate the section for the login button.

4.  Replace the login button anchor tag that is not commented out with the following JSP fragment:

    ```
    <%-- comment this to enable screen login --%> 
                <%-- loginOnClick is provided so the client-side aggregation 
    theme can add this link without creating a different copy of this file. 
    --%>
                <portal-logic:if loggedIn="no">
    
                 <c:if test="${empty loginOnClick}">
                 <li class="wptheme-toolbar-last"><a 
    href='<portal-navigation:url 
                      home="protected" screen="Home"/>' 
    <%=bidiDirAttr%>><portal-fmt:text key="link.login" 
    bundle="nls.engine"/></a></li>
                 </c:if>
            </portal-logic:if>
            --%>
    ```

    **Note:** The previous example uses the 'portal-fmt:' prefix to designate JSP tags from the tag library in portal.tld. Your custom JSPs might use a different tag prefix.

5.  Touch the Default.jsp file after editing any JSP files and before any restart. This updates the timestamp on the file to the current time and will signal a recompile of Default.jsp to incorporate the edit changes from other JSP files. Type: touch Default.jsp. An alternative is to edit \(open and save\) Default.jsp, which has the same effect as the touch command.

6.  Redirect the browser to navigate to the logoff page of the external security manager \(ESM\) after the HCL Portal logoff command executes. Learn how to invalidate the single sign on session of the ESM by reviewing the documentation provided by the ESM relating to logoff pages.

    -   Security Access Manager WebSEAL provides http://webseal/pkmslogout as a special URL to terminate the WebSEAL single sign on session
    -   In eTrust SiteMinder, the Web Agent configuration object contains a property named LogoffUri where you can supply a URL to terminate the eTrust SiteMinder login session
    Complete the following steps to enable HCL Portal to execute the external security manager logoff URL after completing its logoff command:

    1.  Specify the following values in the [wp\_profile\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)/PortalServer/config/ConfigService.properties file:

        -   redirect.logout=true
        -   redirect.logout.ssl=false or true, depending on your environment
        -   redirect.logout.url=protocol://host\_name/logout\_page
        where protocol is the protocol of the ESM machine: http or https, host\_name is the fully qualified host name of the ESM machine, and logout\_page is the ESM page that users will be directed to when they log out. Refer to the ESM Administrator's Guide for information about using logout forms.

    2.  Run the following task to update the property:

        |Operating system|Task|
        |----------------|----|
        |Windows™:|ConfigEngine.bat update-properties -DWasPassword=password from the [wp\_profile\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)\\ConfigEngine directory|
        |AIX®SolarisLinux™:|./ConfigEngine.sh update-properties -DWasPassword=password from the [wp\_profile\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)/ConfigEngine directory|
        |z/OS®:|Perform the following steps:        1.  Open a UNIX System Services \(z/OS UNIX System Services\) command prompt.
        2.  Run the ./ConfigEngine.sh update-properties -DWasPassword=password task from the [wp\_profile\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)/ConfigEngine directory.
|

    3.  Restart the WebSphere\_Portal server on the standalone server or on each cluster member.



**Related information**  


[Starting and stopping servers, deployment managers, and node agents](/digital-experience/deployment/manage/stopstart)

[Understanding the Portal 8.5 modularized theme](/digital-experience/build_sites/create_sites/website_building_blocks/themes_profiles_skins/themeopt_defaultparts)

