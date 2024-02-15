# Layouts

You can modify existing layouts, or you can create a new layout by copying and modifying an existing layout.

Layout templates control the placement of content on a page. The Simple Theme template includes four layouts:

-   **1 Column**

    All content appears in one column.

-   **2 Column Left**

    The page includes two columns, with a wider left column.

-   **2 Column Right**

    The page includes two columns, with a wider right column.

-   **Top Column 2 Column Unequal**

    One column spans the beginning of the page and two columns fill the rest of the page, with a wider left column.


The markup for layout templates is defined in the fs-type1/themes/themename/layout-templates folder of the theme, which contains one folder for each layout template. Each folder contains a file that is named layout.html, which is the markup, and a file that is named icon.png, which illustrates what the layout looks like.

The layout templates use grid CSS that is defined in a module that is located in thefs-type1/themes/themename/modules/st\_layoutGrid/head/layout-grid.css file of the theme. Before you can use this CSS, you must include the `st_layoutGrid` module in the profile. This module makes the layout fluid so that when you shrink the size of the browser window, the columns rearrange themselves to fit the new width of the window.

You can modify existing layouts, or you can create a new layout by copying and modifying an existing layout. Certain elements are required for layouts to work correctly. These elements include the component-container class, the name attribute, and one of the `Dnd` classes if you want to support drag-and-drop functionality.

!!! note
    If you add a new layout or change the title of an existing layout, update fs-type1/themes/themename/system/layouts.json with the new layout information so that the layout appears in the toolbar.

The following list describes the values of these required elements.

-   **`class="component-container"`**

    The static page parser recognizes the microformat to define containers in the page layout model that can contain components. Components can be portlets or widgets.

-   **`name="ibmMainContainer"`**

    The name attribute on the component container identifies that container uniquely to the page. The static page parser uses the name to correlate containers when it updates the page definition. Ensure that you use consistent names across layout templates to preserve your container contents when you switch between layouts on pages. There must always be a container that is named `ibmMainContainer` for the main content of the page.

-   **`name="ibmHiddenWidgets"`**

    When you create your own layout, you must include one container at the beginning of the page that is named `ibmHiddenWidgets`.

-   **`name="headline"`**

    If you use other containers in addition to `ibmMainContainer` and `ibmHiddenWidgets`, use `headline` for a header or banner across the page so that you can smoothly switch between your layouts and the default layouts.

-   **`name="secondary"`**

    Use `secondary` for content that is secondary to the main content, such as a sidebar.

-   **`name="tertiary"`**

    Use `tertiary` for content that supports the `secondary` content.

-   **`name="additional"`**

    Use `additional` for content that supports `tertiary` content.

-   **`name="footer"`**

    Use `footer` for an item at the end of the page.

-   **`class="ibmDndColumn"` or `class="ibmDndRow"`**

    This class is required for client-side drag-and-drop support. Mark your component container with one of these classes.


Learn more about [Working with layout templates](../customizing_theme/layouts/themeopt_cust_layouttemp.md). Note that not all information at this link applies to the Simple Theme.


