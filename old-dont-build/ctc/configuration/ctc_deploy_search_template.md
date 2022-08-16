# Enabling anonymous search

For websites that allow anonymous users to view the site, you need to configure search to allow anonymous users to search your site.

1.  Follow these steps to enable search by anonymous users.
2.  Browse to **Administration** \> **Search Administration** \> **Manage Search** and open the Search Scopes section.

3.  Click **New Search Scope**.

4.  Give the search scope a name, such as "Anonymous Search Scope."

5.  In the **Visible to Anonymous Users** section, select **Yes**.

6.  Click **Select Locations**.

7.  In the list of Locations, select **WCM Content Source** and click **OK**.

8.  Browse to **Administration** \> **Access** \> **Resource Permissions** and open **PSE Sources**.

9.  Click **Assign Access** for the DefaultSearchCollection resource.

10. Click **Edit Role** for User.

11. Click **Add**.

12. Select **Anonymous Portal User** and click **OK**.

13. Return to the DefaultSearchCollection resource and click **Apply**.


**Parent topic:**[First-time installation of Content Template](../ctc/ctc_inst_overview.md)

**Parent topic:**[Post upgrade steps](../ctc/ctc-upgrade-post.md)

