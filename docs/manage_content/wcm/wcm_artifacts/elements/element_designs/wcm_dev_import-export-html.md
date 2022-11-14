---
id: wcm_dev_import-export-html
title: Importing and exporting HTML
---




You can import HTML and export HTML to and from presentation templates and elements that store HTML.

1.  To import HTML with no references to images:

    1.  Click **Import**.

    2.  Select the HTML file that you want to upload.

    3.  Click **Save**.

2.  To import HTML with references to images:

    1.  Click **Import**.

    2.  Select the compressed file that you want to upload.

        **Note:** The compressed file must have the following file structure:

        -   A folder that is named **images** containing the referenced images.
        -   A file that is named **index.html** containing the HTML markup.
        **Note:** Images are referenced within **index.html** with an **img** tag that has an **src** attribute with a relative path to the **images** folder. For example: `<img src="images/logo.jpg" />`

        Web Content Manager does not import other image reference types. For example, Web Content Manager cannot import an image that is referenced within a **background** tag. To import an image in tags other than **img** tags, import the image into a file resource component and then reference the file resource component within the imported HTML.

    3.  Click **Save**.

3.  To export HTML click **Export**.

    1.  Browse to the directory you would like to export the HTML file to and then click **OK**.

        **Note:** No warning is given when you export HTML to an existing file. Be careful not to save over existing HTML files when you export HTML.


**Note:**

-   Web Content Manager does not verify whether the imported HTML or text is valid. For example, if you import HTML that contains a JavaScript error, then that error appears in your content when previewed.
-   The encoding of the current browser window determines the encoding of the imported or exported HTML. For example if the browser is using GB2312 for Chinese, then only GB2312 encoded HTML can be imported, and on export the exported HTML encoding is GB2312.
-   Some HTML editors save HTML with a mixture of UTF-8 and non UTF-8 encodings. You cannot successfully upload files that contain a mixture of UTF-8 and non UTF-8 encodings. Save your HTML file as UTF-8 only and try importing the HTML.

