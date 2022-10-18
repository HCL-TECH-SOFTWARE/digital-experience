# Standard portlet API

The Java Portlet Specification addresses the requirements of aggregation, personalization, presentation, and security for portlets running in a portal environment.

Version 1.0 of the Java Portlet Specification was approved by the Java Community Process in October 2003 as JSR 168. The purpose of the specification is to solve the problem of portlet compatibility between portal servers offered by different vendors. Version 2.0 of the Java Portlet Specification extended the capabilities to include coordination between portlets, resource serving, and other advanced features. The final version 2.0 was approved by the Java Community Process in March 2008 as JSR 286.

HCL Digital Experience includes a portlet run time environment that supports portlets developed according to the Java Portlet Specification, hereafter called standard portlets.

With HCL Digital Experience there are some IBM specific parameters for portlets available. For more information about these parameters refer to the topic *Deployment descriptors* under the section *Reserved parameter names*.

For portlets conforming to JSR 286, HCL Digital Experience also includes support for two-phase rendering.

The following topics provide specific information about the implementation of the standard portlet API within HCL Digital Experience.

-   **[Using two-phase rendering with JSR 286 portlets](../standard_portlet_api/twophase_rendering_jsr_portlets/index.md)**  
For portlets conforming to JSR 286, HCL Digital Experience includes support for two-phase rendering, which allows portlets to set cookies and the HTTP headers and to change the portal page title dynamically.


???+ info "Related information"
    - [Portlet concepts](../wpsbpc.md)
    - [JSP tags for standard portlets](../portlet_dev_ref/jsrjsp.md)
    - [Converting HCL Digital Experience portlets (AIX, Linux, Windows) to the Java Standard API](../portlet_api/converting_dx_portlets_to_java_standard_api/index.md)
    - [Portlet API](../portlet_api/index.md)
    - [Deployment descriptors](../portlet_dev_ref/wpsptdesc.md)
    - [JSR 286: Portlet Specification 2.0](https://jcp.org/en/jsr/detail?id=286)
    - [JSR 168: Portlet Specification](https://jcp.org/en/jsr/detail?id=168)
    - [Introducing the Portlet Specification, Part 1](https://www.infoworld.com/article/2073645/introducing-the-portlet-specification--part-1.html)
    - [Introducing the Portlet Specification, Part 2](https://www.infoworld.com/article/2073698/introducing-the-portlet-specification--part-2.html)

