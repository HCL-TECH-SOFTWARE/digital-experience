# News Latest List No Heading 

Displays a list of the most recent news items, based on content items that are created by using the News content template.

**Parent topic:**[Lists ](../ctc/ctc-portlet-types-lists.md)

# Usage

This portlet can be used anywhere on your site to display a list of the most recent news items. It is similar to the News Latest portlet, but no heading is displayed.

# Adding the portlet to a page

1.  Go to the page where you want to add a News Latest without heading portlet.

2.  Click **Edit Mode**.

3.  Click **Create** \> **Content** \> **Lists**.

4.  Drag the **News Latest List No Heading** to the page and save the page.


# Creating content to display in the portlet

1.  To access the authoring portlet, go to **Applications \> Content**.

2.  Create a content item by using the **News** content template.

3.  Publish the item.


# Site designer customization options

By clicking **Open Edit Form** from the portlet menu, the sight designers can copy and change the building blocks of the portlet.

## List component

East list portlet uses a component to define what content items are displayed in the portlet. The News Latest without header portlet uses the following component:

-   CTC Design/List Components/Landing Latest Items by Publish Date

If you need to customize this component, you must create a copy and save it into your own design library. By clicking **Open Edit Form** from the portlet menu, you then select the new component in the List component parameter of the portlet configuration document.

You can also select a different list component to use from the CTC Design library. These components are located under: CTC Design/List Components/

## List presentation

East list portlet uses a list presentation to define the design of the body, header, and footer of the items that are returned by the selected list component. The News Latest without header portlet uses the following list presentation

-   CTC Design/List Presentation Components/Combination List Design with Publish Date and No Heading

If you need to customize this component, you must create a copy and save it into your own design library. By clicking **Open Edit Form** from the portlet menu, you then select the new component in the List component parameter of the portlet configuration document.

You can also select a different list presentation to use from the CTC Design library. These components are located under: CTC Design/List Presentation Components/

## CSS Style

The default stylesheet that is used by this portlet is **contentComboList**. To customize this CSS file, first make a copy of the CSS file, edit the copy, and then enter the name of the new CSS file in the CSS Style parameter in the portlet configuration document.

CSS files are stored in this WebDAV folder: dav://server:port/wps/mycontenthandler/dav/fs-type1/themes/Portal8.5/CTC/css.

## List Templates

The authoring templates that are selected in the List Templates section of the portlet configuration document determine what items are returned by the Landing Latest Items by Publish Date component. The default template that is used by this portlet configuration is CTC Design/News. If you create a customized copy of this template, you must specify so that your news content items are displayed.

