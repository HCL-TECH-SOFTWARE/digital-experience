# Blog-related profiles

These profiles provide access to HCL Connections blog-related feed data for blogs, blogs details, blog posts, and blog post comments.

## Blogs profile

The blogs profile provides access to HCL Connections blogs feed data. It declares the following attribute names:

-   **Author's email address**
    **authorEmail**

    This attribute references the email address of the author of the social object.

-   **Author's ID**
    **authorID**

    This attribute references the internal ID of the author of the social object. It represents the author ID from the HCL Connections server where the social object is stored.

-   **Author's image URL**
    **authorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL where you can download the image either directly from HCL Connections or by using the Ajax proxy of the portal. For more information about this attribute, read *Configuring globally how social object data is served*. This attribute is computed by the social rendering Digital Data Connector (DDC) for HCL Portal plug-in.

-   **Author's name**
    **authorName**

    You can use this attribute to include the name of the author of the social object in the design of a social list.

-   **Author's object ID**
    **authorObjectID**

    This attribute references the serialized object ID of the author of the social object. In contrast to the `authorID` attribute, the `authorObjectID` attribute represents an ID that is used by HCL Portal rather than by HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's UID**
    **authorUID**

    This attribute specifies the value of the UID attribute of the author of the social object. This value reflects the UID user attribute as defined by the user repository of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Body HTML**
    **bodyHTML**

    The HTML content of this item.

-   **Body plain**
    **bodyplain**

    The plain content of this item.

-   **Body content type**
    **bodyContentType**

    This attribute specifies the content type identifier for the body attribute of this item.

-   **Can create blog post**
    **canCreateBlogPost**

    If the current user has permission to create posts for this blog, this attribute returns the string `true`. Otherwise, it returns `false`. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Community UUID**
    **communityUUID**

    If the current blog is a community blog, this attribute specifies the UUID of the community that contains the blog. If the current blog is not contained in a community, this attribute is empty.

-   **Feed entry**
    **entry**

    The original feed entry of this item.

-   **Handle**
    **handle**

    This attribute represents the handle of this blog.

-   **ID**
    **id**

    The unique identifier for this item.

-   **Is closed**
    **isClosed**

    If the current blog is in state `closed`, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is commenting graduated ideas enabled**
    **isCommentingGraduatedIdeasEnabled**

    If the Commenting Graduated Ideas feature is enabled, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is community blog**
    **isCommunityBlog**

    If the current blog is a community blog, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is frozen**
    **isFrozen**

    If the current blog is in state `frozen`, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is ideation blog**
    **isIdeationBlog**

    If the current blog is an ideation blog, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is moderated**
    **isModerated**

    If the moderation feature is enabled for the current blog, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is open**
    **isOpen**

    If the current blog is in state `open`, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is private**
    **isPrivate**

    If the current blog is contained in a private community, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is public**
    **isPublic**

    If the current blog is contained in a public community, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is restricted**
    **isRestricted**

    If the current blog is contained in a restricted community, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is Vote Limit enabled**
    **isVoteLimitEnabled**

    If the Vote Limit feature is enabled, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is Voting Graduated Ideas enabled**
    **isVotingGraduatedIdeasEnabled**

    If the Voting Graduated Ideas feature is enabled, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **View URL**
    **link**

    This attribute specifies the URL that points to the details view of this blog. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Number of Likes**
    **numberOfLikes**

    This attribute specifies the number of people who like this blog.

-   **Author's portal image URL**
    **portalAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL where you can download the image from HCL Connections by using the Ajax proxy of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's portal URL**
    **portalAuthorLink**

    This attribute specifies the link for rendering the details view of the author of this item in the context of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal view URL**
    **portalLink**

    This attribute specifies the HCL Portal URL that points to the details view of this blog. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Published date**
    **published**

    This attribute indicates the time when the social object was published. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Author's raw Atom entry URL**
    **rawAuthorEntryLink**

    Link to the Atom entry that represents the author of this item. This URL directly addresses the HCL Connections server. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's raw image URL**
    **rawAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL for downloading the image directly from HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw Community entry URL**
    **rawCommunityEntryLink**

    This attribute specifies the HCL Connections URL of the Atom entry that represents the community that contains this blog. This attribute is empty for stand-alone blogs.

