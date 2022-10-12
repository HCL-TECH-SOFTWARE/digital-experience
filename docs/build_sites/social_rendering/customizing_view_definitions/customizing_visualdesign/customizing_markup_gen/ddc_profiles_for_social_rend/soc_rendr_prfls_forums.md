# Forum-related profiles

These profiles provide access to HCL Connections forum-related feed data for forums, forum topics, and forum topic replies profiles.

## Forums profile

The forums profile provides access to HCL Connections forums feed data. It declares the following attribute names:

-   **Author's email addressauthorEmail**

    This attribute references the email address of the author of the social object.

-   **Author's IDauthorID**

    This attribute references the internal ID of the author of the social object. It represents the author ID from the HCL Connections server where the social object is stored.

-   **Author's image URLauthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL where you can download the image either directly from HCL Connections or by using the Ajax proxy of the portal. For more information about this attribute, read *Configuring globally how social object data is served*. This attribute is computed by the social rendering Digital Data Connector \(DDC\) for HCL Portal plug-in.

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

-   **Can create topiccanCreateTopic**

    If the user can create topics for the current forum \(community forum or stand-alone forum\), this attribute returns the string `true`. Otherwise, it returns `false`. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **CanPostTopiccanPostTopicCmtyForum**

    If the user can create topics for this community forum, this attribute returns the string `CanPostTopic`. Otherwise, it returns an empty string. This function includes stand-alone forums.

-   **Raw community Atom entry URLcommunityLink**

    This attribute specifies the HCL Connections URL of the Atom entry that represents the community that contains this forum. This attribute is empty for stand-alone forums.

-   **UUID of the associated communitycommunityUUID**

    If the current forum is a community forum. This attribute specifies the UUID of the community that contains the forum. If the current forum is not contained in a community, this attribute is empty.

-   **Feed entryentry**

    The original feed entry of this item.

-   **Atom feed URLentryLink**

    This attribute specifies the URL of the Atom entry that represents this forum. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **IDid**

    The unique identifier for this item.

-   **Is community forumisCommunityForum**

    If this forum is a community forum, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is locked isLocked**

    If this forum is locked, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **View URLlink**

    This attribute specifies the URL that points to the details view of this forum. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Member listmemberList**

    This attribute lists the members of this forum.

-   **Raw member list link memberListLink**

    This attribute specifies the HCL Connections URL of the members feed of this forum.

-   **Is moderatedmoderation**

    If the moderation feature is enabled for the current forum, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Number of topicsnumberOfTopics**

    This attribute specifies the number of forum topics that exist in this forum.

-   **Author's portal image URLportalAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL where you can download the image from HCL Connections by using the Ajax proxy of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's portal URLportalAuthorLink**

    This attribute specifies the link for rendering the details view of the author of this item in the context of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal Atom Feed URLportalEntryLink**

    This attribute specifies the HCL Portal URL of the Atom entry that represents this forum. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal view URLportalLink**

    This attribute specifies the HCL Portal URL that points to the details view of this forum. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Published datepublished**

    This attribute indicates the time when the social object was published. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Author's raw Atom entry URLrawAuthorEntryLink**

    Link to the Atom entry that represents the author of this item. This URL directly addresses the HCL Connections server. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's raw image URLrawAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL for downloading the image directly from HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw replies URL for community forumsrawCmtyForumRepliesLink**

    This attribute specifies the HCL Connections URL of the replies feed for this community forum. This feed includes data about access rights for creating topics. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw Atom entry URLrawEntryLink**

    This attribute specifies the HCL Connections URL of the Atom entry that represents this forum.

-   **Raw view URLrawLink**

    This attribute specifies the HCL Connections URL that points to the details view of this forum.

-   **Raw replies URLrawRepliesLink**

    This attribute specifies the HCL Connections URL of the replies feed for this forum.

-   **Summarysummary**

    This attribute specifies the summary description of this forum.

-   **Tagstags**

    This attribute specifies the tags that are associated with this item.

-   **Titletitle**

    The title of this item.

-   **Typetype**

    This attribute specifies the type of this forum.

-   **Updated dateupdated**

    This attribute indicates the time of the last update of the social object. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.


In addition to these attributes, the forums profile also provides access to the following list properties:

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

-   **Raw tags linkrawTagsLink**

    This attribute specifies the URL of the Atom resource that represents the tag cloud of this forum.


## Forum topics profile

The forum topics profile provides access to HCL Connections forum topics feed data. It declares the following attribute names:

-   **Author's email addressauthorEmail**

    This attribute references the email address of the author of the social object.

