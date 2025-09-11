# Taxonomies, categories, and keywords

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
|If you base a menu on a top-level category, all content that is profiled with categories that belong to that top-level category and their descendants appear in the menu.|In the previous example, a menu based on Financial displays content that is profiled with any of the following: <br> -   Financial <br>  -   Banking Solutions <br> -   Interest Rates <br>   -   Personal <br>  -   Business <br> -   Corporate|
|If you base a menu on a mid-level category, all content that is profiled with the mid-level category or its descendants or its ancestors appear in the menu.|A menu based on Interest Rates displays content that is profiled with any of the following: <br> -   Financial <br>    -   Interest Rates <br>        -   Personal <br>        -   Business <br>        -   Corporate|
|If you base a menu on a bottom-level category, all content that is profiled with the bottom-level category or its ancestors are returned by the menu.|A menu based on Business displays content that is profiled with any of the following: <br> -   Financial <br>    -   Interest Rates <br>        -   Business|

## HCLSoftware U learning materials

To learn more details on how to develop with HCL Digital Experience (DX) Web Content, go to the [Web Content Development lesson in the HCL Digital Experience for Developers (Intermediate)](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3500){target="_blank"} course. You can try it out using the [Web Content Development Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Web_Content_Development.pdf){target="_blank"} and corresponding [Web Content Development Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Web_Content_Development_Lab_Resources.zip){target="_blank"}.
