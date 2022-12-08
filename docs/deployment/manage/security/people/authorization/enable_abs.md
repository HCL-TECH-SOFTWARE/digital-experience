# Enabling Attribute Based Security

Attribute based security for HCL Web Content Manager content is an access filter in the product filter chain. You can extend the access control permission checks for HCL Web Content Manager content beyond the user or group-based decisions. You can define your own criteria. The criteria might involve categories, keywords, textComponents, htmlComponents, or shortTextComponents for an item.

1.  See the topic [Extending HCL Portal class path](../../../../extend_dx/development_tools/ext_wp_classpath/ext_wp_classpath) for where to place your compiled custom code on the Portal filesystem.

2.  Restart the HCL Portal server.

3.  Log in to the WebSphere® Integrated Solutions Console.

4.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

5.  Go to **WP AccessControlDataManagementService** \> **Custom properties**.

6.  Change the **accessControlDataManagement.enableAttributeBasedSecurityFilter** property to true.

7.  Change the **accessControlDataManagement.AccessControlAttributeBasedSecurityImpl** property to the value of the security implementation class in your custom code. For example, enter **com.ibm.portal.ac.AccessControlAttributeBasedSecurityImpl**.

8.  Save your changes.

9.  Restart the HCL Portal server.



