# Configuring an HTML rendering server on IBM i

After you have installed OS/400 - Additional Fonts \(5770SS1, Option 43\), on your IBM i system, an HTML rendering server \(X virtual frame buffer for X server\) is present. You must select a display number for the HTML rendering server.

1.  If the QShell Interpreter is running, perform the following commands on the IBM® i command line to stop it:

    -   QSH
    -   Press **F3**
2.  Type CALL QP2TERM on the command line to start the OS/400 Portable Application Solutions Environment \(OS/400 PASE\) console.

3.  Type ps gaxuw \| grep Xvnc ; ps gaxuw \| grep vfb on the command line to list all active HTML rendering servers:

    **Note:** If other rendering servers are already active, you might see output such as this \(the number after the colon is the display number already in use\):

    ```
    v2kea554 40571 0.0  0.0 12484 0 - A Jul 13 4:08
    /QOpenSys/QIBM/ProdData/DeveloperTools/vnc/Xvnc:**6** -desktop X -httpd  
    ```

4.  Select any number from 1 to 99 that is not in use.

5.  Press **F3** to return to the command line interface.

6.  Type SBMJOB CMD\(CALL PGM\(QP2SHELL\) PARM\('/usr/bin/X11/X' '-vfb' ':N'\)\) JOB\(XVFB\) JOBQ\(QSYSNOMAX\) ALWMLTTHD\(\*YES\) on the command line to start the HTML rendering server, where N is the display number.

7.  Verify that the HTML rendering server is started by repeating the prior steps to start PASE and list the active servers, confirming that an HTML rendering server with your display number is in the list.


After you render your documents, you must enable the document conversion services. Go to [Document Conversion Services](../admin-system/dcs_info.md) for information.

**Parent topic:**[Rendering documents on IBM i](../install/i5os_xvfb_gen.md)

