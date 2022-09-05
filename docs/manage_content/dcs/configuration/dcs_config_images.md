# Configure Images for Document Conversion Services

Configure the Document Conversion Services to view images in an operating system other than Windows.

The following steps do not apply to IBM® i. For information about viewing images on IBM i, read *Rendering documents on IBM i*.

1.  Connect to one of the following workstations from your Windows™ workstation with PuTTY or any other Telnet client.

    -   AIX®
    -   HP-UX
    -   Linux™
    -   Solaris
2.  The `oiexport` directory should be in the PATH as `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/oiexport:$PATH`.

    For example, `export PATH = [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/oiexport:[AppServer\_root](../reference/wpsdirstr.md#was_root)/java/jre/bin:$PATH`

3.  Export `LD_LIBRARY_PATH /LIBPATH/ SHLIB_PATH` to point to the `oiexport` directory and the graphics library directory.

    This environment variable is different for different operating systems, as detailed in the following table:

    |Platform|Library path variable|
    |--------|---------------------|
    |AIX|LIBPATH|
    |HP-UX|SHLIB\_PATH|
    |Linux|LD\_LIBRARY\_PATH|
    |Solaris|LD\_LIBRARY\_PATH|
    |z/OS®|LD\_LIBRARY\_PATH, LIBPATH|

    For example, in case of Linux, the command might be `export LD_LIBRARY_PATH = [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/oiexport:/usr/X11R6/lib`

4.  Now connect to another workstation through XBrowser.

5.  Start the XBrowser and enter the host name. When you log in successfully, type `echo $DISPLAY` at the prompt. Which gives you `<machine-ip>:0.0,`, where `<machine-ip>` refers to the IP of the workstation from where XBrowser was started.

6.  In the same Telnet/ssh session where you exported PATH and LD\_LIBRARY\_PATH/LIBPATH/SHLIB\_PATH, type the command `export DISPLAY=<machine-ip>:0.0`. This value is the same as the value you get in the previous step.

7.  Change directory to the location where the `xclock` and `xhost` files are present, such as, `/usr/X/bin`.

8.  Type the command `./xclock &`.

9.  Type `./xhost +` on the workstation through which you are connected through XBrowser.

    Which gives you the message `access control disabled, clients can connect from any host.`

    !!!note
        Changing directory is required because by entering the commands `xclock&` or `xhost+`, the error message `command not found` is displayed.

10. The Xclock menu comes up on the desktop of the workstation to which you are connected through X-Browser.

11. Change directory to `[AppServer\_root](../reference/wpsdirstr.md#was_root)/bin`.

12. Restart the server.

13. Open a web browser and try viewing the file that contains the images.

## Starting the X server by using Exceed or X virtual frame buffer \(Xvfb\)

The previous steps are given to start the X server by using XBrowser. The following steps are used to start the X server by using Exceed or X virtual frame buffer \(Xvfb\).

1.  Start Exceed.

2.  Connect to one of the following workstations with PuTTY and then type `export PATH`.

    -   AIX
    -   HP-UX
    -   Linux
    -   Solaris
3.  Type `export LD_LIBRARY_PATH/LIBPATH/SHLIB_PATH`.

4.  Type `export DISPLAY`.

5.  Type `echo $DISPLAY` on the workstation to which you connected by using Exceed or Xvbf.

6.  Enter `xclock &` \(if `xclock` displays on the desktop of the workstation to which you are connected through Exceed or Xvfb, then X server is running\).

7.  If `xhost + {xhost + <IP>}` displays, this means conversion works for this particular IP and only + means for all workstations.

    You must start HCL Portal from the console or an X Server-enabled client with the same privileges \(xhost+\) as the console. The graphical conversions require access to an X Window System server, since they require access to the Xm, Xt and X11 libraries. Also, the DISPLAY environment variable must be set to the account that Portal is running under. The DISPLAY must be valid at the point that Portal is started. Otherwise, telnetting to a workstation and starting Portal from there does not work. You must start Portal from an X terminal.


