# Grouping tags and ratings via resource categorization

Users apply tags and ratings to resources. Users can tag and rate all resources that can be uniquely identified.

Examples:

-   A URI that consists of a type schema and an SSP \(scheme specific part\), such as an article bar code: `item:item\_bar\_code\_number`
-   The ISBN number for a book: `book:isbn\_number`.

These resources must be registered with the tagging and rating engine. The portal performs this registration whenever an existing resource is tagged or rated. To categorize tags and ratings, administrators can group resources. You can group resources by URI or by category specification:

-   **Resource categorization per URI**

    When the portal registers resources, it assigns them a URI. The URI consists of a type schema and a scheme specific part \(SSP\). For example, users could register media as follows:

    -   some books under <samp class="tag-example">content/books/action:/isbn</samp>, where <samp class="tag-example">content/books/action</samp> is the type schema and <samp class="tag-example">isbn</samp> is the SSP.
    -   some other books under <samp class="tag-example">content/books/thriller:/isbn</samp>
    -   some DVDs under <samp class="tag-example">content/dvds/action:/some\_ID</samp>
    -   some other DVDs under <samp class="tag-example">content/dvds/romance:/some\_ID</samp>

    Categorization of resources becomes important when tags or ratings are aggregated. For example, tags are aggregated in tag clouds. For details refer to the topic about Configuring the tag cloud. For example if a user wants to aggregate a tag cloud that shows all tags that are associated with the action books as previously mentioned, you could aggregate tags for resources that have been registered under the type schema <samp class="tag-example">content/books/action</samp>. For details about how to scope tag clouds for certain type schemas refer to the topic about Configuring the tag cloud.

-   **Resource categorization per category specification**

    When resources are registered, they can be explicitly associated with one or more categories. A category is represented by a non-localized unique string based identifier. For example, users could register media as follows:

    -   some books under <samp class="tag-example">content/books/action:/isbn</samp> and the category <samp class="tag-example">promotion</samp>
    -   some other books under <samp class="tag-example">content/books/thriller:/isbn<samp> and the category <samp class="tag-example">bestseller</samp>
    -   some DVDs under <samp class="tag-example">content/dvds/action:/some\_ID</samp> and the category <samp class="tag-example">promotion<samp>
    -   some other DVDs under <samp class="tag-example">content/dvds/romance:/some\_ID</samp> and the category <samp class="tag-example">bestseller</samp>
    
    For example, if you want to aggregate a tag cloud that shows all tags for promotion articles, you could aggregate tags for resources that have been associated with the category <samp class="tag-example">promotion</samp>, in the previous example action books and action DVDs. For details about how to scope tag clouds for certain type schemas refer to the topic about Configuring the tag cloud.



???+ info "Related information"
    - [Adding query parameters](../dev_tagging_and_rating/rest_api/tag_rate_api_rest_add_qparms.md)
    - [The portal tag cloud](../tagging_rating_ui/tag_rate_tag_cloud.md)

