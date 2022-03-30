# Wiki-related profiles 

These profiles provide access to wiki-related feed data for wiki pages, wiki page comments, and wiki page attachments.

## Wiki pages profile

The wiki pages profile provides access to HCL Connections wiki pages feed data. It declares the following attribute names:

-   **Author's email addressauthorEmail**

    This attribute references the email address of the author of the social object.

-   **Author's IDauthorID**

    This attribute references the internal ID of the author of the social object. It represents the author ID from the HCL Connections server where the social object is stored.

-   **Author's image URLauthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL from which users can download the image either directly from HCL Connections or by using the Ajax proxy of the portal. For more information about this attribute, read *Configuring globally how social object data is served*. This attribute is computed by the social rendering Digital Data Connector \(DDC\) for HCL Portal plug-in.

-   **Author's nameauthorName**

    You can use this attribute to include the name of the author of the social object in the design of a social list.

-   **Author's object IDauthorObjectID**

    This attribute references the serialized object ID of the author of the social object. In contrast to the `authorID` attribute, the `authorObjectID` attribute represents an ID that is used by HCL Portal rather than by HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's UIDauthorUID**

    This attribute specifies the value of the UID attribute of the author of the social object. This value reflects the UID user attribute as defined by the user repository of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Body HTMLbody HTML**

    The HTML content of this item.

-   **Body plainbody plain**

    The plain content of this item.

-   **Body content typebodyContentType**

    This attribute specifies the content type identifier for the body attribute of this item.

-   **Can create commentcanCreateComment**

    If the current user has permission to create comments to this wiki page, this attribute returns the string `true`. Otherwise, it returns `false`. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Download sizedownloadSize**

    This attribute specifies the download size of this wiki page.

-   **Feed entryentry**

    The original feed entry of this item.

-   **IDid**

    The unique identifier for this item.

-   **Modifier is activeisModifierActive**

    This attribute indicates whether the user who made the most recent update to this wiki page is currently available.

-   **Labellabel**

    This attribute specifies the label of this wiki page.

-   **Library titlelibraryTitle**

    This attribute specifies the title of the library that contains this wiki page.

-   **Library UUIDlibraryUUID**

    This attribute specifies the UUID of the library that contains this wiki page.

-   **Modifier's emailmodifierEmail**

    This attribute specifies the email address of the user who made the most recent update to this wiki page.

-   **Modifier's IDmodifierID**

    This attribute specifies the internal ID of the user who made the most recent update to this wiki page.

-   **Modifier's Image URLmodifierImageLink**

    This attribute specifies the photo URL of the user who made the most recent update to this wiki page. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Modifier's namemodifierName**

    This attribute specifies the name of the user who made the most recent update to this wiki page.

-   **Number of attachmentsnumberOfAttachments**

    This attribute specifies the number of documents that are attached to this wiki page.

-   **Number of commentsnumberOfComments**

    This attribute specifies the number of comments that were posted on this wiki page.

-   **Number of LikesnumberOfLikes**

    This attribute specifies the number of people who like this wiki page.

-   **Number of VersionsnumberOfVersions**

    This attribute specifies the number of versions that exist for this wiki page.

-   **Permissionspermissions**

    This attribute specifies the permissions that the current user was given on the wiki page.

-   **Author's portal image URLportalAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL from which users can download the image from HCL Connections by using the Ajax proxy of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's portal URLportalAuthorLink**

    This attribute specifies the link for rendering the details view of the author of this item in the context of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal modifier's image URLportalModifierImageLink**

    This attribute specifies the HCL Portal photo URL of the user who made the most recent update to this wiki page. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal modifier's URLportalModifierLink**

    This attribute specifies the HCL Portal URL that points to the details view of the user profile of the user who made the most recent update to this wiki page. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Published datepublished**

    This attribute indicates the time when the social object was published. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Author's raw Atom entry URLrawAuthorEntryLink**

    Link to the Atom entry that represents the author of this item. This URL directly addresses the HCL Connections server. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's raw image URLrawAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL for downloading the image directly from HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal bodyportalBody**

    This attribute specifies the actual content of the wiki page when URL rewriting is performed. Links from that point to other wiki pages are rewritten into portal URLs so that clicking those links triggers a corresponding social object resolution. File attachment URLs are rewritten into Ajax proxy URLs. This attribute is computed by the social rendering bean list provider plug-in.

-   **Raw bodyrawBody**

    This attribute specifies the actual content of the wiki page. The content is served as is without any URL rewriting. This attribute is computed by the social rendering bean list provider plug-in.

