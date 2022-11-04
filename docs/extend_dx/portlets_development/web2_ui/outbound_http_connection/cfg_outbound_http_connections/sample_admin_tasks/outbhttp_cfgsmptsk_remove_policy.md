# How to remove outbound HTTP connection policies

You can choose to remove individual outbound HTTP connection policies or you can remove all policies from a configuration profile.


## Removing a single outbound HTTP connection policy

1.  Export the configuration from which you want to delete the policies to a file.

    For details, read [Exporting a configuration profile from a file](outbhttp_cfgsmptsk_export_policy2file.md).

2.  Edit the file by using a file editor or an XML editor.

3.  Locate all policies that you want to delete and remove them from the file.

4.  Restore the configuration by using the modified file.

    For details, read [Importing a configuration profile from a file](outbhttp_cfgsmptsk_restore_import_policy_profile.md).


## Removing all policies of a configuration profile

1.  Determine the name of the application scope for which you want to delete its outbound HTTP Connection profile.

    To obtain this name, use the procedure under [Listing all available configuration profiles](outbhttp_cfgsmptsk_list_all_cfg_prfls.md).

2.  Run the following portal configuration engine task:

    -   AIX® and Linux™: `./ConfigEngine.sh clean-outbound-http-connection-config -DApplicationScopeRef=THE\_APPLICATION\_SCOPE -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows™: `ConfigEngine.bat clean-outbound-http-connection-config -DApplicationScopeRef=THE\_APPLICATION\_SCOPE -DWasPassword=password -DPortalAdminPwd=password`
    The `THE_APPLICATION_SCOPE` value is the name of the application scope.

    !!!note
        To remove the global configuration, you can also use the configuration task `clean-outbound-http-connection-config` instead. However, it is good practise to review the current content of the global configuration profile before you delete its content. To do so, follow the procedure for [Removing an Outbound HTTP Connection Policy](outbhttp_cfgsmptsk_remove_policy.md) earlier in this topic.


