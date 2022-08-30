# Exporting search web collections

Use the Manage Search portlet to export search web collections from a source portal. Before you export a collection, make sure that the user who is running the portal application process has write access to the target directory location.

1.  To include the security information when you export the search collection, add the WS\_KEY parameter to the search service that contains the source search collection that you want to export. Complete the following steps:

    1.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.

    2.  Click **Search Services**.

    3.  Click the **Edit** icon for the search service that contains the search collection that you want to export.

    4.  In the **Parameter key** field, enter WS\_KEY.

    5.  In the **New parameter value** field, enter secret.

    6.  Click **Add Parameter**.

    7.  Click **OK**.

    **Note:** If you do not export the security information when you export a search collection, you must manually add the user name and password to each content source after you import the search collection into the target portal.

2.  Click **Manage Search.**

3.  Click **Search Collections**.

4.  Click the **Import or Export Collection** icon for the collection that you want to export.

5.  In the **Specify Location** field, enter the full directory path and XML file name to which you want to export the document collection and its data.

6.  Click **Export**.



**Related information**  


[Importing search web collections](../migrate/mig_t_import_webcoll.md)

