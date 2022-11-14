# Uninstalling theme PAA files

You can uninstall theme PAA files that you no longer want to use.

You can uninstall theme PAA files by using the Configuration Wizard or by using the command line. To uninstall by using the Configuration Wizard, learn more about how to [Install and uninstall add-ons using the Configuration Wizard](../install/inst_cw_addons.md#). Use the following steps to uninstall by using the command line.

1.  Change the directory to [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine.

2.  Run the following commands, where YourThemeName is the unique name of your theme:

    -   Windows™

        ```
        ConfigEngine.bat remove-paa -DappName=YourThemeNamePAA -DforceUninstall=true
        ConfigEngine.bat uninstall-paa -DappName=YourThemeNamePAA -DforceUninstall=true
        ```

    -   Linux™

        ```
        ConfigEngine.sh remove-paa -DappName=YourThemeNamePAA -DforceUninstall=true
        ConfigEngine.sh uninstall-paa -DappName=YourThemeNamePAA -DforceUninstall=true
        ```


The theme PAA file is no longer installed on the server.


