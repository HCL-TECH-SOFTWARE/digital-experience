# Working with administration portlets 

Working with the portal administration portlets allows you to customize the administration portlet and its features, such as, defining the number of rows to display in a table.

To work with the portal administration portlets, click the **Administration menu** icon to open the administration menu. The portal displays the navigation for the administration portlets.

Before you use the portal administration portlets, read the concept and background information for administrative tasks. Refer to the appropriate topics in the *Administering* section. For detailed steps for performing portal administrative tasks, refer to the help of each portlet.

You can customize the administration portlets by using the configure mode of the portlet. For example, you can configure features such as the layout of the portlet and the number of rows to display.

## Searching for portal resources in administration portlets

Portal administration portlets that list portal resources, such as pages, portlets, users, or virtual portals, provide a search feature. You can search for resources available in the portlet. You can use an asterisk \( \* \) as a wildcard character for your search. Following is a list of some search types. Their availability differs between portlets. It depends on the portal resource type that the portlet administers.

-   **Title starts with:** Select this option to search on the beginning of a string in the title. This setting is the default setting, and the input is expected in string format.
-   **Title contains:** Select this option to search on a string in the title. The input is expected in string format.
-   **Name starts with:** Select this option to search on the beginning of a string in the name. The input is expected in string format.
-   **Name contains:** Select this option to search on a string in the name. The input is expected in string format.
-   **Keyword starts with:** Select this option to search on the beginning of a keyword. The input is expected in string format.
-   **Keyword contains:** Select this option to search on a keyword. The input is expected in string format.
-   **Description starts with:** Select this option to search on the beginning of a string in the description. The input is expected in string format.
-   **Description contains:** Select this option to search on a string in description. The input is expected in string format.
-   **Unique Name start with:** Select this option to search the beginning of a string in the unique name. The input is expected in string format.
-   **Unique Name contains:** Select this option to search on a string in the unique name. The input is expected in string format.
-   **Markup starts with:** Select this option to search the beginning of a string in the markup type. This search returns a list of pages that support that markup. The input is expected in string format.
-   **Markup contains:** Select this option to search on a string in the markup type. This search returns a list of pages that support that markup. The input is expected in string format.
-   **Label:** Select this option to search on a URL context label. The input is expected in string format.
-   **Attributes:** Select this option to search on a user or group attribute. The input is expected in string format.
-   **Last modified:** Select this option to search by items that were modified on or since a specific date. The input is expected in the format YYYY MM DD.
-   **All available:** Select this option to return a listing of all items. No input is required.

**Notes:**

-   **For title search:**

    By default, searches for **Title starts with** and **Title contains** return only portal resources with titles in the locale of the current portal session. You can configure portal administration portlets to return search results across all supported locales, regardless of the locale of the current portal session or the locale set in the browser. To do this configuration, proceed as follows:

    1.  Access the **Manage Portlets portlet**.
    2.  Locate the administration portlet for which you want to configure search of resources across all locales. To locate, use the search feature that is described earlier.
    3.  Click the **Configure portlet** icon for the portlet.
    4.  Add the parameter searchByTitle.all.locales with the value true.
    5.  Click **Add** and **OK**.
    The default value of the parameter searchByTitle.all.locales is `false`. Searches for portal resources return results only in the locale of the current portal session or the locale set in the browser.

    **Note:** Configuring search across all locales can have an impact on the search performance.

    .

-   **For the Users and Groups portlet:**

    Searching with wild characters, such as the asterisk \( \* \), is only supported for the User and Groups and User and Groups Permissions portlets. Wildcard character searches for the User and Groups and User and Groups Permissions portlets must have the asterisk \( \* \) at the end or beginning of the search parameter. For example, the following searches are supported for the User and Groups and User and Groups Permissions portlets:

    -   \*user
    -   user\*
    -   \*user\*
    The following searches are not supported for the User and Groups and User and Groups Permissions portlets:

    -   us\*r

**Parent topic:**[Portal administration portlets ](../admin-system/adpltadm.md)

