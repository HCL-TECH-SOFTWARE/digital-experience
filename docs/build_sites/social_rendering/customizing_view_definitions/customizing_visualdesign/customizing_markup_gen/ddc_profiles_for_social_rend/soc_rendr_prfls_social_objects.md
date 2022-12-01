# Social objects profile

The social objects profile provides access to HCL Connections social objects feed data.

It declares the following attribute names:

-   **Access controlaccessControl**

    This attribute indicates whether this social object is public, private, or shared.

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

-   **Bodybody**

    This attribute specifies the content of this item.

-   **Body plainbody plain**

    This attribute specifies the plain content of this item.

-   **Body content typebodyContentType**

    This attribute specifies the content type identifier for the body attribute of this social object.

-   **Community Atom feed URLcommunityEntryLink**

    This attribute represents the link to the Atom resource that represents the community of this social object. This attribute contains a URL for accessing the feed either directly from HCL Connections or by using the Ajax proxy of the portal. If the social object does not belong to a community, this attribute does not have a value. For more information about this attribute, read *Configuring globally how social object data is served*. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Community view URLcommunityLink**

    This attribute represents the link to the community that contains this social object. This attribute contains a URL by which users can view the community in the context of either HCL Connections or the portal. If the social object does not belong to a community, this attribute does not have a value. For more information about this attribute, read *Configuring globally how social object data is served*. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Community UUIDcommunityUUID**

    This attribute references the internal Universally Unique Identifier \(UUID\) of the community that contains this social object. It represents the community identifier from the HCL Connections server where the social object is stored. If the social object does not belong to a community, this attribute does not have a value.

-   **Download URLdownloadLink**

    If the social object is a file, this attribute represents a link to that file. This attribute contains a URL by which users can download the social object either directly from HCL Connections or by using the Ajax proxy of the portal. If the download link is not available, this attribute does not have a value. For more information about this attribute, read *Configuring globally how social object data is served*. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Feed entryentry**

    The original feed entry of this item.

-   **Atom entry URLentryLink**

    This attribute represents the link to the Atom resource that represents this social object. This attribute contains a URL for accessing the feed either directly from HCL Connections or by using the Ajax proxy of the portal. For more information about this attribute, read *Configuring globally how social object data is served*. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Event end dateeventEndDate**

    You can use this attribute to show the end date for this event. If the event recurs and therefore has multiple end dates, this attribute represents the end date that matches the event start date that is available through the `eventStartDate` attribute. To format the generated data string, you can use the format parameter of the `AttributeResource` tag. For more information about the Web Content Manager date formatting options, read *Setting parameters to format dates* in the Web Content Manager product documentation. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **All event end dateseventEndDates**

    This attribute specifies the list of all end dates of this event.

-   **Event parent IDeventParentID**

    This attribute specifies the internal ID of the parent event of this event. If this social object is not an event, this attribute is empty.

-   **Event start dateeventStartDate**

    You can use this attribute to show the start date for this event. If the event recurs and therefore has multiple start dates, this attribute represents the next start date. If all start dates are in the past, the method returns the last start date. The event end date that corresponds to the event start date is available through the `eventEndDate` attribute. To format the generated data string, you can use the format parameter of the `AttributeResource` tag. For more information about the Web Content Manager date formatting options, read *Setting parameters to format dates* in the Web Content Manager product documentation. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **All event start dateseventStartDates**

    This attribute specifies the list of all start dates of this event.

-   **File extensionfileExtension**

    This attribute carries the file extension of this social object. For example, the file extension can be .jpg, .mp3, or.pdf. If the social object is not a file, this attribute does not have a value.

-   **File typefileType**

    This attribute specifies the file type of this social object. For example, the file type can be audio, code, compressed, contact, data, flash, graphic, pdf, presentation, text, video, wordProcessing, or dataDocs. The portal sets this attribute according to the value of the `fileExtension` attribute. The `fileType` attribute value is derived from the configured file type extension mappings of the WP Connections Integration Service resource environment provider. For more information, read *Configuring file type icon mappings*. If the social object is not a file, this attribute does not have a value. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **IDid**

    The unique identifier for this item.

-   **Is answered questionisAnswered**

    If this social object is an answered forum topic question, this attribute returns the string `true`. If the social object is a forum topic but not an answered question, it returns `false`. If this social object is not a forum topic, this attribute is empty.

-   **Is All-day eventisEventAllDay**

    If this social object is an all-day event, this attribute returns the string `true`. If the social object is an event but not an all-day event, it returns `false`. If this social object is not an event, this attribute is empty.

-   **Is repeating eventisEventRepeating**

    If this social object is a repeating event, this attribute returns the string `true`. If the social object is a non-repeating event, it returns `false`. If this social object is not an event, this attribute is empty.

