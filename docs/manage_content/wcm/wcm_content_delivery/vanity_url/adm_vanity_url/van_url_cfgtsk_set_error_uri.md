# Setting an error URI for undefined vanity URLs

You can configure how the portal behaves if a user tries to access an undefined vanity URL.

The vanity URL servlet resolves the appropriate portal page or content item according to the incoming vanity URL. In a request to an undefined vanity URL, this servlet responds by either of the following two ways:

-   It sends a 404 return code.
-   It redirects the user to a defined error URI. You can configure this error URI by using a portal configuration task.

The configuration task for configuring an error URI for vanity URLs is `set-vanityurl-error-uri`. It sets a new custom property in the Resource Environment Provider of the WP ConfigService. The property name is `vanityurl.error.uri`. Calling the configuration task sets the value for this property. If the property is not set in the Resource Environment Provider and a user requests an undefined vanity URL, the portal sends a 404 return code.

-   **Syntax**

    You call the task as follows:

    -   **AIX®**

        `./ConfigEngine.sh set-vanityurl-error-uri -DPortalAdminPwd=password -DWasPassword=password`

    -   **Linux™**

        `./ConfigEngine.sh set-vanityurl-error-uri -DPortalAdminPwd=password -DWasPassword=password`

    -   **Windows™**

        `ConfigEngine.bat set-vanityurl-error-uri -DPortalAdminPwd=password -DWasPassword=password`

-   **Extra parameters:**

    If you want the vanity URL to redirect the user to an error URI, you must specify the following parameter with this task. It requires the prefix -D in the command.

    -   **ErrorURI = URI_for_redirect**

        If the vanity URL of the request is not defined, the vanity URL servlet redirects the requests to the URI specified here. If the value for the parameter is the empty string and the vanity URL of the request is undefined, the portal sends a 404 return code.

-   **Example:**

    ```
    ./ConfigEngine.sh set-vanityurl-error-uri 
                      -DPortalAdminPwd=password -DWasPassword=password
                      -DErrorURI=cm:oid:ibm.portal.Home    
    ```

    The error URI specified in this example redirects the user to the portal home page.



