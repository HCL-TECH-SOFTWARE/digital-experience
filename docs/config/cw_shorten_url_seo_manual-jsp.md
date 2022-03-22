# Manual Step: Change the JSP components in the Web Resources v70 Library

The Modify Site URLs for Search Engine Optimization option in the Configuration Wizard includes manual steps. For reference only, you can see the details of the manual step for changing the JSP components in the Web Resources v70 Library. To view this step in the Configuration Wizard, you must select Yes to using an HCL Web Content Manager when you provide information about your environment.

**Attention:** All steps for all database environments are included without consideration for your environment. Use the Configuration Wizard to generate custom instructions for your environment.

1.  Stand-alone version of changing JSP component step
2.  Manual step: Change the JSP components in the Web Resources v70 Library.

    1.  Log on to HCL Portal.
    2.  Go to **Applications** **\>** **Content** **\>** **Web Content Authoring**.
    3.  Under **Preferences**, select **Edit Shared Settings**.
    4.  Under **Library Selection**, add **Web Resources v70** to the **Selected Libraries** list.
    5.  Click **OK**.
    6.  Under **Item Views**, select **All Items** **\>** **All** **\>** **Components** **\>** **JSP**.
    7.  Select every **JSP component** from the Web Resources v70 library and then click **Edit**.
    8.  Update the **Path** field for every JSP component with the new context root path.
    -   The JSP path includes two parts, which are separated by a semi-colon. The first part is the context path to the HCL Web Content Manager extensions web application and then the second part is the path to the JSP. Update the path to the web application.
    -   For example, the other path might be: /wcmextension;/jsp/html/general/UpdateItem.jsp. If you changed the context root to mynewcontext, change the old path to /mynewcontext/wcmextension;/jsp/html/general/UpdateItem.jsp.
3.  Cluster environment version of changing JSP component step
4.  Manual step: Change the JSP components in the Web Resources v70 Library.

    **Note:** In a clustered environment, complete these steps on the primary node only.

    1.  Log on to HCL Portal.
    2.  Go to **Applications** **\>** **Content** **\>** **Web Content Authoring**.
    3.  Under **Preferences**, select **Edit Shared Settings**.
    4.  Under **Library Selection**, add **Web Resources v70** to the **Selected Libraries** list.
    5.  Click **OK**.
    6.  Under **Item Views**, select **All Items** **\>** **All** **\>** **Components** **\>** **JSP**.
    7.  Select every **JSP component** from the Web Resources v70 library and then click **Edit**.
    8.  Update the **Path** field for every JSP component with the new context root path.
    -   The JSP path includes two parts, which are separated by a semi-colon. The first part is the context path to the HCL Web Content Manager extensions web application and then the second part is the path to the JSP. Update the path to the web application.
    -   For example, the other path might be: /wcmextension;/jsp/html/general/UpdateItem.jsp. If you changed the context root to mynewcontext, change the old path to /mynewcontext/wcmextension;/jsp/html/general/UpdateItem.jsp.

