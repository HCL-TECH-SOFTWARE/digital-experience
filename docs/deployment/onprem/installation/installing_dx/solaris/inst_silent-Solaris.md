# Solaris: Installing with the response file

Use either a sample response file or a response file that you created to install HCL Digital Experience on to an existing IBM WebSphere Application Server. You can create a response file with the graphical or console mode interface.

-   A working installation of IBM® WebSphere® Application Server is required. Ensure that it is not used by another copy of HCL Portal.
-   You need to create a response file first based on your environment. Go to [Create a response file for your Solaris environment](inst_response-Solaris.md) for more information.

Locate the sample response file in the setup\_root/responsefiles directory. Modify the file with your environment values. Search for repository and enter the appropriate paths for your environment. Then, search on offering and enter the appropriate offering IDs and profiles for your license. Finally, search on value= and either leave the default values or enter appropriate values for your environment. Read all of the comments for important information.

The installation program verifies the operating system and its prerequisites, available disk space, and any required software prerequisites before installation. You cannot install two instances of the server at the same time, even if you are installing to different directories. You must install each server completely before you install the next one.

1.  If the repository URL requires authentication, use the IBM Installation Manager command-line tool to create a secure **Storage File**.

    The secure **Storage File** stores the credentials that are needed for the repositories. The IBM Installation Manager command-line tool imutilsc is available from the installation tools directory. The following information is an example of the imutilsc key ring file command:

    ```
    ./imutilsc saveCredential -url repository\_URL -userName credential\_userName
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

    ./imcl -acceptLicense input pathtoresponse.xml -log dirpath/logfilename


-   **[Solaris: Creating a response file](../install/inst_response-Solaris.md)**  
After IBM Installation Manager is installed, you can use it to record a response file that is based on your environment. Record a response file on the same operating system you plan for the installation. If you have multiple operating systems, you must record a response file for each operating system. Use a response file to automate your installation on multiple servers.

**Parent topic:**[Solaris: Running the installation program](../install/inst_binaries-Solaris.md)

