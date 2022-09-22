# Included profiles

Portal includes profiles that contain modules that change how your portal site is rendered.

## Portal 8.5 default theme

-   **Basic Content**

    This profile contains everything that is required for viewing and editing content and capabilities such as tagging and rating, person card, and social rendering.

-   **Basic Content with Dojo**

    This profile contains everything that is required for viewing and editing content and capabilities such as tagging and rating, person card, and social rendering. This profile includes Dojo.

-   **Deferred with Dojo**

    This profile has the full set of modules for the theme, but defers loading most of these modules unless needed. This profile includes Dojo. This profile balances function and performance.

-   **Deferred \(Default\)**

    This profile has the full set of modules for the theme, but defers loading most of these modules unless needed. This profile balances function and performance.

-   **Lightweight with Dojo**

    This profile has modules necessary for viewing pages with portlets. Modules necessary for iWidgets and modules that are needed by users to change pages are not included. This profile includes Dojo.

-   **Lightweight**

    This profile has modules necessary for viewing pages with portlets. Modules necessary for iWidgets and modules that are needed by users to change pages are not included. Assigning the lightweight profile to a page does not imply that the page can be no longer edited. The theme of the page contains modules that are needed for rendering. The lightweight profile contains the `wp_toolbar_host_view` module. The `wp_toolbar_host_view` module does not contain any inline editing artifacts or Drag and Drop artifacts on the main page. However, you can still edit the page using the toolbar, but the toolbar is not loaded into the main page. It is in a different iframe. It is in the view frame, while the toolbar lives in another iframe. If you want make sure the page can no longer be edited, you can assign the user role so the user does not have access, or set the page metadata to disable edit mode for a page. Do set the page metadata, set the `theme.disable.edit.mode = true`.

-   **Web Dock**

    This profile has the set of modules to be used for the Web Dock applications.

    Web Dock was removed in Combined Cumulative Fix 03. It is not required because the Web Dock capability is automatically downloaded on demand if you set up the Resource Aggregation for portlet feature in your theme. Then, you must add the module to an existing profile.



???+ info "Related information:"
    - [Themes, profiles, and skins](../../../create_sites/website_building_blocks/themes_profiles_skins/index.md)

