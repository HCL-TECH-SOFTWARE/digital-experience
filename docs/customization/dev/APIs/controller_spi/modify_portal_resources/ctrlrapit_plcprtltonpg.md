# Placing a portlet on a page

To put a portlet on a page, use the `insert()` method of the controller.

1.  Obtain a layout model controller for the page the portlet is to be put on.

2.  Obtain a `LayoutControlCreationContext`; this includes obtaining the portlet definition ID, and optionally the portlet entity ID.

3.  Create a layout control by using the context from the previous step and by using the `create()` method of the layout model controller.

4.  Insert the created layout control into the layout model controller.

5.  Persist your modifications by using the `commit()` method of the controller.


Example 1 - Placing a portlet on a page:

```
// obtain layout model controller
final LayoutModelController lmController = cmController.getLayoutModelController(page);

// obtain layout control creation context
final LayoutControlCreationContext context   = ... (portletDefinition, null);
//final LayoutControlCreationContext context = ... (portletDefinition, portletEntity);

// create layout control
final Modifiable control = lmController.create(LayoutControl.class, context);

// insert control into the topology of the layout model controller (given a container and a sibling)
lmController.insert(control, container, sibling);

// commit the content model controller
cmController.commit();
```

**Parent topic:**[Moving or Inserting Nodes](../dev/ctrlrapit_mvnsrt_nodes.md)

