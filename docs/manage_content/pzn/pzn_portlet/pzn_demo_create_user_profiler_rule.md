# Create the user profiler rule

Use the Personalization Editor to create a profiler rule for users who qualify as customers for Gold Offers in the Personalized Offers resource collection.

Before you begin this procedure, ensure that you have modified the resource collection properties to specify the Translator Class.

In the Personalization Editor, follow these steps:

1.  Within the Pers Offers folder, click **New** \> **Rule**.

2.  Enter the following values:

    1.  In the **New Rule** field, type Pers Offers User Profiler.

    2.  Select **Profiler** in the Rule Type menu.

3.  Click **Profile**, type **Gold** in the Profile field, and click **Submit**.

4.  Click **attribute** and select **Per\_Offers\_User** in the drop down, then **Customertype** in the expanded drop down.

5.  Click the greater than symbol, **\>**, next to value and select **Gold** in the drop down list.

6.  Click **add Profile** to add another conditional expression to the profiler rule.

7.  Complete the profiler rule by adding profiles that define distinct sets of users. Each profile expresses the conditions of the user type as illustrated in the following example.

    **Note:** Select **No value** for the **Otherwise** field.

8.  Click **Save**.


You can now create some additional advanced rules for your personalized portlet.


**Previous topic:**[Modify resource collection properties](../pzn/pzn_demo_modify_resource_collection_properties.md)

**Next topic:**[Create additional advanced rules](../pzn/pzn_demo_create_additional_advanced_rules.md)


**Previous topic:**[Modify resource collection properties](../pzn/pzn_demo_modify_resource_collection_properties.md)

**Next topic:**[Create additional advanced rules](../pzn/pzn_demo_create_additional_advanced_rules.md)

