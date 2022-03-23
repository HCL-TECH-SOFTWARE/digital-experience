# Multiple cluster portlet deployment 

Although portlets are a type of enterprise application, portlet deployment is typically done through HCL Portal. If done directly to WebSphere Application Server, HCL Portal must be notified. HCL Portal maintains configuration information that is extracted from the portlet descriptor \(portlet.xml\) during portlet deployment.

If a portlet is deployed through HCL Portal, it first takes whatever configuration information it needs from the portlet WAR file. Then, it generates a unique object ID for this portlet. HCL Portal then wraps the portlet WAR within an EAR definition, giving it a name that is based on the display name, suffixed with the generated object ID. It guarantees that the underlying enterprise application name is unique to this portal. If this portal is clustered, the new enterprise application is common to this cluster, but unique from any other cluster in the cell. The object ID is guaranteed to be unique.

If the portlet was deployed during initial installation, then the object ID might be the same as other portal installations based on the same version of HCL Portal. When multiple clusters are defined in the same cell that is based on this version, many portlets are common between the clusters. These portlets share object IDs.

**Note:** When you deploy and activate portlets, while you are logged in to HCL Portal, you must log out and log back in to see the updated status for the portlets.

**Parent topic:**[Managing portlets in your cluster ](../admin-system/manage_portlets.md)

