# Importing a configuration profile from a file

To restore all policies and settings for a given application scoped profile, use the import procedure given here. For example, you can use this procedure to restore a specific connection profile configuration that you backed up previously.

The following procedure assumes that the configuration that you want to restore was saved in a file /tmp/configuration.xml.

1.  If you want to restore the global configuration, skip this step. Determine the name of the application scope for which you want to restore its outbound HTTP connection profile.

    To obtain this name, follow the procedure given under *Listing all available configuration profiles*.

2.  Start the appropriate portal configuration engine task, depending on whether you want to restore the global configuration or an application-scoped configuration:

    -   To restore the global configuration, run the following configuration engine tasks:
        -   AIX® HP-UX Linux™ Solaris z/OS®:

            ```
            ./ConfigEngine.sh clean-outbound-http-connection-config 
                              -DOutboundProfileType=global 
            ./ConfigEngine.sh update-outbound-http-connection-config
                              -DConfigFileName=/tmp/configuration.xml
            ```

        -   IBM® i:

            ```
            ConfigEngine.sh   clean-outbound-http-connection-config 
                              -DOutboundProfileType=global 
            ConfigEngine.sh   update-outbound-http-connection-config
                              -DConfigFileName=/tmp/configuration.xml
            ```

        -   Windows™:

            ```
            ConfigEngine.bat  clean-outbound-http-connection-config 
                              -DOutboundProfileType=global 
            ConfigEngine.bat  update-outbound-http-connection-config
                              -DConfigFileName=/tmp/configuration.xml
            ```

    -   To restore an application-scoped configuration, run the following configuration engine tasks:
        -   AIX HP-UX Linux Solaris z/OS:

            ```
            ./ConfigEngine.sh clean-outbound-http-connection-config 
                              -DapplicationScopeRef=THE\_APPLICATION\_SCOPE
            ./ConfigEngine.sh update-outbound-http-connection-config 
                              -DapplicationScopeRef=THE\_APPLICATION\_SCOPE
                              -DConfigFileName=/tmp/configuration.xml
            ```

        -   IBM i:

            ```
            ConfigEngine.sh   clean-outbound-http-connection-config 
                              -DapplicationScopeRef=THE\_APPLICATION\_SCOPE
            ConfigEngine.sh   update-outbound-http-connection-config 
                              -DapplicationScopeRef=THE\_APPLICATION\_SCOPE
                              -DConfigFileName=/tmp/configuration.xml
            ```

        -   Windows:

            ```
            ConfigEngine.bat  clean-outbound-http-connection-config 
                              -DapplicationScopeRef=THE\_APPLICATION\_SCOPE
            ConfigEngine.bat  update-outbound-http-connection-config 
                              -DapplicationScopeRef=THE\_APPLICATION\_SCOPE
                              -DConfigFileName=/tmp/configuration.xml
            ```

    -   where `THE_APPLICATION_SCOPE` is the name of the application scope.

**Parent topic:**[Sample administration tasks](../dev-portlet/outbhttp_cfg_smpl_adm_tasks.md)

