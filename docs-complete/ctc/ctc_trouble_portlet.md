# Troubleshooting portlets 

Find solutions to problems that involve content and configuration of portlets.

## No content is appearing in most of the portlets

-   **Problem**

    Content Template Catalog application is shut down, missing, or inaccessible.

-   **Solution**

    All of the "design" templates like Lists and Slideshows use a JSP to render themselves, and this JSP is installed in the CTC EAR. If this application has been shut down, uninstalled, or re-named, the JSP cannot be run, and the design elements are missing from the page. Check that the CTC application is installed and started. Then verify that the context path is ctc\_theme.


## Portlet configuration header does not work

-   **Problem**

    Broken markup.

-   **Solution**

    The portlet configuration header is rendered in the portlet skin, and can be broken by incorrect markup in a portlet, such as missing end tags and misspelled tags. View the page source and locate the missing or broken tags. Locate the source of these tags in your design components and fix the markup.


## Component portlet shows current content instead of the selected component

-   **Problem**

    Incorrect "receive links from" setting.

-   **Solution**

    For component portlets this setting should be set to "None", otherwise the content of the portlet gets replaced when a user navigates to a content link on this page. Open the "Shared settings" for the portlet, expand the Advanced settings section, and set "Receive links from" to "None."


## Body portlet does not change when a link is selected

-   **Problem**

    Incorrect "receive links from" setting.

-   **Solution**

    For "body" portlets that are meant to show the full details of a content item, this setting should be set to "Other portlets and this portlet," otherwise the content of the portlet will not change when the user navigates to a link. Open the "Shared settings" for the portlet, expand the Advanced settings section, and set "Receive links from" to "Other portlets and this portlet."


**Parent topic:**[Troubleshooting Content Template sites ](../ctc/ctc_trouble_overview.md)

