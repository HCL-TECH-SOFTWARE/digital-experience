# How to add content to a CTC multilingual site by using page templates

Adding content by using a page template to a base library on a Content Template multilingual site works differently to a standard site. Extra steps are required to ensure that the content is available in all of the sites of your multilingual system, and that new content passes through a multilingual workflow.

1.  Create the new page in the CTC Demo site named "Courses" using the "Courses" page template.
2.  If you create the page in a project, and then publish the project, the Multilingual Solution copies the content to all the sites in your multilingual system. Now go to Step 4.
3.  If you create a new page by using a Content Template page template, the content that is created when you add a page is immediately published without progressing through the multilingual workflow. This is because the content is copied from the templated content, which itself is published. This content uses text providers to ensure that it does not need translation, but the content must be copied into the libraries for each site in your multilingual system. For example, to create a new multilingual page in the CTC Demo site:
    1.  From the Toolbar, click **Content** \> **Web Content Authoring**.
    2.  Click **Preferences** \> **Personalize**.
        1.  Click **Library Selection** and select the "CTC Demo", "CTC Demo AR", "CTC Demo DE", "CTC Demo ES" and "CTC Demo ZH" libraries to be displayed.
        2.  Click OK.
    3.  Go to the site area that was created by the page creation. This is located under **CTC Demo** \> **Content** \> **CTC Demo** \> **Home**.
    4.  Open the "Courses" site area in read mode
    5.  Copy the "Courses" site area and its branch to each of the libraries for each site in your multilingual system. For the CTC Demo, this means copying the site area branch to the "CTC Demo AR", "CTC Demo DE", "CTC Demo ES" and "CTC Demo ZH" libraries. To do this:

        1.  Choose "Copy Branch" from the menu. This menu option is installed with the Content Template. A copy of the branch is created and named with the prefix "COPY\_OF\_".
        2.  Move the new site area to the target library. For example, "CTC Demo AR" in the same location as the copied branch.
        3.  Rename the copy to have the same name as the original site area by removing the prefix "COPY\_OF\_".
4.  Ensure that each of the portlets on the new page has the multilingual context processor applied.
5.  Modify the page to add an additional web content association to the equivalent site area in the new locale sites.

Likewise, when you add a new Content Template portlet to a page, the page component configuration content that is created is published and does not progress through the multilingual workflow. Therefore, you should copy the page component configuration content that was created under the "Page Components" site area to each of the corresponding site areas in the localized sites.

For more information on how to apply the multilingual context processor and how to set web content association, see:

-   [Portlet Render-time navigation extensions](../wcm/wcm_mls_ext_portlet.md)
-   [Web content associations](../wcm/wcm_delivery_contentmap_about.md)

**Parent topic:**[How to apply the multilingual solution to Content Template sites](../ctc/ctc_deploy_locale.md)

