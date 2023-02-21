# Configuring search on a secured portal site

Crawling and searching secured portal sites might require some additional configuration.

For search on secured portal sites Portal Search provides a pre-configured default setup. For more information, go to [Configuring a crawler to search your local portal site](../srccrwlindxsite.md). You can use that setup as is, or you can modify it as required. You can also set up your own search collection for search on portal sites. The following sections describe all of these options.

**Security notes:**

1.  You can crawl, index, and search secured portal pages only on your local portal installation. For security reasons, you cannot crawl secured pages of one portal site from another portal site.
2.  When you create a content source for enabling search, you must enter sensitive data. For example, a user ID and password for the crawler. This sensitive data is stored on the portal server in plain text unless you choose to encrypt it. To ensure encryption of this sensitive data when it is stored, update and run the searchsecret.xml file with the XML configuration interface before you enable search on the secured portal site. For information, refer to [Encrypting sensitive data](../../planning_portal_search/security_considerations/srtencrpsnstdt.md).

3.  When users search a secured portal, the resulting portal pages or resources are filtered based on Portal Access Control. Portal Search filters the results according to the access permissions of the user who is searching. It applies to the following resources: portal pages, portlets, and Web Content Manager content. Portal Search does not provide security-filtering for other HTTP accessible information, such as secured websites. The portal cannot filter the resulting documents by portal security for these types of content source.


-   **[Enabling search on a secured portal site with the default configuration](srtsrchsecursite.md)**  
By modifying some of the settings, you can use the default search collection to configure search of a secured portal site.
-   **[Customizing your search collection for secured portal pages](srtconfgownsrchsec.md)**  
Set up your own customized search collection for searching a secured portal site.


