---
id: plugin_portlet_toolbar
title: The Toolbar state rendering plug-in
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Use the `ToolbarState` rendering plug-in to retrieve the state of the site toolbar that is provided with the Portal 8.0 theme.

The plug-in renders the following strings to indicate the current state of the toolbar:

-   **`open`**

    Indicates that the toolbar is expanded because the page is in edit mode.

-   **`closed`**

    Indicates that the toolbar is collapsed because the page is in view mode.

-   **`unknown`**

    Indicates that no page mode is selected. This state can occur, for example, directly after log-in.


Example:

```
[Plugin:ToolbarState]
```

You can use the `Equals` plug-in to check for the current state of the toolbar and then dynamically add markup to the rendered content. The following sample adds a component \(`web content templates/edit`\) to the markup only if the site toolbar is expanded:

```
[Plugin:Equals text1="open" text2="[Plugin:ToolbarState]"]
    [Component name="web content templates/edit"]
[/Plugin:Equals]
```

