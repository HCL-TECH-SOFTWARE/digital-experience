# Java 2 security

Java 2 (J2SE) security provides a policy-based, fine-grain access control mechanism that increases overall system integrity by checking for permissions before allowing access to certain protected system resources. J2SE security allows you to set up individual policy files that control the privileges assigned to individual code sources. If the code does not have the required permissions and still tries to execute a protected operation, the Java™ Access Controller will throw a corresponding security exception.

Policy files assign individual permissions to individual code sources. The syntax and semantics of the policy files are defined in the Java Language Specification. WebSphere® Application Server uses a specific set of policy files to set up Java 2 Security. The following table contains information on the policy files and their protection scope:

|Default location and policy file|Protection scope|
|--------------------------------|----------------|
|AppServer_root/java/jre/lib/security/java.policy|This is the root policy file that contains permissions for all the processes launched by WebSphere Application Server.|
|wp_profile_root/properties/server.policy|This policy file grants default permissions to all product servers.|
|wp_profile_root/properties/client.policy|This policy file grants default permissions for all of the product client containers and applets on a node.|
|wp_profile_root/config/cells/cell_name/nodes/node_name/spi.policy|This template is for the Service Provider Interface (SPI) or the third party resources that are embedded in the product. The default permission is `java.security.AllPermissions`.|
|wp_profile_root/config/cells/cell_name/nodes/node_name/library.policy|This policy grants default permissions (empty) to code contained in the shared library (Java library classes) to use in multiple product applications.|
|wp_profile_root/config/cells/cell_name/nodes/node_name/app.policy|This policy grants default permissions to all enterprise applications running on this node in this cell.|
|wp_profile_root/config/cells/cell_name/applications/ear_file_name/deployments/application_name/META-INF/was.policy|This policy assigns permissions to a specific enterprise application, imbedded within EAR:/META-INF/was.policy.|
|rar_filename/META-INF/was.policy.RAR|This file can have a permission specification that is defined in the ra.xml file. The ra.xml file is embedded in the RAR file.|

All code artifacts, installed with the HCL Digital Experience product, run with java.security.AllPermission specified either in the server.policy file for the portal shared libraries or in the individual was.policy files for the individual portlets.

Portlets that are installed on HCL Digital Experience after installation can bring along their own was.policy files defining the allowed interactions of the portlet code with the system resources; see Portlet concepts for additional information.

!!!note
    The application server searches for was.policy files in the enterprise application archive rather than the Web application archive comprising a portlet. Therefore, the portal server copies was.policy from the appname.war/META-INF directory to the generated appname.ear/META-INF directory during deployment of a portlet WAR file.


???+ info "Related information"  
    -   [Portlet concepts](../../../extend_dx/portlets_development/wpsbpc.md)
    -   [Java 2 security](https://www.ibm.com/docs/en/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/csec_rsecmgr2.html)

