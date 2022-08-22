# Events Upcoming Featured Slideshow

Displays a set of featured upcoming events in a slideshow. By default, any items that are created by using the Event content template are displayed in this portlet.


# Usage

The slideshow is designed to display a list of featured upcoming events.

# Adding the portlet to a page

1.  Go to the page where you want to add a Events Upcoming Featured portlet.

2.  Click **Edit Mode**.

3.  Click **Create** \> **Content** \> **Slideshows**.

4.  Drag the **Events Upcoming Featured Slideshow** to the page and save the page.


# Creating content to display in the portlet

1.  Create a content item by using the Event content template.

2.  For the item to appear in the Events Upcoming Featured portlet you must:

    1.  Select either **/CTC Process/Selection Categories/Feature Category/Feature** or **CTC Process/Selection Categories/Feature Category/Special Feature** under the **Featured Option** section.

    2.  Select an image in either the **Feature Image** or **Library Feature Image** sections.

3.  Publish the item.


# Content author customization options

## Portlet configuration options

By clicking **Open Edit Form** from the portlet menu the content author can:

-   Edit the list title
-   Edit the slideshow height
-   Select the type of transition, such as fade
-   Define how long the slideshow displays each image
-   Defines whether the slideshow should start automatically or manually
-   Select when to slideshow should pause, such as on hover
-   Select which control to use as paging controls
-   Select the context for the content

# Site designer customization options

With the portal in edit mode, sight designers can make the same customization changes as content authors and more. Additionally, site designers can copy and change the building blocks of each portlet.

## List component

East list portlet uses a component to define what content items are displayed in the portlet. The Events Upcoming Featured slideshow uses the following component:

-   CTC Design/List Components/Upcoming Featured Events by Start Date

If you need to customize this component, you must create a copy and save it into your own design library. By clicking **Open Edit Form** from the portlet menu, you then select the new component in the List component parameter of the portlet configuration document.

You can also select a different list component to use from the CTC Design library. These components are located under: CTC Design/List Components/

## List presentation

East list portlet uses a list presentation to define the design of the body, header, and footer of the items that are returned by the selected list component. The Events Upcoming Featured slideshow uses the following list presentation

-   CTC Design/List Presentation Components/Landing Feature Slideshow List Design for Scheduled Events

If you need to customize this component, you must create a copy and save it into your own design library. By clicking **Open Edit Form** from the portlet menu, you then select the new component in the List component parameter of the portlet configuration document.

You can also select a different list presentation to use from the CTC Design library. These components are located under: CTC Design/List Presentation Components/

## CSS Style

The default stylesheet that is used by this portlet is **contentSlideshow**. To customize this CSS file, first make a copy of the CSS file, edit the copy, and then enter the name of the new CSS file in the CSS Style parameter in the portlet configuration document.

CSS files are stored in this WebDAV folder: dav://server:port/wps/mycontenthandler/dav/fs-type1/themes/Portal8.5/CTC/css.

