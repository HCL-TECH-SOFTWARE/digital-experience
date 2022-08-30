---
id: h_wserv_about
title: About Web Service Configuration
---
import useBaseUrl from '@docusaurus/useBaseUrl';



You can use the Web Service Configuration portlet to set up your portal for consuming Web Services for Remote Portlets \(WSRP\). You prepare your Consumer portal for integrating remote portlets that are provided by Producer portals so that your portal users can work with these portlets. Additionally, you can configure Web Service Producers on the Consumer portal side and configure various aspects of using web services in your portal.

For more information about WSRP and how it works, refer to the WebSphere Portal Information Center.

You can**not** use the Web Services Configuration portlet to perform the following tasks:

-   **Provide web services:**

    To provide your portlets on a Producer portal and make them available to other portals through WSRP, use the **Manage Portlets** portlet.

-   **Consume web services:**

    To integrate portlets that are provided by a Producer as remote portlets on your Consumer portal, use the **Manage Web Modules** portlet.


Web Services Configuration displays a table that lists the Producers in your portal. Producers are other portals that provide remote portlets through WSRP. The table shows the Producers whose portlets you can consume in your portal. The table is empty after the portal installation until you create a Producer definition. The columns of the table show the following information and icons:

-   The title of the Producer
-   The description of the Producer, if available
-   The status, that is, whether the Producer is in use in your portal
-   The WSRP version that your Consumer portal and the Producer portal use when you consume web services from the listed Producer.
-   These icons that you can use for working with Producers:
    -   **Edit** for editing an existing Producer.
    -   **Delete** for deleting a Producer.
    -   **Assign Access** for giving users permissions on Producers.

