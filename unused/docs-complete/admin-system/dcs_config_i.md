# Configuring Document Conversion Services for IBM i 

Configure the Document Conversion Services to perform document conversions on IBM i systems. You need to complete the following steps whenever you start the Portal server from a new terminal window.

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Select **Servers** \> **Server Types** \> **WebSphere application servers**

3.  Click the **HCL Digital Experience** server to open the configuration window.

4.  Select **Server Infrastructure** \> **Java and Process Management** \> **Process definition**.

5.  Select **Additional Properties** \> **Environment Entries**.

6.  Click **LIBPATH** to open the configuration window.

7.  In the **Value** field, add the following information: :/QOpenSys/usr/bin:/QOpenSys/usr/bin/X11:/QOpenSys/usr/sbin.

8.  Click **Apply** and save your changes to the master configuration.

    The value for the **LIBPATH** environment entry displays as follows: $\{WPS\_HOME\}/lwo/prereq.odc/shared/app/oiexport:/QOpenSys/usr/bin:/QOpenSys/usr/bin/X11:/QOpenSys/usr/sbin

9.  Restart WebSphere Application Server.


**Parent topic:**[Configure Document Conversion Services ](../admin-system/dcs_prereq.md)

