# 14. Creating the user profiler rule

Use the Personalization Editor to create a profiler rule for users who qualify as customers for Gold Offers in the Personalized Offers resource collection.

Before you begin this procedure, ensure that you have modified the resource collection properties to specify the Translator Class.

In the Personalization Editor, follow these steps:

1. Within the Pers Offers folder, click **New > Rule**.

2. Enter the following values:

    1. In the **New Rule** field, type **Pers Offers User Profiler**.

    2. Select **Profiler** in the Rule Type menu.

3. Click **Profile**, type **Gold** in the Profile field, and click **Submit**.

4. Click **attribute** and select **Per_Offers_User** in the drop down, then **Customertype** in the expanded drop down.

5. Click to **value** and select **Gold** in the drop down list.

6. Click **add Profile** to add another conditional expression to the profiler rule.

7. Complete the profiler rule by adding profiles that define distinct sets of users. Each profile expresses the conditions of the user type.

8. Click **Save**.  

## Result

![Pers Offers User Profiler results](./images/Pers_Offers_User_Profiler_results.png)

You can now create some additional advanced rules for your personalized portlet.  
