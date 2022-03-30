# Taxonomies, Categories, and keywords 

The combination of taxonomy and categories enables control what displays in menus.

-   **Taxonomies and categories**

    A Category refers to the subject matter of your content item. For example, your content item might be of the category New Products or Latest News. Sets of categories are grouped within different top-level taxonomies. List of links to content items that use the same category are displayed by using a menu component.

-   **Keywords**

    Use Keywords to profile content. Unlike categories, which are chosen from a predefined list, you can enter any keywords that you like when you create content items. List of links to content items that use the same keyword are displayed by using a menu component.


## Taxonomy example

In the example:

-   "Financial" is the ancestor of "Interest Rates", "Personal", "Business", "Corporate" and "Banking Solutions".

-   "Personal", "Business" and "Corporate" are the descendants of "Interest Rates" and "Financial".


-   Financial
    -   Banking Solutions
    -   Interest Rates
        -   Personal
        -   Business
        -   Corporate
-   News

## Category scenarios

When building a hierarchy of taxonomies and categories, it is important to consider how a menu uses your categories in a search, because menus search both upwards and downwards within groups of categories.

|Scenario|Example|
|--------|-------|
|If you base a menu on a top-level category, all content that is profiled with categories that belong to that top-level category and their descendants appear in the menu.|In the previous example, a menu based on Financial displays content that is profiled with any of the following:-   Financial
    -   Banking Solutions
    -   Interest Rates
        -   Personal
        -   Business
        -   Corporate

|
|If you base a menu on a mid-level category, all content that is profiled with the mid-level category or its descendants or its ancestors appear in the menu.|A menu based on Interest Rates displays content that is profiled with any of the following:-   Financial
    -   Interest Rates
        -   Personal.
        -   Business.
        -   Corporate.

|
|If you base a menu on a bottom-level category, all content that is profiled with the bottom-level category or its ancestors are returned by the menu.|A menu based on Business displays content that is profiled with any of the following:-   Financial
    -   Interest Rates
        -   Business.

|

**Parent topic:**[Building the website ](../site/site_build_parent.md)

