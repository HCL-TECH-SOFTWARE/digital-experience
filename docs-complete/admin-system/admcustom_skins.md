# Themes and skins 

A theme determines the global appearance of a page. The purpose of this is to ensure visual consistency. Themes affect the navigational structure, the banner, the colors and fonts, the available portlet skins, and other visual elements of a page. A skin determines the frame that is displayed around a portlet.

Use the Themes and Skins portlet to do the following:

-   Set the portal default theme
-   Set the portal default skin
-   Associate skins with a theme
-   Set the default skin for a theme
-   Add new themes and skins to the portal
-   Delete themes and skins from the portal.

Click the **Administration menu** icon. Then, click **Portal User Interface** \> **Themes and Skins**. Refer to the respective portlet helps for more instructions.

**Notes:**

1.  If you remove a theme, the references to that theme and the links between that theme and the related skins are also deleted. If you want to remove the skins that are related to the removed theme as well, apply special care to remove only skins that are related to no other theme than the deleted one. The skins are associated to the portlets. Therefore, if you have a skin that is related to several themes, and you delete one of those themes, then the skin still shows under the other themes.
2.  Deleting a theme or skin does not remove the `/theme` or `/skin` directory from the server.
3.  Some of the theme and skin titles might not appear correctly if your language preference uses DBCS characters. Correct the display of these titles, change the character set used by your language preference for HTML markup to `UTF-8`.

**Parent topic:**[Customizing pages ](../admin-system/admcustom.md)

**Related information**  


[Changing the character set for a language ](../admin-system/adchgchar.md)

