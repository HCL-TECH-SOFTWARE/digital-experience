# Moving or Inserting Nodes 

To move existing nodes or insert new nodes, use the `insert()` method of the controller.

1.  When you create a node, you must insert it into the topology of the model, for example, to make it visible and accessible for users.
2.  Operations that you defined on the controller itself, such as `hasChildren()` or `getLayoutModelController()`, work only after you insert the node.

1.  Obtain an appropriate controller.

2.  Identify the target location in the topology.

    You must have that information in a later step.

3.  Identify the resource that you want to move or insert as follows:

    -   For moving a resource, locate an existing node with the appropriate locators of the controller.
    -   For inserting a resource, create a modifiable instance that represents a new resource.
4.  Insert the resource into the topology of the controller by using its `insert()` method and by specifying its target location. This resource can be one of the following list:

    -   A parent node. In this case, the resource is inserted as the last child of the parent node.
    -   A parent node and a sibling node. In this case, the resource is inserted as the child of the parent node in a position immediately before the sibling node.
    -   No location information at all. In this case, the resource is inserted as a new root.

        **Note:** This insertion is not possible for all controllers. For example, you cannot insert a new root node into a `ContentModelController` that has a root node already.

5.  Persist your modifications by using the `commit()` method of the controller.


Example 1 - Moving an existing portlet to a different container \(error handling omitted\):

```
// obtain locator of LayoutModelController
final Locator locator = lmController.getLocator();

// locate portlet and target containers
final LayoutControl control = (LayoutControl) locator.findByUniqueName("MyControl");
final LayoutContainer parentContainer = (LayoutContainer) locator.findByUniqueName("MyParentContainer");
final LayoutContainer nextContainer = (LayoutContainer) locator.findByUniqueName("MyNextContainer");

// move portlet under parentContainer just before nextContainer
lmController.insert(control, parentContainer, nextContainer);


```

-   **[Placing a portlet on a page ](../dev/ctrlrapit_plcprtltonpg.md)**  
To put a portlet on a page, use the `insert()` method of the controller.

**Parent topic:**[Modifying portal resources and topologies ](../dev/ctrlrapit_mdfy_restop.md)

