# Predefined public render parameters 

HCL Portal defines a set of portal-specific public render parameters, which can be used to work with portal-specific state information within portlets.

Public render parameters is a concept that is defined by the Java Portlet Specification 2.0. As opposed to private render parameters, public render parameters can be shared between portlets to implement coordination use cases.

The main benefit of these predefined parameters is that the portlet developer can rely on the Portlet API to work with portal\_specific state information without using any portal-specific APIs or SPIs. For example, you can easily create a portlet render URI that addresses a portal page by using the public render parameter that holds the portal page selection information.

-   **[Predefined public render parameters representing portal state ](../dev-portlet/pre-def_pub_ren_param_repptlst.md)**  
Pre-defined public render parameters that represent portal-specific state information are available in all lifecycle methods of the portlet: processAction, processEvent, render, and serveResource. During rendering, you can create portlet URLs that address these parameters.
-   **[To register predefined public render parameters in portlet.xml ](../dev-portlet/reg_predef_pubrenpara_inptl.xml.md)**  
To use these predefined public render parameters in your portlet, declare each of them in your portlet deployment descriptor \(portlet.xml\) as specified in the Java Portlet specification.
-   **[To use predefined public render parameters in your portlet ](../dev-portlet/use_predef_pubrenparam_inportlet.md)**  
Creating portlet URLs based on these predefined public render parameters is not different from creating any other portlet URL. The typical use case is to create a portlet render URL that addresses one or multiple predefined public render parameters.

**Parent topic:**[Developing portlets ](../dev-portlet/wpsdev.md)

