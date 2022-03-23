# How to use source control 

The source control for Content Template Catalog contains all the code artifacts \(plug-ins, text providers, context providers, JSPs\), portal artifacts \(theme and layout files, exports of pages, page templates, and portlets\), and HCL Web Content Manager artifacts \(exported libraries\).

-   For the non-code artifacts, such as pages, page templates, portlets, and libraries, an export script was used to extract these from a "master" development server.
-   To export libraries, the ConfigEngine "export-wcm-data" target was used. Each of the libraries is kept in source control as a zip file.
-   To export pages, page templates and portlets, XMLAccess was used.
-   With everything checked into source control, a build script was then run regularly to build a PAA file that can be used to deploy Content Template on a test server.

**Parent topic:**[Development processes ](../ctc/ctc_deploy_dev.md)

