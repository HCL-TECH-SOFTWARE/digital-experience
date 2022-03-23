# Changing theme metadata

The first step of theme configuration is through theme metadata properties. Changes to the metadata are specific to a single theme, and the entries and values, therefore, can vary from theme to theme.

Go to [Manage Theme Properties](themeopt_themedev_etp.md#) to learn more about changing theme metadata by using the Theme Manager.

The theme metadata is located in the folder for your theme in themelist.

1.  Connect your WebDAV client to http://localhost:port/wps/mycontenthandler/dav/themelist/

2.  From the folder for your theme, copy the metadata.properties file to local drive.

3.  Edit the local copy of the file and modify the property values as needed according to the following table.

4.  Copy the local copy of the metadata.properties file back into the folder for your theme in themelist.


|Property|Default Value|Description|
|--------|-------------|-----------|
|```
com.ibm.portal.layout.template.href
```

|dav/:fs-type1/themes/YourThemeName/layout-templates/2ColumnEqual/|Change this value to say which layout template is used by default on pages in your theme. After initially creating your theme by cloning the HCL Portal 8.5 theme, be sure to replace `Portal8.5` in the path with the name of the folder for your theme.Change this value in the Theme Manager by clicking **Manage Theme Properties** \> **General** \> **Default layout**.

|
|```
resourceaggregation.profile
```

|profiles/profile\_deferred.json|Change this value to say which profile .json file \(list of modules\) to load. The path value is relative to the folder for your theme in fs-type1.Change this value in the Theme Manager by clicking **Manage Theme Properties** \> **General** \> **Default profile**.

|
|```
com.ibm.portal.theme.template.ref
```

|dav/:fs-type1/themes/YourThemeName/|Change this value to say in which folder your custom theme's templates are located. Be sure to replace Portal8.5 with the name of your custom theme folder.Change this value in the Theme Manager by clicking **Manage Theme Properties** \> **Advanced** \> **Static content root**.

|

**Parent topic:**[Configuring the portal theme and modules ](../dev-theme/themeopt_cust_config.md)

**Related information**  


[EJPNO1002E error ](../dev-theme/themeopt_an_EJPNO1002E_v85.md)

[EJPNO1012W error ](../dev-theme/themeopt_an_EJPNO1012W_v85.md)

