# Adding query parameters

You can add query parameters as required by using the following instructions.

## Sorting the results

Use the query parameters `orderMetric` and `order` to sort entries of a result set.

-   **orderMetric**

    Use this parameter to specify by what metric you want to sort the result list. Valid values depend on the model that you are using:

    -   **For the resource model:**

        -   RESOURCE\_ID
        -   RESOURCE\_CREATION\_DATE
        -   RESOURCE\_LAST\_MODIFIED\_DATE
        -   RESOURCE\_TYPE\_SCHEMA
        -   RESOURCE\_SCHEME\_SPECIFIC\_PART
        -   RESOURCE\_URI
        -   RESOURCE\_TITLE
    -   **For the tag model:**

        -   TAG\_ID
        -   TAG\_CREATION\_DATE
        -   TAG\_LAST\_MODIFIED\_DATE
        -   TAG\_LOCALE
        -   TAG\_NAME
        -   TAG\_RESOURCE\_ID
        -   TAG\_OWNER\_ID
        -   TAG\_SCOPE
    -   **For the tag space model:**

        -   TAG\_SPACE\_COUNT\_REVERSE\_NAME. This is the default.
        -   TAG\_SPACE\_NAME
        -   TAG\_SPACE\_COUNT
        -   TAG\_SPACE\_CREATION\_DATE
        -   TAG\_SPACE\_LAST\_MODIFIED\_DATE
        -   TAG\_SPACE\_COUNT\_NAME
    -   **For the rating model:**

        -   RATING\_ID
        -   RATING\_CREATION\_DATE
        -   RATING\_LAST\_MODIFIED\_DATE
        -   RATING\_VALUE
        -   RATING\_RESOURCE\_ID
        -   RATING\_OWNER\_ID
        -   RATING\_SCOPE
    -   **For the rating space model:**

        -   RATING\_SPACE\_VALUE
        -   RATING\_SPACE\_COUNT
        -   RATING\_SPACE\_CREATION\_DATE
        -   RATING\_SPACE\_LAST\_MODIFIED\_DATE
-   **order=ASC\|DESC**

    Use this parameter to specify whether you want to sort in ascending or descending order. Valid values are `ASC` and `DESC`.


Example:

```
tm:ts:all&orderMetric=TAG_SPACE_COUNT_NAME&order=ASC
```

This returns a feed that contains all available tag spaces, that is all available tags and their names and counts. The results are sorted in ascending order, first by tag count, and, if counts are equal, by tags name.

## Limiting the results

You can use the query parameters `start-index` and `max-results` to limit the query results in the feed to a subset.

-   **start-index**

    Use this parameter to specify the first item from the overall result set that you want to have returned.

-   **max-results**

    Use this parameter to specify how many additional items after the start item you want to have returned.


Examples:

1.  ```
uri=tos:typeahead&term=A&max-results=10
```

    This example returns a feed that contains at the most the first 10 elements of the result.

2.  ```
uri=tos:typeahead&term=A&start-index=20&max-results=10
```

    This example returns a feed that contains at the most 10 elements, starting with the 20th element from the result.

3.  ```
tm:name:tag\_name&start-index=5&max-results=5
```

    This example returns a feed that contains 5 tag entries of the overall result set that match the name `tag_name`, leaving out the first four results, and returning the following 5 tag entries.


## Using scopes

Users can apply both tags and ratings as community tags or personal tags, either public or private. For details refer to the topic about how tagging and rating works in the portal. To control whether you query only community or personal tags or ratings, or both types of tags or ratings, use the parameter `scope`. Valid values are as follows:

-   **For tagging:**

    -   **COMMUNITY**

        Use this value to return only community tags.

    -   **PERSONAL\_PRIVATE**

        Use this value to return only personal private tags.

    -   **PERSONAL\_PUBLIC**

        Use this value to return only personal public tags.

    -   **PERSONAL**

        Use this value to return all personal tags, both public and private. This has the same effect as using the scope parameter with both values `PERSONAL_PRIVATE` and `PERSONAL_PUBLIC` .

    -   **ALL**

        Use this value to return all tags, community tags, and personal public and private tags. This has the same effect as using the scope parameter with multiple values `PERSONAL_PRIVATE` , `PERSONAL_PUBLIC`, and `COMMUNITY` .

    Valid combinations of values are as follows:

    -   `COMMUNITY` and `PERSONAL`
    -   `COMMUNITY` and `PERSONAL_PRIVATE`
    -   `COMMUNITY` and `PERSONAL_PUBLIC`
    -   `COMMUNITY` and `PERSONAL_PUBLIC` and `PERSONAL_PRIVATE`
    -   `PERSONAL_PUBLIC` and `PERSONAL_PRIVATE`

-   **For rating:**

    -   **COMMUNITY**

        Use this value to return only community ratings.

    -   **PERSONAL\_PRIVATE**

        Use this value to return only personal private ratings.

    -   **PERSONAL\_PUBLIC**

        Use this value to return only personal public ratings.

    -   **PERSONAL**

        Use this value to return all personal ratings, both public and private. This has the same effect as using the scope parameter with both values `PERSONAL_PRIVATE` and `PERSONAL_PUBLIC` .

    -   **ALL**

        Use this value to return all ratings, community ratings, and personal public and private ratings. This has the same effect as using the scope parameter with multiple values `PERSONAL_PRIVATE` , `PERSONAL_PUBLIC`, and `COMMUNITY` .

    Valid combinations of values are as follows:

    -   `COMMUNITY` and `PERSONAL`
    -   `COMMUNITY` and `PERSONAL_PRIVATE`
    -   `COMMUNITY` and `PERSONAL_PUBLIC`
    -   `COMMUNITY` and `PERSONAL_PUBLIC` and `PERSONAL_PRIVATE`
    -   `PERSONAL_PUBLIC` and `PERSONAL_PRIVATE`

Example:

```
tm:ts:all&scope=COMMUNITY&scope=PERSONAL_PUBLIC 
```

This returns a feed that contains all available tag spaces with community tags and the public tags of the current user.

## Locale sensitive queries

You can specify that you want to search only a specific locale or set of locales. This can be useful when you work with URIs that address tags by their name locales. To do this, use the parameter `locale`. Examples:

```
tm:name:tag\_name&locale=de
```

This returns a feed that contains all tags that match the name `tag\_name` in the locale `de`.

```
tm:name:tag\_name&locale=de&locale=en
```

This returns a feed that contains all tags that match the name `tag\_name` in the locale `de` or `en`.


**Related information**  


[Basic addressing](../admin-system/tag_rate_api_rest_addr.md)

[Normalizing tags](../admin-system/tag_rate_adm_norm_local.md)

[Introduction to tagging and rating](../admin-system/tag_rate_defn.md)

[How tagging and rating works in the portal](../admin-system/tag_rate_adm_gen.md)

[Grouping tags and ratings via resource categorization](../admin-system/tag_rate_adm_grp_rescat.md)

[How public and private tags and ratings work in the portal](../admin-system/tag_rate_adm_publc_privt.md)

[Querying models in correlation to each other](../admin-system/tag_rate_api_rest_cor_modls.md)

[Type-ahead with the deprecated tag widget](../admin-system/tag_rate_api_rest_oth_qu_typahed.md)

[Search suggestions for tag names](../admin-system/tag_rate_api_rest_oth_qu_opsrchsug.md)

