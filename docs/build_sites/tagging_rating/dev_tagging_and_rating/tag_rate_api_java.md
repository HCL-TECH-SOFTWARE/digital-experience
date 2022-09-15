# The Java API

The Java API that the portal provides for tagging and rating follows the pattern of the portal controller SPI. For more details refer to the section about the portal controller API.

The following controllers are available for working with resources, tags and ratings:

-   **RatingModelController**

    Use this controller to control ratings, that is to create or delete ratings.

-   **TagModelController**

    Use this controller to control tags, that is to create or delete tags.

-   **ResourceModelController**

    Use this controller to control resources that are tagged or rated or both. For example, specify a category to which a resource belongs.



???+ info "Related information:"
    - [The tagging and rating user interface](../tagging_rating_ui/index.md)
    - [Controller SPI](../../../extend_dx/apis/controller_spi/index.md)
    - [Model SPI overview](../../../extend_dx/apis/model_spi/index.md)

