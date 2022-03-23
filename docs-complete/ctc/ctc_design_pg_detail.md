# Modifying details pages 

When a user clicks a content item link, the appropriate details page is located and the portlets retrieve information from this item.

Unlike landing and index pages, details pages are a view for seeing many content items. Details pages are also hidden from the portal navigation. They are mapped to a content area in each part of the site. This area contains all the content for a part of the site, and it is the mapping of the details page to this area that allows the correct page to be found for each content item. The mapping of the details page to the content area is also the reason that many of the pre-configured portlets cannot be dropped directly onto details pages.

Many of the portlets need a subarea that is called "Components" to exist, or "Teasers" for the teaser portlets; these areas do not exist under the content area. You cannot add these areas manually either, as this would cause page component configurations to get mixed in with the content and appear inappropriately in lists.

This restriction makes details pages a little more difficult to deal with than landing pages. This is an important concept to understand as you start to expand your site with cross-referencing lists, teasers, or other page components.

-   **Modifying the content**

    All details pages have a Dynamic Body portlet on them. This shows the current content item when you link to it, and provide inline editing. The title, summary, and body are all being rendered through a presentation template. Often there are extra details that you can enter on a content item that appears in the sidebar, but these are all edited through the same form.


-   **Adding lists, slideshows, and teasers**

    You can add all of these types of extra content to a details page, but you must do it slightly differently than with a landing or index page. There are two ways to do it:

    -   Manually – create these items directly, store them in a Components or Teasers area, and then reference them using the page component configuration or Teaser Reference portlets.
    -   Through portlet instantiation – by adding the component or teaser first to a landing or index page and then referencing the resulting page component configuration or teaser by using a page component configuration portlet or Teaser Reference.

**Parent topic:**[Creating index and details pages ](../ctc/ctc_design_qs_idx.md)

