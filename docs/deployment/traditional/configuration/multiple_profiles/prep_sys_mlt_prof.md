# Preparing the system for multiple profile support

HCL Digital Experience provides several profile templates that you can use to create a new HCL Portal profile. To use these profile templates, you must first run the enable-profiles task to configure the profile templates, register these templates with IBM WebSphere Application Server, and save the current HCL Portal baseline configuration. The baseline configuration is provided in the form of a configuration archive \(CAR\) that is created by exporting the contents of an existing profile. You can create the CAR any time, such as immediately after the initial installation or after the original portal is fully configured with security, database, basic application deployment, and server tuning.

WebSphere® Application Server uses the wsadmin scripting interface to support the CAR creation. HCL Portal provides a configuration task that creates the CAR and also captures additional portal-specific files that must be kept with the CAR. The task also places the CAR and any associated files in the correct directory.

Many portal customizations, such as new pages, blogs, and wikis, are stored in the HCL Portal release database, which uses the Derby database after the initial installation. Any customizations made to the Derby database before you run the enable-profiles task are included in the additional profiles created later. However, if you complete a database transfer to set up the release database on an external server before you run the enable-profiles task, then any customizations that are made between the transfer and when the enable-profiles task is run are not picked up by additional profiles. Therefore, you must complete all customizations that you want included on the additional profiles before you transfer your release database domain to an external database server.

**Restriction:** Your environment must be a stand-alone profile. If you have a node federated to a Deployment Manager, you must remove the node from the cell. If you have a web server node, you must remove the node before you run enable-profiles.

**Restriction:** Search Collections cannot be shared between profiles. Before you run enable-profiles, remove existing search collections from the default profile. You can re-create the search collections after you run enable-profiles.

Complete the following steps to prepare the system for multiple profile support:

1.  For AIX®, Linux™, and Solaris:- If you installed HCL Portal as a non-root user, run the `chmod -R u+rwx [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/` task to modify permissions for the Portal Server directory.

2.  Create the CAR.

    -   AIX, Linux, Solaris: Run the `./ConfigEngine.sh enable-profiles -DWasPassword=password` task, from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory of the configuration profile whose configuration forms the basis for the portal profile template.
    -   IBM® i: Run the `ConfigEngine.sh enable-profiles -DWasPassword=password` task, from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory of the configuration profile whose configuration forms the basis for the portal profile template to create the CAR.
    -   Windows™: Run the `ConfigEngine.bat enable-profiles -DWasPassword=password` task, from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory of the configuration profile whose configuration forms the basis for the portal profile template.
    The Portal.car file is saved to the following directory:

    -   AIX, Linux, Solaris: [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/profileTemplates/default.portal/configArchives.
    -   IBM i: [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/offer/portal/profileTemplates/default.portal/configArchives where offer is either content or server.
    -   Windows: [PortalServer\_root](../reference/wpsdirstr.md#wp_root)\\profileTemplates\\default.portal\\configArchives
    **Type 4 database drivers only:** If you configured HCL Portal for a remote database and placed your database drivers inside of the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer directory, they are included in the configuration archive file that is created when you run the enable-profiles script.

3.  For AIX, Linux, and Solaris:- Run the `chmod -R u+rx [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/` task to restore the non-root permissions to the Portal Server directory.


After you complete the initial profile template generation with your required configuration, you must make further customization changes only to the wp\_profile directory that is intended to be included in all additional Portal profiles. This approach allows the portal profile template configuration to be immediately updated after you apply maintenance because it already contains the required configuration to be saved with the Portal profile templates.


