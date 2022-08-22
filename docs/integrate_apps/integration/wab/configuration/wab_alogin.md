# Configuring the Web Application Bridge for anonymous login

You can map your web application bridge to allow anonymous users to log on and access information.

1.  Complete the following steps to set the HCL Digital Experience security:

    1.  Log in to the WebSphere® Integrated Solutions Console.

    2.  Go to **Applications** \> **Application Types** \> **WebSphere enterprise applications**.

    3.  Select **wp.vwat.servlet.ear**.

    4.  Select **Security role to user/group mapping**.

    5.  Select **All Role** check box.

    6.  Select **Everyone** from the **Map Special Subjects** menu.

    7.  Click **OK**.

    8.  Save your changes.

    9.  Go to **Security** \> **Global Security** \> **Web and SIP Security**.

    10. Click **General Settings**.

    11. Select the **Use available authentication data when an unprotected URI is accessed** check box.

    12. Click **OK**.

    13. Save your changes.

    14. Log out of the WebSphere Integrated Solutions Console.

    15. Restart HCL Digital Experience.

2.  Log on to HCL Digital Experience.

3.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**.

4.  Click **Content Root** \> **Home**.

5.  Click **New page** and create a page for your web application. For this example, the new page is called TestPage.

6.  Complete the following steps to give the page anonymous user access:

    1.  Click the **Administration menu** icon. Then, click **Access** \> **Resource Permissions**.

    2.  Select **Pages** as the resource type.

    3.  Locate the page that you created.

        For example, go to **Resource Type** \> **Pages** \> **Content Root** \> **Home** \> **TestPage**.

    4.  Select **Assign access**.

    5.  Click **Edit Role** corresponding to the user.

    6.  Click **Add**.

    7.  Select **Anonymous Portal User**.

    8.  Click **Apply**.

7.  Complete the following steps to give the web dock application anonymous user access:

    **Note:** Configure anonymous user access for each web dock application that you create.

    1.  Click the **Administration menu** icon. Then, click **Access** \> **Resource Permissions**.

    2.  Select **Portlets** as the resource type.

    3.  Locate the web dock application.

    4.  Select **Assign access**.

    5.  Click **Edit Role** corresponding to the user.

    6.  Click **Add**.

    7.  Select **Anonymous Portal User**.

    8.  Click **Apply**.

8.  Add the web dock application to the page.

    **Tip:** To get the web dock application to render on a page, the page must either have the **Web Dock** profile or a profile that includes the wp\_webdock module. Edit the page properties and change the profile or add the wp\_webdock module to the profile applied to the page:

    Starting with CF03, the Web Dock profile no longer exists. If you are using the Resource Aggregator for Portlets, no additional steps are necessary. If you are not using the Resource Aggregator for Portlets, add the **wp\_webdock** module to an existing profile on your page.

    1.  Connect to the theme repository with the fs-type1 connection.
    2.  Go to your theme.
    3.  Open the profile file in the /profiles directory.
    4.  Make a copy of the profile file and give it a unique name.
    5.  Edit the .json file and add the **wp\_webdock** module ID.
    6.  Copy the profile that you created to the /profiles directory.
    7.  Invalidate the resource aggregator cache to integrate your changes. Click the **Administration menu** icon in the toolbar. Then, click **Theme Analyzer** \> **Utilities** \> **Control Center** \> **Invalidate cache**. Auto invalidation recognizes your changes automatically for WebDAV based themes. No further action is required. For more information, see [Utilities](../dev-theme/themeopt_an_util.md#).


