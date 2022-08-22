# Troubleshooting issues with Site Builder

Find solutions to problems when you use Site Builder in the latest version of HCL Digital Experience.

-   **A new template does not appear in the list of templates to choose from.**

    -   **Problem:**

        There can be no other site template with the same template name on the same server. If there is a conflict, the new template does not appear in the list. This issue can happen when a site template with the same name was created on another server and then moved to the server you are working on.

    -   **Resolution:**

        Export the site template by using a unique name.

-   **A user cannot assign group access to a new site.**

    -   **Problem:**

        To assign a group to use or administer a site, the site creator must be assigned delegator access to that group in advance.

    -   **Resolution:**

        To assign delegator access for a group, log in to the portal as an administrator. Click **Administration**. In the navigation tree, click **Access** \> **Resource Permissions**. Click **User Groups**. Search for the group that needs access to a new site. For the Delegator role, click the **Edit Role** icon. Search for and then add the delegator user. Click **OK**. Click **Apply**.

-   **You cannot see content on a newly created site.**

    -   **Problem:**

        No access controls are set on an existing library during site creation. They are only set on a new library.

    -   **Resolution:**

        If you cannot see content on a newly created site, you must assign access manually.

-   **The unique name the user sets on any page that is created by Site Builder is not set after site creation.**

    -   **Symptom:**

        A line similar to this example is in the Portal SystemOut logs:

        ```
        00000055 SitePublisher W The unique name [Internet Site] cannot be assigned to the page title[My Page] because it is a duplicate. It is already assigned to the resource with object ID[Internet Site ( STATICPAGE , [ObjectIDImpl 'Z6_J8H2GHS0J87TF0A0G5DBJR8M15', CONTENT_NODE, VP: 0, [Domain: rel], DB: 0000-1345012307139DFE8002B0B43537B2A1] )]
        ```

    -   **Problem:**

        Two objects in HCL Portal cannot have the same unique name. The unique name of page being created with Site Builder is not set if another object exists with the same unique name. The unique name is skipped and site creation continues as normal.

    -   **Resolution:**

        Change the unique name of the page in question to something unique or manually edit the page after creation and update its unique name.

-   **Site or section template fails to import**

    -   **Problem:**

        Using the Import Template feature on the Site Builder main page, a site or section template can fail to import in certain circumstances. Site Builder indicates that the import succeeded but the template does not appear in the list of templates on the Site Builder main page. This issue can occur when the template was originally exported from a Windows™ based HCL Portal server and is now being imported into a HCL Portal server not on Windows™.

    -   **Solution:**

        This issue can be resolved by extracting the files from the template paa zip file and rezipping it, ensuring the file extension of this new file is .paa. Importing the .paa file can now succeed. The compression that is used for this new paa file must use the normal zip algorithm. For example, export a template that is named my site template. This would normally generate an exported template paa file called my\_site\_template.paa. This paa file would contain a folder that is called my\_site\_template. This is the name of the template but with space characters replaced with underscore characters. You must extract this folder and its contents to your file system, then zip up the extracted folder into a new .paa file that uses the normal zip algorithm.

-   **Site or section template fails to import**

    -   **Problem:**

        Using the Import Template feature and the export feature on the Site Builder main page on HCL Portal 8.0.0.1 CF09 or higher, a site or section template can fail to import or export in certain circumstances. When the import is attempted an error message "Could not import the template. The solution installer import of the PAA file failed. Review the server logs for more information." appears. When an export is attempted a paa file of less that 1 KByte is downloaded. When the server logs are checked, an error message "PaaFactory.getPaaInput user myuser has insufficient rights to create a PAA" and "PaaFactory.getPaa user myuser has insufficient rights to create a PAA" is seen.

    -   **Solution:**

        Check that the user that is trying to import or export the template has the correct roles as described in the topic [Setting up Site Builder administrators](sitebuilder_access_admins.md). Give them the required roles if they are meant to be able to import and export site and section template.


**Parent topic:**[Site Builder](../sitebuilder/sitebuilder_intro.md)

