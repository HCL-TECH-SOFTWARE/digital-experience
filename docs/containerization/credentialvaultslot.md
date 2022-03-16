# Create or update credential vault slot \| HCL Digital Experience {#credentialvaultslot}

This topic describes the commands that are used to create or update credential vault slot in the DX server.

## Credential vault slot {#listdamschema .section}

Command description
:   Use the `create-credential-vault` command to create or update a credential vault slot.

``` {#codeblock_zyr_vwt_yqb}
dxclient create-credential-vault
```

Help command
:   This command shows the help information for `create-credential-vault` command usage:

``` {#codeblock_azr_vwt_yqb}
dxclient create-credential-vault -h
```

Command options
:   Use this attribute to specify the protocol to connect to the server:

``` {#codeblock_tpj_yzc_lrb}
-dxProtocol <value>
```

    Use this attribute to specify the hostname of the target server:

    ``` {#codeblock_dzp_c1d_lrb}
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the server \(for Kubernetes Environment, dxPort is 443\):

    ``` {#codeblock_itk_d1d_lrb}
    -dxPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating with the server:

    ``` {#codeblock_iqk_21d_lrb}
    -dxUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating with the server:

    ``` {#codeblock_gjh_f1d_lrb}
    -dxPassword <value>
    ```

    Use this attribute to specify the path to DX configuration endpoint:

    ``` {#codeblock_ejg_g1d_lrb}
    -xmlConfigPath <value>
    ```

    Use this attribute to specify the credential vault segment slot name:

    ``` {#codeblock_thb_h1d_lrb}
    -credentialSlotName <value>
    ```

    Use this attribute to specify the credential vault Username:

    ``` {#codeblock_bb3_k1d_lrb}
    -vaultUsername <value>
    ```

    Use this attribute to specify the credential vault UserGroup:

    ``` {#codeblock_ekw_l1d_lrb}
    -vaultUserGroup <value>
    ```

    Use this attribute to specify the credential vault shared userid password:

    ``` {#codeblock_iwz_m1d_lrb}
    -vaultPassword <value>
    ```

    Use this attribute to specify the credential vault segment name and the default is set to `DefaultAdminSegment`:

    ``` {#codeblock_oq4_41d_lrb}
    -vaultSegmentName <value>
    ```

    Use this attribute to specify the credential vault segment description:

    ``` {#codeblock_pcq_p1d_lrb}
    -vaultDescription <value>
    ```

Example:
:   ``` {#codeblock_jhy_r1d_lrb}
dxclient create-credential-vault -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword>  -xmlConfigPath <xmlConfigPath> -credentialSlotName <credentialSlotName> -vaultUsername <vaultUsername> -vaultPassword <vaultPassword>
```

**Parent topic:**[DXClient Artifact Types \| HCL Digital Experience](../containerization/dxclientartifacts.md)

