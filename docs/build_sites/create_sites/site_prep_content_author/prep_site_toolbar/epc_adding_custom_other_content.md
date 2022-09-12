# Implementing portlets for the site toolbar

The toolbar tabs of the Portal 8.5 site toolbar are represented as portal pages. The content of the toolbar tabs can be implemented by using portlets.

Use the Java Portlet API to implement these portlets. For more information, see Predefined public render parameters.

## Accessing the main portal page running in the view area

If you want your toolbar portlet to access the main portal page that is currently displayed in the view area, you can use the following public render parameter. This parameter carries the serialized ObjectID of the main portal page, not the one of the toolbar content page. Use this ObjectID to locate the content page in the content model hierarchy of your portal using the public Model SPI or the Remote Model SPI if you want to query page information using REST. You can display properties of the main page in your toolbar portlet or even modify page properties by using the Controller SPIs.

```
{http://www.ibm.com/xmlns/prod/websphere/portal/publicparams}selection
```

## Working with page edit mode and page view mode

You can configure your toolbar portlet to differentiate between page edit mode and page view mode. In page edit mode, your content authors, page editors and administrators can modify the main portal page that is currently displayed in the main view area. In page view mode, you can provide read-only information about the main portal page. You can use the following public render parameter to detect if page edit mode is active or inactive.

```
{http://www.ibm.com/xmlns/prod/websphere/portal/publicparams}editMode
```

## Working with page information mode

Use the following public render parameter if you want your toolbar portlet to display additional help information for your content authors, page editors and administrators. Or, use it if page information is active.

```
{http://www.ibm.com/xmlns/prod/websphere/portal/publicparams}infoMode
```

## Drag and Drop

If you want your toolbar tab to display a list of items that can be dragged to the portal page that is currently displayed in the main view area, you need to make these items draggable according to the Drag and Drop model of HTML 5. For more information, see *Customize drag and drop*.