# Configuring Volt MX Foundry to connect to Digital Experience DDC

This section provides the steps on how to configure Volt MX Foundry to able to connect through DX DDC.

## Prerequisite

You must have either access Volt MX Foundry Console via Volt MX Cloud or On-Premise instance. You may consult with this link for the [cloud service](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Accessing_VoltMX_MBaaS_Portal.html) and [on-premise service](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/How_to_access_VoltMX_Foundry_Portal_on-Prem.html). In this sample we will use the cloud service that Volt MX offer.

## Create new integration service with Volt MX Foundry

Follow the steps below to new integration service with Volt MX Foundry cloud service:

1.  Go to https://manage.hclvoltmx.com to access paid cloud resources, or https://manage.demo-hclvoltmx.com to access your trial environment.

    ![](../../../../assets/Volt_MX_Foundry_Login_Screen.png "Log in to Volt MX Foundry Cloud Service")

2.  Select **Apps** sidenav. Then, click **Add New**.

    ![](../../../../assets/Volt_MX_Foundry_Add_New_Apps.png "Create new app from Volt Foundry Portal")

3.  Create new API endpoint via **Integration Service**. Then, click **Integration** then **Configure New**.

    ![](../../../../assets/Volt_MX_Foundry_Create_Integration.png "Create new API from Integration Service")

4.  Configure the service definition. Add **Name** then select **Service Type** and Add **Base URL**. Then click **Save & Add Operation**

    ![](../../../../assets/Volt_MX_Foundry_Service_Definitions.png "Fill up the Service Definition")


4.  Add an **Operation** for the service that we created. Add **Name**, then under **Operation Security Level** select **Anonymous App Users** or **Public** since its the only option right now that is supported in DDC and last you can modiy **target URL** if the url need modification (see sample below).  Then in **Advance** section click **Front End API**, under **Resource Method** select the **GET** since its the only method supported in DDC. 

    ![](../../../../assets/Volt_MX_Foundry_Add_Operation.png "Add Operation for the Service")

5. Adding **Response Output**. Click **Response Output** tab then click **Add Parameter** after clicking a row will appear on the table. Add the **Name** then **Path** or the JSON Path. Path is based on the reponse of the target URL you define in Service Definition. Let's try the service by clicking **Save And Fetch Response** and if everything is okay then click **Save Operation**.

    ![](../../../../assets/Volt_MX_Foundry_Response_Output_And_Testing.png "Add JSON Path and Testing the Service")

## Publish and Test integration service with Volt MX Foundry

1. Under **Publish** tab, click **Publish** button.

    ![](../../../../assets/Volt_MX_Foundry_Publish.png "Publishing the Integration Service")

2. Once the App is publish, we can now test API endpoint by using **Developer Portals**. Click **Developer Portals** on the sidenav then click the on link where your enviroment is located. This will open a new tab in your browser.

    ![](../../../../assets/Volt_MX_Foundry_Developer_Portals.png "Accesing the Developer Portals")

3. View the endpoint we creted. On the Developer Portals click **API** then under the App you created there is a dropdown button, click it then **View** link on the integration service you have created. This will redirect you to Swagger Page where you can try your Endpoint.

    ![](../../../../assets/Volt_MX_Foundry_Developer_Portals.png "Viewing the Endpoint we have created")

4. Test the endpoint we created.Before we test the endpoint we created we must Authorize the call since we choose **Anonymous App Users** during the creation of the operation, click the **Authorize** button and put on the username field the **App Key** and on the password field the **App Secret**. Both values can be swagger page. On the swagger page, we will see the service that we created and click the dropdown beside it then click the **Try Out** button. Once all the field is filled up you can now excute the API.

    ![](../../../../assets/Volt_MX_Foundry_Executing_API.png "Executing the API")

Note: If you created your Operation **Public** in Operation Security Level you dont need any authorization.