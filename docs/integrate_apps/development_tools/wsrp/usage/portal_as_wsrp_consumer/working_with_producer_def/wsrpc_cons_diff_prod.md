# Different types of Producers

The information that you must provide with the Producer definition depends on the type of Producer.

There are three different types of Producers. The Producer type influences how you create the Producer definition in your Consumer portals and what information you must provide:

-   **The Producer does not require registration.**

    The HCL Portal Producer is of this type. In this case you specify the following information when you create the Producer in your Consumer portal:

    -   The URL for the WSDL service definitions of the Producer. This item of information is mandatory.
    -   A name. This item of information is mandatory.
    -   A description. This item of information is optional.
    -   User attributes. This item of information is optional. The values for the selected user attributes are later passed on to the Producer when your portal users use the Producer's web service. For example, if you select the attribute for user name, then the Producer's web service can address your portal users by their name. By selecting specific attributes, you prevent sensitive data about your users from being passed to the Producer.
    The registration handle and registration properties are not required.

-   **The Producer requires registration and is enabled for WSRP registration.**

    In this case, the Producer provides a registration port. As a Consumer, you specify the following information when you create the Producer in your portal:

    -   The URL for the WSDL service definitions of the Producer. This item of information is mandatory.
    -   A name. This item of information is mandatory.
    -   A description. This item of information is optional.
    -   Registration properties. This item of information is optional. The registration properties are passed on to the Producer during your registration. For example, they can provide information about your geographical location, such as the postal code. The Producer can then adapt the web service to your location. If you live near the mountains, the Producer might then provide information or offers for ski vacation or hiking.
    -   User attributes. This item of information is optional.
    The registration handle is not required in this case. After the Consumer completes the registration with the Producer, the Producer passes the registration handle to the Consumer, where it is stored in the Consumer portal database.

-   **The Producer requires registration, but is not enabled for WSRP registration.**

    In this case, the registration consists of the following steps:

    1.  The owner of the Consumer portal registers with the owner of the Producer portal by separate communication, for example by email. The Consumer portal owner can provide registration properties. The Consumer portal owner receives the registration handle from the Producer portal owner.
    2.  The Consumer portal administrator creates the Producer and provides the following information:

        -   The URL for the WSDL service definitions of the Producer. This item of information is mandatory.
        -   A name. This item of information is mandatory.
        -   A description. This item of information is optional.
        -   The registration handle that the Consumer received from the Producer by outside communication. This item of information is mandatory.
        -   User attributes. This item of information is optional.
        The Consumer provides no registration properties during creation because the Producer personnel already received this information during the registration by outside communication.



