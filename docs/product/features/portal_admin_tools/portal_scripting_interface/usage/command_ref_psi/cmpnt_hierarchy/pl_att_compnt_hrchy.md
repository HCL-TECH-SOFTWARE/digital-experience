# Plain attributes - Component hierarchy

In addition to the default attributes, components have the following attributes. Alternatively, shorter names are documented in the bean help.

|Attribute|Description|
|---------|-----------|
|position|The numeric position among the siblings, zero-based.|
|skinid|The identifier of the skin for the component.|
|skinname|The name of the skin for the component.|
|modifiable|A flag indicates whether the component can be modified.|
|deletable|A flag indicates whether the component can be deleted.|
|width|The width of the component, in pixel or percent.|

The skinid, modifiable, deletable, and width attributes are writable. The Boolean value of the flag attributes can be given as true/false, t/f, 1/0, or on/off. It is returned as true/false by the get command. The flag values are local values of the component. On derived pages, a component is modifiable or deletable only if the flag is also set on all base pages where that component is defined. The value of the width attribute can be given as a number of pixels, or as a numeric percentage followed by the percent sign.

The skinname attribute is not writable, but the value depends on the skinid attribute. The position attribute is not writable either, but the value depends on the organization of the component tree. For more information, see *Organization*.

Jython example:

```
# examples for setting attributes of the selected node
Layout.set("modifiable", "true")
Layout.set("deletable", "0")
Layout.set("width", "350")
```

Jacl example:

```
# examples for setting attributes of the selected node
$Layout set modifiable true
$Layout set deletable 0
$Layout set width "350"

```

Containers have the following extra attributes:

|Attribute|Description|
|---------|-----------|
|orientation|The orientation of the container.|

The orientation attribute is writable. The value is returned as horizontal or vertical. It can be set as horizontal/vertical or as row/column or as row/col.

Controls have the following extra attributes:

|Attribute|Description|
|---------|-----------|
|portletdefinition|The ID of the portlet that is shown in the control.|
|portletentity|The ID of the portlet entity that is shown in the control.|

These attributes are not writable.

**Parent topic:**[Component hierarchy \| Portal scripting interface](../admin-system/compnt_hrchy.md)

**Related information**  


[Organization \| Portal Scripting Interface](../admin-system/organization.md)

[Lifecycle - Component hierarchy](../admin-system/lifecycle_compnt_hrchy.md)

