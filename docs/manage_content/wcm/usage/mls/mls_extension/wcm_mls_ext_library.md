# Library copy portlet extension Multilingual Solution

This extension is used as part of setting up a new locale by copying an existing library, and assigning it a new name and locale.

To use the extension:

1.  Click the **Administration menu** icon. Then, click **Portal Content** \> **ML Library Copy**.
2.  Select a library to copy.
3.  Select a new locale.
4.  Type a new name for the library.
5.  Click **Copy**.

**Note:** The **Portal Site** library cannot be cloned by using the **ML Library Copy** portlet, therefore if your base locale is the **Portal Site** library you must either:

-   Use the [Edit-time navigation creation extension](wcm_mls_ext_nav.md) to manually copy each of your content items in the **Portal Site** library to your localized libraries. This action automatically duplicates the page path as site areas in the destination library.
-   Write some Web Content Manager API code to manually copy the **Portal Site** library by traversing the page hierarchy and creating site areas in the destination library with the same name as the page, then copying the content items by using the Web Content Manager API `Workspace.copy` method.


**Related information**  


[Rolling out a second locale](../ctc/ctc_deploy_locale_second.md)

