# Setting metadata 

You can set metadata on all modifiable instances that implement the `ModifiableMetaDataProvider` interface.

To set metadata for a resource, proceed by the following steps:

1.  Obtain a modifiable instance of the resource for which you want to set metadata.

2.  Check whether the resource implements the `ModifiableMetaDataProvider` interface.

    To do this, use the operator `instanceof`. If the resource does not implement the `ModifiableMetaDataProvider` interface, you cannot modify it.

3.  Obtain a modifiable instance of the metadata of the resource.

4.  Set the metadata by using the appropriate methods.

    For example, if you want to set metadata, use the `setValue` method.


Example - Setting metadata for a resource:

```
// obtain modifiable instance of a model node
final Modifiable modifiable = controller.getModifiableNode(node); 

// check if the resource implements ModifiableMetaDataProvider interface
if (modifiable instanceof ModifiableMetaDataProvider) {

    // obtain modifiable intance of the resource's meta data
    final ModifiableMetaData modifiableMetaData = ((ModifiableMetaDataProvider) 
        modifiable).getModifiableMetaData();

    // set meta data
    modifiableMetaData.setValue("MyKey", "MyValue");
}
```

**Parent topic:**[Modifying properties ](../dev/ctrlrapit_mdfy_props.md)

