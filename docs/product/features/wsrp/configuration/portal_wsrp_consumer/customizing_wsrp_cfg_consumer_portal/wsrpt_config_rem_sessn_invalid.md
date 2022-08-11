# Configuring remote session invalidation

You can configure the WSRP Consumer to invalidate the remote session when a user explicitly logs out of the Consumer portal. If you enable remote session invalidation and a user logs out of the Consumer portal, the Consumer sends a releaseSessions WSRP request to all the Producers with which the user interacted. The Producers portals can then invalidate these sessions.

By default, remote session invalidation is disabled.

Before you enable remote session invalidation, carefully consider the performance impact:

-   Remote session invalidation allows the Producer portal to invalidate unused sessions. This way, the Producer can free resources when the users log out.
-   However, remote session invalidation creates extra WSRP communication during logout. There is at least one WSRP roundtrip to each Producer with which the user interacted. In some cases, the Consumer needs to send multiple `releaseSessions` requests to one Producer.

To configure remote session invalidation, set the following configuration property on the Consumer portal:

-   **wsrp.consumer.releaseSessions.enabled = \(false\|true\)**

    Use this property to enable or disable remote session invalidation. The default for this property is `false`. This default setting means that the Consumer does not invalidate remote sessions.


You set this property in the portal WP Configuration Service by using the WebSphere® Integrated Solutions Console. For details about portal service configuration properties and how to set them, read Portal service configuration and Setting service configuration properties.

**Parent topic:**[Customizing the WSRP configuration of your Consumer portal](../admin-system/wsrpt_cons_cust.md)

