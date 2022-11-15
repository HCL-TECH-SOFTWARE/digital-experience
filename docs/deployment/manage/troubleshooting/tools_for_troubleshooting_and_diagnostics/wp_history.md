# Portal version and history information

You can use the HCL Digital Experience version and history information tools to gather information about your portal installation.

## Version information

The portal version information tool is located in the following directory:

-   AIX® Linux™ Solaris: `[wp\_profile\_root](wpsdirstr.md#wp_profile_root)/PortalServer/bin`
-   IBM® i: `[wp\_profile\_root](wpsdirstr.md#wp_profile_root)/PortalServer/bin`
-   Windows™: `[wp\_profile\_root](wpsdirstr.md#wp_profile_root)\PortalServer\bin`
-   z/OS®: `[wp\_profile\_root](wpsdirstr.md#wp_profile_root)/PortalServer/bin`

You invoke the tool by using the following command:

-   AIX Linux Solaris: `./WPVersionInfo.sh`
-   IBM i: `WPVersionInfo.sh`
-   Windows: `WPVersionInfo.bat`
-   z/OS: `./WPVersionInfo.sh`

You can also generate a report in HTML format by executing the genVersionReport tool

-   AIX Linux Solaris: `./genVersionReport.sh`
-   IBM i: `genVersionReport.sh`
-   Windows: `genVersionReport.bat`
-   z/OS: `./genVersionReport.sh`

## History information

The History information tool can be used to gather installation history for the HCL Portal product. The History information tool is located in the following directory:

-   AIX Linux Solaris: `[wp\_profile\_root](wpsdirstr.md#wp_profile_root)/PortalServer/bin`
-   IBM i: `[wp\_profile\_root](wpsdirstr.md#wp_profile_root)/PortalServer/bin`
-   Windows: `[wp\_profile\_root](wpsdirstr.md#wp_profile_root)\PortalServer\bin`
-   z/OS: `[wp\_profile\_root](wpsdirstr.md#wp_profile_root)/PortalServer/bin`

The History information tool can be invoked using the following command:

-   AIX Linux Solaris: `./WPHistoryInfo.sh`
-   IBM i: `WPHistoryInfo.sh`
-   Windows: `WPHistoryInfo.bat`
-   z/OS: `./WPHistoryInfo.sh`

You can also generate a report in HTML format by executing the `genHistoryReport` tool:

-   AIX Linux Solaris: `./genHistoryReport.sh`
-   IBM i: `genHistoryReport.sh`
-   Windows: `genHistoryReport.bat`
-   z/OS: `./genHistoryReport.sh`


**Related information**  


[Data collection and symptom analysis](../trouble/tbl_apdt_over.md)