-   **Author's IDauthorID**

    This attribute references the internal ID of the author of the social object. It represents the author ID from the HCL Connections server where the social object is stored.

-   **Author's image URLauthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL where you can download the image either directly from HCL Connections or by using the Ajax proxy of the portal. For more information about this attribute, read *Configuring globally how social object data is served*. This attribute is computed by the social rendering Digital Data Connector plug-in.

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

-   **Can create replycanCreateReply**

    If the current user has permission to reply to this forum topic, this attribute returns the string `true`. Otherwise, it returns `false`. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Can create replycanDeleteTopic**

    If the current user has permission to delete this forum topic, this attribute returns the string `true`. Otherwise, it returns `false`. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Feed entryentry**

    The original feed entry of this item.

-   **Atom entry URLentryLink**

    This attribute specifies the URL of the Atom entry that represents this forum topic. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **IDid**

    The unique identifier for this item.

-   **Is Answered question isAnswered**

    If this forum topic is a question and the question was answered, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is topic locked isLocked**

    If this forum topic is locked, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is questionisQuestion**

    If this forum topic is a question, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **View URLlink**

    This attribute specifies the URL that points to the details view of this forum. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Number of LikesnumberOfLikes**

    This attribute specifies the number of people who like this forum topic.

-   **Number of repliesnumberOfReplies**

    This attribute specifies the number of replies that exist for this forum topic.

-   **Permissionspermissions**

    This attribute specifies the permissions that the current user was granted on the current forum topic.

-   **Author's portal image URLportalAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL where you can download the image from HCL Connections by using the Ajax proxy of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's portal URLportalAuthorLink**

    This attribute specifies the link for rendering the details view of the author of this item in the context of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal Atom entry URLportalEntryLink**

    This attribute specifies the HCL Portal URL of the Atom entry that represents this forum topic. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal view URLportalLink**

    This attribute specifies the HCL Portal URL that points to the details view of this forum. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Published datepublished**

    This attribute indicates the time when the social object was published. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Author's raw Atom entry URLrawAuthorEntryLink**

    Link to the Atom entry that represents the author of this item. This URL directly addresses the HCL Connections server. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's raw image URLrawAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL for downloading the image directly from HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw edit URLrawEditLink**

    This attribute specifies the HCL Connections URL of the entry that makes it possible to edit this forum topic.

-   **Raw Atom entry URLrawEntryLink**

    This attribute specifies the HCL Connections URL of the Atom entry that represents this forum topic.

-   **Raw likes edit URLrawLikesEditLink**

    This attribute specifies the HCL Connections URL of the entry that makes it possible to edit the `liked` status of this forum topic.

-   **Raw view URLrawLink**

    This attribute specifies the HCL Connections URL that points to the details view of this forum.

-   **Raw Replies URLrawRepliesLink**

    This attribute specifies the HCL Connections URL of the replies feed for this forum topic.

-   **Summarysummary**

    A summary of the content of this item.

-   **Tagstags**

    This attribute specifies the tags that are associated with this item.

-   **Titletitle**

    The title of this item.

-   **Typetype**

    This attribute specifies the type information for this forum topic.

-   **Updated dateupdated**

    This attribute indicates the time of the last update of the social object. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **User likes userLikes**

    If this forum topic is liked by the current user, this attribute returns the string `true`. Otherwise, it returns `false`.


In addition to these attributes, the forum topics profile also provides access to the following list properties:

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

-   **Raw tags linkrawTagsLink**

    This attribute specifies the URL of the Atom resourceS that represents the tag cloud of this list of forum topics.


## Forum topic replies profile

The forum topic replies profile provides access to HCL Connections forum topic replies feed data. It declares the following attribute names:

-   **Answer flag elementanswerFlag**

    This attribute represents the feed element that indicates whether or not a forum topic reply is marked as the answer to a question.

-   **Author's email addressauthorEmail**

    This attribute references the email address of the author of the social object.

-   **Author's IDauthorID**

    This attribute references the internal ID of the author of the social object. It represents the author ID from the HCL Connections server where the social object is stored.

-   **Author's image URLauthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL where you can download the image either directly from HCL Connections or by using the Ajax proxy of the portal. For more information about this attribute, read *Configuring globally how social object data is served*. This attribute is computed by the social rendering Digital Data Connector plug-in.

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

