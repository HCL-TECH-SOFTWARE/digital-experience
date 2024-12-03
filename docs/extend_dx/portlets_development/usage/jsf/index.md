# Support for JavaServer Faces 2.2

HCL Digital Experience (DX) 8.5 and 9.5 includes the HCL Portlet 2.0 Bridge for JSF 2.2. The bridge provides customers an interface to developing and running JSF Portlets.

!!! note
    Refer to [JavaServer Faces implementation](../../../../deployment/manage/migrate/next_steps/post_mig_activities/addon_integration_task/mig_post_jsf.md) for information about HCL DX JSF Bridge.

## Limitations when running HCL DX Portlet Bridge on WebSphere Application Server 9.0

Be aware of the following limitations and best coding practices when running the bridge on WAS 9.0:

-  Not all new JSF 2.2 functionality is supported by the HCL Portlet 2.0 Bridge for JSF 2.2. Following list of features are currently not supported:
    -  Resource Library Contract
    -  Faces Flow
    -  Stateless Views
    -  File Upload via `<h:inputFile>` directive
    -  CDI Session Beans are limited to session scope not portlet session scope

-  Portlets must be written to the JSR286 specification.

-  The HCL Portlet 2.0 Bridge for JSF 2.2 is dependent on the use of Apache MyFaces JSF implementation. It does not function with the SUN RI JSF Implementation.

-  HCL provides the GenericFacesPortlet class `com.ibm.faces20.portlet.FacesPortlet` for customers to take advantage of the JSF Bridge functionality. For backward compatibility reasons, the HCL Portlet Bridge provides the following methods of view manipulation within the portlet code.

    - Calculate the view Id. Priority order:
        1.  It is a partial action - use partial view parameter
        2.  It is a partial render or path setting - use view from path
        3.  View Id is set as a request parameter
        4.  View Id is set as a request attribute
        5.  View Id calculated from portlet mode and the mode map
    
    - Parameter/Attribute name for portlet mode
        1.  view Mode = `com.ibm.faces.portlet.VIEWID`
        2.  edit and edit\_defaults mode = `com.ibm.faces.portlet.page.edit`
        3.  help mode = `com.ibm.faces.portlet.page.help`
        4.  config mode = `com.ibm.faces.portlet.page.config`

- Using `f:ajax` tags for `commandButton` values in the HCL DX JSF Bridge is currently not supported.

-  In order to utilize Portlet Session Beans, you must use the JSF bean/scope implementation (import `javax.faces.bean.ManagedBean`, `javax.faces.bean.SessionScoped`). Portlet Session Bean support of CDI in JSF 2.2 is dependent on a Portlet 3.0 container, which is not yet available for HCL DX.

-  Ensure that all portlet implementations are not utilizing internal Portlet Bridge for JSF classes. In the past, articles and samples had been published utilizing the older bridge classes. The following list of imports/apis must not be used in custom portlets developed for DX 8.5 and 9.5 running on WAS 9.0 and later:

    -   `import com.ibm.faces20.portlet.httpbridge.BridgePortletRequestWrapper;`
    -   `import com.ibm.faces20.portlet.httpbridge.BridgePortletResponseWrapper;`
    -   `import com.ibm.faces20.portlet.httpbridge.BridgeRenderRequestWrapper;`
    -   `import com.ibm.faces20.portlet.httpbridge.BridgeRenderResponseWrapper;`
    -   `import com.ibm.faces20.portlet.httpbridge.PortletContextWrapper;`
    -   `import com.ibm.faces20.portlet.httpbridge.PortletFacesContextWrapper;`
    -   `import com.ibm.faces20.portlet.util.BridgeConfigUtils;`
    -   `import com.ibm.faces20.portlet.FaceletPortletViewHandler;`


???+ info "Related information"
    - [JavaServer Faces implementation](../../../../deployment/manage/migrate/next_steps/post_mig_activities/addon_integration_task/mig_post_jsf.md)

