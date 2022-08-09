# Solaris: Preparing your operating system

Prepare the operating system to ensure a successful installation.

Several Solaris kernel values are typically too small for the messaging requirements of HCL Portal. Starting the internal JMS server or client with insufficient kernel resources produces a First Failure Support Technology \(FFST\) file in the /var/errors directory. Before you install HCL Digital Experience, review the server configuration.

1.  These values are a starting point for messaging in HCL Digital Experience only. If your operating system has other applications that are installed, the value requirements are likely different.

    For example, if values that are already set are higher than the settings listed here, do not change the values. Be sure to check the requirements that are made on /etc/system by other already-installed applications before you alter existing values.

    1.  Type the `sysdef -i`command to review the configuration.

    2.  Set `shmsys:shminfo_shmmax` to **4294967295** \(valid for Solaris Version 9 only\).

    3.  Set `shmsys:shminfo_shmmni` to **1024** \(valid for Solaris Version 9 only\).

    4.  Set `semsys:seminfo_semaem` to **16384** \(valid for Solaris Version 9 only\).

    5.  Set `semsys:seminfo_semmni` to **1024** \(valid for Solaris Version 9 only\).

    6.  Set `semsys:seminfo_semmns` to **16384** \(valid for Solaris Version 9 only\).

    7.  Set `semsys:seminfo_semmsl` to **100** \(valid for Solaris Version 9 only\).

    8.  Set `semsys:seminfo_semopm` to **100** \(valid for Solaris Version 9 only\).

    9.  Set `semsys:seminfo_semmnu` to **2048** \(valid for Solaris Version 9 only\).

    10. Set `semsys:seminfo_semume` to **256** \(valid for Solaris Version 9 only\).

    11. Set `msgsys:msginfo_msgmap` to **1026** \(valid for Solaris Version 9 only\).

    12. Set `msgsys:msginfo_msgmax` to **65535** \(valid for Solaris Version 9 only\).

    13. Set `rlim_fd_cur` to **1024**.

    14. Restart the operating system to apply the updates.

2.  **Updating operating system settings to enable full core dumps**:

    -   Use the `ulimit -f` command to set the maximum size of files to unlimited.
    -   Use the `ulimit -c` command to set the maximum size to cores to unlimited.
    For information about these commands, see your operating system documentation.

3.  Prepare for non-global zone:

    1.  Do not inherit package directories when you create the non-global zone because the inherited software packages are read-only.

    2.  Stop HCL Digital Experience and all related processes before you install or uninstall.

    3.  Verify that the following processes are stopped:

        -   /opt/IBM/WebSphere/AppServer/java/bin/java
        -   /opt/IBM/WebSphere/AppServer/java/jre/bin/java

**Parent topic:**[Solaris: Installing HCL Portal and Web Content Manager](../install/installingwp-Solaris.md)

