# Setting rendition properties on images 

Renditions automatically render a version of your image that is best suited for the device connecting to the site.

1.  Select an image and open the rendition section in the image form.

2.  To upload a version of the image that is sized for your purpose, select the rendition, such as **desktop**. You can choose from **desktop**, **tablet**, **smartphone**, or **none**. You can upload a main image, but it is not required if you have an image that is uploaded into the default rendition spot.

3.  You can replace a rendition to scale and crop the image for each device size.

4.  In the authoring template for image elements, you can disable renditions for an element or set preferred pixel or file sizes in the properties section.

5.  When you are finished, click **Place Rendition**.


For component and element tags that reference an image the attribute `rendition="auto"` renders the rendition based on the current device class, such as tablet. If that rendition is empty it renders the default rendition desktop per default, which is defined with `default.rendition.name` in the Web Content Manager Config Service Resource Environment Provider. If that is empty, it renders the main image.

For component and element tags that reference an image with the rendition attribute set to either **desktop**, **tablet**, or **smartphone** the specified rendition is rendered and no fallback is performed. Specifying `rendition="none"` renders the main image.

If you do not specify the rendition attribute, the main image renders.

If you do not specify the rendition attribute, `rendition="auto"` is the default.

**Parent topic:**[Renditions ](../renditions/rend_ovr.md)

