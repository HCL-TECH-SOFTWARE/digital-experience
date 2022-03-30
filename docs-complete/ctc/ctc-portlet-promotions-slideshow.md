# Promotions Slideshow 

Displays a set of slides and text in the form of a slideshow. It is designed to work with content created by using the Promotion content template.

The Content Template includes a slideshow, called Promotions Slideshow, that is ready for use from the site toolbar. The Promotions Slideshow portlet is also included in the **CTC Demo**.

![Screen capture of the Promotions Slideshow portlet from the CTC demo](../images/promotions-slideshow.jpg)

## Usage

Use this slideshow to promote different aspects of your site, your products, your lines of business, and more.

## Adding the portlet to a page

1.  Go to the page where you want to add a Promotions Slideshow.
2.  Click **Edit Mode**.
3.  Click **Create** \> **Content** \> **Slideshows**.
4.  Drag the **Promotions Slideshow** to the page and save the page.

## Content author customization options

**Inline options**

Using the direct edit menus you can:

-   Edit the image that displays in the current slide by hovering over the image.
-   Edit the summary of the current slide by hovering over the caption.

**Current item options**

Using the item action menu the content author can create a new item, delete the item, or edit the item. For each slide in the slideshow, the content author can:

-   Edit the image file, width, height, or alternative text for accessibility
-   Edit the target **Link** when the image is clicked
-   Edit **Campaign ID** that is used to link the current slide to a promotional campaign.

**Portlet configuration options**

By clicking **Open Edit Form** from the portlet menu the content author can:

-   Edit the slideshow height
-   Select the type of transition, such as fade
-   Define how long the slideshow displays each image
-   Defines whether the slideshow should start automatically or manually
-   Select when to slideshow should pause, such as on hover
-   Select which control to use as paging controls
-   Select the context for the content

## Site designer customization options

With the portal in edit mode, sight designers can make the same customization changes as content authors and more. Additionally, site designers can copy and change the building blocks of each portlet.

**List component**

East list portlet uses a component to define what content items are displayed in the portlet. The promotions slideshow uses the following portlet:

-   **CTC Design/List Components/All Items by Order**

If you need to customize this component, you must create a copy and save it into your own design library. By clicking **Open Edit Form** from the portlet menu, you then select the new component in the List component parameter of the portlet configuration document.

You can also select a different list component to use from the CTC Design library. These are located under: **CTC Design/List Components/**.

**List presentation**

East list portlet uses a list presentation to define the design of the body, header, and footer of the items that are returned by the selected list component. The promotions slideshow uses the following list presentation

-   **CTC Design/List Presentation Components/Slideshow List Design for Promotions**

If you need to customize this component, you must create a copy and save it into your own design library. By clicking **Open Edit Form** from the portlet menu, you then select the new component in the List component parameter of the portlet configuration document.

You can also select a different list presentation to use from the CTC Design library. These are located under: **CTC Design/List Presentation Components/**.

**CSS Style**

The default stylesheet that is used by this portlet is **promoSlideshow left**. To customize this CSS file, first make a copy of the CSS file, edit the copy, and then enter the name of the new CSS file in the CSS Style parameter in the portlet configuration document.

CSS files are stored in this WebDAV folder: dav://server:port/wps/mycontenthandler/dav/fs-type1/themes/Portal8.5/CTC/css.

**Context Override**

The promotions slideshow portlet uses a context override that points to the location where your promoted content is stored. When you first add the portlet to a page, you need to change the context override to specify that location in the portlet configuration document. For example:

-   **your-library/your-site/Home/Promotions**

**Parent topic:**[Slideshows ](../ctc/ctc-portlet-types-slideshows.md)

