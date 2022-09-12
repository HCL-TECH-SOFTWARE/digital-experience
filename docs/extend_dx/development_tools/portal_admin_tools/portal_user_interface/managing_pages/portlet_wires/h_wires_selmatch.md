# Selecting the matching mode

Select the matching mode to determine under which circumstances a wire can be created between portlets.

The matching mode that you select determines whether or not a wire can be created between a source portlet and a target portlet, depending on the semantic or payload types that the portlets support. Before you create a wire, select one of the following matching modes:

-   **Consider semantic types only for matching sources and targets.**

    This option determines that a wire can be created if the **namespaced semantic types** defined for the source and target portlets match. The payload type of the information that is transported over the wire is not taken into consideration. For example, this payload type can be `java.lang.string` or `java.util.HashTable`. This is the default matching mode. This mode is the most similar one to portal versions earlier than Version 6.1.

-   **Consider payload types only for matching sources and targets.**

    By this option a wire can be created if the **payload** types of the source and target portlets match, regardless of the namespaced semantic type defined for the source and target portlets.

-   **Consider semantic or payload type for matching sources and targets.**

    By this option a wire can be created if the namespaced semantic types **or** the payload types of the source and target portlets match. This is the least restrictive matching mode.


