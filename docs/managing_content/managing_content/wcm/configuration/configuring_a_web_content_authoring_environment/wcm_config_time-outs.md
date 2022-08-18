# Increase timeouts to prevent save errors

If users are experiencing timeout errors when they try to save items, you can increase the total transaction lifetime timeout setting of your HCL Portal server.

The `total transaction lifetime timeout` setting is changed by using the WebSphere® Integrated Solutions Console.

Go to **Servers** \> **Server Types** \> **WebSphere application servers** \> **portal\_server** \> **Container Services** \> **Transaction Service**.

The `total transaction lifetime timeout` setting must be changed to the same amount on all the servers in your web content system.

## Alternatives to increasing server timeouts

Increasing the `total transaction lifetime timeout` setting might not always be the best solution to server timeouts. Increasing this setting too much might cause a drop in performance. Timeout errors that are generated when saving items occur when the current transaction finishes before the item is saved. If the item you are saving contains large amounts of data, it might be better to redesign the item rather than change the `total transaction lifetime timeout` setting:

|Option|Details|
|------|-------|
|Authoring Templates|If many elements are added to an authoring template, you might experience a timeout error when an item is saved. Instead of using a single authoring template, create multiple authoring templates that contain only those elements that are required for a specific task.|
|Presentation templates and components|You might receive timeout errors when you try to save presentation templates or components that contain large amounts of HTML or rich text in their designs. You can instead create multiple HTML or rich text components and then reference these components in the presentation templates or component designs.|
|Site areas and content items|You can receive timeout errors when you try to save site areas and content items that contain elements that use large amounts of HTML. You can instead create multiple HTML or rich text components and then reference these components in element designs.

 If many elements are added to a site area or content item, you can also experience a timeout error when you try to save the item. In this case, you can reduce the number of elements that are stored in the site area or content item.

|
|Downloadable files|Another alternative to creating web content with large amounts of HTML or rich text is to provide information on your website in the form of downloadable files. These files can be stored as file resource elements.|

**Parent topic:**[Configuring a web content authoring environment](../wcm/wcm_install_cfgauthoring.md)

