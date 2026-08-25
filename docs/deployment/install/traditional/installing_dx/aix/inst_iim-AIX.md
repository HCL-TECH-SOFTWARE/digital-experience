# Preparing the Installation Manager

The IBM Installation Manager (IIM) is used to install installation packages such as HCL Digital Experience and IBM WebSphere Application Server.  

## Procedure

!!!note "Important / Warning"
    - By default HCL DX provides an outdated Installation Manager version. It is strongly recommended to download the latest IIM v1.9 version first, before starting the installation. For details, please review [Installation Manager shipped with Portal 8.5 fails to install on AIX Portal 9.5](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0091447){target="_blank"}.  
    - Due to incompatibilities between recent IIM levels and DX install packages, do not update IBM Installation Manager to version 1.10.  

If you do not have an existing Installation Manager, then complete the following procedure:

1. Download the latest IBM Installation Manager v1.9 version from the IBM Download pages (for example version 1.9.3.4).  
    See download page [Installation Manager and Packaging Utility download documents](https://www.ibm.com/support/pages/installation-manager-and-packaging-utility-download-documents){target="_blank"}.  

    !!!note
        Make sure to download the `agent.installer.aix.gtk.ppc_<version>.zip` to get the full installation binaries instead of the update packages.  

2. Navigate into the `<PRODUCT_ROOT>/SETUP/IIM` directory folder of the HCL DX shipped product and delete all sub folders and files in it. (Empty the entire `<PRODUCT_ROOT>/SETUP/IIM` folder).  

3. Extract the `agent.installer.aix.gtk.ppc_<version>.zip` in the `<PRODUCT_ROOT>/SETUP/IIM` folder.

4. Start all servers and applications that require a port number to avoid port conflicts when installing HCL Digital Experience.

5. Type `ping yourserver.yourcompany.com` on a command line to verify that your fully qualified host name is properly configured.

6. Type ping localhost on a command line to verify that your network is properly configured.

    !!!note
        If you are installing on a server with a firewall, antivirus, screen saver, or desktop search engine that is enabled, disable them before you install. If you do not disable them and the installation program detects them, a warning message displays during the installation or the installation might fail.

### Non-root user installation

Complete the following steps to install as a non-root user:

1. Log in to the operating system as the root user.

2. Open a command line.

3. Use the appropriate system commands to create the following items:

    - Non-root user, including password
    - Group

4. Set the user profile for the number of open files. Set the value to ulimit -n 10240.

5. Add the non-root user to the new group.

6. Run the following task to change the owner of the `IIM` directory to the non-root user:

    ```bash
    chown user:group IIM
    ```

7. Run the following task to change permissions for the directory:

    ```bash
    chmod -R 755 IIM
    ```

8. Log in as the non-root user.

9. Use the following command to install IBM Installation Manager:

   If you want to install IIM in GUI mode:  

   ```bash
   ./userinst 
   ```

   If you want to install IIM in Console mode:

   ```bash
   ./userinstc -acceptLicense
   ```

   Set the IBM Installation Manager installation location to `/IBM/InstallationManager`.  

10. Navigate to folder `/IBM/InstallationManager`. You can start the Installation Manager with the following commands:  

     If you want to start it in GUI mode:  

     ```bash
     ./IBMIM 
     ```

     If you want to start it in Console mode:  

     ```bash
     cd tools
     ./imcl -c
     ```

### Root user installation

If you want to install IIM in GUI mode use command:  

```bash
./install
```

If you want to install IIM in Console mode use command:  

```bash
./installc -acceptLicense
```

!!!note
    - For details, please check [Installing IBM Installation Manager](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=manager-installing-installation){target="_blank"}
    - If the language is not currently supported for the user interface, you might see the English version.
    After you complete all necessary steps, verify that your installation was successful.
