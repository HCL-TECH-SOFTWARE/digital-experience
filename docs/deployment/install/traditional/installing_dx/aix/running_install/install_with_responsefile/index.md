# Installing HCL DX on AIX using a response file

Use either a sample response file or a response file that you created to install HCL Digital Experience (DX) on an existing IBM WebSphere Application Server.

## Prerequisites

- Ensure that a working installation of IBM WebSphere Application Server is available and not used by another copy of HCL DX.
- Create a response file based on your environment. For more information, refer to [Create a response file for your AIX environment](inst_response-AIX.md).

## Configuring the sample response file

1. Locate the sample response file in the `SETUP_root/products/WP95_Server/native directory`, and then extract `wp.im.portal95.samples_9.5.0.201909290018.zip`.
2. Modify the file with your environment values:

    - Search for `repository` and enter the appropriate paths for your environment.
    - Search for `offering` and enter the appropriate offering IDs and profiles for your license. 
    - Search for `value=` and either keep the default values or enter appropriate values for your environment.

3. Read all comments for important information.

## Installing HCL DX

The installation program verifies the operating system, disk space, and software prerequisites before installation. You cannot install two instances of the server at the same time, even if you install to different directories. You must install each server completely before you install the next one.

1. If the repository URL requires authentication, use the IBM Installation Manager command-line tool `imutilsc` from the installation tools directory to store repository credentials in the secure storage file:

    ```bash
    ./imutilsc saveCredential -url repository_URL -userName credential_userName -userPassword password -secureStorageFile storage_file [ -masterPasswordFile master_password_file ]
    [ -preferences com.ibm.cic.common.core.preferences.ssl.nonsecureMode=true|false ]
    [ -proxyHost proxy_host -proxyPort proxy_port
    [ -proxyUsername proxy_username -proxyUserPassword proxyuser_password ]
    [ -useSocks ] ]
    [ -verbose ]
    ```

    !!! tip
        If you install on a different computer, copy the secure storage file to that computer.

2. Navigate to the `InstallationManager_root/eclipse/tools` directory.
3. Install HCL DX on an existing WebSphere Application Server:

    ```bash
    ./imcl -acceptLicense input pathtoresponse.xml -log <file_path>/<filename>
    ```

    !!! tip
        Add `-secureStorageFile`, `pathtosecureStorageFile`, `-masterPasswordFile`, and `pathtomasterPasswordFile` to the `imcl` command if you are using a secure storage file to store credentials.

## Next steps

Before you access WebSphere Application Server, configure the software license agreement to set the usage limit from the Proof of Entitlement (POE) or invoice. For more information, refer to [Configuring software license information](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=i-configuring-software-license-information){target="_blank"}.

- **[Creating a response file for installing HCL DX on AIX](inst_response-AIX.md)**  
Use IBM Installation Manager to record a response file based on your environment and automate installations across multiple servers.
