# EJPNO1027W error

Security list configuration is not set.

## Explanation

Module ''\{0\}'' references resources that target the following ''\{1\}'' : \{2\}. For security reasons, the WAR data source does not serve content until a special configuration is set. This configuration contains a white list that specifies available files and a black list that specifies files that are not available.

## User action

Set a whitelist and a blacklist. You can set the lists in two ways.

-   **In a context parameter in the web.xml of the web application**

    You can define a whitelist, a blacklist, or both by using this method. If you define only one list, whitelists that target specific sets of files are accepted as more secure than similar blacklists.

    ```
    <web-app>
    ...
    <context-param>
       <param-name>
          com.ibm.portal.resource.whitelist
       </param-name>
       <param-value>.*</param-value>
    </context-param>
    
    <context-param>
       <param-name>
          com.ibm.portal.resource.blacklist
       </param-name>
       <param-value>WEB-INF/.*</param-value>
    </context-param>
    ....
    </web-app>
    ```

-   **In the Resource Environment Provider settings**

    Each web application defines three custom properties in the WP ConfigService Resource Environment Provider. All three properties are required.

    **Note:** The variable your\_key\_for\_web\_app is used during parsing to identify the three properties that belong together for one web application, so you must use a different key for each web application.

    |Name|Value|
    |----|-----|
    |`com.ibm.portal.resource.your\_key\_for\_web\_app.contextroot`|The context root under which the WAR file is deployed. You can use the variable'$\{URI\_CONTEXT\_PATH\}' to avoid a hardcoded reference to the context root because the context root can be changed. The variable '$\{URI\_CONTEXT\_PATH\}' resolves the correct context root, which by default is `'/wps'`.Example:

    -   Name: `com.ibm.portal.resource.my\_web\_app\_1.contextroot`
    -   Value: `${URI_CONTEXT_PATH}/PA_My_Web_App`
|
    |`com.ibm.portal.resource.your\_key\_for\_web\_app.whitelist`|A regular expression that defines the resources in the WAR file that can be served by the portal resource data source.Example:

    -   Name: `ibm.portal.resource.my\_web\_app\_1.whitelist`
    -   Value: `.*`
|
    |`com.ibm.portal.resource.your\_key\_for\_web\_app.blacklist`|A regular expression that defines the resources in the WAR file that cannot be served by the portal resource data source.Example:

    -   Name: `com.ibm.portal.resource.my\_web\_app\_1.blacklist`
    -   Value: `WEB-INF/.*`
|


**Parent topic:**[Validation reports](../dev-theme/themopt_an_val_reports.md)

