# Creating the Personalization content resource classes and content spot

In this topic, you will learn how to create the Personalization content resource classes and content spot using the IBM Rational Application Developer.

1. In the Project Explorer tab of the Rational® Application Developer, right-click on the **Pers_Offers** project and choose **New > Other**.

2. From the **New** window, select **Portal > Personalization > Content or User Resource**.

3. Click **Next**.

4. Under **Choose a protocol**, click the **SQL** radio button.

5. Under **Create a resource collection that represents:**, click the **Web content** radio button.

6. Click **Next**.


    ![PZNDemo data model selection](./images/pzn_offers_data_model_selection.png)  

5. Select **Create a new connection** and click **Next**.

6. Enter the following values:

    1. From the **JDBC driver** drop-down list, select **Derby Embedded JDBC Driver**.

    2. From the **Database location** field, click **Browse** and select ``<wp_profile_root>/PortalServer/derby/pzndemo_db/.``

    3. From the **Class location** field, click **Browse** and select ``<AppServer_root>/derby/lib/derby.jar``.

       ![PZNDemo Database Settings](./images/RAD_jdbc_settings.png)  

7. Click **Next**. This will open the Personalization Resource wizard.


8. Under the Tables tab, expand the PZNDEMO dropdown list.

9. Select **PZN_OFFERS**, and click **>** to add the table to the list of selected tables. 

10. Click **Primary Table** to mark **PZN_OFFERS** as the primary table.

    ![PZNDemo table selection](./images/pzn_offers_table_selection.png)  


11. Under the **Columns** tab, click **>>** to move all columns to the selected columns list. Note that the primary key is the column **Offer_ID**.  

    ![PZNOffers columns selection](./images/pzn_offers_columns_selection.png)  



12. Under the **Mappings** tab, select **Customertype** and click **Edit**.

15. Add the following **Descriptions** and **values**:

    |Description|values|
    |-----------|------|
    |Gold|Gold|
    |Titanium|Titanium|
    |Platinum|Platinum|

    ![PZNOffers mappings](./images/pzn_offers_populate_mapping.png)  

    **Final mappings:**  

    ![PZNOffers mappings](./images/pzn_user_populate_mapping_final.png)  


16. Under the **Deployment** tab, change the datasource to **jdbc/pzndemo**. This datasource is defined in WAS by the Personalization demo program installation.

    ![PZNOffers JNDI settings](./images/pzn_offers_deployment_jndi.png)  

18. Click **Next**.

19. Enter **pers_offers** as the package name.

20. Tick the following checkboxes:
    1. Generate a Content Spot for this resource
    2. Include schema names in the generated Resource Runtime Manager

    ![PZNOffers Resource Generation](./images/pzn_offers_resource_generation.png)  

20. Click **Finish**.  

You can now see the new java classes in your project.  

## Result

![PZNOffers Resource Generation result](./images/pznoffers_resource_generation_results.png)  

Please also review the Pzn_Offers.hrf file to understand the definitions

![Pzn_Offers_hrf](./images/Pzn_Offers_hrf_definitions.png)

Congratulations. You have successfully create the Personalization user resource classes and content spot.
