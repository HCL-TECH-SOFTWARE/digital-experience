# Communities and community members profiles 

These profiles provide access to HCL Connections community and community members feed data.

## Communities profile

The communities profile provides access to HCL Connections communities feed data. It declares the following attribute names:

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

-   **Community image URLcommunityImageLink**

    This attribute specifies the URL to the image of this community. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Community UUIDcommunityUUID**

    This attribute specifies the UUID of this community.

-   **Feed entryentry**

    The original feed entry of this item.

-   **IDid**

    The unique identifier for this item.

-   **Is moderatedisModerated**

    If this community is a moderated community, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is post-moderatedisPostModerated**

    If the `post-moderation` feature was enabled for this community, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is pre-moderatedisPreModerated**

    If the `pre-moderation` feature was enabled for this community, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is publicisPublic**

    If this community is a public community, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is restrictedisRestricted**

    If this community is a restricted \(invite-only\) community, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **View URLlink**

    This attribute specifies the URL that points to the details view of this community. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Number of membersnumberOfMembers**

    This attribute specifies the number of members of this community.

-   **Author's portal image URLportalAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL where you can download the image from HCL Connections by using the Ajax proxy of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's portal URLportalAuthorLink**

    This attribute specifies the link for rendering the details view of the author of this item in the context of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal community image URLportalCommunityImageLink**

    This attribute specifies the HCL Portal URL to the image of this community. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal view URLportalLink**

    This attribute specifies the HCL Portal URL that points to the details view of this community. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Published datepublished**

    This attribute indicates the time when the social object was published. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Raw activity stream URLrawActivityStreamLink**

    This attribute specifies the HCL Connections URL of the subcommunities feed of this community.

-   **Author's raw Atom entry URLrawAuthorEntryLink**

    Link to the Atom entry that represents the author of this item. This URL directly addresses the HCL Connections server. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's raw image URLrawAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL for downloading the image directly from HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw bookmarks URLrawBookmarksLink**

    This attribute specifies the HCL Connections URL of the bookmarks feed of this community.

-   **Raw community image URLrawCommunityImageLink**

    This attribute specifies the HCL Connections URL to the image of this community. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw Atom entry URLrawEntryLink**

    This attribute specifies the HCL Connections URL of the Atom entry that represents this community.

-   **Raw feeds URLrawFeedsLink**

    This attribute specifies the HCL Connections URL of the feeds feed of this community.

-   **Raw forum topics URLrawForumTopicsLink**

    This attribute specifies the HCL Connections URL of the forum topics feed of this community.

-   **Raw invites URLrawInvitesLink**

    This attribute specifies the HCL Connections URL of the invitations feed of this community.

-   **Raw view URLrawLink**

    This attribute specifies the URL of the details view of this community on the HCL Connections server.

-   **Raw members URLrawMembersLink**

    This attribute specifies the HCL Connections URL of the members feed of this community.

-   **Raw parent community URLrawParentCommunityLink**

    This attribute specifies the HCL Connections URL of the parent communities feed of this community.

-   **Raw subcommunities URLrawSubCommunitiesLink**

    This attribute specifies the HCL Connections URL of the subcommunities feed of this community.

-   **Summarysummary**

    This attribute specifies the summary description of this community.

-   **Tagstags**

    This attribute specifies the tags that are associated with this item.

-   **Titletitle**

    The title of this item.

-   **Updated dateupdated**

    This attribute indicates the time of the last update of the social object. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **User is MemberuserIsMember**

    If the current user is a member of the current community, this attribute returns the string `true`. Otherwise, it returns `false`. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **User membership edit URLuserMembershipEditLink**

    This attribute specifies the URL to the editable resource that represents the membership relation between the currently logged in user and the current community.

-   **User Membership URLuserMembershipLink**

    This attribute specifies the URL to the resource that represents the membership relation between the currently logged in user and the current community. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **User Membership RoleuserMembershipRole**

    This link specifies the membership role of the currently logged in user in the current community.


In addition to these attributes, the communities profile also provides access to the following list properties:

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


## Community members profile

The communities members profile provides access to HCL Connections communities members feed data. It declares the following attribute names:

-   **Body HTMLbody HTML**

    The HTML content of this item.

-   **Body plainbody plain**

    The plain content of this item.

-   **Body content typebodyContentType**

    This attribute specifies the content type identifier for the body attribute of this item.

-   **IDid**

    ID

-   **Member is activememberActive**

    This attribute indicates whether this community member is currently available.

-   **Member's emailmemberEmail**

    This attribute specifies the email address of this community member.

-   **Member's IDmemberID**

    This attribute specifies the internal ID of this community member.

-   **Member's image URLmemberImageLink**

    This attribute specifies the URL of the profile image of this community member. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Member's namememberName**

    This attribute specifies the name of this community member.

-   **Member's rolememberRole**

    This attribute specifies the role of the community member.

-   **Member's typememberType**

    This attribute specifies the type of the community member, for example, whether the member is a person or a group.

-   **Portal view URLportalLink**

    This attribute specifies the HCL Portal URL that points to the details view of this community member. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal member's image URLportalMemberImageLink**

    This attribute specifies the HCL Portal URL of the profile image of this community member. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Published datepublished**

    This attribute indicates the time at which this community member record was created. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Raw Atom entry URLrawEntryLink**

    This attribute specifies the HCL Connections URL of the Atom entry that represents this community member.

-   **Raw member's image URLrawMemberImageLink**

    This attribute specifies the HCL Connections URL of the profile image of this community member. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw profile URLrawProfileLink**

    This attribute specifies the HCL Connections URL of the user profile Atom entry that represents this community member.

-   **Raw VCard URLrawVCardLink**

    This attribute specifies the HCL Connections URL of the VCard resource of this community member.

-   **Summarysummary**

    This attribute specifies the summary information for this community member.

-   **Titletitle**

    Title

-   **Updated dateupdated**

    This attribute indicates the most recent time at which this community record was updated. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.


In addition to these attributes, the community members profile also provides access to the following list properties:

-   **Updated dateupdated**

    This list property indicates the time of the last update of the list represented by the feed at hand. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

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

    This list property specifies the HCL Connections URL of the last page of items found for this search.

-   **Is truncatedisTruncated**

    If the list that represents a search result is truncated, this list property returns the string `true`. Otherwise, it returns `false`.


**Parent topic:**[Digital Data Connector profiles for social rendering ](../social/soc_rendr_lst_rndr_prfls.md)

**Related information**  


[Configuring globally how social object data is served ](../social/soc_rendr_cfg_data_serve.md)

