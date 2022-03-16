# Themes \| HCL Digital Experience {#themes}

This topic provides information about the deployment and undeployment of themes artifacts.

## Deploy theme {#deploytheme .section}

The `deploy-theme` command is used to deploy a theme \(EAR and WebDAV based\) from a source client or server environment to a target HCL DX 9.5 CF192 or later server using the provided theme registration XML file, deployable EAR file, and WebDAV theme collection.

Required files
:   Theme Registration XML file: This XML file is required to register the theme into DX Server.

    Theme deployable EAR file: This EAR file containing theme data is used for deploying into the WebSphere Application Server.

    WebDAV theme collection: The theme collection folder/zip is used to create or update the collection in WebDAV file store of the DX Server.

    **Notes:** This command can execute below one or more tasks together:

    1.  Theme Registration
    2.  Theme EAR deployment
    3.  WebDAV theme collection

Command
:   ``` {#codeblock_uhq_5qm_ppb}
dxclient deploy-theme -xmlFile <path> -applicationFile <path> -applicationName <application name> 
-themeName <theme collection name> -themePath <folder/zip path of theme collection>
```

Help command
:   This command shows the help document on the `deploy-theme` command usage:

``` {#codeblock_kcx_vqm_ppb}
dxclient deploy-theme -h
```

Common Command options
:   Use this attribute to specify the protocol with which to connect to the DX server \(`wp_profile`\):

