# Set side navigation as theme default 

You can set the side navigation template as the theme default by changing the ready-to-use template to become the default theme.html.

1.  Connect to the file store WebDAV entry point: http://<server\>:<port\>/wps/mycontenthandler/dav/fs-type1/

2.  Navigate to the theme folder with the current default theme template, for example `dav:fs-type1/themes/Portal8.5/`.

3.  You can rename the current theme.html to something else or you can delete it.

4.  Navigate to the theme folder with the side navigation theme template, most likely the same folder as the old default theme.html file.

5.  Rename the side navigation template from theme\_sidenav.html to theme.html.


After renaming the template to theme.html, it will now be used as the default template.  Inside the theme.html file are links to the localized templates, which are named theme\_sidenav\_locale.html.  There is no need to rename these templates, but if you want to make the template naming uniform, you can change the link elements as well as the localized template file names.

**Parent topic:**[Side navigation ](../dev-theme/themeopt_cust_nav_side.md)

