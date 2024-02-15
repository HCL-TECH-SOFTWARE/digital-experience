# Using the WSRP policy sets and client policy set bindings

HCL Portal provides a set of default WSRP policy sets and client policy set bindings. You can use them to configure the WSRP service clients and service references. In this case, you do not have to create your own policy sets and client policy set bindings. By alternative, you can create and use a policy set and client policy set binding of your choice.

The following table describes the provided WSRP application policy sets and the provided WSRP client policy set bindings:

|WSRP application policy sets|WSRP client policy set bindings|
|----------------------------|-------------------------------|
|-   **LTPA-based message authentication policy set**<br> This policy set defines LTPA token-based message authentication. It does not define other security mechanisms such as message confidentiality, or other web service mechanisms such as WS-Addressing.|-   **Username and LTPA-based message authentication client binding**<br> You must use this client policy set binding with each of the two WSRP policy sets. It defines the corresponding client binding.|
|-   **Username-based message authentication policy set**<br> This policy set defines Username token-based message authentication. It does not define other security mechanisms such as message confidentiality, or other web service mechanisms such as WS-Addressing.|-   **Username and LTPA-based message authentication client binding** <br> You must use this client policy set binding with each of the two WSRP policy sets. It defines the corresponding client binding.|

The WSRP application policy sets and client policy set bindings are contained in compressed format in the directory PortalServer/doc/policy-sets-samples of the portal installation.

For instructions about how to import and attach policy sets and client policy set bindings, read the IBM® WebSphere® Application Server documentation.

To use the WSRP policy sets and client policy set bindings for service configuration, proceed as follows:

1.  Import the WSRP policy sets and client policy set bindings.

    To do so, use a WebSphere Application Server administrative client, such as the WebSphere Integrated Solutions Console:

    1.  Open the **Application policy sets** panel.

    2.  Select **Import (From Selected Location)**.

    3.  Select the LTPA-based message authentication policy set.zip file or the username-based message authentication policy set.zip file that you want to import.

    4.  Open the **General client policy set bindings** panel.

    5.  Select **Import (From Selected Location)**.

    6.  Select the LTPA-based message authentication client binding.zip file or username-based message authentication client binding.zip file that you want to import.

2.  Attach the policy set and client policy set binding to a WSRP service client or service reference.

    Proceed as follows:

    1.  Open the **Service clients** panel.

    2.  Open the service reference that you want to configure. Do not select one of the default service references, such as `service/wsrp/WSRPService` or `service/wsrp/WSRPService_v2`.

    3.  Select the service reference.

    4.  Select the **Override** option.

    5.  Use the **Attach Client Policy Set** option to select and attach the LTPA-based message authentication policy set or the username-based message authentication policy set.

    6.  Select the service reference.

    7.  Use the **Assign Binding** option to select and assign the username and LTPA-based message authentication client binding.

    8.  Save your changes to the master configuration.

3.  After you have completed this configuration, restart your portal.
