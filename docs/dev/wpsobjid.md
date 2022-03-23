# Obtaining the object ID for a page or portlet 

There are several use cases when a portlet needs to obtain the object ID used to uniquely identify a portlet or a page. For example, the object ID of a page definition is required for a portlet to start a dynamic instance of that page.

You can use the lookup\(\) method of the JNDI Context class to obtain the object ID for a portlet or a page, passing the unique name of the page or portlet. As an alternative for portlets, you can obtain the object ID by using JNDI lookup\(\) and passing a combination of the portlet application ID and the portlet name.

-   For standard portlets, the portlet application ID is the value of the ID attribute of the <portlet-app/\> element in the portlet.xml. However, this attribute is not required by the Java Portlet Specification. If the ID attribute is not set, the portlet WAR file name is used as the portlet application ID.
-   For HCL portlets, the portlet application ID is the UID attribute of the <portlet-app/\> element. This attribute is required.

The following example shows both ways to find an object ID.

```xmp


// initialization
Context ctx = new InitialContext();

// portal:uniquename prefix is required for unique name lookup
Name uniqueName = new CompositeName("portal:uniquename");

// portal:config/ prefix required for portlet definition lookup
Name portletName = new CompositeName("portal:config/portletdefinition");

// the unique name assigned to the page is example.org.page
uniqueName.add(org.example.page);

ObjectID oidForName = (ObjectID) ctx.lookup(uniqueName);

// appID and portletName have already been set programmatically 
portletName.add(appID);
portletName.add(portletName);

ObjectID portletDefOID = (ObjectID) ctx.lookup(portletName);


```

The `Name` used for the lookup\(\) method is created from a `CompositeName`, which is prepopulated with the required portal prefixes enclosed in quotation marks. This technique is used to avoid having to escape special characters in the prefix.

For this example, the following packages are required at a minimum for the import statements:

-   `javax.naming.CompositeName`
-   `javax.naming.Context`
-   `javax.naming.Name`
-   `com.ibm.portal.ObjectID`

**Parent topic:**[Model SPI overview](../dev/dgn_modelovw.md)

