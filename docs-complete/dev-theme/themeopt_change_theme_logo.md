# Changing the theme logo 

You can change the theme logo to customize your portal site and rebrand it to reflect your business.

The default logo that appears in the banner is a blank placeholder image. The following block of code displays the blank placeholder image:

```
<span class="wpthemeBranding">
     <img alt="IBM Logo" src="/wps/themeModules/themes/html/dynamicSpots/icons/blank.gif">
     <span class="wpthemeAltText">IBM Logo</span>
</span>
```

This logo is provided to the theme with a CSS style class so it can be modified or overridden by packaged styles on the customization shelf. It also updates as new styles are selected. You do not have to modify the theme template.

You can change the theme logo in .wpthemeLogo in fs-type1:themes\\Your\_custom\_theme \\css\\default\\default\_view.css and fs-type1:themes\\Your\_custom\_theme \\css\\default\\default\_view.css.uncompressed.css:

1.  Remove the **display** attribute from the style class.

2.  Define a new path to your image for the **background-image** attribute.

3.  Modify the height and width.

4.  You can also change your header text to display your logo next to the navigation.
5.  Apply the **white** style on the customization shelf.

6.  In fs-type1:themes\\Your\_custom\_theme\\nls\\theme\_locale.html, enter the following block of code, where HCL Digital Experience is the name of your portal site:

    ```
    <div class="wpthemeLogo wpthemeLeft">
         <span class="wpthemeAltText">HCL Digital Experience</span>
    </div>
    ```

    **Note:** There is no HTML image element to display the logo. It is provided to the theme through a CSS style class just like the first area of branding. You do not have to modify the theme template.


You can also create your own custom style to use with your custom theme defined infs-type1:themes\\Your\_custom\_theme\\system\\styles.json. If you do that, you can override these styles in the custom style css file, such as fs-type1:themes\\Your\_custom\_theme \\css\\Your\_custom\_style \\Your\_custom\_style .css.

-   **[Changing the logo action ](../dev-theme/themeopt_change_logo_action.md)**  
 You can change the default action of a logo to take users to different pages in your portal.

**Parent topic:**[Customizing the theme ](../dev-theme/themeopt_cust.md)

**Related information**  


[Vanity URLs](../wcm/vanity_urls.md)

