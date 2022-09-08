---
id: sitebuilder_learn_lib_req
title: Required libraries in Site Builder
---


Required libraries contain supporting assets that are referenced by page templates that are used in your site or section template.

If you plan to export the template to another virtual portal, you must select libraries that contain supporting assets. You can add any content library that is available on the server if the library is not hidden by the administrator.

-   You cannot add the Portal Site library as a required library. The restriction prevents you from overwriting another portal content library if the site template is exported.
-   When you install Content Template Catalog, the default site templates use required libraries that come with HCL Digital Experience and Content Template. They are hidden to prevent you from importing them to another server and overwriting the installed libraries.
-   Make sure that the required library does not exist on the target server if you plan to import a site template.

    Importing can fail if the required library exists on the server where you are importing.


