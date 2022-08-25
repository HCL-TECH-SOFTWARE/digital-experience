---
id: h_main_clients
title: Managing client devices
---
import useBaseUrl from '@docusaurus/useBaseUrl';



You can define the types of devices that can be used to access the portal. Devices can include Web browsers on a personal computer, wireless phones, personal digital assistants, and other types. To optimize the data that the portal sends to the client and to handle the limitations and deviations of each individual client browser, the portal server maintains information about all supported client devices in a client registry.

-   **[Creating a new client](h_clients_new.md)**  
Create new entries in the client registry when, for example, a new version of a client browser software is used that cannot be detected by the client registry.
-   **[Editing a client](h_clients_edit.md)**  
Use this task to edit existing entries in the client registry when, for example, problems in a certain client browser are discovered that require different, browser-specific processing or if there are problems in the user agent pattern detection.
-   **[Deleting a client](h_clients_delete.md)**  
You can delete unused search clients.
-   **[Displaying client information](h_clients_display_info.md)**  
You can display detailed information about all of the clients defined in HCL Portal.
-   **[Setting the order of the client in the registry](h_clients_set_order.md)**  
The order in which the client is listed in the registry is important to ensure that the most exact markup is sent to the client.
-   **[Overriding the default HTML client](h_clients_override.md)**  
You can remove the default HTML client and user agent string to prevent clients that support WML from not being recognized by the portal.

