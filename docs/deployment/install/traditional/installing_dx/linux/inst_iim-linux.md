# Setting up the IBM Installation Manager on Linux

The IBM Installation Manager is used to install installation packages such as HCL Digital Experience (DX) and IBM WebSphere Application Server.

!!!warning
    Due to incompatibilities between recent IBM Installation Manager levels and DX install packages, do not update IBM Installation Manager to version 1.10.

1. Start all servers and applications that require a port number to avoid port conflicts when installing HCL DX.
2. Run `ping yourserver.yourcompany.com` from the command line to verify that the fully qualified domain name is properly configured.
3. Run `ping localhost` from the command line to verify network configuration.
4. If you are installing on a server with a firewall, antivirus, screensaver, or desktop search engine that is enabled, disable them before you install. If you do not disable them and the installation program detects them, a warning message displays during the installation or the installation might fail.
5. Complete the following steps to install as a non-root user:

    1. Log in to the operating system as the root user.
    2. Open a command line.
    3. Use the appropriate system commands to create the following items:

        - Non-root user, including password
        - Group
        - Directory, used when you install IBM Installation Manager and HCL DX

    4. Set the user profile for the number of open files. Set the value to ulimit -n 10240.
    5. Add the non-root user to the new group.
    6. Run the following task to change the owner of the directory to the non-root user:

        ```
        chown user:group /directory
        ```

    7. Run the following task to change permissions for the directory:

        ```
        chmod 755 /directory
        ```

    8. Log in as the non-root user.
    9. Use the following command to install IBM Installation Manager:

        ```
        ./userinst 
        ```

        Set the IBM Installation Manager installation location to /directory/IBM/InstallationManager.

6. Run the following task from the IBM Installation Manager directory:

    ```
    ./install
    ```

    !!!note
        Skip this step if you already have an existing installation.
