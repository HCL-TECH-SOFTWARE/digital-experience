# Limitations and restrictions



The Early Access version of the Open Liberty Portlet Container is provided for evaluation use in a non-production environment and is not supported through the HCL product support channels.  See the Help Center topic HCL Digital Experience Early Access Q&A Forum below for instructions to provide and discuss your evaluation use feedback. 


The Early Access Milestone 1 Open Liberty Portlet Container has the following main limitations:


No persistence of configuration: To install portlet applications or change the configuration in a non-temporary way, customers should create their own image from the HCL-supplied one with their own applications and settings (see below for how to do this). This "limitation" is really a design decision and it may continue into the released product, depending upon customer feedback.
Only unauthenticated access to portlets is available over WSRP
JavaServer Faces (JSF) and Struts portlets cannot be used on the Open Liberty Portlet Container


The Early Access Milestone 1 Open Liberty Portlet Container also has the following restrictions based on the Helm charts supplied and what has been tested by HCL:


It should be installed into an existing DX Kubernetes namespace where the deployment is set up for non-production use
Only a single Open Liberty Portlet Container pod should be created per deployment
There is no support for renaming the JSESSIONID cookie
The Open Liberty Portlet Container is not by default accessible from outside the Kubernetes environment, so portlets should be accessed only via the co-located DX environment using WSRP
