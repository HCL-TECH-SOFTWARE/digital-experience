# AIX: Preparing your operating system

Prepare the operating system to ensure a successful HCL Digital Experience installation.

1.  If you have AIX® 7.1 Technology Level \(TL\) 1, Service Pack \(SP\) 0 or 1, find the corresponding technote available at the [HCL Digital Experience Knowledge Base Technical Articles](https://support.hcltechsw.com/csm?id=kb_category&kb_category=c0ef98b71bb0778083cb86e9cd4bcbf2) and complete the steps.

2.  Set the file descriptor limit to 10240.

    For example, run the following command to set the file descriptor limit:

    ```
    ulimit -n 10240
    ```

3.  If you are using IBM GPFS file sharing, set the file system inodes limit to 25000 or higher.

    For example, run the `mmchfs /dev/gpfs1nsd -F 250000` command. /dev/gpfs1nsd is the HCL Digital Experience installation file system.

4.  **Updating operating system settings to enable full core dumps**:

    -   Use the `ulimit -f` command to set the maximum size of files to unlimited.
    -   Use the `ulimit -c` command to set the maximum size to cores to unlimited.
    -   Run the `chdev -a fullcore=true -lsys0` command to generate complete core dumps.
    For information about these commands, see your operating system documentation.

5.  Install and configure X server on AIX \(such as X Window System or GNOME\) to use the graphical user interface the installation program provides.

    **Note:** If you plan to use a response file to install the software, X server is not required.

6.  Increase the paging space 1024 - 8192 MB.

7.  Complete the following steps to use the Work Load Partition \(WPAR\) software that is installed with your AIX operating system software:

    1.  Read and follow the guidelines in this [technote](https://support.hcltechsw.com/csm) to install in a WPAR.

    2.  Set up the host system with enough disk space.

    3.  Request new IP address and host name on the same subnet as the host system.

    4.  After you get the new IP address and host name, run the following command to create a WPAR that contains a non-shared file system:

        **Note:** A non-shared file system means /usr and /opt are private to this new WPAR.

        For example:

        ```
        mkwpar -r -l -n newhostname
        ```

    5.  Verify that the `mkwpar` task completed successfully.

    6.  Use the host system smitty to configure network interfaces with the new information.

    7.  Use the `telnet` or `ssh` command to connect and log in to the system.

    8.  Verify that the /usr and /opt directories are writable.

    The WPAR instance is now ready to install IBM® Installation Manager and HCL Digital Experience.

8.  Ensure that the DB2® settings are not defined within the root user environment where the installation program runs. DB2 cannot be included within the PATH, the DB2INSTANCE variable cannot be set, and the root user is not required to run the `db2profile` command. The HCL Digital Experience package installs a copy of DB2 for its own use and definitions within the root environment for other DB2 installations can interfere with that process.



