# Author pages and page content with Design Studio (Beta) 

This section details how you can use content items on pages created and managed with HCL Design Studio \(Beta\).

## Edit content of your site's page

To start, you need to be in the Page editor view of a new or existing site page. Then, you need to lay out and style the page content for desktop, tablet, and mobile devices.

There are three ways to open a selected page in the Page editor to edit the content:

1.  **Option 1: Via the library overflow menu in **Sites** overview**
    1.  From the Design Studio \(Beta\) **Sites** overview, select the site, then the site page you want to edit.
    2.  Click the page overflow menu, and select **Edit** to open the page in Page editor.

        ![Edit from Sites overview](../images/edit_page_from_library_overflow.png "Edit page from Sites
                                                overview")

2.  **Option 2: Via the Page Properties panel**
    1.  Access the **Properties** panel of a selected page as described in the [Get information about a site page](https://doc.cnx.cwp.pnp-hcl.com/digital-experience/9.5/design_studio/create_dx_9_5_pages_design_studio.html#create_sites_DX_Design_Studio_Beta__section_gfl_pqc_2qb) section in the *Create sites and pages with Design Studio \(Beta\)* topic.

        ![Edit page via page information panel](../images/edit_via_page_info_panel.png "Edit page via Page Properties panel")

    2.  On the **Information** panel, locate and click the **Edit** icon to open the page in Page editor.
3.  **Option 3: By switching between pages in Page editor mode**

    **Note:** You need to be in the Page editor first in order to perform this action.

    1.  On the Design Studio \(Beta\) Page editor view of your selected page, navigate your cursor to the left and click the **Pages** icon to open the **Pages** panel. The **Pages** panel lists all pages under the site you are working on.

        To edit a different page, click the desired page apart from the page you are already working on.

        ![Click Pages icon and switch to edit view of another page](../images/switch_page_view_off_different_page.png "Click Pages icon then select page to switch to another
                                                page")


## The HCL Design Studio \(Beta\) Page editor

HCL Design Studio \(Beta\) current supports two options for content authors to apply their design styles to the sites and pages:

1.  Page editor; and
2.  Site Baseline Stylesheet

The HCL Design Studio \(Beta\) Page editor offers tools for styling HTML elements in a WYSIWYG manner. The Page editor handles the creation of the necessary stylesheet components and updates that has to be made to them in reaction to style changes.

For CF196 and higher releases, the HCL Design Studio \(Beta\) Page editor exists within Practitioner Studio, with both the top toolbar \(A\) and the Practitioner Studio navigation on display.

The Page editor has the following components:

![HCL Design Studio (Beta) Page editor](../images/HCL_DS_Page_Editor_latest.png "HCL Design Studio (Beta) Page editor")

-   On the top toolbar, users are able to determine which page they are working on \(A\) and can click the **Back** \(arrow\) icon to return to **Sites** overview.
-   The top toolbar is also integrated with selected [Site toolbar and Site Manager](https://help.hcltechsw.com/digital-experience/8.5/site/site_site_toolbar.html) actions such as:
    -   \(B\) **Copy page link**, view page element layout, and page preview
    -   \(C\) open and edit page style, **Add elements** settings, and **Layers**
-   The **Layers** panel \(C\) serves as an alternative view to the canvas that displays all of the elements in a page. The content elements are organized to mirror how they are structured in the resulting rendered HTML page. Users can also select elements by clicking on individual layers. This makes it easier to select elements that are harder to click on in the Page editor.

    The layers can also be reorganized through the **Layers** panel. This can be done by clicking on the desired element within the panel and then dragging it to the desired new location. After dropping the element to the desired location, the Page editor will follow and update with the new content structure accordingly.

-   The side navigation panel \(D\) allows users to access shortcuts to the following features:
    -   Add WCM elements using the **Add elements** panel
    -   Switch from one page to another without exiting Page Editor view
-   Inline editing via the Page editor field \(E\) is available in HCL Design Studio \(Beta\) 9.5. Users with content author or editing access to a content item can edit a content item of a selected site page.

## Add a content item to a Design Studio \(Beta\) page

1.  Create a new page or open the page you wish to edit in Page editor.
2.  Locate and click the plus icon to open the **Add Elements** panel, as shown below.

    ![Add Elements panel](../images/Add_page_elements_panel.png "Add Elements panel")

3.  Select and drag a content item from the **Add Elements** panel to the Editor field.

    **Note:** For CF196 and higher releases, the following content elements are available in the HCL Design Studio \(Beta\) Page editor:

    -   **Layout**
        -   Container
        -   Section
        -   Div block
        -   Columns
    -   **WCM**
        -   Content container
    -   **Basic**
        -   Text
        -   Link block \(text or image\)
    -   **Media**
        -   Image
    **Important notes:**

    -   When using content on a page made with the HCL Design Studio, the selected content item should have a workflow assigned to it and should be in Published state. Content that is in Draft state is not searchable for selection in the Design Studio \(Beta\).
    -   We recommend that you do not move or update the workflow state of content items that are in use in site pages in Design Studio to Published state.

## Edit a content item in a Design Studio \(Beta\) page

When editing text elements or link block elements inline, they are automatically saved to the content items that are linked to them. Changes are automatically saved two \(2\) seconds after the user stops typing.

1.  Open the page you wish to edit in Page editor.
2.  On the canvas, select a content element to start inline editing and updating.
    -   For text and link block elements, double-click to start inline editing.
    -   Use the inline element menu of the element on the canvas, or the **Content elements** panel on the right side to perform element actions such as move element, copy element, or delete element.

        ![Inline editing element menu options](../images/page_inline_editing_options.png "Inline editing element menu options")

3.  If the updates are valid, edits are saved without notification.

    **Note:** If the updates are rejected, an error notification pops up to notify the user that the changes are rejected and the content item is reverted to the last valid value.


## Replace an image in a Design Studio \(Beta\) page

**Note:** When you use Design Studio \(Beta\), replacing an image sometimes does not reflect due to the images being cached for a long time. Starting with HCL DX 9.5 CF200, you can run the authoring tuning task with `-DAuthoringServer=true` to set the browser cache for WCM images to 10s to improve your authoring experience. See [Tune your environment](../install/tune_servers.md) for more information.

1.  Open the page you wish to edit in Page editor.
2.  In the Page editor, select the image element that you want to replace.
3.  Open the Settings panel as shown below.

    ![Open page settings panel](../images/Page_settings_panel.png "Page settings panel")

4.  Click on **Replace Image**.

    ![Replace image](../images/Replace_image.png "Click Replace image")

5.  On the Page Details page, scroll down to the **Elements** section and locate the image element to replace.
6.  Click **Select or drag to replace** the selected image element with an image file from your local file system.

    ![Select or drag to replace image](../images/Select%20or%20drag%20to%20replace%20image.png "Select or drag to replace image")

    Replace the current image as you would in [HCL Content Composer](../content_composer/manage_content_items.md#).

7.  Once done, click **Save** to save the image file as the new image element content, then go back the page editor by clicking on the arrow \(**←**\) on the top left.

    Alternatively, you can also click **Save and Close**.


Replacing the image element content can also be done using the HCL Experience APIs, HCL Content Composer, and WCM authoring tools.

You can replace the image element content using the HCL Digital Asset Manager \(DAM\) if DAM is the image source.

![Replace image element content using HCL DAM](../images/replace_image_using_dam.png "Replace image element content using HCL DAM") ![Replace image element content using HCL DAM](../images/replace_image_using_dam_2.png "Replace image element content using HCL DAM")

## How to present your feedback on HCL Design Studio \(Beta\)

HCL Digital Experience welcomes your feedback and suggestions on Design Studio \(Beta\), and encourages you to present your input through cases and discussions with HCL Support DX leaders.

**Parent topic:**[Common tasks \| HCL Design Studio \(Beta\)](../design_studio/design_studio_common_tasks.md)

