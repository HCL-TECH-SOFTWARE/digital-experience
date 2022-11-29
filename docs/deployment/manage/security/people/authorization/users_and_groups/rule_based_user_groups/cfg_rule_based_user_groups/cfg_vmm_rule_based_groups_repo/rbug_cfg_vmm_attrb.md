# Configuring the rule attribute for the Group

In addition to the repository configuration, you must define the rule attribute as a new attribute for the entity type Group.

1.  Edit the file wimxmlextension.xml in the directory `[PortalServer\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)/config/cell\_name/wim/model/`. If the file does not exist yet, create it.

2.  Add the following attribute definitions:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <sdo:datagraph xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xmlns:sdo="commonj.sdo" 
                   xmlns:wim="http://www.ibm.com/websphere/wim">
    	 <wim:schema>
        ...
          <wim:propertySchema nsURI="http://www.ibm.com/websphere/wim" dataType="String"
               multiValued="false"
               propertyName="rule">
              <wim:applicableEntityTypeNames>Group</wim:applicableEntityTypeNames>
          </wim:propertySchema>
        ...
       </wim:schema>
    </sdo:datagraph>
    ```

    See the related links section for information about adding attributes.

3.  Restart the portal server for the VMM configuration changes to become effective. In a portal cluster environment, synchronize the changes and restart the complete cluster, including deployment manager and node agents.



**Related information**  


[Adding attributes](/digital-experience/deployment/manage/security/people/authentication/user_registry/vmm_atts/add_attributes)

