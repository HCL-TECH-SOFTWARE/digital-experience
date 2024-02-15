# Renditions

Renditions are different versions of an image component or element. Renditions can be thumbnails or smaller versions of an image formatted for mobile devices.

Renditions make it easy to reformat an image for publishing different sizes on different platforms. Users can choose the size of image they want with the user interface.

The image rendition exists in addition to the original image that is stored in the image component or element as binary code. The image rendition is part of the encapsulating image, which has the same UUID, but can be addressed by a unique URL.

The user interface supports uploading three renditions in addition to the original image. The renditions are named `Desktop`, `Tablet`, and `Smartphone`. You can expose the renditions through the user interface, or through a public API.

-   **[Setting rendition properties on images](../renditions/rend_images.md)**  
Renditions automatically render a version of your image that is best suited for the device connecting to the site.
-   **[Disabling renditions](../renditions/rend_disable.md)**  
Renditions are enabled by default. If you want to disable them, you must run a ConfigEngine task.
-   **[Enabling renditions](../renditions/rend_enable.md)**  
Renditions are enabled by default. If you disable them, you must run a ConfigEngine task to enable them.


