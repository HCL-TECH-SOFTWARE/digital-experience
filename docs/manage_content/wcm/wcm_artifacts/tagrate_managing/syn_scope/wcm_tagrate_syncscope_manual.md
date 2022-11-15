# Synchronizing scopes manually

If automatic synchronization is not enabled for the scopes that are used for web content, or if you want to run synchronization outside of a scheduled synchronization period, you can manually start the synchronization process.

1.  To manually run synchronization, run the `cp-sync` configuration task or submit an XML request to the portal by using the XML configuration interface.

    -   To run synchronization with a configuration task, run the following task from the wp_profile_root/ConfigEngine directory:
        -   Windows™: `ConfigEngine.bat cp-sync -DWasPassword=password -DPortalAdminPwd=password`
        -   UNIX™Linux™: `./ConfigEngine.sh cp-sync -DWasPassword=password -DPortalAdminPwd=password`

    -   Create an XML request file and submit it using the xmlaccess command. Here is an example of a request you can use to start synchronization:

        ```
        <?xml version="1.0" encoding="UTF-8"?> 
        <request type="update" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
          xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd"> 
          <portal action="locate"> 
            <task action="create" name="com.ibm.portal.cp.SynchronizationTask"/> 
          </portal> 
        </request>
        ```

???+ info "Related information"  
  - [Working with the XML configuration interface](../../../../../extend_dx/development_tools/portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md)

