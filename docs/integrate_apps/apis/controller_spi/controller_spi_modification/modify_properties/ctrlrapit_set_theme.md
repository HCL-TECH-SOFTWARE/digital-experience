# Setting themes

The Controller SPI enables the setting of themes on modifiable instances that implement the `ThemeSetter` interface, for example `ContentPage` and `ContentLabel`.

1.  Obtain a modifiable instance of the resource for which you want to set a theme.

2.  Obtain a `Theme` object from the `ThemeList` model.

3.  Check whether the resource implements the `ThemeSetter` interface.

    Use the operator `instanceof`. If the resource does not implement the `ThemeSetter` interface, you cannot set the theme.

4.  Use the `setTheme()` method to set the theme.


Setting a theme for a content page \(error handling omitted\):

```
final Modifiable modifiable = cmController.getModifiableNode(page);

// obtain theme to set from com.ibm.portal.admin.ThemeList
final Theme theme = ...

// set theme
if (modifiable instanceof ThemeSetter) {
    ((ThemeSetter) modifiable).setTheme(theme);
}
```

**Parent topic:**[Modifying properties](../dev/ctrlrapit_mdfy_props.md)

