# Modifying outbound HTTP connection policy settings

To modify the settings of an existing outbound HTTP connection policy, follow the procedure that is given here.

1.  Export the configuration to a file:

    -   If the policy resides in the global configuration, start the following portal configuration engine task:
        -   AIX® and Linux™:

            ```
            ./ConfigEngine.sh  read-outbound-http-connection-config 
                              -DConfigFileName=/tmp/the\_global\_configuration.xml
            ```

        -   Windows™:

            ```
            ConfigEngine.bat   read-outbound-http-connection-config 
                              -DConfigFileName=/tmp/the\_global\_configuration.xml
            ```

    -   If the policy resides in the application-scoped configuration, proceed as follows:
        1.  Determine the name of the application scope. To obtain this name, start the procedure for listing all available configuration profiles.
        2.  Start the following configuration engine task:

            -   AIX and Linux:

                ```
                ./ConfigEngine.sh read-outbound-http-connection-config 
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

2.  Edit either of the files /tmp/the_global_configuration.xml or /tmp/the_scoped_configuration.xml by using a text editor or an XML editor.

    The configuration file contains all policies, mappings, and metadata settings that are defined.

3.  Apply the changes from the previous step at the outbound HTTP connection configuration:

    -   If the profile was exported from the global configuration, start the following portal configuration engine task:
        -   AIX and Linux:

            ```
            ./ConfigEngine.sh update-outbound-http-connection-config 
                              -DConfigFileName=/tmp/the\_global\_configuration.xml
            ```

        -   Windows:

            ```
            ConfigEngine.bat  update-outbound-http-connection-config 
                              -DConfigFileName=/tmp/the\_global\_configuration.xml
            ```

    -   If the profile was exported from an application-scoped configuration, start the following portal configuration engine task:

        -   AIX and Linux:

            ```
            ./ConfigEngine.sh update-outbound-http-connection-config 
                              -DConfigFileName=/tmp/the\_scoped\_configuration.xml
                              -DApplicationScopeRef=THE\_APPLICATION\_SCOPE
            ```

        -   Windows:

            ```
            ConfigEngine.bat  update-outbound-http-connection-config 
                              -DConfigFileName=/tmp/the\_scoped\_configuration.xml
                              -DApplicationScopeRef=THE\_APPLICATION\_SCOPE
            ```

        where `THE_APPLICATION_SCOPE` is the name of the application scope.



