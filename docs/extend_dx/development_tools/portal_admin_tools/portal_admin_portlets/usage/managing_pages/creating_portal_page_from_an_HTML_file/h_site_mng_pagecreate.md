---
id: h_site_mng_pagecreate
title: Creating a static page
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Create a new portal page from static HTML content.

To create a new portal page, first create an HTML file and save the file to your local computer. The static HTML file might contain references to portlets. You can also include other resources as part of the page, such as Cascading Style Sheets or graphic images.

**Note:** If you want to use portal frameworks such as Live Text with your static page, you need to include your static page as part of a dynamic portal page.

To create a page that is based on the HTML, proceed as follows:

1.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**.

2.  Click **Content Root**.

3.  Click **Home**, or go to another section of the portal were you want to create a new page.

4.  Click **New Page**.

5.  Enter the page title.

6.  Click the plus sign next to **Type of Page** to expand that section.

7.  Click the drop-down menu and select **Static Content**.

8.  Click **Set page layout properties**.

9.  Select the type of markup that is used in the file that is the source for the new page:

    -   **HTML**: standard HTML markup and layout.
10. In the **Static Page Layout File** field, enter the file name of the unlocalized markup file that defines the layout of the static content page.

    For example, this can be `index.html`.

11. Next, to the **compressed or HTML File Location** field, click the **Browse** button, or type a file path.

    -   **File path:** enter the full path to the file that is used to create the new page. This can be an archive or compressed file that is bundled with the localized markup files and related files, such as image files \(GIF, JPG\) or CSS files, or it can be a single localized markup file.
    -   **Browse:** use the file selection window to go to the archive or compressed file, or HTML file, that contains the content that is used to create the page. In addition to the HTML file that is specified as the Static Page Layout File, the archive or compressed file can contain other supporting files that are referenced by the HTML, such as graphics \(GIF, JPG\) or a style sheet to format the HTML content \(CSS\).
    **Note:** Compressed files that you use as static page layout files have a size limitation of 1 megabyte \(1 MB\).

12. For the portlet window display option, you can choose Included Markup, AJAX, or IFrame. For Included Markup and IFrame, the portal handles portlet window rendering, and no extra scripts are required. However, for AJAX, as a portlet developer you need to write JavaScript code to use the `portlet-window-url` to display the portlet window.

13. If all the HTML markup needed to create the page is available in the HTML file, and any supporting files are in the archive or compressed file, then you can accept the default value of **Included Markup** for the setting **Portlet window display option**.

    If the HTML source references AJAX scripts, or includes iFrame code, then click the drop-down menu and select **AJAX** or **iFrame**.

14. Click **OK** to create the new page.


## Creating a page for a specific language locale

A page can be rendered from an HTML source that has content in a language other than English. Upload the language locales files as part of an archive or compressed file and refer to a default locale file. For example, if the file path is index.html, update the archive or compressed file or HTML file location for multiplefiles.zip so that the structure of multiplefiles.zip is:

-   index.html
-   index\_de.html
-   index\_fr.html

To set the correct language locale for the portal page, change the file name to reflect the locale. For example, the letters **de** represent German, so the name of the HTML source file for a German page is index\_de.html. When you view the rendered page, your browser must be set to the correct locale.

