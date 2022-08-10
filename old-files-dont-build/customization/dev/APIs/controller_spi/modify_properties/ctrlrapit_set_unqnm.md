# Setting unique names

You can set unique names for resources.

To set the unique name for a resource, proceed by the following steps:

1.  Obtain a modifiable instance of the resource for which you want to set the unique name.

2.  Check whether the resource implements the `ModifiableIdentifiable` interface.

    To do this, use the operator `instanceof`. If the resource does not implement the `ModifiableIdentifiable` interface, you cannot modify it.

3.  Obtain a modifiable instance of the resource object ID, that is `ModifiableObjectID`. To do this, use the `getModifiableObjectID`.

4.  Set the unique name by using the `setUniqueName()` method of the `ModifiableObjectID`.


Example - Setting unique names:

```
// obtain modifiable instance of a model node
final Modifiable modifiable = controller.getModifiableNode(node); 

// obtain modifiable instance of the resource's object id; note that modifiable  
// instances of all model nodes implement the ModifiableIdentifiable interface
final ModifiableObjectID modifiableObjectID = ((ModifiableIdentifiable) 
modifiable).getModifiableObjectID();

// set unique name
modifiableObjectID.setUniqueName("MyUniqueName");

```

**Parent topic:**[Modifying properties](../dev/ctrlrapit_mdfy_props.md)

