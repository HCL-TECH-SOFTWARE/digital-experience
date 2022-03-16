# Shared library \| HCL Digital Experience {#themes}

Shared libraries are jar files representing code that is shared across multiple components of the customer, for example, portlets, themes, preprocessors, and others.

## Shared library {#deploytheme .section}

The shared-library command is used to manage the jar files in the provided default shared library location.

Default shared Library: DXCLib

Default shared library location: `<dx-server-profile>/PortalServer/sharedLibrary`

**Note:** For Shared Library artifact, the DX Server needs to be at HCL DX 9.5 CF196 or higher. The default shared library DXCLib is already configured and associated to application server.

The shared-library command uses two sub-commands upload and delete to manage files in the DX server. The sub-command upload is used to upload jar files and sub-command delete is used to delete the files from the default shared library location provided below.

Command Description
:   This command invokes the shared library upload task inside the DXClient. This is used to upload jar files into the default shared library location.

``` {#codeblock_rty_mgt_cqb}
dxclient shared-library upload
```

    This command invokes the shared library delete task inside the DXClient. This is used to delete jar files from the default shared library location.

    ``` {#codeblock_hwq_4gt_cqb}
    dxclient shared-library delete
    ```

Help command
:   This command shows the help information for `shared-library upload` command usage:

``` {#codeblock_kcx_vqm_ppb}
dxclient shared-library upload -h
```

    This command shows the help information for `shared-library delete` command usage:

    ``` {#codeblock_mf3_xgt_cqb}
    dxclient shared-library delete -h
    ```

Common Command options
:   Use this attribute to specify the username that is required for authenticating with the server

``` {#codeblock_yd4_cht_cqb}
-dxUsername <value> 
```

    Use this attribute to specify the password that is required for authenticating with the server

    ``` {#codeblock_qcs_dht_cqb}
    -dxPassword <value>
    ```

    Use this attribute to specify the config wizard home \(route change only in case of Open Shift Kubernetes Environment, otherwise same as hostname\) that is required for authenticating to the cw\_profile

    ``` {#codeblock_hjw_2ht_cqb}
    -dxConnectHostname <value>
    ```

    Use this attribute to specify the port number of the cw\_profile\(for Kubernetes Environment dxConnectPort is 443\)

    ``` {#codeblock_q15_fht_cqb}
    -dxConnectPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating to the cw\_profile

    ``` {#codeblock_s2v_ght_cqb}
    -dxConnectUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating to the cw\_profile.

    ``` {#codeblock_s2p_hht_cqb}
    -dxConnectPassword <value>
    ```

    Use this attribute to specify the profile name of the DX Core

    ``` {#codeblock_b2d_jht_cqb}
    -dxProfileName <Name of the DX server profile>
    ```

Command option for upload
:   Use this attribute to specify the path to a jar/zip file or folder containing jars in it.

    ``` {#codeblock_zqy_sht_cqb}
    -libFilePath <value>
    ```

Command option for delete
:   Use this attribute to specify the names of the jar files present in the shared library location on the server.

``` {#codeblock_mbz_xht_cqb}
-libFileNames <value>
```

**Note:** For upload, the folder or zip file should contain only jars files that are to be uploaded to the default shared library location.

Example:
:   Use this attribute to specify the path to a jar/zip file or folder containing jars in it.

    ``` {#codeblock_nhn_5ht_cqb}
    dxclient shared-library upload -dxUsername <dxUsername> -dxPassword <dxPassword> -dxConnectHostname <dxConnectHostname> -dxConnectPort <dxConnectPort> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -dxProfileName <Profile name of the DX Server> -libFilePath <path to jar/zip/Folder> 
    
    dxclient shared-library delete -dxUsername <dxUsername> -dxPassword <dxPassword> -dxConnectHostname <dxConnectHostname> -dxConnectPort <dxConnectPort> -dxConnectUsername <dxConnectUsername> -dxConnectPassword <dxConnectPassword> -dxProfileName <Profile name of the DX Server> -libFileNames <file names> -libFilePath <value>
    ```

**Parent topic:**[DXClient Artifact Types \| HCL Digital Experience](../containerization/dxclientartifacts.md)

