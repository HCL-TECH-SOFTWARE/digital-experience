# Grouping tags and ratings via resource categorization

Users apply tags and ratings to resources. Users can tag and rate all resources that can be uniquely identified.

Examples:

-   A URI that consists of a type schema and an SSP \(scheme specific part\), such as an article bar code: `item:item\_bar\_code\_number`
-   The ISBN number for a book: `book:isbn\_number`.

These resources must be registered with the tagging and rating engine. The portal performs this registration whenever an existing resource is tagged or rated. To categorize tags and ratings, administrators can group resources. You can group resources by URI or by category specification:

-   **Resource categorization per URI**

    When the portal registers resources, it assigns them a URI. The URI consists of a type schema and a scheme specific part \(SSP\). For example, users could register media as follows:

    -   some books under content/books/action:/isbn, where content/books/action is the type schema and isbn is the SSP.
    -   some other books under content/books/thriller:/isbn
    -   some DVDs under content/dvds/action:/some\_ID
    -   some other DVDs under content/dvds/romance:/some\_ID
    Categorization of resources becomes important when tags or ratings are aggregated. For example, tags are aggregated in tag clouds. For details refer to the topic about Configuring the tag cloud. For example if a user wants to aggregate a tag cloud that shows all tags that are associated with the action books as previously mentioned, you could aggregate tags for resources that have been registered under the type schema content/books/action. For details about how to scope tag clouds for certain type schemas refer to the topic about Configuring the tag cloud.

-   **Resource categorization per category specification**

    When resources are registered, they can be explicitly associated with one or more categories. A category is represented by a non-localized unique string based identifier. For example, users could register media as follows:

    -   some books under content/books/action:/isbn and the category promotion
    -   some other books under content/books/thriller:/isbn and the category bestseller
    -   some DVDs under content/dvds/action:/some\_ID and the category promotion
    -   some other DVDs under content/dvds/romance:/some\_ID and the category bestseller
    For example, if you want to aggregate a tag cloud that shows all tags for promotion articles, you could aggregate tags for resources that have been associated with the category promotion, in the previous example action books and action DVDs. For details about how to scope tag clouds for certain type schemas refer to the topic about Configuring the tag cloud.


**Parent topic:**[How tagging and rating works in the portal](../admin-system/tag_rate_adm_gen.md)

**Related information**  


[Adding query parameters](../admin-system/tag_rate_api_rest_add_qparms.md)

[The portal tag cloud](../admin-system/tag_rate_tag_cloud.md)

