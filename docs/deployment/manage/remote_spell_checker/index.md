# Setting up a remote spell checker

Using a local spell checker is not supported. You cannot run spell checker on 64-bit systems. Instead, you must install and configure spell checker on a remote application server and access that server from the local HCL Portal server.

You can run spell checker on the following systems:

|Platform|Versions|
|--------|--------|
|Windows (32-bit)|-   Microsoft™ Windows™Server 2008 Standard Edition<br>-   Microsoft WindowsServer 2008 Datacenter Edition<br>-   Microsoft WindowsServer 2008 Enterprise Edition|
|IBM® AIX®|-   AIXV6.1 with Service Pack 4<br>-   AIXV5L V5.3 with Service Pack 5300-04-01 (32 bit)|
|Linux™ (x86\|-   Red Hat Enterprise Linux (RHEL) Enterprise Server 6<br>-   SUSE Linux Enterprise Server (SLES) 9 Service Pack 4<br>-   SUSE Linux Enterprise Server (SLES) 10<br>-   SUSE Linux Enterprise Server (SLES) 11|
|Solarison SPARC|Oracle SolarisSPARC 10|

Running spell checker on the following systems is not supported:

-   Linux for System p®
-   Linux for z Systems®

However, the remote spell checker system must be running one of the releases that are supported by Stellent 8.0.1.