---
id: h_mport_modify_portlet
title: Modifying portlet settings
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Select the caching method for a portlet; add, edit, or delete a preference or parameter/value pair; or set locale-specific titles and descriptions for a portlet.

**Note:** For standard portlets the term preference is used; for HCL portlets the term parameter is used. The following instructions refer to preferences. If you work with an HCL portlet, replace preference by parameter.

Perform the following steps to modify portlet settings:

1.  Click the **Configure portlet** icon on the appropriate row.

2.  To add a preference:

    1.  Enter the new preference in the **New preference** field.

    2.  Enter the value for the new preference in the **New value** field.

    3.  Click the **Add** button.

        The new preference is shown in the list.

3.  To edit a preference:

    1.  Select **Edit preference** from the appropriate row.

        The portal displays the panel for modifying the preference. The preference fields contain the current values. The preference field is blocked; you can only change the **value** field.

    2.  Enter the new value for the preference in the **value** field.

    3.  Select **OK** to save your changes, or select **Cancel** to quit without saving the changes.

        The portal returns to the panel for configuring the portlet.

4.  To delete a preference:

    1.  Select **Delete** from the appropriate row.

    2.  Select **OK** at the prompt to continue the delete, or select **Cancel** to return without deleting the preference.

5.  To set locale-specific titles and descriptions:

    1.  Select the **I want to set titles and descriptions** link.

    2.  Select the **Edit** pencil icon in the appropriate row for the locale.

    3.  Enter a new title in the **New title** field.

    4.  Enter a description in the **New description** field.

    5.  Click **OK** to save your updates or **Cancel** to quit without saving.

        The portal returns to the panel for configuring the portlet.

6.  Select the caching options.

    The caching options make use of the remote caching feature of the portal. A page and all portlets on the page can contribute their maximum cache timeout so that the browser or proxy caches can cache the complete markup.

    **Notes:**

    1.  These options are only available for standard API portlets.
    2.  As other page elements can also contribute their cache settings, effective settings for a completely rendered page might differ from the ones defined here.
    You can select from two sets of options:

    -   The portlet **Cache scope for HTTP and fragment caches**:
        -   **Non-shared cache for a single user**

            Select this option if you want the portlet output to be cached only in the browser cache, that is the a cache that only a single user can access. Use this option if the portlet output contains information that is only relevant or available to a single user. This is the default setting.

        -   **Share Cache across all users \(not applicable if **cache always expires** option is selected\)**

            Select this option if you want the portlet markup to be cached in a shared cache, typically a proxy server. This means that the portlet markup is not private to a particular user, but other users might see the same portlet output as well.

    -   The portlet **Cache Expiration for HTTP and fragment caches**:
        -   **Portlet cache always expires**

            If you select this option, caching of the portlet output is switched off. No caching takes place, neither in a browser nor a proxy cache. Use this selection for volatile or security sensitive information.

        -   **Portlet cache never expires**

            If you select this option, the cached output is never removed from a cache.

        -   **Portlet cache expires after this many seconds**

            Use this setting to determine how long the markup of this portlet should be valid. Values are typically in the range of a few seconds up to a few days or weeks, depending on how often you expect updates to the content that the portlet displays.

7.  Click **OK** to save your updates or **Cancel** to quit without saving.

    The portal returns to the list of portlets.


When you click the **Configure portlet** icon for a portlet, there is a showbypermission preference that has the following two settings:

-   **Yes**: Displays only first level pages on which a user has Editor roles.
-   **No**: Displays all first level pages on which a user has User roles.

