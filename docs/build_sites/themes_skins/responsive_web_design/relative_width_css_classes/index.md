# Relative width CSS classes for theme layouts

To assist with making the elements of a page responsive to various widths, relative width CSS classes have been added to the theme layouts. These classes are marker classes only. There are no styles that are defined for these classes by default. They are there on the containers, rows and columns, of the layouts so that you can define your own styles that are associated with the classes as needed to make your page elements responsive to various widths.

There are two types of relative width classes, and one of each is used on each layout container.

-   **Semantic type, one of:**

    wpthemeThin

    wpthemeNarrow

    wpthemeMedium

    wpthemeWide

    wpthemeFull


These types allow for up to five variations in width and are described by using common width words, such as narrow and wide.

-   **Grid type, one of:**

    wpthemeCol1of12

    wpthemeCol2of12

    wpthemeCol1of5

    wpthemeCol3of12

    wpthemeCol4of12

    wpthemeCol2of5

    wpthemeCol5of12

    wpthemeCol6of12

    wpthemeCol7of12

    wpthemeCol3of5

    wpthemeCol8of12

    wpthemeCol9of12

    wpthemeCol4of5

    wpthemeCol10of12

    wpthemeCol11of12

    wpthemeCol5of5

    wpthemeCol12of12


These types allow for up to 16 variations in width and are described by using a numbering system of nofn width units. At first glance it looks like a simple numbering system where a layout with five columns would use `wpthemeCol1of5`, `wpthemeCol2of5`, `wpthemeCol3of5`, `wpthemeCol4of5`, and `wpthemeCol5of5` to number the columns. However, the best way to look at this system is not as the number of the column, but rather as the number of width units that the column takes up on the page. So, `wpthemeCol2of5` means that the column takes up two of five width units of the page, or 2/5ths of the width of the page, and `wpthemeCol8of12` means that the column takes up 8 of 12 width units of the page, or 3/4ths of the width of the page. So, a layout with five columns of equal width would use `wpthemeCol1of5` on all of the columns.

The two class types map to each other in the following way:

|Width of the page|Semantic Type|Grid Type|
|-----------------|-------------|---------|
|1/12th|`wpthemeThin`|`wpthemeCol1of12`|
|2/12ths \(1/6th\)|`wpthemeThin`|`wpthemeCol2of12`|
|1/5th|`wpthemeThin`|`wpthemeCol1of5`|
|3/12ths \(1/4th\)|`wpthemeNarrow`|`wpthemeCol3of12`|
|4/12ths \(1/3rd\)|`wpthemeNarrow`|`wpthemeCol4of12`|
|2/5ths|`wpthemeNarrow`|`wpthemeCol2of5`|
|5/12ths|`wpthemeMedium`|`wpthemeCol5of12`|
|6/12ths \(1/2\)|`wpthemeMedium`|`wpthemeCol6of12`|
|7/12ths|`wpthemeMedium`|`wpthemeCol7of12`|
|3/5ths|`wpthemeMedium`|`wpthemeCol3of5`|
|8/12ths \(2/3rds\)|`wpthemeMedium`|`wpthemeCol8of12`|
|9/12ths \(3/4ths\)|`wpthemeWide`|`wpthemeCol9of12`|
|4/5ths|`wpthemeWide`|`wpthemeCol4of5`|
|10/12ths \(5/6ths\)|`wpthemeWide`|`wpthemeCol10of12`|
|11/12ths|`wpthemeWide`|`wpthemeCol11of12`|
|5/5ths \(1\)|`wpthemeFull`|`wpthemeCol5of5`|
|12/12ths \(1\)|`wpthemeFull`|`wpthemeCol12of12`|

The Semantic types maps to the following page width amount:

|Semantic type|Amount of the page width|
|-------------|------------------------|
|`wpthemeThin`|1/12th to 1/5th|
|`wpthemeNarrow`|1/4th to 2/5ths|
|`wpthemeMedium`|5/12ths to 2/3rds|
|`wpthemeWide`|3/4ths to 11/12ths|
|`wpthemeFull`|all|


-   **[Creating your own layout](rwd_relwidth_layouts.md)**  
When you create your own layout.html files, it is important to apply one semantic type and one grid type relative width class to each container. Such as wpthemeMedium and wpthemeCol6of12. Applying both ensures that those creating portlets and other page elements do not have to define styles for both types. Along with neither type and both types, they also have the choice to define styles for just one of the types, depending on their needs of granularity.
-   **[Creating portlets and page elements](rwd_relwidth_elements.md)**  
When you create portlets and the page elements within them, you can now define your own style overrides as needed. Use these relative width CSS classes to make your page elements responsive to various widths.


???+ info "Related information"
    - [Working with layout templates](../../customizing_theme/layouts/themeopt_cust_layouttemp.md)

