# Symbolic object IDs and ID generating mode

In some cases, you might need to use object ID attributes to express references between resources in your XML script, but you do not want these to be read from or written to the portal database. In this case, the object ID would be only a symbolic reference inside the XML script.

For example, you might want to create a new theme and page, and reference the theme in the page. Nevertheless you want to let the portal chose an object ID for it because you do not want to accidentally overwrite an existing resource.

There are two ways to achieve this:

-   You can switch the XML processing to **ID generating mode** by setting the create-oids flag on the main request tag: `<request . . . create-oids="true" . . . >`<br>

    In this mode, all object IDs are not written to or read from the portal database. Instead, their only purpose is to express the linking between resources in the XML. When the XML processing creates new resources, they are created with a new system generated object ID, not with the object ID specified in the XML.

-   When you use a value for an objectid attribute that cannot be decoded as an object ID, such as a simple string name, the XML processing treats it as symbolic and does not try to use it for looking up the object or write it to the database. This makes it possible to selectively treat individual object IDs as symbolic.

Note that even in symbolic object IDs, anything after the first space is not significant for processing. For example, you could use the following snippet to create a portlet and put it on a page using a symbolic object ID:

```

   <portlet action="update" . . . objectid="Welcome_Portlet" . . . >
       . . .
   <portletinstance action="update" . . . portletref="Welcome_Portlet" . . . >

```

As the object ID values are purely symbolic, you cannot use them in a reference without first "defining" them in the same XML script. Before you can use the portletref="Welcome\_Portlet" attribute specification in an XML update, you must also have a portlet with objectid="Welcome\_Portlet" defined in the same XML; otherwise a syntax error is reported.

Of course, the object IDs in the XML are also not used for looking up a resource. If you want to refer to an existing resource, you need to use a unique name instead. For details see the information later in this section and in the topic about *Lookup of portal resources*. In ID generating mode, the following snippet locates an existing portlet by its name, "defines" a symbolic object ID for it and places the portlet on a page:

```

   <portlet action="locate" name="Welcome Portlet" objectid="Welcome_Portlet">
        . . .
   <portletinstance action="update" . . . portletref="Welcome_Portlet" . . . >

```

As object IDs are not used to identify existing resources in ID generating mode, it is good practice to define unique names for all resources that are created in such scripts. That way, if the script is executed twice, the second execution can find and update the resource by its unique name, instead of creating two identical resources.

When you create resources using symbolic object IDs, it can sometimes be useful to know the actual object IDs of the new resources. You can set the export-mapping flag on the main request attribute to obtain this information:

```

     <request . . .export-mapping="true" . . . >  

```

When you set this flag, a mapping section is appended to the XML response. For every symbolic object ID given in the input, this mapping shows the actual object ID in the portal data store.

The ID generating mode is useful if you want to create an XML script that installs a group of new resources and is executed on many different portal installations. This can be, for example, a part of the installation procedure of a portal add-on that you give out to other parties. In this case, you have no control over the systems on which the XML script is executed, and it is of no interest to you which object IDs the resources actually get.

!!!note
    Use the ID generating mode for all the examples under Working with the XML configuration interface, because they should work on any portal installation.

The identity of the objects that are configured in the XML script is expressed by their object ID. Therefore you should use "real" object IDs in your scripts, when you want the objects in your XML to retain their identity. For example, when you use an XML export request and the resulting response file to copy a resource from a staging to a production system, the resource is created on the production system with the same object ID as on the staging system. This way you can establish a correspondence between the two resources. When you later transfer the same resource again, the XML processing looks up the resource by its object ID, finds that it already exists, and updates the existing resource instead of creating a new one.

When setting up the target system in such scenarios, you should use only the XML configuration interface to copy resources from the source system. If you deploy portlets on the target system during the portal installation or if you deploy them using the administration portlets, they will not have the same object IDs as on the source system, so you can run into problems when you later copy other resources that reference them.


???+ info "Related information" 
    -   [Error recovery](../../../../portal_admin_tools/xml_config_interface/xml_config_ref/adxmlref_errecovr.md)

