# How to add MIME types to the DX server

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

This article explains how to add support for additional [MIME types](https://en.wikipedia.org/wiki/Media_type){target="_blank"} to the HCL Digital Experience (DX) server.

## Instructions

To add support for additional MIME types, refer to the following options:

### Image files

For image files such as JPEG 2000 (JP2), JPEG XR (JXR), Scalable Vector Graphics (SVG), and Web Picture (WEBP), refer to [How to enable support for additional image formats in HCL Web Content Manager](../configuration/EnableImageFormats.md).

### Microsoft Office files

For Microsoft Office files, refer to [Control how the browser opens PowerPoint files](https://www.rdpslides.com/pptfaq/FAQ00189_Control_how_the_browser_opens_PowerPoint_files.htm){target="_blank"}.

### Cognos `.htm` files

For Cognos `.htm` files, refer to the following steps:

1. In the WebSphere Integrated Solutions Console, navigate to **Resources > Resource Environment > Resource Environment Providers > WCM WCMConfig_Service > Custom properties**.
2. Click **New...**.
3. Under **Name**, enter `extensiontype.mht`.
4. Under **Value**, enter `message/rfc822`.
5. Click **Apply**.
6. Click **Save** at the top of the console messages.

### Javascript files

For Javascript files, refer to the following steps:

Depending on the use case, you may need to set `imageresourcecmpnt.allowedmimetypes` or `mimetype.list` in the WAS admin console:

1. In the WAS admin console, navigate to **Resources > Resource Environment > Resource Environment Providers > WCM_WCMConfigService > Custom properties**.

This step is required for all file types to be rendered through File Resource Components.

    <AppServer_root>\java\jre\lib\content-types.properties

    <wp_profile_root>\config\cells\<cellName>\virtualhosts.xml

    <wp_profile_root>\PortalServer\config\convertors.xml

    * Web.xml

For more information, refer to the following articles:

- [Web content authoring options - Defining valid mime types for the image element](../../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_prop_authoring.md#defining-valid-mime-types-for-the-image-element)
- [PI63742: ADD JAVASCRIPT MIMETYPE EXTENSION TYPE FOR RESOURCES WITHIN WCM](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0061304){target="_blank"}
- [How to be able to use SVG formatted files in HCL Web Content Manager](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0078940){target="_blank"}.

### Internet Information Services for Windows® Server

Refer to the following steps to add the `.FLV` MIME type to the Internet Information Services (IIS) server:

1. Select the site to configure in IIS.
2. Right click and select **Properties**.
3. Under **HTTP Headers** Tab, select **File Types**.
4. Under the **MIME Map** section and select **New Type**.
5. Enter **.flv** as the associated extension and **video/x-flv** as the content type.
