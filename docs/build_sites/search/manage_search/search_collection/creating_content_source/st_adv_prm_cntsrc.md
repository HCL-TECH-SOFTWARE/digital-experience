---
id: st_adv_prm_cntsrc
title: Setting the advanced parameters for a content source
---


Set the advanced parameters for the content source by completing the entry fields and making your selections in the Advanced Parameters tab.

The available fields and options depend on the type of content source that you select and can include the following options:

-   **Number of parallel processes**

    This parameter determines the number of threads the crawler uses in a session. This parameter is only available for content source type Web site.

-   **Default character encoding**

    This parameter sets the default character set that the crawler uses if it cannot determine the character set of a document.

    !!! note
        The entry field for the **Default character encoding** contains the initial default value `windows-1252`, regardless of the setting for the Default Portal Language in **Administration menu** \> **Portal Settings** \> **Global Settings**. Enter the required default character encoding, depending on your portal language. Otherwise, documents might display incorrectly from **Browse Documents**.

-   **Always use default character encoding**

    If you check this option, the crawler always uses the default character set, regardless of the document character set.

    If you do not check this option, the crawler tries to determine the character sets of the documents.

-   **Obey Robots.txt**

    If you select this option, the crawler observes the restrictions that are specified in the file robots.text when it accesses URLs for documents. This option is only available for the website content source type, not for portal site, or seedlist provider.

-   **Proxy server**

    If you leave this HTTP proxy server value empty, the crawler does not use a proxy server.

-   **Port**

    If you leave this **Port** value empty, the crawler does not use a proxy server.


