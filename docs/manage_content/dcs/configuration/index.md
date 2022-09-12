# Configure Document Conversion Services

Learn how to configure the Document Conversion Services in HCL Portal. A knowledge of these prerequisites steps can assist you in preventing, identifying, and correcting problems that are related to Document Conversion Services.

## Visual C++ libraries are required for Windows™

To run Document Conversion Services on Windows, download Visual C++ libraries included in the latest Visual C++ Redistributable Package available from the Microsoft™ download site. There are three versions of this package, x86, x64, and IA64 for the 86-bit, 64-bit, and 64-bit Itanium™ systems.

You must search the Microsoft download site for the vcredist\_x86.exe, vcredist\_x64.exe, or vcredist\_IA64.exe files.

## Exporter task

Run the exporter task from the [wp\_profile\_root](../../../guide_me/wpsdirstr.md)/PortalServer/config/oiexport/exporter directory to ensure that you installed all the libraries.

A successful task displays the following message:

```
Error: no input file was specified
Error: no output file was specified
Error: No output id was specified
```

-   **[Configuring Document Conversion Services for systems other than Windows](./dcs_config_nonwin.md)**  
Configure the Document Conversion Services to complete document conversions in an operating system other than Windows. You must complete the following steps whenever you start the Portal server from a new terminal window.
-   **[Configuring Document Conversion Services for IBM i](./dcs_config_i.md)**  
Configure the Document Conversion Services to perform document conversions on IBM i systems. You need to complete the following steps whenever you start the Portal server from a new terminal window.
-   **[Configuring images for Document Conversion Services](./dcs_config_images.md)**  
Configure the Document Conversion Services to view images in an operating system other than Windows.


