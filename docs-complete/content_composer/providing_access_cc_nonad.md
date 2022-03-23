# Providing access to HCL Content Composer for non-Administrator users

This section provides the steps to configure access to HCL Digital Experience 9.5 Content Composer for non-Administrator users.

## Configure access for non-Administrator users

Follow these steps to configure access to HCL Digital Experience 9.5 Content Composer.

1.  Click the **Applications** menu icon. Then click **Administration** \> **Security** \> **Resource Permissions**.
2.  Assign access to the following **Resource Types**: **Pages**, **Portlets**, and **Virtual Resources**.
    -   **Pages**
        1.  Click **Pages** \> **Content Root** \> **Practitioner Studio** \> **Web Content**.
        2.  Click the **Assign Access** icon by the Content Composer.
        3.  Select the role and click the **Edit Role** icon to assign a group or user.
        4.  Click **Add**.
        5.  Search for a group or user then select them from the search results.
        6.  Click **OK**.
    -   **Portlets**
        1.  Go back to the **Resource Types** list.
        2.  Click **Portlets**.
        3.  Search for **Content Composer Portlet**.
        4.  Click the **Assign Access** icon.
        5.  Select the role and click the **Edit Role** icon to assign a group or user.
        6.  Click **Add**.
        7.  Search for a group or user then select them from the search results.
        8.  Click **OK**.
    -   **Virtual Resources**
        1.  Go back to the **Resource Types** list.
        2.  Click **Virtual Resources**.
        3.  Search for **WCM REST SERVICE**.
        4.  Click the **Assign Access** icon.
        5.  Select the role and click the **Edit Role** icon to assign a group or user.

            **Note:** You need at least an Editor Role to view all the libraries in Content Composer.

        6.  Click **Add**.
        7.  Search for a group or user then select them from the search results.
        8.  Click **OK**.
3.  Set up **Library Access**.
    1.  Click the **Applications** menu icon. Then click **Web Content** \> **Web Content Libraries**.
    2.  Select a library \(for example, **Web Content**\).
    3.  Set permissions for the Web Content library.
        1.  Click the **Set Permissions** icon for the Web Content Library.
        2.  Click the **Edit Role** icon for the Editor role.
        3.  Click **Add**.
        4.  Search for a group or user then select them from the search results.
        5.  Click **OK**.

## HCL Digital Experience Solution Feedback

HCL Digital Experience is interested in your experience and feedback working with HCL Digital Experience 9.5 release software. To offer comments or issues on your findings, please access the [HCL Digital Experience 9.5 Feedback Reporting application](https://www.hclleap.com/apps/secure/org/app/158bbc7c-f357-4ef0-8023-654dd90780d4/launch/index.html?form=F_Form1).

**Parent topic:**[Configure access \| HCL Content Composer](../content_composer/configure_access.md)

