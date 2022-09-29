# Configuring Volt MX Foundry to connect to Digital Experience Digital Data Connector

This section provides the steps on how to configure Volt MX Foundry to connect via DX DDC.

## Prerequisite

You must have access to the Volt MX Foundry Console via Volt MX Cloud or On-Premise instance. For more information, refer to the [Volt MX  cloud service](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Accessing_VoltMX_MBaaS_Portal.html) and [Volt MX on-premise service](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/How_to_access_VoltMX_Foundry_Portal_on-Prem.html) documentation. In this sample, we will use the cloud service that Volt MX offers.

## Create new integration service with Volt MX Foundry

Perform the following steps to use the new integration service with Volt MX Foundry cloud service:

1.  Go to [https://manage.hclvoltmx.com](https://manage.hclvoltmx.com) to access paid cloud resources or [https://manage.demo-hclvoltmx.com](https://manage.demo-hclvoltmx.com) to access your trial environment.

    ![](../../../../assets/Volt_MX_Foundry_Login_Screen.png "Log in to Volt MX Foundry Cloud Service")

2.  Click the **Apps** icon, and then click **Add New**.

    ![](../../../../assets/Volt_MX_Foundry_Add_New_Apps.png "Create new app from Volt Foundry Portal")

3.  Create a new API endpoint via **Integration Service**. Click **Integration**, and then click **Configure New**.

    ![](../../../../assets/Volt_MX_Foundry_Create_Integration.png "Create new API from Integration Service")

4.  Configure the service definition. Enter a **Name**, then select **JSON** as the **Service Type**, and enter the **Base URL**. Click **Save & Add Operation**.

    ![](../../../../assets/Volt_MX_Foundry_Service_Definitions.png "Fill up the Service Definition")


5.  Add an **Operation** for the service that we created. First, enter a **Name**, then under **Operation Security Level**, select **Anonymous App Users** or **Public** since it is the only option right now that is supported in DDC. You can modify the **Target URL** if the URL needs modification. If you include a parameter in the Target URL, you must define it in the **Request Input**, as shown in the example below. Then in the **Advance** section, click **Front End API**. Under **Resource Method**, select **GET** since it's the only method currently supported by the DDC generic JSON plugin.

    ![](../../../../assets/Volt_MX_Foundry_Add_Operation.png "Add Operation for the Service")

6. Adding **Response Output**. Click the **Response Output** tab, then click **Add Parameter**. After clicking, a row will appear on the table. Add the **Name**, then the **Path** or the JSON Path. The path is based on the response of the target URL you define in Service Definition. Try the service by clicking **Save And Fetch Response**. If everything looks fine, then click **Save Operation**.

    ![](../../../../assets/Volt_MX_Foundry_Response_Output_And_Testing.png "Add JSON Path and Testing the Service")

!!!note
    You do not need to map all the responses in the  **Response Output** and can only map what you need. Make the response output flat as possible, as shown in the sample above. The values you set here will be reused as properties in DDC.

## Publish and Test integration service with Volt MX Foundry

1. Under the **Publish** tab, click the **Publish** button.

    ![](../../../../assets/Volt_MX_Foundry_Publish.png "Publishing the Integration Service")

2. Once the App is published, you can now test the API endpoint by using **Developer Portals**. Click **Developer Portals** icon on the left side, then click on the link where your environment is located. This will open a new tab in your browser.

    ![](../../../../assets/Volt_MX_Foundry_Developer_Portals.png "Accesing the Developer Portals")

3. View the endpoint we created. On the Developer Portals, click **API**, then under the App you created, there is a dropdown button. Click the **View** link on the integration service you have created. This will redirect you to the Swagger UI page where you can try your Endpoint.

    ![](../../../../assets/Volt_MX_Foundry_View_The_Endpoint.png "Viewing the Endpoint we have created")

4. Test the endpoint that you created. Before testing the endpoint, you must authorize the call since you chose **Anonymous App Users** during the creation of the operation. Click the **Authorize** button and put in the username field the **App Key** and in the password field the **App Secret**. Both values can be found on the Swagger page. On the Swagger page, you will see the service that you created, then click the dropdown beside it, then click the **Try Out** button. Once all the fields are filled up, you can now execute the API. There should be a response when everything is set up properly.

    ![](../../../../assets/Volt_MX_Foundry_Executing_API.png "Executing the API")

!!!note
    If you created your Operation **Public** in Operation Security Level you dont need any authorization.

!!!note
    You will need the information on this page later during the setup to configure DDC accordingly.

## Creating Credential Vault Slot for the Volt MX Foundry Endpoint

If you chose **Anonymous App Users** for Operation Security Level, you need to store the **App Key** and **App Secret** in Digital Experience. You can achieve this by using the Credential Vault. Perform the following steps:

1. We first need to get the values for **App Key** and **App Secret**. We can get those values in Volt MX Foundry by going to **Apps**, then selecting the App that we have created, then clicking the **Publish** tab, and then clicking the **App Key** icon. A dialog box should appear.

    ![](../../../../assets/Volt_MX_Foundry_Access_Key_And_Secret.png "Getting the App Key and the App Secret")

2. After the dialog appears, we can now see the App Key and App Secret of our created App. We can copy its value by hovering over the App Key and App Secret Value, and after hovering, we should see a **Copy** button. Click the Copy button.

    ![](../../../../assets/Volt_MX_Foundry_Key_And_Secret_View.png "Viewing and Copying the App Key and the App Secret")

3. After getting the values of **App Key** and **App Secret**, we can now store them in Digital Experience. Go to **Practitioner Studio**, then **Administration**

    ![](../../../../assets/DX_Practitioner_Studio_Admin.png "Practitioner Studio")

4. On the Administration page, click **Security** then **Credential Vault**. The Credential Vault management portlet is shown. 

    ![](../../../../assets/Credential_Vault.png "Credential Vault Portlet")


5. Select **Add a Vault slot**. The window for creating a vault slot is shown. 
    a. Add a **Vault slot name**. This becomes the slot identifier \(slot ID\), hence provide a unique name. 
    b. Select the **Vault Resource**  and **Vault Segment**. 
    c. Set the Vault slot as **Shared**.
    d. Set the user ID as the **App Key** and password as the  **App Secret**. 
    e.  Click **OK** button to save the changes. There should be a message that the vault slot was created successfully.

    ![](../../../../assets/Credential_Vault_Fill_Up.png "Creating Credential Vault Slot")

## Creating Outbound Connection Policy

Since we already have the Credential Vault slot, we can now configure an outbound connection policy.

1. Create an xml file on your local machine and modify it according to your needs. For more information, refer to the [Adding an outbound connection policy](../../portlets_development/web2_ui/outbound_http_connection/cfg_outbound_http_connections/sample_admin_tasks/outbhttp_cfgsmptsk_add_ob_conn_plcy.md) topic.

You can use this sample outbound policy as a base:
``` xml
<?xml version="1.0" encoding="UTF-8"?>
<proxy-rules xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:noNamespaceSchemaLocation="http://www.ibm.com/xmlns/prod/sw/http/outbound/proxy-config/2.0">  

   <variables>
        <!-- Note: The '.url' at the end of the name is not required but good practice to follow.-->
      <dynamic-policy name="demo-volt-mx-foundry-service.url">
        <!-- Step 1. Add the URL pattern. Use the base URL of your service. You can view it in the Developer Portal > API > your App > View. You should see a Swagger UI Page -->
        <value>https://hcl-dx-dev.hclvoltmx.net/services/account/*</value>
      </dynamic-policy>
   </variables>  
     
   <policy name="demo_volt_mx_foundry_service" url="{$demo_volt_mx_foundry_service.url}" basic-auth-support="true">
      <actions>
        <!-- Step 2. Add the HTTP Method.  We will use GET since this is what we defined when we created the operation of our service.-->
         <method>GET</method>
      </actions>    
        
      <!-- Step 3. Add the credential vault slot that we have created. The vault slot name is also the vault slot id hpaa.slotid you will need to put in the policy. -->
      
      <meta-data>
         <name>hpaa.authtype</name>
         <value>http-basic</value>
      </meta-data>
      <meta-data>
         <name>hpaa.slotid</name>
         <value>demo-volt-mx-foundry-service</value>
      </meta-data>
      <meta-data>
         <name>forward-credentials-from-vault</name>
         <value>true</value>
      </meta-data>
   </policy>                
</proxy-rules>
```

2. Then you copy the file (for example: `demo_volt_mx_foundry_service_policy.xml`) inside your HCL Digital Experience instance.

3. And deploy the policy using the **Config Engine**: `./ConfigEngine.sh update-outbound-http-connection-config -DWasPassword=password -DPortalAdminPwd=password -DConfigFileName=/tmp/demo_volt_mx_foundry_service_policy.xml`
!!!note
    The location of `ConfigEngine.sh` is based on your deployment. In a default deployment, the location would be `/opt/HCL or WebSphere/wp_profile/ConfigEngine`.

!!!note
    For additional resources regarding this topic, please read [Outbound HTTP connection](../../portlets_development/web2_ui/outbound_http_connection/index.md)

## Adding HTTP Outbound Proxy and Signer Certificate

This allows WCM to trust the external data source and send HTTP requests to it.

Steps to add the target URL and Certificate are as follows:

1. Login to the WAS console.
 
    ![](../../../../assets/WAS_Console_Login_Screen.png "Log in to WAS Console")

2. Click **Resources** from side navigation. Then, click **Resource Environment**, then **Resource environment providers**.

    ![](../../../../assets/WAS_Resource-Environment_Screen.png "Select Resource environment providers")

3. From the resources, find and go inside `WP ConfigService` and click on `Custom Properties`. Add **New** .

    ![](../../../../assets/WAS_Console_WPConfig_Service.png "Wp Config Service and Custom Properties")

4. Add your unique policy by entering name-value pair like in the sample below.

    | Name                                                                | Value                                                         | Type              |
    | --------------------------------------------------------------------| --------------------------------------------------------------| ------------------|
    | wp.proxy.config.urlreplacement.digital_data_connector_policy.ddcDemo| https://hcl-dx-dev.hclvoltmx.net/services/account/*           | String            |

    ![](../../../../assets/WAS_Adding_Unique_Profile.png "WAS Unique Profile configuration")

5. Review and save the changes in master configuration.

    ![](../../../../assets/WAS_Save_In_Master_Configuration.png "Save changes in master configuration")

**if the external data source URI uses https, perform the following steps:**

1. Go back to the side navigation, and click `Security`. Then, click `SSL certificate and key management` then `Key stores and certificates`

    ![](../../../../assets/WAS_Adding_Security_Certificate.png "Key stores and certificates")

2. Click `NodeDefaultTrustStore`.

    ![](../../../../assets/WAS_Default_Trust.png "Default trust store for dockerNode")

3. Click `Signer certificates` and add your external URI certificate by clicking on `Retrieve from port`.

    ![](../../../../assets/WAS_Retrieve_From_Port.png "Manages signer certificates in key stores.")

4. Enter the host, alias, and port 443, and click `Retrieve signer information`.

    ![](../../../../assets/WAS_Retrieve_Signer_Information.png "Makes a test connection to a Secure Sockets Layer (SSL) port and retrieves the signer from the server during the handshake.")

5. Review and save the changes in the master configuration.

    ![](../../../../assets/WAS_Save_In_Master_Configuration.png "Save in master configuration")
6. Restart the server to apply the changes.