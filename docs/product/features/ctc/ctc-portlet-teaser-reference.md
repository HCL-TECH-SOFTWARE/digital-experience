# Teaser Reference

This portlet is used to display some teaser rich text on a page by referring to an existing teaser. Use this portlet to reuse a teaser in multiple places.

Teasers are similar to page component configurations. However, because they are expected to be modified often or short-lived, they are stored in a separate area to make them easier to find and manage. This area is called "Teasers" and it is created for you each time you create a new area by using a Content Template Catalog Landing or Index page template.

Details pages do not have a Teasers area under them, but you can use a Teaser Reference portlet to reference static Teaser content. Note that the Teaser Reference portlet points to a dummy content item, a prompt to edit the shared settings for the portlet. Do not modify the dummy item; it is a single dummy item in the CTC Content library, not a copy.

## Usage

This portlet can be used anywhere on your site to display some rich text.

## Adding the portlet to a page

1.  Go to the page where you want to add a Teaser Reference.
2.  Click **Edit Mode**.
3.  Click **Create** \> **Applications** and search for teaser.
4.  Drag the **Teaser Reference** to the page and save the page.

## Content author customization options

**Inline options**

Using the direct edit menu the content author can quickly edit the rich text that is displayed in the portlet.

**Portlet configuration options**

By clicking **Open Edit Form** from the portlet menu the content author enter a title for the Teaser reference, and they can also select a header or footer component to display in the video teaser. The Teaser Title will only be displayed if it is referenced within the rich text field, or the header component using an element tag.

## Site designer customization options

By clicking **Open Edit Form** from the portlet menu the site designer can further customize the teaser reference.

**CSS Style**

The default stylesheet that is used by this portlet is **contentBlock**. To customize this CSS file, first make a copy of the CSS file, edit the copy, and then enter the name of the new CSS file in the CSS Style parameter in the portlet configuration document.

CSS files are stored in this WebDAV folder: dav://server:port/wps/mycontenthandler/dav/fs-type1/themes/Portal8.5/CTC/css.

**Parent topic:**[Applications](../ctc/ctc-portlet-types-ctc.md)

