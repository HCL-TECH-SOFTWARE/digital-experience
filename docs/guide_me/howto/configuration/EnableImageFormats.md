# How to enable support for additional image formats in HCL Web Content Manager

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

HCL Digital Experience (DX) does not support certain image formats out-of-the-box. This article describes the steps to configure the HCL DX server to recognize JPEG 2000 (JP2), JPEG XR (JXR), Scalable Vector Graphics (SVG), and Web Picture (WEBP) in the HCL Web Content Manager.

## Instructions

### JP2

For JP2 images, refer to the following steps:

1. In the WebSphere Integrated Solutions Console (WAS admin console), navigate to **Resources > Resource Environment > Resource Environment Providers > WCM WCMConfig_Service > Custom properties**.

2. Create the `extensiontype.jp2` property:
    1. Click **New...**.
    2. Under **Name**, enter **extensiontype.jp2**.
    3. Under **Value**, enter **image/jp2**.
    4. Click **Apply**.

3. Create or modify the `imageresourcecmpnt.allowedmimetypes` property:

    If the property does not exist:

    1. Click **New...**.
    2. Under **Name**, enter **imageresourcecmpnt.allowedmimetypes**.
    3. Under **Value**, enter **image/jp2**.
    4. Click **Apply**.

    If the property already exists:

    1. Locate and click **imageresourcecmpnt.allowedmimetypes**.
    2. Under **Value**, enter **image/jp2**.
    3. Click **Apply**.

4. Modify the `image.initialFileExtensions` property:
    1. Locate and click **image.initialFileExtensions**.
    2. Under **Value**, add **JP2** to the existing comma-separated list of extensions.
    3. Click **Apply**.

5. Save your changes by clicking **Save** at the top of the console messages.

6. Configure the MIME type for JP2:
    1. Navigate to **Environment** > **Virtual hosts**.
    2. Click the virtual host where WebSphere Portal is installed (for example, **default_host**).
    3. Under **Additional Properties**, click **MIME Types**.
    4. Check the list of MIME types to ensure `image/jp2` is listed.
    5. If `image/jp2` is not listed, create it:
        1. Click **New...**.
        2. Under **MIME Type**, enter **image/jp2**.
        3. Under **Extensions**, enter **jp2**.
        4. Click **OK**.
        5. Save your changes by clicking **Save** at the top of the console messages.

7. Restart the WebSphere Application Server.

### JXR

For JXR images, refer to the following steps:

1. In the WebSphere Integrated Solutions Console (WAS admin console), navigate to **Resources > Resource Environment > Resource Environment Providers > WCM WCMConfig_Service > Custom properties**.

2. Create the `extensiontype.jxr` property:
    1. Click **New...**.
    2. Under **Name**, enter **extensiontype.jxr**.
    3. Under **Value**, enter **image/jxr**.
    4. Click **Apply**.

3. Create or modify the `imageresourcecmpnt.allowedmimetypes` property:

    If the property does not exist:

    1. Click **New...**.
    2. Under **Name**, enter **imageresourcecmpnt.allowedmimetypes**.
    3. Under **Value**, enter **image/jxr**.
    4. Click **Apply**.

    If the property already exists:

    1. Locate and click **imageresourcecmpnt.allowedmimetypes**.
    2. Under **Value**, enter **image/jxr**.
    3. Click **Apply**.

4. Modify the `image.initialFileExtensions` property:
    1. Locate and click **image.initialFileExtensions**.
    2. Under **Value**, add **JXR** to the existing comma-separated list of extensions.
    3. Click **Apply**.

5. Save your changes by clicking **Save** at the top of the console messages.

6. Configure the MIME type for JXR:
    1. Navigate to **Environment** > **Virtual hosts**.
    2. Click the virtual host where WebSphere Portal is installed (for example, **default_host**).
    3. Under **Additional Properties**, click **MIME Types**.
    4. Check the list of MIME types to ensure `image/jxr` is listed.
    5. If `image/jxr` is not listed, create it:
        1. Click **New...**.
        2. Under **MIME Type**, enter **image/jxr**.
        3. Under **Extensions**, enter **jxr**.
        4. Click **OK**.
        5. Save your changes by clicking **Save** at the top of the console messages.

