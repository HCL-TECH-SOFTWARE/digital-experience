# Removing or Hiding the "X-Powered-By" Header in HCL Digital Experience

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

Some web applications in HCL Digital Experience include the `X-Powered-By` header in responses on certain pages. This header reveals sensitive server information. This document describes how to remove or hide the `X-Powered-By` header.

## Instructions

Two options are available:

### Option 1: Configure `server.xml`

Set the parameter `disableXPoweredBy` to `true` in the `server.xml` file, then restart the server.

### Option 2: Administrative Console Configuration

1.  In the administrative console, navigate to **Servers > Server Types > WebSphere application servers > `<server_name>` > Web Container Settings > Web container**.
2.  Under **Additional Properties**, click on **Custom Properties**.
3.  On the **Custom Properties** page, click on the **New** button.
4.  On the settings page, enter the following values:
    * **Property Name:** `com.ibm.ws.webcontainer.disablexPoweredBy`
    * **Value:** `true`
5.  Click on **Apply** or **OK**.
6.  Click on **Save** on the console taskbar to save your configuration changes.
7.  Restart the server.

---

!!! info "Additional Information"
    Refer to the official documentation for more details on the `com.ibm.ws.webcontainer.disablexPoweredBy` property:

    [Web container custom properties](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=configuration-web-container-custom-properties)
