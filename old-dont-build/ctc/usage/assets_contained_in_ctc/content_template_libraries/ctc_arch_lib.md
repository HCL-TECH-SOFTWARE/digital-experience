# Content Template libraries

The HCL Web Content Manager assets for Content Template Catalog are split into the CTC Content, CTC Process, and CTC Design libraries. The demonstration site uses its own CTC Demo library.

To explore the Content Template libraries after installation, log in as an administrator and open the Web Content Management authoring portlet. Under Preferences, click **Edit Shared Settings**. In the Library Selection, select and add the CTC libraries from the Available Libraries list to the Selected Libraries list. Click **OK**. The CTC libraries now appear in the Library Explorer.

The following image demonstrates how you can customize the sample content, categories, and workflows for the templates in the CTC Content and CTC Process libraries and save them separately to avoid losing your changes when you install a new version of Content Template.

![This picture shows that you can save modified and custom page templates as Portal pages.](../images/OverallStructure_small.jpg)

You should save modified and custom content in new libraries, not in the CTC libraries. The CTC libraries are overwritten during upgrade, and so therefore should not be modified.

Additionally, you should save modified and custom content in separate libraries.

-   You should save modified content in a separate content library.
-   You should save modified authoring and presentation templates, as well as other components in a separate design library.
-   You should save custom categories and workflow in a separate process library.

-   **[CTC Content library](../ctc/ctc_arch_lib_cont.md)**  
The CTC Content library contains the microsites associated with the page templates. It also contains the content that is used in all of the pre-configured portlets, plus seed content that is used to populate new sections of a site created by using Content Template page templates.
-   **[CTC Demo library](../ctc/ctc_arch_lib_demo.md)**  
The CTC Demo library contains the components for the Content Template Catalog demonstration site.
-   **[CTC Design library](../ctc/ctc_arch_lib_design.md)**  
The CTC Design library contains all the design assets of CTC: authoring templates, presentation templates, and components.
-   **[CTC Process library](../ctc/ctc_arch_lib_proc.md)**  
The CTC Process library contains categories and workflows. To match your organization's profiling and change management strategies, you must modify and add categories and workflows.


