# Filtering the Content Models

By applying filters to the content model, you can exclude parts of the page hierarchy from the content model. Filtering is performed based on request data and metadata assigned to the pages.

There are two ways you can filter the content model:

-   You can filter on the device class that is specified in the HTTP request. This filtering can be used to provide a unified content model for both desktop and mobile users. For pages that are specific to mobile users, you assign only the device class for the mobile client, such as a smartphone or tablet. These pages are then visible only to users who access the portal with one of the specified devices.
-   You can filter on the markup language that pages support. This approach is useful when building mobile websites for older devices that use markup languages like WML or Compact HTML

**Tip:** When filtering for mobile devices that support HTML, filter only by device class.

1.  Enable content model filtering in the portal.

    By default, filtering is not enabled. This step must be done only once.

    1.  Log in to the WebSphere® Integrated Solutions Console.

    2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

    3.  Click **WP ConfigService**.

    4.  Under **Additional Properties**, click **Custom Properties**.

    5.  Click **New**, and enter the appropriate property name, depending on the type of filtering that you want to perform.

        -   **Filter by device class**

            Add content.topology.filter.deviceclass, and set the string value to the true.

        -   **Filter by markup language**

            Add content.topology.filter.markup, and set the string value to the true.

2.  Save your changes, and restart the server.



???+ info "Related information"
    - [Setting service configuration properties](../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)

