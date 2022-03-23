# Customizing the look of the Person card 

You can change elements of the Click for Person Card option and the appearance of the Person card such as text color, font, background color, and so on, by modifying Cascading Style Sheet \(CSS\) definitions specified in the styles\_people.jspf file located in the theme directory.

1.  Go to [AppServer\_root](../reference/wpsdirstr.md#was_root)/installedApps/<cell\_name\>/wps.ear/wps.war/themes/html/<theme\_name\>.

2.  Open the styles\_people.jspf file.

3.  Locate your theme's Cascading Style Sheet \(CSS\) files. The location can differ between themes, but the CSS files are often in a /css or/styles folder within your theme. For more information on locating your theme's files, see Location of theme resources.

4.  Locate and open the CSS file that contains the Person Card styles. The file may differ by theme, but is often either styles\_people.jpsf, styles\_ibm.jspf, or portalLegacy.css.

    You can locate the specific file by searching file contents of the CSS folder for one of the CSS style definitions listed in the following table \(for example, `personMenu`\), or by loading the portal theme in a Web browser and using Web development tools to inspect the CSS style definitions loaded in the page.

5.  Find the following style definitions in the file and modify them as needed:

    |Modify this style definition|To do this|
    |----------------------------|----------|
    |**`.menu_drop_icon`**|Change the look and feel of the **Click for Person Card** option.|
    |**`.hyperlink`**|Change the appearance of the person name hyperlink.|
    |**`.photoCard img`**|Change the style of the image that displays in the business card section of the Person card.|
    |**`.businessCard .cardname`**|Change the style of the name that displays in the business card section.|
    |**`.businessCard li`**|Change the style of other user details that display in the business card section.|
    |**`.personMenuActions`**|Change the style of the actions such as **Show Profile****Profile** and **Send E-mail****Send Mail** that display on the Person card.|
    |**`.personMenu`**|Change the style of the container that holds the business card and action items as a single unit.|

6.  Touch the timestamp on the theme's styles.jsp so that it will be recompiled by the JSP compiler.

    You can touch the timestamp by editing the file, adding a blank line, and saving the file.

7.  Clear the browser's cache and cookies.

8.  Call the Person card and verify your changes.


**Parent topic:**[Collaborative Services API and the person tag ](../collab/i_coll_r_cs_api.md)

