# Custom Configuration Properties for Script Applications 

## Default Import Properties for Script Applications

When importing Script Applications, only specific file types are allowed by default. These properties define which extensions can be uploaded as part of the application package. Each property is case-insensitive.

### Default properties

- **HTML files**  
  `scriptportlet.import.extensions.Html=html,htm`

- **Script files**  
  `scriptportlet.import.extensions.Script=js`

- **Style files**  
  `scriptportlet.import.extensions.StyleSheet=css`

- **Image files**  
  `scriptportlet.import.extensions.Image=jpg,jpeg,gif,png,bmp`

---

!!! important
    With the **recommended DXClient approach**, file type management is handled differently. For example, support for **SVG files** is configured at the Web Content level, not through Script Application properties.  
    See [Web Content Manager set SVG to disabled by default](https://help.hcl-software.com/digital-experience/9.5/CF230/whatsnew/cf20/newcf208/#web-content-manager-set-svg-to-disabled-by-default){target="_blank"}.

If you still need to allow uploading of **SVG files** (or other image types) to Web Content Manager (WCM), update the `imageresourcecmpnt.allowedmimetypes` property in the **WCMConfigService** service by using the WebSphere® Integrated Solutions Console.  

Example:
```
imageresourcecmpnt.allowedmimetypes=image/gif,image/png,image/jpeg,image/jpg,image/jpe,image/jfif,image/bmp,image/x-bmp,image/x-bitmap,image/x-xbitmap,image/x-win-bitmap,image/x-windows-bmp,image/ms-bmp,image/x-ms-bmp,application/bmp,application/x-bmp,application/x-win-bitmap,image/ico,image/svg+xml,image/tiff,image/tif,image/webp
```
For more details about configuring allowed image formats, see  
[Enable image formats in WCM](https://help.hcl-software.com/digital-experience/9.5/CF230/guide_me/howto/configuration/EnableImageFormats/#jp2){target="_blank"}  
and [WCMConfigService configuration reference](https://help.hcl-software.com/digital-experience/9.5/CF230/manage_content/wcm_configuration/wcm_svc_cfg/srvcfgwcmref_config/){target="_blank"}.

---

### Note on other file types

![Afileresourcecmpnt](../../../images/image.png){ width="300" }

While images are explicitly managed through `imageresourcecmpnt.allowedmimetypes`, it is less clear how other file types (HTML, JavaScript, CSS) are controlled at the WCM level.  
Logically, a similar property such as `fileresourcecmpnt.allowedmimetypes` should exist to manage these file types. The default Script Application import properties listed above remain the primary way to manage HTML, script, and style files.  

### Best Practices for Overriding Properties

By default, you can upload only specific types of files by using the Script Application. The Script Application import feature does not scan uploaded files, therefore use caution before you include other file types as part of an import. If you want to add extra file types, or change any of the other properties, use the procedure given later.

These properties are specific to individual portals. Each virtual portal has its own settings. Therefore, you must override each virtual portal separately.

If you edit the Script Application Configuration Properties component directly in the Script Application Library web content library, your changes are overwritten when a new version of the library is installed, for example when you upgrade your portal installation. To avoid this issue, use the following measure, depending on the type of your HCL DX installation:

-   If your portal version includes a Web Content Manager license and the Web Content Authoring option for creating extra components, create a new text component for overriding properties. To do so, use the full procedure given later.
-   If you use a base portal installation without a HCL Web Content Manager license and with limited Web Content Manager support, you cannot create new components in the Web Content Authoring user interface. In this case, you can edit the default Script Application Configuration Properties component directly, and then update it again after upgrade as mentioned in step 4 of the procedure given later.

1.  Add a text component that is called Script Portlet Override Properties in the Web Content Manager library Script Application Library.

    In this component, you can override any of the properties in the Script Application Configuration Properties component.

2.  Copy the properties that you want to override from the Configuration Properties component to the Script Portlet Override Properties component.

3.  Edit the properties that you want to change and save the file.

4.  If you upgrade your portal to another version or with a Combined Cumulative Fix, check to see whether any items you overrode were changed by default. Change the text component and save the component.
