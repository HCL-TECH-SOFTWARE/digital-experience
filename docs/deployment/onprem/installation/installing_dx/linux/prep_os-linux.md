# Linux: Preparing your operating system

Prepare the operating system to ensure a successful HCL Digital Experience installation.

1.  If you are using IBM GPFS file sharing, set the file system inodes limit to 25000 or higher.

    For example, run the `mmchfs /dev/gpfs1nsd -F 250000` command. /dev/gpfs1nsd is the HCL Digital Experience installation file system.

2.  Set the file descriptor limit to 10240.

    For example, run the following command to set the file descriptor limit:

    ```
    ulimit -n 10240
    ```

3.  **Updating operating system settings to enable full core dumps**:

    -   Use the `ulimit -f` command to set the maximum size of files to unlimited.
    -   Use the `ulimit -c` command to set the maximum size to cores to unlimited.
    For information about these commands, see your operating system documentation.

4.  Install and configure X server on Linux™ \(such as X Window System or GNOME\) to use the graphical user interface the installation program provides. For information about adding packages, read your operating system documentation.

    **Note:**

    -   If you plan to install with a response file, X server is not required.
    -   Installing libXtst.i686 using `yum`, along with the required prerequisites is sufficient to get the IBM Installation Manager graphical user interface to run.
5.  Ensure that all non-root users have the appropriate permissions to the /tmp/javasharedresources directory.

    For example, the non-root users must have at least 770 permissions.


**Parent topic:**[Preparing your Linux system for installation](../install/installingwp95-linux.md)