-   **Raw view URL**
    **rawLink**

    This attribute specifies the URL that points to the details view of this blog on the HCL Connections server.

-   **Raw service doc URL**
    **rawServiceDocLink**

    This attribute specifies the URL of the service document feed of this blog. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Summary**
    **summary**

    A summary of the content of this item.

-   **Tags**
    **tags**

    This attribute specifies the tags that are associated with this item.

-   **Time zone**
    **timezone**

    This attribute specifies the time zone information for the current blog.

-   **Title**
    **title**

    The title of this item.

-   **Updated date**
    **updated**

    This attribute indicates the time of the last update of the social object. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Blog UUID**
    **uuid**

    This attribute specifies the UUID of the current blog.

-   **Vote limit**
    **voteLimit**

    This attribute represents the configured vote limit for this blog.

-   **Number of remaining votes**
    **votesLeft**

    This attribute represents the number of votes that remain for this blog.

-   **Accept value for weblog entries**
    **weblogEntriesAccept**

    This attribute specifies the accept value for weblog entries for this blog. For more information, read the HCL Connections Remote API documentation.


In addition to these attributes, the blogs profile also provides access to the following list properties:

-   **Updated date**
    **updated**

    This list property indicates the time of the last update of the list that is represented by the feed at hand. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Raw URL to this feed**
    **selfLink**

    This list property specifies the link to this feed.

-   **Feed title**
    **title**

    This list property specifies the link to this feed.

-   **Total Number of Items**
    **totalNumberOfItems**

    This list property specifies the total number of items that were found for this search.

-   **Requested Number of Items**
    **requestedNumberOfItems**

    This list property specifies the requested number of items for this search.

-   **Start Index**
    **startIndex**

    This list property specifies the start index for the paged list of items.

-   **Raw first URL**
    **rawFirstLink**

    This list property specifies the HCL Connections URL of the first page of items that were found for this search.

-   **Raw next URL**
    **rawNextLink**

    This list property specifies the HCL Connections URL of the next page of items that were found for this search.

-   **Raw previous URL**
    **rawPreviousLink**

    This list property specifies the HCL Connections URL of the previous page of items that were found for this search.

-   **Raw last URL**
    **rawLastLink**

    This list property specifies the HCL Connections URL of the last page of items that are found for this search.

-   **Is truncated**
    **isTruncated**

    If the list that represents a search result is truncated, this list property returns the string `true`. Otherwise, it returns `false`.

-   **Raw tags link**
    **rawTagsLink**

    This attribute specifies the URL of the Atom feed that represents the tags for this list of blogs.


## Blog details profile

The blog details profile provides access to HCL Connections blog details feed data. It declares the following attribute names:

-   **Can create blog post**
    **canCreateBlogPost**

    If the current user has permission to create posts for this blog, this attribute returns the string `true`. Otherwise, it returns `false`. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **ID**
    **id**

    The unique ID of this blog.

-   **Blog posts URL**
    **rawBlogPostsLink**

    This attribute specifies the URL that points to the Atom feed serving the blog posts for this blog.

-   **Raw Atom entry URL**
    **rawEntryLink**

    This attribute specifies the URL of the Atom resource that represents this blog.

-   **Raw view URL**
    **rawLink**

    This attribute specifies the URL pointing to the details view of this blog on the HCL Connections server.

-   **Raw service doc URL**
    **rawServiceDocLink**

    This attribute specifies the URL of the service document feed of this blog. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw Weblog Entries URL**
    **rawWeblogEntriesLink**

    This attribute specifies the URL of the Weblog entries feed of this blog.

