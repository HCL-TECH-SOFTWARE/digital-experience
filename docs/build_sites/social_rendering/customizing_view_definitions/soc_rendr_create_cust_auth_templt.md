# Creating custom authoring templates for list definitions

Social rendering provides you a set of view definitions that you can use to add social data to your portal pages. These list view definition content items are created from the social list definition HCL Web Content Manager authoring template. You can create your own custom list view definitions by creating new content items from this authoring template. To customize social rendering even further, you can also create your own authoring templates to extend the data set that makes up your list view definitions.

Your presentation components can then use the additional data that is provided by your custom authoring templates to control the rendering behavior for the lists. For example, you can add an option to have the page editor control whether the paging component for the social list is rendered or not. Social rendering can render content items that are created by such an extended authoring template in the same way as the default social lists do.

If you create a custom authoring template, make sure that it contains all the elements that are recognized by the `ListRenderingContext` rendering plug-in. This way you ensure that the Digital Data Connector \(DDC\) for HCL Portal framework can establish the appropriate query context when retrieving data from the remote HCL Connections server. To create a custom authoring template, proceed by the following steps:

1.  Copy the Social List Definition authoring template.

2.  Keep all elements that the template already contains.

3.  Add new elements as required.

4.  You can also change the default for the existing elements or modify the authoring template user interface for those elements.



???+ info "Related information"
    - [Roadmap: How to work with social rendering](../soc_rendr_roadmap.md)

