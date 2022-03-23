# Setting up a remote spell checker 

Using a local spell checker is not supported. You cannot run spell checker on 64-bit systems. Instead, you must install and configure spell checker on a remote application server and access that server from the local HCL Portal server.

You can run spell checker on the following systems:

|Platform|Versions|
|--------|--------|
|Windows \(32-bit\)|-   Microsoft™ Windows™Server 2008 Standard Edition
-   Microsoft WindowsServer 2008 Datacenter Edition
-   Microsoft WindowsServer 2008 Enterprise Edition

|
|IBM® AIX®|-   AIXV6.1 with Service Pack 4
-   AIXV5L V5.3 with Service Pack 5300-04-01 \(32 bit\)

|
|Linux™ \(x86\)|-   Red Hat Enterprise Linux \(RHEL\) Enterprise Server 6
-   SUSE Linux Enterprise Server \(SLES\) 9 Service Pack 4
-   SUSE Linux Enterprise Server \(SLES\) 10
-   SUSE Linux Enterprise Server \(SLES\) 11

|
|Solarison SPARC|Oracle SolarisSPARC 10|

Running spell checker on the following systems is not supported:

-   HP-UX
-   Linux for System p®
-   Linux for z Systems®

**For z/OS:** You must configure spell checker on a remote IBM WebSphere® Application Server for z/OS® and access that server from the local HCL Digital Experience server. The remote WebSphere Application Server must be a version that HCL Portal supports on the remote system. The remote WebSphere Application Server can run on any of the following systems:

-   IBM AIX
-   IBM i
-   Linux on Intel
-   Oracle Solaris
-   Microsoft Windows

However, the remote spell checker system must be running one of the releases that are supported by Stellent 8.0.1.

-   **[Installing a remote spell checker ](../config/doc_pdm_installspchk.md)**  
If you plan to use a spell checker, you must install it remotely.
-   **[Configuring access to a remote spell checker ](../config/doc_pdm_remotespchk.md)**  
Configure access to run spell checker on a remote server.

**Parent topic:**[Configuring ](../config/configuring_parent2.md)