-   **Can accept answercanAcceptAnswer**

    If the current user has permission to accept this forum topic reply as the answer to the forum topic question, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Can create replycanCreateReply**

    If the current user has permission to reply on this forum topic reply, this attribute returns the string `true`. Otherwise, it returns `false`. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Can decline answercanDeclineAnswer**

    If the current user has permission to decline that this forum topic reply answers the forum topic question, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Can delete replycanDeleteReply**

    If the current user has permission to delete this forum topic reply, this attribute returns the string `true`. Otherwise, it returns `false`. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Feed entryentry**

    The original feed entry of this item.

-   **IDid**

    The unique identifier for this item.

-   **Is answerisAnswer**

    If this forum topic reply was marked as an answer to the question, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is deletedisDeleted**

    If this forum topic reply was deleted, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Modifier's email addressmodifierEmail**

    This attribute references the email address of the modifier of the social object.

-   **Modifier's IDmodifierID**

    This attribute references the internal ID of the modifier of the social object.

-   **Modifier's image URLmodifierImageLink**

    This attribute specifies the link to the profile image of the modifier of the social object. The HCL Connections server that provides the social object also stores the profile image of the modifier. This attribute contains a URL from which users can download the image either directly from HCL Connections or by using the Ajax proxy of the portal. For more information about this attribute, read *Configuring globally how social object data is served*.This attribute is computed by the social rendering bean list provider plug-in.

-   **Modifier's namemodifierName**

    You can use this attribute to include the name of the modifier of the social object in the design of a social list.

-   **Modifier's object IDmodifierObjectID**

    This attribute references the serialized object ID of the modifier of the social object. In contrast to the `modifierID` attribute, the `modifierObjectID` attribute represents an ID that is used by HCL Portal rather than by HCL Connections. This attribute is computed by the social rendering bean list provider plug-in.

-   **Modifier's UIDmodifierUID**

    This attribute specifies the value of the UID attribute of the modifier of the social object. This value reflects the UID user attribute as defined by the user repository of the portal. This attribute is computed by the social rendering bean list provider plug-in.

-   **Nesting levelnestingLevel**

    This attribute specifies the nesting level of this forum topic reply. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Number of attachmentsnumberOfAttachments**

    This attribute specifies the number of attachments that were been uploaded for this reply.

-   **Number of nesting levels to close numberOfLevelsToClose**

    This attribute returns the delta between the nesting levels of the previous forum topic reply and the current forum topic reply. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Number of LikesnumberOfLikes**

    This attribute specifies the number of people who like this forum topic reply.

-   **Number of repliesnumberOfReplies**

    This attribute specifies the number of replies that were posted to this forum topic reply.

-   **Permissionspermissions**

    This attribute specifies the permissions that the current user was granted on the current forum topic reply.

-   **Author's portal image URLportalAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL where you can download the image from HCL Connections by using the Ajax proxy of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's portal URLportalAuthorLink**

    This attribute specifies the link for rendering the details view of the author of this item in the context of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Published datepublished**

    This attribute indicates the time when the social object was published. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Author's raw Atom entry URLrawAuthorEntryLink**

    Link to the Atom entry that represents the author of this item. This URL directly addresses the HCL Connections server. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's raw image URLrawAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL for downloading the image directly from HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw edit URLrawEditLink**

    This attribute specifies the HCL Connections URL of the entry that makes it possible to edit this forum reply.

-   **Raw Atom entry URLrawEntryLink**

    This attribute specifies the HCL Connections URL of the Atom entry that represents this forum topic reply.

-   **Raw likes edit URLrawLikesEditLink**

    This attribute specifies the HCL Connections URL of the entry that makes it possible to edit the `liked` status of this forum topic reply.

-   **Modifier's raw Atom entry URLrawModifierEntryLink**

    Link to the Atom entry that represents the modifier of this item. This URL addresses the HCL Connections server directly. This attribute is computed by the social rendering bean list provider plug-in.

-   **Modifier's raw image URLrawModifierImageLink**

    This attribute specifies the link to the profile image of the modifier of the social object. The HCL Connections server that provides the social object also stores the profile image of the modifier. This attribute contains a URL for downloading the image directly from HCL Connections. This attribute is computed by the social rendering bean list provider plug-in.

-   **Modifier's portal image URL portalModifierImageLink**

    This attribute specifies the link to the profile image of the modifier of the social object. The HCL Connections server that provides the social object also stores the profile image of the modifier. This attribute contains a URL where you can download the image from HCL Connections by using the Ajax proxy of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Modifier's portal URL portalModifierLink**

    This attribute specifies the link for rendering the details view of the modifier of this item in the context of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw view replies URLrawRepliesLink**

    This attribute specifies the HCL Connections URL of the replies feed for this forum topic reply.

