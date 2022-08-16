# Testing and deploying

A copy of the production content libraries would be installed in test environments, and then used as test data during a development project. This allows a thorough testing of the deployment of the full package of changes, including HCL Web Content Manager assets, before deploying to the production environment.

To install the libraries, they are extracted and then imported into the target server by using the ConfigEngine "import-wcm-data" target. To import the pages, page templates and portlets, XMLAccess was used.

Unlike using syndication, this is a testable and repeatable process. This allows you to get everything tested and fixed before installing a new design library, or new or updated templates, into production.

**Parent topic:**[Development processes](../ctc/ctc_deploy_dev.md)

