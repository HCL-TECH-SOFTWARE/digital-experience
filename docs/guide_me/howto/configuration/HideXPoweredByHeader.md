# How to remove or hide the X-Powered-By header in HCL DX

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

There are some web applications in HCL Digital Experience (DX) that include the `X-Powered-By` header in responses on certain pages. This header reveals sensitive server information. This article describes how to remove or hide the `X-Powered-By` header.

## Instructions

Two options are available to remove or hide the `X-Powered-By` header.

### Option 1: Configure `server.xml`

Set the parameter `disableXPoweredBy` to `true` in the `server.xml` file, then restart the server.

### Option 2: WebSphere Integrated Solutions Console configuration

1. In the WebSphere Integrated Solutions Console, navigate to **Servers > Server Types > WebSphere application servers > `<server_name>` > Web Container Settings > Web container**.
2. Under **Additional Properties**, click on **Custom properties**.
3. On the **Custom Properties** page, click **New...**.
4. Enter the following values:
    - **Name:** `com.ibm.ws.webcontainer.disablexPoweredBy`
    - **Value:** `true`
5. Click **Apply**.
6. Click **Save** at the top of the console messages.
7. Restart the server.

???+ info "Related information"
    - [Web container custom properties](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=configuration-web-container-custom-properties){target="_blank"}