-   **Is questionisQuestion**

    If this social object is a forum topic question, this attribute returns the string `true`. If the social object is a forum topic but no question, this attribute returns `false`. If this social object is not a forum topic, this attribute is empty.

-   **Number of Likeslikes**

    This attribute specifies the number of people who like this social object. This attribute is for internal use only and does not show up in the UI.

-   **View URLlink**

    This attribute represents the link to this social object. This attribute contains a URL where you can view the social object in the context of either HCL Connections or the portal. For more information about this attribute, read *Configuring globally how social object data is served*. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Live number of commentsliveNumberOfComments**

    This attribute specifies the number of comments that exist for a file, blog post, or wiki page. In contrast to the `numberOfComments` attribute, the `liveNumberOfComments` attribute retrieves its value not from the search result feed but directly from the corresponding HCL Connections service API. As a result, the value reflects the current value of this attribute, independent of the time of the last search crawl. Using this attribute instead of the `numberOfComments` attribute introduces some performance overhead for getting the live data. Use it only in lists in which the user can create or delete comments. If this social object is not a file, blog post, or wiki page, this attribute returns `0`.

-   **Live number of likesliveNumberOfLikes**

    This attribute specifies the number of people who liked this social object. In contrast to the `numberOfLikes` attribute, the `liveNumberOfLikes` attribute retrieves its value not from the search result feed, but directly from the corresponding HCL Connections service API. As a result, the value reflects the current value of this attribute, independent of the time of the last search crawl. Using this attribute instead of the `numberOfLikes` attribute introduces some performance overhead for getting the live data. Use it only in lists in which the user can like or unlike the social objects. If this social object does not support the like operation, this attribute returns `0`.

-   **Live number of repliesliveNumberOfReplies**

    This attribute specifies the number of replies that exist for this forum topic. In contrast to the `numberOfReplies` attribute, the `liveNumberOfReplies` attribute retrieves its value not from the search result feed but directly from the forums feed. As a result, the value reflects the current value of this attribute, independent of the time of the last search crawl. Using this attribute instead of the `numberOfReplies` attribute introduces some performance overhead for getting the live data. Use it only in lists in which the user can create or delete replies. If this social object is not a forum topic, this attribute returns `0`.

-   **Number of commentsnumberOfComments**

    This attribute specifies the number of comments that are associated with this file, event, or blog post. If the current social object is not a file, event or blog post, this attribute returns 0. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Number of LikesnumberOfLikes**

    This attribute specifies the number of people who like this social object.

-   **Number of repliesnumberOfReplies**

    This attribute specifies the number of replies that exist in this forum topic. If this social object is not a forum topic, this attribute returns `0`.

-   **Author's portal image URLportalAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL where you can download the image from HCL Connections by using the Ajax proxy of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's portal URLportalAuthorLink**

    This attribute specifies the link for rendering the details view of the author of this item in the context of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal community Atom entry URLportalCommunityEntryLink**

    This attribute represents the link to the Atom resource that represents the community of this social object. This attribute contains a URL for accessing the feed by using the Ajax proxy of the portal. To retrieve the feed from HCL Connections without using the Ajax proxy, use the `rawCommunityEntryLink` attribute instead. If the social object does not belong to a community, this attribute does not have a value. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal community view URLportalCommunityLink**

    This attribute represents the link to the community that contains this social object. This attribute contains a URL by which users can view the community in the context of the portal. To access the community in the context of HCL Connections, use the `rawCommunityLink` attribute instead. If the social object does not belong to a community, this attribute does not have a value. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal download URLportalDownloadLink**

    If the social object is a file, this attribute represents a link to that file. This attribute contains a URL by which users can download the social object by using the Ajax proxy of the portal. To download the social object from HCL Connections without using the Ajax proxy, use the `rawDownloadLink` attribute instead. If the download link is not available, this attribute does not have a value. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal Atom entry URLportalEntryLink**

    This attribute represents the portal link to the Atom resource that represents this social object. This attribute contains a URL for accessing the feed by using the Ajax proxy of the portal. To retrieve the feed from HCL Connections without using the Ajax proxy, use the `rawEntryLink` attribute instead. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal view URLportalLink**

    This attribute represents the link to this social object. This attribute contains a URL where you can view the social object in the context of the portal. To access the social object in the context of HCL Connections, use the `rawLink` attribute instead. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **User profile job titleprofileJobTitle**

    You can use this attribute to show the job title of individual users when social objects of the type profile are rendered. The attribute value is empty for social objects of types other than profile.

-   **User profile phone numberprofilePhoneNumber**

    You can use this attribute to show the phone number of individual users when social objects of the type profile are rendered. The attribute value is empty for social objects of types other than profile.

