# Managing virtual portals \| HCL Digital Experience {#virtualportals}

This topic describes the commands that are used in managing the virtual portal activities such as creating, listing, importing, or exporting virtual portals.

## Virtual Portal commands {#listdamschema .section}

Command description
:   The `manage-virtual-portal` command is used to manage virtual portal tasks such as create, list, export, and import in the DX server.

``` {#codeblock_zyr_vwt_yqb}
dxclient manage-virtual-portal

```

Help command
:   This command shows the help document on the `manage-virtual-portal` command:

-   Help command for creating virtual portals:

    ``` {#codeblock_q3r_j55_yqb}
    dxclient manage-virtual-portal create -h
    ```

-   Help command for listing virtual portals:

    ``` {#codeblock_lpw_m55_yqb}
    dxclient manage-virtual-portal list -h
    ```

-   Help command for importing virtual portals:

    ``` {#codeblock_jm2_455_yqb}
    dxclient manage-virtual-portal import -h
    ```

-   Help command for exporting virtual portals:

    ``` {#codeblock_zwg_yx5_yqb}
    dxclient manage-virtual-portal export -h 
    ```


Subcommands
:   -   Create virtual portal task in the DX server:

    ``` {#codeblock_rwc_2y5_yqb}
    manage-virtual-portal create [OPTIONS]
    ```

-   List virtual portal task in the DX server:

    ``` {#codeblock_swc_2y5_yqb}
    manage-virtual-portal list [OPTIONS]
    ```

-   Import virtual portal task in the DX server:

    ``` {#codeblock_twc_2y5_yqb}
    manage-virtual-portal import [OPTIONS]
    ```

-   Export virtual portal task in the DX server:

    ``` {#codeblock_uwc_2y5_yqb}
    manage-virtual-portal export [OPTIONS]
    ```

-   Use this attribute and retrigger the command to check the status of any previous request that was incomplete.

    ``` {#codeblock_l2b_x1y_lsb}
    -requestId <Unique ID of a previously triggered create virtual portal request>
    ```


Required Commands
:   -   **`manage-virtual-portal create` command:**

    Use this parameter to specify the username that is required for authenticating with the server

    ``` {#codeblock_mll_tgv_yqb}
    -dxUsername <value> 
    ```

    Use this parameter to specify the password that is required for authenticating with the server

    ``` {#codeblock_xdd_vgv_yqb}
    -dxPassword <value>
    ```

    Use this parameter to specify the configuration wizard home \(route change only in case of Open Shift Kubernetes Environment, otherwise same as hostname\) that is required for authenticating to the cw\_profile

    ``` {#codeblock_iyt_zgv_yqb}
    -dxConnectHostname <value>
    ```

    Use this parameter to specify the port number of the cw\_profile\(for Kubernetes Environment dxConnectPort is 443\)

    ``` {#codeblock_mjv_bhv_yqb}
    -dxConnectPort <value>
    ```

    Use this parameter to specify the username that is required for authenticating to the cw\_profile

    ``` {#codeblock_zbr_chv_yqb}
    -dxConnectUsername <value>
    ```

    Use this parameter to specify the password that is required for authenticating to the cw\_profile

    ``` {#codeblock_m14_dhv_yqb}
    -dxConnectPassword <value>
    ```

    Use this parameter to specify the profile name of the DX core server

    ``` {#codeblock_hgt_2hv_yqb}
    -dxProfileName <Profile name of the DX core server> 
    ```

    Use this parameter to specify the username of the DX WAS server

    ``` {#codeblock_fv4_fhv_yqb}
    -dxWASUsername <value>
    ```

    Use this parameter to specify the password of the DX WAS server

    ``` {#codeblock_gy4_ghv_yqb}
    -dxWASPassword <value>
    ```

    Use this parameter to specify the virtual portal Title

    ``` {#codeblock_upk_hhv_yqb}
    -vpTitle <value>
    ```

    Use this parameter to specify the virtual portal Realm

    ``` {#codeblock_mpq_3hv_yqb}
    -vpRealm <value>
    ```

    Use this parameter to specify the virtual portal AdminGroup

    ``` {#codeblock_z5m_jhv_yqb}
    -vpAdminGroup <value>
    ```

    Use this parameter to specify the virtual portal HostName

    ``` {#codeblock_chg_khv_yqb}
    -vpHostname <value>
    ```

    Use this parameter to specify the virtual portal Context

    ``` {#codeblock_wrc_lhv_yqb}
    -vpContext <value>
    ```

    **Note:** Create virtual portal task creates an empty virtual portal in the DX server.

    **Example usage:**

    ``` {#codeblock_ow1_qlv_yqb}
     dxclient manage-virtual-portal create -dxConnectHostname <dxConnectHostname> -dxConnectPort <dxConnectPort> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -dxProfileName <Profile name of the DX Server> -dxUsername <dxUsername> -dxPassword <dxPassword> -dxWASUsername < Username of the DX WAS server> -dxWASPassword <Password of the DX WAS server> -vpTitle <virtual-portal-Title> -vpRealm <virtual-portal-realm>  -vpAdminGroup <virtual-portal-adminGroup> -vpHostname <virtual-portal-hostname> -vpContext<virtual-portal-context>
    ```

