# Choosing the type of portal farm to create

There are two supported portal farm configurations that you can choose when setting up your portal farm. You can set up a unique installation where each farm has a unique installation or you can set up one instance that is shared between multiple farm instances.

Choose one of the following options to set up your portal farm:

-   **[Setting up farm instances with a shared configuration](../install/set_portal_farm_shared.md)**  
You maintain only one installation for all members of a farm in a shared configuration. Farm maintenance is easier because it is deployed to only one system. The single installation is shared by multiple servers, which has significant benefits.
-   **[Setting up farm instances as unique installations](../install/set_portal_farm.md)**  
Choose this option if you want all portal farm instances to be unique installations. You have more control over the server-specific configuration because they are unique from server to server. For example, you can easily apply and test changes or application updates to one server on the farm at a time. The disadvantage to this option is that all administrative actions must be repeated on every server in the farm.

**Parent topic:**[Setting up and maintaining a portal farm](../install/portal_farm.md)

