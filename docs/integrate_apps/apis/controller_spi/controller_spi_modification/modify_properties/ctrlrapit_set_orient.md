# Setting the orientation for layout containers

You can set the orientation for modifiable instances of `LayoutContainer` nodes.

To set the orientation for a layout container, proceed by the following steps

1.  Obtain a modifiable instance of a layout container.

2.  Obtain the modifiable layout metrics instance.

3.  Set the orientation by using the `setValue()` method.


Example - Setting orientation of an existing layout container:

```
//  get modifiable instance of layout container
final ModifiableLayoutNode modifiable = (ModifiableLayoutNode) lmController.getModifiableNode(container);

//  get modifiable layout metrics and set the orientation
ModifiableLayoutMetrics modifiableLayoutMetrics = modifiable.getModifiableLayoutMetrics();
modifiableLayoutMetrics.setValue(LayoutMetrics.ORIENTATION, Orientation.HORIZONTAL);
```

**Note:** If you do not set the orientation of a container, it is automatically set when you insert the container into the topology of the controller by the following rules:

-   If a new root container is inserted into an empty topology, horizontal orientation is used for the new root container.
-   If a new root container is inserted into a topology that is not empty, the new root container is set to the opposite orientation of the existing root container. For example, if the existing root container had horizontal orientation, the new root container will have vertical orientation.
-   If a container is inserted as the child of an existing parent container, the child container is set to the opposite orientation of the parent container.

**Parent topic:**[Modifying properties](../dev/ctrlrapit_mdfy_props.md)