-   **Raw body fragment URLrawBodyFragmentLink**

    This attribute specifies the HCL Connections URL of the body fragment of this wiki page.

-   **Raw comments URLrawCommentsLink**

    This attribute specifies the HCL Connections URL of the comments feed for this wiki page.

-   **Raw download URLrawDownloadLink**

    This attribute specifies the HCL Connections URL of this wiki page. Users can use this URL to download this wiki page.

-   **Raw edit URLrawEditLink**

    This attribute specifies the HCL Connections URL of the editable resource that represents this wiki page.

-   **Raw Atom entry URLrawEntryLink**

    This attribute specifies the HCL Connections URL of the Atom resource that represents this wiki page.

-   **Raw likes edit URLrawLikesEditLink**

    This attribute specifies the HCL Connections URL of the entry that makes it possible to edit the `liked` status of this wiki page.

-   **nullrawLikesRemoveLink**

    null

-   **Raw view URLrawLink**

    This attribute specifies the HCL Connections URL of the resource that holds the information whether the current user likes this wiki page. This resource can be modified.

-   **Raw Modifier's entry URLrawModifierEntryLink**

    This attribute specifies the URL of the Atom resource that represents the user profile of the user who made the most recent update to this wiki page. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw modifier's image URLrawModifierImageLink**

    This attribute specifies the HCL Connections photo URL of the user who made the most recent update to this wiki page. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Nested comments URLrawNestedCommentsLink**

    This attribute specifies the HCL Connections URL of the comments feed for this wiki page. This feed contains data about access rights and the `liked` status. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw attachments URLrawWikiPageAttachmentsLink**

    This attribute specifies the HCL Connections URL of the attachments feed for this wiki page. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Summarysummary**

    A summary of the content of this item.

-   **Tagstags**

    This attribute specifies the tags that are associated with this item.

-   **Titletitle**

    The title of this item.

-   **Updated dateupdated**

    This attribute indicates the time of the last update of the social object. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **User likes userLikes**

    If this wiki page is liked by the current user, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **UUIDuuid**

    This attribute specifies the UUID of this wiki page.

-   **Version numberversionNumber**

    This attribute specifies the version number of this wiki page.

-   **Version UUIDversionUUID**

    This attribute specifies the version UUID of this wiki page.

-   **Visibilityvisibility**

    This attribute specifies the visibility information of this wiki page.


In addition to these attributes, the wiki pages profile also provides access to the following list properties:

-   **Updated dateupdated**

    This list property indicates the time of the last update of the list that is represented by the feed at hand. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Raw URL to this feedselfLink**

    This list property specifies the link to this feed.

-   **Feed titletitle**

    This list property specifies the link to this feed.


## Wiki page comments profile

The wiki page comments profile provides access to HCL Connections wiki page comments feed data. It declares the following attribute names:

-   **Author's email addressauthorEmail**

    This attribute references the email address of the author of the social object.

-   **Author's IDauthorID**

    This attribute references the internal ID of the author of the social object. It represents the author ID from the HCL Connections server where the social object is stored.

-   **Author's image URLauthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL from which users can download the image either directly from HCL Connections or by using the Ajax proxy of the portal. For more information about this attribute, read *Configuring globally how social object data is served*. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's nameauthorName**

    You can use this attribute to include the name of the author of the social object in the design of a social list.

-   **Author's object IDauthorObjectID**

    This attribute references the serialized object ID of the author of the social object. In contrast to the `authorID` attribute, the `authorObjectID` attribute represents an ID that is used by HCL Portal rather than by HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's UIDauthorUID**

    This attribute specifies the value of the UID attribute of the author of the social object. This value reflects the UID user attribute as defined by the user repository of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Body HTMLbody HTML**

    This attribute specifies the HTML content of this item.

-   **Body plainbody plain**

    This attribute specifies the plain content of this item.

-   **Body plain with new line replacementbodyNewLine2BR**

    This attribute specifies the plain content of the item. In contrast to the `body plain` attribute, all new line characters are replaced by the appropriate HTML representation. For example the content might contain a line break:

    ```
    Today is 
    a nice day.
    ```

    The line break is replaced by the HTML line brake tag:

    ```
    Today is<br\>a nice day.
    ```

    This attribute is computed by the social rendering bean list provider plug-in.

-   **Body content typebodyContentType**

    This attribute specifies the content type identifier for the body attribute of this item.

-   **Can delete commentcanDeleteComment**

    If the current user has permission to delete the comment, this attribute returns the string `true`. Otherwise, it returns `false`. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Comment UUIDcommentUUID**

    This attribute specifies the UUID of this wiki page comment.

