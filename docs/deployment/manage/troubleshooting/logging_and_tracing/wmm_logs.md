# Virtual Member Manager tracing

Enable WebSphere Application Server trace facilities to create trace information for Virtual Member Manager.

Virtual Member Manager uses the WebSphere® Application Server trace facilities to create trace information. Complete the following steps to enable the Virtual Member Manager trace output to debug a problem:

1.  Log on to the WebSphere Integrated Solutions Console.

2.  Go to section **Troubleshooting > Logs and Traces > HCL Digital Experience > **Diagnostic Trace**.

3.  Ensure the **File** radio button under **Trace Output** is selected.

4.  Under the **Additional Properties** section, click **Change Log Detail Levels**. Enter the following trace string in the text box:

    ```
    com.ibm.ws.security.*=all:com.ibm.websphere.wim.*=all: 
    com.ibm.wsspi.wim.*=all:com.ibm.ws.wim.*=all 
    ```

5.  Click **OK** and save the changes to the master configuration.

6.  Restart HCL Portal.


The resulting traces of Virtual Member Manager are written to:

-   Windows™: wp_profile_root\logs\HCL Portal and HCL Web Content Manager\trace.log
-   AIX® and Linux™: wp_profile_root/logs/HCL Portal and HCL Web Content Manager/trace.log


???+ info "Related information"
     - [WebSphere® Integrated Solutions Console](../../portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)