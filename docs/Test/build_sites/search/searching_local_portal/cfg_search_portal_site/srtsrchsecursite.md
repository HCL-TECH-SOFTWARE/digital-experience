# Enabling search on a secured portal site with the default configuration

By modifying some of the settings, you can use the default search collection to configure search of a secured portal site.

In order for you to use Portal Search for searching your portal site, HCL Portal already prepared a search collection and a content source during installation. For more information, see the topic about configuring a crawler to search your local portal site. To enable that search collection on a secured portal site for search by users, encrypt the user ID and activate the search collection by starting the crawl and indexing process.

1.  To ensure encryption of the user ID and password for the crawler, update and run the file searchsecret.xml by using the XML configuration interface. For more information, see the topic about Encrypting sensitive data.

2.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.

3.  Click **Search Collections**, which opens the Search Collections panel.

4.  From the list of search collections, click the portal site search collection **Portal Content** **Default Search Collection**.

    This step opens the Content Sources panel for the portal site search collection. It lists the Portal Search content sources.

5.  For the Portal Content Source, set the crawler user ID as described in the following procedure.

    !!! note
        It is of benefit to define a dedicated crawler user ID. The pre-configured default portal site search uses the default administrator user ID wpsadmin with the default password of that user ID for the crawler. If you changed the default administrator user ID during your portal installation, the crawler uses that default user ID. If you want the crawler to use the user ID wpsadmin and its default password, you can omit the following substeps and proceed with the next main step. If you changed the password for the wpsadmin or other administrative user ID, or if you changed the default administrator user ID to an ID other than wpsadmin, or if you want to use a separate user ID, proceed as follows:

        1.  For the Portal Content Source, click the **Edit** icon.

        2.  Update the user ID and password as needed in the Security tab.

        3.  Click **Save** to save your changes.

    !!! note
        Set the preferred language of the portal site crawler user ID to match the language of the portal site search collection that it crawls. If you already started a crawl on the portal site search collection, you must reset the portal site collection. For details, see the topic about Resetting the default search collection.

6.  Click the **Start Collecting** icon to start the crawl.

    The crawler starts collecting and indexing portal pages. By default, the crawl is scheduled to run for 1 hour. The scheduler for regular repeated crawls is disabled by default. If you enable it, the interval for scheduled crawls is every hour. You can set these parameters by using the **Manage Search** portlet:

    1.  You can change the duration of the crawl, depending on the size of your portal installation. Edit the portal site content source under **General Parameters**.

    2.  You enable scheduled crawls by clicking the icon **View Content Source Schedulers** for the content source and clicking **Disabled** in the status column for the scheduler. The status changes to **Enabled**.

    3.  You change the interval for scheduled crawls by editing the portal site content source, selecting the **Schedulers** tab, deleting the default scheduler, and defining a new one.


!!! note
    1.  When you crawl a portal site, be aware that a Portal Search crawl can use extended memory and time, depending on your Portal Search environment and configuration. For details, see the topic about Hints and tips for Portal Search crawls.
    2.  If a user tried to use the Search Center by entering a search string in the portal search box in the theme and clicking search before an administrator enabled the portal site search collection, the user must log out of the portal and log back in again to be able to search the portal search collection. This action includes the administrator who enabled the portal search collection.


