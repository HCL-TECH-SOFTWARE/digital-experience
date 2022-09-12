# Setting up a virtual portal in a portal farm

If you plan on creating and using virtual portals within a portal farm, there are additional steps that are recommended to have a successful virtual portal within a portal farm environment. The basic problem if this procedure is not followed is that the virtual portal artifacts have different object ID's in each Portal farm member, which can cause problems if the initial HTTP requests prior to establishing a session end up getting routed to different Portal farm members. By following this procedure, we ensure that all Portal farm members can service these initial HTTP requests.

Perform the following steps to set up a virtual portal in a portal farm:

**Note:** These instructions only apply if you create a farm with independent servers, each with its own Release database.

1.  Create and configure your virtual portal. For more information see *Virtual portals*.

2.  Change to the following directory:

    -   Windows™: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin
    -   AIX® HP-UX Linux™ Solaris z/OS®: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin
    -   IBM® i: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin
3.  Use the following command to export content from your virtual portal:

    |Operating system|Command|
    |----------------|-------|
    |Windows|xmlaccess.bat -in ExportRelease.xml -user wpsadmin -password wpsadminpwd -url http://hostname:port/wps/config/virtualportalContext -out virtualportal\_output.xml|
    |AIX HP-UX Linux Solaris z/OS|./xmlaccess.sh -in ExportRelease.xml -user wpsadmin -password wpsadminpwd -url http://hostname:port/wps/config/virtualportalContext -out virtualportal\_output.xml|
    |IBM i|xmlaccess.sh -in ExportRelease.xml -user wpsadmin -password wpsadminpwd -url http://hostname:port/wps/config/virtualportalContext -out virtualportal\_output.xml|

    **Note:** The exported configuration is stored in the virtualportal\_output.xml file.

4.  Run the create-virtual-portal configuration task on each portal farm to create an empty virtual portal, using the same name as the virtual portal you created in the first step. For more information see *Tasks for administering virtual portals*, *Creating a virtual portal*, and *Task: create-virtual-portal*.

5.  Use the following command to import content from the first virtual portal into the virtual portals created on each portal farm:

    |Operating system|Command|
    |----------------|-------|
    |Windows|xmlaccess.bat -in virtualportal\_output.xml -user wpsadmin -password wpsadminpwd -url http://hostname:port/wps/config/virtualportalContext -out Output.xml|
    |AIX HP-UX Linux Solaris z/OS|./xmlaccess.sh -in virtualportal\_output.xml -user wpsadmin -password wpsadminpwd -url http://hostname:port/wps/config/virtualportalContext -out Output.xml|
    |IBM i|xmlaccess.sh -in virtualportal\_output.xml -user wpsadmin -password wpsadminpwd -url http://hostname:port/wps/config/virtualportalContext -out Output.xml|



