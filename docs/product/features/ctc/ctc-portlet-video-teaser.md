# Video Teaser

This portlet is used to display a video.

The CTC Demo uses a video portlet on its About page.

![An image of the teaser video.](../images/video-teaser.jpg)

## Usage

This portlet can be used anywhere on your site to display a video.

## Adding the portlet to a page

1.  Go to the page where you want to add a Video Teaser.
2.  Click **Edit Mode**.
3.  Click **Create** \> **Content** \> **Teasers**.
4.  Drag the **Video Teaser** to the page and save the page.

## Content author customization options

**Inline options**

Using the direct edit menus you can:

-   Edit the videos that appear in the Video Teaser by hovering over the video icons. Add multiple formats of the same video for browser compatibility.
-   Edit the title by hovering over the teaser title.
-   Add some descriptive text by hovering over the summary and editing the teaser content.
-   Edit the height and width video display settings.

![An image of the teaser video portlet in edit mode.](../images/video-teaser-edit.jpg)

**Portlet configuration options**

By clicking **Open Edit Form** from the portlet menu the content author can also select a header or footer component to display in the video teaser.

## Site designer customization options

With the portal in edit mode, sight designers can make the same customization changes as content authors and more.

**CSS Style**

A site designer can use a CSS file to customize the look and feel of the portlet.

CSS files are stored in this WebDAV folder: dav://server:port/wps/mycontenthandler/dav/fs-type1/themes/Portal8.5/CTC/css.

## Video usage

For support on desktop and mobile devices, videos can be encoded in the different formats that are supported by the HTML5 video element. The following table shows which video formats each browser supports.

|Browser|MP4 \(H.264/ACC\)|WebM \(VP8/Vorbis\)|Ogg \(Ogg Theora/Vorbis\)|
|-------|-----------------|-------------------|-------------------------|
|Google Chrome|Yes|Yes|Yes|
|Microsoft™ Internet Explorer 9 and higher|Yes|No|No|
|Mozilla Firefox|Yes for version 21 or higher|Yes|Yes|
|Opera|Yes for version 25 or higher|Yes|Yes|
|Safari and Mobile Safari|Yes|No|No|

**Note:** Internet Explorer does not support the video tag for versions before Version 9. If users have older versions of Internet Explorer, you must also set up Adobe Flash Player to play videos. Add the Flash player as a file resource in Web Content Manager. Then edit the Video field component in the CTC Design library to add code similar to the following pointing to the Flash Player to use.

```
<video>
<source .../>
<!-- Add flash player here -->
<object ... >
<param NAME="movie" value="VIDEO PLAYER" />
</object>
</video>
```

**Parent topic:**[Teasers](../ctc/ctc-portlet-types-teasers.md)

