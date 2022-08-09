# Importing search web collections

As a part of preparing your source environment, you exported web collections. After you export a search web collection from a source portal, you can import the data into a new, empty collection on the target portal. Importing a web collection retains most of the configuration data such as content sources, schedulers, filters, and language settings. If you configured such settings when creating the new collection, they are overwritten by the imported settings.

When you import a web collection, a background process fetches, crawls, and indexes all documents that are listed by URL in the previously exported file. Therefore, be aware of the memory and time that is required for crawls. For more information, see *Hints and tips for using Portal search*.

Complete the following steps on the target portal, using the Manage Search portlet:

1.  If you are migrating to a remote server, copy the XML file that contains the exported web collection to the server where the new version of WebSphere® Portal is installed.

2.  In the **Search Collections** box, click **New Collection** to create an empty collection.

3.  Specify the required information in the **Location of Collection**, **Name of Collection**, and **Description of Collection** fields, and then click **OK**.

4.  To include the security information when you import the search collection, add the WS\_KEY parameter to the search service that contains the target search collection. Complete the following steps:

    1.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.

    2.  Click **Search Services**.

    3.  Click the **Edit** icon for the search service that contains the target search collection.

    4.  In the **Parameter key** field, enter WS\_KEY.

    5.  In the **New parameter value** field, enter secret.

    6.  Click **Add Parameter**.

    **Note:** If you do not import the security information when you import a search collection, you must manually add the user name and password to each content source after you import the search collection into the target portal.

5.  Click the **Import or Export Collection** icon for the collection that you created.

6.  In the **Specify Location** field, enter the full directory path and XML file name of the file that you exported.

7.  Click **Import**.

8.  Edit the Content Source Configuration details to ensure that the settings match your target environment:

    1.  Select the imported search collection to edit.

    2.  Click the **Edit Content Source** icon.

    3.  On the General Parameters tab, update the **Collect documents linked from this URL** field to match your target environment. The update might require changing the name of the target server and the port information. When you import a collection from a version of HCL Portal before 8.0, you need to add the context root path of the portal application. For example, adding /wps to the URL following the port information.

    4.  On the Security tab, update the **Security Realms** to match your target environment.

    5.  Click **Save**.

9.  Click the **Search and Browse the Collection** icon for the collection that you created.

10. Verify that the documents found are the same as the collection that you created on the earlier portal server, and that the links work as expected.

    Any inconsistencies between the exported document count and the imported document count should be resolved the next time the cleanup daemon runs.


**Parent topic:**[Portal tasks](../migrate/mig_post_portaltasks.md)

**Related information**  


[Exporting search web collections](../migrate/mig_t_export_webcoll.md)

[Hints and tips for using Portal Search](../admin-system/srrhinttips.md)

