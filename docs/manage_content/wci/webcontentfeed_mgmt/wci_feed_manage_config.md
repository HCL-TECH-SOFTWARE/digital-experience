# Creating a feed configuration

To manage your web content feeds, you need to create a feed configuration.

1.  Go to **Administration** \> **Portal Content** \> **Feed Configurations**.

2.  Click **New**.

3.  Type a name for the feed configuration.

4.  Type the URL to the feed.

    **Note:** If the feed file name contains spaces, + is used to replace the space in the URL. For example, if the feed file is "content feed.xml" then the URL is entered as: http://server:port/wps/wcm/wci\_dev/content+feed.xml

    **Note:** If the URL contains non-ascii characters, the non-ascii characters must be encoded. For example: http://server:port/wps/wcm/%E4%B8%AD%E6%96%87/%E7%BB%84%E4%BB%B6.xml

5.  Select an appropriate Credential Slot ID for the feed.

6.  Select the web content library where the content is to be stored.

7.  Select an appropriate Credential Slot ID to use with the selected web content library.

8.  Select whether to pass the handshake data in the feed or HTTP headers:

    -   **In the HTTP Headers:**

        The handshake data is exchanged with standard HTTP protocol header fields. This method is the default and preferred method.

        Requests from the Consumer contain:

        -   If-Modified-Since: \{last-modified\_value\}
        -   If-None-Match: \{etag\_value\}
        Responses from the producer contain:

        -   ETag: \{etag\_value\}
        -   Last-Modified: \{last-modified\_value\}
    -   **In the Feed:**

        The feed producer puts the information in the feed and the consumer returns the values with the query string.

        Each time the consumer makes a request for the feed URL, the following query string is appended:

        -   ?etag=\{etag\_value\}&lastMod=\{last-modified\_value\}
        Feeds sent back from the producer contain the following channel-level elements:

        -   <lastBuildDate\>\{last-modified\_value\}</lastBuildDate\>
        -   <ibmfs:etag\>\{etag\_value\}</ibmfs:etag\>
9.  Select whether to check the publication date or not. If selected, web content items that have the same publish date as the feed source are not processed.

10. Select whether to use an XSLT style sheet or not.

    1.  If selected, type the path to the XSL file relative to the /config/xslt directory in the feed Service application.

11. Click either **Save** to save the configuration without consuming the feed, or **Save and Consume** to do both.


**Parent topic:**[Web content feed management](../panel_help/wci_feed_manage.md)