``` {#codeblock_qqw_xqm_ppb}
-dxProtocol <value>
```

    Use this attribute to specify the hostname of the target DX server:

    ``` {#codeblock_rqw_xqm_ppb}
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the DX server \(`wp_profile`\):

    ``` {#codeblock_sqw_xqm_ppb}
    -dxPort <value>
    ```

    Use this attribute to specify the username to authenticate with the DX server \(`wp_profile`\):

    ``` {#codeblock_tqw_xqm_ppb}
    -dxUsername <value>
    ```

    Use this attribute to specify the password for the user in the `dxUsername` attribute:

    ``` {#codeblock_uqw_xqm_ppb}
    -dxPassword <value>
    ```

    Use this attribute and re-trigger the command to check the status of any previous request that was incomplete.

    ``` {#codeblock_kq3_kzx_lsb}
    -requestId <Unique ID of a previously triggered deploy theme request>
    ```

Required options for Theme Registration
:   Use this attribute to specify the local path to the theme registration XML file:

``` {#codeblock_ypz_zqm_ppb}
-xmlFile <Absolute or relative path to theme registration xml input file>
```

    Use this attribute to specify the path to DX configuration endpoint \(for example, /wps/config\):

    ``` {#codeblock_zpz_zqm_ppb}
    -xmlConfigPath <value>
    ```

    **Note:** For theme registration, a backup of the complete DX configuration export \(not including users\) is taken and placed in `store/outputFiles/themes/backup/foldername` folder.

Required options for Theme EAR deployment
:   Use this attribute to specify the Configuration Wizard Console port number:

``` {#codeblock_el5_drm_ppb}
-dxConnectPort <value>
```

    Use this attribute to specify the config wizard home \(change to the appropriate route in the case of an OpenShift Kubernetes Environment, otherwise the value is typically the same as the hostname\) that is required for authenticating with the DXConnect application:

    ``` {#codeblock_fl5_drm_ppb}
    -dxConnectHostname <value>
    ```

    Use this attribute to specify the Configuration Wizard Administrator username that is required for authenticating with the DXConnect application:

    ``` {#codeblock_gl5_drm_ppb}
    -dxConnectUsername <value>
    ```

    Use this attribute to specify the Configuration Wizard Administrator password that is required for authenticating with the DXConnect application:

    ``` {#codeblock_hl5_drm_ppb}
    -dxConnectPassword <value>
    ```

    Use this attribute to specify Soap port of the DX server:

    ``` {#codeblock_il5_drm_ppb}
    -dxSoapPort <Soap port of the DX server> 
    ```

    Specify either the `dxProfileName` or `dxProfilePath` of the DX core server:

    -   Use this attribute to specify the profile name of the DX core server \(for example: `wp_profile`\):

        ``` {#d9e368}
        -dxProfileName <Profile name of the DX core server>
        ```


    **OR**

    -   Use this attribute to specify the profile path of the DX server \(for example: `/opt/HCL/wp_profile`\):

        ``` {#d9e380}
        -dxProfilePath <Path of the DX core server profile> 
        ```


    Use this attribute to specify the theme EAR file path that is required while executing the deploy theme task:

    ``` {#codeblock_kl5_drm_ppb}
    –applicationFile <Absolute or relative path to deployable theme ear file> 
    ```

    Use this attribute to specify the theme application name:

    ``` {#codeblock_ll5_drm_ppb}
    -applicationName <value> 
    ```

Required options for creating/updating WebDAV theme collection
:   Use this attribute to specify the theme name of the collection created under WebDAV server in DX:

``` {#codeblock_z4s_hrm_ppb}
-themeName <value>
```

    Use this attribute to specify the theme file path that contains all static files to be pushed into DX theme, it accepts either folder or zip file path of the WebDAV theme collection:

    ``` {#codeblock_aps_hrm_ppb}
    -themePath <value>
    ```

    Use this attribute to specify the path to the contenthandler servlet on the DX server \(e.g. /wps/mycontenthandler\):

    ``` {#codeblock_bps_hrm_ppb}
    -contenthandlerPath <value>
    ```

    **Notes:**

    -   For new WebDAV theme collection, DXClient tool adds the provided collection \(folder/zip\) to the WebDAV file store.
    -   For existing WebDAV theme collection, the existing theme collection is replaced by the provided theme collection during the update. To get the latest theme collection from the DX server, see [Exporting content from the filestore](../dev-theme/themeopt_move_expfilestore.md) and make modifications on the same folder to get it updated in the DX Server WebDAV file store.
    -   For WebDAV theme collection update, a backup of the existing theme collection is taken and placed in `store/outputFiles/themes/backup/foldername` folder.

    Log files from command execution can be found in the logs directory of the DXClient installation.

    **Example:**

    ``` {#codeblock_dps_hrm_ppb}
    dxclient deploy-theme -dxProtocol <http/https> -hostname <host-name> -dxPort <dxPort> -xmlConfigPath <xmlConfigPath> -dxUsername <dxUsername> -dxPassword <dxPassword> -dxSoapPort <dxSoapPort> -dxConnectHostname <hostname> -dxConnectPort <dxConnectPort> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -xmlFile <xml-file-with-path> -applicationFile <application-file-with-path> -applicationName <application name> -themeName <theme-name> -themePath <theme-path> -dxProfileName <Profile name of the DX core server> 
    ```

## Undeploy theme {#section_rsy_qj3_ppb .section}

The undeploy-theme command can be used to undeploy a theme, including the EAR application and WebDAV files, and it also unregisters the registered theme from the target DX server.

**Note:** If enableBackup is set to true, then undeploy-theme takes a backup of the deployed EAR theme, WebDAV theme collection, and completes DX configuration export \(without users\) and place it in the backup folder. When the user is downloading EAR, WeDAV, and XML to backup, we must separate it by the folder names `store/outputFiles/themes/backup/foldername`.

The backup of EAR is placed in `store/outputFiles/themes/backup/application`.

Users can restore the theme by using the backup files.

**Note:** Pages might lose the applied theme references in the restored themes.

Command description
:   This command invokes the undeploy-theme tool inside the DXClient.

    This command uses the unregistered theme XML file, theme EAR application name and WebDAV theme collection name, and executes the undeploy theme task.

    ``` {#codeblock_bkp_fl3_ppb}
    dxclient undeploy-theme
    
    ```

Help command
:   This command shows the help document on the `undeploy-theme` command usage:

    ``` {#codeblock_wzx_kl3_ppb}
    dxclient undeploy-theme -h
    ```

Required files
:   Theme Unregistration XML file: This XML file is required to unregister the theme from target DX Server and must contain the details of the theme. The XML file must be provided when executing the undeploy theme task.

    This command can execute one or more of the following tasks at the same time:

    -   Theme unregistration
    -   Undeploy theme EAR application
    -   Undeploy WebDAV theme collection

Common commands
:   Use this attribute to specify the hostname of the target server

``` {#codeblock_m55_mm3_ppb}
-hostname <value>
```

    Use this attribute to specify the protocol with which to connect to the server

    ``` {#codeblock_cpj_qm3_ppb}
    -dxProtocol <value>
    ```

    Use this attribute to specify the port on which to connect to the server \(for Kubernetes Environment, dxPort is `443`\)

    ``` {#codeblock_p1d_rm3_ppb}
    -dxPort <value>
    ```

    Use this attribute to specify the username that is required for server authentication

    ``` {#codeblock_ngb_sm3_ppb}
    -dxUsername <value>
    ```

    Use this attribute to specify the password that is required for server authentication

    ``` {#codeblock_t2j_tm3_ppb}
    -dxPassword <value>
    ```

    Use this attribute to specify the path to the contenthandler servlet on the DX server \(e.g. /wps/mycontenthandler\)

    ``` {#codeblock_fc2_5m3_ppb}
    -contenthandlerPath <value>
    ```

    Use this attribute to take the backup before undeploying theme

    ``` {#codeblock_apw_v43_ppb}
    -enableBackup <value>
    ```

    **Note:** User can set the enableBackup parameter as true to take backup before undeploying theme. The value is set to false by default.

    The options passed through command line override the default values.

Required options for Theme Unregistration:
:   Use this attribute to specify the theme registration xml file that is used while executing the undeploy theme task. For example, see the Theme-registration.xml file in the directory dxclient/samples/

``` {#codeblock_jjn_yp3_ppb}
-xmlFile <xml file name with absolute path of the xmlaccess input file>
```

    Use this attribute to specify the path to DX configuration endpoint

    ``` {#codeblock_yz2_cq3_ppb}
    -xmlConfigPath <value>
    ```

Required options for undeploying theme EAR application:
:   Use this attribute to specify the configuration wizard home \(change of route is only in case of Open Shift Kubernetes Enviornment, otherwise the route remains the same as hostname\) that is required for authenticating to the cw\_profile

``` {#codeblock_flt_gq3_ppb}
-dxConnectHostname <value>
```

    Use this attribute to specify the port number of the cw\_profile \(for Kubernetes Environment dxConnectPort is 443\)

    ``` {#codeblock_sj3_hq3_ppb}
    -dxConnectPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating to the cw\_profile

    ``` {#codeblock_ppb_3q3_ppb}
    -dxConnectUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating to the cw\_profile

    ``` {#codeblock_vyq_jq3_ppb}
    -dxConnectPassword <value>
    ```

    Use this attribute to specify Soap port of the DX server

    ``` {#codeblock_kxt_lq3_ppb}
    -dxSoapPort <Soap port of the DX server> 
    ```

    Specify either the `dxProfileName` or `dxProfilePath` of the DX core server:

    -   Use this attribute to specify the profile name of the DX core server \(for example: `wp_profile`\):

        ``` {#d9e368}
        -dxProfileName <Profile name of the DX core server>
        ```


    **OR**

    -   Use this attribute to specify the profile path of the DX server \(for example: `/opt/HCL/wp_profile`\):

        ``` {#d9e380}
        -dxProfilePath <Path of the DX core server profile> 
        ```


    Use this attribute to specify the EAR application name

    ``` {#codeblock_lzz_nq3_ppb}
    -applicationName <value> 
    ```

Required options for undeploying WebDAV theme collection:
:   Use this attribute to specify the theme name of the collection created under WebDAV

``` {#codeblock_bsr_qq3_ppb}
-themeName <value>
```

**Example:**

``` {#codeblock_zgx_xf1_nqb}
dxclient undeploy-theme -dxProtocol <http/https> -hostname <host-name> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -dxSoapPort <dxSoapPort> -dxConnectHostname <hostname> -dxConnectPort <dxConnectPort> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -xmlFile <xml-file-with-path> -applicationName <application name> -themeName <theme-name> -enableBackup <enable-backup> -dxProfileName <Profile name of the DX core server profile> 
```

**Parent topic:**[DXClient Artifact Types \| HCL Digital Experience](../containerization/dxclientartifacts.md)

