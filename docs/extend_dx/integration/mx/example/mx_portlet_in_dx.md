
# Deploying Volt MX portlet into HCL DX

The following example provides the steps to generate the Volt MX portlet through Iris, deploy the portlet in HCL Digital Experience (DX), and verify the portlet deployed.

## Creating a Volt MX portlet and deploying in HCL DX

1. Create a new project in Iris. For more information, refer to [Introducing Volt MX](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/index.html){target="_blank"}.

2. Configure the HCL DX host details in Iris.

    ![alt text](image1.png)

3. Once the App is created in Iris, choose build and publish web option from build menu.
    
    ![alt text](image2.png)

This creates a Volt MX portlet with the project name and deploys the same portlet in HCL DX.

<!-- TODO: The link for this needs to be updated on the MX team publishes the doc-->
For detailed steps refer to this [link](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_tutorials/Content/Introduction.html) 


## Adding the Volt MX portlet to HCL DX and verifying the portlet
1. Log in to HCL DX.

2. Go to the site menu and turn on **Edit Mode**.

3. Navigate to the page where you want to add the Volt MX portlet.

4. Click the **Add page components and application** icon.

    ![alt text](image3.png)

4. Under the **Applications** tab, search for the deployed Volt MX portlet in the search bar.

5. Hover over the portlet you want to add and click **Add** (+). 

    ![alt text](image4.png)

6. Turn off **Edit Mode** and verify if the portlet is properly rendered. If the app contains a login page but you prefer using single sign-on (SSO) with HCL DX credentials, you can configure SSO using the steps in [Enabling SSO between HCL DX and Volt MX](../configuration/index.md#enabling-sso-between-hcl-dx-and-volt-mx).

