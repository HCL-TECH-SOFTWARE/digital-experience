# XML Access

This topic provides information about the xmlaccess command that is used to export or import portlet configurations.

## XML Access

The `xmlaccess` command is used to export or import pages or portlet configurations from a target HCL DX 9.5 CF19 or later server using the input XMLAccess file.

**Required file**

XMLAccess file : This XML file must contain the configuration update or export operation for the web application.

**Command**

```
dxclient xmlaccess -xmlFile <path>
```

**Help command**

This command shows the help information for `xmlaccess` command usage:

```
dxclient xmlaccess -h
```

**Command options**

Use this attribute to specify the protocol with which to connect to the DX server (wp_profile):

```
-dxProtocol <value>
```

Use this attribute to specify the hostname of the target DX server:

```
-hostname <value>
```

Use this attribute to specify the port on which to connect to the DX server (`wp_profile`):

```
-dxPort <value>
```

Use this attribute to specify the path to DX configuration endpoint (e.g. /wps/config):

```
-xmlConfigPath <value>
```

Use this attribute to specify the username to authenticate with the DX server (`wp_profile`):

```
-dxUsername <value>
```

Use this attribute to specify the password for the user in the `dxUsername` attribute:

```
-dxPassword <value>
```

Use this attribute to specify the local path to the XMLAccess file:

```
-xmlFile <Absolute or relative path to xmlaccess input file>
```

Command options passed through the command line overrides values set in the config.json file.

Log files from command execution can be found in the logs directory of the DXClient installation.

!!! example

    ```
    dxclient xmlaccess -xmlFile <xml-file-with-path>
    ```

!!! note 
    The attribute `-dxConnectHostname` is deprecated in CF202 and later releases. It is recommended that you start using the replacement parameter `-hostname` starting from CF202 wherever necessary.

For information on how to use the XML configuration interface, see [About the XML configuration interface](../../../../deployment/manage/portal_admin_tools/xml_config_interface/adxmlabt.md).

## HCLSoftware U learning materials

For an introduction and a demo on DX staging, go to [Staging for Beginners](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D505){target="_blank"}.

To learn how to use staging tools such as DXClient, Syndication, XMLAccess, Release Builder / Solution Installer and ConfigEngine, go to [Staging for Intermediate Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3328){target="_blank"}. You can try it out using the [Staging Lab for Intermediate Users](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Staging_Lab.pdf){target="_blank"} and corresponding [Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Staging_Lab_Resources.zip){target="_blank"}.
