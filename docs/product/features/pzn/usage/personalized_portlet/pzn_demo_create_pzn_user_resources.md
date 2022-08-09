# Creating the Personalization user resource classes and content spot

Use the Project Explorer of IBM Rational Application Developer to create the user resource classes and content spot for the Personalization demo that creates the Personalized Offers portlet for different customer profiles.

1.  In the **Project Explorer** tab of Rational® Application Developer, right-click the **Pers\_Offers** project and choose **New** \> **Other**.

2.  From the **New** window, select **Portal** \> **Personalization** \> **Content or User Resource**.

3.  Click **Next**

4.  Select one of the following radio buttons:

    -   **SQL**
    -   **Web users**
5.  Select **Use an existing connection** and select **pzndemo\_db** from the list of existing connections.

6.  Click **Next**. The personalization resource wizard opens.

7.  Expand **PZNDEMO**.

8.  On the **Tables** tab, highlight **PZN\_USER**. Click the appropriate arrow to select the table.

9.  Right-click **PZN\_USER** and select **Edit Table**.

10. Change the display name of **PZN\_USER** to **Per\_Offers\_User** to avoid naming conflicts with the previously installed demo code. Click the Primary Table to mark it as the primary table.

11. Select the **Columns** tab

12. On the **Columns** tab, move all of the columns to the selected columns area by clicking the double arrow. Notice the primary key is the column **USERNAME**.

13. Click the Mappings tab.

14. On the Mappings tab, select **Customertype** and click **Populate**.

15. Click the **Select** buttons and expand **PZNDEMO** \> **PZN\_USER** to select CUSTOMERTYPE for the **Description** and **Value** fields. Click **OK**.

16. Click the **Deployment** tab.

17. On the **Deployment** tab, change the datasource to jdbc/pzndemo. This datasource is defined in WAS by the Personalization demo program installation.

18. Click **Next**.

19. Set the package name as pers\_offers. Select **Generate a Content Spot for this resource**. Select **Include schema names in the generated Resource Runtime Manager**.

20. Click **Finish**.


You can now see the new JAVA classes in your project:

You can now finish coding the portlet JSP file.

**Parent topic:**[Developing a personalized portlet](../pzn/pzn_demooverview.md)

**Previous topic:**[Create the Personalization content resource classes and content spot](../pzn/pzn_demo_create_pzn_content_resources.md)

**Next topic:**[Coding the portlet JSP](../pzn/pzn_demo_finish_coding_portlet_jsp.md)

**Parent topic:**[Developing a personalized portlet](../pzn/pzn_demooverview.md)

**Previous topic:**[Create the Personalization content resource classes and content spot](../pzn/pzn_demo_create_pzn_content_resources.md)

**Next topic:**[Coding the portlet JSP](../pzn/pzn_demo_finish_coding_portlet_jsp.md)

