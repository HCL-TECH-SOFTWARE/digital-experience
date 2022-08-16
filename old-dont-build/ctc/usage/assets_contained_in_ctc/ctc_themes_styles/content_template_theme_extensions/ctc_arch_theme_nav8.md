# Navigation changes in the Portal 8.5 theme

Content Template Catalog 4.4 running on HCL Digital Experience 8.5 uses a fixed two-level navigation system.

A nested HTML list generates the navigation. The style is determined by the theme stylesheet. A JSP generates the HTML that renders the navigation at the first level. A JSP tag handles the recursive rendering at deeper levels.

The navigation looks like this for an area that has a single level of children:

![This picture shows a row of parent links.](../images/ThemeNav8_1.jpg)

When a user rolls over a parent link, children links are displayed for users to click.

The navigation looks like this for an area with multiple levels of children:

![This picture shows a row of parent links and multiple levels of children that are shown in a table format.](../images/ThemeNav8_2.jpg)

When a user rolls over a parent link, children links are displayed for users to click.

**Parent topic:**[Content Template theme extensions](../ctc/ctc_arch_theme.md)