-   **Summary**
    **summary**

    This attribute specifies the summary of the content of this blog.

-   **Title**
    **title**

    This attribute specifies the title of this blog.

-   **Updated date**
    **updated**

    This attribute indicates the most recent time when this blog was updated. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Accept value for weblog entries**
    **weblogEntriesAccept**

    This attribute specifies the accept value for weblog entries for this blog.


## Blog posts profile

The blog posts profile provides access to HCL Connections blog posts feed data. It declares the following attribute names:

-   **Author's email address**
    **authorEmail**

    This attribute references the email address of the author of the social object.

-   **Author's ID**
    **authorID**

    This attribute references the internal ID of the author of the social object. It represents the author ID from the HCL Connections server where the social object is stored.

-   **Author's image URL**
    **authorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL where you can download the image either directly from HCL Connections or by using the Ajax proxy of the portal. For more information about this attribute, read *Configuring globally how social object data is served*. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's name**
    **authorName**

    You can use this attribute to include the name of the author of the social object in the design of a social list.

-   **Author's object ID**
    **authorObjectID**

    This attribute references the serialized object ID of the author of the social object. In contrast to the `authorID` attribute, the `authorObjectID` attribute represents an ID that is used by HCL Portal rather than by HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's UID**
    **authorUID**

    This attribute specifies the value of the UID attribute of the author of the social object. This value reflects the UID user attribute as defined by the user repository of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Body HTML**
    **bodyHTML**

    The HTML content of this item.

-   **Body plain**
    **bodyplain**

    The plain content of this item.

-   **Body content type**
    **bodyContentType**

    This attribute specifies the content type identifier for the body attribute of this item.

-   **Can create blog post comment**
    **canCreateBlogPostComment**

    If the current user has permission to create comments for this blog post, this attribute returns the string `true`. Otherwise, it returns `false`. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Can delete blog post**
    **canDeleteBlogPost**

    If the current user has permission to delete this blog post, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Can edit blog post**
    **canEditBlogPost**

    If the current user has permission to edit this blog post, this attribute returns the string `true`. Otherwise, it returns `false`. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Accept value for comment entries**
    **commentEntriesAccept**

    This attribute specifies the accept value for comment entries for this blog post.

-   **Community UUID**
    **communityUUID**

    If the current blog post is contained in a community blog, this attribute specifies the UUID of the community that contains the blog. If the current blog post is not contained in a community blog, this attribute is empty.

-   **Feed entry**
    **entry**

    The original feed entry of this item.

-   **ID**
    **id**

    The unique identifier for this item.

-   **View URL**
    **link**

    This attribute specifies the URL that points to the details view of this blog post. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Number of comments**
    **numberOfComments**

    This attribute specifies the number of comments that were posted on this blog post.

-   **Number of Likes**
    **numberOfLikes**

    This attribute specifies the number of people who like this blog post.

-   **Author's portal image URL**
    **portalAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL where you can download the image from HCL Connections by using the Ajax proxy of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's portal URL**
    **portalAuthorLink**

    This attribute specifies the link for rendering the details view of the author of this item in the context of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal view URL**
    **portalLink**

    This attribute specifies the HCL Portal URL that points to the details view of this blog post. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Published date**
    **published**

    This attribute indicates the time when the social object was published. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Author's raw Atom entry URL**
    **rawAuthorEntryLink**

    Link to the Atom entry that represents the author of this item. This URL directly addresses the HCL Connections server. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's raw image URL**
    **rawAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL for downloading the image directly from HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw publishing entry URL**
    **rawBlogPostPublishingEntryLink**

    This attribute specifies the URL to the publishing entry of this blog post. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw edit comments URL**
    **rawCommentsEditLink**

    This attribute specifies the HCL Connections URL that points to the comments collection of this blog post.

-   **Raw View comments URL**
    **rawCommentsReadLink**

    This attribute specifies the HCL Connections URL that points to the feed of comments for this blog post.

