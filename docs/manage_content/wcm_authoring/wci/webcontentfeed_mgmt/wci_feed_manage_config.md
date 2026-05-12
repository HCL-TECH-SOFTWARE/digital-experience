# Creating a feed configuration

To manage your web content feeds, you need to create a feed configuration.

1. Go to **Administration** \> **Portal Content** \> **Feed Configurations**.
2. Click **New**.
3. Enter a name for the feed configuration.
4. Enter the URL to the feed.

    !!!note
        - If the feed file name contains spaces, `+` is used to replace the space in the URL. For example, if the feed file is `content feed.xml`, the URL is entered as `<http://server:port/wps/wcm/wci\_dev/content+feed.xml>`.
        - If the URL contains non-ascii characters, the non-ascii characters must be encoded. For example: `<http://server:port/wps/wcm/%E4%B8%AD%E6%96%87/%E7%BB%84%E4%BB%B6.xml>`.

5. Select the appropriate **Credential Slot ID** for the feed.
6. Select the web content library where you want to store the content.
7. Select the appropriate **Credential Slot ID** to use with the selected web content library.
8. Choose where to pass the handshake data:

    - **In the HTTP headers:** Exchanges the handshake data using standard HTTP protocol header fields. This is the default and preferred method.
        - Requests from the consumer contain:
            - `If-Modified-Since: \{last-modified\_value\}`
            - `If-None-Match: \{etag\_value\}`
        - Responses from the producer contain:
            - `ETag: \{etag\_value\}`
            - `Last-Modified: \{last-modified\_value\}`
    - **In the feed:** The feed producer places the information in the feed, and the consumer returns the values with the query string.
        - Each time the consumer makes a request for the feed URL, the following query string is appended:
            - `?etag=\{etag\_value\}&lastMod=\{last-modified\_value\}`
        - Feeds sent back from the producer contain the following channel-level elements:
            - `<lastBuildDate>{last-modified_value}</lastBuildDate>`
            - `<ibmfs:etag>{etag_value}</ibmfs:etag>`

9. Select the option to check the publication date if you want to skip processing web content items that have the same publish date as the feed source.
10. Select the **Enable XSLT** checkbox to use an XSLT style sheet. If enabled, specify the location of the file in the **XSLT File** field using either a relative path or an absolute URL:

    - **Relative path:** Enter the path relative to the `wp_profile_root/PortalServer/wcm/shared/app/` directory. For example, if your file is located at `wp_profile_root/PortalServer/wcm/shared/app/config/xslt/sample.xsl`, enter `/config/xslt/sample.xsl`.

        !!! note
            When you use a relative path, the WCI class loader loads the XSLT file. You must restart the server for the system to detect any new or modified XSLT files.

    - **Absolute URL:** Enter the direct URL to the XSLT file (for example, `http://test_server/files/sample.xsl`).

11. Select **Save** to save the configuration without consuming the feed, or select **Save and Consume** to do both.
