# Setting titles and descriptions

You can set the titles and descriptions of a resource.

1.  Obtain a modifiable instance of the resource for which you want to set titles or descriptions.

2.  Check whether the resource implements the `ModifiableLocalized` interface.

    To check, use the operator `instanceof`. If the resource does not implement the `ModifiableLocalized` interface, you cannot modify it.

3.  Use the appropriate methods to set titles and descriptions.

    For example, if you want to set a title, use the `setTitle` method.

    **Note:** You cannot set a description in a particular locale without having a title that is set in that same locale.


Modifying titles and descriptions:

```
// obtain modifiable instance of a model node
final Modifiable modifiable = controller.getModifiableNode(node); 

// check if the resource implements ModifiableLocalized interface
if (modifiable instanceof ModifiableLocalized) {

    // set title and description
    ((ModifiableLocalized) modifiable).setTitle(Locale.GERMAN, "Titel");
    ((ModifiableLocalized) modifiable).setDescription(Locale.GERMAN, "Beschreibung");
}
```

**Parent topic:**[Modifying properties](../dev/ctrlrapit_mdfy_props.md)

