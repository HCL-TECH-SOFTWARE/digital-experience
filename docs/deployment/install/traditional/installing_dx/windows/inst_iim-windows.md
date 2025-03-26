# Preparing the Installation Manager

The IBM Installation Manager (IIM) is used to install installation packages such as HCL Digital Experience and IBM WebSphere Application Server.

## Procedure

!!!warning
    Due to incompatibilities between recent IIM levels and DX install packages, do not update IBM Installation Manager to version 1.10.
	   
If you do not have an existing Installation Manager, then complete the following procedure:

1.  Start all servers and applications that require a port number to avoid port conflicts when installing HCL Portal.

2.  Type ping yourserver.yourcompany.com on a command line to verify that your fully qualified host name is properly configured.

3.  Type ping localhost on a command line to verify that your network is properly configured.

4.  If you are installing on a server with a firewall, antivirus, screen saver, or desktop search engine that is enabled, disable them before you install. If you do not disable them and the installation program detects them, a warning message displays during the installation or the installation might fail.

    !!! note
        If you are using Windows™ Defender, it can cause installation failures. To avoid errors, add the C:\\Users\Administrator\AppData\Local\Temp\ directory to the ignore list. If you use a different temp directory for your installation, add that directory to the ignore list.

    !!! note
        If you are installing HCL DX 9.5 on premises using Windows 10, any proxy or firewall that is enabled which monitors all ports in your machine, can impact the installation.

5.  Run the following task from the IIM directory:

    `install.bat`

6.  Run the HCL Digital Experience Setup file downloaded from [HCL Software](https://www.hcltechsw.com/wps/portal/about/welcome)

    setup64.exe Right-click on the HCL Digital Experience Setup file setup64.exe. Then, select **Run as administrator** to start.

    !!! note
        If the language is not currently supported for the user interface, you might see the English version. For details on supported languages and the language codes for all of the HCL Portal user interfaces, see [Language support](../../../../../deployment/manage/portal_admin_tools/language_support/index.md) in the HCL Digital Experience 8.5 documentation.



