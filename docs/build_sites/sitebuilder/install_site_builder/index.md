# Installing and removing Site Builder

Site Builder is installed as part of HCL Digital Experience 8.5 CF08 and later installations. See this Content Template Catalog documentation for more information.

The Content Template Catalog \(CTC\) is a set of Web Content Manager assets that accelerate the process of building a website. These assets include a set of Site Builder ready page templates.

!!! note
    In some environments like Red Hat OpenShift, the Config engine is locked and the portal application archive \(PAA\) install to the virtual portal cannot happen.

The following workarounds may be applied:

-   Increase the `dojo.xhr` time-out
-   In the SystemOut.log, find the entire failed `install-paa` command. Run that command from the command line after the failure.
    -   Documentation resource: [Dojo and HCL Digital Experience](https://help.hcltechsw.com/digital-experience/8.5/dev/dojo_overview.html)
    -   Documentation resource: [AJAX and Dojo](https://dojotoolkit.org/reference-guide/1.7/quickstart/ajax.html)

Refer to the following documentation for removing and restoring Site Builder.

<!--
-   **[Removing a previous version of Site Builder](../sitebuilder/sitebuilder_uninst.md)**  
To remove the Site Builder application from the HCL Digital Experience Portal server, run ConfigEngine batch or script files to uninstall the application, then remove its .paa folder and web content library.
-   **[Restoring the original Site Builder Template library](../sitebuilder/sitebuilder_lib_restore.md)**  
Restoring the Site Builder Template library to its original state deletes all changes that are made to templates after Site Builder was installed. -->


