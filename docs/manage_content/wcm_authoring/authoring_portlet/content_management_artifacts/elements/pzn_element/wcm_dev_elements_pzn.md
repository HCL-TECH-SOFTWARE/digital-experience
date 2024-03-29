# Personalization element

A personalization element stores a reference to a personalization rule or content spot that is generated by Portal Personalization. To use a personalization element, you must create a personalization component.

A personalization element can:

-   Display personalization content within a presentation template or element design.
-   Display a link to personalization content within a presentation template or element design.
-   Display attributes of personalization content within a presentation template or element design.

## Creating a personalization element

You can use a personalization element only by creating a personalization component. You cannot add a personalization element to authoring templates, site areas, or content items.

!!!note
    A maximum of 100 items can be displayed in a single Personalization element.

## Access controls

When you create a personalization element, a user can select only those personalization rules and content spots that they have access to in Portal Personalization.

The personalization rule or content spot that is selected in the personalization element is rendered only if the user that views the web content has access to the personalization rule or content spot in Portal Personalization.

## Re-creating Personalization Rules and content spots

If you delete a Personalization Rule or content Spot that is referenced in a Personalization element and then create a new Personalization Rule or content spot with the same name, it is no longer displayed in the Personalization element. You need to edit the Personalization element and reselect the Personalization Rule or content spot.

## Caching Personalization components

Web content caching can sometimes be used with Personalization components but depends on the conditions set in the personalization rule, or the resources that are used to determine the rule results. Cache testing is required to determine whether the content returned by your personalization component can be cached by using web content caching.


