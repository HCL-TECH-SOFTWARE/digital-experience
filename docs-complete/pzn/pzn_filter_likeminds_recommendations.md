# Filtering LikeMinds recommendations

When LikeMinds makes recommendations, it can make the recommendations based on all items in your resource collection, or it can limit the predictions to only items that have certain characteristics.

Tell LikeMinds about an item by including key/value pairs describing its characteristics as you log actions and ratings that occur against it. The format for the key/value pair is

```
Key = LMFilter.<item_characteristic>
value = <value>

```

For example, to tell LikeMinds that an item's color is blue, and its category is sports, you would add the 2 key/value pairs:

```
LMFilter.color,blue
LMFilter.category,sports
```

Specify which characteristics that you want LikeMinds to use in making predictions by setting request attributes in the RequestContext object immediately before the content spot that contains the LikeMinds rule. To specify characteristics for filtering, do the following:

-   Add a request attribute that tells LikeMinds which characteristic or characteristics you want to filter on. The name of that attribute should be LMFilter and the value should be a string or an array of strings, where the string or each string in the array is a characteristic that you would like to filter on.

For example, to return predictions only from among items whose category is "clearance" and season is "spring" or "summer", you would add the following code before the content spot:

```
com.ibm.websphere.personalization.RequestContext.context =
com.ibm.servlet.personalization.context.PersonalizationContext.getRequestContext(httpRequest);

context.setRequestAttribute("LMFilter", new String[] { "LMFilter.category", "LMFilter.season" });

context.setRequestAttribute("LMFilter.category", "clearance");

context.setRequestAttribute("LMFilter.season", new String[] { "spring", "summer" });
```

To return predictions only from items whose color is blue, you would add the following code before the content spot:

```
com.ibm.websphere.personalization.RequestContext.context =
com.ibm.servlet.personalization.context.PersonalizationContext.getRequestContext(httpRequest);

context.setRequestAttribute("LMFilter", "LMFilter.color");

context.setRequestAttribute("LMFilter.color", "blue");
```

**Parent topic:**[LikeMinds Recommendations ](../pzn/pzn_intro_likeminds.md)

**Parent topic:**[LikeMinds Recommendations ](../pzn/pzn_intro_likeminds.md)

