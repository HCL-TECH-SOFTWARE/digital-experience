# Conceptual and functional divisions of a website

When you build a website by using Web Content Manager, you break up your website into the following conceptual and functional divisions.

|Content|Layout|
|-------|------|
|-   Content items
-   Site areas
-   Components

|-   Presentation templates
-   Component designs
-   Page layout and portlets
-   Themes

|

|Context|Style|
|-------|-----|
|-   Site framework
-   Page hierarchy
-   Profiling
-   Current user
-   Personalization

|-   CSS
-   Themes

|

When you are developing a website by using Web Content Manager and HCL Portal, you are splitting the elements of your website between content, context, layout, and style.

-   **Content:**

    There are two types of content:

    -   **Dynamic**

        Dynamic content is generated dynamically based on a set of pre-configured parameters, such as navigator or menu.

    -   **Static**

        Static content is content where you store markup or files directly in a component, content item, or site area. Where you store your static content depends on how the content is used:

        -   Page-specific content is stored in content items.
        -   Content that is related to a section of your site can be stored in a site area.
        -   Content that is reused in multiple sections of your site is stored in components.
-   **Layout:**

    The layout and structure of each page in your website are defined by using these features:

    -   The overall structure of each page is determined by the theme you are using, the page layout you choose, and the web content viewer portlets you add to the page layout.
    -   The layout of the content that is displayed within each web content viewer is determined by markup that is used by the current presentation template, and by the markup that is stored within the elements and components that are referenced within the presentation template.
-   **Context:**

    The context of the content that is displayed is also important. The layout and design of the page where a content item is displayed is different depending on:

    -   The current portal page \(Different pages can use different themes, layouts, web content viewer portlets, and even different presentation templates.\)
    -   The current site area \(Content that is linked to different site areas can use different template maps that map to different site areas.\)
    -   The current user \(Different users can have different access to various page elements, including individual pages, portlets, and web content items.\)
    Each of these contextual variables can be used to display content or components in different ways, depending on the current context. Additionally, the profile of the current portlet, content item, or current user can determine what is displayed on a page, as do any personalization features used by your website.

-   **Style:**

    While you can place stylistic elements directly within your HTML, it is becoming increasingly common to use CSS to store and manage all the stylistic elements of a website, including:

    -   Stored server-side and referenced within a HCL Portal theme
    -   Stored directly within a content item or component
    One good practice is to store your CSS markup within an HTML field that is stored in a content item. This provides quick access to the CSS if you need to edit the CSS. In addition, you can use advanced features such as workflows and inline editing to help you maintain your CSS. By storing all your stylistic elements in CSS, you can quickly make stylistic changes to your website by editing a CSS file instead of editing multiple items.


When a web page is rendered, Web Content Manager takes all these individual item types and combines them to build a complete web page.

**Parent topic:**[Web content](../overview/content.md)

