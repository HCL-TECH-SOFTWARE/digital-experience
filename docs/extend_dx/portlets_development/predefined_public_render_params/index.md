# Predefined public render parameters

HCL Portal defines a set of portal-specific public render parameters, which can be used to work with portal-specific state information within portlets.

Public render parameters is a concept that is defined by the Java Portlet Specification 2.0. As opposed to private render parameters, public render parameters can be shared between portlets to implement coordination use cases.

The main benefit of these predefined parameters is that the portlet developer can rely on the Portlet API to work with portal\_specific state information without using any portal-specific APIs or SPIs. For example, you can easily create a portlet render URI that addresses a portal page by using the public render parameter that holds the portal page selection information.

- **[Predefined public render parameters representing portal state](pre-def_pub_ren_param_repptlst.md)**  
Pre-defined public render parameters that represent portal-specific state information are available in all lifecycle methods of the portlet: processAction, processEvent, render, and serveResource. During rendering, you can create portlet URLs that address these parameters.
- **[To register predefined public render parameters in portlet.xml](reg_predef_pubrenpara_inptl.xml.md)**  
To use these predefined public render parameters in your portlet, declare each of them in your portlet deployment descriptor \(portlet.xml\) as specified in the Java Portlet specification.
- **[To use predefined public render parameters in your portlet](use_predef_pubrenparam_inportlet.md)**  
Creating portlet URLs based on these predefined public render parameters is not different from creating any other portlet URL. The typical use case is to create a portlet render URL that addresses one or multiple predefined public render parameters.

## HCLSoftware U learning materials

To learn about Script Applications, go to [Script Application](https://hclsoftwareu.hcl-software.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcl-software.com%2Fcourses%2Flesson%2F%3Fid%3D3655){target="_blank"}. You can try it out using the [Script Application Lab](https://hclsoftwareu.hcl-software.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Script_Application.pdf){target="_blank"} and corresponding [Script Application Lab Resources](https://hclsoftwareu.hcl-software.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Script_Application_Lab_Resources.zip){target="_blank"}.
