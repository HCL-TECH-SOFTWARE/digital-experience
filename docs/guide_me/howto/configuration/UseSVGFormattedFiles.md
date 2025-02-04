# How to be able to use SVG formatted files in HCL Web Content Manager

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

HCL Digital Experience does not support the SVG filetypes out of the box. These are the steps in how to have the server recognize these file types in the UI.

## Instructions

1. Open the IBM Integrated Solutions Console (WAS admin console) and navigate to **Resources > Resource Environment Providers > WCM WCMConfig_Service** and select the **custom properties**.  

2. Create the custom property `extensiontype.svg` with a value `image/svg+xml`.  

3. Create the custom property `imageresourcecmpnt.allowedmimetypes` and set the value:  

    `image/gif,image/png,image/jpeg,image/jpg,image/jpe,image/jfif,image/bmp,image/x-bmp,image/x-bitmap,image/x-xbitmap,image/x-win-bitmap,image/x-windows-bmp,image/ms-bmp,image/x-ms-bmp,application/bmp,application/x-bmp,application/x-win-bitmap,image/ico,image/svg+xml`  

4. To the custom property `image.initialFileExtensions` add the value `SVG` to the list.  

5. Review and save the changes to the master configuration.  

6. In the IBM Integrated Solutions Console navigate to **Environment > Virtual Hosts**.  

7. Select the virtual host where HCL Digital Experience is installed, for example: `default_host`.  

8. Click the **MIME Types** link under **Additional Properties**  

9. Review the current MIME types and check for the MIME Type `image/svg+xml`  
    If it is missing, please add it as following:  

    Click the **New** button to add a new MIME Type with the following values:  

    ```text
    MIME Type: image/svg+xml
    Extensions: svg svgz  
    ```

10. Restart the Application Server server.  

**Additional information:**

The above process can be used for the following types as well and should be applicable to other file types:  

1. In the IBM Integrated Solutions Console navigate to **Resources > Resource Environment Providers > WCM WCMConfigService > Custom properties**  
2. The following extension types can be created:

   - `extensiontype.webp` with value `image/webp`
   - `extensiontype.jxr` with value `image/jxr`
   - `extensiontype.jp2` with value `image/jp2`

3. Then for property `imageresourcecmpnt.allowedmimetypes` add the following values to the end: `image/webp,image/jxr,image/jp2`  

4. In the IBM Integrated Solutions Console navigate to  **Environment > Virtual host > default_host > MIME Types**  

5. Created MIME Types:  

   - `image/webp` with value `webp`  
   - `image/jxr` with value `jxr`  
   - `image/jp2` with value `jp2`  

6. After adding all new types, click **Apply > OK > Save**.  

7. Save the changes to the master configuration.  

8. Restart the WebSphere Application Server server.  
