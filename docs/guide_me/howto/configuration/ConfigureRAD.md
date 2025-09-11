# How to configure the IBM Rational Application Developer to use the HCL DX server

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

This document provides the steps to configure the IBM Rational Application Developer (RAD) to use the HCL Digital Experience (DX) server when developing portlets.

## Instructions

If you installed RAD without selecting the Portal development tools during the installation, refer to the following steps to enable the different Portal development kits.

1. Open the IBM Installation Manager.

2. Click **Modify**.

3. Select the **Development tools** and the **Remote server stub** checkboxes that match your installed Portal server version. You can also select more than one version.

    ![Modify Packages](./images/KB0111273_image_2.png)  

4. Click **Next > Finish**.

5. Open IBM RAD to verify the changes. When creating a new **Portlet Project**, you should now see the different Portal server stubs.

    ![Portlet Project](./images/KB0111273_image_1.png)

    After selecting the correct WebSphere Portal server stub, you can now connect to the HCL DX server.

!!!note
    When installing IBM RAD from scratch, the same options exist.
