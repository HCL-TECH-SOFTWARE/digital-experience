# Type-ahead feature for the deprecated tag widget

The deprecated tag widget from earlier HCL Portal versions provided a type-ahead feature. The type-ahead feature makes it easier for users to find suitable tags. Type-ahead supports users when they work with tags. For example, when users apply tags using the tag widget, or when they search for tags, for example by using the open search functionality, type-ahead provides users suggestions for tags that other users have applied already before. Type-ahead can also help reduce the number of variants of tags.

!!! note
    The type-ahead feature works only with the deprecated dialog tag widget of the default tagging user interface of portal versions earlier than V 8.5. 

As the user starts typing tag text, one or more possible matches for that text fragment are found and immediately shown to the user. This immediate feedback allows users to select one of the listed options rather having to type the entire word or phrase they were looking for. The user can also choose a closely related option from the presented list. Thus, the type-ahead feature allows users to explore the tag space as they type. This can make it easier to find the correct term they want to use as the tag.

Another advantage of the type-ahead feature is that it reduces tag space littering; different users use different spellings for certain terms. An example is the term Web 2.0. Users might spell it as Web 2.0, Web2.0, Web 20, Web20, or Web2. Semantically all these morphological variations refer to the same term. Therefore it would be inconvenient to present all these variations separately in a tag cloud. If most users have already entered the term as Web 2.0 and new users want to tag something with a variation of this term and start typing, the type-ahead feature would suggest Web 2.0, and most users would probably select this term form the list. This reduces the amount of variation.

The type-ahead feature starts suggesting tags after a user types three characters in a type-ahead enabled input field, for example in the tag widget.


???+ info "Related information"
    - [Searching for tagged content](../../search/tag_rate_search.md)
    - [Type-ahead with the deprecated tag widget](../dev_tagging_and_rating/rest_api/other_queries/tag_rate_api_rest_oth_qu_typahed.md)
