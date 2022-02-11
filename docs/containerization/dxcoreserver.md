# DX Core server \| HCL Digital Experience {#dxcoreserver}

This topic provides information about restarting the DX Core server and on creating core server configuration report using the DXClient tool. The `dx-core-configuration-reports`command is used to generate the differential reports on various core configurations between two DX server nodes.

## Restart DX Core server {#deploydxapp .section}

**Important:** Running the restart-dx-core command in the Kubernetes-based deployments might not restart all pods as expected, but this limitation will be addressed in the future releases. For now, if you want to restart all pods, use the Kubernetes interfaces such as `kubectl`.

The restart-dx-core command is used to restart the DX Core server.

Command description
:   This command invokes the restart-dx-core tool inside the DXClient and runs the DX Core restart action.

``` {#codeblock_lts_lxd_xrb}
dxclient restart-dx-core
```

Help command
:   This command shows the help information for `restart-dx-core` command usage:

``` {#codeblock_mts_lxd_xrb}
dxclient restart-dx-core -h
```

Command options
:   Use this attribute to specify the username that is required for authenticating with the DX Core:

``` {#codeblock_nts_lxd_xrb}
-dxUsername <value> 
```

    Use this attribute to specify the password that is required for authenticating with the DX Core:

    ``` {#codeblock_ots_lxd_xrb}
    -dxPassword <value>
    ```

    Use this attribute to specify the `ConfigWizard` home that is required for authenticating to `cw_profile`:

    ``` {#codeblock_pts_lxd_xrb}
    -dxConnectHostname <value>
    ```

    Use this attribute to specify the port number of the `cw_profile`:

    ``` {#codeblock_qts_lxd_xrb}
    -dxConnectPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating to the `cw_profile`:

    ``` {#codeblock_rts_lxd_xrb}
    -dxConnectUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating to the `cw_profile`:

    ``` {#codeblock_sts_lxd_xrb}
    -dxConnectPassword <value>
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


    The values that are passed through the command line override the default values.

    Use this attribute and retrigger the command to check the status of any previous request that was incomplete.

    ``` {#codeblock_t11_r1y_lsb}
    -requestId <Unique ID of a previously triggered restart request>
    ```

Example:
:   ``` {#codeblock_tts_lxd_xrb}
dxclient restart-dx-core -dxUsername <dxUsername> -dxPassword <dxPassword> -dxConnectHostname <hostname> -dxConnectPort <dxConnectPort> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -dxProfileName <Profile name of the DX core server>
```

## DX Core server configuration report {#dxcoreconfigreport .section}

Command description
:   The `dx-core-configuration-reports` command shows the summary of the configurations of a single DX server or both source and target DX servers, which users can use to compare.

``` {#codeblock_pvz_nmw_wrb}
dxclient dx-core-configuration-reports [OPTIONS]
```

Help command
:   This command shows the help information for `dx-core-configuration-reports` command usage:

``` {#codeblock_l3f_45c_xrb}
dxclient dx-core-configuration-reports summary-report -h
```

Command options
:   Use this attribute to specify the `ConfigWizard` home that is required for authenticating to `cw_profile`:

``` {#codeblock_ydw_ymw_wrb}
-hostname <value>
```

    Use this attribute to specify the port number of `cw_profile`:

    ``` {#codeblock_ynr_zmw_wrb}
    -dxConnectPort <value>
    ```

    Use this attribute to specify the user name that is required for authenticating to `cw_profile`:

    ``` {#codeblock_pv3_1nw_wrb}
    -dxConnectUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating to `cw_profile`:

    ``` {#codeblock_r5y_1nw_wrb}
    -dxConnectPassword <value>
    ```

    Use this attribute to specify the profile name of the DX core server:

    ``` {#codeblock_nyk_cnw_wrb}
    -dxProfileName <Profile name of the DX core server>
    ```

    Use this attribute to specify the host name of the target DX core server:

    ``` {#codeblock_brd_dnw_wrb}
    -targetHostname <value>
    ```

    Use this attribute to specify the port number of the target cw\_profile server:

    ``` {#codeblock_d3j_2nw_wrb}
    -targetDxConnectPort <value>
    ```

    Use this attribute to specify the user name of the target server:

    ``` {#codeblock_ffg_fnw_wrb}
    -targetDxConnectUsername <value>
    ```

    Use this attribute to specify the password of the target server:

    ``` {#codeblock_lsw_fnw_wrb}
    -targetDxConnectPassword <value>
    ```

    Use this attribute to specify the profile name of the target server:

    ``` {#codeblock_e4s_gnw_wrb}
    -targetDxProfileName <Profile name of the DX core server>
    ```

    **Notes:**

    -   The target server details are needed only when the user needs to generate the summary of the configurations of both source and target servers.
    -   The following list shows some of the deprecated parameters and the new parameters that replace them in CF201. It is recommended that you start using the new parameters because the old parameters might be removed in the upcoming releases:
        -   `-dxConnectHostname` replaced by `-hostname`
        -   `-targetServerHostname` replaced by `-targetHostname`
        -   `-targetServerPort ->` replaced by `-targetDxConnectPort`
        -   `-targetServerUsername` replaced by `-targetDxConnectUsername`
        -   `-targetServerPassword` replaced by `-targetDxConnectPassword`
        -   `-targetServerProfileName` replaced by `-targetDxProfileName`

Example:
:   ``` {#codeblock_xs2_4nw_wrb}

dxclient dx-core-configuration-reports summary-report -hostname <hostname> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -dxConnectPort <dxConnectPort> -targetHostname <targetHostname> -targetDxConnectUsername <targetDxConnectUsername> -targetDxConnectPassword <targetDxConnectPassword> -targetDxConnectPort <targetDxConnectPort>
```

**Parent topic:**[DXClient Artifact Types \| HCL Digital Experience](../containerization/dxclientartifacts.md)

