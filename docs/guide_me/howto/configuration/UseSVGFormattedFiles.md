# How to be able to use SVG formatted files in HCL Web Content Manager

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

Out of the box, HCL Web Content Manager does not support the SVG filetypes.  These are the steps in how to have the server recognize these file types in the UI.

## Instructions

Open the WebSphere Integrated Solutions console and navigate to the Resources > Resource Environment Providers > WCM WCMConfig_Service and select the "custom properties"

- Create "extensiontype.svg" with a value of "image/svg+xml"

- Create the variable "imageresourcecmpnt.allowedmimetypes" and set this value:

        imageresourcecmpnt.allowedmimetypes = image/gif,image/png,image/jpeg,image/jpg,image/jpe,image/jfif,image/bmp,image/x-bmp,image/x-bitmap,image/x-xbitmap,image/x-win-bitmap,image/x-windows-bmp,image/ms-bmp,image/x-ms-bmp,application/bmp,application/x-bmp,application/x-win-bitmap,image/ico,image/svg+xml

- To the variable "image.initialFileExtensions" add the value of "SVG" to the list  

Save all of these values.

Click the Environment -> Virtual Hosts link. > Select the virtual host where WebSphere Portal is installed, for example: default_host.

Click the MIME Types link under "Additional Properties" > Review the current MIME types.

Check for the MIME Type image/svg+xml

If is not there, so you will need to create it.

Click "New" to add a new MIME Type.

MIME Type: image/svg+xml Extensions : svg svgz

Restart the WebSphere Application Server server.

**Additional notes:**

The above process has been used for the following types as well and should be applicable to other file types:

WCM WCMConfigService --> Custom properties the following extensiontypes were created:

- extensiontype.webp with value image/webp
- extensiontype.jxr with value image/jxr
- extensiontype.jp2 with value image/jp2

Then for property imageresourcecmpnt.allowedmimetypes added the following values to the end: image/webp,image/jxr,image/jp2

Under environment --> Virtual host --> default_host --> MIME Types, created MIME Types:

- image/webp with value webp
- image/jxr with value jxr
- image/jp2 with value jp2

After adding all new types, click Apply >OK >Save.

Click Save again to complete the changes.

Restart the WebSphere Application Server server.
