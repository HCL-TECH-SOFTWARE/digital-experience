# Large Pages

Large pages can reduce the CPU overhead needed to keep track of the heap. With this setting we have seen
as much as a 10% throughput improvement in our measurements.

Be aware that any allocation of large pages is reserved upon boot and only available to applications
requesting large pages. Consider the following when using large pages:

- Adjust values to match the maximum heap size of the JVM. Enough large pages must be allocated to hold the entire JVM heap plus native code.

- Be careful in your settings to ensure there is enough memory still available to other application, especially the OS.

- In some or the measured environments, more large page space was allocated than strictly required for the JVM maximum heap size. If a system is low on memory more tuning could be performed to optimally size the large pages allocated.

|AIX| Windows| Linux|
|----|----|----|
|-Xlp |-Xlp <br>Requires<br>specific<br>privileges|-Xlp|

## How to Set Large Pages

In the WebSphere Integrated Solutions Console Servers > Server Types > WebSphere application servers > WebSphere_Portal > Server
Infrastructure: Java and Process Management > Process Definition > Java Virtual Machine

Add -Xlp to the Generic JVM Arguments field

This setting is required to ensure that the Portal JVM requests large pages from the operating system. To
verify that large pages are being used, ensure that the requestedPageSize and pageSize attributes are
the same in the verbose:gc output.

!!! note
    Some Unix implementations you may be required to start HCL Portal as ‘root’ after enabling large page support. On Windows, Portal may need to be run with Administrator rights for large pages to work properly and the Windows user must have the “Lock Pages in Memory" permission enabled.

See the **-Xlp** section in the Java Diagnostics guide for more information on this setting [http://www-01.ibm.com/support/knowledgecenter/SSYKE2_7.0.0/com.ibm.java.aix.70.doc/diag/appendixes/cmdline/Xlp.html](http://www-01.ibm.com/support/knowledgecenter/SSYKE2_7.0.0/com.ibm.java.aix.70.doc/diag/appendixes/cmdline/Xlp.html).

## AIX

AIX operating systems must be configured to support large pages.

### How to Set AIX

1. Add the **-Xlp** option as described above.

2. Allocate 4.5GB of RAM as large pages of 16MB each. Reboot the system.

    `vmo -r -o lgpg_regions=288 -o lgpg_size=16777216`
    `bosboot -ad /dev/ipldevice`
    `reboot -q`

3. After the reboot completes, enable large page support. This setting persists across reboots.

    `vmo -p -o v_pinshm=1`

4. If Portal is running under a non-root user id, you need to grant large page usage to that user.

    `chuser capabilities=CAP_BYPASS_RAC_VMM,CAP_PROPAGATE <user>`

5. Restart the Portal Server.

To verify if large pages are being used, run the AIX command vmstat -l 1 5. Check the alp column, which
is the number of active large pages used. It should be a non-zero value if large pages are being used.

In addition, changing to 64K page size for text (TEXTPSIZE) and stack (STACKPSIZE), and 16MB page size for
data area (DATASIZE) gives the best performance.

### How to Set

In the WebSphere Integrated Solutions Console
Servers > Server Types > WebSphere application servers > WebSphere_Portal > Server Infrastructure:
Java and Process Management>Process Definition> Environment Entries > New

Name: LDR_CNTRL

Value: STACKPSIZE=64k@TEXTPSIZE=64k@DATAPSIZE=16MB

## Linux

Large pages are supported by systems running Linux kernels version 2.6 or higher. Note that Linux refers to
large pages as ‘Huge Pages’. This should not be confused with the Huge Pages in AIX, which are much
larger.

For performance benchmarks, 2,048 Huge Pages are configured. Each HP is 2MB in size, so 4GB is reserved
upon boot. This memory is available only to apps configured to use it. This is enough memory to store the
entire JVM heap in Huge Pages.

### How to Set

1. Add the -Xlp option as described above.

2. Allocate 4GB of RAM by placing the following line in the **/etc/sysctl.conf** file:

    `vm.nr_hugepages=2048`

3. If Portal is running under a non-root user id, the memory lock limit for the user or group will need to
be increased to the maximum heap size of the JVM. This can be done with the ulimit command or by
adding the following to **/etc/security/limits.conf**:

- @<large group name> soft memlock 2097152
- @<large group name> hard memlock 2097152

4. Reboot the system

You can check the current status by issuing the following command: grep Huge /proc/meminfo.

On our benchmark system the above command results in the following (when Portal is not running):

- HugePages_Total: 2048

- HugePages_Free: 2048

- HugePages_Rsvd: 0

- Hugepagesize: 2048 KB

For non-root users, it may be necessary to include the user as a member of the hugetlb_shm_group as
documented here:[https://www-01.ibm.com/support/knowledgecenter/SSYKE2_7.0.0/com.ibm.java.lnx.70.doc/user/alloc_large_page.html](https://www-01.ibm.com/support/knowledgecenter/SSYKE2_7.0.0/com.ibm.java.lnx.70.doc/user/alloc_large_page.html)

## Windows

### How to Set

1. Add the -Xlp option as described above.

2. Give the user that runs the WebSphere process permissions to Lock pages in memory.

See [Enable the Lock Pages in Memory Option (Windows)](http://msdn.microsoft.com/en-us/library/ms190730.aspx) for more information. Windows must
be restarted for this change to take effect.