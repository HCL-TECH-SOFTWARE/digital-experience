# Creating the Personalization user resource classes and content spot

In this topic, you will learn how to use the Project Explorer of IBM Rational Application Developer to create the user resource classes and content spot for the Personalization demo that creates the Personalized Offers portlet for different customer profiles.

1. In the **Project Explorer** tab of the Rational® Application Developer, right-click the **Pers_Offers** project and choose **New > Other**.

2. From the **New** window, select **Portal > Personalization > Content or User Resource**.

3. Click **Next**.

4. Under **Choose a protocol**, click the **SQL** radio button.

5. Under **Create a resource collection that represents:**, click the **Web users** radio button.

6. Click **Next**.


    ![PZNUser data model](./images/pzn_user_data_model_selection.png)  

5. Select **Use an existing connection** and select **pzndemo_db** from the list of existing connections.

   ![PZNUser database settings](./images/RAD_jdbc_settings.png)  

6. Click **Next**. The personalization resource wizard opens.

7. Expand **PZNDEMO**.

8. On the **Tables** tab, highlight **PZN_USER**. Click the appropriate arrow to select the table.

   ![PZNUser table selection](./images/pzn_user_table_selection.png)  

9. Change the display name of **PZN_USER** to **Per_Offers_User** to avoid naming conflicts with the previously installed demo code. You can do this by doing a double click to the Display Name **Pzn_user**. Click the Primary Table to mark it as the primary table.

   ![PZNUser table selection](./images/pzn_user_table_selection2.png)  

10. Select the **Columns** tab

11. On the **Columns** tab, move all of the columns to the selected columns area by clicking the double arrow. Notice the primary key is the column **USERNAME**.  

    ![PZNUser Colum selection](./images/pzn_user_columns_selection.png)  

12. Click the Mappings tab.

13. On the Mappings tab, select **Customertype**.

14. Click the **Edit** button.

15. Add the following Descriptions and values:

    |Description|values|
    |-----------|------|
    |Gold|Gold|
    |Titanium|Titanium|
    |Platinum|Platinum|

    ![PZNUser data mappings](./images/pzn_user_populate_mapping.png)  

    ![PZNUser data mappings result](./images/pzn_user_populate_mapping_2.png)  

16. Click the **Deployment** tab.

17. On the **Deployment** tab, change the datasource to **jdbc/pzndemo**. This datasource is defined in WAS by the Personalization demo program installation.

    ![PZNUser deployment](./images/pzn_user_deployment_jndi.png)

18. Click **Next**.

19. Set the package name as **pers_offers**. Select **Generate a Content Spot for this resource**. Select **Include schema names in the generated Resource Runtime Manager**.

    ![PZNUser resource generation selection](./images/pzn_user_resource_generation.png)

20. Click **Finish**.

You can now see the new java classes in your project.

## Result

![PZNUser result](./images/pznuser_resource_generation_results.png)

Please also review the Per_Offers_User.hrf file to understand the definitions

![Pzn_Offers_hrf](./images/Per_Offers_User_hrf.png)

Congratulations. You have successfully created personalization user resource classes and the content spot.
You can now finish coding the portlet JSP file.