-   **Raw edit entry URL**
    **rawEditLink**

    This attribute specifies the URL to the editable entry of this blog post.

-   **Raw Atom entry URL**
    **rawEntryLink**

    This attribute specifies the HCL Connections URL of the Atom entry that represents this blog post.

-   **Raw likes edit URL**
    **rawLikesEditLink**

    This attribute specifies the HCL Connections URL of the entry that makes it possible to edit the "liked" status of this blog post.

-   **Raw View Likes URL**
    **rawLikesLink**

    This attribute specifies the HCL Connections URL that points to the "recommend" collection of this blog post.

-   **Raw view URL**
    **rawLink**

    This attribute specifies the URL of the details view of this blog post on the HCL Connections server.

-   **Raw service doc URL**
    **rawServiceDocLink**

    This attribute specifies the URL of the service document feed of this blog. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Summary**
    **summary**

    A summary of the content of this item.

-   **Tags**
    **tags**

    This attribute specifies the tags that are associated with this item.

-   **Title**
    **title**

    The title of this item.

-   **Updated date**
    **updated**

    This attribute indicates the time of the last update of the social object. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **User likes**
    **userLikes**

    If this blog post is liked by the current user, this attribute returns the string `true`. Otherwise, it returns `false`.


In addition to these attributes, the blog posts profile also provides access to the following list properties:

-   **Updated date**
    **updated**

    This list property indicates the time of the last update of the list that is represented by the feed at hand. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Raw URL to this feed**
    **selfLink**

    This list property specifies the link to this feed.

-   **Feed title**
    **title**

    This list property specifies the link to this feed.

-   **Total Number of Items**
    **totalNumberOfItems**

    This list property specifies the total number of items that were found for this search.

-   **Requested Number of Items**
    **requestedNumberOfItems**

    This list property specifies the requested number of items for this search.

-   **Start Index**
    **startIndex**

    This list property specifies the start index for the paged list of items.

-   **Raw first URL**
    **rawFirstLink**

    This list property specifies the HCL Connections URL of the first page of items that were found for this search.

-   **Raw next URL**
    **rawNextLink**

    This list property specifies the HCL Connections URL of the next page of items that were found for this search.

-   **Raw previous URL**
    **rawPreviousLink**

    This list property specifies the HCL Connections URL of the previous page of items that were found for this search.

-   **Raw last URL**
    **rawLastLink**

    This list property specifies the HCL Connections URL of the last page of items that are found for this search.

-   **Is truncated**
    **isTruncated**

    If the list that represents a search result is truncated, this list property returns the string `true`. Otherwise, it returns `false`.

-   **Raw tags link**
    **rawTagsLink**

    This attribute specifies the URL of the Atom feed that represents the tags for this list of blog posts.


## Blog post comments profile

The blog post comments profile provides access to HCL Connections blog post comments feed data. It declares the following attribute names:

-   **Author's email address**
    **authorEmail**

    This attribute references the email address of the author of the social object.

-   **Author's ID**
    **authorID**

    This attribute references the internal ID of the author of the social object. It represents the author ID from the HCL Connections server where the social object is stored.

-   **Author's image URL**
    **authorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL where you can download the image either directly from HCL Connections or by using the Ajax proxy of the portal. For more information about this attribute, read *Configuring globally how social object data is served*. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's name**
    **authorName**

    You can use this attribute to include the name of the author of the social object in the design of a social list.

-   **Author's object ID**
    **authorObjectID**

    This attribute references the serialized object ID of the author of the social object. In contrast to the `authorID` attribute, the `authorObjectID` attribute represents an ID that is used by HCL Portal rather than by HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's UID**
    **authorUID**

    This attribute specifies the value of the UID attribute of the author of the social object. This value reflects the UID user attribute as defined by the user repository of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Body HTML**
    **bodyHTML**

    The HTML content of this item.

