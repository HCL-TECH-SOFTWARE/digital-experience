# Manual Step: Refreshing the search collection

The Modify Site URLs for Search Engine Optimization option in the Configuration Wizard includes manual steps. For reference only, you can see the details of the manual step for refreshing the search collection.

**Attention:** All steps for all database environments are included without consideration for your environment. Use the Configuration Wizard to generate custom instructions for your environment.

1.  Manual step: Refresh your search collection and regather documents.

    1.  Log on to HCL DX as the administrator.
    2.  To open the Manage Search portlet, open the administration menu. Then, click **Search Administration** **\>** **Manage Search**.
    3.  Click **Search Collections**.
    4.  Click the search collection that you want to update. For example: **Default Search Collection**.
    5.  Start the HCL DX crawler content source for each collection:
        -   If the documents are not stored in the search collection but a schedule is defined for the crawler, the crawler automatically runs at the scheduled time. You can also start the crawler manually.
        -   If the documents are already collected, select **Regather documents** to update the documents with the new context root information.
    6.  Click **Collections from All Services** in the breadcrumb trail and select the next search collection to modify.

