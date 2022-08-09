# The rendering flow

Read about the rendering flow of Digital Data Connector \(DDC\) for HCL Portal.

The rendering flow is as follows:

1.  The Web Content Viewer portlet renders a list definition content item.
2.  The Web Content Manager rendering engine retrieves the associated presentation template to render the appropriate content item.
3.  The presentation template renders a `[Plugin:ListRenderingContext]` tag. This tag establishes the current list-rendering context.
4.  The presentation template renders a component reference that points to a list appearance component.
5.  The selection rule that is contained in the list appearance component triggers the bean list creation process in the DDC framework. The framework identifies the target DDC plug-in by inspecting the list-rendering context.
6.  The addressed DDC plug-in determines which data to load, and how to filter and sort the data, based on information that is pulled from the provided list-rendering context.
7.  The DDC plug-in loads the data and transforms it into a corresponding bean list data structure. The generic XML DDC plug-in implements this step by applying the list-rendering profile that the list-rendering context references to the loaded XML data.
8.  The DDC plug-in passes the resulting bean list object back to the list appearance component.
9.  The Web Content Manager rendering engine produces the markup for the data that is contained in the bean list. Web Content Manager design components can access the individual attributes of the items in the bean list by using the `[AttributeResource]` tag.

**Parent topic:**[Digital Data Connector \(DDC\) for HCL Portal](../social/plrf_ovu.md)

