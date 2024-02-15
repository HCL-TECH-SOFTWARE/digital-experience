# Portal version and history information

You can use the HCL Digital Experience version and history information tools to gather information about your portal installation.

## Version information

The portal version information tool is located in the following directory:

-   AIX® and Linux™: wp_profile_root/PortalServer/bin
-   Windows™: wp_profile_root\PortalServer\bin

You invoke the tool by using the following command:

-   AIX® and Linux™: `./WPVersionInfo.sh`
-   Windows: `WPVersionInfo.bat`

You can also generate a report in HTML format by executing the genVersionReport tool

-   AIX® and Linux™: `./genVersionReport.sh`
-   Windows: `genVersionReport.bat`

## History information

The History information tool can be used to gather installation history for the HCL Portal product. The History information tool is located in the following directory:

-   AIX® and Linux™: wp_profile_root/PortalServer/bin
-   Windows: wp_profile_root\PortalServer\bin

The History information tool can be invoked using the following command:

-   AIX® and Linux™: `./WPHistoryInfo.sh`
-   Windows: `WPHistoryInfo.bat`

You can also generate a report in HTML format by executing the `genHistoryReport` tool:

-   AIX® and Linux™: `./genHistoryReport.sh`
-   Windows: `genHistoryReport.bat`


???+ info "Related information"  
    -   [Data collection and symptom analysis](../../../../deployment/manage/troubleshooting/tools_for_troubleshooting_and_diagnostics/tbl_apdt_over.md)

