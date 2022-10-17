# Installing HCL Digital Experience in AIX system using a response file

Use either a sample response file or a response file that you created to install HCL Digital Experience on to an existing IBM WebSphere Application Server.

-   A working installation of IBM® WebSphere® Application Server is required. Ensure that it is not used by another copy of HCL Digital Experience
-   You need to create a response file first based on your environment. Go to [Create a response file for your AIX environment](inst_response-AIX.md) for more information.

Locate the sample response file in the SETUP_root/products/WP95_Server/native directory then unzip wp.im.portal95.samples_9.5.0.201909290018.zip. Modify the file with your environment values. Search for repository and enter the appropriate paths for your environment. Then, search on offering and enter the appropriate offering IDs and profiles for your license. Finally, search on value= and either leave the default values or enter appropriate values for your environment. Read all of the comments for important information.

The installation program verifies the operating system and its prerequisites, available disk space, and any required software prerequisites before installation. You cannot install two instances of the server at the same time, even if you are installing to different directories. You must install each server completely before you install the next one.

## Procedure

1.  If the repository URL requires authentication, use the IBM Installation Manager command-line tool to create a secure **Storage File**.

    The secure **Storage File** stores the credentials that are needed for the repositories. The IBM Installation Manager command-line tool imutilsc is available from the installation tools directory. The following information is an example of the imutilsc key ring file command:

    ```
    ./imutilsc saveCredential -url repository_URL -userName credential_userName
    	-userPassword password -secureStorageFile storage_file [ -masterPasswordFile master_password_file ]
    [ -preferences com.ibm.cic.common.core.preferences.ssl.nonsecureMode=true|false ]
    	[ -proxyHost proxy_host -proxyPort proxy_port
    		[ -proxyUsername proxy_username -proxyUserPassword proxyuser_password ]
    		[ -useSocks ] ]
    	[ -verbose ]
    ```

    !!! tip 
        If you install on a different computer, copy the secure **Storage File** to that computer.

2.  Go to the InstallationManager_root/eclipse/tools directory.

3.  Run the following task to install HCL Portal on an existing WebSphere Application Server:

    !!! tip 
        Add the -secureStorageFile pathtosecureStorageFile -masterPasswordFile pathtomasterPasswordFile parameters to the imcl command if you are using a secure **Storage File** to store credentials.

    `./imcl -acceptLicense input pathtoresponse.xml -log dirpath/logfilename`


Before you access WebSphere Application Server, configure the software license agreement to set the usage limit from the Proof of Entitlement \(POE\) or invoice. Go to [Configuring software license information](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.installation.nd.iseries.doc/ae/tins_is_cfglic.html?cp=SSAW57_8.5.5%2F2-5-0-7-1) for information.

-   **[Creating a response file for installing HCL Digital Experience in AIX](inst_response-AIX.md)**  
Use IBM Installation Manager to record a response file based on your environment, and also to automate your installation on multiple servers.


