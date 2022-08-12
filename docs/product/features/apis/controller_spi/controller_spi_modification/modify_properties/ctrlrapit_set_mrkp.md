# Setting supported markups

You can set supported markups on modifiable instances that implement the ModifiableMarkupCapable interface.

For example, these can be the following:

-   `ModifiableContentPage`
-   `ModifiableContentLabel`
-   `ModifiableContentURL`

**Note:** For content nodes, that is content pages, content labels, and content URLs, you need to set a supported markup. Otherwise they will not show in the read-only model.

To set the supported markups for a resource, proceed as follows:

1.  Obtain a modifiable instance of the resource for which you want to set supported markups.

2.  Use the appropriate methods of the `ModifiableMarkupCapable` interface to set supported markups.

    For example, if you want to set a markup, use the `addMarkup` method.


Example - Setting a supported markup on a layout control \(error handling omitted\):

```

// obtain markup list 
final MarkupList markupList = ...;

// obtain modifiable instance of a layout control
final Modifiable modifiable = lmController.getModifiableNode(control); 

// obtain markup object
Markup markup = markupList.getByName("html");

// set markup 
((ModifiableMarkupCapable) modifiable).addMarkup(markup);

```

For more detail about the markup list in the first line of the example and how to obtain it refer to [Obtain a model from the portal](dgn_modelobt.md).

**Parent topic:**[Modifying properties](../dev/ctrlrapit_mdfy_props.md)

**Parent topic:**[Portal administration](../practitioner_studio/administration.md)