-   **Feed entryentry**

    The original feed entry of this item.

-   **IDid**

    The unique identifier for this item.

-   **Permissionspermissions**

    This attribute specifies the permissions that the current user was given on the wiki page comment.

-   **Author's portal image URLportalAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL from which users can download the image from HCL Connections by using the Ajax proxy of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's portal URLportalAuthorLink**

    This attribute specifies the link for rendering the details view of the author of this item in the context of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Published datepublished**

    This attribute indicates the time when the social object was published. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Author's raw Atom entry URLrawAuthorEntryLink**

    Link to the Atom entry that represents the author of this item. This URL directly addresses the HCL Connections server. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's raw image URLrawAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL for downloading the image directly from HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw edit URLrawEditLink**

    This attribute specifies the HCL Connections URL of the editable resource that represents this wiki page comment.

-   **Raw edit media URLrawEditMediaLink**

    This attribute specifies the HCL Connections URL of the editable media resource that represents this wiki page comment.

-   **Raw Atom entry URLrawEntryLink**

    This attribute specifies the HCL Connections URL of the Atom resource that represents this wiki page comment.

-   **Raw view URLrawLink**

    This attribute specifies the HCL Connections URL of the details view of this wiki page comment.

-   **Summarysummary**

    A summary of the content of this item.

-   **Titletitle**

    The title of this item.

-   **Updated dateupdated**

    This attribute indicates the time of the last update of the social object. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Version numberversionNumber**

    This attribute specifies the version number of this wiki page comment.


In addition to these attributes, the wiki page comments profile also provides access to the following list properties:

-   **Updated dateupdated**

    This list property indicates the time of the last update of the list that is represented by the feed at hand. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Raw URL to this feedselfLink**

    This list property specifies the link to this feed.

-   **Feed titletitle**

    This list property specifies the link to this feed.

-   **Total Number of ItemstotalNumberOfItems**

    This list property specifies the total number of items that were found for this search.

-   **Requested Number of ItemsrequestedNumberOfItems**

    This list property specifies the requested number of items for this search.

-   **Start IndexstartIndex**

    This list property specifies the start index for the paged list of items.

-   **Raw first URLrawFirstLink**

    This list property specifies the HCL Connections URL of the first page of items that were found for this search.

-   **Raw next URLrawNextLink**

    This list property specifies the HCL Connections URL of the next page of items that were found for this search.

-   **Raw previous URLrawPreviousLink**

    This list property specifies the HCL Connections URL of the previous page of items that were found for this search.

-   **Raw last URLrawLastLink**

    This list property specifies the HCL Connections URL of the last page of items that are found for this search.

-   **Is truncatedisTruncated**

    If the list that represents a search result is truncated, this list property returns the string `true`. Otherwise, it returns `false`.


## Wiki page attachments profile

The wiki page attachments profile provides access to HCL Connections wiki page attachments feed data. It declares the following attribute names:

-   **Author's email addressauthorEmail**

    This attribute references the email address of the author of the social object.

-   **Author's IDauthorID**

    This attribute references the internal ID of the author of the social object. It represents the author ID from the HCL Connections server where the social object is stored.

-   **Author's image URLauthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL from which users can download the image either directly from HCL Connections or by using the Ajax proxy of the portal. For more information about this attribute, read *Configuring globally how social object data is served*. This attribute is computed by the social rendering bean list provider plug-in.

-   **Author's nameauthorName**

    You can use this attribute to include the name of the author of the social object in the design of a social list.

-   **Author's object IDauthorObjectID**

    This attribute references the serialized object ID of the author of the social object. In contrast to the `authorID` attribute, the `authorObjectID` attribute represents an ID that is used by HCL Portal rather than by HCL Connections. This attribute is computed by the social rendering bean list provider plug-in.

-   **Author's UIDauthorUID**

    This attribute specifies the value of the UID attribute of the author of the social object. This value reflects the UID user attribute as defined by the user repository of the portal. This attribute is computed by the social rendering bean list provider plug-in.

-   **Body HTMLbody**

    This attribute specifies the HTML content of this item.

-   **Body content typebodyContentType**

    This attribute specifies the content type identifier for the `body` attribute of this item.

-   **Body plainbodyPlain**

    This attribute specifies the plain content of this item.

-   **Attachment's sizebyteSize**

    This attribute specifies the size of the attachment in bytes.

-   **Download URLdownloadLink**

    This attribute represents a link to this attachment. This attribute contains a URL from which users can download the attachment either directly from HCL Connections or by using the Ajax proxy of the portal. If the download link is not available, this attribute does not have a value. For more information about this attribute, read *Configuring globally how social object data is served*. This attribute is computed by the social rendering bean list provider plug-in.

