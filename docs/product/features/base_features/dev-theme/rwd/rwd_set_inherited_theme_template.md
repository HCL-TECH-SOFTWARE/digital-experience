# Setting inherited theme templates

You can set a theme template to be used on a page and it automatically sets the template for all child pages that are associated with that page. The inherited metadata can be used when you want every page under a specific page to have the same theme template.

This inheritance is introduced through a new metadata key that is added to a page. The new metadata is `com.ibm.portal.theme.inherited.template.file.name.html=myfile.html`.

**Note:** The myfile.html file, which corresponds to the theme template that you are setting, must already be in WebDAV in the directory /mycontenthandler/fs-type1/themes/Portal8.5/.

You can set the theme template by using WebDAV or managed pages. After your custom theme template is set, you can see it displayed on the page and all child pages corresponding to that parent page.

## Setting the theme template by using WebDAV

**Procedure:**

1.  Go to the page where you would like to set the new metadata.
2.  Click **Edit Mode**.
3.  In the **Overview** section, hover over the name of the page and click the **Edit**.
4.  Click the **Advanced** tab and enter the following information in the **Metadata** section:
    -   **Key**

        `com.ibm.portal.theme.inherited.template.file.name.html`

    -   **Value**

        Enter the HTML file name that corresponds to the theme template that you want to set.

5.  Click **Add** to set the new metadata for the page.
6.  Click **Save**.

## Setting the theme template by using the Manage Pages administrative portlet

**Procedure:**

1.  In the HCL Digital Experience administrative section, click the **Manage Pages** tab and go to the page where you want to set the metadata.
2.  Select the **Edit Page Properties** option for the page you want to edit.
3.  In **Advanced options**, select **I want to set parameters** and enter the following information:
    -   **New parameter**

        `com.ibm.portal.theme.inherited.template.file.name.html`

    -   **New value**

        Enter the HTML file name that corresponds to the theme template that you want to set.

4.  Click **Add** to set the new metadata for the page.
5.  Click **Save**.

**Parent topic:**[Theme templates \(theme.html\)](../dev-portlet/csa2_dgn_theme_html.md)

