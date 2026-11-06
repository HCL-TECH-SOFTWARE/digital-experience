# Setting up the IBM Installation Manager on AIX

Use the IBM Installation Manager to install packages such as HCL Digital Experience (DX) and IBM WebSphere Application Server on AIX.

Before you begin, ensure to update the IBM Installation Manager to the latest available version. On AIX deployments, download the IBM Installation Manager version 1.9 before starting the installation. For more information, refer to [Installation Manager shipped with Portal 8.5 fails to install on AIX Portal 9.5](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0091447){target="_blank"}.  

!!!warning
    Do not update IBM Installation Manager to version 1.10. Recent IBM Installation Manager versions conflict with HCL DX installation packages.

1. Download the latest IBM Installation Manager v1.9 version from the IBM Download pages (for example version 1.9.3.4) For more information, refer to [Installation Manager and Packaging Utility download documents](https://www.ibm.com/support/pages/installation-manager-and-packaging-utility-download-documents){target="_blank"}.  

    !!!note
        Download the `agent.installer.aix.gtk.ppc_<version>.zip` file to obtain full installation binaries instead of update packages.  

2. Navigate to the `<PRODUCT_ROOT>/SETUP/IIM` in the HCL DX product directory and delete all files and subdirectories.
3. Extract `agent.installer.aix.gtk.ppc_<version>.zip` into the `<PRODUCT_ROOT>/SETUP/IIM` folder.
4. Start all servers and applications that require a port number to avoid port conflicts during HCL DX installation.
5. Ping your fully qualified domain name (FQDN) to verify host name resolution:

    ```
    ping yourserver.yourcompany.com
    ```

6. Ping `localhost` to verify local network configuration:

    ```
    ping localhost
    ```

!!!note
    - Disable active firewalls, antivirus software, screensavers, or desktop search engines before installing. Active applications can trigger warnings or cause the installation to fail.
    - If the user interface does not support the current language setting, the interface defaults to English.

## Installing IBM Installation Manager as a non-root user

To install the IBM Installation Manager as a non-root user:

1. Log in to the operating system as the root user.
2. Open a command line.
3. Create a non-root group and user:

    ```bash
    mkgroup <group_name>
    mkuser pswdrequired=true groups=<group_name> <user_name>
    passwd <user_name>
    ```

4. Set the open files limit in the user profile to `ulimit -n 10240`.
5. Add the non-root user to the new group.
6. Change ownership of the `IIM` directory to the non-root user:

    ```bash
    chown user:group IIM
    ```

7. Change directory permissions:

    ```bash
    chmod -R 755 IIM
    ```

8. Log in as the non-root user.
9. Install the IBM Installation Manager to `/IBM/InstallationManager`.

    - GUI mode:

        ```bash
        ./userinst 
        ```

    - Console mode:

        ```bash
        ./userinstc -acceptLicense
        ```

10. Navigate to `/IBM/InstallationManager` to start the IBM Installation Manager.

    - GUI mode:

        ```bash
        ./IBMIM 
        ```

    - Console mode:

        ```bash
        cd tools
        ./imcl -c
        ```

## Installing the IBM Installation Manager as a root user

To install the IBM Installation Manager as a root user, run the command for your preferred installation mode:

- GUI mode:

    ```bash
    ./install
    ```

- Console mode:

    ```bash
    ./installc -acceptLicense
    ```

For more information, refer to [Installing IBM Installation Manager](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=manager-installing-installation){target="_blank"}. Verify that the installation was successful after completing all required steps.  
