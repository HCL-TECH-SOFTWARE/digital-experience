# Scripting for static pages

You can work with static portal pages by using the Portal Scripting Interface, which enables you to use administration function through the Jacl scripting language. Get familiar with the scripting commands for working with static pages.

## Including a static page in the portal

To include a static page in the portal, use the following command:

$Content create staticpage title markup compressedfilename filename \[displayoption\] \[select\]

Example: $Content create staticpage MyStaticPageTitle html c:/tmp/StaticContentPage.zip index.html inline select

This creates a static page underneath the currently selected content node for the html markup with the page title MyStaticPageTitle. The content of the page is read from the file c:/tmp/StaticContentPage.zip, and the entry point for the page display is read from the file index.html, which needs to be contained in the compressed file. To specify the display method, you can use the optional parameter `displayoption`. It takes one of the values inline, iframe, or ajax. The default value is inline. To make the newly created static page the currently selected content node, use the optional parameter select

## Getting the static page content as a compressed file

To get a static page content in the format of a compressed file, use the following command:

$Content pageget oid markup compressedfilename

Example: $Content pageget 6\_CGAH47L00G2N802TJFV58Q3000 html c:/tmp/MyStaticContentPage.zip

This writes the content of the specified static page to the compressed file c:/tmp/MyStaticContentPage.zip.

## Setting the static page content by specifying a compressed filename

To set the static page content by specifying a compressed filename, use the following command:

$Content pageset oid markup compressedfilename filename

Example:$Content pageset 6\_CGAH47L00G2N802TJFV58Q3000 html c:/tmp/NewStaticContentPage.zip index.html

This updates the specified static page content with the content of the compressed file c:/tmp/NewStaticContentPage.zip. The entry point for the page display is read from the file index.html. This file needs to be contained in the compressed file.

## Getting attributes of a static page

To get attributes of a static page, use the following command:

```
$Content get oid attribute markup
```

Valid attributes are as follows:

-   **filename**

    Use this attribute for getting the file name of the static page layout file in the compressed file.

-   **displayoption**

    Use this attribute for the markup, for example HTML.


Example:

```
$Content get 6_CGAH47L00G2N802TJFV58Q3000 filename html
```

This returns the filename of the entry point for the page display, that is index.html for the specified markup.

## Setting attributes of a static page

To set attributes for a static page, use the following command:

```
$Content set oid attribute value markup
```

Valid attributes are as follows:

-   filename. Use this attribute for getting the file name of the static page layout file in the compressed file.
-   displayoption. Use this attribute for the markup, for example HTML.

Example 1:

```
$Content set 6_CGAH47L00G2N802TJFV58Q3000 filename anotherindex.html html
```

This sets the entry point for the page display to anotherindex.html for the specified markup.

Example 2:

```
$Content set 6_CGAH47L00G2N802TJFV58Q3000 displayoption iframe html
```

This sets the display option to iframe for the specified markup. Valid display option settings are inline, iframe, and ajax.

## Deleting a static page

The command for deleting a static page is the same as for deleting a standard portal page. You can use the command:

```
$Content delete oid
```

Example:

```
$Content delete 6_CGAH47L00G2N802TJFV58Q3000
```


???+ info "Related information:"
    - [Work with the Portal Scripting Interface](../../../../../integrate_apps/development_tools/portal_admin_tools/portal_scripting_interface/adpsitsk.md)

