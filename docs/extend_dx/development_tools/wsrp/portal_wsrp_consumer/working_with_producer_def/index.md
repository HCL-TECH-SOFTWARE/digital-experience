# Working with Producer definitions

To make a WSRP Producer known to your Consumer portal, you create a Producer definition for that WSRP Producer in your Consumer portal. You can also configure the Producer definition.

When you create a Producer definition, you use the information that you obtained from the Producer to configure the WSRP connection to the Producer. If required, you also register with the Producer.

There are different scenarios for creating a Producer definition:

1.  You can use either the Web Service Configuration portlet or the XML configuration interface to create the Producer definition, depending on whether you work online or offline:
    1.  If you can connect to the Producer portal and access all files that the Producer's WSDL service definition references, you can work online when you create the Producer definition. In this case, you can use either the Web Service Configuration portlet or the XML configuration interface to create the Producer definition. For example, this can be the case if you want to consume WSRP services in your current portal.
    2.  If you cannot connect to the Producer portal and access all files that the Producer's WSDL service definition references, you work offline. In this case, you can use only the XML configuration interface to create the Producer definition. For example, this case can occur if you prepare your Consumer portal in a staging environment and do not connect to the Producer portal to consume WSRP services until you transfer your portal to the next stage.
2.  There are three types of Producers. The type of Producer that you create determines which information you must provide with the Producer definition and whether you can create the Producer definition online or offline:

    1.  The Producer does not require registration. In this case, you specify the information that you obtained from the Producer. You can create this type of Producer definition in online or offline mode. The HCL Portal Producer is of this type.
    2.  The Producer requires registration and is enabled for WSRP registration. Such a Producer provides a registration port. In this case, you can specify extra registration properties when you create the Producer definition in your Consumer portal. You can create this type of Producers only in online mode.
    3.  The Producer requires registration and is not enabled for WSRP registration. In this case, you must provide a registration handle that you obtained from the Producer. You can create this type of Producer definition in online or offline mode.
    You can create all three types of Producers by using either the Web Service Configuration portlet or the XML configuration interface.


|Type of Producer|Creating the Producer definition online by using . . .|Creating the Producer definition offline . . .|
|----------------|------------------------------------------------------|----------------------------------------------|
|The Producer does not require registration. In this case you specify the information that you obtained from the Producer.|. . . the Web Service Configuration portlet or the XML configuration interface.|. . . by using the XML configuration interface.|
|The Producer requires registration and is enabled for WSRP registration. In this case the Producer provides a registration port. In this case, you can specify extra registration properties when you create the Producer definition in your Consumer portal.|. . . the Web Service Configuration portlet or the XML configuration interface.|. . . is not a valid scenario.|
|The Producer requires registration and is not enabled for WSRP registration. In this case you must provide a registration handle that you obtained from the Producer.|. . . the Web Service Configuration portlet or the XML configuration interface.|. . . by using the XML configuration interface.|

!!!note "Notes"
    1.  The current implementation of the WSRP Producer in the portal does not support the WSRP registration interface. However, the WSRP Consumer in the portal can handle Producers that support WSRP registration interfaces.
    2.  When you specify user attributes, make sure to avoid that any of the following events occur:
        -   Sending security relevant attributes, such as passwords, over unsecured network connections
        -   Passing sensitive data about your users to the Producer.


???+ info "Related information"  
    -   [Updating a WSRP Consumer](../../../../../deployment/manage/migrate/next_steps/post_mig_activities/portal_task/wsrp/mig_post_wsrp_consumer.md)

