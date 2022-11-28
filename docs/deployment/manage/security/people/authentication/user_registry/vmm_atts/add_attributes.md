# Adding attributes

The VMM is configured with a default attribute schema that might not be compatible with your LDAP server. Add attributes to extend the VMM attribute schema and then map them between HCL Digital Experience and your user registry.

You can add multiple attributes at one time by creating an XML file that includes the properties and attributes for each property. The XML file is referred to as a deployment file. Create the XML file before you start this procedure.

The following sample is an XML deployment file that is used to add three properties.

```

	<wplc-add-property>
		<resource propertyName="attribute\_name\_1" dataType="Int" entityTypes="Group" multiValued="true" />
		<resource propertyName="attribute\_name\_2" dataType="String" entityTypes="PersonAccount" multiValued="true" />
		<resource propertyName="attribute\_name\_3" dataType="Base64Binary" entityTypes="Group,PersonAccount" multiValued="false" />
	</wplc-add-property>

```

The resource tag includes attributes that are specific for the property: propertyName, dataType, entityType, and multiValued.

1.  This task requires server connections.

    -   In a stand-alone environment, ensure that the WebSphere\_Portal server is running.
    -   In a clustered environment, stop all application servers on the system. Ensure that the WebSphere\_Portal server is stopped. Then, start the node agent and deployment manager servers.
    
2.  Install the enterprise archive (.ear) file on WebSphere® Application Server:

    1.  Open a command line.

    2.  Change to the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

    3.  Run the following task:

        |Environment|Task|
        |-----------|----|
        |Stand-alone environment| - AIX® HP-UX Linux™ Solarisz/OS®: ./ConfigEngine.sh wp-la-install-ear -DWasPassword=password<br> - IBM® i: ConfigEngine.sh wp-la-install-ear -DWasPassword=password<br> - Windows™: ConfigEngine.bat wp-la-install-ear -DWasPassword=password|
        |Clustered environment| -  AIX HP-UX Linux Solarisz/OS: ./ConfigEngine.sh wp-la-install-ear -DWasPassword=dmgr\_password -DServerName=dmgr\_server\_name -DNodeName=node\_name<br> - IBM i: ConfigEngine.sh wp-la-install-ear -DWasPassword=dmgr\_password -DServerName=dmgr\_server\_name -DNodeName=node\_name<br> - Windows: ConfigEngine.bat wp-la-install-ear -DWasPassword=dmgr\_password -DServerName=dmgr\_server\_name -DNodeName=node\_name<br> Where the default value for dmgr\_server\_name is dmgr. You can find the dmgr\_server\_name value in the WebSphere Integrated Solutions Console. Go to **System administrator** \> **Deployment Manager** \> **Configuration tab** \> **General Properties** \> **Name**.<br> Where node\_name is the name of the node where the deployment manager is located. You can find the node\_name value in the WebSphere Integrated Solutions Console. Go to **System administrator** \> **Deployment Manager** \> **Runtime tab** \> **General Properties** \> **Node Name**.|

3.  Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](../../../../../stopstart.md).

4.  Use a text editor to open the wkplc.properties file in the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory.

5.  Find the *VMM Property Extension Properties* heading. You can either add a single attribute or multiple attributes.

    -   To add a single attribute, update the following properties with information about the property to add.
        -   **la.providerURL**

            -   **Description**

                The remote endpoint where your portal server or deployment manager installation is available. Check the value for hostname:port. The port points to the BOOTSTRAP\_ADDRESS port of either the WebSphere\_Portal server or the deployment manager. The deployment manager is used in a clustered environment.

        -   **la.propertyName**

            -   **Description**

                The name of the property that you are adding.

        -   **la.entityTypes**

            -   **Description**

                This value is a list of entity types that the new property is applicable to. If you need to enter multiple values, use a comma to separate each value, for example "value1,value2".

            -   **Valid values**

                Group

                PersonAccount

        -   **la.dataType**

            -   **Description**

                Defines the type of data that is stored in the attribute that is being created. If this attribute is mapped to LDAP, this data type must match the corresponding attribute type in LDAP. Consult your LDAP administrator if you are unsure of the data types in LDAP. If this attribute is stored in the VMM property extension database, the data type must match the corresponding attribute type as defined in VMM's database.

                While it is possible to add attributes of different types to VMM, the Registration/Edit My Profile Portlet is only capable of working with attributes of type String and Int. If you need UI support for other types, you would need your own custom form or portlet that can process those types. Portal does not have a UI that reads or updates group attributes. The one exception is the UI that is used to create a group.

            -   **Valid values**

                String

                Int

                DateTime

                Base64Binary

                IdentifierType

                Boolean

                Long

                Double

                Short

        -   **la.multiValued**

            -   **Description**

                Defines if the property can contain multiple values or not.

    -   To add multiple attributes, update the following properties:
        -   **la.providerURL**

            -   **Description**

                The remote endpoint where your portal server or deployment manager installation is available. Check the value for hostname:port. The port points to the BOOTSTRAP\_ADDRESS port of either the WebSphere\_Portal server or the deployment manager. The deployment manager is used in a clustered environment.

        -   **la.deployfile**

            -   **Description**

                Use this property when you want to create multiple properties by using a single ConfigEngine operation. Specify the path and name of the XML file that contains the properties that you want to add. You can specify a path that is relative to the ConfigEngine directory or the fully qualified file system path. If you specify a value for this property, do not specify a value for la.propertyName, la.dataType, or la.Multivalued.

                The following is a sample of an XML deploy file that is used to add three properties.

                ```
                
                						<wplc-add-property>
                						   <resource propertyName="attribute_name_1" dataType="Int" entityTypes="Group" multiValued="true" />
                						   <resource propertyName="attribute_name_2" dataType="String" entityTypes="PersonAccount" multiValued="true" />
                						   <resource propertyName="attribute_name_3" dataType="Base64Binary" entityTypes="Group,PersonAccount" multiValued="false" />
                						</wplc-add-property>
                						
                ```

                The resource tag includes attributes that are specific for the property: propertyName, dataType, entityType, and multiValued.

6.  Save your changes to the wkplc.properties file.

7.  Run the wp-add-property task to add a property that maps to an attribute in your user registry. If you are defining a new property to store in the property extension database, run wp-add-la-property.

    !!!note
        This task calls an EJB that must authenticate against WebSphere Application Server. Depending on the configuration in the sas.client.props file, you might receive a prompt that asks for your user ID and password. Enter the WebSphere Application Server user ID and password.

    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh wp-add-property -DWasPassword=password
    -   IBM i: ConfigEngine.sh wp-add-property -DWasPassword=password
    -   Windows: ConfigEngine.bat wp-add-property -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh wp-add-property -DWasPassword=password

8.  Stop and restart the appropriate servers to propagate the changes.



???+ info "Related information"
    - [Querying the defined attributes](man_attributes.md)
    - [Configuring the rule attribute for the Group](../../../authorization/users_and_groups/rule_based_user_groups/cfg_rule_based_user_groups/cfg_vmm_rule_based_groups_repo/rbug_cfg_vmm_attrb.md)

