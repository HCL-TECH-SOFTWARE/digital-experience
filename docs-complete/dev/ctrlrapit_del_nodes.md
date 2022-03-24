# Deleting Nodes 

To delete nodes, use the `delete()` method of the controller.

1.  Obtain an appropriate controller.

2.  Locate the resource that you want to delete. Use an appropriate locator of the controller, or search the model by iterating until the required node is found.

3.  Delete the resource by using the `delete()` method of the controller.

4.  Persist your modifications by using the `commit()` method of the controller.


Example 1 - Deleting a node \(error handling omitted\):

```
// obtain locator of ContentModelController
final Locator locator = cmController.getLocator();

// locate page to delete
final ContentPage page = (ContentPage) locator.findByUniqueName("MyPage");

// delete the page
cmController.delete(page);

// commit the controller
cmController.commit();

```

**Parent topic:**[Modifying portal resources and topologies ](../dev/ctrlrapit_mdfy_restop.md)

