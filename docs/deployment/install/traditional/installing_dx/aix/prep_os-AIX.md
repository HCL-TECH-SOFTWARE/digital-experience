# Configuring AIX to install HCL DX

Prepare the operating system to ensure a successful HCL Digital Experience (DX) installation.

1. If you have AIX® 7.1 Technology Level (TL) 1, Service Pack (SP) 0 or 1, find the corresponding technote available at the [HCL Digital Experience Knowledge Base Technical Articles](https://support.hcltechsw.com/csm?id=kb_category&kb_category=c0ef98b71bb0778083cb86e9cd4bcbf2){target="_blank"} and complete the steps.

2. Set the file descriptor limit to `10240`.

    ```bash
    ulimit -n 10240
    ```

3. If you are using IBM General Parallel File System (GPFS) file sharing, set the file system `inodes` limit to `25000` or higher: <!-- This page says 250,000, not 25,000 https://help.hcl-software.com/digital-experience/9.5/CF237/deployment/manage/portalfarm_cfg/choose_portalfarm/settingup_with_sharedconfig/set_portal_farm_gpfs/ please confirm-->

    ```bash
    mmchfs /dev/gpfs1nsd -F 250000
    ```

    `/dev/gpfs1nsd`: The HCL DX installation file system.

4. Update your operating system settings to enable full core dumps:

    1. Set the maximum size of files to unlimited:

        ```bash
        ulimit -f
        ```

    2. Set the maximum size of core dump files to unlimited:

        ```bash
        ulimit -c unlimited
        ```

    3. Enable the system to generate complete core dumps:

        ```bash
        chdev -a fullcore=true -l sys0
        ```

    For information about these commands, refer to your operating system documentation.

5. Install and configure X server on AIX (such as X Window System or GNOME) to use the graphical user interface that the installation program provides.

    - Ensure that `gtk2` package is installed:

        ```bash
        dnf install gtk2
        ```

    - Ensure that the `LIBPATH` is set correctly to start the Installation Manager.

        ```bash
        export LIBPATH=/opt/freeware/lib:$LIBPATH
        ```

    !!!note
        If you plan to use a response file to install the software, X server is not required.

6. Increase the paging space to between 1024 MB to 8192 MB.
7. Configure an AIX Workload Partition (WPAR):

    1. Read and follow the guidelines in this [technote](https://support.hcltechsw.com/csm){target="_blank"} to install in a WPAR. <!--The tech note just leads to the support URL-->
    2. Allocate sufficient disk space on the host system.
    3. Request an IP address and host name on the same subnet as the host system.
    4. Create a WPAR that contains a non-shared file system:

        ```bash
        mkwpar -r -l -n newhostname
        ```

        !!!note
            A non-shared file system keeps `/usr` and `/opt` private to this WPAR.

    5. Verify that the `mkwpar` task completed successfully.
    6. Configure network interfaces on the host system by using the System Management Interface Tool (`smitty`).
    7. Connect and log in to the system by using `telnet` or `ssh`.
    8. Verify that the `/usr` and `/opt` directories are writable.

8. Ensure that the DB2 settings are not defined within the root user environment where the installation program runs. DB2 cannot be included within the `PATH`, the `DB2INSTANCE` variable cannot be set, and the root user is not required to run the `db2profile` command. The HCL DX package installs a copy of DB2 for its own use and definitions within the root environment for other DB2 installations can interfere with that process.