-   **Published datepublished**

    This attribute indicates the time when the social object was published. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Author's raw Atom entry URLrawAuthorEntryLink**

    Link to the Atom entry that represents the author of this item. This URL directly addresses the HCL Connections server. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's raw image URLrawAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL for downloading the image directly from HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw Comment IDsrawCommentIDs**

    This attribute is internally used to compute the `numberOfComments` attribute. It does not show up in the web content authoring UI.

-   **Number of commentsrawComments**

    This attribute specifies the number of comments that are associated with this social object. This attribute is for internal use only and does not show up in the UI.

-   **Raw community Atom entry URLrawCommunityEntryLink**

    This attribute represents the link to the Atom resource that represents the community of this social object. This attribute contains a URL where you can access the feed directly from HCL Connections. To retrieve the feed from HCL Connections by using the Ajax proxy of the portal, use the `portalCommunityEntryLink` instead. If the social object does not belong to a community, this attribute does not have a value.

-   **Raw community view URLrawCommunityLink**

    This attribute represents the link to the community that contains this social object. This attribute contains a URL where you can view the community in the context of HCL Connections. To access the community in the context of the portal, use the `portalCommunityLink` attribute instead. If the social object does not belong to a community, this attribute does not have a value.

-   **Raw download URLrawDownloadLink**

    If this social object is a file, this attribute represents a link to that file. This attribute contains a URL where you can download the social object directly from HCL Connections. To download the social object from HCL Connections by using the Ajax proxy of the portal, use the `portalDownloadLink` attribute instead. If the download link is not available, this attribute does not have a value.

-   **Raw Atom entry URLrawEntryLink**

    This attribute represents the HCL Connections link to the Atom resource that represents this social object. This attribute contains a URL where you can access the feed directly from HCL Connections. To retrieve the feed from HCL Connections by using the Ajax proxy of the portal, use the `portalEntryLink` attribute instead.

-   **Raw view URLrawLink**

    This attribute represents the link to this social object. This attribute contains a URL where you can view the social object details in the context of HCL Connections. To access the social object in the context of the portal, use the `portalLink` attribute instead.

-   **Raw number of commentsrawNumberOfComments**

    This attribute is internally used to compute the `numberOfComments` attribute. It does not show up in the authoring UI.

-   **Raw replies URLrawRepliesLink**

    This attribute specifies the HCL Connections URL of the replies feed for this forum topic. If this social object is not a forum topic, this attribute is empty.

-   **Raw typerawType**

    This attribute carries the HCL Connections component category term of the social object as it is used by the HCL Connections search API. Among other information, the value includes the name of the HCL Connections service and the service-specific content type. For example, the `rawType` of a social object can be `communities:blogs:entry`. For more information about HCL Connections content types, read the HCL Connections documentation.

-   **Relevance scorerelevanceScore**

    This attribute specifies the relative relevance of this social object in the context of a search query. The value of this attribute typically ranges between 0 and 1. However, values less than 0 or more than 1 can occur. You can consider a score that is smaller than 0 to be equivalent to 0 and a score that is larger than 1 to be equivalent to 1.

-   **Serviceservice**

    The service attribute carries the name of the HCL Connections service that hosts the social object. The portal sets this attribute according to the value of the `rawType` attribute and the service type mappings that are configured in the WP Connections Integration Service resource environment provider. For example, such services can be activities, blogs, bookmarks, calendars, communities, forums, profiles, or wikis. For more information about HCL Connections services, read the HCL Connections documentation. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Summarysummary**

    A summary of the content of this item.

-   **Tagstags**

    This attribute specifies the tags that are associated with this item.

-   **Titletitle**

    The title of this item.

-   **Typetype**

    The type attribute carries the name of the content type of the social object. The portal sets this attribute according to the value of the `rawType` attribute and the resource type mappings that are configured in the WP Connections Integration Service resource environment provider. For example, such types can be `activity`, `blog`, `bookmark`, `calendar`, `community`, `file`, `forum`, `profile`, `statusUpdate`, or `wiki`. For more information about HCL Connections content types, read the HCL Connections documentation. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Updated dateupdated**

    This attribute indicates the time of the last update of the social object. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **URI typeuriType**

    This attribute specifies the type information for the URI of this social object. This attribute is computed by the social rendering Digital Data Connector plug-in.



???+ info "Related information"
    - [Setting parameters to format dates](https://help.hcltechsw.com/digital-experience/8.5/panel_help/wcm_reference-dates.html)
    - [Configuring file type icon mappings](../../../../cfg_global_settings_social_rendering/cfg_filetype_icon_mappings/index.md)
    - [Configuring globally how social object data is served](../../../../cfg_global_settings_social_rendering/soc_rendr_cfg_data_serve.md)

