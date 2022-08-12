# Markup guidelines

View the guidelines for using HTML, WML, and cHTML markup in your portlet JSPs to provide a consistent, clean, and complete user interface.

The portal server page is displayed with skins and themes that are defined by the portal designer or administrator. For portlets to integrate with an organization's portal or user's customized portal, they must generate markup that starts the generic style classes for portlets. They must not use tags or attributes to specify colors, fonts, or other visual elements.

Portlets are allowed to render only markup fragments, which are then assembled by the portlet framework for a page. Portlet output must contain complete, well-structured, and valid markup fragments. This output helps to prevent the portlet's HTML code, for example, from corrupting the portal's aggregated HTML code. Use a validation tool for your markup, such as the [W3C HTML Validation Service](http://validator.w3.org/) or a tool from a markup editor.

These guidelines are based on the JSP coding guidelines for standard portlets.

## HTML

-   Use standard HTML. For the official HTML specification, see [W3C](http://www.w3.org).
-   Use only HTML fragments. Because portlets contribute to the content of a larger page, they must provide HTML fragments and must not have `<html>`, `<head>`, or `<body>` tags.
-   Use only elements that can be rendered properly in an HTML table cell \(`<td>...</td>`\). Frames, for example, do not open when inserted in a table.
-   Make sure that the fragments are well-formed to prevent unbalanced pages. Watch out for unterminated, extraneous, or improperly nested tags. The behavior of pages with improperly stopped tags is unpredictable.
-   Avoid lengthy, complex HTML. Portlets share a page with others and the more content each portlet generates, the more the browser must process before it can open anything.
-   Use portlet classes in the portal server's stylesheet, Styles.css. If you hardcode the fonts and colors, the portlet's appearance looks out of place when the user changes the page style settings. Portal administrators and users can affect the appearance of the portal by changing the portal theme and the portlet skins. Portlets can pick up on style changes by using styles that are defined in the portal theme's cascading stylesheet, Styles.css. For example, instead of decorating an `<input>` element with the style attribute, refer to the theme's input class definition: `<inputclass="portlet-form-button" type="submit">`

    Portlet style classes are marked with the following comment:

    ```xmp
    /* Styles used in portlets
    ```

    When available, use the WSRP style classes, which have a `portlet-` prefix. See *CSS Style Definitions* in the [WSRP 1.0 specification](https://www.oasis-open.org/committees/).

    The relevant document says, *"One of the goals of an aggregated page is a common look-and-feel across the Portlets contained on that page. This not only affects the decorations around the Portlets, but also their 25 content. Using a common CSS stylesheet for all Portlets, and defining a set of standard styles, provides this common look-and-feel without requiring the Portlets to generate Consumer-specific markup. Portlets SHOULD use the CSS style definitions from this specification in order to participate in a uniform display of their content by various Consumers. For markup types that support CSS stylesheets, Consumers MUST supply a CSS stylesheet to the End-User's agent 30 with definitions for the classes defined in section 10.6 of this specification. This section defines styles for various logical units in the markup."*

-   Do not use CSS for absolute positioning. It can defeat the portal features that allow users and administrators to place content on the page.
-   Limit the size of the portlet output. Portlets contribute a portion of a larger page. The size of the JSPs \(in terms of horizontal and vertical span\) can determine how easily the portlet can fit on a page with multiple columns and other portlets. A large portlet forces other portlets off the screen and creates large scrolling regions, resulting in usability issues. When you design a portlet's JSPs, avoid unnecessary layout elements. Focus the portlet's view on the pertinent information and consider whether the portlet is intended to be placed on pages with other portlets. In particular, take notice of image size, pre-formatted text \(`<pre/>` tag\), and absolute widths on elements, such as tables.
-   Use Java style comments instead of HTML style. HTML comments remain in the rendered content, adding to the document size and the amount of data that passes to the client. If you use Java style comments within your JSPs, instead, they are removed from the rendered source, along with the rest of the Java code. You must embed these comments within scriptlets:

    ```xmp
    <% // this is a comment %>
    ```

-   Make pages fully accessible. To allow portal users with disabilities to be able to use your portlet, the JSPs must be fully enabled for keyboard-only control and other assistive technologies. Follow these general guidelines:
    -   Use the alt attribute with images to define descriptive text of the image content.
    -   Use `<label>` tags to associate labels with form input controls so that page readers are able to associate prompts with inputs.
    -   Do not use color alone to denote state or information. For example, red text to emphasize information does not help people who are color blind. Use bold or italics instead, or use color with graphic changes.
    -   Do not use voice or other sounds to convey information.
-   URIs, HTML element name attributes, and JavaScript resources must be namespace encoded. Use <portlet:namespace/\> \(standard portlet API\) for named elements to prevent name conflicts with other portlets on the portal page.
-   Test the portlet output in different browsers. Check portlet behavior when you resize the page to ensure that your portlet works with different browser sizes. Check portlet behavior when the default browser font is changed; your portlet should handle these situations seamlessly.
-   Do not draw portlet banners, such as title bars, since they are provided by the portal aggregation.
-   Minimize dependencies on JavaScript. Because JavaScript implementations and behavior differ widely among browser types and versions, the more your portlet depends on JavaScript, the more browser-dependent your portlet becomes. Additionally, the more of the page that is rendered using JavaScript, the more difficult it is to maintain and to extend to markups other than HTML. Also, it is more difficult to namespace encode JavaScript resources and nearly impossible to properly encode \(response.encodeUrl\(\)\) URLs built with JavaScript.
-   Do not use pop-up windows. Interactions within the portal are state-based, which means that the portal tracks your trail through the pages and portlets. Using the browser's back button or creating pop-up windows in browser instances that contain portlets can cause the portal to lose track of your current state and cause problems. Other than using JavaScript prompts, there is no safe way to create pop-up windows within the portal, unless the new link takes you to an external page, outside the portal. The alternative is to link to an external page within a new browser window \(with the TARGET attribute on the anchor\). The user remains within the portal in the original browser window.
-   Use IFRAMEs with caution. IFRAMEs are an easy way to include external content within a portlet, but undermine the whole portlet principle because the portlet API is tunneled or side-stepped. Therefore, IFRAMEs can be used for special cases, such as surfacing existing applications. Consider the following potential issues when you use an IFRAME:
    -   The IFRAME fills its content based on a URL. The URL must be addressable by the browser, therefore the server that is the target of the URL must be accessible by the browser.
    -   Not all browser levels support IFRAMEs.
    -   If the content is larger than the IFRAME region, then enable horizontal and vertical scrolling to allow the user scroll through the embedded content. Content that contains scrolling regions itself can make it difficult for the user to manipulate all scrolling regions to view all embedded content, causing usability problems.
-   Use JSTL instead of inventing common tags. The Java Standard Tag Library \(JSTL\) defines many commonly needed tags for conditions, iterations, URLs, globalization, and formatting. For more information, go to [Using JSTL in portlet JSPs](wpsbsoutput.md).

## WML

-   Use standard WML. For information, refer to [Open Mobile Alliance](https://omaspecworks.org).
-   When you design your portlet, assume that it can be opened alone or with other portlets.
-   Watch out for unterminated and extraneous tags; the behavior of pages with improperly ended tags is undefined.
-   Use only elements that can be included into a card \(probably together with other portlets and elements\) and do not create separate cards.
-   Do not set the card title.
-   Do not use templates.
-   Avoid lengthy, complex WML since the buffer length can be restricted by the user agent, and portlets can share a page with others.
-   Avoid having too many images. When you use images, define a meaningful alt name, since it is necessary for the devices that do not support images, or if the image cannot be fetched. If possible, define localsrc.
-   Do not use intrinsic events since these events \(such as oneventforward and oneventbackward\) can be added only by the aggregation level.
-   Avoid timers.
-   Use user-triggered events only if necessary, and always define label and name parameters explicitly. Prefix the name with the portlet's unique identifier, otherwise conflict is possible between different portlets on one page. Use meaningful names for labels.
-   Do not create fixed-width WML tables or images in portlets.
-   Avoid long, unbroken lines of unwrapped text to help prevent unnecessary scrolling.

## Compact HTML \(cHTML\)

-   Use standard cHTML. For information on i-mode compatible HTML, refer to [Compact HTML for Small Information Appliances](http://www.w3.org/TR/1998/NOTE-compactHTML-19980209/).
-   Assume when you design your portlet that it can be opened alone or with other portlets.
-   Watch out for unterminated, extraneous, or improperly nested tags. The behavior of pages with improperly ended tags is unpredictable.
-   Use only elements that can be included into a body; do not use `<head>` or `<body>` tags.
-   Avoid lengthy, complex cHTML since portlets can share a page with others.
-   Avoid having too many images and do not use alignment and positioning parameters with images.
-   Do not exceed a length of 24 symbols for the phone numbers that are used as references in the `<a>` tag.
-   Do not use URLs that are longer than 200 bytes.

**Parent topic:**[Portlet development reference](../dev-portlet/wpsdevref.md)

