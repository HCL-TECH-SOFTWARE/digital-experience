# Verbosegc in Java VM logs

Verbose garbage collection \(verbosegc\) logging is often required when tuning and debugging many issues, and has negligible impact on system performance.

The default HCL Digital Experience installation enables verbosegc logging and configures the following generic JVM argument:

`-Xverbosegclog:${SERVER_LOG_ROOT}/verbosegc.m%d.5/10/13M%S.%pid.txt,20,10000`

The verbosegc log file name is verbosegc.m%d.5/10/13M%S.%pid.txt. It includes a date/time stamp and the process ID \(PID\) of the HCL Portal instance.

The default HCL Digital Experience installation redirects the verbosegc output to 20 rotating historical log files, each containing 10000 garbage collection \(GC\) cycles.

For more information about configuring the JVM through WebSphere® Application Server, see the IBM® WebSphere Application Server information centers at www.ibm.com/software/webservers/appserv/was/library.


