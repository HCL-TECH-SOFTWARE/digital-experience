# Migration: Virtual portals

During the migration process, your existing virtual portals are moved over to your target environment without modification.

The default sample virtual portal content scripts are not updated during migration. A new sample virtual portal script is available with each new version of HCL Portal. However, this script is not installed or made available during migration. If you create new virtual portals by using the Virtual Portal Manager portlet in the portal Administration area, the portal continues to use your existing virtual portal content scripts. If you want to create new virtual portals by using new scripts that you create based on the updated samples, configure the Virtual Portal Manager portlet to use these new scripts.

For more information about working with virtual portals, read the *Virtual portals* in the related links.

## Adding a portal administrator to virtual portal realms

When you migrate an environment with virtual portals, the portal administrator must be added to the virtual portal realms. If the portal administrator is not added to the realms associated with the virtual portals, the migration fails.

Add the portal administrator to a virtual portal realm:

1.  Enter a value for the following parameters in the wkplc.properties file in the VMM realm configuration section:
    -   realmName=realmName
    -   addBaseEntry=o=BaseEntryName
2.  Open a command line.
3.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.
4.  Run the following command:
    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh wp-add-realm-baseentry -DWasPassword=password
    -   IBM® i: ConfigEngine.sh wp-add-realm-baseentry -DWasPassword=password
    -   Windows™: ConfigEngine.bat wp-add-realm-baseentry -DWasPassword=password

**Parent topic:**[What to expect after you complete migration](../migrate/mig_plan_expectations.md)

**Related information**  


[Virtual portals](../admin-system/ad_vp.md)

[Preconfiguring the default content for virtual portals](../admin-system/advp_precfg_content.md)

[Tasks for administering virtual portals](../admin-system/advptsk.md)

[Adding realm support](../security/cfg_realm.md)

