# Importing Script Applications

Add the Script Application to a page. Then, import an application.

**Note:** If you add the Script Application to pages for which you selected the Lightweight profile, you cannot start the portal dialog to use the Edit and Import features. Script Application instances that you created and edited on pages with profiles other than the Lightweight profile or elsewhere can be added to Lightweight profile pages from the Script Applications for runtime use.

You can import files from your file system or from another portlet. To import from your file system, you must add your files in a .zip format.

The compressed archive file that you select to import can include .css, .js, and .html files. If there is more than one .html file, you must select the default file when you are prompted. If you choose to import files from another portlet, the system makes copies of the files. If there are multiple .html elements or file components, then you must select the main .html file.

**Note:** The main .html file must be at the root of the imported application. The JavaScript and images must be in subfolders with relative references from the main .html file.

When you import a .zip file or copy files from another portlet, the files are stored as HCL Web Content Manager elements. Elements that are already associated with the Script Application are overwritten.

You can add only the following Web Content Manager tags to the main .html file. They do not work if they are included in the .js files.

-   **User display name**

    Example: `[Plugin:EvaluateEL value="${wp.user[wp.themeConfig['user.displaynameattribute']]}"]`

-   **LDAP cn**

    Example: `[Plugin:EvaluateEL value="${wp.user.cn}"]`

-   **LDAP sn**

    Example: `[Plugin:EvaluateEL value="${wp.user.sn}"]`

-   **LDAP uid**

    Example: `[Plugin:EvaluateEL value="${wp.user.uid}"]`

-   **LDAP preferredLanguage**

    Example: `[Plugin:EvaluateEL value="${wp.user.preferredLanguage}"]`

-   **Portlet Namespace**

    Example: `[Plugin:Portlet key="namespace"]`

-   **Display only in page edit mode**

    Example: `[Plugin:PageMode pageMode="EDIT"]Edit mode is ON[/Plugin:PageMode]`


1.  Turn on **Edit** mode.

2.  Open the site toolbar and click **Create** \> **Applications**.

3.  Search for script to find the portlet.

4.  Drag the Script Application to the page.

5.  Click **Import** to start the import process.

6.  Close the Import dialog after the import completes.


The main .html file is imported into the HTML pane of the Script Application Editor. .css, .js, .json, and image files are imported as individual file elements in the Script Application Editor.

Each file type is stored in Web Content Manager as separate elements. Images are stored as separate Web Content Manager ImageComponent elements.

The import tool replaces relative image and file references in the .html, .css, .js, and .json files that are imported.

Do not import JQuery Core directly with an application .zip artifact. Instead, load it by the portal page. JQuery Core that is imported directly into the Script Application with inline JavaScript is not supported in the Script Application.

**Parent topic:**[Script Application Editor](../script-portlet/script_portlet_editor.md)

