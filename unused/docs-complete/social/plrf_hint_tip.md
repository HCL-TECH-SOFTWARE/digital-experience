# Hints and tips for Digital Data Connector 

Learn about things that are useful to know when you work with the social rendering integration with Digital Data Connector \(DDC\) for HCL Portal.

-   **Configure access on pages that show social rendering content items only for users who also have an account in HCL Connections.**

    Otherwise, the user gets an error when the user opens the portal page with the social rendering content items. Examples:

    -   An HCL Digital Experience administrator might access a page with social rendering content items by using the user ID `wpsadmin`. In this case, an error occurs because that user ID does not exist in HCL Connections.
    -   Your HCL Portal might be configured with more than one LDAP, but your HCL Connections might be configured with only one of these LDAPs. If a user who is stored in one of the other LDAPs accesses a page with social rendering content items, an error occurs.
    To avoid such errors, give access to such pages only to users who have an account in HCL Connections.

-   **Digital Data Connector does not support WSRP**

    The Digital Data Connector infrastructure does not support remote rendering through WSRP \(Web Services for Remote Portlets\). This means that lists rendered through the DDC cannot be provided as remote portlets.


**Parent topic:**[Digital Data Connector \(DDC\) for HCL Portal ](../social/plrf_ovu.md)

