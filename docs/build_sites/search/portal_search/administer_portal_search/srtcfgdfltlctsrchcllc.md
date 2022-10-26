# Configuring the default location for search collections

You can modify the default directory location under which search collections are created on a per search service basis. View some related information.

The default directory location under which search collections are created is as follows:

-   AIX and Linux: `wp_profile_root/PortalServer/collections`
-   Windows™: `wp_profile_root\PortalServer\collections`

This default can be applied when you create a new search collection, depending on the value you specify in the entry field **Location of Collection** when you create a search collection:

-   If you type a relative directory location of your choice, the location for the new search collection is combined from the default directory for search locations and the location that you type. Example: If you type my\_collection\_location, the new search collection is created under the directory `wp_profile_root/PortalServer/collections/my_collection_location`.
-   If you want to create the search collection in a location that is different from the default search collection location, type the full directory location. The new search collection is created under the directory location that you specified.

You can customize this default directory location under which search collections are created. To complete this process, you set the directory location of your choice as the value for the parameter `DefaultCollectionsDirectory` for the search service. You can configure this parameter for each search service separately. The value that you set for this parameter is prefixed to the relative location that you specify when you are creating a search collection for that search service.

The specified value determines the default directory location for the search collections that you create. When you create a search collection and specify only a relative path \(not a full path location\), the default value that is set by this parameter and the relative path that you specify are combined. These values form the full directory path under which the search collection is created. If you do not specify a value for `DefaultCollectionsDirectory`, the default directory for search collections remains as set by the installation as described previously.

To configure a different default search collection location, proceed by the following steps:

1.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration > **Manage Search**.

2.  Click **Search Services**.

3.  Click **New Search Service**. Or, if you want to customize the default collection location for an existing search service, click **Edit** for that search service.

4.  Set the value of your choice for the parameter `DefaultCollectionsDirectory` for the search service. The value that you set for this parameter is prefixed to the relative location that you specify when you are creating a search collection. For details about the value, refer to the previous description.

5.  Click **OK** to save your updates. Manage Search returns to the Search Services panel.

    !!! note
        1.  The directory location that you specify can be on a different hard disk drive or workstation.
        2.  If you change the value for the DefaultCollectionsDirectory parameter, make sure that you do all of the following steps:
            -   Specify a full directory path, for example, /root/our\_search\_collections.
            -   On the specified hard disk drive, create the directory that you specify as the value for the DefaultCollectionsDirectory parameter.
            -   Manage the write access to the directory to enable creation of search collections in that directory.
        3.  The value that is set for this parameter is used only if during the creation of a new search collection you specify a relative directory for the location of the new search collection. If you specify a full directory for the location of the search collection, the collection is created in that directory. In this case, the value that is set for the default directory under the search service has no effect. Instead, it is overwritten by the full directory location that you specify for the search collection.
        4.  The initial default directory is created during the installation. The process has write access to this default directory.
        5.  The default site collection that is part of the installation is created under the default directory. Creation of the site collection is started when you navigate to the Manage Search portlet. If you created the site collection by navigating to the Manage Search portlet before you changed the default directory for the collection location, you might want to relocate the site collection to your new default directory. For details about how to do this step, see the topic about Resetting the default search collection.
        6.  If you set up a remote search service, for example for a cluster, then this parameter is mandatory. You must configure the default location for search collections to a directory on the remote server that has write access.
        7.  The file path length for search collections is limited to 118 characters. If this limit is exceeded, the collection cannot be created. In this case specify a shorter value for the parameter DefaultCollectionsDirectory. For details about this process, read *Creating the portal site search collection fails*.

        This issue can occur particularly when the site collection is created under one of the following operating systems.

        -   AIX
        -   Linux

