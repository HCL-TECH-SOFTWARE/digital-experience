# Updating the default theme and skin

You can add the Portal 8.5 theme and 8.5 skin to all new pages by default.

After migration, a new theme is available for you to apply to your Portal pages. The name of the new theme is `Portal 8.5`. In addition, four new skins are available for the Portal 8.5 theme. For information about the new skins, see *Skins* in the Developing themes and skins section of the documentation. The legacy Portal theme from Portal 7.0 was removed in Portal 8.5. If this older theme is still applied to pages, you might see the following message:

```
EJPFD0097E: No theme was found to render the page. Navigate to Administration and assign a working theme to restore full function to your site.
```

!!!note
    To use the Portal 7.0.0.2 theme with Portal 8.0 or later, you must copy the dojo16.json file from `PortalServer_root/theme/wp.theme.dojo/installedApps/dojo.ear/dojo.war/v1.6` to the contributions folder of the 7.0.0.2 theme.

1.  Click the **Administration menu** icon. Then, click **Portal User Interface > Themes and Skins**.

2.  Select the **Portal 8.5** theme from the **Themes** list in the portlet.

3.  Click **Set as default portal theme**.

4.  Select the **Portal 8.5 Hidden** skin from the **Skins** list in the portlet.

5.  Click **Set as default portal skin**.



???+ info "Related information" 
    -   [Skins](../../../../../../build_sites/themes_skins/customizing_theme/skins/index.md)

