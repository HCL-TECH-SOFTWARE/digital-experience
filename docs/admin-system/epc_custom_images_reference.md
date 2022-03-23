# Creating custom icons by referencing a file component 

You can create custom images for items in the Page Components palette and Web content authoring interface by deploying the image file or multi-scale ZIP file as a file component in a library. Then, put a component reference element into your item that refers to that file component.

**Note:** In CF09, the Content palette was renamed to Page Components palette, and the custom images feature was extended to the Web content authoring interface.

-   Supported image file formats are PNG, JPG, and SVG.
-   If you are using multi-scale icons, the collection of images must be compressed into a ZIP file.

1.  Click the **Applications** menu icon in the site toolbar.

2.  Click **Content** \> **Web Content Authoring**.

3.  Navigate to the library where you want to store the image as a file component.

4.  Click **New** \> **Component** \> **File**.

5.  Enter a unique name for the new component.

    For example, my\_icon.

6.  Upload the file and click **Save and Close**.

7.  To assign a custom image to a content item or a site area, select the content item and click **Edit**.

    -   You can also do the same in a content template or site area template to make this field available to content authors.
8.  Click the **More** menu.

9.  Click **Manage Elements**.

10. In the **Element type** dropdown menu, select **Component Reference**.

11. In the **Name** field, specify the name of the new element as preview-image.

12. Click **Add**.

13. Click **OK** to exit the Element Manager window.

14. Click **Select Component** for the my\_icon component reference.

    The Select a component window displays.

15. Navigate to the library where you saved the my\_icon component reference.

16. Select the **my\_icon** file component.

    -   Any content items, including items created prior to CF09, that include an element named preview-image will use the images stored in the selected component as the icon of the content item in the Web content authoring interface.
17. Click **OK**.

18. Click **Save and Close**.

19. Clear your browser cache and refresh the page for the changes to take effect.


**Parent topic:**[Creating custom icons for the Page Components palette and Web content authoring interface \| HCL Web Content Manager](../admin-system/epc_custom_images.md)

