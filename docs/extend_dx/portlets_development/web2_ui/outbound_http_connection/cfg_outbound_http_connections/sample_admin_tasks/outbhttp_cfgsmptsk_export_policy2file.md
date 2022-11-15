# Exporting a configuration profile to a file

To create a backup of a specific outbound HTTP connection profile, use the procedure given here.

1.  Export the configuration to a file.

    -   To export the global configuration, start the following portal configuration engine task:

        -   AIX® HP-UX Linux™ Solaris z/OS®:

            ```
            ./ConfigEngine.sh read-outbound-http-connection-config 
                              -DConfigFileName=/tmp/the\_global\_configuration.xml
            ```

        -   IBM® i:

            ```
            ConfigEngine.sh   read-outbound-http-connection-config 
                              -DConfigFileName=/tmp/the\_global\_configuration.xml
            ```

        -   Windows™:

            ```
            ConfigEngine.bat  read-outbound-http-connection-config 
                              -DConfigFileName=/tmp/the\_global\_configuration.xml
            ```

        The output file /tmp/the\_global\_configuration.xml contains an XML export of the global configuration profile.

    -   To run an application scoped profile, proceed as follows:

        1.  Determine the name of the application scope. To get this name, follow the procedure under *Listing all available configuration profiles*.
        2.  Start the following portal configuration engine task:

            -   AIX HP-UX Linux Solaris z/OS:

                ```
                ./ConfigEngine.sh read-outbound-http-connection-config 
                                  -DConfigFileName=/tmp/the\_scoped\_configuration.xml
                                  -DApplicationScopeRef=THE\_APPLICATION\_SCOPE
                ```

            -   IBM i:

                ```
                ConfigEngine.sh   read-outbound-http-connection-config 
                                  -DConfigFileName=/tmp/the\_scoped\_configuration.xml
                                  -DApplicationScopeRef=THE\_APPLICATION\_SCOPE
                ```

            -   Windows:

                ```
                ConfigEngine.bat  read-outbound-http-connection-config 
                                  -DConfigFileName=/tmp/the\_scoped\_configuration.xml
                                  -DApplicationScopeRef=THE\_APPLICATION\_SCOPE
                ```

            where `THE_APPLICATION_SCOPE` is the name of the application scope.

        The output file `/tmp/the_scoped_configuration.xml` contains an XML export of the application-scoped configuration profile.



