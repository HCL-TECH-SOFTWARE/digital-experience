# Mandatory and optional attributes

Depending on the action that you perform by using the XML configuration interface, some attributes can be mandatory or optional.

Normally, you to specify only that part of the configuration data for an XML element that is necessary for the required operation. For example, when you delete a portlet, it is sufficient to specify its reference ID to identify it; it makes no sense for this operation \(although it is not forbidden\), to specify a new active state, since the portlet is removed anyway.

When creating a new portal resource, some required attributes \(depending on the type of resource\) must be specified. Others can be omitted. They are then set to a default value.

When you update an existing portal resource, all attributes are optional, except those required to locate the element. The omitted attributes remain unchanged. In a few cases of page layout attributes, there is the possibility of explicitly specifying an "undefined" value. This means that the attribute is not defined at the respective level, but inherited. For example, if the skin for a component is undefined, it will be inherited from the setting of its page.

Note that there is a semantic difference between the following XML fragments:

```
     <content-node uniquename="MyPages" action="update" active ="true"/
```

and

```
     <content-node uniquename="MyPages" action="update" active ="true" skinref="undefined"/>
```

The first fragment only modifies the active attribute of the page and leaves its skin setting unchanged; the second fragment additionally resets the skin to the undefined value \(whatever the previous skin setting was\), so that the page will always display in the portal default skin.

**Parent topic:**[XML configuration reference](../admin-system/adxmlref.md)

**Related information**  


[Error recovery](../admin-system/adxmlref_errecovr.md)

