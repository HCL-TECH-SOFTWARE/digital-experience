# Using Document Conversion Services with Stellent

In HCL Portal versions CF205 and later, DX Document Conversion Services is automatically configured to use HCL-supported functions. The third-party component, which was supplied by Oracle, is no longer included. In HCL Portal versions CF204 and earlier, HCL Portal installations upgraded from CF203 or CF204, and HCL Portal installations upgraded after [manually backing up the Oracle Stellent files](../dcs_backup.md), for Linux, when using Stellent version 8.1.0 and later, the X-server dependency has been removed.

1.  Prepare the system using the steps outlined in [Configure Document Conversion Services](./configuration/index.md).

2.  Install **libXm.so.3** and **ln -sf /usr/X11R6/lib/libXm.so.3.0.2 /usr/X11R6/lib/libXm.so.2.0.1**.

3.  Use the command **find / -name *.ttf** to locate the fonts folder on your machine. Set **GDFONTPATH** to point to the fonts folder.

    For example:

    ```
    export GDFONTPATH=/opt/IBM/WebSphere/AppServer/java/jre/lib/fonts
    ```

4.  Make sure that the environment variable **GDFONTPATH** includes one or more paths to the fonts folder.

    Only TrueType fonts (*.ttf or *.ttc files) are supported. If the variable GDFONTPATH is not found, the current directory is used. If fonts are called for and cannot be found, HTML Export will exit with an error. When copying Windows fonts to a Unix system, the font extension for the files (*.ttf or *.ttc) must be lowercase, or the fonts will not be detected during the search for available fonts. Stellent does not provide fonts with any Outside In product.

    !!!note
        With HCL Digital Experience (DX) CF19 and higher releases, Stellent conversion errors may be presented on Linux operating systems in the SystemOut.log and SystemErr.log files when HCL Digital Experience Search runs. This is a known issue, and a solution to resolve is planned for delivery in a later DX software update. Contact HCL Support with any related questions.


Remote document conversion: Local document conversion might not be supported on some platforms. Document conversion must be performed on a remote IBM® WebSphere® Application Server that supports document conversion services.

On the zLinux platform, local document conversion is supported except in the case of image export. During image export, the pages of a document are converted into images, such as the GIF format. If you want to use image export as part of document conversion services on zLinux, you must run document conversion on a remote server.

On platforms that support local document conversion, document conversion services can be delegated to a remote server to better balance processing power and manage server performance.

IBM i: You can choose to run the X Server on the portal server or a remote server. You can also use a frame-buffer device or XVFB to emulate X Windows servers on a headless server. The conversion filters are installed with HCL Portal. There is no need for configuration. However, you can configure the export.cfg file, located under the wp_profile_root/PortalServer/config directory, if you want to fine tune conversion properties such as graphics size and resolution.


