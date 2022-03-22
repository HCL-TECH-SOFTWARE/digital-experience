# Themes

This topic provides information about the deployment and undeployment of themes artifacts.

## Deploy theme

The `deploy-theme` command is used to deploy a theme \(EAR and WebDAV based\) from a source client or server environment to a target HCL DX 9.5 CF192 or later server using the provided theme registration XML file, deployable EAR file, and WebDAV theme collection.

-   **Required files**

    Theme Registration XML file: This XML file is required to register the theme into DX Server.

    Theme deployable EAR file: This EAR file containing theme data is used for deploying into the WebSphere Application Server.

    WebDAV theme collection: The theme collection folder/zip is used to create or update the collection in WebDAV file store of the DX Server.

    **Notes:** This command can execute below one or more tasks together:

    1.  Theme Registration
    2.  Theme EAR deployment
    3.  WebDAV theme collection

-   **Command**

    ```
    dxclient deploy-theme -xmlFile <path> -applicationFile <path> -applicationName <application name> 
    -themeName <theme collection name> -themePath <folder/zip path of theme collection>
    ```

-   **Help command**

    This command shows the help document on the `deploy-theme` command usage:

    ```
    dxclient deploy-theme -h
    ```

-   **Common Command options**

    Use this attribute to specify the protocol with which to connect to the DX server \(`wp_profile`\):

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the hostname of the target DX server:

    ```
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the DX server \(`wp_profile`\):

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the username to authenticate with the DX server \(`wp_profile`\):

    ```
    -dxUsername <value>
    ```

    Use this attribute to specify the password for the user in the `dxUsername` attribute:

    ```
    -dxPassword <value>
    ```

    Use this attribute and re-trigger the command to check the status of any previous request that was incomplete.

    ```
    -requestId <Unique ID of a previously triggered deploy theme request>
    ```

-   **Required options for Theme Registration**

    Use this attribute to specify the local path to the theme registration XML file:

    ```
    -xmlFile <Absolute or relative path to theme registration xml input file>
    ```

    Use this attribute to specify the path to DX configuration endpoint \(for example, /wps/config\):

    ```
    -xmlConfigPath <value>
    ```

    **Note:** For theme registration, a backup of the complete DX configuration export \(not including users\) is taken and placed in `store/outputFiles/themes/backup/foldername` folder.

-   **Required options for Theme EAR deployment**

    Use this attribute to specify the Configuration Wizard Console port number:

    ```
    -dxConnectPort <value>
    ```

    Use this attribute to specify the config wizard home \(change to the appropriate route in the case of an OpenShift Kubernetes Environment, otherwise the value is typically the same as the hostname\) that is required for authenticating with the DXConnect application:

    ```
    -dxConnectHostname <value>
    ```

    Use this attribute to specify the Configuration Wizard Administrator username that is required for authenticating with the DXConnect application:

    ```
    -dxConnectUsername <value>
    ```

    Use this attribute to specify the Configuration Wizard Administrator password that is required for authenticating with the DXConnect application:

    ```
    -dxConnectPassword <value>
    ```

    Use this attribute to specify Soap port of the DX server:

    ```
    -dxSoapPort <Soap port of the DX server> 
    ```

    Specify either the `dxProfileName` or `dxProfilePath` of the DX core server:

    -   Use this attribute to specify the profile name of the DX core server \(for example: `wp_profile`\):

        ```
        -dxProfileName <Profile name of the DX core server>
        ```

    **OR**

    -   Use this attribute to specify the profile path of the DX server \(for example: `/opt/HCL/wp_profile`\):

        ```
        -dxProfilePath <Path of the DX core server profile> 
        ```

    Use this attribute to specify the theme EAR file path that is required while executing the deploy theme task:

    ```
    –applicationFile <Absolute or relative path to deployable theme ear file> 
    ```

    Use this attribute to specify the theme application name:

    ```
    -applicationName <value> 
    ```

-   **Required options for creating/updating WebDAV theme collection**

    Use this attribute to specify the theme name of the collection created under WebDAV server in DX:

    ```
    -themeName <value>
    ```

    Use this attribute to specify the theme file path that contains all static files to be pushed into DX theme, it accepts either folder or zip file path of the WebDAV theme collection:

    ```
    -themePath <value>
    ```

    Use this attribute to specify the path to the contenthandler servlet on the DX server \(e.g. /wps/mycontenthandler\):

    ```
    -contenthandlerPath <value>
    ```

    **Notes:**

    -   For new WebDAV theme collection, DXClient tool adds the provided collection \(folder/zip\) to the WebDAV file store.
    -   For existing WebDAV theme collection, the existing theme collection is replaced by the provided theme collection during the update. To get the latest theme collection from the DX server, see [Exporting content from the filestore](../dev-theme/themeopt_move_expfilestore.md) and make modifications on the same folder to get it updated in the DX Server WebDAV file store.
    -   For WebDAV theme collection update, a backup of the existing theme collection is taken and placed in `store/outputFiles/themes/backup/foldername` folder.
    Log files from command execution can be found in the logs directory of the DXClient installation.

    **Example:**

    ```
    dxclient deploy-theme -dxProtocol <http/https> -hostname <host-name> -dxPort <dxPort> -xmlConfigPath <xmlConfigPath> -dxUsername <dxUsername> -dxPassword <dxPassword> -dxSoapPort <dxSoapPort> -dxConnectHostname <hostname> -dxConnectPort <dxConnectPort> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -xmlFile <xml-file-with-path> -applicationFile <application-file-with-path> -applicationName <application name> -themeName <theme-name> -themePath <theme-path> -dxProfileName <Profile name of the DX core server> 
    ```


## Undeploy theme

The undeploy-theme command can be used to undeploy a theme, including the EAR application and WebDAV files, and it also unregisters the registered theme from the target DX server.

**Note:** If enableBackup is set to true, then undeploy-theme takes a backup of the deployed EAR theme, WebDAV theme collection, and completes DX configuration export \(without users\) and place it in the backup folder. When the user is downloading EAR, WeDAV, and XML to backup, we must separate it by the folder names `store/outputFiles/themes/backup/foldername`.

The backup of EAR is placed in `store/outputFiles/themes/backup/application`.

Users can restore the theme by using the backup files.

**Note:** Pages might lose the applied theme references in the restored themes.

-   **Command description**

    This command invokes the undeploy-theme tool inside the DXClient.

    This command uses the unregistered theme XML file, theme EAR application name and WebDAV theme collection name, and executes the undeploy theme task.

    ```
    dxclient undeploy-theme
    
    ```

-   **Help command**

    This command shows the help document on the `undeploy-theme` command usage:

    ```
    dxclient undeploy-theme -h
    ```

-   **Required files**

    Theme Unregistration XML file: This XML file is required to unregister the theme from target DX Server and must contain the details of the theme. The XML file must be provided when executing the undeploy theme task.

    This command can execute one or more of the following tasks at the same time:

    -   Theme unregistration
    -   Undeploy theme EAR application
    -   Undeploy WebDAV theme collection
-   **Common commands**

    Use this attribute to specify the hostname of the target server

    ```
    -hostname <value>
    ```

    Use this attribute to specify the protocol with which to connect to the server

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the port on which to connect to the server \(for Kubernetes Environment, dxPort is `443`\)

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the username that is required for server authentication

    ```
    -dxUsername <value>
    ```

    Use this attribute to specify the password that is required for server authentication

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the path to the contenthandler servlet on the DX server \(e.g. /wps/mycontenthandler\)

    ```
    -contenthandlerPath <value>
    ```

    Use this attribute to take the backup before undeploying theme

    ```
    -enableBackup <value>
    ```

    **Note:** User can set the enableBackup parameter as true to take backup before undeploying theme. The value is set to false by default.

    The options passed through command line override the default values.

-   **Required options for Theme Unregistration:**

    Use this attribute to specify the theme registration xml file that is used while executing the undeploy theme task. For example, see the Theme-registration.xml file in the directory dxclient/samples/

    ```
    -xmlFile <xml file name with absolute path of the xmlaccess input file>
    ```

    Use this attribute to specify the path to DX configuration endpoint

    ```
    -xmlConfigPath <value>
    ```

-   **Required options for undeploying theme EAR application:**

    Use this attribute to specify the configuration wizard home \(change of route is only in case of Open Shift Kubernetes Enviornment, otherwise the route remains the same as hostname\) that is required for authenticating to the cw\_profile

    ```
    -dxConnectHostname <value>
    ```

    Use this attribute to specify the port number of the cw\_profile \(for Kubernetes Environment dxConnectPort is 443\)

    ```
    -dxConnectPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating to the cw\_profile

    ```
    -dxConnectUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating to the cw\_profile

    ```
    -dxConnectPassword <value>
    ```

    Use this attribute to specify Soap port of the DX server

    ```
    -dxSoapPort <Soap port of the DX server> 
    ```

    Specify either the `dxProfileName` or `dxProfilePath` of the DX core server:

    -   Use this attribute to specify the profile name of the DX core server \(for example: `wp_profile`\):

        ```
        -dxProfileName <Profile name of the DX core server>
        ```

    **OR**

    -   Use this attribute to specify the profile path of the DX server \(for example: `/opt/HCL/wp_profile`\):

        ```
        -dxProfilePath <Path of the DX core server profile> 
        ```

    Use this attribute to specify the EAR application name

    ```
    -applicationName <value> 
    ```

-   **Required options for undeploying WebDAV theme collection:**

    Use this attribute to specify the theme name of the collection created under WebDAV

    ```
    -themeName <value>
    ```


**Example:**

```
dxclient undeploy-theme -dxProtocol <http/https> -hostname <host-name> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -dxSoapPort <dxSoapPort> -dxConnectHostname <hostname> -dxConnectPort <dxConnectPort> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -xmlFile <xml-file-with-path> -applicationName <application name> -themeName <theme-name> -enableBackup <enable-backup> -dxProfileName <Profile name of the DX core server profile> 
```

**Parent topic:**[DXClient Artifact Types](../containerization/dxclientartifacts.md)

