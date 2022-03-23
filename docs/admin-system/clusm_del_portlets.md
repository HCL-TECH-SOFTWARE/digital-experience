# Deleting portlets common across clusters 

You can use the XMLAccess task to delete a portlet common across clusters. If the portlet was predeployed as a standard EAR, then each cluster must be first notified of the portlet removal before the EAR can be uninstalled. The administrator must use the XMLAccess application to import a <web-app\> definition similar to the ones used in the previous two sections, except the action is to delete the definition instead of update it.

1.  Use XMLAccess to delete the portlet from the portal database; for example: <web-app action="delete" active="true" uid="com.ibm.wps.portlets.welcome" /\>

2.  Open the Deployment Manager WebSphere® Integrated Solutions Console.

3.  Click **Applications** \> **Application Types** \> **WebSphere enterprise applications**.

4.  Select the enterprise application definition.

5.  Click **Uninstall**.


**Parent topic:**[Managing portlets in your cluster ](../admin-system/manage_portlets.md)

