# Installing HCL Digital Experience in Windows using a response file

Use either a sample response file or a response file that you created to install HCL Portal on to an existing IBM WebSphere Application Server.

-   A working installation of IBM® WebSphere® Application Server is required. Ensure that it is not used by another copy of HCL Portal.
-   You need to create a response file first based on your environment. Go to [Create a response file for your Windows environment](inst_response-windows.md) for more information.

Locate the sample response file in the SETUP\_root/products/WP95\_Server/native directory then unzip wp.im.portal95.samples\_9.5.0.201909290018.zip. Modify the file with your environment values. Search for repository and enter the appropriate paths for your environment. Then, search on offering and enter the appropriate offering IDs and profiles for your license. Finally, search on value= and either leave the default values or enter appropriate values for your environment. Read all of the comments for important information.

The installation program verifies the operating system and its prerequisites, available disk space, and any required software prerequisites before installation. You cannot install two instances of the server at the same time, even if you are installing to different directories. You must install each server completely before you install the next one.

1.  If the repository URL requires authentication, use the IBM Installation Manager command-line tool to create a secure **Storage File**.

    The secure **Storage File** stores the credentials that are needed for the repositories. The IBM Installation Manager command-line tool imutilsc is available from the installation tools directory. The following information is an example of the imutilsc key ring file command:

    ```
    imutilsc saveCredential -url repository\_URL -userName credential\_userName
    	-userPassword password -secureStorageFile storage\_file [ -masterPasswordFile master\_password\_file ]
    [ -preferences com.ibm.cic.common.core.preferences.ssl.nonsecureMode=true|false ]
    	[ -proxyHost proxy\_host -proxyPort proxy\_port
    		[ -proxyUsername proxy\_username -proxyUserPassword proxyuser\_password ]
    		[ -useSocks ] ]
    	[ -verbose ]
    ```

    **Tip:** If you install on a different computer, copy the secure **Storage File** to that computer.

2.  Go to the InstallationManager\_root/eclipse/tools directory.

3.  Run the following task to install HCL Portal on an existing WebSphere Application Server:

    **Tip:** Add the -secureStorageFile pathtosecureStorageFile -masterPasswordFile pathtomasterPasswordFile parameters to the imcl command if you are using a secure **Storage File** to store credentials.

    imcl -acceptLicense input pathtoresponse.xml -log dirpath/logfilename


-   **[Creating a response file for installing HCL Digital Experience in Windows](../install/inst_response-windows.md)**  
Use IBM Installation Manager to record a response file based on your environment, and also to automate your installation on multiple servers.

**Parent topic:**[Running the HCL Digital Experience installer in Windows](../install/inst_binaries-windows.md)

