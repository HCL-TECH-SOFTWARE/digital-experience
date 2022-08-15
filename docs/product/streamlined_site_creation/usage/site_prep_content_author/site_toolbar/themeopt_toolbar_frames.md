# Configuring display options in the primary and secondary toolbar frames

When you open the site toolbar, Site Manager automatically opens in the primary toolbar frame. You can control what displays in the primary and secondary toolbar frames by setting page parameters on the hidden page Toolbar Content Root.

Specify page parameters by using either the Manage Pages portlet or by using the XML configuration interface.

**Parent topic:**[Preparing the site toolbar](../dev-theme/themeopt_themeshelf.md)

## Edit page parameters by using the Manage Pages portlet

1.  Click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage pages**.

2.  Select **Unique name contains** and search for ibm.portal.toolbar.ContentRoot.

3.  Click the **Edit Page Properties** icon for the page that you just searched for, Toolbar Content Root.

4.  Click **Advanced options**.

5.  Click **I want to set parameters**.

6.  Add, delete, or modify existing page parameters as needed.

7.  Click **OK** to save the content. Click **Cancel** to discard your changes.

8.  Close and reopen the toolbar to implement and view your changes.


## Parameters to configure what displays in the primary and secondary toolbar frames:

-   **ibm.portal.toolbar.defaultTabURI.primary=URI\_to\_toolbar\_page**

    This parameter specifies the URI of the toolbar tab that is automatically opened in the primary toolbar frame. The value needs to be a valid URI that points to a toolbar page. Typically, a navigation model URI is included. For example, `nm:oid:unique\_name\_or\_object\_id\_of\_toolbar\_page`.

    Remove this parameter from Toolbar Content Root if you do not want a toolbar tab to be opened automatically in the primary toolbar frame.

    If you are using the XML configuration interface, set the parameter as follows in Toolbar Content Root:

    ```
    <parameter name="ibm.portal.toolbar.defaultTabURI.primary" type="string"
    update="set">nm:oid:my\_page\_unique\_name</parameter>
    ```

-   **ibm.portal.toolbar.defaultTabURI.secondary=URI\_to\_toolbar\_page**

    This parameter specifies the URI of the toolbar tab that is automatically opened in the secondary toolbar frame. This value must be a valid URI that points to a toolbar page. Typically, a navigation model URI is included. For example, `nm:oid:unique\_name\_or\_object\_id\_of\_toolbar\_page`.

    Remove this parameter from Toolbar Content Root if you do not want a toolbar tab to be opened automatically in the secondary toolbar frame.

    If you are using the XML configuration interface, set the parameter as follows in Toolbar Content Root:

    ```
    <parameter name="ibm.portal.toolbar.defaultTabURI.secondary" type="string"
    update="set">nm:oid:my\_page\_unique\_name</parameter>
    ```


