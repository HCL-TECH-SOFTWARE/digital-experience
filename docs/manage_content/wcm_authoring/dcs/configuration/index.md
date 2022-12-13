# Configure Document Conversion Services

In HCL Portal version CF205 and later, Document Conversion Services uses Apache Tika for fresh installs. Apache Tika does not require configuration for DCS.  In HCL Portal version CF204 and earlier, HCL Portal installations upgraded from CF203 or CF204, and HCL Portal installations upgraded after [manually backing up the Oracle Stellent files](../dcs_backup.md), learn how to configure the Document Conversion Services.  A knowledge of these prerequisites steps can assist you in preventing, identifying, and correcting problems that are related to Document Conversion Services.

## Visual C++ libraries are required for Windows™

To run Document Conversion Services on Windows, download Visual C++ libraries included in the latest Visual C++ Redistributable Package available from the Microsoft™ download site. There are three versions of this package, x86, x64, and IA64 for the 86-bit, 64-bit, and 64-bit Itanium™ systems.

You must search the Microsoft download site for the vcredist\_x86.exe, vcredist\_x64.exe, or vcredist\_IA64.exe files.

## Exporter task

Run the exporter task from the [wp\_profile\_root](../../../../guide_me/wpsdirstr.md)/PortalServer/config/oiexport/exporter directory to ensure that you installed all the libraries.

A successful task displays the following message:

```
Error: no input file was specified
Error: no output file was specified
Error: No output id was specified
```

-   **[Configuring Document Conversion Services for systems other than Windows](./dcs_config_nonwin.md)**  
Configure the Document Conversion Services to complete document conversions in an operating system other than Windows. You must complete the following steps whenever you start the Portal server from a new terminal window.
-   **[Configuring images for Document Conversion Services](./dcs_config_images.md)**  
Configure the Document Conversion Services to view images in an operating system other than Windows.


