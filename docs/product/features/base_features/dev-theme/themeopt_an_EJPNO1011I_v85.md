# EJPNO1011I error

Allow Privileged Users to change the page layout.

## Explanation

The theme contains static content deployed in a WAR. It was detected that a value set for parameter refreshPageLayout.template.regexp does not match the theme. With the current setting users must have the Markup Editor role that is assigned to be able to change a layout.

## User action

Open the WebSphere Integrated Solutions Console. **Open Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WP ConfigService** \> **Custom Properties**. Create or adapt a regular expression for the refreshPageLayout.template.regexp parameter.

**Parent topic:**[Validation reports](../dev-theme/themopt_an_val_reports.md)

**Parent topic:**[Validation reports](../dev-theme/themopt_an_val_reports.md)

**Related information**  


[Adapt the scripts that register the custom theme and skins](../dev-theme/themeopt_move_repack_script.md)

