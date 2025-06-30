# How to Integrate Volt MX Data and Applications into HCL DX

## Introduction

This guide explains how to:

1.  Display **Volt MX Foundry data** on HCL DX pages using **Digital Data Connector (DDC)**.
2.  Embed a **Volt MX Web Application** directly into an HCL DX page using the **Web Application Bridge (WAB)**.

## Prerequisites

Before you begin, ensure you have:

* A working **HCL Digital Experience environment**.
* An **HCL Volt MX Foundry project and application**.
* **DDC installation** [installation guide](./../../../../extend_dx/integration/mx/installation/index.md) and **configuration** [configuration guide](./../../../../extend_dx/integration/mx/configuration/index.md) completed.
* (Optional) **Ingress configured** for separate hostname/subdomain routing.

## Instructions

### Part 1: Show Volt MX Foundry Data in HCL DX using Digital Data Connector (DDC)

1.  **Follow the guide:**
    [Connecting to HCL Volt MX Foundry through DDC](./../../../../extend_dx/ddc/integrating_voltmx_foundry/index.md)

2.  **Complete installation and configuration prerequisites.**

3.  **Use DDC to bind Foundry data services to DX content presentation.**

### Part 2: Embed Volt MX Web Application in HCL DX using Web Application Bridge (WAB)

### **Important Routing Note**

If DX and Volt MX are on the same host, routing conflicts may occur.

To avoid this:

- Use a Kubernetes Ingress controller.
- Assign separate subdomains or hostnames.

[Configure Ingress Controller](./../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md)

### Step 1: Create a Content Provider Profile

Refer to:

- [Content provider profile](./../../../../extend_dx/integration/wab/wab/h_wab_provider.md)
- [Profile policy](./../../../../extend_dx/integration/wab/wab/h_wab_policy.md)
- [Request/response setup](./../../../../extend_dx/integration/wab/wab/h_wab_response.md)
- [SSO for providers](./../../../../extend_dx/integration/wab/wab/h_wab_auth.md)

#### **Create the Profile:**

1.  **Set a unique title:**
    `MX Foundry Content Provider Profile`
2.  **Hostname or IP:**
    `http://<mx-host>:<port>/`
    * Use Kubernetes Service DNS name if in the same cluster.
3.  **Save the profile.**

### Step 2: Create a Web Dock Application

Guide: [Web Dock Application](./../../../../extend_dx/integration/wab/wab/h_wab_dock.md)

#### **Create the Dock App:**

1.  **Title:** `MX Foundry Application`
2.  **Select the provider profile:** `MX Foundry Content Provider Profile`
3.  **Set the Resource Path:** `/apps/myExampleApp`
4.  **Save the application.**

### Step 3: Add Web Dock Application to DX Page

1.  **Log into HCL DX and enable `Edit Mode`.**
2.  **Navigate to the desired page or create a new one.**
3.  **Open the `Add Components` panel.**
4.  **Under `Applications`, search for your Web Dock App:** `MX Foundry Application`
5.  **Click `Add To Page`.**

## Result

Your Volt MX app will now render within the DX page.

Support for this feature is not available in the HCL Support Center. For questions and issues, reach out either in the [DXers - The HCL DX User Group](https://ptb.discord.com/channels/787019554173485067/992504153328861184){target="_blank"} on Discord or in the [HCL DX forum](https://support.hcltechsw.com/community?id=community_forum&sys_id=02c5dcf01b32f70cc1f9759d1e4bcb43){target="_blank"}.


## HCLSoftware U learning materials

For an introduction and a demo on how to integrate DX with HCL Volt MX as a business user, go to [DX Integration with HCL Volt MX for Business Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D747){target="_blank"}. To try it out yourself, refer to [DX Integration with HCL Volt MX for Business Users Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Integration/HDX-INT-BU_DX_Integration_with_HCL_Volt_MX_for_Business_Users.pdf){target="_blank"}.

For an introduction and a demo on how to integrate DX with HCL Volt MX as a developer, go to [DX Integration with HCL Volt MX for Developers](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D1458){target="_blank"}. To try it out yourself, refer to [DX Integration with HCL Volt MX for Developers Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Integration/HDX-INT-DEV_DX_Integration_with_HCL_Volt_MX_for_Developers.pdf){target="_blank"}.

You can also use the dedicated course [HCL Volt MX Integration with HCL DX](https://hclsoftwareu.hcltechsw.com/courses/course/hvmx-int-hdx-integrate-hcl-volt-mx-with-hcl-digital-experience){target="_blank"}. This course explains the benefits of integrating HCL Volt MX with HCL DX and provides integration guidance for business users, developers, and administrators.