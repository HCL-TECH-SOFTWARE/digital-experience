# Deleting a virtual portal

You can delete a virtual portal by using the Virtual Portal Manager portlet.

**Note:** You cannot delete the initial portal installation.

After the virtual portal resource is deleted, the scoped resources of that particular virtual portal are deleted later by a scheduled cleanup service. The URL mapping that was created when the virtual portal was created is also deleted. The following resources are not deleted:

-   The unscoped resources that were available in the virtual portal; they belong to the initial portal installation and are therefore not deleted.
-   Extra URL mappings which administrators might have created manually are not deleted.

**Note:** If you delete a virtual portal and you want to create a new virtual portal immediately after the deletion by using the same URL context, you do not have to wait for the scheduled cleanup service. Run the cleanup task for deleting resources by running the XML script Task.xml of the XML configuration interface. Then, you can create the new virtual portal. For details, see *Working with the XML configuration interface*.

## Preparing the deletion of virtual portals

Virtual portals can be created in environments where multiple portal installations share database domains, such as Community or Customization. This environment can be in a staging environment or for different lines of production. In this case some portal resources, such as page customization within a virtual portal, can be visible in several of these installations. If you delete a virtual portal, then this portal installation cannot determine whether the corresponding resources can be deleted or if they are still valid in the context of other portal installations and must be preserved. It is the responsibility of the portal administrator to decide whether clean-up of related resources that are in shareable database domains is required before a virtual portal is deleted. The administrator must decide whether these resources are obsolete or still in use. You can complete the cleanup in two ways:

-   Manual cleanup of virtual portal resources in shared database domains. To clean up manually, proceed as follows:
    1.  Connect to the virtual portal that you want to delete.
    2.  Clean up the two database domains Community and Customization. Run the XML configuration scripts DeleteSharedCommunityContent.xml and DeleteSharedCustomizationContent.xml.
    3.  Delete the virtual portal.
-   Automated cleanup of virtual portal resources in shared database domains. Run the configuration task `delete-virtual-portal` and specify either the URL context or the host name of the virtual portal that you want to delete. Example syntax for both options:
    -   For IBM® i:
        -   ```
ConfigEngine.sh delete-virtual-portal 
                -DremoveResourcesInSharedDomains=true 
                -DVirtualPortalContext=URL\_context\_of\_the\_VP

```

        -   ```
ConfigEngine.sh delete-virtual-portal 
               -DremoveResourcesInSharedDomains=true
               -DVirtualPortalHostName=host\_name\_of\_the\_VP
```

    -   For Linux™:
        -   ```
ConfigEngine.sh delete-virtual-portal 
                -DremoveResourcesInSharedDomains=true 
                -DVirtualPortalContext=URL\_context\_of\_the\_VP

```

        -   ```
ConfigEngine.sh delete-virtual-portal 
               -DremoveResourcesInSharedDomains=true
               -DVirtualPortalHostName=host\_name\_of\_the\_VP
```

    -   For Windows™:
        -   ```
ConfigEngine.bat delete-virtual-portal 
                 -DremoveResourcesInSharedDomains=true 
                 -DVirtualPortalContext=URL\_context\_of\_the\_VP

```

        -   ```
ConfigEngine.bat delete-virtual-portal 
                -DremoveResourcesInSharedDomains=true
                -DVirtualPortalHostName=host\_name\_of\_the\_VP
```


For a list of database domains that can be shared, read the topic about Shared database domains and sharing database domains for your environment.

## Cleaning up remaining resources if a virtual portal has been deleted already

If a virtual portal was deleted already without prior cleanup of resources in shareable database domains, and if these resources cannot be accessed by any other portal installation that shares the database domains, proceed by the following steps to remove the remaining resources:

1.  Run the cleanup task for deleting resources by running the XML script Task.xml of the XML configuration interface.
2.  Re-create the virtual portal that was deleted by using the identical URL mapping.
3.  Follow the instructions to delete a virtual portal, including cleanup of resources in shareable database domains. This cleanup was described in the preceding section about Preparing for the deletion of virtual portals.

**Parent topic:**[Tasks for administering virtual portals](../admin-system/advptsk.md)

