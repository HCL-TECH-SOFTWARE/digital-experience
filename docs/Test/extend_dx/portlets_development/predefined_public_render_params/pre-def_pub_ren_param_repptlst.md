# Predefined public render parameters representing portal state

Pre-defined public render parameters that represent portal-specific state information are available in all lifecycle methods of the portlet: processAction, processEvent, render, and serveResource. During rendering, you can create portlet URLs that address these parameters.

The following table lists all predefined public render parameters and explains their semantics. All of them represent portal-specific state information and are part of the following namespace:

```
http://www.ibm.com/xmlns/prod/websphere/portal/publicparams
```

|Local name|Value (String array)|Description|
|----------|----------------------|-----------|
|selection|Serialized ObjectID/unique name of page; for example, [Z6\_0000000AGKJ0G3RCD00]|Parameter that provides read/write access to the portal page selection information in the navigational state.<br>This parameter can be used to create portlet URLs to portal pages, read the page selection, or modify it during action/event processing.|
|URI|Serialized URI; for example, [pm:oid:Z3\_SASD8732DSG3RCD00]|Parameter that allows for addressing portal resources that use POC URIs.<br>This parameter can be used to create portlet URLs that address an arbitrary portal resource through its POC URI.|
|locale|Serialized locale; for example, [en]|Parameter that provides read/write access to the locale information in the navigational state.<br>This parameter can be used to address a certain locale through a portlet URL, read the locale information from the state, or modify it during action/event processing.|
|themeTemplate|Template name; for example, [Plain]|Parameter that provides read/write access to the theme template that is used during rendering.<br>This parameter can be used to create portlet URLs that enforce a certain theme template that is used for rendering the addressed portal page. The parameter can also be used to read the theme template information from the state or modify it during action / event processing.|
|editMode|Serialized boolean value; for example, [true]|Parameter that provides read/write access to the state of the page edit mode. A value of true means that page edit mode is active; a value of false indicates that it is inactive.<br>This parameter can be used to create portlet URLs that address page edit mode, read the state of the page edit mode or modify it during action/event processing.|
|infoMode|Serialized boolean value; for example, [false]|Parameter that provides read/write access to the state of the page information mode. A value of true means that page information mode is active; a value of false indicates that it is inactive.<br>This parameter can be used to create portlet URLs that address page information mode, read the state of the page edit information mode or modify it during action/event processing.|
|showTools|Serialized boolean value; for example, [true]|Parameter that provides read/write access to the state of the site toolbar; a value of true means that the toolbar is opened, a value of false indicates that it is closed.<br>This parameter can be used to create portlet URLs to open / close the toolbar, read the toolbar state, or modify it during action/event processing.|


