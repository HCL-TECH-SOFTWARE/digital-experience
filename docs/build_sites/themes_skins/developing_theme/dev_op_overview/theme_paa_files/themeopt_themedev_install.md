# Installing theme PAA files

After you export a theme as a PAA file, you can install it on a different server.

Exported theme PAA files contain only the static resources of the exported theme. Dynamic theme resources are also needed for the exported theme to work correctly when it is installed. Before you install a theme PAA file, open the PAA file. Then, open installTheme.xml in \\YourThemeNamePAA.paa\\YourThemeNamePAA\\components\\YourThemeNamePAA\\content\\xmlaccess\\install, where YourThemeName is the name of your unique theme. Find the value of the attribute context-root and ensure that this context root is already defined on the system where you want install the theme.

You can install theme PAA files by using the Configuration Wizard or by using the command line. To install by using the Configuration Wizard, learn more about how to [Add on new capability](../../../../../extend_dx/paa/developing_basic_paa_app/creating_paa_file/paa_file_structure/index.md). Use the following steps to install by using the command line.

1.  Change the directory to [wp\_profile\_root](../../../../../guide_me/wpsdirstr.md)/ConfigEngine.

2.  Run the following commands:

    -   Windows™

        ```
        ConfigEngine.bat install-paa -DPAALocation=YourPAAFileName -DWasPassword=password -DPortalAdminPwd=password
        
        ConfigEngine.bat deploy-paa -DappName=YourThemeNamePAA -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   Linux™

        ```
        ConfigEngine.sh install-paa -DPAALocation=YourPAAFileName -DWasPassword=password -DPortalAdminPwd=password
        
        ConfigEngine.sh deploy-paa -DappName=YourThemeNamePAA -DWasPassword=password -DPortalAdminPwd=password
        ```


The exported theme is now installed in the location that you specified.


