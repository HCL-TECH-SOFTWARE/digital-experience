
# Deploy MX Portlet into HCL DX

This example shows step by step process of generating the Portlet via VoltMX Iris, Deploying it in HCL DX and verifying

## Create the MX Portlet and deploying in HCL DX

1. Create a new project in VolMX Iris. Refer this [link](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/index.html) for more details.
2. Configure the HCL DX Host details in Iris.
![alt text](image1.png)
3. Once the App is created in Iris, choose build and publish web option from Build menu.
![alt text](image2.png)
4. This will create an MX Portlet with the project name and deploy the same in HCL DX.


## Add MX Portlet to HCL DX and verify
1. Login to the DX Application. 
2. Go to the site menu, turn edit mode On and navigate to the page where the MX Portlet should be added. 
3. click on `Add page components and Application` option
![alt text](image3.png)
4. Search for the deployed portlet in the `Applications` tab and add it to the page.
![alt text](image4.png)
5. Turn off edit mode and verify if the Porlet is getting rendered. If the app contains login page and if user needs to access the app without login, refer this [link](../configuration/index.md#enable-sso-for-dx-and-mx) for configuring SSO.

