# Preparing the Content Template portlets for multiple languages

The theme for a multilingual site typically contains locale switching navigation. You must also set up the HCL Web Content Manager viewing portlets to react to a change in locale.

1.  Enable the context-switching capability in all content viewing portlets. This can be done by exporting all of the pages from your site and adding the Multilingual Solution context processor to the portlets.

    When setting the Multilingual Solution context processor on the Dynamic Post-Body and Dynamic Sidebar portlets, be sure to retain the existing context processors that are set on these portlets.

2.  On each page that requires multilingual support, add a new page mapping to the path of the current page. Add this new page mapping to each library copy.

    For example, with a template that is mapped to Content Library/Events, also add a mapping to Content Library Spanish/Events.

    This ensures that the navigation elements, such as the site breadcrumbs and section navigation, are set up correctly for multiple languages.


**Parent topic:**[How to apply the multilingual solution to Content Template sites](../ctc/ctc_deploy_locale.md)

