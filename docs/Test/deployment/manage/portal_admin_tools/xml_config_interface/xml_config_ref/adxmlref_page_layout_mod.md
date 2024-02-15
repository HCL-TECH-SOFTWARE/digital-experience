# Page layout modifications

When you use an XML script to update an existing page with a new layout, you create or update child elements of type component for the content-node element of the page. Normally you use the XML script to define a complete new layout of the page rather than combine the existing layout with your new definitions. In such cases the XML configuration interface applies special processing.

After it has updated the page layout, it deletes all components in the page that existed before but were not updated by the script. As a result, the page contains only those layout components that are specified in the XML script and no remainders of its previous layout. Otherwise you could easily end up with an invalid component structures.

In particular, this means that if you update a page layout in ID generating mode, all existing components of the page are deleted, and a new layout is created instead, even if the new layout is identical to the old one. This happens because components can only be looked up by their object IDs, and lookup by object ID is not possible in ID generating mode. Therefore all the components specified in the XML script are created, because they cannot be found for updating, and all existing components are deleted because they were not updated.

If you want to update specific components in the page but do not want to delete the existing page layout, you can turn off this special processing by specifying the attribute preserve-old-layout="true" for the content node.


