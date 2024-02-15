# Deploying Java Platform, Enterprise Edition resources

You can manually predeploy portlet application WAR files by using the WebSphere Integrated Solutions Console and later register them into HCL Portal, together with other Java Platform, Enterprise Edition resources and artifacts.

Portlet applications are usually packaged into single WAR files. These WAR files can be directly deployed into the portal by using portal administration means. For example, the Manage Web Modules portlet or the XML configuration interface. The portal administration functions manage the correct deployment and configuration into both WebSphere® Application Server and HCL Portal.

You might want to deploy portlet applications together with EJBs, or bundle several WAR files into the same EAR file, or work with similar scenarios. For this type of requirement HCL Portal provides the predeployed mode with the [XML configuration interface](../../../deployment/manage/portal_admin_tools/xml_config_interface/index.md). It allows you to configure portlet applications into the portal that you predeployed into the application server as part of a larger EAR file.

You deploy the EAR file into the application server by using the application server administration interfaces, such as the WebSphere Integrated Solutions Console or the wsadmin command-line tool. When you deploy the EAR file into the application server, you can use the portal XML configuration interface to run the portal specific configuration steps that are required to configure the available portlet applications.

1.  Bundle the portlet applications that you want to register together with other Java Platform, Enterprise Edition resources as an Enterprise Application Archive \(EAR file\). For details about how to do this procedure refer to the correct version of the WebSphere Application Server product documentation: [https://www.hcltechsw.com/wps/portal/about/welcome](https://www.hcltechsw.com/wps/portal/about/welcome).

2.  Deploy this EAR file into WebSphere Application Server. To do this step, use the wsadmin command-line tool or the WebSphere Integrated Solutions Console. Consult the WebSphere Application Server product documentation for details about how to do this step. Take a note of the target directory to which you deploy the EAR file; this step is needed for creating the XML file in the next step. Also, make sure that the web modules in the EAR file are deployed with the same server and virtual host mappings as the portal.

3.  Create a portal XML script file that deploys and configures the portlet applications that are deployed with the EAR file. For a sample XML file for deploying and configuring a predeployed portlet, refer to RegisterPreDeployedEAR.xml in the [Sample XML configuration files](../../../deployment/manage/portal_admin_tools/xml_config_interface/xml_config_ref/admxmsmp.md) topic.

4.  Run the XML script by using the portal XML configuration interface.


After you complete these steps, the portlet is ready for use.

!!! note
    1.  You can register predeployed applications into the portal only by using the XML configuration interface. When you register a predeployed application, the Manage Web Modules portlet shows this application.
    2.  You can later use the portal administration portlets to remove the portlet definitions from the portal database. However, this process does not remove the EAR file from WebSphere Application Server.
    3.  You can update a predeployed portlet application only by using the XML configuration interface.
    4.  You cannot update a deployed portlet application WAR file with a predeployed EAR file and vice versa. If you want to change between the two types of files, you must delete the existing portlet application and deploy the new one. However, deleting the existing portlet application also deletes all configuration data of that application. A predeployed application can be updated only by updating the EAR file in WebSphere Application Server and subsequent update of the contained WAR file in portal by using the XML configuration interface. Cross updates of a predeployed EAR file with a real WAR and vice versa are not possible.
    5.  The WebSphere Application Server administrator must take care of correctly configuring the dispatch mechanisms for these applications.

For more information about the XML configuration interface and how to use it, refer to [XML configuration interface](../../../deployment/manage/portal_admin_tools/xml_config_interface/xml_config_ref/admxmsmp.md). The sample XML file RegisterPreDeployedEAR.xml shows you an example for deploying and configuring a predeployed portlet.

The following table shows the differences between WAR and EAR deployment:

|Affected portal area|WAR file|Predeployed EAR file|
|--------------------|--------|--------------------|
|Portlet application|The portlet application is provided as WAR file. The portal configuration is read directly from the file stream. The WAR file is deployed into the application server by the portal.|The portlet application is already extracted and deployed into the application server as part of the EAR file. The portal server reads the available portal configuration information \(portlet.xml, and so on\) from the location where the contained WAR file was extracted to.|
|Context Root|The context root is assigned by the portal during WAR deployment.|The context root is assigned by the EAR developer and stored in the file application.xml. You must ensure that the context root that you specify when you register the portlet matches the one specified in the EAR application.xml. \(refer to the sample XML file RegisterPreDeployedEAR.xml.|
|Display name|The display name is assigned by Portal during WAR deployment.|The display name is assigned by the EAR developer and stored in the file application.xml.|
|WebSphere Application Server policy for portlet applications|The policy is stored in the WAR file and promoted to the EAR file by the portal during WAR deployment.|The policy is stored in the EAR file.|
|Portlet administration|You administer WAR files by using the XML configuration interface and the administration portlets.|You can register EAR files only by using an XML script with predeployed mode. You can remove EAR files by using either the administration portlet or an XML script.|


???+ info "Related information"
    - [Sample XML configuration files](../../../deployment/manage/portal_admin_tools/xml_config_interface/xml_config_ref/admxmsmp.md)

