# Modifying Content Template page templates 

The page templates in Content Template Catalog are pages that reference microsites in the CTC Content library and can be easily changed. You can customize the page with extra portlets by dropping portlets onto the page. If you want to modify the sample content or remove or add more content, you can edit the content in the microsite. The next time that a page is created from this template, the updated page layout, portlets, and content are copied with the new page.

Note that if the portlets reference content inside the scope of the microsite, they are rerouted to point to the newly copied local instance of that content. However, if the portlet references content that is not contained in the microsite, it continues to point to the original content. You can use such references to create a mixture of local and global content on the page.

**Important:** Back up modified page templates before upgrading or installing a Content Template maintenance release. Do so by exporting the modified page templates before installation and importing them back after installation.

**Parent topic:**[Customizing sites built with Content Template ](../ctc/ctc_design_custom.md)

