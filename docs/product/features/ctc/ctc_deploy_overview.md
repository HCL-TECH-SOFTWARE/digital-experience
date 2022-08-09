# How to deploy sites built with Content Template

The templates in Content Template Catalog help you build a site, with all the necessary content types, templates, and components. Use these templates as a base for your site and then customize it to place the site into the business context of an organization.

This approach requires setting the appropriate caching, workflows, access control, and categorization for your, or your client’s, business. You must also integrate the site search capability, either by using the built-in search capabilities of HCL Digital Experience or by using another search system that has been adopted as the corporate standard.

Existing HCL Portal and HCL Web Content Manager documentation covers these areas, but you can use specific strategies that work well with the patterns employed in Content Template.

-   **[Performance optimization for sites based on Content Template Catalog](../ctc/ctc_deploy_perf.md)**  
All of the usual guidance for optimizing HCL Portal and HCL Web Content Manager applies to a Content Template Catalog site. You should familiarize yourself with the options available. Apply all of the tuning and optimization that is recommended in the documentation, including changing appropriate JVM settings, DynaCache settings for HCL Web Content Manager internal caching, and database tuning.
-   **[Inline editing for Content Template pages](../ctc/ctc_deploy_inline.md)**  
Inline editing is a feature that allows users with edit access to a content item to edit that item from within the web page itself instead of using the authoring portlet. This feature is only available when displaying content by using a web content viewer portlet. Content Template Catalog templates are designed to allow inline editing for most content.
-   **[Access control for the Content Template](../ctc/ctc_deploy_access.md)**  
The Content Template Catalog libraries have built-in access control, but you can refine the access further to differentiate between different types of users.
-   **[Workflow for Content Template pages](../ctc/ctc_deploy_workflow.md)**  
All of the templates in Content Template Catalog set the workflow for items to a single workflow. You can modify this workflow or use one of the following strategies to integrate your own workflows.
-   **[Development processes](../ctc/ctc_deploy_dev.md)**  
In addition to being a package of ready-to-use templates, Content Template Catalog also embodies a new pattern for site development that is based around page templates and microsites.

**Parent topic:**[Content Template Catalog 4.4](../ctc/ctc_intro.md)

