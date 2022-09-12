---
id: h_clients_new
title: Creating a new client
---

Create new entries in the client registry when, for example, a new version of a client browser software is used that cannot be detected by the client registry.

If the new client requires any supporting resources in the aggregation of the portal site \(for example, special markup or low-resolution images\), these should be setup in a subdirectory of the skins and themes path of the portal.

Perform the following steps to create a new client:

1.  Click **Add new client**.

    Enter the properties of the new client in the following fields:

    -   **User agent:** This field is mandatory. Enter the name of the client, which should match, as close as possible, the user agent string that the client sends in its request header. You might need to enter several string patterns for a single client. In addition, surround the name with a period plus asterisk combination, for example:

        ```
         .*useragent.* 
        ```

        This wild card string is used and resolved according to the wild card resolution rules of the Apache foundation. Keep the following in mind:

        -   Some user agent strings contain locale information about the language of the client browser. The portal uses the language definition in the HTTP request header for its language selection. It usually is not necessary to define user agent patterns that take respect on certain browser languages.
        -   Some client browsers include information about the operating system. In most cases, the client detection should work independent on this.
        -   Some browsers allow the user to customize the user agent patterns.

    -   **Markup:** This field is mandatory. Indicate the type of markup the client supports. The markup must already be defined to the portal from **Manage Markup**.

        !!! note
            After deleting a markup, the client still references the original markup name. However, if you edit the client, the Manage Client portlet displays a warning message to indicate that a deleted markup is referenced and a supported markup should be selected if the deleted markup will not be recreated.

    -   **Markup Version:** Optional. Indicate more specific information about the markup supported by the client. This markup version is used to identify deviations of a standard markup. For example, HCL Portal includes the markup version ie in the registry to correctly handle HTML deviations of the MicroSoft Internet Explorer.
    -   **Manufacturer:** Optional. Enter the name of the company that manufactured the client.
    -   **Model:** Optional. Indicate the model number or name of the client.
    -   **Version:** Optional. Indicate any version associated with the model.
    -   **Capabilities** Enter specific capabilities of this client. If the client is a Web browser, for example, you could list specific capabilities in HTML that it supports, such as frames or Javascript. Click **Add** to add it to the capabilities list. To delete a capability, select it from the list and click **Delete**.
    -   **Position:** Indicate the order in which you want this client entered in the client registry. The portal server matches the user agent string in the client's request header to patterns in the client registry. For example, if the user agent sends 'Microsoft Internet Explorer 5.5' and the portal server finds '\*Internet Explorer 5\*', then that registry entry is used to determine markup sent to the client. For this reason, it is recommended to place the most specific User Agent patterns in the first position of the list. The default user agent pattern \(\*\), if included in the list, should be placed in the last position.
    
2.  Click **OK** to save your changes, or **Cancel** to exit without saving your changes.