-   **`manage-virtual-portal list` command**

    Use this parameter to specify the username that is required for authenticating with the server

    ``` {#codeblock_bvs_whv_yqb}
    -dxUsername <value> 
    ```

    Use this parameter to specify the password that is required for authenticating with the server

    ``` {#codeblock_ozn_xhv_yqb}
    -dxPassword <value>
    ```

    Use this parameter to specify the configuration wizard home \(route change only in case of Open Shift Kubernetes Environment, otherwise same as hostname\) that is required for authenticating to the cw\_profile

    ``` {#codeblock_ehj_yhv_yqb}
    -dxConnectHostname <value>
    ```

    Use this parameter to specify the port number of the cw\_profile\(for Kubernetes Environment dxConnectPort is 443\)

    ``` {#codeblock_wj2_zhv_yqb}
    -dxConnectPort <value>
    ```

    Use this parameter to specify the username that is required for authenticating to the cw\_profile

    ``` {#codeblock_gzn_13v_yqb}
    -dxConnectUsername <value>
    ```

    Use this parameter to specify the password that is required for authenticating to the cw\_profile

    ``` {#codeblock_lsd_b3v_yqb}
    -dxConnectPassword <value>
    ```

    Use this parameter to specify the profile name of the DX core server

    ``` {#codeblock_wbc_c3v_yqb}
    -dxProfileName <Profile name of the DX core server> 
    ```

    Use this parameter to specify the username of the DX WAS server

    ``` {#codeblock_v3d_d3v_yqb}
    -dxWASUsername <value>
    ```

    Use this parameter to specify the password of the DX WAS server

    ``` {#codeblock_fqg_23v_yqb}
    -dxWASPassword <value>
    ```

    **Example usage:**

    ``` {#codeblock_ifg_bmv_yqb}
    dxclient manage-virtual-portal list -dxConnectHostname <dxConnectHostname> -dxConnectPort <dxConnectPort> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -dxProfileName <profile-name-of-the-DX-server> -dxUsername <dxUsername> -dxPassword <dxPassword> -dxWASUsername <username-of-the-DX-WAS-server> -dxWASPassword <password-of-the-DX-WAS-server> 
    ```

-   **`manage-virtual-portal import` command:**

    Use this parameter to specify the protocol with which to connect to the server

    ``` {#codeblock_ntp_v3v_yqb}
    -dxProtocol <value>
    ```

    Use this parameter to specify the username that is required for authenticating with the server

    ``` {#codeblock_tfc_y3v_yqb}
    -dxUsername <value> 
    ```

    Use this parameter to specify the password that is required for authenticating with the server

    ``` {#codeblock_rtz_y3v_yqb}
    -dxPassword <value>
    ```

    Use this parameter to specify the hostname of the target server

    ``` {#codeblock_qhv_z3v_yqb}
    -hostname <value>
    ```

    Use this parameter to specify the port on which to connect to the server\(for Kubernetes Environment dxPort is 443\)

    ``` {#codeblock_frt_1jv_yqb}
    -dxPort <value>
    ```

    Use this parameter to specify the path to DX configuration endpoint \(for example: /wps/config\)

    ``` {#codeblock_dxp_bjv_yqb}
    -xmlConfigPath <value>
    ```

    Use this parameter to specify the XML file name with absolute path of the input file

    ``` {#codeblock_abd_jjv_yqb}
    -xmlFile <value>
    ```

    Use this parameter to specify the virtual portal Context

    ``` {#codeblock_iyv_jjv_yqb}
    -vpContext <value>
    ```

    **Limitation:** Currently, import virtual portal feature supports only `vpContext` and does not support `vpHostname`. Support for Virtual portal with host name might be added in the future release.

    **Example Usage:**

    ``` {#codeblock_qrc_4jv_yqb}
    dxclient manage-virtual-portal import -dxProtocol <http/https> -hostname <host-name> -dxPort <dxPort> -xmlConfigPath <xmlConfigPath> -dxUsername <dxUsername> -dxPassword <dxPassword>  -xmlFile <xml-file-with-path> -vpContext <virtual-portal-context>
    ```

-   **`manage-virtual-portal export` command:**

    Use this parameter to specify the protocol with which to connect to the server

    ``` {#codeblock_idw_5jv_yqb}
    -dxProtocol <value>
    ```

    Use this parameter to specify the user name that is required for authenticating with the server

    ``` {#codeblock_yv5_vjv_yqb}
    -dxUsername <value> 
    ```

    Use this parameter to specify the password that is required for authenticating with the server

    ``` {#codeblock_ccs_wjv_yqb}
    -dxPassword <value>
    ```

    Use this parameter to specify the host name of the target server

    ``` {#codeblock_hbb_yjv_yqb}
    -hostname <value>
    ```

    Use this parameter to specify the port on which to connect to the server\(for Kubernetes Environment dxPort is 443\)

    ``` {#codeblock_izf_zjv_yqb}
    -dxPort <value>
    ```

    Use this parameter to specify the path to DX configuration endpoint \(for example: /wps/config\)

    ``` {#codeblock_u1r_1kv_yqb}
    -xmlConfigPath <value>
    ```

    Use this parameter to specify the virtual portal Context

    ``` {#codeblock_mr4_fkv_yqb}
    -vpContext <value>
    ```

    Use this parameter to specify the virtual portal Title

    ``` {#codeblock_lz5_3kv_yqb}
    -vpTitle <value>
    ```

    Use this parameter to specify the XML file name with absolute path of the input file to export the virtual portal content.

    ``` {#codeblock_z1x_jkv_yqb}
    -xmlFile <value>
    ```

    **Limitation:** Currently, exporting virtual portal feature supports only `vpContext` and does not support `vpHostname`. Support for Virtual portal with hostname might be added in the future release.

    **Example:**

    ``` {#codeblock_ec4_tmv_yqb}
    dxclient manage-virtual-portal export -hostname <hostname> -dxProtocol <dxProtocol> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -vpTitle <vpTitle> -vpContext <vpContext> -xmlFile <xml-file-with-path>
    ```


    Log files from running the command can be found in the logs directory of the DXClient installation.

**Parent topic:**[DXClient Artifact Types \| HCL Digital Experience](../containerization/dxclientartifacts.md)

