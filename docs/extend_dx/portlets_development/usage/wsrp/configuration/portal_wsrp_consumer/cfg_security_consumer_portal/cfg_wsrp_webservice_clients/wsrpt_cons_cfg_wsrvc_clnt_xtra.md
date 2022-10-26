# Communicating with Producer portals with different web service configurations

You can use your Consumer portal to communicate with Producer portals that have different web service configurations.

For example, such a configuration can be necessary if your WSRP Consumer portal communicates with two separate remote WSRP Producer portals with different web services configurations:

-   One of the Producers does not configure Web Services Security for the WSRP web services.
-   The other Producer requires Web Services Security for its WSRP web services by using a token type that is different from LTPA and username.

In such a case, you deploy an extra service client reference on your WSRP Consumer portal.

This option to deploy extra service references makes it possible to manage multiple WSRP Consumer side web service configurations. If your WSRP Consumer portal does not communicate with multiple Producers that have different web service configurations, you do not need to deploy extra service client references.

If the Producers require web service security based on LTPA or username tokens and do not require further service configuration, you do not need to deploy extra service references. In this case, configure the token type for web service security by following the description in If the Producers require web service security based on LTPA or Username tokens and do not require further service configuration, you do not need to deploy extra service references. In this case, it is recommended to configure the token type for web service security by following the description in*Configuring WSRP Producer ports for message authentication*.

To deploy an extra service client reference for communication with Producers with different web service configurations, proceed as follows:

1.  Configure the service references separately:

    -   Leave the default service reference as it is. Do not configure Web Service Security for the default service reference.
    -   Deploy an extra custom service reference and configure it for WS-Security compliant Web Service Security.
2.  When you create or edit the Producer definitions that represent the WSRP Producers, you can select the appropriate custom service references for the Producer ports:

    -   Select the additional service reference for all ports of the Producer definition that represents the secure Producer.
    -   For the non-secure ports of the Producer definition, you do not need to select a service reference. If no specific service reference is selected for a Producer port, the WSRP Consumer portal uses the default service reference.



