---
id: wcm_dev_elements_image_adding
title: Adding an image element to an item
---




You add an image element to a site area or content item when you want the image to be used for a specific site area or content item.

!!!note
    You can add an element to a content item only if the manage elements feature is enabled in the authoring template that is used by the content item.

1.  Open or create a site area or content item.

2.  Click **Manage Elements**.

3.  Select **Image** as the element type.

4.  Enter a name. Do not use double-byte and non-ASCII characters.

5.  Enter a display title to use as the title of the element displayed indexes and forms.

6.  If you create a text provider plug-in for a multi-locale site, you can also select the text provider and enter a key to look up a string from the selected text provider. The text provider displays a different display title for each language it is configured for. The text that is entered in the **Display Title** field is only used if an appropriate display title is not available from the selected text provider, or if the text provider is not available.

7.  Click **Add**. The image element is added to your form.

8.  Go to the image element you created:

    1.  Click **Upload a file** to select a file to store in the image component.

        !!!note
            In CF06 or higher, click **Upload** to upload a file, or click **Select** to select a component. Selecting a component is useful if you need to apply different image properties to an existing image component, or store an image in a different library, or apply different access settings to the original image component. You can select a component only if this option is enabled for the image element in the authoring template that is used by the content item or site area.

    2.  Define the image properties:

        -   **Border**

            Define the size of the border to appear around the image. \(0 = no border\)

        -   **Width**

            Set the width of the image \(in pixels\). Optional.

        -   **Height**

            Set the height of the image \(in pixels\). Optional.

        -   **Alternate text**

            Enter the name of the image to display when you save the image, or if the browser cannot display the image.

        -   **HTML Tag Name**

            Enter the name of the HTML tag to be used in JavaScript.

    3.  If Renditions are enabled, you can also select images to display with different devices.

        If an image component is selected, the Renditions settings of the original image component are used.

9.  Save the item form.

10. To choose a different image click **Replace**.

11. To remove the image click **Remove**.


