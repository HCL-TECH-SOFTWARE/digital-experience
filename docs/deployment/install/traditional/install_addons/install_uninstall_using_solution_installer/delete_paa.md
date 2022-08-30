# Deleting PAA content after an uninstallation

After you run the uninstall-paa task and removing the assembly from the ConfigEngine registry, the PAA content remains in the PAA directory. To remove any remaining content, run the delete-paa command. This command inspects the PAA directory and removes content that is not registered.

1.  Open a command prompt.

2.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

3.  Run the following command:

    **Tip:** You can delete one assembly or you can delete multiple assemblies by using a comma-separated list. To delete multiple assemblies, enter -DassemblyList=assembly1,assembly2,assembly3.

    **Optional parameter:** To delete all unregistered assemblies, replace the -DassmeblyList parameter with -DdeleteAll=true. Only unregistered PAA content is removed.

    -   AIX®: ./ConfigEngine.sh delete-paa -DassemblyList=assembly\_list -DWasPassword=password -DPortalAdminPwd=password
    -   HP-UX: ./ConfigEngine.sh delete-paa -DassemblyList=assembly\_list -DWasPassword=password -DPortalAdminPwd=password
    -   IBM® i: ConfigEngine.sh delete-paa -DassemblyList=assembly\_list -DWasPassword=password -DPortalAdminPwd=password
    -   Linux™: ./ConfigEngine.sh delete-paa -DassemblyList=assembly\_list -DWasPassword=password -DPortalAdminPwd=password
    -   Solaris: ./ConfigEngine.sh delete-paa -DassemblyList=assembly\_list -DWasPassword=password -DPortalAdminPwd=password
    -   Windows™: ConfigEngine.bat delete-paa -DassemblyList=assembly\_list -DWasPassword=password -DPortalAdminPwd=password
    -   z/OS®: ./ConfigEngine.sh delete-paa -DassemblyList=assembly\_list -DWasPassword=password -DPortalAdminPwd=password


