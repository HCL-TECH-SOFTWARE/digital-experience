# Changing the favicon

The favicon is the image that appears with the page name in browser tabs and bookmark lists. You can customize the favicon to reflect your business or brand.

Learn more about using [WebDAV client](../../../manage_content/wcm/wcm_content_delivery/webdav/index.md) to edit theme files by reading [Editing static theme resources and connecting with WebDav](../customizing_theme/themeopt_themedev_editing_static_resources.md#).

1.  In the directory that includes the theme resources that you downloaded by using WebDAV, open the theme template, theme.html.

2.  Locate the following code string: `<link rel="dynamic-content" href="dyn-cs:id:st_head">`.

3.  Add the query parameter `faviconLocation` with the URL to your new favicon image.

4.  Use a [WebDAV client](../../../manage_content/wcm/wcm_content_delivery/webdav/index.md) to upload your changes.


Your custom favicon appears with the page name in browser tabs and bookmarks for all pages that use the theme that you updated.


