# Configure Document Conversion Services for Systems Other than Windows

In HCL Portal versions CF205 and later, DX Document Conversion Services is automatically configured to use HCL-supported functions. The third-party component, which was supplied by Oracle, is no longer included. In HCL Portal versions CF204 and earlier, HCL Portal installations upgraded from CF203 or CF204, and HCL Portal installations upgraded after [manually backing up the Oracle Stellent files](../dcs_backup.md), configure the Document Conversion Services to complete document conversions in an operating system other than Windows. You must complete the following steps whenever you start the Portal server from a new terminal window.

1.  Ensure that the oiexport directory is in the PATH as wp_profile_root/PortalServer/config/oiexport:$PATH.

    For example, export `PATH=wp_profile_root/PortalServer/config/oiexport:AppServer_root/java/jre/bin:$PATH`

2.  Export `LD_LIBRARY_PATH/LIBPATH/SHLIB_PATH` to point to the oiexport directory and the graphics library directory.

    This environment variable is different for different systems, as detailed in the following table:

    |Platform|Library path variable|
    |--------|---------------------|
    |AIX|LIBPATH|
    |Linux|LD_LIBRARY_PATH|

    In AIX®, the command might be `export LIBPATH=wp_profile_root/PortalServer/config/oiexport:/usr/X11R6/lib`

    !!!note "**Required library:**" 
        On Linux™, you must install the following library to run document conversion services: libstdc++.so.5. This library is included with GNU Compiler Collection (GCC) 3.2 to 3.3.6.

    You must install libstdc++.so.5 and include the folder that contains the library in the library path variable. The command might be `export LD_LIBRARY_PATH=wp_profile_root/PortalServer/config/oiexport:/usr/X11R6/lib:/user/lib`

3.  Run the exporter task from the wp_profile_root/PortalServer/config/oiexport directory to ensure that you installed all the libraries.

    A successful task displays the following message:

    ```
    Error: no input file was specified
    Error: no output file was specified
    Error: No output id was specified
    ```



