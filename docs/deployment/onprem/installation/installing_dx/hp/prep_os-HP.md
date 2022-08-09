# HP: Preparing your operating system

Prepare the operating system to ensure a successful installation.

1.  Log in to the host server with superuser \(root\) privileges.

2.  Choose one of the following options to determine the physical memory, which you must know to avoid setting certain kernel parameters higher than the physical capacity:

    -   HP-UX 11i Version 3 and later: Use the `/usr/sbin/dmesg` command.
    -   HP-UX 11i Version 2 and earlier: Complete the following steps:
        1.  Start the HP-UX System Administration Manager \(SAM\) utility with the `/usr/sbin/sam` command.
        2.  Select **Performance Monitors** \> **System Properties** \> **Memory**.
        3.  View the value for Physical Memory and click **OK**.
        4.  Exit from the SAM utility.
3.  Set the maxfiles and maxfiles\_lim parameters to at least 4096.

    The minimum value for maxfiles is 8000. The minimum value for maxfiles\_lim is 8196.

    To allow the SAM utility to set values greater than 2048, edit the /usr/conf/master.d/core-hpux file.

    **Note:** If you are using HP-UX 11i Version 2, the /usr/conf/master.d/core-hpux file does not exist; instead, use the SAM utility to set the new kernel parameter values.

    1.  Open the file /usr/conf/master.d/core-hpux in a text editor.
    2.  Change the line, "\*range maxfiles<=2048" to "\*range maxfiles<=60000".
    3.  Change the line, "\*range maxfiles\_lim<=2048" to "\*range maxfiles\_lim<=60000".
    4.  ave and close the file. Old values might be stored in the /var/sam/boot.config file. Force the SAM utility to create a boot.config file:
        1.  Move the existing version of the /var/sam/boot.config file to another location, such as the /tmp directory.
        2.  Start the SAM utility.
        3.  Select **Kernel Configuration** \> **Configurable Parameters**. When the Kernel Configuration window opens, a new boot.config file exists.

            Alternatively, rebuild the boot.config file with this command:

            ```
            # /usr/sam/lbin/getkinfo -b
            ```

4.  **Updating operating system settings to enable full core dumps**:

    -   Use the `ulimit -f` command to set the maximum size of files to unlimited.
    -   Use the `ulimit -c` command to set the maximum size to cores to unlimited.
    For information about these commands, see your operating system documentation.

5.  Complete the following steps to configure the HP-UX system kernel:

    1.  Start the SAM utility.
    2.  Select **Kernel Configuration** \> **Configurable Parameters**.
    3.  Repeat the following steps for each parameter in the table:
        1.  Highlight the parameter to change.
        2.  Select **Actions** \> **Modify Configurable Parameter**.
        3.  Type the new value in the **Formula/Value** field.
        4.  Click **OK**.

            **Note:** When HCL Portal and DB2® are installed on the same server, some kernel values are higher than the values shown in the table.

    Typical kernel settings for running HCL Portal:

    |Parameter|Value|
    |---------|-----|
    |dbc\_max\_pct|25|
    |maxdsiz|805306358|
    |maxdsiz|2048000000 \(when WebSphere® Application Server Base and Network Deployment products are on the same server\)|
    |maxfiles\_lim|8196 \(Change this one before maxfiles.\)|
    |maxfiles|8000|
    |maxssiz|8388608|
    |maxswapchunks \(valid for HP-UX 11iv1 only\)|8192|
    |max\_thread\_proc|3000|
    |maxuprc|512|
    |maxusers \(valid for HP-UX 11iv1 only\)|512|
    |msgmap|2048|
    |msgmax|65535|
    |msgmax|131070 \(when WebSphere Application Server Base and Network Deployment products are on the same server\)|
    |msgmnb|65535|
    |msgmnb|131070 \(when WebSphere Application Server Base and Network Deployment products are on the same server\)|
    |msgmni|50|
    |msgseg|32767|
    |msgssz|96|
    |msgtql|2046|
    |nfile|58145|
    |nflocks|3000|
    |ninode|60000|
    |nkthread|7219|
    |nproc|4116|
    |npty|2024|
    |nstrpty|1024|
    |nstrtel|60|
    |sema \(valid for HP-UX 11iv1 only\)|1 \(with embedded Messaging\)|
    |semaem|16384 \(with embedded Messaging\)|
    |semmap \(valid for HP-UX 11iv1 only\)|514|
    |semmni|2048|
    |semmns|16384 \(with embedded Messaging\)|
    |semmnu|1024|
    |semume|200|
    |semvmx|32767 \(with embedded Messaging\)|
    |shmmax|2147483647|
    |shmem \(valid for HP-UX 11iv1 only\)|1 \(with embedded Messaging\)|
    |shmmni|1024|
    |shmseg|1024|
    |STRMSGSZ \(valid for HP-UX 11iv1 only\)|65535|

6.  Select **Actions** \> **Process New Kernel**.

7.  Click **Yes** on the information window to confirm your decision to restart the server.

8.  Follow on-screen instructions to restart your server and to enable the new settings.


**Parent topic:**[HP: Installing HCL Portal and HCL Web Content Manager](../install/installingwp-HP.md)

