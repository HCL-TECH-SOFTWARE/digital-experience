---
id: wcm_dev_elements_authoring-tools_examples
title: How to define authoring tools
---




You can format the design of an authoring tool in different ways, including displaying authoring tools as text-based links, or image-based links.

## Authoring tool options

-   When you create a "new" action, you can either select an authoring template and site area to use with the new content item, use the same authoring template and site area as the current content item, user, or portlet, or allow users to select an authoring template and site area.
-   When you create an "edit" action you select either to create a draft item, or allow users to edit the rendered content.

## Authoring tool designs

You use placeholder tags to display authoring tools. You can use these placeholder tags in authoring tool designs:

-   name
-   href
-   namelink

## Text-based authoring tool

This example describes the element designs used to display a text-based authoring tool. Each design includes placeholder tags that are used to generate the text and link for each authoring tool.

-   **New action design:**

    ```
    <a href="[Placeholder tag="href"]">[Placeholder tag="name"]</a>
    ```

    If you have selected the option "Enable inline item creation", you must use the following design instead:

    ```
    <a href="javascript:;" onclick="[Placeholder tag="href"]">Create</a>
    ```

-   **Read action design:**

    ```
    <a href="[Placeholder tag="href"]">[Placeholder tag="name"]</a>
    ```

-   **Edit action design:**

    ```
    <a href="[Placeholder tag="href"]">[Placeholder tag="name"]</a>
    ```

-   **Delete action design:**

    ```
    <a href="[Placeholder tag="href"]">[Placeholder tag="name"]</a>
    ```

-   **Approve action design:**

    ```
    <a href="[Placeholder tag="href"]">[Placeholder tag="name"]</a>
    ```

-   **Reject action design:**

    ```
    <a href="[Placeholder tag="href"]">[Placeholder tag="name"]</a>
    ```

-   **Header:**

    ```
    <div><span>
    ```

-   **Separator:**

    ```
    </span><span>
    ```

-   **Footer:**

    ```
    </span></div>
    ```


## Image-based authoring tool

This example describes the element designs used to display an image-based authoring tool. In this example, the `[Placeholder tag="name"]` tag is replaced with a component tag that references an image component. Before you create these element designs, you must create an image component for each image that is used in the design. In this example, the following image components are required:

-   new-image
-   read-image
-   edit-image
-   delete-image
-   approve-image
-   reject-image

-   **New action design:**

    ```
    <a href="[Placeholder tag="href"]" >
    [component name="new-image" ]</a>
    ```

-   **Read action design:**

    ```
    <a href="[Placeholder tag="href"]" >
    [component name="read-image" ]</a>
    ```

-   **Edit action design:**

    ```
    <a href="[Placeholder tag="href"]" >
    [component name="edit-image" ]</a>
    ```

-   **Delete action design:**

    ```
    <a href="[Placeholder tag="href"]" >
    [component name="delete-image" ]</a>
    ```

-   **Approve action design:**

    ```
    <a href="[Placeholder tag="href"]" >
    [component name="approve-image" ]</a>
    ```

-   **Reject action design:**

    ```
    <a href="[Placeholder tag="href"]" >
    [component name="reject-image" ]</a>
    ```

-   **Header:**

    ```
    <div><span>
    ```

-   **Separator:**

    ```
    </span><span>
    ```

-   **Footer:**

    ```
    </span></div>
    ```


## How to use authoring tools components when displayed in a pop-up window

When you use a pop-up window to display an authoring task, the pop-up window opens and can be moved within the boundaries of the browser window while still showing the portal page underneath. After you complete the task that is triggered by the authoring tools element, the pop-up window closes automatically, and the portal page refreshes, updating the view in the JSR 286 web content viewer. You can cancel the authoring task by clicking the close icon in the pop-up window's title bar. When you cancel the task, no web content information is saved, unless you explicitly save changes before manually closing the window.

The default value of the `format` attribute for a placeholder tag is `tag`, so to use pop-up windows for inline editing, it is not necessary to specify a value for the `format` attribute. Either of the following design examples creates a URL that opens a pop-up window for authoring tasks:

```
[Placeholder tag="namelink"]
[Placeholder tag="namelink" format="tag"]

<a href="[Placeholder tag="href"]">
  [Placeholder tag="name"]
</a>
<a href="[Placeholder tag="href" format="tag"]">
  [Placeholder tag="name"]
</a>
```

**Note:** It is not possible to launch the pop-up window in a separate browser window by adding `target="_blank"` to the HTML anchor tag in the design. If you want to use an authoring tool component with a pop-up dialog design within a static page, the HTML of your static page has to include the Dojo Toolkit. To include Dojo in a page you can add the following to the header section of your page:

```
<script type="text/javascript" djConfig="parseOnLoad:false,isDebug:false" src="/portal_dojo/dojo/dojo.js">
```

## How to use authoring tools components when you browse to another page

Instead of running tasks from authoring tools elements in a pop-up window, you can run authoring tasks by browsing to a hidden portal page that contains a JSR 286 web content viewer that contains the reserved authoring portlet. Clicking a link for an authoring tools element automatically redirects you to the other page, but after you complete the authoring task, you must manually browse back to the original page. If the page with the reserved authoring portlet was opened in a new browser window or tab, you must close the window or tab and manually refresh the original page to see any changes.

To redirect users to another page for authoring tasks, specify a value of `url` for the `format` attribute in the placeholder tag in the authoring tools element design. Either of the following design examples creates a URL that redirects users to another portal page for authoring tasks:

```
[Placeholder tag="namelink" format="url"]

<a href="[Placeholder tag="href" format="url"]">
  [Placeholder tag="name"]
</a>
<a href="[Placeholder tag="href" format="url"]" target="_blank">
  [Placeholder tag="name"]
</a>
```

**Note:** You can open the portal page in a separate browser window by adding `target="_blank"` to the HTML anchor tag in the design.

**Related information**  


[Inserting an image in an element](wcm_dev_elements_insert_image.md)

[Inserting a link in an element](wcm_dev_elements_insert_link.md)

[Inserting element tags](wcm_dev_elements_insert_tags.md)

[Creating web content tags](wcm_dev_referencing_tags.md)

