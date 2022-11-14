# Creating portlets and page elements

When you create portlets and the page elements within them, you can now define your own style overrides as needed. Use these relative width CSS classes to make your page elements responsive to various widths.

Your portlet can be placed in a column of any width and run on a device of any screen width. The primary styles for the elements use elastic percentage widths rather than fixed widths in general to be responsive. For certain width columns, you might need to make additional overrides. For example, if something is too large to display correctly in a narrow column, you can add `display:none` to hide it entirely. You can also add `font-size:1.5em` for wide columns or `font-size:0.8em` for narrow columns. To load a smaller version of an image use `background-image:url("myImage_small.jpg")` for narrow columns.

If you care only about five levels of variation in width or less, then you need only to override for the semantic types. The following example shows three levels of variation:

```
/* Narrow width columns */
.wpthemeThin .myComponent, .wpthemeNarrow .myComponent {
    ...
}
/* Medium width columns */
.wpthemeMedium .myComponent, {
    ...
}
/* Wide width columns */
.wpthemeWide .myComponent, .wpthemeFull .myComponent {
    ...
}

If you care about more than 5 levels up to 16 levels of variation in width, then you only have to override for the grid types. An example with 8 levels of variation:

/* 1/12th, 1/6th and 1/5th width columns */
.wpthemeCol1of12 .myComponent, .wpthemeCol2of12 .myComponent, .wpthemeCol1of5 .myComponent {
    ...
}
/* 1/4th and 1/3rd width columns */
.wpthemeCol3of12 .myComponent, .wpthemeCol4of12 .myComponent {
    ...
}
/* 2/5ths and 5/12ths width columns */
.wpthemeCol2of5 .myComponent, .wpthemeCol5of12 .myComponent {
    ...
}
/* 1/2 and 7/12ths width columns */
.wpthemeCol6of12 .myComponent, .wpthemeCol7of12 .myComponent {
    ...
}
/* 3/5ths and 2/3rds width columns */
.wpthemeCol3of5 .myComponent, .wpthemeCol8of12 .myComponent {
    ...
}
/* 3/4ths and 4/5ths width columns */
.wpthemeCol9of12 .myComponent, .wpthemeCol4of5 .myComponent {
    ...
}
/* 5/6ths and 11/12ths width columns */
.wpthemeCol10of12 .myComponent, .wpthemeCol11of12 .myComponent {
    ...
}
/* 5/5ths and 12/12ths (full) width columns */
.wpthemeCol5of5 .myComponent, .wpthemeCol12of12 .myComponent {
    ...
}
```

You can override for both types if you choose, but it is only necessary if you created a layout that does not use both types on all containers.


