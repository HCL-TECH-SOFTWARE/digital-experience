# Exporting a Site Builder template to a virtual portal

With direct access to a virtual portal setup on HCL Digital Experience, exporting collects all the necessary files and imports them immediately.

Before you can export a Site Builder template, the target virtual portal must have HCL Digital Experience, HCL Web Content Manager, and Content Template Catalog installed on the virtual portal. Site Builder \(page and library\) must also be installed. You must be assigned administrator access to Site Builder on the target virtual portal and it must be running HCL Portal.

If the Site Builder template or page templates exist on the target virtual portal, they are overwritten. If a required library included in the Site Builder template file exists on the target virtual portal, you cannot import the Site Builder template. Site Builder prevents custom libraries from being overwritten accidentally.

**Note:** Do not import a Site Builder template that uses embedded page templates that are stored in the Portal Site library. Conflicts between duplicate page templates cause the imported Site Builder template to break on the destination server.

1.  Open Site Builder.

2.  Browse to the published site template you want to export and click **Export**.

3.  Click **Export the site template to a virtual portal**.

4.  Select the target virtual portal from the list.

5.  Click **OK**.

    Site Builder exports the Site Builder template and then imports it to the target virtual portal. The process can take a few minutes.


**Parent topic:**[Exporting Site Builder templates to other servers](../sitebuilder/sitebuilder_temp_dist.md)

**Parent topic:**[Exporting Site Builder templates to other servers](../sitebuilder/sitebuilder_temp_dist.md)

