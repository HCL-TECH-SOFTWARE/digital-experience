# Preparing the Installation Manager

The IBM Installation Manager (IIM) is used to install installation packages such as HCL Digital Experience and IBM WebSphere Application Server.

## Procedure

!!!warning
    Due to incompatibilities between recent IIM levels and DX install packages, do not update IBM Installation Manager to version 1.10.
	   
If you do not have an existing Installation Manager, then complete the following procedure:

1.  Start all servers and applications that require a port number to avoid port conflicts when installing HCL Digital Experience.

2.  Type `ping yourserver.yourcompany.com` on a command line to verify that your fully qualified host name is properly configured.

3.  Type ping localhost on a command line to verify that your network is properly configured.

4.  If you are installing on a server with a firewall, antivirus, screen saver, or desktop search engine that is enabled, disable them before you install. If you do not disable them and the installation program detects them, a warning message displays during the installation or the installation might fail.

    !!!note
        If you are using Windows™ Defender, it can cause installation failures. To avoid errors, add the C:\\Users\Administrator\AppData\Local\Temp\ directory to the ignore list. If you use a different temp directory for your installation, add that directory to the ignore list.

5.  Complete the following steps to install as a non-root user:

    1.  Log in to the operating system as the root user.

    2.  Open a command line.

    3.  Use the appropriate system commands to create the following items:

        -   Non-root user, including password
        -   Group
        -   Directory, used when you install IBM® Installation Manager and HCL Digital Experience

    4.  Set the user profile for the number of open files. Set the value to ulimit -n 10240.

    5.  Add the non-root user to the new group.

    6.  Run the following task to change the owner of the directory to the non-root user:

        ```
        chown user:group /directory
        ```

    7.  Run the following task to change permissions for the directory:

        ```
        chmod 755 /directory
        ```

    8.  Log in as the non-root user.

    9.  Use the following command to install IBM Installation Manager:

        ```
        ./userinst 
        ```

        Set the IBM Installation Manager installation location to /directory/IBM/InstallationManager.

6.  Run the following task from the IIM directory:

    ./install

7.  Run the following task from the Portal Setup disk if you want to start the launchpad to complete all necessary installation steps:

    `./setup.sh`

    !!!note
        If the language is not currently supported for the user interface, you might see the English version.

    After you complete all necessary steps, verify that your installation was successful.



