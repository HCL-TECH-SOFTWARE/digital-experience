# Configuring a shared file system

When you choose the option to install the Farm with a shared file system, provide the file system before you install the first farm member. Tune your file system. Slow access to the files impacts performance. Because all the farm members access the file system concurrently, the system must handle this situation.

The GPFS configuration is a supported file system. It is supported on the following operating systems:

-   AIX®
-   Linux™
-   Windows™

Install and configure the operating system and the file system support on the local disk of all farm members.

When you set up the shared file system, the following two requirements define where to mount the shared file system:

-   IBM® WebSphere® Application Server, HCL Digital Experience, and the portal profile form a set of files. These files need to be consistent. Therefore, place all of these parts into the same shared file system.
-   Make the shared file system root path as specific as possible. This action reduces the possibility to conflict with other installations.

The shared file system root path is typically:

-   AIX: /usr/IBM/WebSphere
-   Linux: /opt/IBM/WebSphere
-   Windows: C:\\IBM\WebSphere

Create an empty file system on a central file server with enough capacity for a full installation. Then, mount it on the Farm Master as a writeable file system in the location where you would install HCL Portal. The mount point on the Farm Master is fixed after HCL Portal is installed. All other Farm members and workers need to use the same mount point and they need read/write access to the shared file system.

Use the following steps as a guide if you are using GPFS as your shared file system:

1.  Install and configure the file system on each of your farm clients and farm master servers.

2.  On the farm master server, create the following two file systems with a minimum of 40 gigabytes of space that have read/write access:

    -   Mount /dev/gpfs1nsd on /apps
    -   Mount /dev/gpfs3nsd on /profiles
3.  Ensure that the file system inodes limit is set to 250000 or higher:

    -   mmchfs /dev/gpfs1nsd -F 250000
    -   mmchfs /dev/gpfs3nsd -F 250000


???+ info "Related information" 
    -   [Installing the Farm Master and setting up the support server](../../../../../deployment/manage/portalfarm_cfg/choose_portalfarm/settingup_with_sharedconfig/set_portal_farm_master.md)

