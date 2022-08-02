# WebSphere Application Server tracing and log files

Use WebSphere Application Server log files and tracing to troubleshoot problems with HCL Portal.

WebSphere® Application Server has log files and a tracing function; however, whenever possible use the IBM® Installation Manager installation logs to determine whether WebSphere Application Server was successfully configured for HCL Portal and whether HCL Portal was successfully started on WebSphere Application Server

If your are on z/OS® , IBM WebSphere Application Server for z/OS has log files and a tracing function. Some of the WebSphere Application Server for z/OS log files are in the directory `[AppServer\_root](../reference/wpsdirstr.md#was_root)/logs`. Furthermore, if you enable WebSphere Application Server for z/OS tracing, depending on option ras\_trace\_outputLocation, the job logs, or log streams of the application server control and servant region contain information that might be helpful in detecting and diagnosing problems. Check the Help Center of WebSphere Application Server for z/OS for details on how to enable tracing and logging. For information, see [Trace controls for IBM service](http://publib.boulder.ibm.com/infocenter/wasinfo/v6r0/topic/com.ibm.websphere.zseries.doc/info/zseries/ae/rtrb_ibmonlytracecontrols.html).

**Parent topic:**[Logging and tracing](../trouble/pd_intr_logs.md)

