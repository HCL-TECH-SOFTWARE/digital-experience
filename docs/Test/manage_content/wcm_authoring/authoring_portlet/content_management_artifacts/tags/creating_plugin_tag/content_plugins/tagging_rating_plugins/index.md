# Tagging and rating plug-ins for web content



You can tag and rate portal resources, such as pages and portlets. You can also tag and rate content items that were generated with HCL Web Content Manager and are shown with the web content viewer. Two plug-in components are available to support the tagging and rating of content items in your web content system. You can add the `[Plugin:tags]` component and `[Plugin:ratings]` component in a presentation template to quickly integrate tagging and rating widgets into the current content item.

!!! note
    If you want to use tagging and rating on web content in virtual portals with the managed pages feature enabled, you need to syndicate the web content library to the virtual portals. The reason is that this library contains the default formatting components that the plug-in tags `[Plugin:tags]` and `[Plugin:ratings]` reference. Therefore, the web content library needs to be syndicated into the virtual portals.

-   **[Adding a tagging widget to web content](wcm_tagrate_widgets_tag.md)**  
You can add a tagging widget to a content item by adding a `[Plugin:tags]` component to your presentation template. By default the plug-in component is rendered using the `HTML - Tagging Widget Light` design, which is included in the web content library `Web Resources v70`, or you can create your own design.
-   **[Adding a rating widget to web content](wcm_tagrate_widgets_rating.md)**  
You can add a rating widget to a content item by adding a `[Plugin:ratings]` component to your presentation template. By default the plug-in component is rendered using the `HTML - Rating Widget Light` design, which is included in the web content library `Web Resources v70`, or you can create your own design.

