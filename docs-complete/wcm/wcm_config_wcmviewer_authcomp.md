# How to configure authoring tools components 

Authoring tools components that are rendered in a web content viewer allow you to create, read, edit, delete, approve, or reject content items directly in the web content viewer, instead of requiring you to browse to the HCL Web Content Manager authoring portlet to run the same action. The web content viewer either opens a window from the current page or redirects the user to another portal page that contains the authoring portlet.

You can specify which behavior to use in the authoring tools element design. Typically placeholder tags are used to display authoring tools elements. The value of the `format` attribute of the placeholder tag determines what URL is created to run an authoring task:

-   **`format="tag"`**

    The placeholder is rendered as a URL that opens a window that contains the authoring portlet.

-   **`format="url"`**

    The placeholder is rendered as a URL that redirects the user to another portal page that is used by the web content viewer for inline editing.


**Note:** Authoring tasks that are run in the web content viewer are accomplished through a special instance of the authoring portlet that is reserved specifically for these tasks and is installed on a page that is hidden from the page navigation available to typical users. You can customize the authoring experience for these tasks by configuring the reserved authoring portlet and the page that is used to display it.

## Authoring tools components that open in a window

When you use a window to display an authoring task, the window opens on the portal page and can be moved within the boundaries of the browser window while still showing the portal page. After you complete the task that is triggered by the authoring tools element, the window closes automatically, and the portal page refreshes, updating the view in the web content viewer. You can cancel the authoring task by clicking the close icon in the window's title bar. When a task is canceled, no web content information is saved, unless you explicitly save changes before manually closing the window.

The default value of the `format` attribute for a placeholder tag is `tag`, so to use a window for inline editing, it is not necessary to specify a value for the `format` attribute. Either of the following design examples creates a URL that opens a window for authoring tasks:

```
<Placeholder tag="namelink"/>
<Placeholder tag="namelink" format="tag"/>

<a href="<Placeholder tag="href"/>">
  <Placeholder tag="name"/>
</a>
<a href="<Placeholder tag="href" format="tag"/>">
  <Placeholder tag="name"/>
</a>
```

**Note:** It is not possible to open the window in a separate browser window by adding `target="_blank"` to the HTML anchor tag in the design.

## Authoring tools components that open on another page

Instead of running tasks from authoring tools elements in a window on the current page, you can open authoring tasks by browsing to a hidden portal page that contains a web content viewer that contains the reserved authoring portlet. Clicking a link for an authoring tools element automatically redirects you to the other page, but after you complete the authoring task, you must manually browse back to the original page. If the page with the reserved authoring portlet was opened in a new browser window or tab, you must close the window or tab and manually refresh the original page to see any changes.

To redirect users to another page for authoring tasks, specify a value of `url` for the `format` attribute in the placeholder tag in the authoring tools element design. Either of the following design examples creates a URL that redirects users to another portal page for authoring tasks:

```
<Placeholder tag="namelink" format="url"/>

<a href="<Placeholder tag="href" format="url"/>">
  <Placeholder tag="name"/>
</a>
<a href="<Placeholder tag="href" format="url"/>" target="_blank">
  <Placeholder tag="name"/>
</a>
```

**Note:** You can open the portal page in a separate browser window by adding `target="_blank"` to the HTML anchor tag in the design.

**Parent topic:**[How to use authoring tools components in a Web Content Viewer \| HCL Web Content Manager](../wcm/wcm_config_wcmviewer_workauthcomp.md)

**Related information**  


[Setting service configuration properties ](../admin-system/adsetcfg.md)

