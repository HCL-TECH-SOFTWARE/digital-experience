# Task register-iwidget-definition

Run the portal configuration task register-iwidget-definition to register individual iWidget definitions on HCL Portal.

Identify the iWidget definition by an absolute URL that points to the iWidget definition XML file. Executing this task downloads the iWidget definition XML file from the specified location and creates a corresponding iWidget Wrapper portlet clone. If an iWidget Wrapper portlet clone for the given iWidget URL exists already, no new portlet clone is created, but the existing portlet is updated with the information loaded from the specified iWidget definition XML file.

**Syntax:** Invoke this task as part of the ConfigEngine script file as follows:

-   UNIX™Linux™: `./ConfigEngine.sh register-iwidget-definition -DIWidgetDefinition=IWidget Definition URL -DIWidgetCatalog=dav:fs-type1/iwidgets/IWidget\_name/catalog.xml -DPortalAdminPwd=wpsadmin -DWasPassword=wpsadmin`
-   IBM® i:
    -   **From the UserData directory:** `ConfigEngine.sh register-iwidget-definition -DIWidgetDefinition=IWidget Definition URL -DIWidgetCatalog=dav:fs-type1/iwidgets/IWidget\_name/catalog.xml -DPortalAdminPwd=wpsadmin -DWasPassword=wpsadmin`
-   Windows™: `ConfigEngine.bat register-iwidget-definition -DIWidgetDefinition=iwidget\_Definition\_URL -DIWidgetCatalog=dav:fs-type1/iwidgets/IWidget\_name/catalog.xml -DPortalAdminPwd=wpsadmin -DWasPassword=wpsadmin`

**Mandatory parameters** that you can specify through the command line or in wkplc.properties:

-   **WasUserid**

    User ID for WebSphere® Application Server

-   **WasPassword**

    Password that corresponds to the user ID for WebSphere® Application Server

-   **PortalAdminId**

    Administrator ID for HCL Portal

-   **PortalAdminPwd**

    Password that corresponds to the administrator ID for HCL Portal

-   **WPS\_SOAP\_PORT**

    SOAP port that connects the portal server to remote connections


**Mandatory parameters** that you can specify only through the command line:

-   **IWidgetDefinition**

    URL of the iWidget definition XML file


**Optional parameters** that you can specify only through the command line:

-   **IWidgetCatalog**

    URL of an IBM® Mashup Center catalog XML file. If you specify this parameter, the task `register-iwidget-definition` parses the referenced catalog XML file to register IWidget definitions or to refresh existing IWidget Wrapper portlet clones. If the parsed catalog XML file contains an entry with a definition element that points to the same iWidget definition file as the parameter `IWidgetDefinition` or the IWidget Wrapper portlet clone that is identified by the parameter `PortletDefinition`, the titles and descriptions from the matching catalog entry are considered for creating or updating the IWidget Wrapper portlet clone. More precisely, the titles and descriptions from the catalog entry are only set on the IWidget Wrapper portlet clone if the corresponding iWidget definition does not define the titles or descriptions in its `idescriptor` item set. When you run the task `register-iwidiget-definition` and provide the IWidgetCatalog parameter but omit `IWidgetDefinition` and `PortletDefinition`, IWidget Wrapper portlet clones for all iWidget definitions referenced in the given catalog XML file are created or updated.

-   **PortletDefinition**

    Unique name or serialized ObjectID of an iWidget Wrapper portlet clone to refresh. If you specify this parameter, the task `register-iwidgetdefinition` performs a refresh of the referenced iWidget Wrapper portlet clone. This means that the iWidget definition referenced by the existing iWidget Wrapper portlet clone is parsed again to update the portlet.

-   **PortletUniqueName**

    If this parameter is specified, a new iWidget Wrapper portlet will be created with a unique name as specified by this parameter. If this parameter is specified, the task always creates a new iWidget Wrapper portlet clone independent of the given IWIdgetDefinition URL that is already being registered at portal.

    **Note:** If the given unique name is already assigned to some other resource, the task fails and no IWidget Wrapper portlet is created.


**Assumptions/Prerequisites:** HCL Portal is running. If HCL Portal is not running, the task will start it.

**Error Conditions:** None

**Task dependencies:** None

**Tasks invoked:** None

**Examples:** You can register the iWidget definition XML file located at http://server\_name:port\_number/someWidget/someWidget/someWidget.xml as follows:

```
./ConfigEngine.sh register-iwidget-definition
   -DPortletUniqueName="someWidget"
   -DIWidgetDefinition=http://server\_name:port\_number/someWidget/someWidget/someWidget.xml  
   -DPortalAdminPwd=wpsadmin -DWasPassword=wpsadmin
```

You can refresh the IWidget Wrapper portlet clone with the unique name someWidget:

```
./ConfigEngine.sh register-iwidget-definition -DPortletDefinition="someWidget"
   -DPortalAdminPwd=wpsadmin -DWasPassword=wpsadmin
```

You can register the iWidget definition XML file located at http://server\_name:port\_number/someWidget/someWidget/someWidget.xml considering titles and descriptions from the Mashup Center catalog XML file located at http://server\_name:port\_number/someWidget/someWidget/catalog.xml:

```
./ConfigEngine.sh register-iwidget-definition
   -DIWidgetDefinition=http://server\_name:port\_number/someWidget/someWidget/someWidget.xml
   -DIWidgetCatalog=http://server\_name:port\_number/someWidget/someWidget/catalog.xml  
   -DPortalAdminPwd=wpsadmin -DWasPassword=wpsadmin
```

You can refresh the IWidget Wrapper portlet clone with the unique name someWidget, considering titles and descriptions from the Mashup Center catalog XML file located at http://server\_name:port\_number/someWidget/someWidget/catalog.xml:

