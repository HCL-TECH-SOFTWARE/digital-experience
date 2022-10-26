# Upgraded and deprecated Content Template assets

When you install Content Template Catalog 4.4 on an existing Content Template 3 or 3.1 solution, existing assets are either upgraded or deprecated. You should test every part of your site after upgrading to make sure that there are no unexpected changes.

**Note:** The following steps are not required when upgrading from version 4.x.

Many assets are upgraded in place during installation with no impact on the current solution. Assets that have been deprecated are copied to create a new version and the old version is placed in an obsolete folder so you can be aware of its deprecated status. The deprecated assets continue to work, but you should think of a continuation plan for these deprecated assets. You can either redesign your solution to drop the deprecated assets or copy them into your customized solution if you must continue to maintain the deprecated assets.

## Upgrading assets to use a list presentation

The list presentation was introduced in Web Content Manager version 8.0.0.1. It is used to store reusable list presentation designs that can be used in list components such as menus and navigators. In Content Template version 4.4, all lists that previously used a separate header, result design, and footer have been updated to use a single list presentation. The fields that are used in a list presentation map directly to the header, result design, and footer elements in list components. To support this, the following authoring templates were updated:

-   Carousel
-   Slideshow
-   List

Later versions of these authoring templates are stored in the **Obsolete** folder in the **CTC Design Library**. You should apply the new templates to your migrated content.

The list presentations added in version 4.0 are located under **CTC Design > Components > List Presentations** in the **CTC Design Library**

## Upgrading slideshows

Layouts in version 4.4 use a header row that takes up the full width of the screen. This means that slideshows and other components that are placed in the header row takes up the full screen width. To restrict a slideshow to the same size as the content in other rows of a page:

1.  Open the page in edit mode.
2.  Open the slideshow configuration by hovering over the slideshow and clicking **Open Edit Mode**.
3.  Add the style **contentConstrain** to the CSS Style attribute.
4.  Save the configuration and close the dialog.

To constrain all slideshows on the site, you can modify the theme:

1.  Open a WebDAV connection to your theme. For example, `http://server:port/wps/mycontenthandler/dav/fs-type1/themes/Portal8.0`
2.  Go to the folder CTC/css open the file **content-base.css**.
3.  Modify the style for .promoSlideshow to add a maximum width:

    ```
    	.promoSlideshow {
    	  position:relative;
    	  overflow:hidden;
    	  max-width:1160px;
    	  margin:0 auto
    	}
    ```


## Upgrading slideshow images

Images that are used in slideshows need to be updated to take advantage of the wider format that is used by version 4.4. When selecting images, consider how the images look when viewed on different screen sizes and devices. For smaller screen sizes, the image is cropped. Version 4.4 uses a default width of 1160px and is responsive to 300px. This following diagram shows the different widths for slideshow images:

![Example slideshow image widths](../images/slideshow_widths.jpg)


