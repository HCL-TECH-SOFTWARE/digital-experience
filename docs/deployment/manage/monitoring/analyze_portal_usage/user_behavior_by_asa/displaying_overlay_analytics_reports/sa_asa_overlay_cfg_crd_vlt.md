# Configuring a Credential Vault for overlay reports

To access the IBM Coremetrics Web Analytics system, you have to store your user information in a Credential Vault slot. If you do not do this, the portal overlay reports cannot show data from the Coremetrics system.

You can set up the Credential Vault by one of the following three methods:

-   Manually by using the Credential Vault portlet in the section for Access and Managing credential information of the portal administration. For details, refer to the portlet help about *Managing credential information* and *Adding a vault slot*.
-   By using the XML configuration interface portlet. For details refer to the Import XML portlet help *Importing an XML configuration file*.
-   By importing an XML configuration interface script. For details, refer to the topics about working with the portal XML configuration interface.

Also refer to *Portlet authentication*.

Make sure you store the following Coremetrics® user information:

-   The Coremetrics client ID
-   The Coremetrics user name
-   The Coremetrics authentication key.

!!!note "Notes"
   1.  The Credential Vault slot used for storing the user information must have the slot name `com.ibm.portal.asa.coremetrics.slot` .
   2.  In the credential slot, you need to enter the Coremetrics user name and client ID, separated by a hash sign \( `**\#**` \), either as a shared user ID in the portal Administration user interface, or as an `external-id` in the XML configuration interface script.<br>
   For example: If you have a Coremetrics user name `Bob` and a Coremetrics client ID `123456789`, enter these values as `"Bob#123456789"` in the credential slot. Here is a sample XML configuraion interface script for creating required Credential Vault entries:

```
<request    
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"    
   xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd"    
   type="update" create-oids="true">        
   <!-- Sample for updating the Credential Vault. 
        This script creates a new segment containing one slot in the portal Credential Vault.
        The credentials (user ID and password pairs) that are stored in the vault cannot be 
        accessed by using the XML configuration interface. You can only set the credentials 
        by using the portal administration portlets for the Credential Vault. -->   
   <portal action="locate">           
      <credential-segment action="update" adapter-type="default" 
                          name="com.ibm.portal.asa.coremetrics.segment" user-mapped="false">
         <description>Segment containing credentials for Coremetrics</description>          
         <credential-slot action="update" name="com.ibm.portal.asa.coremetrics.slot" 
                          active="false" system="true" resource="none" 
                          secrettype="userid-password">                
            <localedata locale="en">                    
               <description>Credentials for accessing the CoreMetrics server</description>
               <keywords>CoreMetrics</keywords>      
            </localedata> 
            <password-secret action="create" user="**user_id**" 
               external-id="**coremetrics_user_name**#**coremetrics_client_id**">**coremetrics_auth_key**
            </password-secret>            
         </credential-slot>        
      </credential-segment>    
   </portal>
</request>

```

In the sample XML script, replace the following variables with your actual Coremetrics user data values:

-   **user_id**

    Replace this variable with the user ID that is defined under the Resource Environment Provider **WP_VaultService** in the entry `systemcred.dn` .

-   **coremetrics_user_name**

    Replace this variable by your Coremetrics® user name.

-   **coremetrics_client_id**

    Replace this by your Coremetrics® client ID.

-   **coremetrics_auth_key**

    Replace this by your authentication key used by Coremetrics®. This allows URL queries to the Coremetrics® system.


???+ info "Related information"  
   -  [The XML configuration interface](../../../../../../extend_dx/development_tools/portal_admin_tools/xml_config_interface/index.md)
   -  [Working with the XML configuration interface](../../../../../../extend_dx/development_tools/portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md)
   -  [Importing pages or page hierarchies by using the XML Import portlet](../../../../../../extend_dx/development_tools/portal_admin_tools/xml_config_interface/working_xml_config_interface/using_admin_portlets_for_xml_config/adxmltsk_portlets_imp.md)