-   **Raw typerawType**

    This attribute specifies the type information for this forum topic reply as served by the HCL Connections server.

-   **Raw type document noderawTypeNode**

    This attribute selects the document node that provides type information for this forum topic reply that is served by the HCL Connections server.

-   **Reply parent IDreplyParentID**

    This attribute specifies the internal ID of the parent object of this forum topic reply.

-   **Requires new nesting levelrequiresNewLevel**

    If this forum topic reply is the first nested reply for the previous forum topic reply, this attribute returns the string `true`. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Summarysummary**

    A summary of the content of this item.

-   **Titletitle**

    The title of this item.

-   **Typetype**

    This attribute specifies the normalized type information for this forum topic reply. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Updated dateupdated**

    This attribute indicates the time of the last update of the social object. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **User likes userLikes**

    If this forum topic reply is liked by the current user, this attribute returns the string `true`. Otherwise, it returns `false`.


In addition to these attributes, the forum topic replies profile also provides access to the following list properties:

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


## Forums topic and reply attachments profile

The forums topic and reply attachments profile provides access to HCL Connections forums attachments feed data. It declares the following attribute names:

-   **Attachment's sizebyteSize**

    This attribute specifies the size of the attachment in bytes.

-   **Download URLdownloadLink**

    This attribute represents a link to this attachment. This attribute contains a URL by which users can download the attachment either directly from HCL Connections or by using the Ajax proxy of the portal. If the download link is not available, this attribute does not have a value. For more information about this attribute, read *Configuring globally how social object data is served*. This attribute is computed by the social rendering bean list provider plug-in.

-   **File extensionfileExtension**

    This attribute specifies the file extension of this attachment. For example, the file extension can be .jpg, .mp3, .pdf, or empty. This attribute is computed by the social rendering bean list provider plug-in.

-   **File typefileType**

    This attribute specifies the file type of this attachment. For example, the file type can be audio, code, compressed, contact, data, flash, graphic, pdf, presentation, text, video, wordProcessing, or dataDocs. The portal sets this attribute according to the value of the `fileExtension` attribute. The `fileType` attribute value is derived from the configured file type extension mappings of the WP Connections Integration Service resource environment provider. For more information, read *Configuring file type icon mappings*. This attribute is computed by the social rendering bean list provider plug-in.

-   **IDid**

    This attribute specifies the unique identifier for this attachment.

-   **Mime typemimeType**

    This attribute specifies the mime type of this attachment.

-   **Attachment's namename**

    This attribute specifies the name of this attachment.

-   **Portal download URLportalDownloadLink**

    This attribute represents a link to this attachment. This attribute contains a URL from which users can download the attachment by using the Ajax proxy of the portal. To download the attachment from HCL Connections without using the Ajax proxy, use the `rawDownloadLink` attribute instead. If the download link is not available, this attribute does not have a value. This attribute is computed by the social rendering bean list provider plug-in.

-   **Portal thumbnail URLportalThumbnailLink**

    This attribute represents a link to a thumbnail view of this attachment. To point to the thumbnail from HCL Connections without using the Ajax proxy, use the `rawThumbnailLink` attribute instead. If the thumbnail link is not available, this attribute does not have a value. This attribute is computed by the social rendering bean list provider plug-in.

-   **Published datepublished**

    This attribute indicates the time when the attachment was published. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Raw download URLrawDownloadLink**

    This attribute represents a link to this attachment. This attribute contains a URL from which users can download the attachment directly from HCL Connections. To download the attachment from HCL Connections by using the Ajax proxy of the portal, use the `portalDownloadLink` attribute instead. If the download link is not available, this attribute does not have a value.

-   **Raw thumbnail URLrawThumbnailLink**

    This attribute represents a link to a thumbnail view of this attachment. To point the thumbnail from HCL Connections by using the Ajax proxy of the portal, use the `portalThumbnailLink` attribute instead. If the thumbnail link is not available, this attribute does not have a value.

-   **Thumbnail URLthumbnailLink**

    This attribute represents a link to a thumbnail view of this attachment. If the thumbnail link is not available, this attribute does not have a value. For more information about this attribute, read *Configuring globally how social object data is served*. This attribute is computed by the social rendering bean list provider plug-in.

-   **Updated dateupdated**

    This attribute indicates the time of the last update of this attachment. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.



???+ info "Related information"
    - [Configuring file type icon mappings](../../../../cfg_global_settings_social_rendering/cfg_filetype_icon_mappings/index.md)
    - [Configuring globally how social object data is served](../../../../cfg_global_settings_social_rendering/soc_rendr_cfg_data_serve.md)

