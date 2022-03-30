# CSS classes for tagging and rating 

The portal tag and rating widgets allow for detailed look and feel customization by providing a customizable CSS class hierarchy.

Each widget has a set of tagging and rating specific CSS classes assigned to it. This allows administrators to customize either the complete set or a subset of the tag and rating widgets, or individual tag and rating widgets. To do this, the administrator modifies the CS class or classes for the widget that needs to be customized. For details refer to the information in the following tables.

|Widget name|Tagging and rating CSS class assigned to the widget|
|-----------|---------------------------------------------------|
|`TagCloud`|`trc trcTagCloud`|
|`AddTag dialog`|`trc trcTagging  trcDialog trcDialogTagging`|
|`AddRating dialog`|`trc trcRating   trcDialog trcDialogRating`|
|`InlineTag`|`trc trcTagging  trcInline trcInlineTagging`|
|`InlineRating`|`trc trcRating   trcInline trcInlineRating`|

|Group name|CSS class that needs to be modified to customize the given group of widgets|
|----------|---------------------------------------------------------------------------|
|All tag and rating widgets|`trc`|
|All tag widgets|`trcTagging`|
|All rating widgets|`trcRating`|
|All dialog based widgets|`trcDialog`|
|All inline widgets|`trcInline`|

|Widget name|CSS class that needs to be modified to customize the given widget|
|-----------|-----------------------------------------------------------------|
|TagCloud widget|`trcTagCloud`|
|AddTag dialog widget|`trcDialogTagging`|
|AddRating dialog widget|`trcDialogRating`|
|InlineTag widget|`trcInlineTagging`|
|InlineRating widget|`trcInlineRating`|

## Hierarchy of CSS classes

The following list shows all available tagging and rating CSS classes that can be used for customizing the appearance of tag and rating widgets in the order of significance. The list shows the CSS classes in the order of their significance from low to high. More significant CSS classes shown further down in the list override definitions of the less significant CSS classes shown further up in the list.

1.  `trc`
2.  `trcTagging`
3.  `trcRating`
4.  `trcDialog`
5.  `trcDialogTagging`
6.  `trcDialogRating`
7.  `trcInline`
8.  `trcInlineTagging`
9.  `trcInlineRating`

Administrators can override each CSS class that is used by the widget by adding customized CSS classes of the following format in file widgets\_combined.css:

```
.trc <CSS classname to override> {
     // custom CSS definitions for tag and rating widgets in general
}
    
.trcTagging <CSS classname to override> {
    // custom CSS definitions for all tag widgets
}
    
.trcTagCloud <CSS classname to override> {
   // custom CSS definitions for the Tag Cloud widget only
}
```

## Customizing tagging and rating specific CSS classes

The CSS classes used to customize the visual appearance of the tag and rating widgets are located in the following file: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/theme/wp.theme.dojo/installedApps/dojo.ear/dojo.war/v1.4.1/com/ibm/widgets/css/widgets_combined.css``[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/modules/portalclient/css/trcWidgets.css`.

This file contains CSS classes specific to tagging and rating. They either start with the prefix `trc`, for example `trc Editable` or `trc Delete` or they are otherwise scoped to the tagging and rating context, for example ul.trcEdit. To customize the visual appearance of tag and rating widgets, you override these definitions in the CSS file. To do this, you add class definitions at the end of the file trcWidgets.css based on the CSS class hierarchy given by the Hierarchy of CSS classes list.

Examples: To change the link color for all tag and rating widgets to green, use the following CSS class declaration in the file `trcWidgets.css` :

```
.trc a {
    color: green;
}
```

If you do this, all tag and rating widgets show their links in a green color.

To change only the link color for the Tag Cloud to red, use the following CSS class declaration:

```
.trcTagCloud a {
    color: red;
}
```

A more specific declaration overrides a less specific declaration. Therefore you can have both declarations in the file `trcWidgets.css` at the same time. While the Tag Cloud shows its links in red, all other tag and rating widgets continue to show their links in green.

The following example shows how you can modify link appearance within all the available tag and rating widgets. It shows how to inherit from less significant CSS class definitions and how to overwrite inherited definitions to further customize a specific widget instance:

```
/* Give all links within tag and rating widgets a default background */
.trc a {
   background-color: #d0efff;
}

/* Make tagcloud links appear in a black color */
.trcTagCloud a {
  color: black;
}

/* Give all tag widgets a blue link color */
.trcTagging a {
  color: blue;
}

/* Give all rating widgets a green link color */
.trcRating a {
  color: green;
}

/* Links in all dialog widgets appear in italic,
   colors are inherited from trcRating/trcTagging */
.trcDialog a {
  font-style: italic;
}

/* Links in all inline widgets appear as underlined,
   colors are inherited from trcRating/trcTagging */
.trcInline a {
  font-style: underline;
}

/* links in Tag Widget Dialog inherit italic font-style from .trcDialog,
   but overwrite the color inherited from .trcTagging with another color */
.trcDialogTagging a {
  color: #770000;
}

/* links in Rating Widget Dialog keep the inherited link color defined by 
   .trcRating, but change the inherited font-style, by setting it to none */
.trcDialogRating a {
  font-style: none;
}

/* modify the inherited color (from .trcTagging) and reset the font-style (from
   .trcDialog) to none. */
.trcInlineTagging a {
  color: green;
  font-style: none;
}

/* no changes for the inline rating widget. It simply uses the color and font-style
   from the super classes .trcRating and .trcInline instead */
.trcInlineRating a {
}
```

**Parent topic:**[Configuration reference for tagging and rating](../admin-system/tag_rate_adm_ref.md)

