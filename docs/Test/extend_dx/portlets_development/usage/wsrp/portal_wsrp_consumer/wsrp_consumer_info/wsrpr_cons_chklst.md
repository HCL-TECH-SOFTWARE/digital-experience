# Consumer checklist for exchanging information with a Producer

Use this list to check whether you have obtained and provided all required information that you must exchange with the Producer.

## Information that a Consumer obtains from the Producer

-   **Mandatory information:**

    -   **The WSDL document that contains the service description of the Producer.**

        The WSDL document must include a description of the **two mandatory WSRP interfaces: Service Description and Markup**. The WSDL document can contain a description of the two optional WSRP interfaces: Portlet Management and Registration.

     

-   **Information that can be required**

    Depending on the setup of the Producer portal, the following information can be required:

    -   **The web service configuration of the WSRP services of the Producer portal.**

        The Consumer needs the web service configuration if the Producer has set up a specific web service configuration for the WSRP services.

    -   **The user registry information.**

        The Consumer might need this information if the Producer has configured message authentication that is based on token forwarding.

    -   **Registration information.**

        The Consumer needs this information if the Producer requires registration. 

    -   **Group IDs and handles of portlets.**

        The Consumer needs these IDs and handles if the Consumer administrator consumes a remote portlet from a Producer portal by using the XML configuration interface.

     


## Information that a Consumer provides to the Producer

-   **Information that can be required.**

    The information that can be required depends on the security setup of the Producer portal.

    -   **User information about users of the Consumer portal who will use the remote portlets.**

        If the Producer portal has message authentication configured, the Producer must grant the users of the Consumer portal access permission to the provided portlets.



