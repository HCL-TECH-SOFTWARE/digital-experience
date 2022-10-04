---
id: wcm_dev_elements_menu_design
title: Menu element design examples
---

Format the design and layout of menu elements with HTML and placeholder tags.

## Simple menu design

This example shows the basic structure of the element design that is used by a menu to format the search data. You enter the following tags into the **Design for each menu search result** section of the menu element form.

|Design|Details|
|------|-------|
|`<a href="[placeholder tag="href"]">`|Instead of a URL, use an href placeholder.|
|`[placeholder tag="title"] </a><br>`|Instead of text, insert a title placeholder.|

This is repeated for every link that is returned by the search query that is defined in the menu element. You can also use a TitleLink tag:

|Design|details|
|------|-------|
|`[placeholder tag="titlelink" ] <br>`|This code produces the same result as the previous example.|

When you create menus for use in rendering portlets, a **URLCmpnt** tag is used to create a link instead of a placeholder.

## Using a menu to display images

To display images in a menu instead of text, replace the name placeholder with a reference to an Image element selected from content or site areas.

|Design|Details|
|------|-------|
|`<a href="[placeholder tag="href" ]">`|Instead of a URL, use an href placeholder. The menu result design is where the URL of the menu item is inserted in the rendered menu.|
|`[element type="sitearea" context="autofill" key="Image"]</a></br>`|Instead of a name placeholder (as in the previous example), insert an element tag. The source type can either be content or site area. The context is autofill. In this example, the field that is referenced is "Image". The site areas or content that is returned must also contain an image element named "Image". The images that you store in the site area or content can be different, but they must all have the same label.|

## Adding a page navigation element to a menu design

To add navigation controls to a menu, you add a reference to a page navigation element in either the footer or header.

-   **Header**

    `<div\>`

-   **Menu results**

    |Design|Details|
    |------|-------|
    |`<span><a href="[placeholder tag="href" ]">`|Instead of a URL, insert a URL placeholder here. The menu result design is where the URL of the menu item is inserted in the rendered menu.|
    |`[placeholder tag="name"] </a><br></span>`|Instead of text, insert a name placeholder.|

-   **Footer**

    |Design|Details|
    |------|-------|
    |`<span>[component name="pagenav" ]</span></div>`|Add a reference to a previously created page navigation element to add navigation features to a menu design. In this example, the page navigation element is referenced from a page navigation component called "pagenav".|


