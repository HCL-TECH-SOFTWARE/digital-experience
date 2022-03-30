# Customizing your search collection for secured portal pages 

Set up your own customized search collection for searching a secured portal site.

1.  Plan and determine which portlets and portal pages you want to be accessed by the crawler and made available for search. This must be the sum of all of the portal resources that you want to be available for search by all users that you want to be able to search those resources.

2.  Make a conscious decision about the user ID that you use when you configure crawling and indexing, and which access permissions that user ID requires.

3.  To ensure encryption of sensitive data that is stored, such as the crawler user ID and password, update and run the file searchsecret.xml by using the XML configuration interface. For details about encryption, see the topic about Encrypting sensitive data.

4.  Create a dedicated crawler user with a user ID and password in the portal.

5.  Give the crawler user ID the required access permissions to the portal resources as determined by the planning step: Access to all portlets and pages that must be indexed and thus be made available for search by users. This access can include composite applications.

6.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.

7.  Click **Search Collections** to open the Search collections panel.

8.  Create a search collection for the portal site.

9.  Create the content source. The root URL for the portal is already completed. Select **Portal Site** for the type of content source. Complete the user ID and password for the crawler user that you created. Complete the other fields and select the options as needed.

10. To enable search on the portal site for users, click **Start Collecting**.

    **Note:**

    1.  You can crawl, index, and search secured portal pages only on your local portal installation. For security reasons, you cannot crawl secured pages of one portal site from another portal site.
    2.  Under normal circumstances, exclude all administrative portlets and all portlets that represent highly dynamic content from being accessible to the crawler user. This includes such portlets that contain action links with Delete actions. Otherwise, the Delete action can be started through the crawler.
    3.  You can include composite applications with the portal resources that you make available for search by users, when you customize the portal site search collection. To do this step, make sure that you give the crawler user ID the required access permissions to those composite applications.
    4.  Instead of creating a new search collection and content source for the portal site search you can also use the collection and content source of the default portal site search setup. In this case, replace the completed user ID and password in the Edit Content Source Configuration panel with the one that you want to use.
    5.  For details about how to create a search collection and a content source, see the topics *Creating and configuring search collections* and *Managing the content sources of a search collection*, and the *Manage Search* portlet help.

**Parent topic:**[Configuring search on a secured portal site ](../admin-system/srtcnfgsrchscrprtlsite.md)

**Related information**  


[Searching on secured portal sites and pages and content management items ](../admin-system/srtsrchscrprtlstepgs.md)

