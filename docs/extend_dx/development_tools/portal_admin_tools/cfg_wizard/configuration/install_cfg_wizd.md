# Installing or uninstalling the Configuration Wizard

The Configuration Wizard is installed by default when you install HCL Digital Experience. As an alternative to using the default installation, you can install the Configuration Wizard on another server that already has IBM WebSphere Application Server installed.

1.  Change to the [AppServer\_root](../reference/wpsdirstr.md#was_root)/ConfigEngine directory.

2.  To install the Configuration Wizard, run the following command:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh deploy-wizard-war-standalone
    -   IBM® i: ConfigEngine.sh deploy-wizard-war-standalone
    -   Windows™: ConfigEngine.bat deploy-wizard-war-standalone
    -   z/OS®: ./ConfigEngine.sh deploy-wizard-war
    
3.  To uninstall the Configuration Wizard, run the following command:

    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh remove-wizard-war-standalone
    -   IBM i: ConfigEngine.sh remove-wizard-war-standalone
    -   Windows: ConfigEngine.bat remove-wizard-war-standalone
    -   z/OS: ./ConfigEngine.sh remove-wizard-war


