# Supported portlet APIs

Learn about how the WSRP implementation in HCL Portal 8.5 supports different portlet APIs.

Currently, there are two versions of the WSRP standard, WSRP 1.0 and WSRP 2.0. HCL Portal supports both versions of the WSRP standard.

You can use the WSRP implementation in HCL Portal 8.5 to do the following with your portal:

-   **For Producer portals:**

    The HCL Portal WSRP Producer can provide a portlet through WSRP 1.0, or 2.0, or both, depending on the API version of the portlet:

    -   The Producer can provide JSR 168 portlets through both WSRP V 1.0 and V 2.0.
    -   The Producer can provide JSR 286 portlets only through WSRP V 2.0.
    The following table shows which provided portlets on a WSRP Producer are available in which WSRP version:

    |API to which the portlet complies|Provided by WSRP V 1.0|Provided by WSRP V 2.0|
    |---------------------------------|----------------------|----------------------|
    |JSR 168 standard API|      X|      X|
    |JSR 286 standard API|JSR 286 portlets cannot be provided by WSRP V 1.0.|      X|

-   **For Consumer portals:**

    The HCL Portal WSRP Consumer supports both WSRP V 1.0 and WSRP V 2.0 Producer portals. It can therefore consume all two types of portlets: JSR 168 and JSR 286.


!!! note 
    Currently, the WSRP Producer implementation in the portal does not support the Registration interface of the WSRP specification. This interface is optional. However, the Consumer portal can handle Producers that support WSRP registration interfaces.


