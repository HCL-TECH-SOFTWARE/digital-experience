# How to customize the error behavior when accessing WCM resources

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

This article describes the procedure to customize the default HTTP-404 and HTTP-403 error codes that might been noticed when using the WCM servlet.
Depend on the scenario, you will receive a different error message. This article applies to the following scenarios:

1. Non-existent WCM URL.  
    For example: `http://hostname/wps/wcm/non-existent`  

    For this scenario, you will get a default 404 error message like the following:  
    `Error 404: java.io.FileNotFoundException: CWSRV0190E: File not found: /non-existent`  

2. A WCM URL containing a non-existent JSP file.  
    For example: `http://hostname/wps/wcm/webinterface/login/login2.jsp`  

    For this scenario, you will receive a default 404 error page specific for JSPs:  
    ![HTTP-404 error code sample](./images/customize404AND403WCM/http_error_404_sample.png)  

3. The URL is valid, but the user does not have access to the item.  
    For example: `http://hostname/wps/wcm/myconnect/mylib/mysitearea/mycontent`  

    This scenario will generate a default 403 error, like this:  
    `Message: Error 403: CWSRV0295E: Error reported: 403`  

## Instructions

1. Open a command prompt or terminal session to access the HCL DX binaries.

2. Create a temporary directory to which the logged-in user has read and write access. Or an existing temporary directory (**/tmp**) may be used if the user has appropriate privileges to it. Throughout this example, the **/tmp** and **/tmp/wcm_expanded** directories will be utilized.  

3. Navigate to the `<wp_profile_root>/bin` directory.  

4. Use the wsadmin command to export the wcm.ear file.  
    For example:  

    ```shell
    wsadmin.sh(bat) -user <admin_user_id> -password <admin_password> -c '$AdminApp export wcm /tmp/wcm.ear'
    ```

5. Expand the wcm.ear file into the temporary directory utilizing the EARExpander.(bat|sh) utility.  

    ```shell
    ./EARExpander.sh -ear /tmp/wcm.ear -operationDir /tmp/wcm_expanded/ -operation expand
    ```

6. Navigate to the expanded directory and locate the **web.xml** file under `/tmp/wcm_expanded/ilwwcm.war/WEB-INF/`.  

7. Backup the web.xml file.  

8. Open the web.xml file in a text editor.  

9. Locate the following entry in web.xml:

    ```html
    <mime-mapping id="MimeMapping_1088994409133">
    <extension>zip</extension>
    <mime-type>application/x-gzip</mime-type>
    </mime-mapping>
    ```

10. Add these entries right below `</mime-mapping>`, like this:

     ```html
     <mime-mapping id="MimeMapping_1088994409133">
     <extension>zip</extension>
     <mime-type>application/x-gzip</mime-type>
     </mime-mapping>

     <error-page>
     <error-code>404</error-code>
     <location>/html/custom_errors/error404.html</location>
     </error-page>

     <error-page>
     <error-code>403</error-code>
     <location>/html/custom_errors/error403.html</location>
     </error-page>
     ```

11. Save the web.xml file.  

12. Navigate to the `/tmp/wcm_expanded/ilwwcm.war/` directory.  

13. Create a directory named **html**. Navigate to that directory.  

14. Create a directory named **custom_errors**. Navigate to that directory.

15. Create and save a new file called error404.html, with contents as follows:

     ```html
     <html>
       <p>This is a custom 404 error page!</p>
       <br>Sorry, I could not find this item for you!
     </html>
     ```

16. Create and save a new file called error403.html, with contents as follows:

     ```html
     <html>
     <p>This is a custom 403 error page!</p>
     <br>You have no access to this item!
     </html>
     ```

17. Rename the copy of the wcm.ear file in the `/tmp` directory that was previously exported to wcm.bak.

18. Use the EARExpander.(bat|sh) utility to collapse the changes made back into a new wcm.ear file:

     ```shell
     ./EARExpander.sh -ear /tmp/wcm.ear -operationDir /tmp/wcm_expanded/ -operation collapse
     ```

19. Use wsadmin to update the wcm.ear:

     ```shell
     ./wsadmin.sh -user <admin_user_id> -password <admin_password> -c '$AdminApp update wcm app {-operation update -contents /tmp/wcm.ear}'
     ```

20. If HCL DX is running on a cluster, open the IBM Integrated Solutions Console (WAS admin console) in a web-browser and do a full resynchronization with all nodes.  
