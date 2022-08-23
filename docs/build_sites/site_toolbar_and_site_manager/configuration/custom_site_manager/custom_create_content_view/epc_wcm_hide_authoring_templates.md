# Hiding authoring templates from the Site Manager

By default, all authoring templates can be selected when creating new web content using the Create Content dialog from the Site Manager context menu. You can use a keyword to hide authoring templates from the Site Manager.

-   To hide an authoring template from the **Create Content** dialog, you need to add a keyword to the profile of an authoring template.
-   Before doing so, you must enable profiling for authoring templates: See [Running the profile enablement tool](../wcm/wcm_admin_profile_enable.md) and [Web content authoring options](../wcm/wcm_config_prop_authoring.md) for details.
-   After you have enabled profiling for authoring templates, you are ready to hide authoring templates from the **Create Content** dialog.

1.  Open the applications menu and go to **Content** \> **Web Content Management**.

2.  Open an authoring template in edit mode.

3.  Go to the **Properties** tab and open the **Profiling** section. This must be the **Properties** tab of the authoring template itself, not the **Default Content Properties** tab.

4.  Enter the following text in the keyword field: ibm.portal.toolbar.hiddenTemplate


The authoring template will no longer be able to be selected when creating content by using the Site Manager.

-   **When to hide authoring templates.**

    All the authoring templates that a content author can access are displayed in the **Create Content** dialog. There are certain types of authoring templates that content authors do not need access to when using the **Create Content** dialog. These are examples of the types of authoring templates that should be hidden using the ibm.portal.toolbar.hiddenTemplate keyword:

    -   Authoring templates that are associated with Page Components are not designed to be used with the **Create Content** dialog.
    -   Authoring templates are used to create content items that store configuration parameters.
-   **How to make authoring templates compatible with the **Create Content** dialog.**

    If you want to continue to use an authoring template in the **Create Content** dialog, you can update it to make it compatible:

    -   Ensure that a Workflow is assigned for each authoring template that is visible in Site Manager, or specify that the authoring template does not require a workflow.
    -   If an authoring template has required fields, then select the **Allow templated items to be saved in the first draft stage even if the item fails field validation** option on the workflow. You need to create the content in a project and then enter values for required fields in the draft content before approving it for the next workflow stage.


