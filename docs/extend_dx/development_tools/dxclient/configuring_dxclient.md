# Configuring DXClient

This topic describes how to configure DXClient in your HCL Digital Experience (DX) environment.

## Basic Configuration

Common command arguments can be pre-configured inside the `config.json` file. When first executing any DXClient command, such as `dxclient -V`, a store directory is created in the local working directory. The active `config.json` file is in the store directory located below your working directory at `store/config.json`. After the file is created, you can update the values in the `store/config.json` file. DXClient commands executed in the original working directory will use those values for DXClient commands. A sample configuration file that can be used on on-premises platforms in standalone, cluster (default-config.json), or kubernetes (default-config-kube.json) platforms is also available under `<working-directory>/samples/sample-configurations` for reference. If you want to override any of the parameters in the `store/config.json` file, add them in your command line.

```json
{
  "name":"config.json",
  "desc":"The attributes in this file are used for configuration purpose and those must not be deleted.",
  "dxProtocol": "",
  "dxConnectProtocol": "https",
  "hostname": "",
  "dxPort": "",
  "dxSoapPort": "10033",
  "dxConnectPort": "10202",
  "dxContextRoot":"/wps",
  "contenthandlerPath": "/wps/mycontenthandler",
  "projectContext": "",
  "virtualPortalContext": "",
  "xmlConfigPath": "/wps/config",
  "xmlAccessMaxFileSizeMB": 256,
  "damAPIPort": "",
  "ringAPIPort": "",
  "damAPIVersion": "v1",
  "ringAPIVersion": "v1",
  "dxConnectUsername": "",
  "dxConnectPassword": "",
  "dxUsername": "",
  "dxPassword": "",
  "dxProfileName": "wp_profile",
  "dxProfilePath": "/opt/HCl/wp_profile",
  "dxWASUsername": "",
  "dxWASPassword": "",
  "enableLogger": true,
  "enableBackup": "false",
  "lastModifiedAfter": "",
  "restoreAsPublished": false,
  "targetHostname": "",
  "targetDxConnectPort": "",
  "targetDxConnectUsername":"",
  "targetDxConnectPassword":"",
  "targetDxProfileName": "",
  "targetServerHostname": "",
  "targetServerPort": "",
  "targetServerUsername":"",
  "targetServerPassword":"",
  "targetServerProfileName": "",
  "vaultUsername": "",
  "vaultPassword": "",
  "wcmContentName": "",
  "wcmContentId": "",
  "wcmContentPath": "",
  "wcmSiteArea": "",
  "wcmLibraryId": "",
  "wcmLibraryName": "",
  "wcmProjectName": ""
}

```

## Configuring multiple environments

A folder named `store` is created in your working directory. This is the default location for configuration, logger, and output files. If you require to create a new configuration, set the environment variable VOLUME_DIR to the desired directory name and run your task. For example:

=== "Linux and Apple macOS"
    ```bash
    export VOLUME_DIR=storeForScriptApplication

    # or if you want spaces in its value, enclose it in double quotes ("")
    export VOLUME_DIR="store for script application"
    ```

=== "Microsoft Windows"
    ```batch
    set VOLUME_DIR=storeForScriptApplication

    :: or if you want spaces in its value
    set VOLUME_DIR=store for script application
    ```

    !!!important
        - Do not enclose the value of `VOLUME_DIR` in double quotes ("") in Windows. This produces errors when executing DXClient commands. 
        - Do not provide a path to set as `VOLUME_DIR`. Instead, provide a folder name.

The `VOLUME_DIR` requires read and write access permissions. Set appropriate permissions for the `VOLUME_DIR` as per user/group/owner.

=== "Linux and Apple macOS"
    ```bash
    chmod xxx <working-directory>/<VOLUME_DIR>

    # where xxx is a 3-digit number where each digit can be anything from 0 to 7.
    # Ref: https://wiki.archlinux.org/title/File_permissions_and_attributes#Numeric_method
    ```

=== "Microsoft Windows"
    1. Right click `<working-directory>/<VOLUME_DIR>` directory > "Properties" > "Security" Tab.
    2. Set the appropriate permission for the folder.

You can find the configuration, logger, and output under `<working-directory>/<VOLUME_DIR>`.

Common command arguments can be pre-configured inside the config.json file available under the `<working-directory>/<VOLUME_DIR>` folder. A sample configuration file that can be used on on-premises platforms in standalone, cluster (default-config.json), or Kubernetes (default-config-kube.json) platforms is also available under `<working-directory>/samples/sample-configurations` for reference. If you want to override any of the parameters in the config.json, add them in your command line.  

!!!note
    You must create the config.json in each `<VOLUME_DIR>` folder to set up multiple configurations. Otherwise, the system picks up the configurations specified in the default config.json available under `dist/configuration` in node version.

## Configuring TLS certificate validation

Starting CF226, DXClient no longer ignores certificates that cannot be properly validated when using Transport Layer Security (TLS) connections. This is to improve security and maintain best practices in development and production environments. You can validate and trust custom certificates such as self-signed or third-party CAs without entirely disabling validation.

1. Obtain the certificate.

    Ensure you have the `.pem` certificate file that you wish to add to the truststore. It must contain the key and certificate files.

2. Add the certificate using one of the following methods:

    - Use the `NODE_EXTRA_CA_CERTS` environment variable.

        `NODE_EXTRA_CA_CERTS` provides a secure way to add custom trusted certificates. To use the `NODE_EXTRA_CA_CERTS` environment variable, you need to specify the path to a PEM file that contains the key and certificate details. Configure this variable in your local or production environment using the following command:

        === "Linux and Apple macOS"
            ```
            export NODE_EXTRA_CA_CERTS=/Users/myUser/my-cert.pem
            ```

        === "Microsoft Windows"
            ```
            set NODE_EXTRA_CA_CERTS=C:\Users\myUser\my-cert.pem
            ```

    - Add the certificate to the truststore on your operating system.

        !!!important
            In local or development environments, you may want to disable this security feature to allow connections to services with self-signed or invalid certificates. By setting `NODE_TLS_REJECT_UNAUTHORIZED` to `0`, you can bypass certificate validation. This can be useful for testing, but it should never be used in production environments because it can expose your application to potential security risks.