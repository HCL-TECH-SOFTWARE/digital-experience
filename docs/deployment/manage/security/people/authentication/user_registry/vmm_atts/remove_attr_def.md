# Removing attributes

The Virtual Member Manager (VMM) has a limitation. There is no task to update an attribute.

Remove an attribute for any of the following circumstances:

-   You added an attribute to a property extension database that was spelled incorrectly
-   You adapted an attribute to match your LDAP server that was spelled incorrectly
-   Your migration added the attribute

Use caution when you do these steps.

!!!important
    Do not remove attributes that are populated with user values because it can cause inconsistencies.

**Cluster note:** In a clusteredan idle-standby environment, complete these steps on the deployment manager and then resynch the nodes.

1.  Before you configure security, use the IBM® WebSphere® Application Server backupConfig task to create and store a backup of the HCL Digital Experience configuration. Read [backupConfig command](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/rxml_backupconfig.html) for information.

2.  Complete the following steps to remove an attribute that is stored in a property extension database:

    1.  Open the tool that you use to edit your database.

    2.  Verify that your attribute name is available in the LAPROP table.

    3.  Delete the required attributes from the LAPROP table.

    4.  Open the wimxmlextension.xml file in the dmgr\_profile\_root/config/cells/cellname/wim/model directory.

    5.  Locate and delete the propertySchema definition for the attributes that you deleted from the LAPROP table.

        For example:

        ```
            <wim:propertySchema nsURI="http://www.ibm.com/websphere/wim" dataType="String"
                multiValued="true" propertyName="attribute\_name">
              <wim:applicableEntityTypeNames>PersonAccount</wim:applicableEntityTypeNames>
            </wim:propertySchema>
        ```

    6.  Save your changes to the wimxmlextension.xml file.

    7.  Open the wimconfig.xml file in the dmgr\_profile\_root/config/cells/cellname/wim/config directory.

    8.  Locate and delete the attributes or propertiesNotSupported definitions for the attributes that you deleted from the LAPROP table.

        For example:

        ```
        <config:attributes name="attribute_name" propertyName="attribute\_name">
        <config:entityTypes> PersonAccount </config:entityTypes>
        <config:entityTypes> Group </config:entityTypes>
        </config:attributes>
        
        ```

        or

        ```
        <config:propertiesNotSupported name="attribute\_name">
        ```

    9.  Save your changes to the wimconfig.xml file.

    10. Stop and restart all the deployment manager, node agents, and WebSphere\_Portal server to propagate the changes.

3.  Complete the following steps to remove an attribute that is not stored in a property extension database:

    1.  Open the wimxmlextension.xml file.

    2.  Locate and delete the propertySchema definition for the attributes you previously added.

        For example:

        ```
        <wim:propertySchema nsURI="http://www.ibm.com/websphere/wim" dataType="String"
                multiValued="true" propertyName="attribute\_name">
           <wim:applicableEntityTypeNames>PersonAccount</wim:applicableEntityTypeNames>
            </wim:propertySchema>
        ```

    3.  Save your changes to the wimxmlextension.xml file.

    4.  Open the wimconfig.xml file.

    5.  Locate and delete the stanza that corresponds to the custom attribute you deleted from the wimextension.xml file.

        For example:

        ```
        <config:attributes name="attribute_name" propertyName="property_name">
                  		<config:entityTypes>PersonAccount</config:entityTypes>
        	</config:attributes>
        ```

    6.  Save your changes to the wimconfig.xml file.

    7.  Stop and restart the WebSphere\_Portal server.



???+ info "Related information"
    - [Starting and stopping servers, deployment managers, and node agents](../../../../../stopstart.md)