7. Restart the WebSphere Application Server.

### SVG

For SVG images, refer to the following steps:

1. In the WebSphere Integrated Solutions Console (WAS admin console), navigate to **Resources > Resource Environment > Resource Environment Providers > WCM WCMConfig_Service > Custom properties**.

2. Create the `extensiontype.svg` property:
    1. Click **New...**.
    2. Under **Name**, enter **extensiontype.svg**.
    3. Under **Value**, enter **image/svg+xml**.
    4. Click **Apply**.

3. Create or modify the `imageresourcecmpnt.allowedmimetypes` property:

    If the property does not exist:

    1. Click **New...**.
    2. Under **Name**, enter **imageresourcecmpnt.allowedmimetypes**.
    3. Under **Value**, enter **image/svg+xml**.
    4. Click **Apply**.

    If the property already exists:

    1. Locate and click **imageresourcecmpnt.allowedmimetypes**.
    2. Under **Value**, enter **image/svg+xml**.
    3. Click **Apply**.

4. Modify the `image.initialFileExtensions` property:
    1. Locate and click **image.initialFileExtensions**.
    2. Under **Value**, add **SVG** to the existing comma-separated list of extensions.
    3. Click **Apply**.

5. Save your changes by clicking **Save** at the top of the console messages.

6. Configure the MIME type for SVG:
    1. Navigate to **Environment** > **Virtual hosts**.
    2. Click the virtual host where WebSphere Portal is installed (for example, **default_host**).
    3. Under **Additional Properties**, click **MIME Types**.
    4. Check the list of MIME types to ensure `image/svg+xml` is listed.
    5. If `image/svg+xml` is not listed, create it:
        1. Click **New...**.
        2. Under **MIME Type**, enter **image/svg+xml**.
        3. Under **Extensions**, enter **svg svgz**.
        4. Click **OK**.
        5. Save your changes by clicking **Save** at the top of the console messages.

7. Restart the WebSphere Application Server.

### WEBP

For WEBP images, refer to the following steps:

1. In the WebSphere Integrated Solutions Console (WAS admin console), navigate to **Resources > Resource Environment > Resource Environment Providers > WCM WCMConfig_Service > Custom properties**.

2. Create the `extensiontype.webp` property:
    1. Click **New...**.
    2. Under **Name**, enter **extensiontype.webp**.
    3. Under **Value**, enter **image/webp**.
    4. Click **Apply**.

3. Create or modify the `imageresourcecmpnt.allowedmimetypes` property:

    If the property does not exist:

    1. Click **New...**.
    2. Under **Name**, enter **imageresourcecmpnt.allowedmimetypes**.
    3. Under **Value**, enter **image/webp**.
    4. Click **Apply**.

    If the property already exists:

    1. Locate and click **imageresourcecmpnt.allowedmimetypes**.
    2. Under **Value**, enter **image/webp**.
    3. Click **Apply**.

4. Modify the `image.initialFileExtensions` property:
    1. Locate and click **image.initialFileExtensions**.
    2. Under **Value**, add **WEBP** to the existing comma-separated list of extensions.
    3. Click **Apply**.

5. Save your changes by clicking **Save** at the top of the console messages.

6. Configure the MIME type for WEBP:
    1. Navigate to **Environment** > **Virtual hosts**.
    2. Click the virtual host where WebSphere Portal is installed (for example, **default_host**).
    3. Under **Additional Properties**, click **MIME Types**.
    4. Check the list of MIME types to ensure `image/webp` is listed.
    5. If `image/webp` is not listed, create it:
        1. Click **New...**.
        2. Under **MIME Type**, enter **image/webp**.
        3. Under **Extensions**, enter **webp**.
        4. Click **OK**.
        5. Save your changes by clicking **Save** at the top of the console messages.

7. Restart the WebSphere Application Server.
