# Known limitations for integrating HCL Portal with HCL Connections in SmartCloud for Social Business

Some features that are available when you integrate HCL Portal with an on-premise HCL Connections server are not supported when you integrate HCL Portal with an HCL Connections server that runs in the SmartCloud for Social Business.

## Changes to features in HCL Connections in SmartCloud for Social Business

-   The HCL Connections business card on HCL Connections in SmartCloud for Social Business is not exposed to third-party applications.
-   HCL Connections Content Manager is not a part of HCL Connections in SmartCloud for Social Business
-   HCL Connections profiles reflect users of the same organization. Guests and visitors are ignored.
-   HCL Connections profiles API on HCL Connections in SmartCloud for Social Business no longer contains the deprecated board function.
-   Seedlists for individual services are not exposed in HCL Connections in SmartCloud for Social Business.
-   There is no public access to HCL Connections in SmartCloud for Social Business. A user must be logged in to access data.

The following services are available outside and within a community scope:

-   Activity Stream
-   Profiles
-   Activities

All other services are available only within a community scope.

## Changes to features in HCL Digital Experience

-   **Social Media Publisher**

    The Social Media Publisher does not support HCL Connections in SmartCloud for Social Business.

-   **Social Rendering**

    Live names of authors and owners of social objects are not supported by SmartCloud for Social Business. Social rendering cannot be used on public pages, since access to HCL Connections in SmartCloud for Social Business is not possible without an authenticated user.

-   **Community Membership Access Control Integration**

    The feature to restrict access to portal objects such as pages based on community membership is not supported by HCL Connections in SmartCloud for Social Business. Clear the check box **Limit access to this page to only community members** in the Community Picker Dialog in HCL Portal.

-   **Portal Tag Cloud Federation**

    Portal Tag Cloud Federation with HCL Connections in SmartCloud for Social Business is not supported.

-   **Search Integration**

    RCSS is the only available way to integrate Portal Search with HCL Connections in SmartCloud for Social Business to show both contents in one query, since seedlists are not exposed.

-   **Enabling Portal Navigation in Connections by using Web Application Integrator \(WAI\)**

    This integration approach is not available for HCL Connections in SmartCloud for Social Business.

-   **Visitors and Guests**

    The integration exposes only intra-organizational aspects. Nothing that is related to visitors or guests is exposed.

-   **HCL Connections Business Card**

    HCL Connections business card in HCL Portal is not supported by SmartCloud for Social Business.



