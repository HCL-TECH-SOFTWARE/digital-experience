# Deploying portlets common across clusters

You can deploy portlets as a standard EAR through the Deployment Manager and then notify each cluster. A predeployed application can only be updated by updating the EAR file in IBM WebSphere Application Server and subsequently updating the contained WAR file by using the XML configuration interface. Cross updates of a predeployed EAR file with a real WAR and vice versa are not possible. You can also install it as a standard portlet within one cluster, then map the underlying enterprise application to the other cluster and use the XML configuration interface to notify the other cluster members. For simplicity and ease of administration, common portlet applications should be administered as standard EARs first, so there is no need to remember which cluster owns the original deployment.

Perform the following steps to deploy common portlets:

1.  Install the EAR through Deployment Manager, using either the **Applications > Install New Application** option within the WebSphere® Integrated Solutions Console, or the AdminApp install command within the `wsadmin` scripting client. This allows portlets to be combined with other EAR resources, such as web services, Enterprise Java Beans, or other web modules.

2.  Map the application to each cluster where it is to run, using either the MapModulesToServers option of the AdminApp install command within the `wsadmin` scripting client, or the **Map modules to servers** option under that application’s entry under **Applications > Enterprise Applications**.

3.  Synchronize the new application with each node in all clusters, and then start the application in each cluster. By default, synchronization will automatically occur with each node hosting servers and cluster members, or both, to which the enterprise application is mapped.

4.  Use the XML configuration interface to import a portlet definition into each cluster using the predeployed attribute, where the `<url>` element of the `<web-app>` points to the binaries directory where the portlet application's WAR contents are contained. Choose only one cluster member in a cluster against which to run the XML configuration interface, and as a result all cluster members receive the update.


Here is an example XML definition for importing a predeployed portlet application using the XML configuration interface:

```
<web-app action="update" active="true" uid="com.ibm.wps.portlets.welcome" predeployed="true">
    <url>file://c:/ibm/WebSphere/PortalServer/installedApps/WelcomePortlet.ear/WelcomePortlet.war</url>

    <!-- The context root that is assigned to the web application of the portlet application 
         in the predeployed EAR file (reference: application.xml). The context-root 
         in this XML file must match with the context-root in the application.xml file.   -->
    <context-root>my/context/root</context-root>

    <!-- The name that is assigned to the application in the predeployed EAR file 
         (reference: application.xml). -->
    <display-name>My_Web_App</display-name>

    <portlet-app action="update" active="true" uid="com.ibm.wps.portlets.welcome.1">
        <portlet action="update" active="true" objectid="theIbmPortletApiPortlet" name="Welcome Portlet"/>
    </portlet-app>
</web-app>

```

**Related information**  
[The XML configuration interface](../../../../../extend_dx/development_tools/portal_admin_tools/xml_config_interface/index.md)