# Introduction to tagging and rating

Tagging and rating are features that support collaboration and interaction between users when using Web content.

Rather than relying on dedicated authors to be responsible for adding content, knowledge-sharing communities of users now collectively contribute to Web content. These systems grow quickly and are not as coordinated as they were when teams of dedicated authors were responsible for planning and creating content. For this reason, new methods of organizing and structuring content are required.

Tagging and rating are common and effective collaboration techniques that support the collective wisdom of communities:

-   **Tagging**

    Tagging means assigning keywords as metadata to resources to describe or evaluate the content of these resources. These keywords are tags. For example, a user can apply the tag websphere to a page that provides information about IBM WebSphere products. Tagging content provides users the ability to describe, and better categorize, resources. By tagging content, users make it easier to find and highlight the importance or quality of content, which, in turn, benefits the other users in the knowledge-sharing community. Tagging provides better search results, as the search criteria is descriptive and users do not have to scan the content for the keywords.

    A user typically assigns more than just one tag to a single resource. For example, a user can assign a book the tags portal, web20, and computer\_science. This allows for multiple ways of finding the book, like putting multiple copies of the same book on different shelves.

    Tagging has become one of the most popular techniques to allow users and entire user communities to classify, organize, and structure content autonomously. By tagging content users add valuable meta information and even lightweight semantics to Web content. Tagging allows non-expert users to develop folksonomies that categorize content available in the system.

    -   **Tag**

        A tag is a keyword that users apply to describe or evaluate the content of the resource that they tag. A user can apply the same private tag to multiple resources. This means that an individual user can use the same certain tag more than once, but only once per resource. By default users can only delete tags that they have applied themselves. Users with the MANAGER role have more rights.

    -   **Tag cloud**

        Tag clouds help users find and retrieve resources by showing aggregated views of tags that users have applied to specific resources. Tag clouds provide different visual representations of all the tags that users have applied. For example, depending on the configuration settings, tag clouds can display all available tags or how often specific tags occur. Tag clouds usually highlight the popularity or importance of specific tags by increasing the size of the tags or changing the color of the tags.

    -   **Tagspace**

        A tagspace represents the number of occurrences of a certain tag. It contains the name of the tag, the number of occurrences and the information whether the current user has applied this tag as a private tag. To represent the tag cloud, the portal loads the tagspaces rather than retrieving the single tag instances from the database and accumulating the numbers.

-   **Rating**

    Rating is the evaluation or assessment of something, in terms of quality, for example, \(as with a critic rating a novel\), quantity \(as with an athlete being rated by his or her statistics\), or a combination of both. Examples of quality ratings are critics who rate books or customers who rate purchased products for quality. Examples of quantitative ratings can be the performance data of cars or computers. Users rate resources by assigning numeric or other values to resources to indicate how much they like the resource. Thus, a rating is a value associated to a resource. Ratings are selected from a range of possible values where one end of the range usually refers to "like" and the other end to "dislike".

    Rating allows users and entire communities to express which content they like or dislike.

    By default users can only delete ratings that they have applied themselves. Users with the MANAGER role have more rights.

-   **Resource**

    A user can apply the same rating to multiple resources. A resource is anything that can be uniquely identified and addressed in a portal. For example, this can be a portal page, or portlet, or an item for sale in an internet shop.



**Related information**  


[Adding query parameters](../admin-system/tag_rate_api_rest_add_qparms.md)

## Public and private tagging and rating

Users can assign public or private tags and ratings:

-   **Private tagging and rating**

    With private tagging and rating users can see only their own tags and ratings. This allows users to browse through their Web content and retrieve important resources fast. A user typically assigns more than just one tag to a single resource. For example, a user can assign a book the tags portal, web20, and computer\_science. This allows for multiple ways of finding the book, like putting multiple copies of the same book on different shelves.

-   **Public tagging and rating**

    In a collaborative context users can see tags and ratings given by their collaborative community. First, users assign tags to resources just like under private tagging, creating their own way to browse through system content. Public tagging becomes powerful when multiple users start to tag resources and tags become part of the community pool of tags. This way tagging creates a bridge between personal and community knowledge and enables collective intelligence. Everyone's tags together form a kind of community consensus about an resource. The tags that are used most often might be the ones describing an item best.


## Community and personal tags and ratings

Tags can be personal tags or community tags. All statements made for tags in the following apply also to ratings.

-   **Personal tags**

    Personal tags are applied by a specific user. When a user tags a resource, the user applies the tag to the resource as a personal tag. Public tags can be seen by everyone who belongs to the community. Private tags can only be seen by the user who created the tag.

-   **Community tags**

    Community tags are assigned by the community, that is by all other users in the system. Every public tag that a user assigns turns into a community tag, because it is visible to the community.


