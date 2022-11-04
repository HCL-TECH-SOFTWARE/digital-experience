# Configuring the Java Authentication and Authorization Service (JAAS) login module

The behavior of the JAAS login module is configurable. If you change the attribute name for the security context, make sure to adjust the mapping rule accordingly.

-   Verify that the following WebSphere® Application Server JAAS login modules are enabled:
    -   com.ibm.ws.security.server.lm.ltpaLoginModule
    -   com.ibm.ws.security.server.lm.wsMapDefaultInboundLoginModule
-   Copy the JAAS plug-in to the AppServer\\lib\\ext directory of your Tivoli Federated Identity Manager installation. If your Tivoli Federated Identity Manager is clustered, complete this step on the Deployment Manager and all cluster nodes. The JAAS plug-in file is named wp.auth.jaas and is available in the PortalServer/base directory.

Copying the JAAS plug-in to the AppServer directory prevents the plug-in from being updated during a portal installation update. If fixes are available, make sure to update the portal installation and then replace the existing JAR files in the Tivoli Federated Identity Manager installations with the new JAR files.

-   To configure the plug-in by using the default settings, complete the following steps:

    1.  Open a wsadmin shell.

    2.  Run the following command:

        ```
        $AdminTask configureLoginModule { -loginType system
              -loginEntryAlias WEB_INBOUND -loginModule com.ibm.wps.auth.jaas.EnrichAttributeLoginModule
              -useLoginModuleProxy true -authStrategy OPTIONAL  -newModule true }
        $AdminConfig save
        ```

    3.  Exit wsadmin and restart the server.

-   To configure the plug-in by using an alternative VMM attribute name for the email address, complete the following steps.

    1.  Open a wsadmin shell.

    2.  Run the following command:

        ```
        $AdminTask configureLoginModule { -loginType system
              -loginEntryAlias WEB_INBOUND -loginModule com.ibm.wps.auth.jaas.EnrichAttributeLoginModule
              -useLoginModuleProxy true -authStrategy OPTIONAL  -customProperties
              {"vmm_email_attribute_name=internet\_mail"} -newModule true }
        $AdminConfig save
        ```

        Where internet\_mail is the alternative VMM attribute name for the email address.

    3.  Exit wsadmin and restart the server.

-   To configure the plug-in by using an alternative attribute name for the security context, complete the following steps:

    1.  Open a wsadmin shell.

    2.  Run the following command:

        ```
        $AdminTask configureLoginModule { -loginType system
              -loginEntryAlias WEB_INBOUND -loginModule com.ibm.wps.auth.jaas.EnrichAttributeLoginModule
              -useLoginModuleProxy true -authStrategy OPTIONAL  -customProperties
              {"context_email_attribute_name=email"} -newModule true }
        $AdminConfig save
        ```

        Where email is the alternative attribute name for the security context.

    3.  Exit wsadmin and restart the server.

-   To configure the plug-in by using an alternative VMM attribute name for the email address and an alternative attribute name for the security context, complete the following steps:

    1.  Open a wsadmin shell.

    2.  Run the following command:

        ```
        $AdminTask configureLoginModule
                { -loginType system -loginEntryAlias WEB_INBOUND -loginModule
                com.ibm.wps.auth.jaas.EnrichAttributeLoginModule -useLoginModuleProxy true -authStrategy
                OPTIONAL  -customProperties {"vmm_email_attribute_name=internet\_mail",
                "context_email_attribute_name=email"} -newModule true }
        $AdminConfig save
        ```

        Where internet\_mail is the alternative VMM attribute name for the email address and email is the alternative attribute name for the security context.

    3.  Exit wsadmin and restart the server.

-   To remove the plug-in, complete the following steps:

    1.  Open a wsadmin shell.

    2.  Run the following command:

        ```
        $AdminTask
                unconfigureLoginModule { -loginType application -loginEntryAlias Portal_LTPA -loginModule
                com.ibm.wps.auth.jaas.EnrichAttributeLoginModule }
        $AdminConfig save
        ```

    3.  Exit wsadmin and restart the server.




