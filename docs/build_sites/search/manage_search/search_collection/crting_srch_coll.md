---
id: crting_srch_coll
title: Creating a search collection
---

Create a search collection for your search service.

!!! note
    The parameters that you select when you create the search collection cannot be changed later. Therefore, plan carefully when you create a new search collection. If you want to change the parameters, you must start over by creating a new search collection with new parameters. You can then export the data from the old collection and import it into the new collection. For more information, see *Exporting a search collection* and *Importing a search collection*.

1.  Click **New Collection** from the Search Collections portlet page.

2.  Enter the directory path where you want the new search collection to be created and the related data to be saved in the Location of Collection field. You can insert a full path or a path relative to the Collections Locations search service parameter.

    The search collection is in the following location:

    -   If you type a name of your choice, the location for the new search collection is combined from the default directory and the name. For example: If you type my\_collection\_location, the new search collection is created in the directory wp\_root/collections/my\_collection\_location.
    -   If you type the full directory path, the location for the new search collection is different from the default search collection location. The new search collection is created in the directory location that you specify.
    
3.  Enter a name for the new search collection in the Name of Collection field. If you do not enter a name, the location that you entered in the previous field is used for the search collection.

4.  Select a language for the search collection from the **Specify Collection Language** menu.

    The search collection and its index are optimized for the language. This feature enhances the quality of search results for users, as it allows them to use spelling variants, including plurals and inflections, for the search keyword. Search uses this language for indexing if no language is defined for the document.

    !!! note
    This setting is not overwritten when you import a search collection. For example, during the migration of a search collection, if you create the search collection for migrating an existing collection, choose the selection to match the source collection.

5.  Select a summarizer for the search collection from the **Select Summarizer** menu. Choose from the following choices:

    -   Choose **None** if no summary is generated. If you select this option, the Search Center uses the description metadata from the document, if one is available.
    -   Choose **Automatic** if an automatic summarizer is generated.

6.  Click **OK**.


A new Search Collection is created and is listed in the Search Collections portlet page.

