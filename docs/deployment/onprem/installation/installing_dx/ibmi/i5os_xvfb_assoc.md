# Associating an HTML rendering server with HCL DX on IBM i

After you select a display number for the HTML rendering server \(X virtual frame buffer for X server\), you must associate this server with the installed HCL Digital Experience profile.

1.  Log on to the WebSphere® Integrated Solutions Console.

2.  Go to **Servers** \> **Server Types** \> **WebSphere application servers** \> **WebSphere\_Portal** \> **Server Infrastructure** \> **Java and Process Management** \> **Process definition** \> **Environment Entries**.

3.  Click **New**.

4.  In the **Name** field type DISPLAY.

5.  In the **Value** field type host\_name:n, where host\_name is the TCP/IP host name of your system and n is the display number of the HTML rendering server. \(Example: mysystem.xland.company.com:1\).

6.  Click **OK**.

7.  Save your changes to the master WebSphere Application Server configuration file.

8.  Restart the server.


After you render your documents, you must enable the document conversion services. Go to [Document Conversion Services](../admin-system/dcs_info.md) for information.

**Parent topic:**[Rendering documents on IBM i](../install/i5os_xvfb_gen.md)

