# Custom Configuration Properties for Script Applications

## Default Import Properties for Script Applications

When importing Script Applications, only specific file types are allowed by default. These properties define which extensions can be uploaded as part of the application package, and each property is not case-sensitive.

#### Default properties

**HTML files**  
`scriptportlet.import.extensions.Html=html,htm`

**Script files**  
`scriptportlet.import.extensions.Script=js`

**Style files**  
`scriptportlet.import.extensions.StyleSheet=css`

**Image files**  
`scriptportlet.import.extensions.Image=jpg,jpeg,gif,png,bmp`

---

### File type management

DXClient uses the MIME types configuration as documented in [Support for Additional MIME Types](https://help.hcl-software.com/digital-experience/9.5/CF230/guide_me/howto/administration/SupportForAdditionalMIMETypes/).

---

### Best Practices for Overriding Properties

By default, you can upload only specific file types by using the Script Application. The Script Application import feature does not scan uploaded files, so use caution before including other file types as part of an import.  

If you want to add extra file types or change any other properties, use the procedure described later in this topic.

These properties are specific to individual portals. Each virtual portal has its own settings, so you must override each virtual portal separately.

If you edit the **Script Application Configuration Properties** component directly in the **Script Application Library** web content library, your changes are overwritten when a new version of the library is installed—for example, when you upgrade your portal installation. To avoid this issue, follow one of these measures based on your HCL DX installation type:

- **For portals with a Web Content Manager license:**  
  Create a new text component to override properties. Use the procedure described later in this topic.

- **For base portal installations without a Web Content Manager license:**  
  Edit the default **Script Application Configuration Properties** component directly, and update it again after upgrade as described in step 4 of the procedure.

Add a text component called **Script Portlet Override Properties** in the **Web Content Manager** library **Script Application Library**.

In this component, you can override any of the properties in the **Script Application Configuration Properties** component.

Copy the properties that you want to override from the **Configuration Properties** component to the **Script Portlet Override Properties** component.

Edit the properties that you want to change and save the file.

If you upgrade your portal to another version or apply a Combined Cumulative Fix, verify whether any default items you overrode have changed. Update the text component accordingly and save your changes.