# Working with layout templates

You can add new layout templates so that they can be assigned to portal pages or update your ready-use layouts to modify the existing skins or change how your pages display.

Layout templates are stored in the WebDAV filestore at the location /fs-type1/themes/myCustomTheme/layout-templates. To add a layout template and to assign it to portal pages, create a folder or copy and rename an existing layout template folder in the root folder. Include all CSS files in the theme that are used by the new layout template.

Layout templates control the layout and positioning of the content on a page. The static layout template is called layout.html. The author of the layout template defines the HTML fragment markup and CSS for the layout of the page. The HTML fragment uses microformat to specify containers and components, such as portlets and iWidgets to include in the page.

This example defines a two-column layout, with a hidden container for widgets, which participate in the wiring of the page, but are not visible themselves.

```
<div class="hiddenWidgetsDiv">
	<!-- widgets in this container are hidden in the UI by default -->
	<div class="component-container hiddenWidgetsContainer ibmDndRow wpthemeCol12of12 wpthemeFull" name="ibmHiddenWidgets"></div>
	<div style="clear:both"></div>
</div>
<!-- this layout has two equally sized columns -->
<div class="wptheme2Col wpthemeEqual">
	<div class="component-container wpthemeCol wpthemePrimaryContainer ibmDndColumn wpthemeLeft wpthemeCol6of12 wpthemeMedium" name="ibmMainContainer"></div>
	<div class="component-container wpthemeCol wpthemeSecondaryContainer ibmDndColumn wpthemeLeft wpthemeCol6of12 wpthemeMedium" name="secondary"></div>
</div>
```

The meaning of the elements is as follows:

-   **`class="component-container"`**

    The static page parser recognizes the microformat to define containers in the page layout model that can contain components. Components can be portlets or widgets.

-   **`name="ibmMainContainer"`**

    The name attribute on a component container identifies that container uniquely to the page. The static page parser uses the name to correlate containers when it updates the page definition. Using consistent names across layout templates preserves your container contents when you switch between layouts on pages. There must always be a container that is named `ibmMainContainer` for the main content of the page.

-   **`name="ibmHiddenWidgets"`**

    When you create your own layouts, there must always be the one container at the beginning of the page named `ibmHiddenWidgets`.

-   **`name="headline"`**

    If there are containers other than `ibmHiddenWidgets` or `ibmMainContainer`, use `headline` for a header or banner across the page for smooth switching between your layouts and the default layouts.

-   **`name="secondary"`**

    Use `secondary` for content that is secondary to the main content, such as a sidebar.

-   **`name="tertiary"`**

    Use tertiary for content that supports the secondary content.

-   **`name="additional"`**

    Use `additional` for content that supports the tertiary content.

-   **`name="footer"`**

    Use `footer` for an item at the end of the page.

-   **`class="ibmDndColumn"``class="ibmDndRow"`**

    This class is required for client-side drag-and-drop support. Mark your component container with one of these classes.

-   **`class="wpthemeCol"``class="wpthemeRow"`**

    This class provides CSS positioning information. Mark your component container with one of these classes.

-   **`class="wpthemeHeadlineContainer"``class="wpthemePrimaryContainer"``class="wpthemeSecondaryContainer"``class="wpthemeTertiaryContainer"`**

    These classes provide CSS sizing information. Mark your component container with one of these classes. These classes are optional. You can use one of your own classes if your container sizing requirements vary from what these provide.

-   **`class="wpthemeLeft"`**

    This class provides CSS positioning information. Mark your component container with this class if it is one of multiple containers on the same vertical level and floats to stay on the same level.

-   **`class="wpthemeCol1of12"``class="wpthemeCol2of12"``class="wpthemeCol1of5"``class="wpthemeCol3of12"``class="wpthemeCol4of12"``class="wpthemeCol2of5"``class="wpthemeCol5of12"``class="wpthemeCol6of12"``class="wpthemeCol7of12"``class="wpthemeCol3of5"``class="wpthemeCol8of12"``class="wpthemeCol9of12"``class="wpthemeCol4of5"``class="wpthemeCol10of12"``class="wpthemeCol11of12"``class="wpthemeCol5of5"``class="wpthemeCol12of12"`**

    These classes are CSS marker classes. They do not have any styles that are defined for them by default. But, they can be used in CSS selectors to vary the styles of content and portlets that can be dropped in this container. Mark your component container with one of these classes that are based on the width the container has relative to other containers on the same vertical level. These classes are referred to as grid relative width classes. You can specify that a container takes up any number of width units of the page. See Relative width CSS classes for theme layouts.

-   **`class="wpthemeThin"``class="wpthemeNarrow"``class="wpthemeMedium"``class="wpthemeWide"``class="wpthemeFull"`**

    These are CSS marker classes. They do not have any styles that are defined for them by default. But, they can be used in CSS selectors to vary the styles of content and portlets that can be dropped in this container. Mark your component container with one of these classes that are based on the width the container has relative to other containers on the same vertical level. These classes are referred to as semantic relative width classes. See Relative width CSS classes for theme layouts.


If you repeat similar sections in a layout, append 2 through n to the end of any of the names. For example, use `additional2` and `additional3` or use `headline2`, `ibmMainContent2` and `secondary2`. Use this naming convention for better transitions when you switch between layouts.

If you implement a complex layout template that requires its own JavaScript handling, ensure that the required JavaScript components are loaded and initialized by the theme. For best performance, build and minify all JavaScript used into a single, cacheable file that can be loaded one time and cached by the browser.

## Adding portlets and iWidgets to layout templates

You can add portlets and iWidgets directly to the layout template definition by using the portlet microformat for static pages, or the iWidget definition specification. You can add portlets or iWidgets inside or outside of containers. The template is applied to the page as a copy. Therefore, every page that uses the template has a new instance of the portlet or iWidget.



???+ info "Related information"
    - [Relative width CSS classes for theme layouts](../../responsive_web_design/relative_width_css_classes/index.md)