-   **Body plain**
    **bodyplain**

    The plain content of this item.

-   **Body content type**
    **bodyContentType**

    This attribute specifies the content type identifier for the body attribute of this item.

-   **Can delete blog post comment**
    **canDeleteBlogPostComment**

    If the current user has permission to delete this comment, this attribute returns the string `true`. Otherwise, it returns `false`. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Feed entry**
    **entry**

    The original feed entry of this item.

-   **ID**
    **id**

    The unique identifier for this item.

-   **Number of Likes**
    **numberOfLikes**

    This attribute specifies the number of people who like this blog post comment.

-   **Author's portal image URL**
    **portalAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL where you can download the image from HCL Connections by using the Ajax proxy of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's portal URL**
    **portalAuthorLink**

    This attribute specifies the link for rendering the details view of the author of this item in the context of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Published date**
    **published**

    This attribute indicates the time when the social object was published. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Author's raw Atom entry URL**
    **rawAuthorEntryLink**

    Link to the Atom entry that represents the author of this item. This URL directly addresses the HCL Connections server. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's raw image URL**
    **rawAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL for downloading the image directly from HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw publishing entry URL**
    **rawBlogPostCommentPublishingEntryLink**

    This attribute specifies the URL to the publishing entry of this blog post comment. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw edit URL**
    **rawEditLink**

    This attribute specifies the HCL Connections URL of the entry that makes it possible to edit this blog post comment.

-   **Raw Atom entry URL**
    **rawEntryLink**

    This attribute specifies the HCL Connections URL of the Atom entry that represents this blog post comment.

-   **Raw likes edit URL**
    **rawLikesEditLink**

    This attribute specifies the HCL Connections URL of the entry that makes it possible to edit the "liked" status of this blog post comment.

-   **Raw view Likes URL**
    **rawLikesLink**

    This attribute specifies the HCL Connections URL that points to the "recommend" collection of this blog post comment.

-   **Raw view URL**
    **rawLink**

    This attribute specifies the URL of the details view of this blog post comment on the HCL Connections server.

-   **Summary**
    **summary**

    This attribute specifies the summary of the content of this blog post comment.

-   **Title**
    **title**

    The title of this item.

-   **Updated date**
    **updated**

    This attribute indicates the time of the last update of the social object. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **User likes**
    **userLikes**

    If this blog post comment is liked by the current user, this attribute returns the string `true`. Otherwise, it returns `false`.


In addition to these attributes, the blog post comments profile also provides access to the following list properties:

-   **Updated date**
    **updated**

    This list property indicates the time of the last update of the list that is represented by the feed at hand. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Raw URL to this feed**
    **selfLink**

    This list property specifies the link to this feed.

-   **Feed title**
    **title**

    This list property specifies the link to this feed.

-   **Total Number of ItemstotalNumberOfItems**

    This list property specifies the total number of items that were found for this search.

-   **Requested Number of Items**
    **requestedNumberOfItems**

    This list property specifies the requested number of items for this search.

-   **Start Index**
    **startIndex**

    This list property specifies the start index for the paged list of items.

-   **Raw first URL**
    **rawFirstLink**

    This list property specifies the HCL Connections URL of the first page of items that were found for this search.

-   **Raw next URL**
    **rawNextLink**

    This list property specifies the HCL Connections URL of the next page of items that were found for this search.

-   **Raw previous URL**
    **rawPreviousLink**

    This list property specifies the HCL Connections URL of the previous page of items that were found for this search.

-   **Raw last URL**
    **rawLastLink**

    This list property specifies the HCL Connections URL of the last page of items that are found for this search.

-   **Is truncated**
    **isTruncated**

    If the list that represents a search result is truncated, this list property returns the string `true`. Otherwise, it returns `false`.


???+ info "Related information"
    - [Configuring globally how social object data is served](../../../../cfg_global_settings_social_rendering/soc_rendr_cfg_data_serve.md)

