# Querying models in correlation to each other

You can query one model in correlation to another model.

To do this, you start with an empty set of one of the available models, and add single entries by using additional query parameters. For details about empty sets and additional query parameters refer to the topic about Adding query parameters.

Examples:

-   To correlate resources with tags, you start with the feed that represents an empty set of resources and add single resources based on how these have been tagged.
-   To correlate resources with ratings, you start with the feed that represents an empty set of resources and add single resources based on how these have been rated.
-   To correlate tags with resources you start with the feed that represents an empty set of tags and add single tags based on the resources to which these tags have been assigned.
-   To correlate ratings with resources, you start with the feed that represents an empty set of ratings and add single ratings based on the resources to which these ratings have been assigned.

!!! note
    You cannot correlate a model with itself. For example, the tag model query parameter `tm_param` is not supported for the tag model; equally, the rating model query parameter `rtm_param` is not supported the rating model, and so on. The only exception from this rule is to use the URI `tm:name:related`, which is listed under the topic about *Other queries*.

## Correlating the resource model with other models

To correlate the resource model with other models, use the following parameters:

-   **rm:empty&tmparam=tm:name:tag\_name**

    This returns a feed that contains all resources that have been tagged with the tag `tagname`.

-   **rm:empty&tmparam=tm:name:tag\_name&rmparam=rm:type:type**

    This returns a feed that contains all resources that are registered with type schema `type` and that have been tagged with the tag `tagname`.

-   **rm:empty&tmparam=tm:name:tag\_name&rmparam=rm:category:category\_name**

    This returns a feed that contains all resources that are registered under the category `category_name` and that have been tagged with the tag `tag_name`.


## Correlating the tag model with other models

To correlate the tag model with other models, use the following parameters:

-   **tm:empty&rmparam=rm:resource\_uri**

    This returns a feed that contains all tags for a resource with the URI `resource_uri`.

-   **tm:empty&rmparam=rm:resource\_uri\_1&rmparam=rm:resource\_uri\_2**

    This returns a feed that contains all tags for resources with the URIs `resource_uri_1` or `resource_uri_2`.


## Correlating the tag space model with other models

To correlate the tag space model with other models, use the following parameters:

-   **tm:ts:empty&rmparam=rm:resource\_uri**

    This returns a feed that contains all tag spaces for a resource with the URI `resource_uri`.

-   **tm:ts:empty&rmparam=rm:resource\_uri\_1&rmparam=rm:resource\_uri\_2**

    This returns a feed that contains all tag spaces for resources with the URIs `resource_uri_1` or `resource_uri_2`.

-   **tm:ts:empty&rmparam=rm:type:type**

    This returns a feed that contains all tag spaces for resources registered with the type schema `type`.

-   **tm:ts:empty&rmparam=rm:category:category**

    This returns a feed that contains all tag spaces for resources registered in category `category`.

-   **tm:ts:empty&rmparam=rm:type:type\_1&rmparam=rm:type:type\_2**

    This returns a feed that contains all tag spaces for resources registered with the type schema `type_1` or `type_2`.

-   **tm:ts:empty&rmparam=rm:category:category\_1&rmparam=rm:category:category\_2**

    This returns a feed that contains all tag spaces for resources registered in category `category_1` or `category_2`.


## Correlating the rating model with other models

-   **rtm:empty&rmparam=rm:resource\_uri**

    This returns a feed that contains all ratings for a given resource with the URI `resource_uri` .

-   **rtm:empty&rmparam=rm:resource\_uri1&rmparam=rm:`resource_uri2`**

    This returns a feed that contains all ratings for a given resource with the URIs `resource_uri_1` or `resource_uri_2` .


## Correlating the rating space model with other models

-   **rtm: rs :empty&rmparam=rm:resource\_uri**

    This returns a feed that contains all rating spaces for a given resource with the URI `resource_uri`.

-   **rtm: rs :empty&rmparam=rm:resource\_uri1&rmparam=rm:`resource_uri2`**

    This returns a feed that contains all ratings for a given resource with the URIs `resource_uri_1` or `resource_uri_2`.

-   **rtm: rs :empty&rmparam=rm:type:type**

    This returns a feed that contains all rating spaces for resources registered with the type schema `type`.

-   **rtm: rs :empty&rmparam=rm:category:category**

    This returns a feed that contains all rating spaces for resources registered in the category `category`.

-   **rtm: rs :empty&rmparam=rm:type:type\_1&rmparam=rm:type:type2**

    This returns a feed that contains all rating spaces for resources registered with type schema `type_1` or `type_2`.

-   **rtm: rs :empty&rmparam=rm:category: category\_1&rmparam=rm:category:category\_2**

    This returns a feed that contains all rating spaces for resources registered in category `category_1` or `category_2`.



???+ info "Related information"
    - [Basic addressing](../rest_api/tag_rate_api_rest_addr.md)
    - [Adding query parameters](../rest_api/tag_rate_api_rest_add_qparms.md)

