# Applying the new theme to your Portal pages

Custom portal resources, such as themes and skins, are migrated automatically. The Portal 8.5 theme is also deployed when migration is complete. However, you must complete extra steps to apply the theme to your pages.

After migration, a new theme is available for you to apply to your Portal pages. The name of the new theme is `Portal 8.5`. In addition, four new skins are available for the Portal 8.5 theme. For information about the new skins, see *Skins* in the Developing themes and skins section of the documentation. The legacy Portal theme from Portal 7.0 was removed in Portal 8.5. If this older theme is still applied to pages, you might see the following message:

```
EJPFD0097E: No theme was found to render the page. Navigate to Administration and assign a working theme to restore full function to your site.
```

## Creating a page and applying the theme

If you prefer to create a new set of pages and apply the theme, you can use the Manage Pages portlet or the XML configuration interface. It is possible that some migrated themes allow for inline page creation, and **Portal 8.5** would be an option to select in the process.

To use the Manage Pages portlet, complete the following steps:

1.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**.
2.  In the **Manage Pages** portlet, select the location in Portal to create the new page.
3.  Click **New Page** in the portlet.
4.  Define a name for the page and select the **Portal 8.5** option from the **Theme** menu.
5.  After you complete these steps, the new page with the Portal 8.5 theme is created.

You can also create a page with the Portal 8.5 theme by using the XML configuration interface. This process is helpful for scripting the process across multiple pages. There are samples for modifying Portal resources with the XML configuration. For more information about using the XML configuration interface, see *Sample XML configuration files*.

When you create a new page and apply the Portal 8.5 theme, the new inline customization features are immediately available for use. Use the inline toolbar to create pages.


**Related information**  


[Skins](../dev-theme/themeopt_cust_scopeskin.md)

[Sample XML configuration files](../admin-system/admxmsmp.md)