-   **Feed entryentry**

    This attribute specifies the original feed entry of this item.

-   **File extensionfileExtension**

    This attribute carries the file extension of this attachment. For example, the file extension can be .jpg, .mp3, .pdf, or empty. This attribute is computed by the social rendering bean list provider plug-in.

-   **File typefileType**

    This attribute specifies the file type of this attachment. For example, the file type can be audio, code, compressed, contact, data, flash, graphic, pdf, presentation, text, video, wordProcessing, or dataDocs. The portal sets this attribute according to the value of the `fileExtension` attribute. The `fileType` attribute value is derived from the configured file type extension mappings of the WP Connections Integration Service resource environment provider. For more information, read *Configuring file type icon mappings*. This attribute is computed by the social rendering bean list provider plug-in.

-   **IDid**

    This attribute specifies the unique identifier for this attachment.

-   **Mime typemimeType**

    This attribute specifies the mime type of this attachment.

-   **Attachment's namename**

    This attribute specifies the name of this attachment.

-   **Author's portal image URLportalAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL from which users can download the image from HCL Connections by using the Ajax proxy of the portal. This attribute is computed by the social rendering bean list provider plug-in.

-   **Author's portal URLportalAuthorLink**

    This attribute specifies the link for rendering the details view of the author of this item in the context of the portal. This attribute is computed by the social rendering bean list provider plug-in.

-   **Portal download URLportalDownloadLink**

    This attribute represents a link to this attachment. This attribute contains a URL from which users can download the attachment by using the Ajax proxy of the portal. To download the attachment from HCL Connections without using the Ajax proxy, use the `rawDownloadLink` attribute instead. If the download link is not available, this attribute does not have a value. This attribute is computed by the social rendering bean list provider plug-in.

-   **Published datepublished**

    This attribute indicates the time when the social object was published. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Author's raw Atom entry URLrawAuthorEntryLink**

    This attribute specifies the link to the Atom entry that represents the author of this item. This URL directly addresses the HCL Connections server. This attribute is computed by the social rendering bean list provider plug-in.

-   **Author's raw image URLrawAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL for downloading the image directly from HCL Connections. This attribute is computed by the social rendering bean list provider plug-in.

-   **Raw download URLrawDownloadLink**

    This attribute represents a link to this attachment. This attribute contains a URL from which users can download the attachment directly from HCL Connections. To download the attachment from HCL Connections by using the Ajax proxy of the portal, use the `portalDownloadLink` attribute instead. If the download link is not available, this attribute does not have a value.

-   **Raw Atom entry URLrawEntryLink**

    This attribute specifies the HCL Connections URL of the Atom entry that represents this attachment.

-   **Summarysummary**

    This attribute specifies a summary of the content of this social object.

-   **Titletitle**

    This attribute specifies the title of this social object.

-   **Updated dateupdated**

    This attribute indicates the time of the last update of the social object. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.


In addition to these attributes, the wiki page attachments profile also provides access to the following list properties:

-   **Updated dateupdated**

    This list property indicates the time of the last update of the list that is represented by the feed at hand. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Raw URL to this feedselfLink**

    This list property specifies the link to this feed.

-   **Feed titletitle**

    This list property specifies the link to this feed.

-   **Total Number of ItemstotalNumberOfItems**

    This list property specifies the total number of items that were found for this search.

-   **Requested Number of ItemsrequestedNumberOfItems**

    This list property specifies the requested number of items for this search.

-   **Start IndexstartIndex**

    This list property specifies the start index for the paged list of items.

-   **Raw first URLrawFirstLink**

    This list property specifies the HCL Connections URL of the first page of items that were found for this search.

-   **Raw next URLrawNextLink**

    This list property specifies the HCL Connections URL of the next page of items that were found for this search.

-   **Raw previous URLrawPreviousLink**

    This list property specifies the HCL Connections URL of the previous page of items that were found for this search.

-   **Raw last URLrawLastLink**

    This list property specifies the HCL Connections URL of the last page of items that are found for this search.

-   **Is truncatedisTruncated**

    If the list that represents a search result is truncated, this list property returns the string `true`. Otherwise, it returns `false`.


**Parent topic:**[Digital Data Connector profiles for social rendering ](../social/soc_rendr_lst_rndr_prfls.md)

**Related information**  


[Configuring file type icon mappings ](../social/soc_rendr_cfg_filetype_map.md)

[Configuring globally how social object data is served ](../social/soc_rendr_cfg_data_serve.md)

