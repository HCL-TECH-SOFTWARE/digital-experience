# Standard portal pages and mobile devices

HCL Digital Experience has two types of pages, Standard Portal Pages and Static Pages. Static pages use HTML templates to organize layout containers and controls, and are used as the default page type since version 7.0. Standard Portal pages use table-based layouts.

Since standard pages are table-based, it is more difficult to implement responsive web design on standard pages. Limited support for responsive web design is implemented for standard pages on smartphone devices. When a standard page is viewed on a smartphone, all of its layout containers and portlets stack vertically. Stacking the containers and portlets ensures that the page contents fit better on the screen. The look of standard pages remains unchanged on desktop and tablet devices, which have more available real estate.

If you want to introduce more responsiveness to the standard page layouts of your portal site, use CSS selectors for pinpointing containers and controls to achieve the preferred designs. To add this support to your theme, add the `wp_legacy_layouts` module to your theme profile. For more information, see *Adding or removing a ready-to-use module to a theme*.

For example, if you want to hide the third column of a three column layout on a tablet sized device, you can target the screen size by using a media query and the third column with an appropriate CSS selector:

```
@media (max-width: 800px) {
    table.layoutRow tbody tr td:nth-child(3) {
        display: none;
    }
}
```

???+ info "Related information"
    - [W3Schools - CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.asp)
    - [Adding or removing a module from a profile](../the_module_framework/add_remove_oob_modules/index.md)

