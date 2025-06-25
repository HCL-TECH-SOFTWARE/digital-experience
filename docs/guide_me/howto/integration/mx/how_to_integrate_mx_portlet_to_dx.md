

# How to Deploy HCL Volt MX Portlets into HCL Digital Experience (DX)

This guide shows how to generate a Volt MX portlet using Iris, deploy it into HCL DX, and verify that the portlet renders correctly on a DX page.

## Prerequisites

- Installed HCL Volt MX Iris
- An active HCL DX deployment
- Access to credentials and hostname for DX
- An existing or new Volt MX Web App project

## Step 1: Create or Use a Web App Project in Iris

### 1. Open HCL Volt MX Iris.
### 2. Create a new Web App project or open an existing one.

For more on creating and managing projects in Iris, refer to:  
[Create, Migrate, or Import a Project](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_user_guide/Content/CreateMigrateOrImportProject.html)

## Step 2: Configure HCL DX Host in Iris

### 1. In the Iris project settings, configure the **DX host details**.
### 2. Example settings may include:

- Hostname of the DX deployment
- Port and protocol (e.g., `https://dx-hostname.com`)

![DX Host Configuration](./assets/image1.png)

## Step 3: Build and Publish the Volt MX Portlet

### 1. From the **Build** menu, select **Build and Publish Web**.

![Build Web](./assets/image5.png)

### 2. In the **Post Build Actions**, choose:
- **Build and Publish Portlet to DX**
- **Clean Build**

![Build Options](./assets/image2.png)

### 3. Click **Build** to generate and deploy the portlet to DX.

ℹFor more information, refer to:  
[Publishing a Web App in Volt MX Iris](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_user_guide/Content/WebPublish.html#overview)

## Step 4: Add the Portlet to a DX Page

### 1. Log in to the HCL DX admin console.
### 2. Enable **Edit Mode** from the site toolbar.
### 3. Navigate to the page where you want to place the portlet.
### 4. Click the **Add page components and applications** icon.

![Add Component](./assets/image3.png)

### 5. Under the **Applications** tab, use the search bar to locate the deployed Volt MX portlet.
### 6. Click the **Add (+)** icon next to the desired portlet.

![Select Portlet](./assets/image4.png)

### 7. Exit **Edit Mode** and verify that the portlet renders correctly on the page.

## Optional: Enable SSO for the Portlet

If your Volt MX app contains a login page but you want to use **SSO via HCL DX**, follow the steps in the related guide:

[How to Enable SSO Between HCL DX and Volt MX](./how_to_enable_sso.md)


**You have successfully deployed and verified the HCL Volt MX portlet in HCL DX.**