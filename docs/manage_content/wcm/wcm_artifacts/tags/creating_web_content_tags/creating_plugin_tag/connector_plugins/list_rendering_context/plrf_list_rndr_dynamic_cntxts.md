# Dynamic list-rendering contexts

The Digital Data Connector \(DDC\) for HCL Portal makes it possible to dynamically set or modify the list-rendering context. For this purpose, it supports a defined set of public render parameters.

The Web Content Viewer portlet registers these parameters. This registration makes read and write access to these parameters possible in two ways:

-   Developers can read or write the parameters through the public portal API.
-   Website designers can read or write the parameters through the render parameter and the render URL plug-in tags.

Digital Data Connector plug-ins can access the current values of these parameters by using the `com.ibm.portal.wcm.plr.ListRenderState` Java interface. This interface is defined by the public Digital Data Connector API.

The following public render parameters are defined by Digital Data Connector:

-   **sources**

    The namespace is `http://www.ibm.com/xmlns/prod/datatype/content/resource-collections`.

    The identifier is `sources`.

-   **filters**

    The namespace is `http://www.ibm.com/xmlns/prod/datatype/content/resource-collections`.

    The identifier is `filters`.

-   **sorting**

    The namespace is `http://www.ibm.com/xmlns/prod/datatype/content/resource-collections`.

    The identifier is `sorting`.


The values of the public render parameters need to adhere to the URI syntax. For more information, read the RFC 2396 URI Generic Syntax. It is good practice that Digital Data Connector plug-ins use the URI scheme identifier to determine whether a specific parameter value is ignored or recognized. The specified DDC public render parameters are interpreted by the DDC plug-in that establishes the corresponding list-rendering context. To learn about support parameter values, read the documentation of the DDC plug-in that you use.

For example, the social rendering DDC plug-in makes it possible to set a dynamic search term filter for social lists. You do so by setting the public render parameter `filters` to the value `sr:searchterm:searchterm`. Replace `searchterm` by the actual search term that you want to use for filtering the bean list. The social rendering DDC plug-in processes only `filters` parameters that are defined in the URI scheme `sr`, in other words, it ignores all `filters` parameters that do not start with a `sr:` prefix.

???+ info "Related information:"
    - [Customizing social list definitions by using inline editing](../../../../../../../../build_sites/social_rendering/customizing_view_definitions/soc_rendr_cust_socl_list.md)

