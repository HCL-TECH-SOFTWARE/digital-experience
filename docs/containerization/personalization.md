# Personalization rules \| HCL Digital Experience {#pzn}

This topic contains the commands that the administrators can use to export and import the personalization \(PZN\) rules from the source server to the target server as specified by the user.

## Export PZN rules {#pznexport .section}

Command description
:   The `pzn-export` command is used to export the rules from the source server location specified by the user.

``` {#codeblock_zyr_vwt_yqb}
dxclient pzn-export
```

Help command
:   This command shows the help information for `pzn-export` command usage:

``` {#codeblock_azr_vwt_yqb}
dxclient pzn-export -h
```

Command options
:   Use this attribute to specify the protocol with which to connect to the DX server:

``` {#codeblock_inl_2l5_yqb}
-dxProtocol <value>
```

    Use this attribute to specify the hostname of the target DX server:

    ``` {#codeblock_pbh_fl5_yqb}
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the DX server,for Kubernetes Environment `dxPort` is 443:

    ``` {#codeblock_dpx_gl5_yqb}
    -dxPort <value>
    ```

    Use this attribute to specify the username to authenticate with the DX server:

    ``` {#codeblock_z2v_hl5_yqb}
    -dxUsername <value>
    ```

    Use this attribute to specify the password for the user in the `dxUsername` attribute:

    ``` {#codeblock_vvt_3l5_yqb}
    -dxPassword <value>
    ```

    Use this attribute to specify the location in the target workspace, which is the parent for the published nodes. The target path must exist before publishing:

    ``` {#codeblock_nbt_jl5_yqb}
    -targetPath <value>
    ```

    Use this attribute to specify the name of the workspace containing the rules in DX server \(default `targetWorkspace` is 'ROOTWORKSPACE'\):

    ``` {#codeblock_ot4_kl5_yqb}
    -targetWorkspace <value>
    ```

    **Note:** The `targetPath` and `targetWorkspace` parameters are optional. If the user does not pass the respective parameters, then the default values are taken.

    Use this attribute to specify the path to the context root on the DX server \(for example, /wps\):

    ``` {#codeblock_th5_5ld_lrb}
    -dxContextRoot <value>
    ```

    Log files from command execution can be found in the logs directory of the DXClient installation.

Example:
:   ``` {#codeblock_d2m_tl5_yqb}
dxclient pzn-export -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword>

```

    The outputfile for pzn export is generated in the following path: store/outputFiles/pznrules

## Import PZN rules {#pznimport .section}

Command description
:   The `pzn-import` command is used to import the rules into the target server.

``` {#codeblock_gfx_xl5_yqb}
dxclient pzn-import
```

Required files
:   Rules file: This file should contain the configuration XML representation of all the currently selected personalization objects.

Help command
:   This command shows the help information for `pzn-import` command usage:

``` {#codeblock_hfx_xl5_yqb}
dxclient pzn-import -h
```

Command options
:   Use this attribute to specify the protocol with which to connect to the DX server

``` {#codeblock_hbz_x45_yqb}
-dxProtocol <value>
```

    Use this attribute to specify the hostname of the target DX server

    ``` {#codeblock_mcy_y45_yqb}
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the DX server,for Kubernetes Environment dxPort is 443

    ``` {#codeblock_ywy_z45_yqb}
    -dxPort <value>
    ```

    Use this attribute to specify the username to authenticate with the DX server

    ``` {#codeblock_grs_1p5_yqb}
    -dxUsername <value>
    ```

    Use this attribute to specify the password for the user in the "dxUsername" attribute

    ``` {#codeblock_hqj_gp5_yqb}
    -dxPassword <value>
    ```

    Use this attribute to specify the config wizard home \(route change only in case of Open Shift Kubernetes Environment, otherwise same as hostname\) that is required for authenticating to the cw\_profile

    ``` {#codeblock_fwc_hp5_yqb}
    -dxConnectHostname <value>
    ```

    Use this attribute to specify the username that is required for authenticating to the cw\_profile

    ``` {#codeblock_w4w_hp5_yqb}
    -dxConnectUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating to the cw\_profile

    ``` {#codeblock_py4_3p5_yqb}
    -dxConnectPassword <value>
    ```

    Use this attribute to specify the port number of the cw\_profile\(for Kubernetes Environment dxConnectPort is 443\)

    ``` {#codeblock_m2j_jp5_yqb}
    -dxConnectPort <value>
    ```

    Use this attribute to specify the import file path that is required while executing the pzn import task

    ``` {#codeblock_b5c_kp5_yqb}
    -rulesFilePath <Absolute or relative path to import nodes file> 
    ```

    Use this attribute to specify the location in the target workspace, which is the parent for the published nodes. The target path must exist before publishing

    ``` {#codeblock_fxv_kp5_yqb}
    -targetPath <value>
    ```

    Use this attribute to specify the name of the workspace containing the rules in DX server \(default targetWorkspace is 'ROOTWORKSPACE'\)

    ``` {#codeblock_wbp_lp5_yqb}
    -targetWorkspace <value>
    ```

    Use this attribute to specify the path to the context root on the DX server \(for example, /wps\):

    ``` {#codeblock_vyd_xmd_lrb}
    -dxContextRoot <value>
    ```

    **Notes:**

    -   For Kubernetes environments, `dxProtocol` should be `http`, `hostname` should be localhost, `dxPort` should be 10039 as DXConnect doesn't support https due to SSL Handshake challenges at this time.
    -   The `dxProtocol`, `hostname`, `dxPort`, `targetWorkspace`, and `targetPath` parameters are optional. If the user does not pass the respective parameters, then the default values are taken.

    Log files from command execution can be found in the logs directory of the DXClient installation.

Example:
:   ``` {#codeblock_xjr_tp5_yqb}
dxclient pzn-import -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -dxConnectHostname <dxConnectHostname> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -dxConnectPort <dxConnectPort> -rulesFilePath <rulesFilePath>
```

**Parent topic:**[DXClient Artifact Types \| HCL Digital Experience](../containerization/dxclientartifacts.md)

