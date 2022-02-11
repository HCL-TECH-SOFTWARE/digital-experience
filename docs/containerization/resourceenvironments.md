# Resource environment provider \| HCL Digital Experience {#resourceenvironments}

This topic describes the commands that are used to create, update, delete, and retrieve custom properties from an existing resource environment provider. It also provides the commands to export or import multiple resource environment providers.

## Resource environment commands {#listdamschema .section}

Command description:
:   The `resource-env-provider` command is used to create, update or delete a custom property from an existing Resource Environment Provider, and to export or import multiple resource environment providers.

``` {#codeblock_zyr_vwt_yqb}
dxclient resource-env-provider
```

Help command:
:   This command shows the help information for `resource-env-provider` command usage:

``` {#codeblock_azr_vwt_yqb}
dxclient resource-env-provider -h
```

-   Help command for creating the resource environment property:

    ``` {#codeblock_q3r_j55_yqb}
    dxclient resource-env-provider create-property -h
    
    ```

-   Help command for updating the resource environment property:

    ``` {#codeblock_lpw_m55_yqb}
    dxclient resource-env-provider update-property -h
    ```

-   Help command for deleting the resource environment property:

    ``` {#codeblock_jm2_455_yqb}
    dxclient resource-env-provider delete-property -h
    ```

-   Help command for retrieving the resource environment property:

    ``` {#codeblock_ivt_rby_lsb}
    dxclient resource-env-provider retrieve-property -h
    ```

-   Help command for exporting the resource environment property:

    ``` {#codeblock_ety_nfd_lrb}
    dxclient resource-env-provider export-properties -h
    ```

-   Help command for importing the resource environment property:

    ``` {#codeblock_c35_qfd_lrb}
    dxclient resource-env-provider import-properties -h
    ```


Commands:
:   -   Create a custom property from an existing resource environment:

    ``` {#codeblock_rkz_x55_yqb}
    resource-env-provider create-property [OPTIONS]
    
    ```

-   Update a custom property from an existing resource environment:

    ``` {#codeblock_skz_x55_yqb}
    resource-env-provider update-property [OPTIONS]
    ```

-   Delete a custom property from an existing resource environment:

    ``` {#codeblock_tkz_x55_yqb}
    resource-env-provider delete-property[OPTIONS]
    ```

-   Retrieve a custom property from an existing resource environment provider:

    ``` {#codeblock_wwj_vby_lsb}
    resource-env-provider retrieve-property [OPTIONS]
    ```

-   Export all the existing resource environment providers:

    ``` {#codeblock_ofx_wfd_lrb}
    resource-env-provider export-properties [OPTIONS]
    ```

-   Import all the existing resource environment providers provided in the input file containing the resource environment providers:

    ``` {#codeblock_h11_cgd_lrb}
    resource-env-provider import-properties [OPTIONS]
    ```


Command options required to create, update, delete, and retrieve resource environment providers:
:   Use this attribute to specify the protocol with which to connect to the server:

``` {#codeblock_ydw_qv5_yqb}
-dxProtocol <value>
```

    Use this attribute to specify the hostname of the target server:

    ``` {#codeblock_nqv_rv5_yqb}
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the server \(for Kubernetes Environment, dxPort is 443\):

    ``` {#codeblock_wfx_sv5_yqb}
    -dxPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating with the server:

    ``` {#codeblock_kjy_tv5_yqb}
    -dxUsername <value> 
    ```

    Use this attribute to specify the password that is required for authenticating with the server:

    ``` {#codeblock_ncy_5v5_yqb}
    -dxPassword <value>
    ```

    Use this attribute to specify the config wizard home \(route change is only in case of Open Shift Kubernetes Environment, otherwise it is the same as hostname\) that is required for authenticating to the cw\_profile:

    ``` {#codeblock_u3x_vv5_yqb}
    -dxConnectHostname <value>
    ```

    Use this attribute to specify the port number of the cw\_profile \(for Kubernetes Environment, dxConnectPort is 443\):

    ``` {#codeblock_gvv_wv5_yqb}
    -dxConnectPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating to the cw\_profile:

    ``` {#codeblock_svt_xv5_yqb}
    -dxConnectUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating to the cw\_profile:

    ``` {#codeblock_chb_zv5_yqb}
    -dxConnectPassword <value>
    ```

    Use this attribute to specify the name of the Resource Environment Provider:

    ``` {#codeblock_lzc_1w5_yqb}
    -providerName <value> 
    ```

    Use this attribute to specify the name of the Custom Property:

    ``` {#codeblock_gh2_bw5_yqb}
    -propertyName <value>
    ```

    Use this attribute to specify the value of the Custom Property:

    ``` {#codeblock_p52_cw5_yqb}
    -propertyValue <value> 
    ```

    Use this attribute to specify the description of the Custom Property:

    ``` {#codeblock_x25_dw5_yqb}
    -propertyDesc <value> 
    ```

Command options required to export and import resource environment providers:
:   Use this attribute to specify the configuration wizard home \(route change is only in the case of Open Shift Kubernetes Environment, otherwise it is same as hostname\) that is required for authenticating to the cw\_profile:

``` {#codeblock_szq_jhd_lrb}
-dxConnectHostname <value>
```

    Use this attribute to specify the port number of the cw\_profile\(for Kubernetes Environment, dxConnectPort is 443\):

    ``` {#codeblock_l5v_mhd_lrb}
    -dxConnectPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating to the cw\_profile:

    ``` {#codeblock_ocs_4hd_lrb}
    -dxConnectUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating to the cw\_profile:

    ``` {#codeblock_nvw_phd_lrb}
    -dxConnectPassword <value>
    ```

    Use this attribute to specify the username of the DX WAS server:

    ``` {#codeblock_ib4_qhd_lrb}
    -dxWASUsername <value>
    ```

    Use this attribute to specify the password of the DX WAS server:

    ``` {#codeblock_nnq_rhd_lrb}
    -dxWASPassword <value>
    ```

    Use this attribute to specify the profile name of the DX core server:

    ``` {#codeblock_a54_shd_lrb}
    -dxProfileName <Profile name of the DX core server> 
    ```

    For importing resource environment properties, use this attribute to specify the File path:

    ``` {#codeblock_fxs_z3d_lrb}
    -filePath <value>
    ```

Example:
:   -   For creating property:

    ``` {#codeblock_mhj_kw5_yqb}
    dxclient resource-env-provider create-property -providerName <providerName> -propertyName <propertyName> -propertyValue <propertyValue>
    
    ```

-   For updating property:

    ``` {#codeblock_i2s_mw5_yqb}
    dxclient resource-env-provider update-property -providerName <providerName> -propertyName <propertyName> -propertyValue <modifiedpropertyValue>
    ```

-   For deleting property:

    ``` {#codeblock_pgt_nw5_yqb}
    dxclient resource-env-provider delete-property -providerName <providerName> -propertyName <propertyName> -propertyValue <modifiedpropertyValue>
    ```

-   For retrieving property:

    ``` {#codeblock_u1x_dcy_lsb}
     dxclient resource-env-provider retrieve-property -providerName <providerName> -propertyName <propertyName>
    ```

-   For exporting property:

    ``` {#codeblock_ifj_ljd_lrb}
    dxclient resource-env-provider export-properties -dxProfileName <dxProfileName>
    ```

-   For importing property:

    ``` {#codeblock_vmq_ljd_lrb}
    dxclient resource-env-provider import-properties -dxProfileName <dxProfileName> -filePath <filePath>
    ```


**Parent topic:**[DXClient Artifact Types \| HCL Digital Experience](../containerization/dxclientartifacts.md)

