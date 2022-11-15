# Create the Personalization content resource classes and content spot

View the steps to create the Personalization content resource classes and content spot using IBM Rational Application Developer.

1.  In the Project Explorer tab in Rational® Application Developer, right-click on the Pers\_Offers project and choose **New** \> **Other**.

2.  From the New window, select **Portal** \> **Personalization** \> **Content or User Resource**.

3.  Click **Next**.

4.  Select the following options by clicking the appropriate radio button:

    1.  **SQL**

    2.  **Web Content**

5.  Select **Create a new connection** and click **Next**.

6.  Enter the following values:

    1.  From the **JDBC driver** drop-down list, select **Derby Embedded JDBC Driver**.

    2.  From the **Database location** field, click **Browse**. Navigate to and select `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/derby/pzndemo_db/`

    3.  From the **Class location** field, click **Browse**. Navigate to and select `[AppServer\_root](../reference/wpsdirstr.md#was_root)/derby/lib/derby.jar`

7.  Click **Next**.

    The personalization resource wizard opens.

8.  Expand PZNDEMO.

9.  On the **Tables** tab, select **PZN\_OFFERS**, and click the arrow to add the table to the list of selected tables. Click **Primary Table** to mark it as the primary table.

10. Select the **Columns** tab.

11. On the **Columns** tab, move all columns to the selected columns list by clicking the double arrow button. Notice the primary key is the column Offer\_ID.

12. Click the **Mappings** tab.

13. On the **Mappings** tab, select **Customertype** and click **Populate**.

14. Click the **Select** buttons and expand **PZNDEMO** \> **PZN\_OFFERS** to select CUSTOMERTYPE for the **Description** and **Value** fields. Click **OK**.

15. Click the **Deployment** tab.

16. On the **Deployment** tab, change the datasource to jdbc/pzndemo. This datasource is defined in WAS by the Personalization demo program installation.

17. Click **Next**.

18. Set the package name as pers\_offers. Select **Generate a Content Spot for this resource**. Select **Include schema names** in the generated Resource Runtime Manager.

19. Click **Finish**.


You can now see the new JAVA classes in your project:

You can now see the new JAVA classes in your project, and create the Personalization user resource classes and content spot.


**Previous topic:**[Create the JSP file in Rational Application Developer](../pzn/pzn_demo_create_jsp_rad.md)

**Next topic:**[Creating the Personalization user resource classes and content spot](../pzn/pzn_demo_create_pzn_user_resources.md)


**Previous topic:**[Create the JSP file in Rational Application Developer](../pzn/pzn_demo_create_jsp_rad.md)

**Next topic:**[Creating the Personalization user resource classes and content spot](../pzn/pzn_demo_create_pzn_user_resources.md)

