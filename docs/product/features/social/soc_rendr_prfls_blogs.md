# Blog-related profiles

These profiles provide access to HCL Connections blog-related feed data for blogs, blogs details, blog posts, and blog post comments.

## Blogs profile

The blogs profile provides access to HCL Connections blogs feed data. It declares the following attribute names:

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

-   **Can create blog postcanCreateBlogPost**

    If the current user has permission to create posts for this blog, this attribute returns the string `true`. Otherwise, it returns `false`. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Community UUIDcommunityUUID**

    If the current blog is a community blog, this attribute specifies the UUID of the community that contains the blog. If the current blog is not contained in a community, this attribute is empty.

-   **Feed entryentry**

    The original feed entry of this item.

-   **Handlehandle**

    This attribute represents the handle of this blog.

-   **IDid**

    The unique identifier for this item.

-   **Is closedisClosed**

    If the current blog is in state `closed`, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is commenting graduated ideas enabledisCommentingGraduatedIdeasEnabled**

    If the Commenting Graduated Ideas feature is enabled, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is community blogisCommunityBlog**

    If the current blog is a community blog, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is frozenisFrozen**

    If the current blog is in state `frozen`, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is ideation blogisIdeationBlog**

    If the current blog is an ideation blog, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is moderatedisModerated**

    If the moderation feature is enabled for the current blog, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is openisOpen**

    If the current blog is in state `open`, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is privateisPrivate**

    If the current blog is contained in a private community, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is publicisPublic**

    If the current blog is contained in a public community, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is restrictedisRestricted**

    If the current blog is contained in a restricted community, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is Vote Limit enabledisVoteLimitEnabled**

    If the Vote Limit feature is enabled, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Is Voting Graduated Ideas enabledisVotingGraduatedIdeasEnabled**

    If the Voting Graduated Ideas feature is enabled, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **View URLlink**

    This attribute specifies the URL that points to the details view of this blog. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Number of LikesnumberOfLikes**

    This attribute specifies the number of people who like this blog.

-   **Author's portal image URLportalAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL where you can download the image from HCL Connections by using the Ajax proxy of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's portal URLportalAuthorLink**

    This attribute specifies the link for rendering the details view of the author of this item in the context of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal view URLportalLink**

    This attribute specifies the HCL Portal URL that points to the details view of this blog. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Published datepublished**

    This attribute indicates the time when the social object was published. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Author's raw Atom entry URLrawAuthorEntryLink**

    Link to the Atom entry that represents the author of this item. This URL directly addresses the HCL Connections server. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's raw image URLrawAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL for downloading the image directly from HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw Community entry URLrawCommunityEntryLink**

    This attribute specifies the HCL Connections URL of the Atom entry that represents the community that contains this blog. This attribute is empty for stand-alone blogs.

-   **Raw view URLrawLink**

    This attribute specifies the URL that points to the details view of this blog on the HCL Connections server.

-   **Raw service doc URLrawServiceDocLink**

    This attribute specifies the URL of the service document feed of this blog. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Summarysummary**

    A summary of the content of this item.

-   **Tagstags**

    This attribute specifies the tags that are associated with this item.

-   **Time zonetimezone**

    This attribute specifies the time zone information for the current blog.

-   **Titletitle**

    The title of this item.

-   **Updated dateupdated**

    This attribute indicates the time of the last update of the social object. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Blog UUIDuuid**

    This attribute specifies the UUID of the current blog.

-   **Vote limitvoteLimit**

    This attribute represents the configured vote limit for this blog.

-   **Number of remaining votesvotesLeft**

    This attribute represents the number of votes that remain for this blog.

-   **Accept value for weblog entriesweblogEntriesAccept**

    This attribute specifies the accept value for weblog entries for this blog. For more information, read the HCL Connections Remote API documentation.


In addition to these attributes, the blogs profile also provides access to the following list properties:

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

-   **Raw tags link rawTagsLink**

    This attribute specifies the URL of the Atom feed that represents the tags for this list of blogs.


## Blog details profile

The blog details profile provides access to HCL Connections blog details feed data. It declares the following attribute names:

-   **Can create blog postcanCreateBlogPost**

    If the current user has permission to create posts for this blog, this attribute returns the string `true`. Otherwise, it returns `false`. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **IDid**

    The unique ID of this blog.

-   **Blog posts URLrawBlogPostsLink**

    This attribute specifies the URL that points to the Atom feed serving the blog posts for this blog.

-   **Raw Atom entry URLrawEntryLink**

    This attribute specifies the URL of the Atom resource that represents this blog.

-   **Raw view URLrawLink**

    This attribute specifies the URL pointing to the details view of this blog on the HCL Connections server.

-   **Raw service doc URLrawServiceDocLink**

    This attribute specifies the URL of the service document feed of this blog. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw Weblog Entries URLrawWeblogEntriesLink**

    This attribute specifies the URL of the Weblog entries feed of this blog.

-   **Summarysummary**

    This attribute specifies the summary of the content of this blog.

-   **Titletitle**

    This attribute specifies the title of this blog.

-   **Updated dateupdated**

    This attribute indicates the most recent time when this blog was updated. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Accept value for weblog entriesweblogEntriesAccept**

    This attribute specifies the accept value for weblog entries for this blog.


## Blog posts profile

The blog posts profile provides access to HCL Connections blog posts feed data. It declares the following attribute names:

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

