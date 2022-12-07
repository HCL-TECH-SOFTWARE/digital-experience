# Working with WebDAV clients

To use WebDAV for HCL Portal, you must first set up your WebDAV clients.

For specific WebDAV client version compatibility, refer to the detailed systems requirements documentation and the Tech Note about *Using HCL Digital Experience File Sync*.

!!! note
    -   Numerous other WebDAV clients are available that you can use for WebDAV access. HCL supports the use of these WebDAV clients; however, HCL does not provide fixes or give support for issues found to be specific to a particular WebDAV client.
    -   Some WebDAV clients have specific restrictions, for example a limit to the size or number of files that you can handle when using WebDAV, or a read only restriction. These restrictions usually have security reasons. If you encounter issues when working with WebDAV, consult the documentation and forums for your WebDAV client.
    -   Use HCL Digital Experience File Sync \([https://github.com/hcl-dx/dxsync](https://github.com/hcl-dx/dxsync)\) to synchronize any WebDAV-based HCL Digital Experience theme with your local workstation.

When you use a Web server to work with WebDAV, complete the following steps:

1.  Access the WebSphere® Integrated Solutions Console.

2.  Select **Web servers** \> **webserver name** \> **Plug-in properties** \> **Request and response**.

3.  Set **Accept content for all requests** to true for the Web server plug-in.

4.  Regenerate the web server plug-in.

5.  Copy the file plugin-cfg.xml to the Plugin directory.

6.  Open your plugin-cfg.xml file and set AcceptAllContent to true.

7.  Restart the web server.


<!--
-   **[HCL Digital Experience File Sync](../dxsync/DXSync.md)**  
Digital Experience File Sync can be used to synchronize any WebDAV-based HCL Portal theme with your local workstation. Learn more how to use DX File Sync. -->


???+ info "Related information"
    - [HCL Digital Experience detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514)

