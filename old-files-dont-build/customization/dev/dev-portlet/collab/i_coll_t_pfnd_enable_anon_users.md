# Enabling People Finder for anonymous users

If you grant access to anonymous users for any page that contains the People Finder portlet, you must also grant them access to a hidden page, and to a dynamic person tag portlet that support awareness in People Finder. In addition, you must enable session use for anonymous users.

Perform the following steps:

1.  Log in to the portal as an Administrator.

2.  Click the **Administration menu** icon. Then, click **Access** \> **Resource Permissions**.

3.  In the **Resource Types** list, click **Pages**.

4.  Use Search to locate the page in your site where you added the **People Finder** portlet.

5.  Click the key icon under **Assign Access**.

6.  For the role User, click the pencil icon, and then click**Add**.

7.  Select **Anonymous Portal User**, and then click **OK** as necessary to save the change.

8.  Use Search to locate the **People Finder** portlet.

9.  Repeat steps 6 - 8 to assign access for the portlet.

10. Click **Logout**.

11. Set the following property in the `WP NavigatorService` from the WebSphere® Integrated Solutions Console. For more information, see the topic on setting configuration properties, and the Navigator Service section in the topic on Portal configuration services.

    ```
    public.session = true
    ```

12. Add the anonymous portal user to the user role on the USERS Virtual Resource:

    1.  Click the **Administration menu** icon. Then, click **Access** \> **Resource Permissions**.

    2.  Under Resources Types, select **Virtual Resources**, locate **USERS** in the Resources list and then click the **Assign Access** icon.

    3.  For the User role, click the **Edit Role** \(pencil\) icon.

    4.  Click **Add**, then select **Anonymous Portal User** and click **OK** to save the change.


**Parent topic:**[People Finder](../collab/i_coll_r_porcc_pfnd.md)

**Related information**  


[Setting service configuration properties](../admin-system/adsetcfg.md)

