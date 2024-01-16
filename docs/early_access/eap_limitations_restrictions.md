# Limitations and restrictions

This topic provides the limitations and restrictions when using the Early Access version. 

The Early Access version of the Open Liberty Portlet Container is provided for evaluation use in a non-production environment. This version is not supported through the HCL product support channels. Go to HCL Digital Experience Early Access Q&A Forum for instructions on how to provide and discuss your feedback. 

The Early Access Milestone 1 Open Liberty Portlet Container has the following limitations:

- **No persistence of configuration**: To install portlet applications or change the configuration in a non-temporary way, you must create your own image from the HCL-supplied one with your applications and settings. For steps on how to create your image, see [](). This limitation is a design decision and it may continue into the released product, depending on the customer feedback.
- **Only unauthenticated access to portlets** is available over WSRP.
- **JavaServer Faces (JSF) and Struts portlets cannot be used** on the Open Liberty Portlet Container.

The Early Access Milestone 1 Open Liberty Portlet Container has the following restrictions based on the Helm charts supplied and what has been tested by HCL:

- Open Liberty Portlet Container should be installed into an existing DX Kubernetes namespace where the deployment is set up for non-production use.
- Only a single Open Liberty Portlet Container pod should be created per deployment.
- Renaming the JSESSIONID cookie is not supported.
- By default, the Open Liberty Portlet Container is not accessible from outside the Kubernetes environment. Portlets should be accessed only through the co-located DX environment using WSRP.
