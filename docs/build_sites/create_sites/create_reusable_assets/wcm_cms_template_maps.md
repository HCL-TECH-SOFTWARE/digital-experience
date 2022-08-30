# Template mappings

Template mappings are used to determine which presentation templates are used to display each site area or content item.

## Template mapping strategies

The presentation template that is used by an item is determined by the relationship between the item's authoring template and a presentation template that is defined in the authoring template, or a template mapping that is defined in a site area in the path of the current item. Template mappings assigned in site areas override template mappings set in authoring templates.

This can result in the following relationships:

-   A content item can be displayed by using two different presentation templates if linked to different site areas.
-   Two items that use different authoring templates can be displayed by using the same presentation template if both authoring templates are mapped to the same presentation template.

-   **Defined in authoring templates**

    If you select a default presentation template in an authoring template, it is used as the default presentation template for all items based on that authoring template. This ensures that all items based on that authoring template is rendered with the same presentation template, but it does not ensure design consistency between other items that are located in the same site area. If a different template mapping is specified in any site area in the item path, then the template mapping that is defined in the lowest part of the item path is used instead.

-   **Defined in site areas**

    If you define a template mapping in a site area, this strategy ensures that all items based on the selected authoring template use the same presentation template in that site area. If a different template mapping is specified in any child site areas of the parent site area, then the template mapping that is defined in site area in the lowest part of the item path is used.


## Template mapping examples

In these examples the following template mappings are used:

-   Authoring Template 1 uses Presentation Template 1 as its default presentation template
-   Authoring Template 2 uses Presentation Template 2 as its default presentation template
-   Authoring Template 3 also uses Presentation Template 2 as its default presentation template
-   Authoring Template 4 has no default presentation template
-   Site Area 1 has no template mapping
-   Site Area 2 contains a mapping between Authoring Template 1 and Presentation Template 2
-   Site Area 1 and Site Area 2 are located under Site Area A.
-   Site Area A contains a mapping between Authoring Template 4 and Presentation Template 3

The presentation template that is used by each item is determined by the authoring template the item used, and the location of the item in the site framework.

|Content and location|Result|
|--------------------|------|
|Content 1 using Authoring Template 1 located in Site Area 1|As Site Area 1 contains no template mappings, Content 1 is displayed by using Presentation Template 1 that is the default presentation template of Authoring Template 1.|
|Content 1 using Authoring Template 1 located in Site Area 2|As Site Area 2 contains a mapping between Authoring Template 1 and Presentation Template 2, Content 1 is instead displayed by using Presentation Template 2.|
|Content 2 using Authoring Template 2 located in Site Area 1|As Site Area 1 contains no template mappings, Content 2 is displayed by using Presentation Template 2 that is the default presentation template of Authoring Template 2.|
|Content 3 using Authoring Template 3 located in Site Area 1|As Site Area 1 contains no template mappings, Content 3 is also displayed by using Presentation Template 2 that is the default presentation template of Authoring Template 3.|
|Content 4 using Authoring Template 4 located in Site Area 1|As Site Area 1 contains no template mappings, Content 4 is displayed by using Presentation Template 3 that is mapped to Authoring Template 4 in Site Area A.|

## Element references

When referencing elements in a presentation, it is important to note the following:

-   The elements a presentation template uses must be defined in the authoring template the content is based on.
-   If the element being referenced does not exist in the current item, nothing is displayed in that section of the presentation template.

Although the template author can identify a number of elements that can be displayed on the item form, whether the elements are displayed depends on the presentation template that is used with the authoring template to render the content form. A presentation template might not include every element that is defined in an authoring template, but in order for an element or element type to be available to a presentation template, the element must be included in the authoring template that is used to create the content.


