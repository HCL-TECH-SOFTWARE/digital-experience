# How you work with WSRP in your portal

To work with WSRP in your portal, you perform different administrative tasks. Some of these tasks depend on whether you use your portal as a Producer or Consumer portal.

## Producer tasks

When Producers work with WSRP, they perform the following tasks:

1.  Planning for WSRP
2.  Using your portal as a WSRP Producer:
    1.  Preparing security for a WSRP Producer portal and configuring the WSRP service providers. Preparing security is optional, depending on your setup.
    2.  Exchanging the required information with Consumers of your WSRP services. This exchange includes information about the WSRP interfaces and the configuration of the WSRP services.
    3.  Working with WSRP:

        1.  Providing the local portlets in your Producer portal as WSRP services so that Consumer portals can consume and call them as remote portlets.
        2.  Withdrawing a portlet. If you withdraw a portlet, Consumers can no longer consume this portlet remotely.
        3.  If you do not use message authentication, assign anonymous users the Privileged User role for the provided portlets.
        To perform these tasks, you use the **Manage Portlets** portlet. Alternatively, you can use the XML configuration interface.

    4.  Customizing the WSRP configuration of your Producer portal.

## Consumer tasks

When Consumers work with WSRP, they perform the following tasks:

1.  Planning for WSRP
2.  Using your portal as a WSRP Consumer:
    1.  Exchanging the required information for the WSRP communication with the Producer. This exchange includes information about the WSRP interfaces and the configuration of the WSRP services.
    2.  Configuring the WSRP service clients, especially the security aspects. Whether you must perform this task depends on the Producer portal security setup.
    3.  Creating and configuring one or more Producer definitions for the Producer portals from whom you want to consume WSRP services. To work with Producer definitions, use the portal administration portlet **Web Service Configuration**. You can also use the XML configuration interface.
    4.  Consuming WSRP services, that is integrating and using the WSRP services in your portal as remote portlets. To consume WSRP services, use the portal administration portlet **Manage Web Modules**. You can also use the XML configuration interface.

**Parent topic:**[Planning for WSRP](../admin-system/wsrpc_plan.md)

