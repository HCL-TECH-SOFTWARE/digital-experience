# Importing a Site Builder template from a file

You can use the Import Template action in Site Builder to make the Site Builder template available to HCL Portal administrators and website creators.

Before you can import a Site Builder template, the target server must have HCL Digital Experience, HCL Web Content Manager, Content Template Catalog, and Site Builder \(page and library\) installed and visible.

!!! note
    Do not import a Site Builder template that uses embedded page templates that are stored in the Portal Site library. Conflicts between duplicate page templates cause the imported Site Builder template to break on the destination server.

**Importing templates between different versions of Site Builder:** If you are exporting and importing templates between servers that use different versions of Site Builder, you must remove the installed templates from the import file before importing:

1.  Extract the PAA file and delete the pageTemplates.xml file from the directory components\\TemplateName.unique\\content\\xmlaccess\\install.
2.  Rezip the PAA file.
3.  Perform the import.

Follow these steps to import an exported Site Builder template file that is on a local or external drive that you have access to. If the Site Builder template or page templates exist on the server, they are overwritten. If a required library named in the Site Builder template file exists on the server, you cannot import the Site Builder template. Site Builder prevents custom libraries from being overwritten accidentally.

1.  Open Site Builder and click **Import Template**.

2.  Browse to the site template file, select it, and click **Open**.

3.  Click **OK**.


When the import completes successfully, the imported Site Builder template appears on the list of available Site Builder templates.


