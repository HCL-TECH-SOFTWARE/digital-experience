# Setting up the IBM Installation Manager on Windows

The IBM Installation Manager is used to install installation packages such as HCL Digital Experience (DX) and IBM WebSphere Application Server.

!!!warning
    Due to incompatibilities between recent IBM Installation Manager levels and DX install packages, do not update IBM Installation Manager to version 1.10.

1. Start all servers and applications that require a port number to avoid port conflicts when installing HCL DX.
2. Run `ping yourserver.yourcompany.com` from the command line to verify that the fully qualified domain name is properly configured.
3. Run `ping localhost` from the command line to verify network configuration.
4. If you are installing on a server with a firewall, antivirus, screensaver, or desktop search engine that is enabled, disable them before you install. If you do not disable them and the installation program detects them, a warning message displays during the installation or the installation might fail.

    !!! note
        - If you are using Windows™ Defender, it can cause installation failures. To avoid errors, add the `C:\\Users\Administrator\AppData\Local\Temp\` directory to the ignore list. If you use a different temp directory for your installation, add that directory to the ignore list.
        - If you are installing HCL DX 9.5 on premises using Windows 10, any proxy or firewall that is enabled which monitors all ports in your machine, can impact the installation.

5. Run the following task from the IBM Installation Manager directory:

    ```
    install.bat
    ```

6. Run the HCL DX setup file downloaded from [HCL Software](https://www.hcltechsw.com/wps/portal/about/welcome){target="_blank"}

    Right-click on the HCL DX setup file `setup64.exe`. Then, select **Run as administrator** to start.

    !!! note
        If the language is not currently supported for the user interface, you might see the English version. For details on supported languages and the language codes for all of the HCL DX user interfaces, see [Language support](../../../../../deployment/manage/portal_admin_tools/language_support/index.md) in the HCL DX 8.5 documentation.
