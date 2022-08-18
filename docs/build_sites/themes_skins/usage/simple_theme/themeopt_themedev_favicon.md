# Changing the favicon

The favicon is the image that appears with the page name in browser tabs and bookmark lists. You can customize the favicon to reflect your business or brand.

Learn more about using [WebDAV client](../admin-system/webdav.md) to edit theme files by reading [Editing static theme resources and connecting with WebDav](themeopt_themedev_editing_static_resources.md#).

1.  In the directory that includes the theme resources that you downloaded by using WebDAV, open the theme template, theme.html.

2.  Locate the following code string: `<link rel="dynamic-content" href="dyn-cs:id:st_head">`.

3.  Add the query parameter `faviconLocation` with the URL to your new favicon image.

4.  Use a [WebDAV client](../admin-system/webdav.md) to upload your changes.


Your custom favicon appears with the page name in browser tabs and bookmarks for all pages that use the theme that you updated.

**Parent topic:**[Understanding the Simple Theme](../dev-theme/themeopt_themedev_simpletheme.md)

