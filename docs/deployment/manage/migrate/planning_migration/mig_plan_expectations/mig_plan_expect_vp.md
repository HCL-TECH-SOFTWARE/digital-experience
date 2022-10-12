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
3.  Change to the wp_profile_root/ConfigEngine directory.
4.  Run the following command:

    -   AIX® and Linux™: `./ConfigEngine.sh wp-add-realm-baseentry -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat wp-add-realm-baseentry -DWasPassword=password`


???+ info "Related information"  
    -   [Virtual portals](../../../../../build_sites/virtual_portal/index.md)
    -   [Preconfiguring the default content for virtual portals](../../../../../build_sites/virtual_portal/vp_mgr_portlet/preconfig_vp/advp_precfg_content.md)
    -   [Tasks for administering virtual portals](../../../../../build_sites/virtual_portal/adm_vp_task/vp_adm_task/index.md)
    -   [Adding realm support](../../../../../deployment/manage/security/user_registry/cfg_realm.md)

