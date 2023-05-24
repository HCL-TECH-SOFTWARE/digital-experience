# Supported migration paths

Migration is supported between equivalent HCL Digital Experience offerings.

!!!note
    You cannot migrate directly to HCL Digital Experience Versions 9.0 or 9.5. You must migrate first to HCL Digital Experience Version 8.5.0 with the latest combined cumulative fixes applied, then you can install HCL Digital Experience 9.0 or 9.5 using IBM Installation Manager. You can keep your profile at the current level or migrate your profile to the updated version.

!!!note "Note for new HCL Digital Experience customers"
    HCL Digital Experience 9.5 can install directly to IBM WebSphere Application Server Version ND 9.0.5 using the following installation path:

1.  Install HCL Digital Experience 8.5 with IBM WebSphere Application Server ND Version 9.0.5 and JDK Version 8 using the IBM Installation Manager.
2.  Install the latest Fixpack update available from Flexnet under HCL_Portal_8.5_9.0_9.5_CFs using IBM Installation Manager to upgrade HCL Digital Experience.
3.  Install HCL Digital Experience 9.5 using IBM Installation Manager.

!!!note "Note for V8.5 customers"
    Install HCL Digital Experience 9.5 using the following installation path either by staying at WebSphere Application Server ND 8.5.x or moving to IBM WebSphere Application Server ND Version 9.0.5:

1.  Install the latest Fixpack update available from Flexnet under HCL_Portal_8.5_9.0_9.5_CFs using IBM Installation Manager to upgrade HCL Digital Experience.
2.  We recommend you to move to IBM WebSphere Application Server Version Network Deployment Version 9.0.5 from IBM WebSphere Application Server Version 9.0. Install IBM WebSphere Application Server Version 9.0.5 using IBM Installation Manager.
3.  Install HCL Digital Experience 9.5 using IBM Installation Manager.

!!!note "Note for V9 customers"
    Install HCL Digital Experience 9.5 using the following installation path:

1.  We recommend you to move to IBM WebSphere Application Server Version 9.0.5 from IBM WebSphere Application Server Version 9.0. Install IBM WebSphere Application Server Version 9.0.5 using IBM Installation Manager.
2.  Install the latest Fixpack update available from Flexnet under HCL_Portal_8.5_9.0_9.5_CFs using IBM Installation Manager to upgrade HCL Digital Experience.
3.  Install HCL Digital Experience 9.5 using IBM Installation Manager.

The following table summarizes the supported migration paths:

|Offering|HCL Portal 8.5 Express|HCL Portal 8.5 (Server)|HCL Portal 8.5 (Enable, Extend)|HCL Web Content Manager Version 8.5|HCL Digital Experience 9.0 / HCL Digital Experience 9.5 (Enable, Extend, Server)|
|--------|----------------------|-------------------------|---------------------------------|-----------------------------------|----------------------------------------------------------------------------------|
|HCL Portal Express 7.x|Supported|Not Supported|Not Supported|Supported|Not Supported|
|HCL Portal Server 7.x (Server)|Not Supported|Supported|Supported|Not Supported|Not Supported|
|HCL Portal Server 7.x (Enable, Extend)|Not Supported|Supported|Supported|Supported|Not Supported|
|Web Content Manager 7.x|Not Supported|Not Supported|Not Supported|Supported|Not Supported|
|HCL Portal Express 8.0 on WebSphere® Application Server Version 8.0|Supported|Not Supported|Not Supported|Supported|Not Supported|
|HCL Portal Server 8.0 (Server) on WebSphere Application Server Version 8.0|Not Supported|Supported|Supported|Not Supported|Not Supported|
|HCL Portal Server 8.0 (Enable, Extend) on WebSphere Application Server Version 8.0|Not Supported|Supported|Supported|Supported|Not Supported|
|Web Content Manager 8.0 on WebSphere Application Server Version 8.0|Not Supported|Not Supported|Not Supported|Supported|Not Supported|
|HCL Portal Server 8.0 (Server) on WebSphere Application Server Version 8.5.0|Not Supported|Supported|Supported|Not Supported|Not Supported|
|HCL Portal Server 8.0 (Enable, Extend) on WebSphere Application Server Version 8.5.0|Not Supported|Supported|Supported|Supported|Not Supported|
|Web Content Manager 8.0 on WebSphere Application Server Version 8.5.0|Not Supported|Not Supported|Supported|Supported|Not Supported|

You can also migrate from a Server install to the Enable or Extend versions of HCL Digital Experience.

!!!note "Note for Version 6.1 customers" 
    If you are currently on Version 6.1, you must perform a two-step migration from Version 6.1 to Version 8.0, and then from Version 8.0 to 8.5. Go to [Migrating from HCL Portal 6.1 to Portal 8.5](https://support.hcltechsw.com/csm) for guidance on the two-step migration process.

**Important Fix Pack Requirements:** Migration is supported from the two most recent fix packs for Version 7.0.0.2 and Version 8.0.0.1. However, you must apply the latest cumulative fix to your source environment. Your target environment must also have the latest cumulative fix and the most recent fix pack applied.

If you are not sure which earlier version is installed, run the following command on the earlier portal server:

-   Windows™: wp_profile_root\PortalServer\bin\WPVersionInfo.bat
-   UNIX™Linux™: wp_profile_root/PortalServer/bin/WPVersionInfo.sh

When you migrate to 8.5, HCL Digital Experience automatically migrates the following applications and configuration data:

-   Security configuration
-   Access control
-   Portal behavior
-   Portlet applications
-   Customized portal resources, such as themes and skins, pages, and portlets
-   Personalized content
-   Virtual portals

!!!note
    You cannot upgrade the source portal with a fix pack after migration if you intend to remigrate the JCR. For example, if your source portal is Version 7.0.0.1 and you migrate it to 8.5, you cannot then upgrade the source portal to Version 7.0.0.2 and remigrate the JCR. This path is not supported.


???+ info "Related information"  
    -   [Migration overview](../../../../deployment/manage/migrate/mig_over.md)
    -   [HCL Portal detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=ba230c701b983c50f37655352a4bcb29)

