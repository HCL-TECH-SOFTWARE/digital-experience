# Create a visibility rule to track your order history

Learn more about the Shared Data application object through an example.

In this example, create a visibility rule that uses your order history as the parameter used in the rule. A user would need to sign in to the site to view a summary of their order history and know the tracking number.

1.  Click **Applications** \> **Personalization** \> **Business Rules**.

2.  From the Personalization Navigator, click **New** \> **Rule**.

3.  For Rule Type, select **Visibility Rule**.

    **Note:** In this example, a parameter is set in an application and read in a Visibility rule. You can also use an Update rule to set your parameter for a Visibility rule to reference.

4.  The numbered screen capture, along with the corresponding table, provides the values and selections that are used in this example. Use these example values and selections to guide you in creating a profiler rule that uses the device class attribute.

    ![Screen capture of a visibility rule in the Personalization Editor](../images/visibility_example.jpg)

    |Numbered item in screen capture|Description|
    |-------------------------------|-----------|
    |1|Type Show Order Tracking as the name for your rule.|
    |2|By Located in, use the default folder to store your rule for this example.|
    |3|For Rule Type, select **Visibility Rule**.|
    |4|Continue to use **Show** in this example to show a page or portlet that is based on the conditions you define in this rule.|
    |5|Click **attribute** \> **Shared Data** \> **Order Number**.**Note:**

    -   Order Number must exist as a parameter to select this option.
    -   If Order Number does not exist, click **attribute** \> **Shared Data** \> **Manage Properties** to create this parameter.
    -   You must know the name of the parameter that the portlet or preprocessor is using to set the value for parameters in Manage Properties.
|
    |6|In this example, continue to use **is** as the comparison operator.|
    |7|In this example, Order Tracking is the parameter that is read by portlets on the site during your session and is used to display targeted content. Click **value \*** to enter 248761 as the value for the condition. Click **Submit**.**Note:** In this example, 248761 is your order number for a recent purchase.

|
    |8|In this example, you are not setting up another condition.|

5.  Click **Save**.

6.  You successfully created your visibility rule. You can add your rule to a page or portlet from the Manage Pages area of your site.

    **Note:** Visibility rules do not hide pages or portlets for anonymous users.

7.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**.

8.  Click **Content Root**.

9.  Go to the page that you want to use your rule.

    For example, you might have a page that is named Orders in the Home area of your site. To locate the Orders page, click **Home** \> **Orders**

10. After you locate your Travel page, follow the instructions for adding your rule to a page or for adding your rule to a specific portlet.

        |**Instructions for adding your rule to a page**|    1.  Click **Edit Page Properties**.
    2.  Expand **Advanced options**.
    3.  Click the arrow by Show or Hide page rule, and click **Select Rule**.
    4.  Select the check box by a rule you want to add to your page. Click **OK**.
    5.  Click **Done**
|
    |**Instructions for adding your rule to a portlet**|    1.  Click **Edit Page Layout**.
    2.  Make sure that Show portlet rule mapping is enabled. When this option is enabled, you see a Hide Portlet Rule Mappings link.
    3.  Click the arrow by **No rule mapped** for a portlet on this page, and click **Select Rule**.
    4.  Select the check box by a rule you want to add to your portlet. Click **OK**.
    5.  Click **Done**.
|


**Parent topic:**[Shared Data application object](../contarget/targeting_shared_data.md)

