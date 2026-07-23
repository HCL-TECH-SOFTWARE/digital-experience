# Custom Configuration Properties for Script Applications 

## Default Import Properties for Script Applications
 
When you import Script Applications, only specific file types are allowed by default. These properties define which file extensions can be uploaded as part of the application package. Each property is not case-sensitive.

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
    With the [recommended DXClient](../../../extend_dx/development_tools/dxclient/dxclient_artifact_types/deployapplication.md) approach, file-type management works differently. See [How to add MIME types to the DX server](../../../guide_me/howto/administration/SupportForAdditionalMIMETypes.md)
 

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


