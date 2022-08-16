# Special Features Carousel

Displays a set of items in a carousel. By default, any items that are profiled with the special feature category are displayed in the carousel.

**Parent topic:**[Carousels](../ctc/ctc-portlet-types-carousels.md)

# Usage

The carousel is designed to display a list of featured items. It would normally be used in banner or body of a page design.

# Adding the portlet to a page

1.  Go to the page where you want to add a Special Features Carousel portlet.

2.  Click **Edit Mode**.

3.  Click **Create** \> **Content** \> **Carousels**.

4.  Drag the **Special Features Carousel** to the page and save the page.


Content items that are profiled with the Special Features category is displayed in the carousel.

# Content author customization options

## Inline options

Using the direct edit menus, you can edit the list title.

## Portlet configuration options

By clicking **Open Edit Form** from the portlet menu the content author can:

-   Edit the carousel height
-   Define how long the carousel displays each image
-   Define the number of items to display in the carousel
-   Select the context for the content

# Site designer customization options

With the portal in edit mode, sight designers can make the same customization changes as content authors and more. Additionally, site designers can copy and change the building blocks of each portlet.

## List component

East list portlet uses a component to define what content items are displayed in the portlet. The Special Features Carousel uses the following component:

-   CTC Design/List Components/Latest Special Features by Publish Date

If you need to customize this component, you must create a copy and save it into your own design library. By clicking **Open Edit Form** from the portlet menu, you then select the new component in the List component parameter of the portlet configuration document.

You can also select a different list component to use from the CTC Design library. These components are located under: CTC Design/List Components/

## List presentation

East list portlet uses a list presentation to define the design of the body, header, and footer of the items that are returned by the selected list component. The Special Features Carousel uses the following list presentation

-   CTC Design/List Presentation Components/Carousel List Design with Summary \(15 Results per page\)

If you need to customize this component, you must create a copy and save it into your own design library. By clicking **Open Edit Form** from the portlet menu, you then select the new component in the List component parameter of the portlet configuration document.

You can also select a different list presentation to use from the CTC Design library. These components are located under: CTC Design/List Presentation Components/

## CSS Style

The default stylesheet that is used by this portlet is **contentCarousel**. To customize this CSS file, first make a copy of the CSS file, edit the copy, and then enter the name of the new CSS file in the CSS Style parameter in the portlet configuration document.

CSS files are stored in this WebDAV folder: dav://server:port/wps/mycontenthandler/dav/fs-type1/themes/Portal8.5/CTC/css.

