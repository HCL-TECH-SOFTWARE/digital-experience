# Creating a content source


When you create a new content source for a search collection, that content source is crawled and the search collection is populated with documents from that content source. You can determine where the index crawls and what information it fetches.

1.  Click **New Content Source** from the open search collections page. Manage Search portlet displays the Create a New Content Source page.

2.  From the **Content source type** menu, select from the following options:

    -   **Web site**

        Select this option for all remote sites, which includes websites and remote portal sites. Only anonymous pages can be indexed and searched on remote portal sites.

    -   **Seedlist provider**

        Select this option when the crawler uses a seedlist as the content source for the collection.

    -   **Portal site**

        Select this option when the content source is your local portal site.

        !!! note
            When you create a portal site content source in a portal cluster environment that is configured with SSL, you need to provide the cell security information for the web server and the nodes. For example, in a cluster with the cluster URL `https://web_server/wps/portal`, the primary node URL `http://node_1:10039/wps/portal`, and the secondary node URL `http://node_2:10050/wps/portal`, you need to provide the user ID and password for the web server and both nodes 1 and 2.

    -   **Web Content Manager site**

        To make a content source of this type available to Portal Search, you need to create it in the Web Content Manager Authoring portlet. You select the appropriate option to make it available for search and specify the search collection to which it belongs. When you complete creating the Web Content Manager site, it is listed among content sources for the search collection that you specified. For information about how to construct the URL for the content source, read [Seedlist 1.0 REST service API](../../../crawling_webcontent_seedbase/wcm_searchseed/wcm_dev_search_seedrestapi.md).

    Your selection determines some of the entry fields and options that are available for creating the content source. For example, the option Obeyrobots.text in the Advanced Parameters tab is available only if you select **Web site** as the content source type.

    For some content sources, you might need to enter sensitive data, such as a user ID and password. For example, this action applies to secured HCL Portal sites. To ensure encryption of this sensitive data when it is stored, update and run the file searchsecret.xml by using the XML configuration interface before you create the content source

3.  Set the parameters and configure the content source from the tabs.

    1.  Before you start the crawl, set the preferred language of the crawler user ID to match the language of the search collection that it crawls.

    2.  In the **General parameters** tab, you must set the URL for the content source in the field **Collect documents linked from this URL**. The crawler needs this URL for crawling. For information about how to construct the URL for the content source, read [Seedlist 1.0 REST service API](../../../crawling_webcontent_seedbase/wcm_searchseed/wcm_dev_search_seedrestapi.md) in the Web Content Manager documentation.

        !!! note
            A crawler failure can be caused by URL redirection problems. If a failure occurs, try editing this field. For example, change the URL to the redirected URL.

    3.  In the **General parameters** tab, you can set a timeout for crawling a website content source by using **Stop collecting after \(minutes\)**. The timeout works only for website content sources. It is an approximate time limit that might be exceeded by some percentage. The crawl action is put in a queue. Therefore, it might take several minutes until it is run and the time counter starts.

    4.  In the **Advanced Parameter** tab, the entry field for the Default Character Encoding contains the initial default value windows-1252, regardless of the setting for the Default Portal Language. To go to the Default Portal Language, click the **Administration menu** icon. Then, click **Portal Settings** \> **Global Settings**. Enter the required default character encoding, depending on your portal language. Otherwise, documents might be displayed incorrectly in Browse Documents.

    5.  In the **Schedulers** tab, define a crawl schedule. The crawl starts at the next possible time that you specify.

4.  Click **Create**.


-   **[Setting the general parameters for a content source](st_gn_prm_cntsrc.md)**  
Set the general parameters for the content source by completing the entry fields and making your selections in the General Parameters tab.
-   **[Setting the advanced parameters for a content source](st_adv_prm_cntsrc.md)**  
Set the advanced parameters for the content source by completing the entry fields and making your selections in the Advanced Parameters tab.
-   **[Configuring](configuring.md)**  
Configure the **Schedulers**, **Filters**, and **Security** from the respective tabs in the Create a New Content Source page.