```
./ConfigEngine.sh register-iwidget-definition
   -DPortletDefinition="someWidget"
   -DIWidgetCatalog=http://server\_name:port\_number/someWidget/someWidget/catalog.xml
   -DPortalAdminPwd=wpsadmin -DWasPassword=wpsadmin
```

You can perform a bulk registration of iWidget definition XML files or a refresh of IWidget Wrapper portlet clones by using an Mashup Center catalog XML file:

```
./ConfigEngine.sh register-iwidget-definition
   -DIWidgetCatalog=http://server\_name:port\_number/catalog.xml
   -DPortalAdminPwd=wpsadmin -DWasPassword=wpsadmin
```

**Notes:**

1.  The URL can point to the portal server itself or to an external server. Configure the portal AJAX proxy to allow access to that server. For details refer to the following section.
2.  If the definition element of an entry in the Mashup Center catalog XML file contains a relative URL, the URL is resolved into an absolute form using the URL from the IWidgetCatalog parameter as a base URL. Only that absolute URL is used for further processing such as accessing the iWidget definition XML file. The absolute URL is also compared with the IWidgetDefinition parameter value or the iWidget definition URL of the IWidget Wrapper portlet clone identified by the PortletDefinition parameter in order to determine whether or not to consider titles and descriptions from the catalog XML file entry when parsing creating or updating the IWidget Wrapper portlet clone.
3.  The register-iwidget-definition task only updates titles and descriptions of an IWidget Wrapper portlet clone when you set the following portlet preferences to true: `com.ibm.portal.replace.titles` and `com.ibm.portal.replace.descriptions`.
4.  When the titles and the descriptions of an IWidgetWrapper portlet clone are set using values from an IBM Mashup Center catalog XML file, the portlet preferences `com.ibm.portal.replace.titles` \(default: true\) and `com.ibm.portal.replace.descriptions` are set to `false` on the IWidget Wrapper portlet clone. Those portlet preferences prevent the titles and the descriptions of the IWidget Wrapper portlet clone from being overwritten when performing subsequent updates. This is particularly useful when running the register-iwidget-definition task to update all IWidget definitions registered in HCL Portal. The task only considers iWidget definitions that comply with the iWidget specification and does not process IBM Mashup Center catalog XML files.
5.  When you refresh IWidget Wrapper portlet clones, values of iWidget attributes \( items of the iWidget attributes item set\) are not updated unless the attributes are flagged as read only in the iWidget definition XML file. As a result, values of iWidget attributes customized after registering the iWidget in HCL Portal are prevented from getting lost during a refresh operation.

## Registering an iWidget hosted on a Portal server

If you want to register iWidgets deployed as WAR or EAR files directly on your portal server, you can use server relative URLs pointing to the corresponding iWidget definition XML files; for example:

```
./ConfigEngine.sh register-iwidget-definition 
     -DIWidgetDefinition=/someWidget/someWidget/someWidget.xml
     -DPortalAdminPwd=wpsadmin -DWasPassword=wpsadmin     
```

**Remember:** Do not forget the leading slash "/" in your iWidget definition URL.

## Registering an iWidget hosted on an external server

If you use an iWidget definition URL that points to a server different from your portal server, you need to make sure that your current AJAX proxy configuration allows accessing this server. For details about this refer to the topics about AJAX proxy Configuration. One way of configuring this is to make sure that the URL to the iWidget definition XML file is mapped to the default\_policy dynamic policy in the global AJAX proxy configuration file. You can map a given URL, for example `http://server\_name:port\_number/someWidget/someWidget/someWidget.xml`, to that policy by adding a custom property such as the following to the WP ConfigService Resource Environment Provider in the WebSphere Application Server administrative console:

```
wp.proxy.config.urlreplacement.default_policy.someID=http://some.server.com:10039/*
```

**Notes:**

1.  The updated policy will not be effective until you restart either the portal server or the AJAX proxy Configuration enterprise application running on the portal server.
2.  If you use a URL prefix, do not omit the trailing asterisk \( **\*** \).

## Registering light weight iWidgets stored in the WebDAV file store

Additional to HTTP or HTTPs based iWidget definition URLs, you can also use WebDAV file store URIs pointing to iWidget definition XML files located in the WebDAV file store. Such URIs have the following format:

```
dav:fs-type1/path\_to\_your\_IWidget\_definition\_XML\_file
```

For example, you might have an archive or compressed file with a light weight iWidget that contains an iWidget definition XML file called someWidget.xml in the file root folder of the archive or compressed file. In this case you typically first copy the archive or compressed file to the WebDAV file store by using a generic WebDAV client or by using the configuration task `webdav-deploy-zip-file` as follows:

```
./ConfigEngine.sh webdav-deploy-zip-file 
     -DZipFilePath=/tmp/SomeWidgetPackage.zip 
     -DTargetURI=dav:fs-type1/iwidgets/SomeWidget/
     -DPortalAdminPwd=wpsadmin -DWasPassword=wpsadmin
```

This extracts your light weight iWidget package represented by the file /tmp/SomeWidgetPackage.zip into the folder /iwidgets/SomeWidget of the WebDAV file store. Make sure to add the trailing slash \( **/** \) in the parameter `TargetURI`. After the extraction you can register the iWidget definition XML file `someWidget.xml` as follows:

```
./ConfigEngine.sh register-iwidget-definition 
     -DIWidgetDefinition=dav:fs-type1/iwidgets/SomeWidget/someWidget.xml 
     -DPortalAdminPwd=wpsadmin -DWasPassword=wpsadmin
```


**Related information**  


[Types of portal resources](../admin-system/adxmlref_resrc_types.md)

[Managing iWidgets in your portal](../admin-system/add_widget.md)

