# How to determine which theme JSP is rendering a particular section segment of the theme

## Applies to

> HCL Digital Experience v9.5 and Later

## Instructions

1. Login to the Portal Admin Console as a Portal admin.

2. Open the Applications menu (house icon), and go to Themes > Theme Analyzer >  Utilities > Control Center.

3. Click to turn on Dynamic Content Spot (Inline) Debug.

After that, when a Portal page is rendered, the individual segments of the theme are highlighted with different colors.

The path\name of the JSP file that renders that segment of the theme is identified in the upper left corner of the colored block.

It's possible to toggle this setting on and off from a different browser as it can be a bit difficult to navigate through the Portal when this option is on.

This setting does not persist through a Portal restart.
