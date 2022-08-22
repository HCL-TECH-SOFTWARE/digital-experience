# Creating custom icons for the Page Components palette and Web content authoring interface \| HCL Web Content Manager

You can assign a custom image to an item type in the Page Components palette and Web content authoring interface. You can either use a single image or a collection of images that are bundled into a ZIP file, called multi-scale icons. Supported image file formats are PNG, JPG, and SVG. If you are using multi-scale icons, the collection of images must be compressed into a ZIP file. No other format is supported. You can add custom images by either adding a file element directly into the content, or by creating a reference to a file component.

**Note:** In CF09, the Content palette was renamed to Page Components palette, and the custom images feature was extended to the Web content authoring interface.

## Multi-scale icons

If you are using multi-scale icons, each individual image is a single entry in the ZIP file. Images with the same base name represent one logical icon. The variations of an image are size, device class, and locale. These variations are organized in the following structure:

```
<Width>x<Height>/<FileName>_<DeviceClass>_<Locale>_<TextDirection>.<Suffix>
```

Where `<Width>` and `<Height>` group the icons by size. These values are a mandatory top-level directory. `<DeviceClass>`, `<Locale>`, and `<TextDirection>` are optional identifiers. The variations are not a part of the base name. The base name of the image is formed by `<FileName>.<Suffix>`, for instance, Applications.png. The following example is a sample directory structure inside a compressed file. The sample directory structure defines one icon, Applications.png, in different variations:

```
32x32/
     Applications_ar.png
     Applications_he.png
     Applications_ltr.png
     Applications.png
64x64
     Applications_de_de.png
     Applications_de.png
     Applications_rtl.png
     Applications.png
     Applications_tablet_de.png
     Applications_tablet.png
```

Applications.png has two size variations, `32x32` and `64x64`. The smaller variation \(`32x32`\) defines an icon for `ar` and `he` variations in addition to a generic fallback icon. The smaller variation also defines an icon for languages that are read left to right by including a `<TextDirection>` variation that specifies `ltr`. The large one \(`64x64`\) includes a variation for `de_de` that specifies the German language in the locale of Germany in addition to a fallback icon for `de`. The `<TextDirection>` variation that specifies `rtl` defines an icon for languages that are read right to left. `<DeviceClass>` variations are also included for tablet devices.

**Note:** The size sub-directory must be the top-level directory in the compressed file.

When the icon is rendered, the best match is found in the following way:

1.  The size is specified based on the requested icon size, by using the Euclidean distance. If no size is requested, the largest available size is used.
2.  For all variations of a specified size, the best matching device class is used.
3.  For all variations of a specified size and device class, the best matching locale is used.

Image sizes of `18x18`,`32x32`, `64x64`, or `128x128` are best suited for custom images. If other sizes are used, the custom image is resized to fit the default sizes and your image might not display as expected. Creating images for use with each of these sizes will also prevent distorted images from being displayed.

-   **[Specifying custom icons for content items in a content template](../admin-system/epc_custom_images_content_template.md)**  
You can specify custom icons for content items that are displayed in the web content authoring interface by deploying the image file or multi-scale ZIP file directly into a content template.
-   **[Creating custom icons by adding a file element](../admin-system/epc_custom_images_element.md)**  
You can create custom images for items in the Page Components palette and Web content authoring interface by deploying the image file or multi-scale ZIP file directly into the item in the Page Components palette or Web content authoring interface as an element.
-   **[Creating custom icons by referencing a file component](../admin-system/epc_custom_images_reference.md)**  
You can create custom images for items in the Page Components palette and Web content authoring interface by deploying the image file or multi-scale ZIP file as a file component in a library. Then, put a component reference element into your item that refers to that file component.
-   **[Creating custom icons by adding an image element](../admin-system/epc_custom_images_element_img.md)**  
You can create custom images for items in the Page Components palette and Web content authoring interface by deploying the image file directly into the item in the Page Components palette or Web content authoring interface as an element.