-   **Can create blog post commentcanCreateBlogPostComment**

    If the current user has permission to create comments for this blog post, this attribute returns the string `true`. Otherwise, it returns `false`. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Can delete blog post.canDeleteBlogPost**

    If the current user has permission to delete this blog post, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Can edit blog post.canEditBlogPost**

    If the current user has permission to edit this blog post, this attribute returns the string `true`. Otherwise, it returns `false`. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Accept value for comment entriescommentEntriesAccept**

    This attribute specifies the accept value for comment entries for this blog post.

-   **Community UUIDcommunityUUID**

    If the current blog post is contained in a community blog, this attribute specifies the UUID of the community that contains the blog. If the current blog post is not contained in a community blog, this attribute is empty.

-   **Feed entryentry**

    The original feed entry of this item.

-   **IDid**

    The unique identifier for this item.

-   **View URLlink**

    This attribute specifies the URL that points to the details view of this blog post. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Number of commentsnumberOfComments**

    This attribute specifies the number of comments that were posted on this blog post.

-   **Number of LikesnumberOfLikes**

    This attribute specifies the number of people who like this blog post.

-   **Author's portal image URLportalAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL where you can download the image from HCL Connections by using the Ajax proxy of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's portal URLportalAuthorLink**

    This attribute specifies the link for rendering the details view of the author of this item in the context of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal view URLportalLink**

    This attribute specifies the HCL Portal URL that points to the details view of this blog post. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Published datepublished**

    This attribute indicates the time when the social object was published. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Author's raw Atom entry URLrawAuthorEntryLink**

    Link to the Atom entry that represents the author of this item. This URL directly addresses the HCL Connections server. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's raw image URLrawAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL for downloading the image directly from HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw publishing entry URLrawBlogPostPublishingEntryLink**

    This attribute specifies the URL to the publishing entry of this blog post. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw edit comments URLrawCommentsEditLink**

    This attribute specifies the HCL Connections URL that points to the comments collection of this blog post.

-   **Raw View comments URLrawCommentsReadLink**

    This attribute specifies the HCL Connections URL that points to the feed of comments for this blog post.

-   **Raw edit entry URLrawEditLink**

    This attribute specifies the URL to the editable entry of this blog post.

-   **Raw Atom entry URLrawEntryLink**

    This attribute specifies the HCL Connections URL of the Atom entry that represents this blog post.

-   **Raw likes edit URLrawLikesEditLink**

    This attribute specifies the HCL Connections URL of the entry that makes it possible to edit the "liked" status of this blog post.

-   **Raw View Likes URLrawLikesLink**

    This attribute specifies the HCL Connections URL that points to the "recommend" collection of this blog post.

-   **Raw view URLrawLink**

    This attribute specifies the URL of the details view of this blog post on the HCL Connections server.

-   **Raw service doc URLrawServiceDocLink**

    This attribute specifies the URL of the service document feed of this blog. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Summarysummary**

    A summary of the content of this item.

-   **Tagstags**

    This attribute specifies the tags that are associated with this item.

-   **Titletitle**

    The title of this item.

-   **Updated dateupdated**

    This attribute indicates the time of the last update of the social object. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **User likes userLikes**

    If this blog post is liked by the current user, this attribute returns the string `true`. Otherwise, it returns `false`.


In addition to these attributes, the blog posts profile also provides access to the following list properties:

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

    This attribute specifies the URL of the Atom feed that represents the tags for this list of blog posts.


## Blog post comments profile

The blog post comments profile provides access to HCL Connections blog post comments feed data. It declares the following attribute names:

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

-   **Can delete blog post commentcanDeleteBlogPostComment**

    If the current user has permission to delete this comment, this attribute returns the string `true`. Otherwise, it returns `false`. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Feed entryentry**

    The original feed entry of this item.

-   **IDid**

    The unique identifier for this item.

-   **Number of LikesnumberOfLikes**

    This attribute specifies the number of people who like this blog post comment.

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

-   **Raw publishing entry URLrawBlogPostCommentPublishingEntryLink**

    This attribute specifies the URL to the publishing entry of this blog post comment. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw edit URLrawEditLink**

    This attribute specifies the HCL Connections URL of the entry that makes it possible to edit this blog post comment.

-   **Raw Atom entry URLrawEntryLink**

    This attribute specifies the HCL Connections URL of the Atom entry that represents this blog post comment.

-   **Raw likes edit URLrawLikesEditLink**

    This attribute specifies the HCL Connections URL of the entry that makes it possible to edit the "liked" status of this blog post comment.

-   **Raw view Likes URLrawLikesLink**

    This attribute specifies the HCL Connections URL that points to the "recommend" collection of this blog post comment.

-   **Raw view URLrawLink**

    This attribute specifies the URL of the details view of this blog post comment on the HCL Connections server.

-   **Summarysummary**

    This attribute specifies the summary of the content of this blog post comment.

-   **Titletitle**

    The title of this item.

-   **Updated dateupdated**

    This attribute indicates the time of the last update of the social object. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **User likes userLikes**

    If this blog post comment is liked by the current user, this attribute returns the string `true`. Otherwise, it returns `false`.


In addition to these attributes, the blog post comments profile also provides access to the following list properties:

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


**Parent topic:**[Digital Data Connector profiles for social rendering](../social/soc_rendr_lst_rndr_prfls.md)

**Related information**  


[Configuring globally how social object data is served](../social/soc_rendr_cfg_data_serve.md)

