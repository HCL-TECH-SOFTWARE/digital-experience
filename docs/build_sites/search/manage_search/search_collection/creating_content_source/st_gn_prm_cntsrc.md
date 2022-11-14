---
id: st_gn_prm_cntsrc
title: Setting the general parameters for a content source
---




Set the general parameters for the content source by completing the entry fields and making your selections in the General Parameters tab.

The available fields and options depend on the type of content source that you select and can include the following options:

-   **Collect documents linked from this URL**

    Type the required web URL or portal URL in this mandatory field. This action determines the root URL from which the crawler starts. For portal content sources, the value for this field is completed by Manage Search.

    **Note:**

    1.  For websites, you need to type the full name that includes HTTP://. For example: http://www.cnn.com. Typing only www.cnn.com results in an error.
    2.  A crawler failure can be caused by URL redirection problems. If this problem occurs, try by editing this field, for example, by changing the URL to the redirected URL.
-   **Levels of links to follow**

    For crawling websites, this option determines the crawling depth that is the maximum number of levels of nested links, which the crawler follows from the root URL.

-   **Number of linked documents to collect**

    For crawling websites, this option determines the maximum number of documents that are indexed by the crawler during each session. The number of indexed documents includes documents that are re indexed as their content changed.

-   **Stop collecting after \(min\):**

    This option sets the maximum number of minutes the crawler might run in a single session for websites.

    **Note:** The timeout works as an approximate time limit. It might be exceeded by some percentage.

-   **Stop fetching documents after\(sec\)**

    This option indicted the time that the crawler spends trying to fetch a document. This option sets the maximum time limit in seconds for completing the initial phase of the HTTP connection that is for receiving the HTTP headers. This time limit must be finite as it is used to prevent the crawler from getting stuck infinitely on a bad connection. However, it allows the crawler to fetch large files, such as compressed files, which take a long time to fetch.


