# Producer checklist for exchanging information with a Consumer

Use this list to check whether you provided and obtained all required information that you must exchange with the Consumer.

## Information that a Producer provides to a Consumer

-   **Mandatory information:**

    The WSDL service description document that contains the WSRP service description of the Producer.

     

-   **The following information can be required.**

    Whether this information is required depends on the setup of the Producer portal:

    -   **The service configuration of the Producer portal.**

        If the Producer has set up a specific WSRP configuration, the Consumer needs this information. For example, a security mechanism can require a user repository that is shared between the Consumer and Producer portals. Other security mechanisms can also require an exchange of certificates or public keys between the Consumer and Producer portals.

    -   **Registration information.**

        The Consumer needs this information if the Producer requires registration.

    -   **Group IDs and handles of portlets.**

        If the Consumer administrator consumes a remote portlet from a Producer portal by using the XML configuration interface, the Consumer needs the group IDs and the portlet handles of the remote portlets at the Producer portal.


## Information that a Producer obtains from a Consumer

-   **The following information can be required.**

    Whether this information is required depends on the security setup of the Producer portal:

    -   **User information about users of the Consumer portal who uses the remote portlets.**

        If the Producer portal has security configured, the Producer needs this information to give the users of the Consumer portal access permission to the provided WSRP services.



